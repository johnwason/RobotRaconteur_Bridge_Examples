(function (globals) {
    "use strict";

    Bridge.define('iRobotCreateBridgeClient.App', {
        statics: {
            webcam_host: null,
            webcam: null,
            webcam_pipe: null,
            webcam_pipe_ep: null,
            canvas: null,
            ctx: null,
            imageData: null,
            imageBytes: null,
            create: null,
            config: {
                init: function () {
                    Bridge.ready(this.main);
                }
            },
            main: function () {
                document.getElementById("ConnectWebcam").onclick = $_.iRobotCreateBridgeClient.App.f1;
                document.getElementById("DisconnectWebcam").onclick = $_.iRobotCreateBridgeClient.App.f2;
                document.getElementById("ConnectCreate").onclick = $_.iRobotCreateBridgeClient.App.f3;
                document.getElementById("DisconnectCreate").onclick = $_.iRobotCreateBridgeClient.App.f4;
                document.getElementById("stop").onclick = $_.iRobotCreateBridgeClient.App.f5;
                document.getElementById("reverse").onclick = $_.iRobotCreateBridgeClient.App.f6;
                document.getElementById("forward").onclick = $_.iRobotCreateBridgeClient.App.f7;
                document.getElementById("spinleft").onclick = $_.iRobotCreateBridgeClient.App.f8;
                document.getElementById("spinright").onclick = $_.iRobotCreateBridgeClient.App.f9;
    
                iRobotCreateBridgeClient.App.updateGamepadCheckbox();
    
                window.addEventListener("gamepadconnected", $_.iRobotCreateBridgeClient.App.f10);
                window.addEventListener("gamepaddisconnected", $_.iRobotCreateBridgeClient.App.f10);
                window.setInterval(iRobotCreateBridgeClient.App.updateGamepad, 100);
    
            },
            connectWebcam: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $task3, 
                    $taskResult3, 
                    $jumpFromFinally, 
                    $returnValue, 
                    webcam_url, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = Bridge.Array.min([1,2,3,4,5,6], $step);
                                switch ($step) {
    
                                    case 1: {
                                        webcam_url = document.getElementById("WebcamUrl").value;
                                        $task1 = RobotRaconteur.RobotRaconteurNode.gets().connectService(webcam_url);
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        iRobotCreateBridgeClient.App.webcam_host = $taskResult1;
                                        $task2 = iRobotCreateBridgeClient.App.webcam_host.get_Webcams(0);
                                        $step = 3;
                                        $task2.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 3: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        iRobotCreateBridgeClient.App.webcam = $taskResult2;
                                        iRobotCreateBridgeClient.App.webcam_pipe = iRobotCreateBridgeClient.App.webcam.FrameStream;
                                        $task3 = iRobotCreateBridgeClient.App.webcam_pipe.connect(-1);
                                        $step = 4;
                                        $task3.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 4: {
                                        $taskResult3 = $task3.getAwaitedResult();
                                        iRobotCreateBridgeClient.App.webcam_pipe_ep = $taskResult3;
                                        iRobotCreateBridgeClient.App.webcam_pipe_ep.addPacketReceivedEvent(iRobotCreateBridgeClient.App.webcamPacketReceived);
                                        document.getElementById("WebcamLogin").style.display = "none";
                                        document.getElementById("WebcamDisplay").style.display = "block";
                                        
                                        document.getElementById("StartStreaming").onclick = ($_.iRobotCreateBridgeClient.App.f11);
                                        
                                        document.getElementById("StopStreaming").onclick = ($_.iRobotCreateBridgeClient.App.f12);
                                        $step = 6;
                                        continue;
                                    }
                                    case 5: {
                                        window.alert("Error: Could not connect to Webcam");
                                        $step = 6;
                                        continue;
                                    }
                                    case 6: {
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = Bridge.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 4 ){
                                $step = 5;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);
    
                $asyncBody();
            },
            disconnectWebcam: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3], $step);
                            switch ($step) {
                                case 0: {
                                    document.getElementById("WebcamLogin").style.display = "block";
                                    document.getElementById("WebcamDisplay").style.display = "none";
                                    
                                    
                                    if (iRobotCreateBridgeClient.App.webcam_host != null) {
                                        $step = 1;
                                        continue;
                                    } 
                                    $step = 3;
                                    continue;
                                }
                                case 1: {
                                    $task1 = RobotRaconteur.RobotRaconteurNode.gets().disconnectService(iRobotCreateBridgeClient.App.webcam_host);
                                    $step = 2;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 2: {
                                    $task1.getAwaitedResult();
                                    iRobotCreateBridgeClient.App.webcam_host = null;
                                    iRobotCreateBridgeClient.App.webcam = null;
                                    iRobotCreateBridgeClient.App.webcam_pipe = null;
                                    iRobotCreateBridgeClient.App.webcam_pipe_ep = null;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);
    
                $asyncBody();
            },
            webcamPacketReceived: function (e) {
                var f = null;
                while (e.getAvailable() > 0) {
                    f = e.receivePacket();
                }
                if (f != null) {
                    iRobotCreateBridgeClient.App.showFrame(f);
                }
            },
            showFrame: function (image) {
                if (iRobotCreateBridgeClient.App.canvas == null) {
                    iRobotCreateBridgeClient.App.canvas = document.getElementById("image");
                    iRobotCreateBridgeClient.App.ctx = iRobotCreateBridgeClient.App.canvas.getContext("2d");
                }
    
                if (iRobotCreateBridgeClient.App.imageData == null) {
                    iRobotCreateBridgeClient.App.imageData = iRobotCreateBridgeClient.App.ctx.createImageData(image.width, image.height);
                    iRobotCreateBridgeClient.App.imageBytes = iRobotCreateBridgeClient.App.imageData.data;
                }
    
                if (!Bridge.referenceEquals(iRobotCreateBridgeClient.App.imageData.width, image.width) || !Bridge.referenceEquals(iRobotCreateBridgeClient.App.imageData.height, image.height)) {
                    iRobotCreateBridgeClient.App.imageData = iRobotCreateBridgeClient.App.ctx.createImageData(image.width, image.height);
                    iRobotCreateBridgeClient.App.imageBytes = iRobotCreateBridgeClient.App.imageData.data;
                }
    
                for (var y = 0; y < image.height; y = (y + 1) | 0) {
                    for (var x = 0; x < image.width; x = (x + 1) | 0) {
                        var index1 = ((x + image.width * y) * 4) | 0;
                        var index2 = (((x * 3) | 0) + image.step * y);
                        iRobotCreateBridgeClient.App.imageBytes[index1] = image.data[((index2 + 2) | 0)];
                        iRobotCreateBridgeClient.App.imageBytes[((index1 + 1) | 0)] = image.data[((index2 + 1) | 0)];
                        iRobotCreateBridgeClient.App.imageBytes[((index1 + 2) | 0)] = image.data[index2];
                        iRobotCreateBridgeClient.App.imageBytes[((index1 + 3) | 0)] = 255;
                    }
                }
    
                iRobotCreateBridgeClient.App.ctx.putImageData(iRobotCreateBridgeClient.App.imageData, 0, 0);
            },
            connectCreate: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    create_url, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = Bridge.Array.min([1,2,3,4], $step);
                                switch ($step) {
    
                                    case 1: {
                                        create_url = document.getElementById("CreateUrl").value;
                                        $task1 = RobotRaconteur.RobotRaconteurNode.gets().connectService(create_url);
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        iRobotCreateBridgeClient.App.create = $taskResult1;
                                        document.getElementById("CreateLogin").style.display = "none";
                                        document.getElementById("CreateDisplay").style.display = "block";
                                        iRobotCreateBridgeClient.App.updateGamepadCheckbox();
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        window.alert("Error: Could not connect to Create");
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = Bridge.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 2 ){
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);
    
                $asyncBody();
            },
            disconnectCreate: function () {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3], $step);
                            switch ($step) {
                                case 0: {
                                    if (iRobotCreateBridgeClient.App.create != null) {
                                        $step = 1;
                                        continue;
                                    } 
                                    $step = 3;
                                    continue;
                                }
                                case 1: {
                                    $task1 = RobotRaconteur.RobotRaconteurNode.gets().disconnectService(iRobotCreateBridgeClient.App.create);
                                    $step = 2;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 2: {
                                    $task1.getAwaitedResult();
                                    iRobotCreateBridgeClient.App.create = null;
                                    document.getElementById("CreateLogin").style.display = "block";
                                    document.getElementById("CreateDisplay").style.display = "none";
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);
    
                $asyncBody();
            },
            drive: function (velocity, radius) {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = iRobotCreateBridgeClient.App.create.Drive(velocity, radius);
                                    $step = 1;
                                    $task1.continueWith($asyncBody, true);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    return;
                                }
                                default: {
                                    return;
                                }
                            }
                        }
                    }, arguments);
    
                $asyncBody();
            },
            updateGamepadCheckbox: function () {
                if (iRobotCreateBridgeClient.App.create == null) {
                    return;
                }
    
                var checkbox = document.getElementById("enablegamepad");
                var w = window.navigator;
                var gp = w.getGamepads()[0];
                if (!Bridge.referenceEquals(gp, undefined)) {
                    checkbox.disabled = false;
                }
                else  {
                    checkbox.disabled = true;
                    checkbox.checked = false;
                }
    
            },
            updateGamepad: function () {
                if (iRobotCreateBridgeClient.App.create == null) {
                    return;
                }
    
                var checkbox = document.getElementById("enablegamepad");
                if (checkbox.checked) {
                    var pos = document.getElementById("pos");
                    var w1 = window.navigator;
                    var gp1 = w1.getGamepads()[0];
                    var x = Bridge.cast(gp1.axes[0], Bridge.Double);
                    var y = -Bridge.cast(gp1.axes[1], Bridge.Double);
    
    
    
                    if (Math.abs(x) < 0.2) {
                        x = 0;
                    }
                    else  {
                        x = (Math.abs(x) - 0.2) / 0.8 * Bridge.Int.sign(x);
                    }
    
                    if (Math.abs(y) < 0.2) {
                        y = 0;
                    }
                    else  {
                        y = (Math.abs(y) - 0.2) / 0.8 * Bridge.Int.sign(y);
                    }
    
                    var speed = 0;
                    var radius = 32767;
    
                    if (y === 0) {
                        if (x < 0 && x !== 0) {
                            radius = 1;
                        }
    
                        if (x > 0 && x !== 0) {
                            radius = -1;
                        }
                        if (x !== 0) {
                            speed = Bridge.Int.clip16(Math.abs(x) * 200.0);
                        }
                    }
                    else  {
                        speed = Bridge.Int.clip16(y * 200.0);
                        if (x !== 0) {
                            radius = Bridge.Int.clip16(-(1 - Math.abs(x)) * 5000.0 * Bridge.Int.sign(x));
                            if (radius === 0) {
                                radius = Bridge.Int.sxs(((((-Bridge.Int.sign(x)) | 0))) & 65535);
                            }
    
                        }
    
                    }
    
                    iRobotCreateBridgeClient.App.drive(speed, radius);
                }
    
            }
        }
    });
    
    var $_ = {};
    
    Bridge.ns("iRobotCreateBridgeClient.App", $_)
    
    Bridge.apply($_.iRobotCreateBridgeClient.App, {
        f1: function (x) {
            iRobotCreateBridgeClient.App.connectWebcam();
        },
        f2: function (x) {
            iRobotCreateBridgeClient.App.disconnectWebcam();
        },
        f3: function (x) {
            iRobotCreateBridgeClient.App.connectCreate();
        },
        f4: function (x) {
            iRobotCreateBridgeClient.App.disconnectCreate();
        },
        f5: function (x) {
            iRobotCreateBridgeClient.App.drive(0, 32767);
        },
        f6: function (x) {
            iRobotCreateBridgeClient.App.drive(-200, 32767);
        },
        f7: function (x) {
            iRobotCreateBridgeClient.App.drive(200, 32767);
        },
        f8: function (x) {
            iRobotCreateBridgeClient.App.drive(200, 1);
        },
        f9: function (x) {
            iRobotCreateBridgeClient.App.drive(200, -1);
        },
        f10: function (e) {
            iRobotCreateBridgeClient.App.updateGamepadCheckbox();
        },
        f11: function (e) {
            iRobotCreateBridgeClient.App.webcam.StartStreaming();
        },
        f12: function (e) {
            iRobotCreateBridgeClient.App.webcam.StopStreaming();
        }
    });
    
    Bridge.init();
})(this);
