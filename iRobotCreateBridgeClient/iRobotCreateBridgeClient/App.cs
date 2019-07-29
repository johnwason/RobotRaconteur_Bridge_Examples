using Bridge;
using Bridge.Html5;
using RobotRaconteurWeb;
using System;
using experimental.create2;
using experimental.createwebcam2;

namespace iRobotCreateBridgeClient
{
    public class App
    {

        static WebcamHost webcam_host = null;
        static Webcam webcam = null;
        static Pipe<WebcamImage> webcam_pipe = null;
        static Pipe<WebcamImage>.PipeEndpoint webcam_pipe_ep;

        [Ready]
        public static void Main()
        {
            RobotRaconteurNode.s.RegisterServiceType(new experimental__create2Factory());
            RobotRaconteurNode.s.RegisterServiceType(new experimental__createwebcam2Factory());

            Document.GetElementById<HTMLButtonElement>("ConnectWebcam").OnClick = x => ConnectWebcam();
            Document.GetElementById<HTMLButtonElement>("DisconnectWebcam").OnClick = x => DisconnectWebcam();
            Document.GetElementById<HTMLButtonElement>("ConnectCreate").OnClick = x => ConnectCreate();
            Document.GetElementById<HTMLButtonElement>("DisconnectCreate").OnClick = x => DisconnectCreate();
            Document.GetElementById<HTMLButtonElement>("stop").OnClick = x => Drive(0, 32767);
            Document.GetElementById<HTMLButtonElement>("reverse").OnClick = x => Drive(-200, 32767);
            Document.GetElementById<HTMLButtonElement>("forward").OnClick = x => Drive(200, 32767);
            Document.GetElementById<HTMLButtonElement>("spinleft").OnClick = x => Drive(200, 1);
            Document.GetElementById<HTMLButtonElement>("spinright").OnClick = x => Drive(200, -1);

            UpdateGamepadCheckbox();

            Window.AddEventListener(EventType.GamepadConnected, e => UpdateGamepadCheckbox());
            Window.AddEventListener(EventType.GamepadDisconnected, e => UpdateGamepadCheckbox());
            Window.SetInterval(UpdateGamepad, 100);

        }

        public static async void ConnectWebcam()
        {
            try
            {
                string webcam_url = Document.GetElementById<HTMLInputElement>("WebcamUrl").Value;
                webcam_host = (WebcamHost)await RobotRaconteurNode.s.ConnectService(webcam_url);
                webcam = await webcam_host.get_Webcams(0);
                webcam_pipe = webcam.FrameStream;
                webcam_pipe_ep = await webcam_pipe.Connect(-1);
                webcam_pipe_ep.PacketReceivedEvent += WebcamPacketReceived;
                Document.GetElementById<HTMLDivElement>("WebcamLogin").Style.Display = Display.None;
                Document.GetElementById<HTMLDivElement>("WebcamDisplay").Style.Display = Display.Block;

                Document.GetElementById<HTMLButtonElement>("StartStreaming").OnClick = (delegate (MouseEvent<HTMLButtonElement> e)
                {
                    webcam.StartStreaming();
                });

                Document.GetElementById<HTMLButtonElement>("StopStreaming").OnClick = (delegate (MouseEvent<HTMLButtonElement> e)
                {
                    webcam.StopStreaming();
                });
            }
            catch
            {
                Window.Alert("Error: Could not connect to Webcam");
            }

        }

        public static async void DisconnectWebcam()
        {
            Document.GetElementById<HTMLDivElement>("WebcamLogin").Style.Display = Display.Block;
            Document.GetElementById<HTMLDivElement>("WebcamDisplay").Style.Display = Display.None;


            if (webcam_host!=null)
            {
                await RobotRaconteurNode.s.DisconnectService(webcam_host);
                webcam_host = null;
                webcam = null;
                webcam_pipe = null;
                webcam_pipe_ep = null;
            }
        }

        private static void WebcamPacketReceived(Pipe<WebcamImage>.PipeEndpoint e)
        {
            WebcamImage f = null;
            while (e.Available > 0)
            {
                f = e.ReceivePacket();
            }
            if (f != null)
            {
                ShowFrame(f);
            }
        }
        static HTMLCanvasElement canvas = null;
        static CanvasRenderingContext2D ctx = null;
        static ImageData imageData = null;
        static Uint8ClampedArray imageBytes = null;

        public static void ShowFrame(WebcamImage image)
        {
            if (canvas == null)
            {
                canvas = Document.GetElementById<HTMLCanvasElement>("image");
                ctx = canvas.GetContext(CanvasTypes.CanvasContext2DType.CanvasRenderingContext2D);
            }

            if (imageData == null)
            {
                imageData = ctx.CreateImageData(image.width, image.height);
                imageBytes = imageData.Data;
            }

            if (imageData.Width != image.width || imageData.Height != image.height)
            {
                imageData = ctx.CreateImageData(image.width, image.height);
                imageBytes = imageData.Data;
            }

            for (int y = 0; y < image.height; y++)
            {
                for (int x = 0; x < image.width; x++)
                {
                    int index1 = (x + image.width * y) * 4;
                    int index2 = (x * 3 + image.step * y);
                    imageBytes[index1] = image.data[index2 + 2];
                    imageBytes[index1 + 1] = image.data[index2 + 1];
                    imageBytes[index1 + 2] = image.data[index2];
                    imageBytes[index1 + 3] = 255;
                }
            }

            ctx.PutImageData(imageData, 0, 0);
        }

        static Create create = null;

        public static async void ConnectCreate()
        {
            try
            {
                string create_url = Document.GetElementById<HTMLInputElement>("CreateUrl").Value;
                create = (Create)await RobotRaconteurNode.s.ConnectService(create_url);
                Document.GetElementById<HTMLDivElement>("CreateLogin").Style.Display = Display.None;
                Document.GetElementById<HTMLDivElement>("CreateDisplay").Style.Display = Display.Block;
                UpdateGamepadCheckbox();
            }
            catch
            {
                Window.Alert("Error: Could not connect to Create");
            }
        }

        public static async void DisconnectCreate()
        {
            if (create!=null)
            {
                await RobotRaconteurNode.s.DisconnectService(create);
                create = null;
                Document.GetElementById<HTMLDivElement>("CreateLogin").Style.Display = Display.Block;
                Document.GetElementById<HTMLDivElement>("CreateDisplay").Style.Display = Display.None;

            }
        }

        static async void Drive(short velocity, short radius)
        {
            await create.Drive(velocity, radius);
        }

        public static void UpdateGamepadCheckbox()
        {
            if (create == null) return;

            var checkbox = Document.GetElementById<HTMLInputElement>("enablegamepad");
            var w = Window.Navigator.GetGamepads();            
            if (w.Length > 1)
            {
                checkbox.Disabled = false;
            }
            else
            {
                checkbox.Disabled = true;
                checkbox.Checked = false;
            }

        }

        public static void UpdateGamepad()
        {
            if (create == null) return;

            var checkbox = Document.GetElementById<HTMLInputElement>("enablegamepad");
            if (checkbox.Checked)
            {
                var pos = Document.GetElementById<HTMLDivElement>("pos");
                var gp = Window.Navigator.GetGamepads();
                var gp1 = gp[2]; 
                if (gp1 == null) return;
                double x = (double)gp1.Axes[0];
                double y = -(double)gp1.Axes[1];


                if (Math.Abs(x) < .2)
                {
                    x = 0;
                }
                else
                {
                    x = (Math.Abs(x) - .2) / .8 * Math.Sign(x);
                }

                if (Math.Abs(y) < .2)
                {
                    y = 0;
                }
                else
                {
                    y = (Math.Abs(y) - .2) / .8 * Math.Sign(y);
                }

                short speed = 0;
                short radius = 32767;

                if (y == 0)
                {
                    if (x < 0 && x != 0)
                    {
                        radius = 1;
                    }

                    if (x > 0 && x != 0)
                    {
                        radius = -1;
                    }
                    if (x != 0)
                    {
                        speed = (short)(Math.Abs(x) * 200.0);
                    }
                }
                else
                {
                    speed = (short)(y * 200.0);
                    if (x != 0)
                    {
                        radius = (short)(-(1 - Math.Abs(x)) * 5000.0 * Math.Sign(x));
                        if (radius == 0)
                            radius = (short)(-Math.Sign(x));

                    }

                }

                Drive(speed, radius);
            }

        }

    }
}