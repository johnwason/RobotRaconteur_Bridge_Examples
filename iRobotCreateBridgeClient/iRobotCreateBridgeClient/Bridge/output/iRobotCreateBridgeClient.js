/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 17.9.0
 */
Bridge.assembly("iRobotCreateBridgeClient", function ($asm, globals) {
    "use strict";

    Bridge.define("experimental.create2.Create", {
        $kind: "interface"
    });

    Bridge.define("experimental.create2.Create_skel", {
        inherits: [RobotRaconteurWeb.ServiceSkel],
        fields: {
            obj: null,
            rr_packets: null,
            rr_InitPipeServersRun: false
        },
        ctors: {
            init: function () {
                this.rr_InitPipeServersRun = false;
            },
            ctor: function (p, o, c) {
                this.$initialize();
                RobotRaconteurWeb.ServiceSkel.ctor.call(this, p, o, c);
                this.obj = o;
            }
        },
        methods: {
            ReleaseCastObject: function () { },
            CallGetProperty: function (m) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $task3, 
                    $taskResult3, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    mr, 
                    ret, 
                    ret1, 
                    ret2, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6,7,8], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetRes, ename);
                                        if (ename === "DistanceTraveled") {
                                            $step = 1;
                                            continue;
                                        }
                                        else if (ename === "AngleTraveled") {
                                            $step = 3;
                                            continue;
                                        }
                                        else if (ename === "Bumpers") {
                                            $step = 5;
                                            continue;
                                        }
                                        else  {
                                            $step = 7;
                                            continue;
                                        }
                                        $step = 8;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$create2$Create$get_DistanceTraveled(void 0);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        ret = $taskResult1;
                                        mr.AddElement(RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "value", ret));
                                        $step = 8;
                                        continue;
                                    }
                                    case 3: {
                                        $task2 = this.obj.experimental$create2$Create$get_AngleTraveled(void 0);
                                        $step = 4;
                                        if ($task2.isCompleted()) {
                                            continue;
                                        }
                                        $task2.continue($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        ret1 = $taskResult2;
                                        mr.AddElement(RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "value", ret1));
                                        $step = 8;
                                        continue;
                                    }
                                    case 5: {
                                        $task3 = this.obj.experimental$create2$Create$get_Bumpers(void 0);
                                        $step = 6;
                                        if ($task3.isCompleted()) {
                                            continue;
                                        }
                                        $task3.continue($asyncBody);
                                        return;
                                    }
                                    case 6: {
                                        $taskResult3 = $task3.getAwaitedResult();
                                        ret2 = $taskResult3;
                                        mr.AddElement(RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Byte, "value", ret2));
                                        $step = 8;
                                        continue;
                                    }
                                    case 7: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 8: {
                                        $tcs.setResult(mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallSetProperty: function (m) {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $task3, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    me, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6,7,8], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        me = m.FindElement("value");
                                        mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetRes, ename);
                                        if (ename === "DistanceTraveled") {
                                            $step = 1;
                                            continue;
                                        }
                                        else if (ename === "AngleTraveled") {
                                            $step = 3;
                                            continue;
                                        }
                                        else if (ename === "Bumpers") {
                                            $step = 5;
                                            continue;
                                        }
                                        else  {
                                            $step = 7;
                                            continue;
                                        }
                                        $step = 8;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$create2$Create$set_DistanceTraveled((RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, me)), void 0);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        $step = 8;
                                        continue;
                                    }
                                    case 3: {
                                        $task2 = this.obj.experimental$create2$Create$set_AngleTraveled((RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, me)), void 0);
                                        $step = 4;
                                        if ($task2.isCompleted()) {
                                            continue;
                                        }
                                        $task2.continue($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $task2.getAwaitedResult();
                                        $step = 8;
                                        continue;
                                    }
                                    case 5: {
                                        $task3 = this.obj.experimental$create2$Create$set_Bumpers((RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Byte, me)), void 0);
                                        $step = 6;
                                        if ($task3.isCompleted()) {
                                            continue;
                                        }
                                        $task3.continue($asyncBody);
                                        return;
                                    }
                                    case 6: {
                                        $task3.getAwaitedResult();
                                        $step = 8;
                                        continue;
                                    }
                                    case 7: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 8: {
                                        $tcs.setResult(mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallFunction: function (rr_m) {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $task3, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_ename, 
                    rr_mr, 
                    velocity, 
                    radius, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6,7,8], $step);
                                switch ($step) {
                                    case 0: {
                                        rr_ename = rr_m.MemberName;
                                        rr_mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallRes, rr_ename);
                                        if (rr_ename === "Drive") {
                                            $step = 1;
                                            continue;
                                        }
                                        else if (rr_ename === "StartStreaming") {
                                            $step = 3;
                                            continue;
                                        }
                                        else if (rr_ename === "StopStreaming") {
                                            $step = 5;
                                            continue;
                                        }
                                        else  {
                                            $step = 7;
                                            continue;
                                        }
                                        $step = 8;
                                        continue;
                                    }
                                    case 1: {
                                        velocity = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int16, RobotRaconteurWeb.MessageElementUtil.FindElement(rr_m, "velocity")));
                                        radius = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int16, RobotRaconteurWeb.MessageElementUtil.FindElement(rr_m, "radius")));
                                        $task1 = this.obj.experimental$create2$Create$Drive(velocity, radius, Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        rr_mr.AddElement$1("return", Bridge.box(0, System.Int32));
                                        $step = 8;
                                        continue;
                                    }
                                    case 3: {
                                        $task2 = this.obj.experimental$create2$Create$StartStreaming(Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 4;
                                        if ($task2.isCompleted()) {
                                            continue;
                                        }
                                        $task2.continue($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $task2.getAwaitedResult();
                                        rr_mr.AddElement$1("return", Bridge.box(0, System.Int32));
                                        $step = 8;
                                        continue;
                                    }
                                    case 5: {
                                        $task3 = this.obj.experimental$create2$Create$StopStreaming(Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 6;
                                        if ($task3.isCompleted()) {
                                            continue;
                                        }
                                        $task3.continue($asyncBody);
                                        return;
                                    }
                                    case 6: {
                                        $task3.getAwaitedResult();
                                        rr_mr.AddElement$1("return", Bridge.box(0, System.Int32));
                                        $step = 8;
                                        continue;
                                    }
                                    case 7: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 8: {
                                        $tcs.setResult(rr_mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            GetSubObj$1: function (name, ind) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        switch (name) {
                                            default: 
                                                break;
                                        }
                                        throw new RobotRaconteurWeb.MemberNotFoundException("");
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            RegisterEvents: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.create2.Create);
                this.obj.experimental$create2$Create$addBump(Bridge.fn.cacheBind(this, this.rr_Bump));
            },
            UnregisterEvents: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.create2.Create);
                this.obj.experimental$create2$Create$removeBump(Bridge.fn.cacheBind(this, this.rr_Bump));
            },
            rr_Bump: function () {
                var rr_mm = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.EventReq, "Bump");
                this.SendEvent(rr_mm);
            },
            GetCallbackFunction: function (rr_endpoint, rr_membername) {
                switch (rr_membername) {
                    case "play_callback": 
                        {
                            return Bridge.fn.bind(this, function (DistanceTraveled, AngleTraveled, rr_cancel) {
                                var $step = 0,
                                    $task1, 
                                    $taskResult1, 
                                    $jumpFromFinally, 
                                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                                    $returnValue, 
                                    rr_mm, 
                                    rr_mr, 
                                    rr_me, 
                                    $async_e, 
                                    $asyncBody = Bridge.fn.bind(this, function () {
                                        try {
                                            for (;;) {
                                                $step = System.Array.min([0,1], $step);
                                                switch ($step) {
                                                    case 0: {
                                                        rr_mm = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.CallbackCallReq, "play_callback");
                                                        rr_mm.ServicePath = this.m_ServicePath;
                                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(rr_mm, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "DistanceTraveled", DistanceTraveled));
                                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(rr_mm, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "AngleTraveled", AngleTraveled));
                                                        $task1 = this.RRContext.ProcessCallbackRequest(rr_mm, rr_endpoint, rr_cancel);
                                                        $step = 1;
                                                        if ($task1.isCompleted()) {
                                                            continue;
                                                        }
                                                        $task1.continue($asyncBody);
                                                        return;
                                                    }
                                                    case 1: {
                                                        $taskResult1 = $task1.getAwaitedResult();
                                                        rr_mr = $taskResult1;
                                                        rr_me = rr_mr.FindElement("return");
                                                        $tcs.setResult(RobotRaconteurWeb.MessageElementUtil.UnpackArray(System.Byte, rr_me));
                                                        return;
                                                    }
                                                    default: {
                                                        $tcs.setResult(null);
                                                        return;
                                                    }
                                                }
                                            }
                                        } catch($async_e1) {
                                            $async_e = System.Exception.create($async_e1);
                                            $tcs.setException($async_e);
                                        }
                                    }, arguments);

                                $asyncBody();
                                return $tcs.task;
                            });
                        }
                    default: 
                        break;
                }
                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
            },
            InitPipeServers: function (o) {
                if (this.rr_InitPipeServersRun) {
                    return;
                }
                this.rr_InitPipeServersRun = true;
                var castobj = Bridge.cast(o, experimental.create2.Create);
                this.rr_packets = new (RobotRaconteurWeb.WireServer$1(experimental.create2.SensorPacket))("packets", this);
                castobj.experimental$create2$Create$packets = this.rr_packets;
            },
            InitCallbackServers: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.create2.Create);
                this.obj.experimental$create2$Create$play_callback = new (RobotRaconteurWeb.CallbackServer$1(Function))("play_callback", this);
            },
            CallPipeFunction: function (m, e) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        switch (ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallWireFunction: function (m, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        if (ename === "packets") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.rr_packets.WireCommand(m, e);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                        return;
                                    }
                                    case 3: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 4: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchPipeMessage: function (m, e) {
                switch (m.MemberName) {
                    default: 
                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                }
            },
            DispatchWireMessage: function (m, e) {
                switch (m.MemberName) {
                    case "packets": 
                        this.rr_packets.WirePacketReceived(m, e);
                        break;
                    default: 
                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                }
            },
            CallMemoryFunction: function (m, e) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        switch (ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        }
    });

    Bridge.define("experimental.create2.experimental__create2Constants");

    Bridge.define("experimental.create2.experimental__create2Constants.Create", {
        $kind: "nested class",
        statics: {
            fields: {
                DRIVE_STRAIGHT: 0,
                SPIN_CLOCKWISE: 0,
                SPIN_COUNTERCLOCKWISE: 0
            },
            ctors: {
                init: function () {
                    this.DRIVE_STRAIGHT = 32767;
                    this.SPIN_CLOCKWISE = -1;
                    this.SPIN_COUNTERCLOCKWISE = 1;
                }
            }
        }
    });

    Bridge.define("experimental.create2.experimental__create2Factory", {
        inherits: [RobotRaconteurWeb.ServiceFactory],
        fields: {
            SensorPacket_stubentry: null
        },
        ctors: {
            ctor: function (node, context) {
                if (node === void 0) { node = null; }
                if (context === void 0) { context = null; }

                this.$initialize();
                RobotRaconteurWeb.ServiceFactory.ctor.call(this, node, context);
                this.SensorPacket_stubentry = new experimental.create2.SensorPacket_stub(this, this.node, this.context);
            }
        },
        methods: {
            DefString: function () {
                var s = "\n#Service to provide sample interface to the iRobot Create\nservice experimental.create2\n\nstdver 0.9\n\nstruct SensorPacket\nfield uint8 ID\nfield uint8[] Data\nend\n\nobject Create\nconstant int16 DRIVE_STRAIGHT 32767\nconstant int16 SPIN_CLOCKWISE -1\nconstant int16 SPIN_COUNTERCLOCKWISE 1\n\nfunction void Drive(int16 velocity, int16 radius)\n\nfunction void StartStreaming()\nfunction void StopStreaming()\n\nproperty int32 DistanceTraveled [readonly]\nproperty int32 AngleTraveled [readonly]\nproperty uint8 Bumpers [readonly]\n\nevent Bump()\n\nwire SensorPacket packets [readonly]\n\ncallback uint8[] play_callback(int32 DistanceTraveled, int32 AngleTraveled)\nend\n\n";
                return s;
            },
            GetServiceName: function () {
                return "experimental.create2";
            },
            FindStructureStub: function (objecttype) {
                if (Bridge.referenceEquals(objecttype, "SensorPacket")) {
                    return this.SensorPacket_stubentry;
                }
                throw new RobotRaconteurWeb.DataTypeException("Cannot find appropriate structure stub");
            },
            FindPodStub: function (objecttype) {
                throw new RobotRaconteurWeb.DataTypeException("Cannot find appropriate pod stub");
            },
            FindNamedArrayStub: function (objecttype) {
                throw new RobotRaconteurWeb.DataTypeException("Cannot find appropriate pod stub");
            },
            CreateStub: function (objecttype, path, context) {
                var objshort = { };
                if (this.CompareNamespace(objecttype, objshort)) {
                    switch (objshort.v) {
                        case "Create": 
                            return new experimental.create2.Create_stub(path, context);
                        default: 
                            break;
                    }
                } else {
                    return RobotRaconteurWeb.ServiceFactory.prototype.CreateStub.call(this, objecttype, path, context);
                }
                throw new RobotRaconteurWeb.ServiceException("Could not create stub");
            },
            CreateSkel: function (path, obj, context) {
                var objtype = RobotRaconteurWeb.ServiceDefinitionUtil.FindObjectRRType(obj);
                var objshort = { };
                if (this.CompareNamespace(objtype, objshort)) {
                    switch (objshort.v) {
                        case "Create": 
                            return new experimental.create2.Create_skel(path, Bridge.cast(obj, experimental.create2.Create), context);
                        default: 
                            break;
                    }
                } else {
                    return RobotRaconteurWeb.ServiceFactory.prototype.CreateSkel.call(this, path, obj, context);
                }
                throw new RobotRaconteurWeb.ServiceException("Could not create skel");
            },
            DownCastException: function (rr_exp) {
                if (rr_exp == null) {
                    return rr_exp;
                }
                var rr_type = rr_exp.error;
                if (!System.String.contains(rr_type,".")) {
                    return rr_exp;
                }
                var rr_stype = { };
                if (this.CompareNamespace(rr_type, rr_stype)) {
                } else {
                    return RobotRaconteurWeb.ServiceFactory.prototype.DownCastException.call(this, rr_exp);
                }
                return rr_exp;
            }
        }
    });

    Bridge.define("experimental.create2.RRExtensions");

    Bridge.define("experimental.create2.SensorPacket", {
        fields: {
            ID: 0,
            Data: null
        }
    });

    Bridge.define("experimental.create2.SensorPacket_stub", {
        inherits: [RobotRaconteurWeb.IStructureStub],
        fields: {
            def: null,
            rr_node: null,
            rr_context: null
        },
        alias: [
            "PackStructure", "RobotRaconteurWeb$IStructureStub$PackStructure",
            "UnpackStructure", "RobotRaconteurWeb$IStructureStub$UnpackStructure"
        ],
        ctors: {
            ctor: function (d, node, context) {
                this.$initialize();
                this.def = d;
                this.rr_node = node;
                this.rr_context = context;
            }
        },
        methods: {
            PackStructure: function (s1) {
                var m = new (System.Collections.Generic.List$1(RobotRaconteurWeb.MessageElement)).ctor();
                if (s1 == null) {
                    return null;
                }
                var s = Bridge.cast(s1, experimental.create2.SensorPacket);
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Byte, "ID", s.ID));
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackArray(System.Byte, "Data", s.Data));
                return new RobotRaconteurWeb.MessageElementStructure("experimental.create2.SensorPacket", m);
            },
            UnpackStructure: function (T, m) {
                if (m == null) {
                    return Bridge.getDefaultValue(T);
                }
                var s = new experimental.create2.SensorPacket();
                s.ID = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Byte, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "ID")));
                s.Data = RobotRaconteurWeb.MessageElementUtil.UnpackArray(System.Byte, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "Data"));
                var st;
                try {
                    st = Bridge.cast(Bridge.unbox(s, T), T);
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new RobotRaconteurWeb.DataTypeMismatchException("Wrong structuretype");
                    } else {
                        throw $e1;
                    }
                }
                return st;
            }
        }
    });

    Bridge.define("experimental.createwebcam2.experimental__createwebcam2Factory", {
        inherits: [RobotRaconteurWeb.ServiceFactory],
        fields: {
            WebcamImage_stubentry: null,
            WebcamImage_size_stubentry: null
        },
        ctors: {
            ctor: function (node, context) {
                if (node === void 0) { node = null; }
                if (context === void 0) { context = null; }

                this.$initialize();
                RobotRaconteurWeb.ServiceFactory.ctor.call(this, node, context);
                this.WebcamImage_stubentry = new experimental.createwebcam2.WebcamImage_stub(this, this.node, this.context);
                this.WebcamImage_size_stubentry = new experimental.createwebcam2.WebcamImage_size_stub(this, this.node, this.context);
            }
        },
        methods: {
            DefString: function () {
                var s = "#Service to provide sample interface to webcams\nservice experimental.createwebcam2\n\nstdver 0.9\n\nstruct WebcamImage\nfield int32 width\nfield int32 height\nfield int32 step\nfield uint8[] data\nend\n\nstruct WebcamImage_size\nfield int32 width\nfield int32 height\nfield int32 step\nend\n\nobject Webcam\nproperty string Name [readonly]\nfunction WebcamImage CaptureFrame()\n\nfunction void StartStreaming()\nfunction void StopStreaming()\npipe WebcamImage FrameStream [readonly]\n\nfunction WebcamImage_size CaptureFrameToBuffer()\nmemory uint8[] buffer [readonly]\nmemory uint8[*] multidimbuffer [readonly]\n\nend\n\nobject WebcamHost\nproperty string{int32} WebcamNames [readonly]\nobjref Webcam{int32} Webcams\nend\n";
                return s;
            },
            GetServiceName: function () {
                return "experimental.createwebcam2";
            },
            FindStructureStub: function (objecttype) {
                if (Bridge.referenceEquals(objecttype, "WebcamImage")) {
                    return this.WebcamImage_stubentry;
                }
                if (Bridge.referenceEquals(objecttype, "WebcamImage_size")) {
                    return this.WebcamImage_size_stubentry;
                }
                throw new RobotRaconteurWeb.DataTypeException("Cannot find appropriate structure stub");
            },
            FindPodStub: function (objecttype) {
                throw new RobotRaconteurWeb.DataTypeException("Cannot find appropriate pod stub");
            },
            FindNamedArrayStub: function (objecttype) {
                throw new RobotRaconteurWeb.DataTypeException("Cannot find appropriate pod stub");
            },
            CreateStub: function (objecttype, path, context) {
                var objshort = { };
                if (this.CompareNamespace(objecttype, objshort)) {
                    switch (objshort.v) {
                        case "Webcam": 
                            return new experimental.createwebcam2.Webcam_stub(path, context);
                        case "WebcamHost": 
                            return new experimental.createwebcam2.WebcamHost_stub(path, context);
                        default: 
                            break;
                    }
                } else {
                    return RobotRaconteurWeb.ServiceFactory.prototype.CreateStub.call(this, objecttype, path, context);
                }
                throw new RobotRaconteurWeb.ServiceException("Could not create stub");
            },
            CreateSkel: function (path, obj, context) {
                var objtype = RobotRaconteurWeb.ServiceDefinitionUtil.FindObjectRRType(obj);
                var objshort = { };
                if (this.CompareNamespace(objtype, objshort)) {
                    switch (objshort.v) {
                        case "Webcam": 
                            return new experimental.createwebcam2.Webcam_skel(path, Bridge.cast(obj, experimental.createwebcam2.Webcam), context);
                        case "WebcamHost": 
                            return new experimental.createwebcam2.WebcamHost_skel(path, Bridge.cast(obj, experimental.createwebcam2.WebcamHost), context);
                        default: 
                            break;
                    }
                } else {
                    return RobotRaconteurWeb.ServiceFactory.prototype.CreateSkel.call(this, path, obj, context);
                }
                throw new RobotRaconteurWeb.ServiceException("Could not create skel");
            },
            DownCastException: function (rr_exp) {
                if (rr_exp == null) {
                    return rr_exp;
                }
                var rr_type = rr_exp.error;
                if (!System.String.contains(rr_type,".")) {
                    return rr_exp;
                }
                var rr_stype = { };
                if (this.CompareNamespace(rr_type, rr_stype)) {
                } else {
                    return RobotRaconteurWeb.ServiceFactory.prototype.DownCastException.call(this, rr_exp);
                }
                return rr_exp;
            }
        }
    });

    Bridge.define("experimental.createwebcam2.RRExtensions");

    Bridge.define("experimental.createwebcam2.Webcam", {
        $kind: "interface"
    });

    Bridge.define("experimental.createwebcam2.Webcam_skel", {
        inherits: [RobotRaconteurWeb.ServiceSkel],
        fields: {
            obj: null,
            rr_FrameStream: null,
            rr_InitPipeServersRun: false
        },
        ctors: {
            init: function () {
                this.rr_InitPipeServersRun = false;
            },
            ctor: function (p, o, c) {
                this.$initialize();
                RobotRaconteurWeb.ServiceSkel.ctor.call(this, p, o, c);
                this.obj = o;
            }
        },
        methods: {
            ReleaseCastObject: function () { },
            CallGetProperty: function (m) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    mr, 
                    ret, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetRes, ename);
                                        if (ename === "Name") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$createwebcam2$Webcam$get_Name(void 0);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        ret = $taskResult1;
                                        mr.AddElement(RobotRaconteurWeb.MessageElementUtil.PackString("value", ret));
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 4: {
                                        $tcs.setResult(mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallSetProperty: function (m) {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    me, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        me = m.FindElement("value");
                                        mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetRes, ename);
                                        if (ename === "Name") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$createwebcam2$Webcam$set_Name(RobotRaconteurWeb.MessageElementUtil.UnpackString(me), void 0);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 4: {
                                        $tcs.setResult(mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallFunction: function (rr_m) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $task3, 
                    $task4, 
                    $taskResult4, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_ename, 
                    rr_mr, 
                    rr_ret, 
                    rr_ret1, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6,7,8,9,10], $step);
                                switch ($step) {
                                    case 0: {
                                        rr_ename = rr_m.MemberName;
                                        rr_mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallRes, rr_ename);
                                        if (rr_ename === "CaptureFrame") {
                                            $step = 1;
                                            continue;
                                        }
                                        else if (rr_ename === "StartStreaming") {
                                            $step = 3;
                                            continue;
                                        }
                                        else if (rr_ename === "StopStreaming") {
                                            $step = 5;
                                            continue;
                                        }
                                        else if (rr_ename === "CaptureFrameToBuffer") {
                                            $step = 7;
                                            continue;
                                        }
                                        else  {
                                            $step = 9;
                                            continue;
                                        }
                                        $step = 10;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$createwebcam2$Webcam$CaptureFrame(Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_ret = $taskResult1;
                                        rr_mr.AddElement(RobotRaconteurWeb.MessageElementUtil.PackStructure(this.rr_node, this.rr_context, "return", rr_ret));
                                        $step = 10;
                                        continue;
                                    }
                                    case 3: {
                                        $task2 = this.obj.experimental$createwebcam2$Webcam$StartStreaming(Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 4;
                                        if ($task2.isCompleted()) {
                                            continue;
                                        }
                                        $task2.continue($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $task2.getAwaitedResult();
                                        rr_mr.AddElement$1("return", Bridge.box(0, System.Int32));
                                        $step = 10;
                                        continue;
                                    }
                                    case 5: {
                                        $task3 = this.obj.experimental$createwebcam2$Webcam$StopStreaming(Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 6;
                                        if ($task3.isCompleted()) {
                                            continue;
                                        }
                                        $task3.continue($asyncBody);
                                        return;
                                    }
                                    case 6: {
                                        $task3.getAwaitedResult();
                                        rr_mr.AddElement$1("return", Bridge.box(0, System.Int32));
                                        $step = 10;
                                        continue;
                                    }
                                    case 7: {
                                        $task4 = this.obj.experimental$createwebcam2$Webcam$CaptureFrameToBuffer(Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 8;
                                        if ($task4.isCompleted()) {
                                            continue;
                                        }
                                        $task4.continue($asyncBody);
                                        return;
                                    }
                                    case 8: {
                                        $taskResult4 = $task4.getAwaitedResult();
                                        rr_ret1 = $taskResult4;
                                        rr_mr.AddElement(RobotRaconteurWeb.MessageElementUtil.PackStructure(this.rr_node, this.rr_context, "return", rr_ret1));
                                        $step = 10;
                                        continue;
                                    }
                                    case 9: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 10: {
                                        $tcs.setResult(rr_mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            GetSubObj$1: function (name, ind) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        switch (name) {
                                            default: 
                                                break;
                                        }
                                        throw new RobotRaconteurWeb.MemberNotFoundException("");
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            RegisterEvents: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.createwebcam2.Webcam);
            },
            UnregisterEvents: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.createwebcam2.Webcam);
            },
            GetCallbackFunction: function (rr_endpoint, rr_membername) {
                switch (rr_membername) {
                    default: 
                        break;
                }
                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
            },
            InitPipeServers: function (o) {
                if (this.rr_InitPipeServersRun) {
                    return;
                }
                this.rr_InitPipeServersRun = true;
                var castobj = Bridge.cast(o, experimental.createwebcam2.Webcam);
                this.rr_FrameStream = new (RobotRaconteurWeb.PipeServer$1(experimental.createwebcam2.WebcamImage))("FrameStream", this);
                castobj.experimental$createwebcam2$Webcam$FrameStream = this.rr_FrameStream;
            },
            InitCallbackServers: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.createwebcam2.Webcam);
            },
            CallPipeFunction: function (m, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        if (ename === "FrameStream") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.rr_FrameStream.PipeCommand(m, e);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                        return;
                                    }
                                    case 3: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 4: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallWireFunction: function (m, e) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        switch (ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchPipeMessage: function (m, e) {
                switch (m.MemberName) {
                    case "FrameStream": 
                        this.rr_FrameStream.PipePacketReceived(m, e);
                        break;
                    default: 
                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                }
            },
            DispatchWireMessage: function (m, e) {
                switch (m.MemberName) {
                    default: 
                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                }
            },
            CallMemoryFunction: function (m, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4,5,6], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        if (ename === "buffer") {
                                            $step = 1;
                                            continue;
                                        }
                                        else if (ename === "multidimbuffer") {
                                            $step = 3;
                                            continue;
                                        }
                                        else  {
                                            $step = 5;
                                            continue;
                                        }
                                        $step = 6;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = (new (RobotRaconteurWeb.ArrayMemoryServiceSkel$1(System.Byte))("buffer", this, RobotRaconteurWeb.MemberDefinition_Direction.readonly_)).CallMemoryFunction(m, e, this.obj.experimental$createwebcam2$Webcam$buffer);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                        return;
                                        $step = 6;
                                        continue;
                                    }
                                    case 3: {
                                        $task2 = (new (RobotRaconteurWeb.MultiDimArrayMemoryServiceSkel$1(System.Byte))("multidimbuffer", this, RobotRaconteurWeb.MemberDefinition_Direction.readonly_)).CallMemoryFunction(m, e, this.obj.experimental$createwebcam2$Webcam$multidimbuffer);
                                        $step = 4;
                                        if ($task2.isCompleted()) {
                                            continue;
                                        }
                                        $task2.continue($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        $tcs.setResult($taskResult2);
                                        return;
                                        $step = 6;
                                        continue;
                                    }
                                    case 5: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 6: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        }
    });

    Bridge.define("experimental.createwebcam2.WebcamHost", {
        $kind: "interface"
    });

    Bridge.define("experimental.createwebcam2.WebcamHost_skel", {
        inherits: [RobotRaconteurWeb.ServiceSkel],
        fields: {
            obj: null,
            rr_InitPipeServersRun: false
        },
        ctors: {
            init: function () {
                this.rr_InitPipeServersRun = false;
            },
            ctor: function (p, o, c) {
                this.$initialize();
                RobotRaconteurWeb.ServiceSkel.ctor.call(this, p, o, c);
                this.obj = o;
            }
        },
        methods: {
            ReleaseCastObject: function () { },
            CallGetProperty: function (m) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    mr, 
                    ret, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetRes, ename);
                                        if (ename === "WebcamNames") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$createwebcam2$WebcamHost$get_WebcamNames(void 0);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        ret = $taskResult1;
                                        mr.AddElement(RobotRaconteurWeb.MessageElementUtil.PackMapType(System.Int32, System.String, this.rr_node, this.rr_context, "value", ret));
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 4: {
                                        $tcs.setResult(mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallSetProperty: function (m) {
                var $step = 0,
                    $task1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    me, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        me = m.FindElement("value");
                                        mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetRes, ename);
                                        if (ename === "WebcamNames") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$createwebcam2$WebcamHost$set_WebcamNames(RobotRaconteurWeb.MessageElementUtil.UnpackMap(System.Int32, System.String, this.rr_node, this.rr_context, me), void 0);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 4: {
                                        $tcs.setResult(mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallFunction: function (rr_m) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_ename, 
                    rr_mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        rr_ename = rr_m.MemberName;
                                        rr_mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallRes, rr_ename);
                                        switch (rr_ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            GetSubObj$1: function (name, ind) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        if (name === "Webcams") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = this.obj.experimental$createwebcam2$WebcamHost$get_Webcams(System.Int32.parse(ind), void 0);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                        return;
                                    }
                                    case 3: {
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("");
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            RegisterEvents: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.createwebcam2.WebcamHost);
            },
            UnregisterEvents: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.createwebcam2.WebcamHost);
            },
            GetCallbackFunction: function (rr_endpoint, rr_membername) {
                switch (rr_membername) {
                    default: 
                        break;
                }
                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
            },
            InitPipeServers: function (o) {
                if (this.rr_InitPipeServersRun) {
                    return;
                }
                this.rr_InitPipeServersRun = true;
                var castobj = Bridge.cast(o, experimental.createwebcam2.WebcamHost);
            },
            InitCallbackServers: function (rrobj1) {
                this.obj = Bridge.cast(rrobj1, experimental.createwebcam2.WebcamHost);
            },
            CallPipeFunction: function (m, e) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        switch (ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CallWireFunction: function (m, e) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        switch (ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchPipeMessage: function (m, e) {
                switch (m.MemberName) {
                    default: 
                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                }
            },
            DispatchWireMessage: function (m, e) {
                switch (m.MemberName) {
                    default: 
                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                }
            },
            CallMemoryFunction: function (m, e) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    ename, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        ename = m.MemberName;
                                        switch (ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            }
        }
    });

    Bridge.define("experimental.createwebcam2.WebcamImage", {
        fields: {
            width: 0,
            height: 0,
            step: 0,
            data: null
        }
    });

    Bridge.define("experimental.createwebcam2.WebcamImage_size", {
        fields: {
            width: 0,
            height: 0,
            step: 0
        }
    });

    Bridge.define("experimental.createwebcam2.WebcamImage_size_stub", {
        inherits: [RobotRaconteurWeb.IStructureStub],
        fields: {
            def: null,
            rr_node: null,
            rr_context: null
        },
        alias: [
            "PackStructure", "RobotRaconteurWeb$IStructureStub$PackStructure",
            "UnpackStructure", "RobotRaconteurWeb$IStructureStub$UnpackStructure"
        ],
        ctors: {
            ctor: function (d, node, context) {
                this.$initialize();
                this.def = d;
                this.rr_node = node;
                this.rr_context = context;
            }
        },
        methods: {
            PackStructure: function (s1) {
                var m = new (System.Collections.Generic.List$1(RobotRaconteurWeb.MessageElement)).ctor();
                if (s1 == null) {
                    return null;
                }
                var s = Bridge.cast(s1, experimental.createwebcam2.WebcamImage_size);
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "width", s.width));
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "height", s.height));
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "step", s.step));
                return new RobotRaconteurWeb.MessageElementStructure("experimental.createwebcam2.WebcamImage_size", m);
            },
            UnpackStructure: function (T, m) {
                if (m == null) {
                    return Bridge.getDefaultValue(T);
                }
                var s = new experimental.createwebcam2.WebcamImage_size();
                s.width = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "width")));
                s.height = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "height")));
                s.step = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "step")));
                var st;
                try {
                    st = Bridge.cast(Bridge.unbox(s, T), T);
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new RobotRaconteurWeb.DataTypeMismatchException("Wrong structuretype");
                    } else {
                        throw $e1;
                    }
                }
                return st;
            }
        }
    });

    Bridge.define("experimental.createwebcam2.WebcamImage_stub", {
        inherits: [RobotRaconteurWeb.IStructureStub],
        fields: {
            def: null,
            rr_node: null,
            rr_context: null
        },
        alias: [
            "PackStructure", "RobotRaconteurWeb$IStructureStub$PackStructure",
            "UnpackStructure", "RobotRaconteurWeb$IStructureStub$UnpackStructure"
        ],
        ctors: {
            ctor: function (d, node, context) {
                this.$initialize();
                this.def = d;
                this.rr_node = node;
                this.rr_context = context;
            }
        },
        methods: {
            PackStructure: function (s1) {
                var m = new (System.Collections.Generic.List$1(RobotRaconteurWeb.MessageElement)).ctor();
                if (s1 == null) {
                    return null;
                }
                var s = Bridge.cast(s1, experimental.createwebcam2.WebcamImage);
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "width", s.width));
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "height", s.height));
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "step", s.step));
                RobotRaconteurWeb.MessageElementUtil.AddMessageElement$3(m, RobotRaconteurWeb.MessageElementUtil.PackArray(System.Byte, "data", s.data));
                return new RobotRaconteurWeb.MessageElementStructure("experimental.createwebcam2.WebcamImage", m);
            },
            UnpackStructure: function (T, m) {
                if (m == null) {
                    return Bridge.getDefaultValue(T);
                }
                var s = new experimental.createwebcam2.WebcamImage();
                s.width = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "width")));
                s.height = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "height")));
                s.step = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "step")));
                s.data = RobotRaconteurWeb.MessageElementUtil.UnpackArray(System.Byte, RobotRaconteurWeb.MessageElement.FindElement$1(m.Elements, "data"));
                var st;
                try {
                    st = Bridge.cast(Bridge.unbox(s, T), T);
                } catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    if (Bridge.is($e1, System.InvalidCastException)) {
                        throw new RobotRaconteurWeb.DataTypeMismatchException("Wrong structuretype");
                    } else {
                        throw $e1;
                    }
                }
                return st;
            }
        }
    });

    Bridge.define("iRobotCreateBridgeClient.App", {
        statics: {
            fields: {
                webcam_host: null,
                webcam: null,
                webcam_pipe: null,
                webcam_pipe_ep: null,
                canvas: null,
                ctx: null,
                imageData: null,
                imageBytes: null,
                create: null
            },
            ctors: {
                init: function () {
                    Bridge.ready(this.Main);
                }
            },
            methods: {
                Main: function () {
                    RobotRaconteurWeb.RobotRaconteurNode.s.RegisterServiceType(new experimental.create2.experimental__create2Factory());
                    RobotRaconteurWeb.RobotRaconteurNode.s.RegisterServiceType(new experimental.createwebcam2.experimental__createwebcam2Factory());

                    document.getElementById("ConnectWebcam").onclick = function (x) {
                        iRobotCreateBridgeClient.App.ConnectWebcam();
                    };
                    document.getElementById("DisconnectWebcam").onclick = function (x) {
                        iRobotCreateBridgeClient.App.DisconnectWebcam();
                    };
                    document.getElementById("ConnectCreate").onclick = function (x) {
                        iRobotCreateBridgeClient.App.ConnectCreate();
                    };
                    document.getElementById("DisconnectCreate").onclick = function (x) {
                        iRobotCreateBridgeClient.App.DisconnectCreate();
                    };
                    document.getElementById("stop").onclick = function (x) {
                        iRobotCreateBridgeClient.App.Drive(0, 32767);
                    };
                    document.getElementById("reverse").onclick = function (x) {
                        iRobotCreateBridgeClient.App.Drive(-200, 32767);
                    };
                    document.getElementById("forward").onclick = function (x) {
                        iRobotCreateBridgeClient.App.Drive(200, 32767);
                    };
                    document.getElementById("spinleft").onclick = function (x) {
                        iRobotCreateBridgeClient.App.Drive(200, 1);
                    };
                    document.getElementById("spinright").onclick = function (x) {
                        iRobotCreateBridgeClient.App.Drive(200, -1);
                    };

                    iRobotCreateBridgeClient.App.UpdateGamepadCheckbox();

                    window.addEventListener("gamepadconnected", function (e) {
                        iRobotCreateBridgeClient.App.UpdateGamepadCheckbox();
                    });
                    window.addEventListener("gamepaddisconnected", function (e) {
                        iRobotCreateBridgeClient.App.UpdateGamepadCheckbox();
                    });
                    window.setInterval(iRobotCreateBridgeClient.App.UpdateGamepad, 100);

                },
                ConnectWebcam: function () {
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
                                    $step = System.Array.min([1,2,3,4,5,6], $step);
                                    switch ($step) {

                                        case 1: {
                                            webcam_url = document.getElementById("WebcamUrl").value;
                                            $task1 = RobotRaconteurWeb.RobotRaconteurNode.s.ConnectService(webcam_url);
                                            $step = 2;
                                            if ($task1.isCompleted()) {
                                                continue;
                                            }
                                            $task1.continue($asyncBody);
                                            return;
                                        }
                                        case 2: {
                                            $taskResult1 = $task1.getAwaitedResult();
                                            iRobotCreateBridgeClient.App.webcam_host = Bridge.cast($taskResult1, experimental.createwebcam2.WebcamHost);
                                            $task2 = iRobotCreateBridgeClient.App.webcam_host.experimental$createwebcam2$WebcamHost$get_Webcams(0, void 0);
                                            $step = 3;
                                            if ($task2.isCompleted()) {
                                                continue;
                                            }
                                            $task2.continue($asyncBody);
                                            return;
                                        }
                                        case 3: {
                                            $taskResult2 = $task2.getAwaitedResult();
                                            iRobotCreateBridgeClient.App.webcam = $taskResult2;
                                            iRobotCreateBridgeClient.App.webcam_pipe = iRobotCreateBridgeClient.App.webcam.experimental$createwebcam2$Webcam$FrameStream;
                                            $task3 = iRobotCreateBridgeClient.App.webcam_pipe.Connect(-1);
                                            $step = 4;
                                            if ($task3.isCompleted()) {
                                                continue;
                                            }
                                            $task3.continue($asyncBody);
                                            return;
                                        }
                                        case 4: {
                                            $taskResult3 = $task3.getAwaitedResult();
                                            iRobotCreateBridgeClient.App.webcam_pipe_ep = $taskResult3;
                                            iRobotCreateBridgeClient.App.webcam_pipe_ep.addPacketReceivedEvent(iRobotCreateBridgeClient.App.WebcamPacketReceived);
                                            document.getElementById("WebcamLogin").style.display = "none";
                                            document.getElementById("WebcamDisplay").style.display = "block";

                                            document.getElementById("StartStreaming").onclick = (function (e) {
                                                iRobotCreateBridgeClient.App.webcam.experimental$createwebcam2$Webcam$StartStreaming(void 0);
                                            });

                                            document.getElementById("StopStreaming").onclick = (function (e) {
                                                iRobotCreateBridgeClient.App.webcam.experimental$createwebcam2$Webcam$StopStreaming(void 0);
                                            });
                                            $step = 6;
                                            continue;
                                        }
                                        case 5: {
                                            window.alert("Error: Could not connect to Webcam");
                                            $async_e = null;
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
                                $async_e = System.Exception.create($async_e1);
                                if ( $step >= 1 && $step <= 4 ) {
                                    $step = 5;
                                    $asyncBody();
                                    return;
                                }
                                throw $async_e;
                            }
                        }, arguments);

                    $asyncBody();
                },
                DisconnectWebcam: function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3], $step);
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
                                        $task1 = RobotRaconteurWeb.RobotRaconteurNode.s.DisconnectService(iRobotCreateBridgeClient.App.webcam_host);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
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
                WebcamPacketReceived: function (e) {
                    var f = null;
                    while (e.Available > 0) {
                        f = e.ReceivePacket();
                    }
                    if (f != null) {
                        iRobotCreateBridgeClient.App.ShowFrame(f);
                    }
                },
                ShowFrame: function (image) {
                    if (iRobotCreateBridgeClient.App.canvas == null) {
                        iRobotCreateBridgeClient.App.canvas = document.getElementById("image");
                        iRobotCreateBridgeClient.App.ctx = iRobotCreateBridgeClient.App.canvas.getContext("2d");
                    }

                    if (iRobotCreateBridgeClient.App.imageData == null) {
                        iRobotCreateBridgeClient.App.imageData = iRobotCreateBridgeClient.App.ctx.createImageData(image.width, image.height);
                        iRobotCreateBridgeClient.App.imageBytes = iRobotCreateBridgeClient.App.imageData.data;
                    }

                    if (System.Int64(iRobotCreateBridgeClient.App.imageData.width).ne(System.Int64(image.width)) || System.Int64(iRobotCreateBridgeClient.App.imageData.height).ne(System.Int64(image.height))) {
                        iRobotCreateBridgeClient.App.imageData = iRobotCreateBridgeClient.App.ctx.createImageData(image.width, image.height);
                        iRobotCreateBridgeClient.App.imageBytes = iRobotCreateBridgeClient.App.imageData.data;
                    }

                    for (var y = 0; y < image.height; y = (y + 1) | 0) {
                        for (var x = 0; x < image.width; x = (x + 1) | 0) {
                            var index1 = Bridge.Int.mul((((x + Bridge.Int.mul(image.width, y)) | 0)), 4);
                            var index2 = (((Bridge.Int.mul(x, 3) + Bridge.Int.mul(image.step, y)) | 0));
                            iRobotCreateBridgeClient.App.imageBytes[index1] = image.data[System.Array.index(((index2 + 2) | 0), image.data)];
                            iRobotCreateBridgeClient.App.imageBytes[((index1 + 1) | 0)] = image.data[System.Array.index(((index2 + 1) | 0), image.data)];
                            iRobotCreateBridgeClient.App.imageBytes[((index1 + 2) | 0)] = image.data[System.Array.index(index2, image.data)];
                            iRobotCreateBridgeClient.App.imageBytes[((index1 + 3) | 0)] = 255;
                        }
                    }

                    iRobotCreateBridgeClient.App.ctx.putImageData(iRobotCreateBridgeClient.App.imageData, 0, 0);
                },
                ConnectCreate: function () {
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
                                    $step = System.Array.min([1,2,3,4], $step);
                                    switch ($step) {

                                        case 1: {
                                            create_url = document.getElementById("CreateUrl").value;
                                            $task1 = RobotRaconteurWeb.RobotRaconteurNode.s.ConnectService(create_url);
                                            $step = 2;
                                            if ($task1.isCompleted()) {
                                                continue;
                                            }
                                            $task1.continue($asyncBody);
                                            return;
                                        }
                                        case 2: {
                                            $taskResult1 = $task1.getAwaitedResult();
                                            iRobotCreateBridgeClient.App.create = Bridge.cast($taskResult1, experimental.create2.Create);
                                            document.getElementById("CreateLogin").style.display = "none";
                                            document.getElementById("CreateDisplay").style.display = "block";
                                            iRobotCreateBridgeClient.App.UpdateGamepadCheckbox();
                                            $step = 4;
                                            continue;
                                        }
                                        case 3: {
                                            window.alert("Error: Could not connect to Create");
                                            $async_e = null;
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
                                $async_e = System.Exception.create($async_e1);
                                if ( $step >= 1 && $step <= 2 ) {
                                    $step = 3;
                                    $asyncBody();
                                    return;
                                }
                                throw $async_e;
                            }
                        }, arguments);

                    $asyncBody();
                },
                DisconnectCreate: function () {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3], $step);
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
                                        $task1 = RobotRaconteurWeb.RobotRaconteurNode.s.DisconnectService(iRobotCreateBridgeClient.App.create);
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
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
                Drive: function (velocity, radius) {
                    var $step = 0,
                        $task1, 
                        $jumpFromFinally, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        $task1 = iRobotCreateBridgeClient.App.create.experimental$create2$Create$Drive(velocity, radius, void 0);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
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
                UpdateGamepadCheckbox: function () {
                    if (iRobotCreateBridgeClient.App.create == null) {
                        return;
                    }

                    var checkbox = document.getElementById("enablegamepad");
                    var w = window.navigator.getGamepads();
                    if (w.length > 1) {
                        checkbox.disabled = false;
                    } else {
                        checkbox.disabled = true;
                        checkbox.checked = false;
                    }

                },
                UpdateGamepad: function () {
                    if (iRobotCreateBridgeClient.App.create == null) {
                        return;
                    }

                    var checkbox = document.getElementById("enablegamepad");
                    if (checkbox.checked) {
                        var pos = document.getElementById("pos");
                        var gp = window.navigator.getGamepads();
                        var gp1 = gp[System.Array.index(2, gp)];
                        if (gp1 == null) {
                            return;
                        }
                        var x = gp1.axes[System.Array.index(0, gp1.axes)];
                        var y = -gp1.axes[System.Array.index(1, gp1.axes)];


                        if (Math.abs(x) < 0.2) {
                            x = 0;
                        } else {
                            x = (Math.abs(x) - 0.2) / 0.8 * Bridge.Int.sign(x);
                        }

                        if (Math.abs(y) < 0.2) {
                            y = 0;
                        } else {
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
                        } else {
                            speed = Bridge.Int.clip16(y * 200.0);
                            if (x !== 0) {
                                radius = Bridge.Int.clip16(-(1 - Math.abs(x)) * 5000.0 * Bridge.Int.sign(x));
                                if (radius === 0) {
                                    radius = Bridge.Int.sxs((((-Bridge.Int.sign(x)) | 0)) & 65535);
                                }

                            }

                        }

                        iRobotCreateBridgeClient.App.Drive(speed, radius);
                    }

                }
            }
        },
        $entryPoint: true
    });

    Bridge.define("experimental.create2.Create_default_impl", {
        inherits: [experimental.create2.Create],
        fields: {
            rrvar_play_callback: null,
            rrvar_packets: null
        },
        events: {
            Bump: null
        },
        props: {
            play_callback: {
                get: function () {
                    return this.rrvar_play_callback;
                },
                set: function (value) {
                    if (this.rrvar_play_callback != null) {
                        throw new System.InvalidOperationException.$ctor1("Callback already set");
                    }
                    this.rrvar_play_callback = value;
                }
            },
            packets: {
                get: function () {
                    return this.rrvar_packets.Wire;
                },
                set: function (value) {
                    if (this.rrvar_packets != null) {
                        throw new System.InvalidOperationException.$ctor1("Pipe already set");
                    }
                    this.rrvar_packets = new (RobotRaconteurWeb.WireBroadcaster$1(experimental.create2.SensorPacket))(value);
                }
            }
        },
        alias: [
            "get_DistanceTraveled", "experimental$create2$Create$get_DistanceTraveled",
            "set_DistanceTraveled", "experimental$create2$Create$set_DistanceTraveled",
            "get_AngleTraveled", "experimental$create2$Create$get_AngleTraveled",
            "set_AngleTraveled", "experimental$create2$Create$set_AngleTraveled",
            "get_Bumpers", "experimental$create2$Create$get_Bumpers",
            "set_Bumpers", "experimental$create2$Create$set_Bumpers",
            "Drive", "experimental$create2$Create$Drive",
            "StartStreaming", "experimental$create2$Create$StartStreaming",
            "StopStreaming", "experimental$create2$Create$StopStreaming",
            "addBump", "experimental$create2$Create$addBump",
            "removeBump", "experimental$create2$Create$removeBump",
            "play_callback", "experimental$create2$Create$play_callback",
            "packets", "experimental$create2$Create$packets"
        ],
        methods: {
            get_DistanceTraveled: function (cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            set_DistanceTraveled: function (value, cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            get_AngleTraveled: function (cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            set_AngleTraveled: function (value, cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            get_Bumpers: function (cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            set_Bumpers: function (value, cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            Drive: function (velocity, radius, rr_cancel) {
                if (rr_cancel === void 0) { rr_cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            StartStreaming: function (rr_cancel) {
                if (rr_cancel === void 0) { rr_cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            StopStreaming: function (rr_cancel) {
                if (rr_cancel === void 0) { rr_cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("experimental.create2.Create_stub", {
        inherits: [RobotRaconteurWeb.ServiceStub,experimental.create2.Create],
        fields: {
            rr_play_callback: null,
            rr_packets: null
        },
        events: {
            Bump: null
        },
        props: {
            play_callback: {
                get: function () {
                    return this.rr_play_callback;
                },
                set: function (value) {
                    throw new System.InvalidOperationException.ctor();
                }
            },
            packets: {
                get: function () {
                    return this.rr_packets;
                },
                set: function (value) {
                    throw new System.InvalidOperationException.ctor();
                }
            }
        },
        alias: [
            "get_DistanceTraveled", "experimental$create2$Create$get_DistanceTraveled",
            "set_DistanceTraveled", "experimental$create2$Create$set_DistanceTraveled",
            "get_AngleTraveled", "experimental$create2$Create$get_AngleTraveled",
            "set_AngleTraveled", "experimental$create2$Create$set_AngleTraveled",
            "get_Bumpers", "experimental$create2$Create$get_Bumpers",
            "set_Bumpers", "experimental$create2$Create$set_Bumpers",
            "Drive", "experimental$create2$Create$Drive",
            "StartStreaming", "experimental$create2$Create$StartStreaming",
            "StopStreaming", "experimental$create2$Create$StopStreaming",
            "addBump", "experimental$create2$Create$addBump",
            "removeBump", "experimental$create2$Create$removeBump",
            "play_callback", "experimental$create2$Create$play_callback",
            "packets", "experimental$create2$Create$packets"
        ],
        ctors: {
            ctor: function (path, c) {
                this.$initialize();
                RobotRaconteurWeb.ServiceStub.ctor.call(this, path, c);
                this.rr_play_callback = new (RobotRaconteurWeb.CallbackClient$1(Function))("play_callback");
                this.rr_packets = new (RobotRaconteurWeb.WireClient$1(experimental.create2.SensorPacket))("packets", this);
            }
        },
        methods: {
            get_DistanceTraveled: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetReq, "DistanceTraveled");
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        me = mr.FindElement("value");
                                        $tcs.setResult((RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, me)));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            set_DistanceTraveled: function (value, cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetReq, "DistanceTraveled");
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "value", value));
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            get_AngleTraveled: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetReq, "AngleTraveled");
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        me = mr.FindElement("value");
                                        $tcs.setResult((RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, me)));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            set_AngleTraveled: function (value, cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetReq, "AngleTraveled");
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int32, "value", value));
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            get_Bumpers: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetReq, "Bumpers");
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        me = mr.FindElement("value");
                                        $tcs.setResult((RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Byte, me)));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            set_Bumpers: function (value, cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetReq, "Bumpers");
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Byte, "value", value));
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            Drive: function (velocity, radius, cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_m, 
                    rr_me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        rr_m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallReq, "Drive");
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(rr_m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int16, "velocity", velocity));
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(rr_m, RobotRaconteurWeb.MessageElementUtil.PackScalar(System.Int16, "radius", radius));
                                        $task1 = this.ProcessRequest(rr_m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_me = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            StartStreaming: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_m, 
                    rr_me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        rr_m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallReq, "StartStreaming");
                                        $task1 = this.ProcessRequest(rr_m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_me = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            StopStreaming: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_m, 
                    rr_me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        rr_m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallReq, "StopStreaming");
                                        $task1 = this.ProcessRequest(rr_m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_me = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchEvent: function (rr_m) {
                switch (rr_m.MemberName) {
                    case "Bump": 
                        {
                            if (!Bridge.staticEquals(this.Bump, null)) {
                                this.Bump();
                            }
                            return;
                        }
                    default: 
                        break;
                }
            },
            DispatchPipeMessage: function (m) {
                switch (m.MemberName) {
                    default: 
                        throw new System.Exception();
                }
            },
            CallbackCall: function (rr_m) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_ename, 
                    rr_mr, 
                    DistanceTraveled, 
                    AngleTraveled, 
                    rr_ret, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1,2,3,4], $step);
                                switch ($step) {
                                    case 0: {
                                        rr_ename = rr_m.MemberName;
                                        rr_mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.CallbackCallRet, rr_ename);
                                        rr_mr.ServicePath = rr_m.ServicePath;
                                        rr_mr.RequestID = rr_m.RequestID;
                                        if (rr_ename === "play_callback") {
                                            $step = 1;
                                            continue;
                                        }
                                        else  {
                                            $step = 3;
                                            continue;
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 1: {
                                        DistanceTraveled = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, rr_m.FindElement("DistanceTraveled")));
                                        AngleTraveled = (RobotRaconteurWeb.MessageElementUtil.UnpackScalar(System.Int32, rr_m.FindElement("AngleTraveled")));
                                        $task1 = this.play_callback.Function(DistanceTraveled, AngleTraveled, Bridge.getDefaultValue(System.Threading.CancellationToken));
                                        $step = 2;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_ret = $taskResult1;
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(rr_mr, RobotRaconteurWeb.MessageElementUtil.PackArray(System.Byte, "return", rr_ret));
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                    }
                                    case 4: {
                                        $tcs.setResult(rr_mr);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchWireMessage: function (m) {
                switch (m.MemberName) {
                    case "packets": 
                        this.rr_packets.WirePacketReceived(m);
                        break;
                    default: 
                        throw new System.Exception();
                }
            }
        }
    });

    Bridge.define("experimental.createwebcam2.Webcam_default_impl", {
        inherits: [experimental.createwebcam2.Webcam],
        fields: {
            rrvar_FrameStream: null
        },
        props: {
            FrameStream: {
                get: function () {
                    return this.rrvar_FrameStream.Pipe;
                },
                set: function (value) {
                    if (this.rrvar_FrameStream != null) {
                        throw new System.InvalidOperationException.$ctor1("Pipe already set");
                    }
                    this.rrvar_FrameStream = new (RobotRaconteurWeb.PipeBroadcaster$1(experimental.createwebcam2.WebcamImage))(value);
                }
            },
            buffer: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            },
            multidimbuffer: {
                get: function () {
                    throw new System.NotImplementedException.ctor();
                }
            }
        },
        alias: [
            "get_Name", "experimental$createwebcam2$Webcam$get_Name",
            "set_Name", "experimental$createwebcam2$Webcam$set_Name",
            "CaptureFrame", "experimental$createwebcam2$Webcam$CaptureFrame",
            "StartStreaming", "experimental$createwebcam2$Webcam$StartStreaming",
            "StopStreaming", "experimental$createwebcam2$Webcam$StopStreaming",
            "CaptureFrameToBuffer", "experimental$createwebcam2$Webcam$CaptureFrameToBuffer",
            "FrameStream", "experimental$createwebcam2$Webcam$FrameStream",
            "buffer", "experimental$createwebcam2$Webcam$buffer",
            "multidimbuffer", "experimental$createwebcam2$Webcam$multidimbuffer"
        ],
        methods: {
            get_Name: function (cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            set_Name: function (value, cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            CaptureFrame: function (rr_cancel) {
                if (rr_cancel === void 0) { rr_cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            StartStreaming: function (rr_cancel) {
                if (rr_cancel === void 0) { rr_cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            StopStreaming: function (rr_cancel) {
                if (rr_cancel === void 0) { rr_cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            CaptureFrameToBuffer: function (rr_cancel) {
                if (rr_cancel === void 0) { rr_cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("experimental.createwebcam2.Webcam_stub", {
        inherits: [RobotRaconteurWeb.ServiceStub,experimental.createwebcam2.Webcam],
        fields: {
            rr_FrameStream: null,
            rr_buffer: null,
            rr_multidimbuffer: null
        },
        props: {
            FrameStream: {
                get: function () {
                    return this.rr_FrameStream;
                },
                set: function (value) {
                    throw new System.InvalidOperationException.ctor();
                }
            },
            buffer: {
                get: function () {
                    return this.rr_buffer;
                }
            },
            multidimbuffer: {
                get: function () {
                    return this.rr_multidimbuffer;
                }
            }
        },
        alias: [
            "get_Name", "experimental$createwebcam2$Webcam$get_Name",
            "set_Name", "experimental$createwebcam2$Webcam$set_Name",
            "CaptureFrame", "experimental$createwebcam2$Webcam$CaptureFrame",
            "StartStreaming", "experimental$createwebcam2$Webcam$StartStreaming",
            "StopStreaming", "experimental$createwebcam2$Webcam$StopStreaming",
            "CaptureFrameToBuffer", "experimental$createwebcam2$Webcam$CaptureFrameToBuffer",
            "FrameStream", "experimental$createwebcam2$Webcam$FrameStream",
            "buffer", "experimental$createwebcam2$Webcam$buffer",
            "multidimbuffer", "experimental$createwebcam2$Webcam$multidimbuffer"
        ],
        ctors: {
            ctor: function (path, c) {
                this.$initialize();
                RobotRaconteurWeb.ServiceStub.ctor.call(this, path, c);
                this.rr_FrameStream = new (RobotRaconteurWeb.PipeClient$1(experimental.createwebcam2.WebcamImage))("FrameStream", this);
                this.rr_buffer = new (RobotRaconteurWeb.ArrayMemoryClient$1(System.Byte))("buffer", this, RobotRaconteurWeb.MemberDefinition_Direction.readonly_);
                this.rr_multidimbuffer = new (RobotRaconteurWeb.MultiDimArrayMemoryClient$1(System.Byte))("multidimbuffer", this, RobotRaconteurWeb.MemberDefinition_Direction.readonly_);
            }
        },
        methods: {
            get_Name: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetReq, "Name");
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        me = mr.FindElement("value");
                                        $tcs.setResult(RobotRaconteurWeb.MessageElementUtil.UnpackString(me));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            set_Name: function (value, cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetReq, "Name");
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(m, RobotRaconteurWeb.MessageElementUtil.PackString("value", value));
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CaptureFrame: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_m, 
                    rr_me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        rr_m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallReq, "CaptureFrame");
                                        $task1 = this.ProcessRequest(rr_m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_me = $taskResult1;
                                        $tcs.setResult(RobotRaconteurWeb.MessageElementUtil.UnpackStructure(experimental.createwebcam2.WebcamImage, this.rr_node, this.rr_context, rr_me.FindElement("return")));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            StartStreaming: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_m, 
                    rr_me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        rr_m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallReq, "StartStreaming");
                                        $task1 = this.ProcessRequest(rr_m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_me = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            StopStreaming: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_m, 
                    rr_me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        rr_m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallReq, "StopStreaming");
                                        $task1 = this.ProcessRequest(rr_m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_me = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            CaptureFrameToBuffer: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_m, 
                    rr_me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        rr_m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.FunctionCallReq, "CaptureFrameToBuffer");
                                        $task1 = this.ProcessRequest(rr_m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        rr_me = $taskResult1;
                                        $tcs.setResult(RobotRaconteurWeb.MessageElementUtil.UnpackStructure(experimental.createwebcam2.WebcamImage_size, this.rr_node, this.rr_context, rr_me.FindElement("return")));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchEvent: function (rr_m) {
                switch (rr_m.MemberName) {
                    default: 
                        break;
                }
            },
            DispatchPipeMessage: function (m) {
                switch (m.MemberName) {
                    case "FrameStream": 
                        this.rr_FrameStream.PipePacketReceived(m);
                        break;
                    default: 
                        throw new System.Exception();
                }
            },
            CallbackCall: function (rr_m) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_ename, 
                    rr_mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        rr_ename = rr_m.MemberName;
                                        rr_mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.CallbackCallRet, rr_ename);
                                        rr_mr.ServicePath = rr_m.ServicePath;
                                        rr_mr.RequestID = rr_m.RequestID;
                                        switch (rr_ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchWireMessage: function (m) {
                switch (m.MemberName) {
                    default: 
                        throw new System.Exception();
                }
            }
        }
    });

    Bridge.define("experimental.createwebcam2.WebcamHost_default_impl", {
        inherits: [experimental.createwebcam2.WebcamHost],
        alias: [
            "get_WebcamNames", "experimental$createwebcam2$WebcamHost$get_WebcamNames",
            "set_WebcamNames", "experimental$createwebcam2$WebcamHost$set_WebcamNames",
            "get_Webcams", "experimental$createwebcam2$WebcamHost$get_Webcams"
        ],
        methods: {
            get_WebcamNames: function (cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            set_WebcamNames: function (value, cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            },
            get_Webcams: function (ind, cancel) {
                if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                throw new System.NotImplementedException.ctor();
            }
        }
    });

    Bridge.define("experimental.createwebcam2.WebcamHost_stub", {
        inherits: [RobotRaconteurWeb.ServiceStub,experimental.createwebcam2.WebcamHost],
        alias: [
            "get_WebcamNames", "experimental$createwebcam2$WebcamHost$get_WebcamNames",
            "set_WebcamNames", "experimental$createwebcam2$WebcamHost$set_WebcamNames",
            "get_Webcams", "experimental$createwebcam2$WebcamHost$get_Webcams"
        ],
        ctors: {
            ctor: function (path, c) {
                this.$initialize();
                RobotRaconteurWeb.ServiceStub.ctor.call(this, path, c);
            }
        },
        methods: {
            get_WebcamNames: function (cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    me, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertyGetReq, "WebcamNames");
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        me = mr.FindElement("value");
                                        $tcs.setResult(RobotRaconteurWeb.MessageElementUtil.UnpackMap(System.Int32, System.String, this.rr_node, this.rr_context, me));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            set_WebcamNames: function (value, cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    m, 
                    mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        m = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.PropertySetReq, "WebcamNames");
                                        RobotRaconteurWeb.MessageElementUtil.AddMessageElement(m, RobotRaconteurWeb.MessageElementUtil.PackMapType(System.Int32, System.String, this.rr_node, this.rr_context, "value", value));
                                        $task1 = this.ProcessRequest(m, cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        mr = $taskResult1;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchEvent: function (rr_m) {
                switch (rr_m.MemberName) {
                    default: 
                        break;
                }
            },
            get_Webcams: function (ind, cancel) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        if (cancel === void 0) { cancel = new System.Threading.CancellationToken(); }
                                        $task1 = this.FindObjRefTyped("Webcams", Bridge.toString(ind), "experimental.createwebcam2.Webcam", cancel);
                                        $step = 1;
                                        if ($task1.isCompleted()) {
                                            continue;
                                        }
                                        $task1.continue($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult(Bridge.cast($taskResult1, experimental.createwebcam2.Webcam));
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchPipeMessage: function (m) {
                switch (m.MemberName) {
                    default: 
                        throw new System.Exception();
                }
            },
            CallbackCall: function (rr_m) {
                var $step = 0,
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    rr_ename, 
                    rr_mr, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0], $step);
                                switch ($step) {
                                    case 0: {
                                        rr_ename = rr_m.MemberName;
                                        rr_mr = new RobotRaconteurWeb.MessageEntry.$ctor1(RobotRaconteurWeb.MessageEntryType.CallbackCallRet, rr_ename);
                                        rr_mr.ServicePath = rr_m.ServicePath;
                                        rr_mr.RequestID = rr_m.RequestID;
                                        switch (rr_ename) {
                                            default: 
                                                throw new RobotRaconteurWeb.MemberNotFoundException("Member not found");
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            DispatchWireMessage: function (m) {
                switch (m.MemberName) {
                    default: 
                        throw new System.Exception();
                }
            }
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJpUm9ib3RDcmVhdGVCcmlkZ2VDbGllbnQuanMiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbImV4cGVyaW1lbnRhbC5jcmVhdGUyX3N0dWJza2VsLmNzIiwiZXhwZXJpbWVudGFsLmNyZWF0ZTIuY3MiLCJleHBlcmltZW50YWwuY3JlYXRld2ViY2FtMl9zdHVic2tlbC5jcyIsIkFwcC5jcyJdLAogICJuYW1lcyI6IFsiIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBeU51QkEsR0FBU0EsR0FBU0E7OzhEQUF3QkEsR0FBRUEsR0FBRUE7Z0JBQUtBLFdBQUlBLEFBQVFBOzs7Ozt1Q0FHekJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FDekRBLFFBQWFBO3dDQUNiQSxLQUFnQkEsSUFBSUEsc0NBQWFBLG1EQUFpQ0E7d0NBQ2xFQSxJQUFRQTs7OztpREFBQUE7Ozs7aURBQUFBOzs7Ozs7Ozs7Ozs7d0NBR1JBLFNBQWNBOzs7Ozs7Ozs7OzhDQUFOQTt3Q0FDUkEsY0FBY0EsdUVBQTJDQTt3Q0FDekRBOzs7O3dDQUlBQSxTQUFjQTs7Ozs7Ozs7OzsrQ0FBTkE7d0NBQ1JBLGNBQWNBLHVFQUEyQ0E7d0NBQ3pEQTs7Ozt3Q0FJQUEsU0FBZUE7Ozs7Ozs7Ozs7K0NBQU5BO3dDQUNUQSxjQUFjQSxzRUFBNENBO3dDQUMxREE7Ozs7d0NBR0FBLE1BQU1BLElBQUlBOzs7d0NBRVZBLGVBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUNBRWtEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUN6REEsUUFBYUE7d0NBQ2JBLEtBQWtCQTt3Q0FDbEJBLEtBQWdCQSxJQUFJQSxzQ0FBYUEsbURBQWlDQTt3Q0FDbEVBLElBQVFBOzs7O2lEQUFBQTs7OztpREFBQUE7Ozs7Ozs7Ozs7Ozt3Q0FHUkEsU0FBTUEsMERBQXlCQSxDQUFDQSxnRUFBcUNBOzs7Ozs7Ozs7O3dDQUNyRUE7Ozs7d0NBSUFBLFNBQU1BLHVEQUFzQkEsQ0FBQ0Es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QUEwQkEsMkRBQW1EQTs7Ozs7Ozs7Ozt1REFBM0ZBLFlBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBRTZCQTtnQkFFNUNBLFFBQVFBO29CQUNSQTt3QkFDQUEsTUFBTUEsSUFBSUE7OztvQ0FHK0NBOzs7Ozs7Ozs7Ozs7Ozt3Q0FDekRBLFdBQWdCQTt3Q0FDaEJBLFFBQW1CQSxJQUFJQSxzQ0FBYUEsb0RBQWtDQTt3Q0FDdEVBLG9CQUFrQkE7d0NBQ2xCQSxrQkFBZ0JBO3dDQUNoQkEsUUFBUUE7NENBQ1JBO2dEQUNBQSxNQUFNQSxJQUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBSWtDQTtnQkFFNUNBLFFBQVFBO29CQUNSQTt3QkFDQUEsTUFBTUEsSUFBSUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy9UaGlzIGZpbGUgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQuIERPIE5PVCBFRElUIVxyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFJvYm90UmFjb250ZXVyV2ViO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZztcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDEwOFxyXG5cclxubmFtZXNwYWNlIGV4cGVyaW1lbnRhbC5jcmVhdGUyXHJcbntcclxucHVibGljIGNsYXNzIGV4cGVyaW1lbnRhbF9fY3JlYXRlMkZhY3RvcnkgOiBTZXJ2aWNlRmFjdG9yeVxyXG57XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgc3RyaW5nIERlZlN0cmluZygpXHJcbntcclxuICAgIGNvbnN0IHN0cmluZyBzPVwiXFxuI1NlcnZpY2UgdG8gcHJvdmlkZSBzYW1wbGUgaW50ZXJmYWNlIHRvIHRoZSBpUm9ib3QgQ3JlYXRlXFxuc2VydmljZSBleHBlcmltZW50YWwuY3JlYXRlMlxcblxcbnN0ZHZlciAwLjlcXG5cXG5zdHJ1Y3QgU2Vuc29yUGFja2V0XFxuZmllbGQgdWludDggSURcXG5maWVsZCB1aW50OFtdIERhdGFcXG5lbmRcXG5cXG5vYmplY3QgQ3JlYXRlXFxuY29uc3RhbnQgaW50MTYgRFJJVkVfU1RSQUlHSFQgMzI3NjdcXG5jb25zdGFudCBpbnQxNiBTUElOX0NMT0NLV0lTRSAtMVxcbmNvbnN0YW50IGludDE2IFNQSU5fQ09VTlRFUkNMT0NLV0lTRSAxXFxuXFxuZnVuY3Rpb24gdm9pZCBEcml2ZShpbnQxNiB2ZWxvY2l0eSwgaW50MTYgcmFkaXVzKVxcblxcbmZ1bmN0aW9uIHZvaWQgU3RhcnRTdHJlYW1pbmcoKVxcbmZ1bmN0aW9uIHZvaWQgU3RvcFN0cmVhbWluZygpXFxuXFxucHJvcGVydHkgaW50MzIgRGlzdGFuY2VUcmF2ZWxlZCBbcmVhZG9ubHldXFxucHJvcGVydHkgaW50MzIgQW5nbGVUcmF2ZWxlZCBbcmVhZG9ubHldXFxucHJvcGVydHkgdWludDggQnVtcGVycyBbcmVhZG9ubHldXFxuXFxuZXZlbnQgQnVtcCgpXFxuXFxud2lyZSBTZW5zb3JQYWNrZXQgcGFja2V0cyBbcmVhZG9ubHldXFxuXFxuY2FsbGJhY2sgdWludDhbXSBwbGF5X2NhbGxiYWNrKGludDMyIERpc3RhbmNlVHJhdmVsZWQsIGludDMyIEFuZ2xlVHJhdmVsZWQpXFxuZW5kXFxuXFxuXCI7XHJcbiAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBzdHJpbmcgR2V0U2VydmljZU5hbWUoKSB7cmV0dXJuIFwiZXhwZXJpbWVudGFsLmNyZWF0ZTJcIjt9XHJcbiAgICBwdWJsaWMgU2Vuc29yUGFja2V0X3N0dWIgU2Vuc29yUGFja2V0X3N0dWJlbnRyeTtcclxuICAgIHB1YmxpYyBleHBlcmltZW50YWxfX2NyZWF0ZTJGYWN0b3J5KFJvYm90UmFjb250ZXVyTm9kZSBub2RlID0gbnVsbCwgQ2xpZW50Q29udGV4dCBjb250ZXh0ID0gbnVsbCkgOiBiYXNlKG5vZGUsY29udGV4dClcclxue1xyXG4gICAgU2Vuc29yUGFja2V0X3N0dWJlbnRyeT1uZXcgU2Vuc29yUGFja2V0X3N0dWIodGhpcyx0aGlzLm5vZGUsdGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBJU3RydWN0dXJlU3R1YiBGaW5kU3RydWN0dXJlU3R1YihzdHJpbmcgb2JqZWN0dHlwZSlcclxuICAgIHtcclxuICAgIGlmIChvYmplY3R0eXBlPT1cIlNlbnNvclBhY2tldFwiKVxyXG4gICAgcmV0dXJuIFNlbnNvclBhY2tldF9zdHViZW50cnk7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVFeGNlcHRpb24oXCJDYW5ub3QgZmluZCBhcHByb3ByaWF0ZSBzdHJ1Y3R1cmUgc3R1YlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBJUG9kU3R1YiBGaW5kUG9kU3R1YihzdHJpbmcgb2JqZWN0dHlwZSlcclxuICAgIHtcclxuICAgIHRocm93IG5ldyBEYXRhVHlwZUV4Y2VwdGlvbihcIkNhbm5vdCBmaW5kIGFwcHJvcHJpYXRlIHBvZCBzdHViXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIElOYW1lZEFycmF5U3R1YiBGaW5kTmFtZWRBcnJheVN0dWIoc3RyaW5nIG9iamVjdHR5cGUpXHJcbiAgICB7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVFeGNlcHRpb24oXCJDYW5ub3QgZmluZCBhcHByb3ByaWF0ZSBwb2Qgc3R1YlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBTZXJ2aWNlU3R1YiBDcmVhdGVTdHViKHN0cmluZyBvYmplY3R0eXBlLCBzdHJpbmcgcGF0aCwgQ2xpZW50Q29udGV4dCBjb250ZXh0KSB7XHJcbiAgICBzdHJpbmcgb2Jqc2hvcnQ7XHJcbiAgICBpZiAoQ29tcGFyZU5hbWVzcGFjZShvYmplY3R0eXBlLCBvdXQgb2Jqc2hvcnQpKSB7XHJcbiAgICBzd2l0Y2ggKG9ianNob3J0KSB7XHJcbiAgICBjYXNlIFwiQ3JlYXRlXCI6XHJcbiAgICByZXR1cm4gbmV3IENyZWF0ZV9zdHViKHBhdGgsIGNvbnRleHQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiBiYXNlLkNyZWF0ZVN0dWIob2JqZWN0dHlwZSxwYXRoLGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IFNlcnZpY2VFeGNlcHRpb24oXCJDb3VsZCBub3QgY3JlYXRlIHN0dWJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgU2VydmljZVNrZWwgQ3JlYXRlU2tlbChzdHJpbmcgcGF0aCxvYmplY3Qgb2JqLFNlcnZlckNvbnRleHQgY29udGV4dCkge1xyXG4gICAgc3RyaW5nIG9ianR5cGU9U2VydmljZURlZmluaXRpb25VdGlsLkZpbmRPYmplY3RSUlR5cGUob2JqKTtcclxuICAgIHN0cmluZyBvYmpzaG9ydDtcclxuICAgIGlmIChDb21wYXJlTmFtZXNwYWNlKG9ianR5cGUsIG91dCBvYmpzaG9ydCkpIHtcclxuICAgIHN3aXRjaChvYmpzaG9ydCkge1xyXG4gICAgY2FzZSBcIkNyZWF0ZVwiOlxyXG4gICAgcmV0dXJuIG5ldyBDcmVhdGVfc2tlbChwYXRoLChDcmVhdGUpb2JqLGNvbnRleHQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiBiYXNlLkNyZWF0ZVNrZWwocGF0aCxvYmosY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbihcIkNvdWxkIG5vdCBjcmVhdGUgc2tlbFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBSb2JvdFJhY29udGV1ckV4Y2VwdGlvbiBEb3duQ2FzdEV4Y2VwdGlvbihSb2JvdFJhY29udGV1ckV4Y2VwdGlvbiBycl9leHApXHJcbiAgICB7XHJcbiAgICBpZiAocnJfZXhwPT1udWxsKSByZXR1cm4gcnJfZXhwO1xyXG4gICAgc3RyaW5nIHJyX3R5cGU9cnJfZXhwLkVycm9yO1xyXG4gICAgaWYgKCFycl90eXBlLkNvbnRhaW5zKFwiLlwiKSkgcmV0dXJuIHJyX2V4cDtcclxuICAgIHN0cmluZyBycl9zdHlwZTtcclxuICAgIGlmIChDb21wYXJlTmFtZXNwYWNlKHJyX3R5cGUsIG91dCBycl9zdHlwZSkpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYmFzZS5Eb3duQ2FzdEV4Y2VwdGlvbihycl9leHApOyBcclxuICAgIH1cclxuICAgIHJldHVybiBycl9leHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbnB1YmxpYyBjbGFzcyBTZW5zb3JQYWNrZXRfc3R1YiA6IElTdHJ1Y3R1cmVTdHViIHtcclxuICAgIHB1YmxpYyBTZW5zb3JQYWNrZXRfc3R1YihleHBlcmltZW50YWxfX2NyZWF0ZTJGYWN0b3J5IGQsIFJvYm90UmFjb250ZXVyTm9kZSBub2RlLCBDbGllbnRDb250ZXh0IGNvbnRleHQpIHtkZWY9ZDsgcnJfbm9kZT1ub2RlOyBycl9jb250ZXh0PWNvbnRleHQ7fVxyXG4gICAgcHJpdmF0ZSBleHBlcmltZW50YWxfX2NyZWF0ZTJGYWN0b3J5IGRlZjtcclxuICAgIHByaXZhdGUgUm9ib3RSYWNvbnRldXJOb2RlIHJyX25vZGU7XHJcbiAgICBwcml2YXRlIENsaWVudENvbnRleHQgcnJfY29udGV4dDtcclxuICAgIHB1YmxpYyBNZXNzYWdlRWxlbWVudFN0cnVjdHVyZSBQYWNrU3RydWN0dXJlKG9iamVjdCBzMSkge1xyXG4gICAgTGlzdDxNZXNzYWdlRWxlbWVudD4gbT1uZXcgTGlzdDxNZXNzYWdlRWxlbWVudD4oKTtcclxuICAgIGlmIChzMSA9PW51bGwpIHJldHVybiBudWxsO1xyXG4gICAgU2Vuc29yUGFja2V0IHMgPSAoU2Vuc29yUGFja2V0KXMxO1xyXG4gICAgTWVzc2FnZUVsZW1lbnRVdGlsLkFkZE1lc3NhZ2VFbGVtZW50KG0sTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTY2FsYXI8Ynl0ZT4oXCJJRFwiLHMuSUQpKTtcclxuICAgIE1lc3NhZ2VFbGVtZW50VXRpbC5BZGRNZXNzYWdlRWxlbWVudChtLE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrQXJyYXk8Ynl0ZT4oXCJEYXRhXCIscy5EYXRhKSk7XHJcbiAgICByZXR1cm4gbmV3IE1lc3NhZ2VFbGVtZW50U3RydWN0dXJlKFwiZXhwZXJpbWVudGFsLmNyZWF0ZTIuU2Vuc29yUGFja2V0XCIsbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVCBVbnBhY2tTdHJ1Y3R1cmU8VD4oTWVzc2FnZUVsZW1lbnRTdHJ1Y3R1cmUgbSkge1xyXG4gICAgaWYgKG0gPT0gbnVsbCApIHJldHVybiBkZWZhdWx0KFQpO1xyXG4gICAgU2Vuc29yUGFja2V0IHM9bmV3IFNlbnNvclBhY2tldCgpO1xyXG4gICAgcy5JRCA9KE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8Ynl0ZT4oTWVzc2FnZUVsZW1lbnQuRmluZEVsZW1lbnQobS5FbGVtZW50cyxcIklEXCIpKSk7XHJcbiAgICBzLkRhdGEgPU1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tBcnJheTxieXRlPihNZXNzYWdlRWxlbWVudC5GaW5kRWxlbWVudChtLkVsZW1lbnRzLFwiRGF0YVwiKSk7XHJcbiAgICBUIHN0OyB0cnkge3N0PShUKSgob2JqZWN0KXMpO30gY2F0Y2ggKEludmFsaWRDYXN0RXhjZXB0aW9uKSB7dGhyb3cgbmV3IERhdGFUeXBlTWlzbWF0Y2hFeGNlcHRpb24oXCJXcm9uZyBzdHJ1Y3R1cmV0eXBlXCIpO31cclxuICAgIHJldHVybiBzdDtcclxuICAgIH1cclxufVxyXG5cclxucHVibGljIGNsYXNzIENyZWF0ZV9zdHViIDogU2VydmljZVN0dWIgLCBDcmVhdGUge1xyXG4gICAgcHJpdmF0ZSBDYWxsYmFja0NsaWVudDxGdW5jPGludCwgaW50LCBDYW5jZWxsYXRpb25Ub2tlbiwgVGFzazxieXRlW10+Pj4gcnJfcGxheV9jYWxsYmFjaztcclxuICAgIHByaXZhdGUgV2lyZTxTZW5zb3JQYWNrZXQ+IHJyX3BhY2tldHM7XHJcbiAgICBwdWJsaWMgQ3JlYXRlX3N0dWIoc3RyaW5nIHBhdGgsIENsaWVudENvbnRleHQgYykgOiBiYXNlKHBhdGgsIGMpIHtcclxuICAgIHJyX3BsYXlfY2FsbGJhY2s9bmV3IENhbGxiYWNrQ2xpZW50PEZ1bmM8aW50LCBpbnQsIENhbmNlbGxhdGlvblRva2VuLCBUYXNrPGJ5dGVbXT4+PihcInBsYXlfY2FsbGJhY2tcIik7XHJcbiAgICBycl9wYWNrZXRzPW5ldyBXaXJlQ2xpZW50PFNlbnNvclBhY2tldD4oXCJwYWNrZXRzXCIsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIFRhc2s8aW50PiBnZXRfRGlzdGFuY2VUcmF2ZWxlZChDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgICAgICBNZXNzYWdlRW50cnkgbSA9IG5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5Qcm9wZXJ0eUdldFJlcSwgXCJEaXN0YW5jZVRyYXZlbGVkXCIpO1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtcj1hd2FpdCBQcm9jZXNzUmVxdWVzdChtLCBjYW5jZWwpO1xyXG4gICAgICAgIE1lc3NhZ2VFbGVtZW50IG1lPW1yLkZpbmRFbGVtZW50KFwidmFsdWVcIik7XHJcbiAgICAgICAgcmV0dXJuIChNZXNzYWdlRWxlbWVudFV0aWwuVW5wYWNrU2NhbGFyPGludD4obWUpKTtcclxuICAgICAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgVGFzayBzZXRfRGlzdGFuY2VUcmF2ZWxlZChpbnQgdmFsdWUsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5Qcm9wZXJ0eVNldFJlcSxcIkRpc3RhbmNlVHJhdmVsZWRcIik7XHJcbiAgICAgICAgTWVzc2FnZUVsZW1lbnRVdGlsLkFkZE1lc3NhZ2VFbGVtZW50KG0sTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTY2FsYXI8aW50PihcInZhbHVlXCIsdmFsdWUpKTtcclxuICAgICAgICBNZXNzYWdlRW50cnkgbXI9YXdhaXQgUHJvY2Vzc1JlcXVlc3QobSwgY2FuY2VsKTtcclxuICAgICAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgVGFzazxpbnQ+IGdldF9BbmdsZVRyYXZlbGVkKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtID0gbmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLlByb3BlcnR5R2V0UmVxLCBcIkFuZ2xlVHJhdmVsZWRcIik7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IG1yPWF3YWl0IFByb2Nlc3NSZXF1ZXN0KG0sIGNhbmNlbCk7XHJcbiAgICAgICAgTWVzc2FnZUVsZW1lbnQgbWU9bXIuRmluZEVsZW1lbnQoXCJ2YWx1ZVwiKTtcclxuICAgICAgICByZXR1cm4gKE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8aW50PihtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBUYXNrIHNldF9BbmdsZVRyYXZlbGVkKGludCB2YWx1ZSwgQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IG09bmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLlByb3BlcnR5U2V0UmVxLFwiQW5nbGVUcmF2ZWxlZFwiKTtcclxuICAgICAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQobSxNZXNzYWdlRWxlbWVudFV0aWwuUGFja1NjYWxhcjxpbnQ+KFwidmFsdWVcIix2YWx1ZSkpO1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtcj1hd2FpdCBQcm9jZXNzUmVxdWVzdChtLCBjYW5jZWwpO1xyXG4gICAgICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBUYXNrPGJ5dGU+IGdldF9CdW1wZXJzKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtID0gbmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLlByb3BlcnR5R2V0UmVxLCBcIkJ1bXBlcnNcIik7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IG1yPWF3YWl0IFByb2Nlc3NSZXF1ZXN0KG0sIGNhbmNlbCk7XHJcbiAgICAgICAgTWVzc2FnZUVsZW1lbnQgbWU9bXIuRmluZEVsZW1lbnQoXCJ2YWx1ZVwiKTtcclxuICAgICAgICByZXR1cm4gKE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8Ynl0ZT4obWUpKTtcclxuICAgICAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgVGFzayBzZXRfQnVtcGVycyhieXRlIHZhbHVlLCBDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgICAgICBNZXNzYWdlRW50cnkgbT1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuUHJvcGVydHlTZXRSZXEsXCJCdW1wZXJzXCIpO1xyXG4gICAgICAgIE1lc3NhZ2VFbGVtZW50VXRpbC5BZGRNZXNzYWdlRWxlbWVudChtLE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrU2NhbGFyPGJ5dGU+KFwidmFsdWVcIix2YWx1ZSkpO1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtcj1hd2FpdCBQcm9jZXNzUmVxdWVzdChtLCBjYW5jZWwpO1xyXG4gICAgICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBUYXNrIERyaXZlKHNob3J0IHZlbG9jaXR5LCBzaG9ydCByYWRpdXMsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbCA9IGRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IHJyX209bmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLkZ1bmN0aW9uQ2FsbFJlcSxcIkRyaXZlXCIpO1xyXG4gICAgTWVzc2FnZUVsZW1lbnRVdGlsLkFkZE1lc3NhZ2VFbGVtZW50KHJyX20sTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTY2FsYXI8c2hvcnQ+KFwidmVsb2NpdHlcIix2ZWxvY2l0eSkpO1xyXG4gICAgTWVzc2FnZUVsZW1lbnRVdGlsLkFkZE1lc3NhZ2VFbGVtZW50KHJyX20sTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTY2FsYXI8c2hvcnQ+KFwicmFkaXVzXCIscmFkaXVzKSk7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IHJyX21lPWF3YWl0IFByb2Nlc3NSZXF1ZXN0KHJyX20sIGNhbmNlbCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgVGFzayBTdGFydFN0cmVhbWluZyhDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWwgPSBkZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBycl9tPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5GdW5jdGlvbkNhbGxSZXEsXCJTdGFydFN0cmVhbWluZ1wiKTtcclxuICAgICAgICBNZXNzYWdlRW50cnkgcnJfbWU9YXdhaXQgUHJvY2Vzc1JlcXVlc3QocnJfbSwgY2FuY2VsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBUYXNrIFN0b3BTdHJlYW1pbmcoQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsID0gZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgICAgICBNZXNzYWdlRW50cnkgcnJfbT1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuRnVuY3Rpb25DYWxsUmVxLFwiU3RvcFN0cmVhbWluZ1wiKTtcclxuICAgICAgICBNZXNzYWdlRW50cnkgcnJfbWU9YXdhaXQgUHJvY2Vzc1JlcXVlc3QocnJfbSwgY2FuY2VsKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBldmVudCBBY3Rpb24gQnVtcDtcclxuICAgIHByb3RlY3RlZCBvdmVycmlkZSB2b2lkIERpc3BhdGNoRXZlbnQoTWVzc2FnZUVudHJ5IHJyX20pIHtcclxuICAgIHN3aXRjaCAocnJfbS5NZW1iZXJOYW1lKSB7XHJcbiAgICBjYXNlIFwiQnVtcFwiOlxyXG4gICAge1xyXG4gICAgaWYgKEJ1bXAgIT0gbnVsbCkgeyBcclxuICAgIEJ1bXAoKTtcclxuICAgIH1cclxuICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICBicmVhaztcclxuICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBDYWxsYmFjazxGdW5jPGludCwgaW50LCBDYW5jZWxsYXRpb25Ub2tlbiwgVGFzazxieXRlW10+Pj4gcGxheV9jYWxsYmFjayB7XHJcbiAgICBnZXQgeyByZXR1cm4gcnJfcGxheV9jYWxsYmFjazsgIH1cclxuICAgIHNldCB7IHRocm93IG5ldyBJbnZhbGlkT3BlcmF0aW9uRXhjZXB0aW9uKCk7fVxyXG4gICAgfVxyXG4gICAgcHVibGljIFdpcmU8U2Vuc29yUGFja2V0PiBwYWNrZXRzIHtcclxuICAgIGdldCB7IHJldHVybiBycl9wYWNrZXRzOyAgfVxyXG4gICAgc2V0IHsgdGhyb3cgbmV3IEludmFsaWRPcGVyYXRpb25FeGNlcHRpb24oKTt9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFBpcGVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYXN5bmMgVGFzazxNZXNzYWdlRW50cnk+IENhbGxiYWNrQ2FsbChNZXNzYWdlRW50cnkgcnJfbSkge1xyXG4gICAgc3RyaW5nIHJyX2VuYW1lPXJyX20uTWVtYmVyTmFtZTtcclxuICAgIE1lc3NhZ2VFbnRyeSBycl9tcj1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuQ2FsbGJhY2tDYWxsUmV0LCBycl9lbmFtZSk7XHJcbiAgICBycl9tci5TZXJ2aWNlUGF0aD1ycl9tLlNlcnZpY2VQYXRoO1xyXG4gICAgcnJfbXIuUmVxdWVzdElEPXJyX20uUmVxdWVzdElEO1xyXG4gICAgc3dpdGNoIChycl9lbmFtZSkge1xyXG4gICAgY2FzZSBcInBsYXlfY2FsbGJhY2tcIjoge1xyXG4gICAgaW50IERpc3RhbmNlVHJhdmVsZWQ9KE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8aW50Pihycl9tLkZpbmRFbGVtZW50KFwiRGlzdGFuY2VUcmF2ZWxlZFwiKSkpO1xyXG4gICAgaW50IEFuZ2xlVHJhdmVsZWQ9KE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8aW50Pihycl9tLkZpbmRFbGVtZW50KFwiQW5nbGVUcmF2ZWxlZFwiKSkpO1xyXG4gICAgdmFyIHJyX3JldD1hd2FpdCBwbGF5X2NhbGxiYWNrLkZ1bmN0aW9uKERpc3RhbmNlVHJhdmVsZWQsIEFuZ2xlVHJhdmVsZWQsIGRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIE1lc3NhZ2VFbGVtZW50VXRpbC5BZGRNZXNzYWdlRWxlbWVudChycl9tcixNZXNzYWdlRWxlbWVudFV0aWwuUGFja0FycmF5PGJ5dGU+KFwicmV0dXJuXCIscnJfcmV0KSk7XHJcbiAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJyX21yO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIHZvaWQgRGlzcGF0Y2hXaXJlTWVzc2FnZShNZXNzYWdlRW50cnkgbSlcclxuICAgIHtcclxuICAgIHN3aXRjaCAobS5NZW1iZXJOYW1lKSB7XHJcbiAgICBjYXNlIFwicGFja2V0c1wiOlxyXG4gICAgdGhpcy5ycl9wYWNrZXRzLldpcmVQYWNrZXRSZWNlaXZlZChtKTtcclxuICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBFeGNlcHRpb24oKTtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG5wdWJsaWMgY2xhc3MgQ3JlYXRlX3NrZWwgOiBTZXJ2aWNlU2tlbCB7XHJcbiAgICBwcm90ZWN0ZWQgQ3JlYXRlIG9iajtcclxuICAgIHB1YmxpYyBDcmVhdGVfc2tlbChzdHJpbmcgcCxDcmVhdGUgbyxTZXJ2ZXJDb250ZXh0IGMpIDogYmFzZShwLG8sYykgeyBvYmo9KENyZWF0ZSlvOyB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZWxlYXNlQ2FzdE9iamVjdCgpIHsgXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgVGFzazxNZXNzYWdlRW50cnk+IENhbGxHZXRQcm9wZXJ0eShNZXNzYWdlRW50cnkgbSkge1xyXG4gICAgc3RyaW5nIGVuYW1lPW0uTWVtYmVyTmFtZTtcclxuICAgIE1lc3NhZ2VFbnRyeSBtcj1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuUHJvcGVydHlHZXRSZXMsIGVuYW1lKTtcclxuICAgIHN3aXRjaCAoZW5hbWUpIHtcclxuICAgIGNhc2UgXCJEaXN0YW5jZVRyYXZlbGVkXCI6XHJcbiAgICB7XHJcbiAgICBpbnQgcmV0PWF3YWl0IG9iai5nZXRfRGlzdGFuY2VUcmF2ZWxlZCgpO1xyXG4gICAgbXIuQWRkRWxlbWVudChNZXNzYWdlRWxlbWVudFV0aWwuUGFja1NjYWxhcjxpbnQ+KFwidmFsdWVcIixyZXQpKTtcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIkFuZ2xlVHJhdmVsZWRcIjpcclxuICAgIHtcclxuICAgIGludCByZXQ9YXdhaXQgb2JqLmdldF9BbmdsZVRyYXZlbGVkKCk7XHJcbiAgICBtci5BZGRFbGVtZW50KE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrU2NhbGFyPGludD4oXCJ2YWx1ZVwiLHJldCkpO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiQnVtcGVyc1wiOlxyXG4gICAge1xyXG4gICAgYnl0ZSByZXQ9YXdhaXQgb2JqLmdldF9CdW1wZXJzKCk7XHJcbiAgICBtci5BZGRFbGVtZW50KE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrU2NhbGFyPGJ5dGU+KFwidmFsdWVcIixyZXQpKTtcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgVGFzazxNZXNzYWdlRW50cnk+IENhbGxTZXRQcm9wZXJ0eShNZXNzYWdlRW50cnkgbSkge1xyXG4gICAgc3RyaW5nIGVuYW1lPW0uTWVtYmVyTmFtZTtcclxuICAgIE1lc3NhZ2VFbGVtZW50IG1lPW0uRmluZEVsZW1lbnQoXCJ2YWx1ZVwiKTtcclxuICAgIE1lc3NhZ2VFbnRyeSBtcj1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuUHJvcGVydHlTZXRSZXMsIGVuYW1lKTtcclxuICAgIHN3aXRjaCAoZW5hbWUpIHtcclxuICAgIGNhc2UgXCJEaXN0YW5jZVRyYXZlbGVkXCI6XHJcbiAgICB7XHJcbiAgICBhd2FpdCBvYmouc2V0X0Rpc3RhbmNlVHJhdmVsZWQoKE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8aW50PihtZSkpKTtcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIkFuZ2xlVHJhdmVsZWRcIjpcclxuICAgIHtcclxuICAgIGF3YWl0IG9iai5zZXRfQW5nbGVUcmF2ZWxlZCgoTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja1NjYWxhcjxpbnQ+KG1lKSkpO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiQnVtcGVyc1wiOlxyXG4gICAge1xyXG4gICAgYXdhaXQgb2JqLnNldF9CdW1wZXJzKChNZXNzYWdlRWxlbWVudFV0aWwuVW5wYWNrU2NhbGFyPGJ5dGU+KG1lKSkpO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbEZ1bmN0aW9uKE1lc3NhZ2VFbnRyeSBycl9tKSB7XHJcbiAgICBzdHJpbmcgcnJfZW5hbWU9cnJfbS5NZW1iZXJOYW1lO1xyXG4gICAgTWVzc2FnZUVudHJ5IHJyX21yPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5GdW5jdGlvbkNhbGxSZXMsIHJyX2VuYW1lKTtcclxuICAgIHN3aXRjaCAocnJfZW5hbWUpIHtcclxuICAgIGNhc2UgXCJEcml2ZVwiOlxyXG4gICAge1xyXG4gICAgc2hvcnQgdmVsb2NpdHk9KE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8c2hvcnQ+KE1lc3NhZ2VFbGVtZW50VXRpbC5GaW5kRWxlbWVudChycl9tLFwidmVsb2NpdHlcIikpKTtcclxuICAgIHNob3J0IHJhZGl1cz0oTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja1NjYWxhcjxzaG9ydD4oTWVzc2FnZUVsZW1lbnRVdGlsLkZpbmRFbGVtZW50KHJyX20sXCJyYWRpdXNcIikpKTtcclxuICAgIGF3YWl0IHRoaXMub2JqLkRyaXZlKHZlbG9jaXR5LCByYWRpdXMsIGRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIHJyX21yLkFkZEVsZW1lbnQoXCJyZXR1cm5cIiwoaW50KTApO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiU3RhcnRTdHJlYW1pbmdcIjpcclxuICAgIHtcclxuICAgIGF3YWl0IHRoaXMub2JqLlN0YXJ0U3RyZWFtaW5nKGRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIHJyX21yLkFkZEVsZW1lbnQoXCJyZXR1cm5cIiwoaW50KTApO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiU3RvcFN0cmVhbWluZ1wiOlxyXG4gICAge1xyXG4gICAgYXdhaXQgdGhpcy5vYmouU3RvcFN0cmVhbWluZyhkZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSk7XHJcbiAgICBycl9tci5BZGRFbGVtZW50KFwicmV0dXJuXCIsKGludCkwKTtcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcnJfbXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgVGFzazxvYmplY3Q+IEdldFN1Yk9iaihzdHJpbmcgbmFtZSwgc3RyaW5nIGluZCkge1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZWdpc3RlckV2ZW50cyhvYmplY3QgcnJvYmoxKSB7XHJcbiAgICBvYmo9KENyZWF0ZSlycm9iajE7XHJcbiAgICBvYmouQnVtcCs9cnJfQnVtcDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFVucmVnaXN0ZXJFdmVudHMob2JqZWN0IHJyb2JqMSkge1xyXG4gICAgb2JqPShDcmVhdGUpcnJvYmoxO1xyXG4gICAgb2JqLkJ1bXAtPXJyX0J1bXA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdm9pZCBycl9CdW1wKCkge1xyXG4gICAgTWVzc2FnZUVudHJ5IHJyX21tPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5FdmVudFJlcSxcIkJ1bXBcIik7XHJcbiAgICB0aGlzLlNlbmRFdmVudChycl9tbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IEdldENhbGxiYWNrRnVuY3Rpb24odWludCBycl9lbmRwb2ludCwgc3RyaW5nIHJyX21lbWJlcm5hbWUpIHtcclxuICAgIHN3aXRjaCAocnJfbWVtYmVybmFtZSkge1xyXG4gICAgY2FzZSBcInBsYXlfY2FsbGJhY2tcIjoge1xyXG4gICAgcmV0dXJuIG5ldyBGdW5jPGludCwgaW50LCBDYW5jZWxsYXRpb25Ub2tlbiwgVGFzazxieXRlW10+PiggYXN5bmMgZGVsZWdhdGUoaW50IERpc3RhbmNlVHJhdmVsZWQsIGludCBBbmdsZVRyYXZlbGVkLCBDYW5jZWxsYXRpb25Ub2tlbiBycl9jYW5jZWwpIHtcclxuICAgIE1lc3NhZ2VFbnRyeSBycl9tbT1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuQ2FsbGJhY2tDYWxsUmVxLFwicGxheV9jYWxsYmFja1wiKTtcclxuICAgIHJyX21tLlNlcnZpY2VQYXRoPW1fU2VydmljZVBhdGg7XHJcbiAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQocnJfbW0sTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTY2FsYXI8aW50PihcIkRpc3RhbmNlVHJhdmVsZWRcIixEaXN0YW5jZVRyYXZlbGVkKSk7XHJcbiAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQocnJfbW0sTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTY2FsYXI8aW50PihcIkFuZ2xlVHJhdmVsZWRcIixBbmdsZVRyYXZlbGVkKSk7XHJcbiAgICBNZXNzYWdlRW50cnkgcnJfbXI9YXdhaXQgUlJDb250ZXh0LlByb2Nlc3NDYWxsYmFja1JlcXVlc3QocnJfbW0scnJfZW5kcG9pbnQscnJfY2FuY2VsKTtcclxuICAgIE1lc3NhZ2VFbGVtZW50IHJyX21lID0gcnJfbXIuRmluZEVsZW1lbnQoXCJyZXR1cm5cIik7XHJcbiAgICByZXR1cm4gTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja0FycmF5PGJ5dGU+KHJyX21lKTtcclxuICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgV2lyZVNlcnZlcjxTZW5zb3JQYWNrZXQ+IHJyX3BhY2tldHM7XHJcbiAgICBwcml2YXRlIGJvb2wgcnJfSW5pdFBpcGVTZXJ2ZXJzUnVuPWZhbHNlO1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHZvaWQgSW5pdFBpcGVTZXJ2ZXJzKG9iamVjdCBvKSB7XHJcbiAgICBpZiAodGhpcy5ycl9Jbml0UGlwZVNlcnZlcnNSdW4pIHJldHVybjtcclxuICAgIHRoaXMucnJfSW5pdFBpcGVTZXJ2ZXJzUnVuPXRydWU7XHJcbiAgICBDcmVhdGUgY2FzdG9iaj0oQ3JlYXRlKW87XHJcbiAgICB0aGlzLnJyX3BhY2tldHM9bmV3IFdpcmVTZXJ2ZXI8U2Vuc29yUGFja2V0PihcInBhY2tldHNcIix0aGlzKTtcclxuICAgIGNhc3RvYmoucGFja2V0cz10aGlzLnJyX3BhY2tldHM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBJbml0Q2FsbGJhY2tTZXJ2ZXJzKG9iamVjdCBycm9iajEpIHtcclxuICAgIG9iaj0oQ3JlYXRlKXJyb2JqMTtcclxuICAgIG9iai5wbGF5X2NhbGxiYWNrPW5ldyBDYWxsYmFja1NlcnZlcjxGdW5jPGludCwgaW50LCBDYW5jZWxsYXRpb25Ub2tlbiwgVGFzazxieXRlW10+Pj4oXCJwbGF5X2NhbGxiYWNrXCIsdGhpcyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgVGFzazxNZXNzYWdlRW50cnk+IENhbGxQaXBlRnVuY3Rpb24oTWVzc2FnZUVudHJ5IG0sRW5kcG9pbnQgZSkge1xyXG4gICAgc3RyaW5nIGVuYW1lPW0uTWVtYmVyTmFtZTtcclxuICAgIHN3aXRjaCAoZW5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8TWVzc2FnZUVudHJ5PiBDYWxsV2lyZUZ1bmN0aW9uKE1lc3NhZ2VFbnRyeSBtLEVuZHBvaW50IGUpIHtcclxuICAgIHN0cmluZyBlbmFtZT1tLk1lbWJlck5hbWU7XHJcbiAgICBzd2l0Y2ggKGVuYW1lKSB7XHJcbiAgICBjYXNlIFwicGFja2V0c1wiOlxyXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucnJfcGFja2V0cy5XaXJlQ29tbWFuZChtLGUpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFBpcGVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtLCBFbmRwb2ludCBlKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIHZvaWQgRGlzcGF0Y2hXaXJlTWVzc2FnZShNZXNzYWdlRW50cnkgbSwgRW5kcG9pbnQgZSlcclxuICAgIHtcclxuICAgIHN3aXRjaCAobS5NZW1iZXJOYW1lKSB7XHJcbiAgICBjYXNlIFwicGFja2V0c1wiOlxyXG4gICAgdGhpcy5ycl9wYWNrZXRzLldpcmVQYWNrZXRSZWNlaXZlZChtLGUpO1xyXG4gICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbE1lbW9yeUZ1bmN0aW9uKE1lc3NhZ2VFbnRyeSBtLEVuZHBvaW50IGUpIHtcclxuICAgIHN0cmluZyBlbmFtZT1tLk1lbWJlck5hbWU7XHJcbiAgICBzd2l0Y2ggKGVuYW1lKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG5wdWJsaWMgY2xhc3MgQ3JlYXRlX2RlZmF1bHRfaW1wbCA6IENyZWF0ZXtcclxuICAgIHByb3RlY3RlZCBDYWxsYmFjazxGdW5jPGludCwgaW50LCBDYW5jZWxsYXRpb25Ub2tlbiwgVGFzazxieXRlW10+Pj4gcnJ2YXJfcGxheV9jYWxsYmFjaztcclxuICAgIHByb3RlY3RlZCBXaXJlQnJvYWRjYXN0ZXI8U2Vuc29yUGFja2V0PiBycnZhcl9wYWNrZXRzO1xyXG4gICAgcHVibGljIHZpcnR1YWwgVGFzazxpbnQ+IGdldF9EaXN0YW5jZVRyYXZlbGVkKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBUYXNrIHNldF9EaXN0YW5jZVRyYXZlbGVkKGludCB2YWx1ZSwgQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB2aXJ0dWFsIFRhc2s8aW50PiBnZXRfQW5nbGVUcmF2ZWxlZChDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZpcnR1YWwgVGFzayBzZXRfQW5nbGVUcmF2ZWxlZChpbnQgdmFsdWUsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBUYXNrPGJ5dGU+IGdldF9CdW1wZXJzKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBUYXNrIHNldF9CdW1wZXJzKGJ5dGUgdmFsdWUsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBUYXNrIERyaXZlKHNob3J0IHZlbG9jaXR5LCBzaG9ydCByYWRpdXMsQ2FuY2VsbGF0aW9uVG9rZW4gcnJfY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB2aXJ0dWFsIFRhc2sgU3RhcnRTdHJlYW1pbmcoQ2FuY2VsbGF0aW9uVG9rZW4gcnJfY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB2aXJ0dWFsIFRhc2sgU3RvcFN0cmVhbWluZyhDYW5jZWxsYXRpb25Ub2tlbiBycl9jYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZpcnR1YWwgZXZlbnQgQWN0aW9uIEJ1bXA7XHJcbiAgICBwdWJsaWMgdmlydHVhbCBDYWxsYmFjazxGdW5jPGludCwgaW50LCBDYW5jZWxsYXRpb25Ub2tlbiwgVGFzazxieXRlW10+Pj4gcGxheV9jYWxsYmFjayB7XHJcbiAgICBnZXQgeyByZXR1cm4gcnJ2YXJfcGxheV9jYWxsYmFjazsgIH1cclxuICAgIHNldCB7XHJcbiAgICBpZiAocnJ2YXJfcGxheV9jYWxsYmFjayE9bnVsbCkgdGhyb3cgbmV3IEludmFsaWRPcGVyYXRpb25FeGNlcHRpb24oXCJDYWxsYmFjayBhbHJlYWR5IHNldFwiKTtcclxuICAgIHJydmFyX3BsYXlfY2FsbGJhY2s9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIHZpcnR1YWwgV2lyZTxTZW5zb3JQYWNrZXQ+IHBhY2tldHMge1xyXG4gICAgZ2V0IHsgcmV0dXJuIHJydmFyX3BhY2tldHMuV2lyZTsgIH1cclxuICAgIHNldCB7XHJcbiAgICBpZiAocnJ2YXJfcGFja2V0cyE9bnVsbCkgdGhyb3cgbmV3IEludmFsaWRPcGVyYXRpb25FeGNlcHRpb24oXCJQaXBlIGFscmVhZHkgc2V0XCIpO1xyXG4gICAgcnJ2YXJfcGFja2V0cz0gbmV3IFdpcmVCcm9hZGNhc3RlcjxTZW5zb3JQYWNrZXQ+KHZhbHVlKTtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIFJSRXh0ZW5zaW9uc1xyXG57XHJcbn1cclxufVxyXG4iLCIvL1RoaXMgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZC4gRE8gTk9UIEVESVQhXHJcbnVzaW5nIFN5c3RlbTtcclxudXNpbmcgUm9ib3RSYWNvbnRldXJXZWI7XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nO1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxuI3ByYWdtYSB3YXJuaW5nIGRpc2FibGUgMDEwOFxyXG5cclxubmFtZXNwYWNlIGV4cGVyaW1lbnRhbC5jcmVhdGUyXHJcbntcclxuW1JvYm90UmFjb250ZXVyU2VydmljZVN0cnVjdChcImV4cGVyaW1lbnRhbC5jcmVhdGUyLlNlbnNvclBhY2tldFwiKV1cclxucHVibGljIGNsYXNzIFNlbnNvclBhY2tldFxyXG57XHJcbiAgICBwdWJsaWMgYnl0ZSBJRDtcclxuICAgIHB1YmxpYyBieXRlW10gRGF0YTtcclxufVxyXG5cclxuW1JvYm90UmFjb250ZXVyU2VydmljZU9iamVjdEludGVyZmFjZShcImV4cGVyaW1lbnRhbC5jcmVhdGUyLkNyZWF0ZVwiKV1cclxucHVibGljIGludGVyZmFjZSBDcmVhdGVcclxue1xyXG4gICAgVGFzazxpbnQ+IGdldF9EaXN0YW5jZVRyYXZlbGVkKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSk7XHJcbiAgICBUYXNrIHNldF9EaXN0YW5jZVRyYXZlbGVkKGludCB2YWx1ZSwgQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIFRhc2s8aW50PiBnZXRfQW5nbGVUcmF2ZWxlZChDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpO1xyXG4gICAgVGFzayBzZXRfQW5nbGVUcmF2ZWxlZChpbnQgdmFsdWUsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSk7XHJcbiAgICBUYXNrPGJ5dGU+IGdldF9CdW1wZXJzKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSk7XHJcbiAgICBUYXNrIHNldF9CdW1wZXJzKGJ5dGUgdmFsdWUsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSk7XHJcbiAgICBUYXNrIERyaXZlKHNob3J0IHZlbG9jaXR5LCBzaG9ydCByYWRpdXMsQ2FuY2VsbGF0aW9uVG9rZW4gcnJfY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIFRhc2sgU3RhcnRTdHJlYW1pbmcoQ2FuY2VsbGF0aW9uVG9rZW4gcnJfY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIFRhc2sgU3RvcFN0cmVhbWluZyhDYW5jZWxsYXRpb25Ub2tlbiBycl9jYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpO1xyXG4gICAgZXZlbnQgQWN0aW9uIEJ1bXA7XHJcbiAgICBDYWxsYmFjazxGdW5jPGludCwgaW50LCBDYW5jZWxsYXRpb25Ub2tlbiwgVGFzazxieXRlW10+Pj4gcGxheV9jYWxsYmFjayB7Z2V0OyBzZXQ7fVxyXG4gICAgV2lyZTxTZW5zb3JQYWNrZXQ+IHBhY2tldHMgeyBnZXQ7IHNldDsgfVxyXG59XHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIGV4cGVyaW1lbnRhbF9fY3JlYXRlMkNvbnN0YW50cyAge1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBDcmVhdGVcclxuICAgIHtcclxuICAgIHB1YmxpYyBjb25zdCBzaG9ydCBEUklWRV9TVFJBSUdIVD0zMjc2NztcclxuICAgIHB1YmxpYyBjb25zdCBzaG9ydCBTUElOX0NMT0NLV0lTRT0tMTtcclxuICAgIHB1YmxpYyBjb25zdCBzaG9ydCBTUElOX0NPVU5URVJDTE9DS1dJU0U9MTtcclxuICAgIH1cclxufVxyXG59XHJcbiIsIi8vVGhpcyBmaWxlIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkLiBETyBOT1QgRURJVCFcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBSb2JvdFJhY29udGV1cldlYjtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmc7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbiNwcmFnbWEgd2FybmluZyBkaXNhYmxlIDAxMDhcclxuXHJcbm5hbWVzcGFjZSBleHBlcmltZW50YWwuY3JlYXRld2ViY2FtMlxyXG57XHJcbnB1YmxpYyBjbGFzcyBleHBlcmltZW50YWxfX2NyZWF0ZXdlYmNhbTJGYWN0b3J5IDogU2VydmljZUZhY3Rvcnlcclxue1xyXG4gICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBEZWZTdHJpbmcoKVxyXG57XHJcbiAgICBjb25zdCBzdHJpbmcgcz1cIiNTZXJ2aWNlIHRvIHByb3ZpZGUgc2FtcGxlIGludGVyZmFjZSB0byB3ZWJjYW1zXFxuc2VydmljZSBleHBlcmltZW50YWwuY3JlYXRld2ViY2FtMlxcblxcbnN0ZHZlciAwLjlcXG5cXG5zdHJ1Y3QgV2ViY2FtSW1hZ2VcXG5maWVsZCBpbnQzMiB3aWR0aFxcbmZpZWxkIGludDMyIGhlaWdodFxcbmZpZWxkIGludDMyIHN0ZXBcXG5maWVsZCB1aW50OFtdIGRhdGFcXG5lbmRcXG5cXG5zdHJ1Y3QgV2ViY2FtSW1hZ2Vfc2l6ZVxcbmZpZWxkIGludDMyIHdpZHRoXFxuZmllbGQgaW50MzIgaGVpZ2h0XFxuZmllbGQgaW50MzIgc3RlcFxcbmVuZFxcblxcbm9iamVjdCBXZWJjYW1cXG5wcm9wZXJ0eSBzdHJpbmcgTmFtZSBbcmVhZG9ubHldXFxuZnVuY3Rpb24gV2ViY2FtSW1hZ2UgQ2FwdHVyZUZyYW1lKClcXG5cXG5mdW5jdGlvbiB2b2lkIFN0YXJ0U3RyZWFtaW5nKClcXG5mdW5jdGlvbiB2b2lkIFN0b3BTdHJlYW1pbmcoKVxcbnBpcGUgV2ViY2FtSW1hZ2UgRnJhbWVTdHJlYW0gW3JlYWRvbmx5XVxcblxcbmZ1bmN0aW9uIFdlYmNhbUltYWdlX3NpemUgQ2FwdHVyZUZyYW1lVG9CdWZmZXIoKVxcbm1lbW9yeSB1aW50OFtdIGJ1ZmZlciBbcmVhZG9ubHldXFxubWVtb3J5IHVpbnQ4WypdIG11bHRpZGltYnVmZmVyIFtyZWFkb25seV1cXG5cXG5lbmRcXG5cXG5vYmplY3QgV2ViY2FtSG9zdFxcbnByb3BlcnR5IHN0cmluZ3tpbnQzMn0gV2ViY2FtTmFtZXMgW3JlYWRvbmx5XVxcbm9ianJlZiBXZWJjYW17aW50MzJ9IFdlYmNhbXNcXG5lbmRcXG5cIjtcclxuICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIHN0cmluZyBHZXRTZXJ2aWNlTmFtZSgpIHtyZXR1cm4gXCJleHBlcmltZW50YWwuY3JlYXRld2ViY2FtMlwiO31cclxuICAgIHB1YmxpYyBXZWJjYW1JbWFnZV9zdHViIFdlYmNhbUltYWdlX3N0dWJlbnRyeTtcclxuICAgIHB1YmxpYyBXZWJjYW1JbWFnZV9zaXplX3N0dWIgV2ViY2FtSW1hZ2Vfc2l6ZV9zdHViZW50cnk7XHJcbiAgICBwdWJsaWMgZXhwZXJpbWVudGFsX19jcmVhdGV3ZWJjYW0yRmFjdG9yeShSb2JvdFJhY29udGV1ck5vZGUgbm9kZSA9IG51bGwsIENsaWVudENvbnRleHQgY29udGV4dCA9IG51bGwpIDogYmFzZShub2RlLGNvbnRleHQpXHJcbntcclxuICAgIFdlYmNhbUltYWdlX3N0dWJlbnRyeT1uZXcgV2ViY2FtSW1hZ2Vfc3R1Yih0aGlzLHRoaXMubm9kZSx0aGlzLmNvbnRleHQpO1xyXG4gICAgV2ViY2FtSW1hZ2Vfc2l6ZV9zdHViZW50cnk9bmV3IFdlYmNhbUltYWdlX3NpemVfc3R1Yih0aGlzLHRoaXMubm9kZSx0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIElTdHJ1Y3R1cmVTdHViIEZpbmRTdHJ1Y3R1cmVTdHViKHN0cmluZyBvYmplY3R0eXBlKVxyXG4gICAge1xyXG4gICAgaWYgKG9iamVjdHR5cGU9PVwiV2ViY2FtSW1hZ2VcIilcclxuICAgIHJldHVybiBXZWJjYW1JbWFnZV9zdHViZW50cnk7XHJcbiAgICBpZiAob2JqZWN0dHlwZT09XCJXZWJjYW1JbWFnZV9zaXplXCIpXHJcbiAgICByZXR1cm4gV2ViY2FtSW1hZ2Vfc2l6ZV9zdHViZW50cnk7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVFeGNlcHRpb24oXCJDYW5ub3QgZmluZCBhcHByb3ByaWF0ZSBzdHJ1Y3R1cmUgc3R1YlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBJUG9kU3R1YiBGaW5kUG9kU3R1YihzdHJpbmcgb2JqZWN0dHlwZSlcclxuICAgIHtcclxuICAgIHRocm93IG5ldyBEYXRhVHlwZUV4Y2VwdGlvbihcIkNhbm5vdCBmaW5kIGFwcHJvcHJpYXRlIHBvZCBzdHViXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIElOYW1lZEFycmF5U3R1YiBGaW5kTmFtZWRBcnJheVN0dWIoc3RyaW5nIG9iamVjdHR5cGUpXHJcbiAgICB7XHJcbiAgICB0aHJvdyBuZXcgRGF0YVR5cGVFeGNlcHRpb24oXCJDYW5ub3QgZmluZCBhcHByb3ByaWF0ZSBwb2Qgc3R1YlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBTZXJ2aWNlU3R1YiBDcmVhdGVTdHViKHN0cmluZyBvYmplY3R0eXBlLCBzdHJpbmcgcGF0aCwgQ2xpZW50Q29udGV4dCBjb250ZXh0KSB7XHJcbiAgICBzdHJpbmcgb2Jqc2hvcnQ7XHJcbiAgICBpZiAoQ29tcGFyZU5hbWVzcGFjZShvYmplY3R0eXBlLCBvdXQgb2Jqc2hvcnQpKSB7XHJcbiAgICBzd2l0Y2ggKG9ianNob3J0KSB7XHJcbiAgICBjYXNlIFwiV2ViY2FtXCI6XHJcbiAgICByZXR1cm4gbmV3IFdlYmNhbV9zdHViKHBhdGgsIGNvbnRleHQpO1xyXG4gICAgY2FzZSBcIldlYmNhbUhvc3RcIjpcclxuICAgIHJldHVybiBuZXcgV2ViY2FtSG9zdF9zdHViKHBhdGgsIGNvbnRleHQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiBiYXNlLkNyZWF0ZVN0dWIob2JqZWN0dHlwZSxwYXRoLGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IFNlcnZpY2VFeGNlcHRpb24oXCJDb3VsZCBub3QgY3JlYXRlIHN0dWJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgU2VydmljZVNrZWwgQ3JlYXRlU2tlbChzdHJpbmcgcGF0aCxvYmplY3Qgb2JqLFNlcnZlckNvbnRleHQgY29udGV4dCkge1xyXG4gICAgc3RyaW5nIG9ianR5cGU9U2VydmljZURlZmluaXRpb25VdGlsLkZpbmRPYmplY3RSUlR5cGUob2JqKTtcclxuICAgIHN0cmluZyBvYmpzaG9ydDtcclxuICAgIGlmIChDb21wYXJlTmFtZXNwYWNlKG9ianR5cGUsIG91dCBvYmpzaG9ydCkpIHtcclxuICAgIHN3aXRjaChvYmpzaG9ydCkge1xyXG4gICAgY2FzZSBcIldlYmNhbVwiOlxyXG4gICAgcmV0dXJuIG5ldyBXZWJjYW1fc2tlbChwYXRoLChXZWJjYW0pb2JqLGNvbnRleHQpO1xyXG4gICAgY2FzZSBcIldlYmNhbUhvc3RcIjpcclxuICAgIHJldHVybiBuZXcgV2ViY2FtSG9zdF9za2VsKHBhdGgsKFdlYmNhbUhvc3Qpb2JqLGNvbnRleHQpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgIHJldHVybiBiYXNlLkNyZWF0ZVNrZWwocGF0aCxvYmosY29udGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgU2VydmljZUV4Y2VwdGlvbihcIkNvdWxkIG5vdCBjcmVhdGUgc2tlbFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBSb2JvdFJhY29udGV1ckV4Y2VwdGlvbiBEb3duQ2FzdEV4Y2VwdGlvbihSb2JvdFJhY29udGV1ckV4Y2VwdGlvbiBycl9leHApXHJcbiAgICB7XHJcbiAgICBpZiAocnJfZXhwPT1udWxsKSByZXR1cm4gcnJfZXhwO1xyXG4gICAgc3RyaW5nIHJyX3R5cGU9cnJfZXhwLkVycm9yO1xyXG4gICAgaWYgKCFycl90eXBlLkNvbnRhaW5zKFwiLlwiKSkgcmV0dXJuIHJyX2V4cDtcclxuICAgIHN0cmluZyBycl9zdHlwZTtcclxuICAgIGlmIChDb21wYXJlTmFtZXNwYWNlKHJyX3R5cGUsIG91dCBycl9zdHlwZSkpIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gYmFzZS5Eb3duQ2FzdEV4Y2VwdGlvbihycl9leHApOyBcclxuICAgIH1cclxuICAgIHJldHVybiBycl9leHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbnB1YmxpYyBjbGFzcyBXZWJjYW1JbWFnZV9zdHViIDogSVN0cnVjdHVyZVN0dWIge1xyXG4gICAgcHVibGljIFdlYmNhbUltYWdlX3N0dWIoZXhwZXJpbWVudGFsX19jcmVhdGV3ZWJjYW0yRmFjdG9yeSBkLCBSb2JvdFJhY29udGV1ck5vZGUgbm9kZSwgQ2xpZW50Q29udGV4dCBjb250ZXh0KSB7ZGVmPWQ7IHJyX25vZGU9bm9kZTsgcnJfY29udGV4dD1jb250ZXh0O31cclxuICAgIHByaXZhdGUgZXhwZXJpbWVudGFsX19jcmVhdGV3ZWJjYW0yRmFjdG9yeSBkZWY7XHJcbiAgICBwcml2YXRlIFJvYm90UmFjb250ZXVyTm9kZSBycl9ub2RlO1xyXG4gICAgcHJpdmF0ZSBDbGllbnRDb250ZXh0IHJyX2NvbnRleHQ7XHJcbiAgICBwdWJsaWMgTWVzc2FnZUVsZW1lbnRTdHJ1Y3R1cmUgUGFja1N0cnVjdHVyZShvYmplY3QgczEpIHtcclxuICAgIExpc3Q8TWVzc2FnZUVsZW1lbnQ+IG09bmV3IExpc3Q8TWVzc2FnZUVsZW1lbnQ+KCk7XHJcbiAgICBpZiAoczEgPT1udWxsKSByZXR1cm4gbnVsbDtcclxuICAgIFdlYmNhbUltYWdlIHMgPSAoV2ViY2FtSW1hZ2UpczE7XHJcbiAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQobSxNZXNzYWdlRWxlbWVudFV0aWwuUGFja1NjYWxhcjxpbnQ+KFwid2lkdGhcIixzLndpZHRoKSk7XHJcbiAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQobSxNZXNzYWdlRWxlbWVudFV0aWwuUGFja1NjYWxhcjxpbnQ+KFwiaGVpZ2h0XCIscy5oZWlnaHQpKTtcclxuICAgIE1lc3NhZ2VFbGVtZW50VXRpbC5BZGRNZXNzYWdlRWxlbWVudChtLE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrU2NhbGFyPGludD4oXCJzdGVwXCIscy5zdGVwKSk7XHJcbiAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQobSxNZXNzYWdlRWxlbWVudFV0aWwuUGFja0FycmF5PGJ5dGU+KFwiZGF0YVwiLHMuZGF0YSkpO1xyXG4gICAgcmV0dXJuIG5ldyBNZXNzYWdlRWxlbWVudFN0cnVjdHVyZShcImV4cGVyaW1lbnRhbC5jcmVhdGV3ZWJjYW0yLldlYmNhbUltYWdlXCIsbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgVCBVbnBhY2tTdHJ1Y3R1cmU8VD4oTWVzc2FnZUVsZW1lbnRTdHJ1Y3R1cmUgbSkge1xyXG4gICAgaWYgKG0gPT0gbnVsbCApIHJldHVybiBkZWZhdWx0KFQpO1xyXG4gICAgV2ViY2FtSW1hZ2Ugcz1uZXcgV2ViY2FtSW1hZ2UoKTtcclxuICAgIHMud2lkdGggPShNZXNzYWdlRWxlbWVudFV0aWwuVW5wYWNrU2NhbGFyPGludD4oTWVzc2FnZUVsZW1lbnQuRmluZEVsZW1lbnQobS5FbGVtZW50cyxcIndpZHRoXCIpKSk7XHJcbiAgICBzLmhlaWdodCA9KE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8aW50PihNZXNzYWdlRWxlbWVudC5GaW5kRWxlbWVudChtLkVsZW1lbnRzLFwiaGVpZ2h0XCIpKSk7XHJcbiAgICBzLnN0ZXAgPShNZXNzYWdlRWxlbWVudFV0aWwuVW5wYWNrU2NhbGFyPGludD4oTWVzc2FnZUVsZW1lbnQuRmluZEVsZW1lbnQobS5FbGVtZW50cyxcInN0ZXBcIikpKTtcclxuICAgIHMuZGF0YSA9TWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja0FycmF5PGJ5dGU+KE1lc3NhZ2VFbGVtZW50LkZpbmRFbGVtZW50KG0uRWxlbWVudHMsXCJkYXRhXCIpKTtcclxuICAgIFQgc3Q7IHRyeSB7c3Q9KFQpKChvYmplY3Qpcyk7fSBjYXRjaCAoSW52YWxpZENhc3RFeGNlcHRpb24pIHt0aHJvdyBuZXcgRGF0YVR5cGVNaXNtYXRjaEV4Y2VwdGlvbihcIldyb25nIHN0cnVjdHVyZXR5cGVcIik7fVxyXG4gICAgcmV0dXJuIHN0O1xyXG4gICAgfVxyXG59XHJcblxyXG5wdWJsaWMgY2xhc3MgV2ViY2FtSW1hZ2Vfc2l6ZV9zdHViIDogSVN0cnVjdHVyZVN0dWIge1xyXG4gICAgcHVibGljIFdlYmNhbUltYWdlX3NpemVfc3R1YihleHBlcmltZW50YWxfX2NyZWF0ZXdlYmNhbTJGYWN0b3J5IGQsIFJvYm90UmFjb250ZXVyTm9kZSBub2RlLCBDbGllbnRDb250ZXh0IGNvbnRleHQpIHtkZWY9ZDsgcnJfbm9kZT1ub2RlOyBycl9jb250ZXh0PWNvbnRleHQ7fVxyXG4gICAgcHJpdmF0ZSBleHBlcmltZW50YWxfX2NyZWF0ZXdlYmNhbTJGYWN0b3J5IGRlZjtcclxuICAgIHByaXZhdGUgUm9ib3RSYWNvbnRldXJOb2RlIHJyX25vZGU7XHJcbiAgICBwcml2YXRlIENsaWVudENvbnRleHQgcnJfY29udGV4dDtcclxuICAgIHB1YmxpYyBNZXNzYWdlRWxlbWVudFN0cnVjdHVyZSBQYWNrU3RydWN0dXJlKG9iamVjdCBzMSkge1xyXG4gICAgTGlzdDxNZXNzYWdlRWxlbWVudD4gbT1uZXcgTGlzdDxNZXNzYWdlRWxlbWVudD4oKTtcclxuICAgIGlmIChzMSA9PW51bGwpIHJldHVybiBudWxsO1xyXG4gICAgV2ViY2FtSW1hZ2Vfc2l6ZSBzID0gKFdlYmNhbUltYWdlX3NpemUpczE7XHJcbiAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQobSxNZXNzYWdlRWxlbWVudFV0aWwuUGFja1NjYWxhcjxpbnQ+KFwid2lkdGhcIixzLndpZHRoKSk7XHJcbiAgICBNZXNzYWdlRWxlbWVudFV0aWwuQWRkTWVzc2FnZUVsZW1lbnQobSxNZXNzYWdlRWxlbWVudFV0aWwuUGFja1NjYWxhcjxpbnQ+KFwiaGVpZ2h0XCIscy5oZWlnaHQpKTtcclxuICAgIE1lc3NhZ2VFbGVtZW50VXRpbC5BZGRNZXNzYWdlRWxlbWVudChtLE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrU2NhbGFyPGludD4oXCJzdGVwXCIscy5zdGVwKSk7XHJcbiAgICByZXR1cm4gbmV3IE1lc3NhZ2VFbGVtZW50U3RydWN0dXJlKFwiZXhwZXJpbWVudGFsLmNyZWF0ZXdlYmNhbTIuV2ViY2FtSW1hZ2Vfc2l6ZVwiLG0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFQgVW5wYWNrU3RydWN0dXJlPFQ+KE1lc3NhZ2VFbGVtZW50U3RydWN0dXJlIG0pIHtcclxuICAgIGlmIChtID09IG51bGwgKSByZXR1cm4gZGVmYXVsdChUKTtcclxuICAgIFdlYmNhbUltYWdlX3NpemUgcz1uZXcgV2ViY2FtSW1hZ2Vfc2l6ZSgpO1xyXG4gICAgcy53aWR0aCA9KE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8aW50PihNZXNzYWdlRWxlbWVudC5GaW5kRWxlbWVudChtLkVsZW1lbnRzLFwid2lkdGhcIikpKTtcclxuICAgIHMuaGVpZ2h0ID0oTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja1NjYWxhcjxpbnQ+KE1lc3NhZ2VFbGVtZW50LkZpbmRFbGVtZW50KG0uRWxlbWVudHMsXCJoZWlnaHRcIikpKTtcclxuICAgIHMuc3RlcCA9KE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTY2FsYXI8aW50PihNZXNzYWdlRWxlbWVudC5GaW5kRWxlbWVudChtLkVsZW1lbnRzLFwic3RlcFwiKSkpO1xyXG4gICAgVCBzdDsgdHJ5IHtzdD0oVCkoKG9iamVjdClzKTt9IGNhdGNoIChJbnZhbGlkQ2FzdEV4Y2VwdGlvbikge3Rocm93IG5ldyBEYXRhVHlwZU1pc21hdGNoRXhjZXB0aW9uKFwiV3Jvbmcgc3RydWN0dXJldHlwZVwiKTt9XHJcbiAgICByZXR1cm4gc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbnB1YmxpYyBjbGFzcyBXZWJjYW1fc3R1YiA6IFNlcnZpY2VTdHViICwgV2ViY2FtIHtcclxuICAgIHByaXZhdGUgUGlwZTxXZWJjYW1JbWFnZT4gcnJfRnJhbWVTdHJlYW07XHJcbiAgICBwcml2YXRlIEFycmF5TWVtb3J5PGJ5dGU+IHJyX2J1ZmZlcjtcclxuICAgIHByaXZhdGUgTXVsdGlEaW1BcnJheU1lbW9yeTxieXRlPiBycl9tdWx0aWRpbWJ1ZmZlcjtcclxuICAgIHB1YmxpYyBXZWJjYW1fc3R1YihzdHJpbmcgcGF0aCwgQ2xpZW50Q29udGV4dCBjKSA6IGJhc2UocGF0aCwgYykge1xyXG4gICAgcnJfRnJhbWVTdHJlYW09bmV3IFBpcGVDbGllbnQ8V2ViY2FtSW1hZ2U+KFwiRnJhbWVTdHJlYW1cIiwgdGhpcyk7XHJcbiAgICBycl9idWZmZXI9bmV3IEFycmF5TWVtb3J5Q2xpZW50PGJ5dGU+KFwiYnVmZmVyXCIsdGhpcywgTWVtYmVyRGVmaW5pdGlvbl9EaXJlY3Rpb24ucmVhZG9ubHlfKTtcclxuICAgIHJyX211bHRpZGltYnVmZmVyPW5ldyBNdWx0aURpbUFycmF5TWVtb3J5Q2xpZW50PGJ5dGU+KFwibXVsdGlkaW1idWZmZXJcIix0aGlzLE1lbWJlckRlZmluaXRpb25fRGlyZWN0aW9uLnJlYWRvbmx5Xyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgVGFzazxzdHJpbmc+IGdldF9OYW1lKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtID0gbmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLlByb3BlcnR5R2V0UmVxLCBcIk5hbWVcIik7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IG1yPWF3YWl0IFByb2Nlc3NSZXF1ZXN0KG0sIGNhbmNlbCk7XHJcbiAgICAgICAgTWVzc2FnZUVsZW1lbnQgbWU9bXIuRmluZEVsZW1lbnQoXCJ2YWx1ZVwiKTtcclxuICAgICAgICByZXR1cm4gTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja1N0cmluZyhtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgcHVibGljIGFzeW5jIFRhc2sgc2V0X05hbWUoc3RyaW5nIHZhbHVlLCBDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgICAgICBNZXNzYWdlRW50cnkgbT1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuUHJvcGVydHlTZXRSZXEsXCJOYW1lXCIpO1xyXG4gICAgICAgIE1lc3NhZ2VFbGVtZW50VXRpbC5BZGRNZXNzYWdlRWxlbWVudChtLE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrU3RyaW5nKFwidmFsdWVcIix2YWx1ZSkpO1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtcj1hd2FpdCBQcm9jZXNzUmVxdWVzdChtLCBjYW5jZWwpO1xyXG4gICAgICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBUYXNrPFdlYmNhbUltYWdlPiBDYXB0dXJlRnJhbWUoQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsID0gZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgICAgICBNZXNzYWdlRW50cnkgcnJfbT1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuRnVuY3Rpb25DYWxsUmVxLFwiQ2FwdHVyZUZyYW1lXCIpO1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBycl9tZT1hd2FpdCBQcm9jZXNzUmVxdWVzdChycl9tLCBjYW5jZWwpO1xyXG4gICAgcmV0dXJuIE1lc3NhZ2VFbGVtZW50VXRpbC5VbnBhY2tTdHJ1Y3R1cmU8V2ViY2FtSW1hZ2U+KHJyX25vZGUsIHJyX2NvbnRleHQsIHJyX21lLkZpbmRFbGVtZW50KFwicmV0dXJuXCIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhc3luYyBUYXNrIFN0YXJ0U3RyZWFtaW5nKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbCA9IGRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IHJyX209bmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLkZ1bmN0aW9uQ2FsbFJlcSxcIlN0YXJ0U3RyZWFtaW5nXCIpO1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBycl9tZT1hd2FpdCBQcm9jZXNzUmVxdWVzdChycl9tLCBjYW5jZWwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIFRhc2sgU3RvcFN0cmVhbWluZyhDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWwgPSBkZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBycl9tPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5GdW5jdGlvbkNhbGxSZXEsXCJTdG9wU3RyZWFtaW5nXCIpO1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBycl9tZT1hd2FpdCBQcm9jZXNzUmVxdWVzdChycl9tLCBjYW5jZWwpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIFRhc2s8V2ViY2FtSW1hZ2Vfc2l6ZT4gQ2FwdHVyZUZyYW1lVG9CdWZmZXIoQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsID0gZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgICAgICBNZXNzYWdlRW50cnkgcnJfbT1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuRnVuY3Rpb25DYWxsUmVxLFwiQ2FwdHVyZUZyYW1lVG9CdWZmZXJcIik7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IHJyX21lPWF3YWl0IFByb2Nlc3NSZXF1ZXN0KHJyX20sIGNhbmNlbCk7XHJcbiAgICByZXR1cm4gTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja1N0cnVjdHVyZTxXZWJjYW1JbWFnZV9zaXplPihycl9ub2RlLCBycl9jb250ZXh0LCBycl9tZS5GaW5kRWxlbWVudChcInJldHVyblwiKSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaEV2ZW50KE1lc3NhZ2VFbnRyeSBycl9tKSB7XHJcbiAgICBzd2l0Y2ggKHJyX20uTWVtYmVyTmFtZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFBpcGU8V2ViY2FtSW1hZ2U+IEZyYW1lU3RyZWFtIHtcclxuICAgIGdldCB7IHJldHVybiBycl9GcmFtZVN0cmVhbTsgIH1cclxuICAgIHNldCB7IHRocm93IG5ldyBJbnZhbGlkT3BlcmF0aW9uRXhjZXB0aW9uKCk7fVxyXG4gICAgfVxyXG4gICAgcHVibGljIEFycmF5TWVtb3J5PGJ5dGU+IGJ1ZmZlciB7IFxyXG4gICAgZ2V0IHsgcmV0dXJuIHJyX2J1ZmZlcjsgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIE11bHRpRGltQXJyYXlNZW1vcnk8Ynl0ZT4gbXVsdGlkaW1idWZmZXIge1xyXG4gICAgZ2V0IHsgcmV0dXJuIHJyX211bHRpZGltYnVmZmVyOyB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFBpcGVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGNhc2UgXCJGcmFtZVN0cmVhbVwiOlxyXG4gICAgdGhpcy5ycl9GcmFtZVN0cmVhbS5QaXBlUGFja2V0UmVjZWl2ZWQobSk7XHJcbiAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYXN5bmMgVGFzazxNZXNzYWdlRW50cnk+IENhbGxiYWNrQ2FsbChNZXNzYWdlRW50cnkgcnJfbSkge1xyXG4gICAgc3RyaW5nIHJyX2VuYW1lPXJyX20uTWVtYmVyTmFtZTtcclxuICAgIE1lc3NhZ2VFbnRyeSBycl9tcj1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuQ2FsbGJhY2tDYWxsUmV0LCBycl9lbmFtZSk7XHJcbiAgICBycl9tci5TZXJ2aWNlUGF0aD1ycl9tLlNlcnZpY2VQYXRoO1xyXG4gICAgcnJfbXIuUmVxdWVzdElEPXJyX20uUmVxdWVzdElEO1xyXG4gICAgc3dpdGNoIChycl9lbmFtZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcnJfbXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFdpcmVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxucHVibGljIGNsYXNzIFdlYmNhbUhvc3Rfc3R1YiA6IFNlcnZpY2VTdHViICwgV2ViY2FtSG9zdCB7XHJcbiAgICBwdWJsaWMgV2ViY2FtSG9zdF9zdHViKHN0cmluZyBwYXRoLCBDbGllbnRDb250ZXh0IGMpIDogYmFzZShwYXRoLCBjKSB7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgVGFzazxEaWN0aW9uYXJ5PGludCxzdHJpbmc+PiBnZXRfV2ViY2FtTmFtZXMoQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IG0gPSBuZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuUHJvcGVydHlHZXRSZXEsIFwiV2ViY2FtTmFtZXNcIik7XHJcbiAgICAgICAgTWVzc2FnZUVudHJ5IG1yPWF3YWl0IFByb2Nlc3NSZXF1ZXN0KG0sIGNhbmNlbCk7XHJcbiAgICAgICAgTWVzc2FnZUVsZW1lbnQgbWU9bXIuRmluZEVsZW1lbnQoXCJ2YWx1ZVwiKTtcclxuICAgICAgICByZXR1cm4gTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja01hcDxpbnQsc3RyaW5nPihycl9ub2RlLCBycl9jb250ZXh0LCBtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgcHVibGljIGFzeW5jIFRhc2sgc2V0X1dlYmNhbU5hbWVzKERpY3Rpb25hcnk8aW50LHN0cmluZz4gdmFsdWUsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgICAgIE1lc3NhZ2VFbnRyeSBtPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5Qcm9wZXJ0eVNldFJlcSxcIldlYmNhbU5hbWVzXCIpO1xyXG4gICAgICAgIE1lc3NhZ2VFbGVtZW50VXRpbC5BZGRNZXNzYWdlRWxlbWVudChtLE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrTWFwVHlwZTxpbnQsc3RyaW5nPihycl9ub2RlLCBycl9jb250ZXh0LCBcInZhbHVlXCIsdmFsdWUpKTtcclxuICAgICAgICBNZXNzYWdlRW50cnkgbXI9YXdhaXQgUHJvY2Vzc1JlcXVlc3QobSwgY2FuY2VsKTtcclxuICAgICAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaEV2ZW50KE1lc3NhZ2VFbnRyeSBycl9tKSB7XHJcbiAgICBzd2l0Y2ggKHJyX20uTWVtYmVyTmFtZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGFzeW5jIFRhc2s8V2ViY2FtPiBnZXRfV2ViY2FtcyhpbnQgaW5kLCBDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgIHJldHVybiAoV2ViY2FtKWF3YWl0IEZpbmRPYmpSZWZUeXBlZChcIldlYmNhbXNcIixpbmQuVG9TdHJpbmcoKSxcImV4cGVyaW1lbnRhbC5jcmVhdGV3ZWJjYW0yLldlYmNhbVwiLGNhbmNlbCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFBpcGVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgYXN5bmMgVGFzazxNZXNzYWdlRW50cnk+IENhbGxiYWNrQ2FsbChNZXNzYWdlRW50cnkgcnJfbSkge1xyXG4gICAgc3RyaW5nIHJyX2VuYW1lPXJyX20uTWVtYmVyTmFtZTtcclxuICAgIE1lc3NhZ2VFbnRyeSBycl9tcj1uZXcgTWVzc2FnZUVudHJ5KE1lc3NhZ2VFbnRyeVR5cGUuQ2FsbGJhY2tDYWxsUmV0LCBycl9lbmFtZSk7XHJcbiAgICBycl9tci5TZXJ2aWNlUGF0aD1ycl9tLlNlcnZpY2VQYXRoO1xyXG4gICAgcnJfbXIuUmVxdWVzdElEPXJyX20uUmVxdWVzdElEO1xyXG4gICAgc3dpdGNoIChycl9lbmFtZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcnJfbXI7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFdpcmVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxucHVibGljIGNsYXNzIFdlYmNhbV9za2VsIDogU2VydmljZVNrZWwge1xyXG4gICAgcHJvdGVjdGVkIFdlYmNhbSBvYmo7XHJcbiAgICBwdWJsaWMgV2ViY2FtX3NrZWwoc3RyaW5nIHAsV2ViY2FtIG8sU2VydmVyQ29udGV4dCBjKSA6IGJhc2UocCxvLGMpIHsgb2JqPShXZWJjYW0pbzsgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIHZvaWQgUmVsZWFzZUNhc3RPYmplY3QoKSB7IFxyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8TWVzc2FnZUVudHJ5PiBDYWxsR2V0UHJvcGVydHkoTWVzc2FnZUVudHJ5IG0pIHtcclxuICAgIHN0cmluZyBlbmFtZT1tLk1lbWJlck5hbWU7XHJcbiAgICBNZXNzYWdlRW50cnkgbXI9bmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLlByb3BlcnR5R2V0UmVzLCBlbmFtZSk7XHJcbiAgICBzd2l0Y2ggKGVuYW1lKSB7XHJcbiAgICBjYXNlIFwiTmFtZVwiOlxyXG4gICAge1xyXG4gICAgc3RyaW5nIHJldD1hd2FpdCBvYmouZ2V0X05hbWUoKTtcclxuICAgIG1yLkFkZEVsZW1lbnQoTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTdHJpbmcoXCJ2YWx1ZVwiLHJldCkpO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbFNldFByb3BlcnR5KE1lc3NhZ2VFbnRyeSBtKSB7XHJcbiAgICBzdHJpbmcgZW5hbWU9bS5NZW1iZXJOYW1lO1xyXG4gICAgTWVzc2FnZUVsZW1lbnQgbWU9bS5GaW5kRWxlbWVudChcInZhbHVlXCIpO1xyXG4gICAgTWVzc2FnZUVudHJ5IG1yPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5Qcm9wZXJ0eVNldFJlcywgZW5hbWUpO1xyXG4gICAgc3dpdGNoIChlbmFtZSkge1xyXG4gICAgY2FzZSBcIk5hbWVcIjpcclxuICAgIHtcclxuICAgIGF3YWl0IG9iai5zZXRfTmFtZShNZXNzYWdlRWxlbWVudFV0aWwuVW5wYWNrU3RyaW5nKG1lKSk7XHJcbiAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1yO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8TWVzc2FnZUVudHJ5PiBDYWxsRnVuY3Rpb24oTWVzc2FnZUVudHJ5IHJyX20pIHtcclxuICAgIHN0cmluZyBycl9lbmFtZT1ycl9tLk1lbWJlck5hbWU7XHJcbiAgICBNZXNzYWdlRW50cnkgcnJfbXI9bmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLkZ1bmN0aW9uQ2FsbFJlcywgcnJfZW5hbWUpO1xyXG4gICAgc3dpdGNoIChycl9lbmFtZSkge1xyXG4gICAgY2FzZSBcIkNhcHR1cmVGcmFtZVwiOlxyXG4gICAge1xyXG4gICAgV2ViY2FtSW1hZ2UgcnJfcmV0PWF3YWl0IHRoaXMub2JqLkNhcHR1cmVGcmFtZShkZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSk7XHJcbiAgICBycl9tci5BZGRFbGVtZW50KE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrU3RydWN0dXJlKHJyX25vZGUsIHJyX2NvbnRleHQsIFwicmV0dXJuXCIscnJfcmV0KSk7XHJcbiAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJTdGFydFN0cmVhbWluZ1wiOlxyXG4gICAge1xyXG4gICAgYXdhaXQgdGhpcy5vYmouU3RhcnRTdHJlYW1pbmcoZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpO1xyXG4gICAgcnJfbXIuQWRkRWxlbWVudChcInJldHVyblwiLChpbnQpMCk7XHJcbiAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgXCJTdG9wU3RyZWFtaW5nXCI6XHJcbiAgICB7XHJcbiAgICBhd2FpdCB0aGlzLm9iai5TdG9wU3RyZWFtaW5nKGRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIHJyX21yLkFkZEVsZW1lbnQoXCJyZXR1cm5cIiwoaW50KTApO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiQ2FwdHVyZUZyYW1lVG9CdWZmZXJcIjpcclxuICAgIHtcclxuICAgIFdlYmNhbUltYWdlX3NpemUgcnJfcmV0PWF3YWl0IHRoaXMub2JqLkNhcHR1cmVGcmFtZVRvQnVmZmVyKGRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKTtcclxuICAgIHJyX21yLkFkZEVsZW1lbnQoTWVzc2FnZUVsZW1lbnRVdGlsLlBhY2tTdHJ1Y3R1cmUocnJfbm9kZSwgcnJfY29udGV4dCwgXCJyZXR1cm5cIixycl9yZXQpKTtcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcnJfbXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgYXN5bmMgVGFzazxvYmplY3Q+IEdldFN1Yk9iaihzdHJpbmcgbmFtZSwgc3RyaW5nIGluZCkge1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJcIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBSZWdpc3RlckV2ZW50cyhvYmplY3QgcnJvYmoxKSB7XHJcbiAgICBvYmo9KFdlYmNhbSlycm9iajE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBVbnJlZ2lzdGVyRXZlbnRzKG9iamVjdCBycm9iajEpIHtcclxuICAgIG9iaj0oV2ViY2FtKXJyb2JqMTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBvYmplY3QgR2V0Q2FsbGJhY2tGdW5jdGlvbih1aW50IHJyX2VuZHBvaW50LCBzdHJpbmcgcnJfbWVtYmVybmFtZSkge1xyXG4gICAgc3dpdGNoIChycl9tZW1iZXJuYW1lKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBQaXBlU2VydmVyPFdlYmNhbUltYWdlPiBycl9GcmFtZVN0cmVhbTtcclxuICAgIHByaXZhdGUgYm9vbCBycl9Jbml0UGlwZVNlcnZlcnNSdW49ZmFsc2U7XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBJbml0UGlwZVNlcnZlcnMob2JqZWN0IG8pIHtcclxuICAgIGlmICh0aGlzLnJyX0luaXRQaXBlU2VydmVyc1J1bikgcmV0dXJuO1xyXG4gICAgdGhpcy5ycl9Jbml0UGlwZVNlcnZlcnNSdW49dHJ1ZTtcclxuICAgIFdlYmNhbSBjYXN0b2JqPShXZWJjYW0pbztcclxuICAgIHRoaXMucnJfRnJhbWVTdHJlYW09bmV3IFBpcGVTZXJ2ZXI8V2ViY2FtSW1hZ2U+KFwiRnJhbWVTdHJlYW1cIix0aGlzKTtcclxuICAgIGNhc3RvYmouRnJhbWVTdHJlYW09dGhpcy5ycl9GcmFtZVN0cmVhbTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEluaXRDYWxsYmFja1NlcnZlcnMob2JqZWN0IHJyb2JqMSkge1xyXG4gICAgb2JqPShXZWJjYW0pcnJvYmoxO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8TWVzc2FnZUVudHJ5PiBDYWxsUGlwZUZ1bmN0aW9uKE1lc3NhZ2VFbnRyeSBtLEVuZHBvaW50IGUpIHtcclxuICAgIHN0cmluZyBlbmFtZT1tLk1lbWJlck5hbWU7XHJcbiAgICBzd2l0Y2ggKGVuYW1lKSB7XHJcbiAgICBjYXNlIFwiRnJhbWVTdHJlYW1cIjpcclxuICAgIHJldHVybiBhd2FpdCB0aGlzLnJyX0ZyYW1lU3RyZWFtLlBpcGVDb21tYW5kKG0sZSk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbFdpcmVGdW5jdGlvbihNZXNzYWdlRW50cnkgbSxFbmRwb2ludCBlKSB7XHJcbiAgICBzdHJpbmcgZW5hbWU9bS5NZW1iZXJOYW1lO1xyXG4gICAgc3dpdGNoIChlbmFtZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFBpcGVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtLCBFbmRwb2ludCBlKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGNhc2UgXCJGcmFtZVN0cmVhbVwiOlxyXG4gICAgdGhpcy5ycl9GcmFtZVN0cmVhbS5QaXBlUGFja2V0UmVjZWl2ZWQobSxlKTtcclxuICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFdpcmVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtLCBFbmRwb2ludCBlKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8TWVzc2FnZUVudHJ5PiBDYWxsTWVtb3J5RnVuY3Rpb24oTWVzc2FnZUVudHJ5IG0sRW5kcG9pbnQgZSkge1xyXG4gICAgc3RyaW5nIGVuYW1lPW0uTWVtYmVyTmFtZTtcclxuICAgIHN3aXRjaCAoZW5hbWUpIHtcclxuICAgIGNhc2UgXCJidWZmZXJcIjpcclxuICAgICByZXR1cm4gYXdhaXQgKG5ldyBBcnJheU1lbW9yeVNlcnZpY2VTa2VsPGJ5dGU+KFwiYnVmZmVyXCIsdGhpcyxNZW1iZXJEZWZpbml0aW9uX0RpcmVjdGlvbi5yZWFkb25seV8pKS5DYWxsTWVtb3J5RnVuY3Rpb24obSxlLG9iai5idWZmZXIpO1xyXG4gICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibXVsdGlkaW1idWZmZXJcIjpcclxuICAgICByZXR1cm4gYXdhaXQgKG5ldyBNdWx0aURpbUFycmF5TWVtb3J5U2VydmljZVNrZWw8Ynl0ZT4oXCJtdWx0aWRpbWJ1ZmZlclwiLHRoaXMsTWVtYmVyRGVmaW5pdGlvbl9EaXJlY3Rpb24ucmVhZG9ubHlfKSkuQ2FsbE1lbW9yeUZ1bmN0aW9uKG0sZSxvYmoubXVsdGlkaW1idWZmZXIpO1xyXG4gICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG5wdWJsaWMgY2xhc3MgV2ViY2FtSG9zdF9za2VsIDogU2VydmljZVNrZWwge1xyXG4gICAgcHJvdGVjdGVkIFdlYmNhbUhvc3Qgb2JqO1xyXG4gICAgcHVibGljIFdlYmNhbUhvc3Rfc2tlbChzdHJpbmcgcCxXZWJjYW1Ib3N0IG8sU2VydmVyQ29udGV4dCBjKSA6IGJhc2UocCxvLGMpIHsgb2JqPShXZWJjYW1Ib3N0KW87IH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFJlbGVhc2VDYXN0T2JqZWN0KCkgeyBcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbEdldFByb3BlcnR5KE1lc3NhZ2VFbnRyeSBtKSB7XHJcbiAgICBzdHJpbmcgZW5hbWU9bS5NZW1iZXJOYW1lO1xyXG4gICAgTWVzc2FnZUVudHJ5IG1yPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5Qcm9wZXJ0eUdldFJlcywgZW5hbWUpO1xyXG4gICAgc3dpdGNoIChlbmFtZSkge1xyXG4gICAgY2FzZSBcIldlYmNhbU5hbWVzXCI6XHJcbiAgICB7XHJcbiAgICBEaWN0aW9uYXJ5PGludCxzdHJpbmc+IHJldD1hd2FpdCBvYmouZ2V0X1dlYmNhbU5hbWVzKCk7XHJcbiAgICBtci5BZGRFbGVtZW50KE1lc3NhZ2VFbGVtZW50VXRpbC5QYWNrTWFwVHlwZTxpbnQsc3RyaW5nPihycl9ub2RlLCBycl9jb250ZXh0LCBcInZhbHVlXCIscmV0KSk7XHJcbiAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1yO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8TWVzc2FnZUVudHJ5PiBDYWxsU2V0UHJvcGVydHkoTWVzc2FnZUVudHJ5IG0pIHtcclxuICAgIHN0cmluZyBlbmFtZT1tLk1lbWJlck5hbWU7XHJcbiAgICBNZXNzYWdlRWxlbWVudCBtZT1tLkZpbmRFbGVtZW50KFwidmFsdWVcIik7XHJcbiAgICBNZXNzYWdlRW50cnkgbXI9bmV3IE1lc3NhZ2VFbnRyeShNZXNzYWdlRW50cnlUeXBlLlByb3BlcnR5U2V0UmVzLCBlbmFtZSk7XHJcbiAgICBzd2l0Y2ggKGVuYW1lKSB7XHJcbiAgICBjYXNlIFwiV2ViY2FtTmFtZXNcIjpcclxuICAgIHtcclxuICAgIGF3YWl0IG9iai5zZXRfV2ViY2FtTmFtZXMoTWVzc2FnZUVsZW1lbnRVdGlsLlVucGFja01hcDxpbnQsc3RyaW5nPihycl9ub2RlLCBycl9jb250ZXh0LCBtZSkpO1xyXG4gICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtcjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbEZ1bmN0aW9uKE1lc3NhZ2VFbnRyeSBycl9tKSB7XHJcbiAgICBzdHJpbmcgcnJfZW5hbWU9cnJfbS5NZW1iZXJOYW1lO1xyXG4gICAgTWVzc2FnZUVudHJ5IHJyX21yPW5ldyBNZXNzYWdlRW50cnkoTWVzc2FnZUVudHJ5VHlwZS5GdW5jdGlvbkNhbGxSZXMsIHJyX2VuYW1lKTtcclxuICAgIHN3aXRjaCAocnJfZW5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJyX21yO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8b2JqZWN0PiBHZXRTdWJPYmooc3RyaW5nIG5hbWUsIHN0cmluZyBpbmQpIHtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgY2FzZSBcIldlYmNhbXNcIjoge1xyXG4gICAgcmV0dXJuIGF3YWl0IG9iai5nZXRfV2ViY2FtcyhJbnQzMi5QYXJzZShpbmQpKTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFJlZ2lzdGVyRXZlbnRzKG9iamVjdCBycm9iajEpIHtcclxuICAgIG9iaj0oV2ViY2FtSG9zdClycm9iajE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBVbnJlZ2lzdGVyRXZlbnRzKG9iamVjdCBycm9iajEpIHtcclxuICAgIG9iaj0oV2ViY2FtSG9zdClycm9iajE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgb2JqZWN0IEdldENhbGxiYWNrRnVuY3Rpb24odWludCBycl9lbmRwb2ludCwgc3RyaW5nIHJyX21lbWJlcm5hbWUpIHtcclxuICAgIHN3aXRjaCAocnJfbWVtYmVybmFtZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYm9vbCBycl9Jbml0UGlwZVNlcnZlcnNSdW49ZmFsc2U7XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBJbml0UGlwZVNlcnZlcnMob2JqZWN0IG8pIHtcclxuICAgIGlmICh0aGlzLnJyX0luaXRQaXBlU2VydmVyc1J1bikgcmV0dXJuO1xyXG4gICAgdGhpcy5ycl9Jbml0UGlwZVNlcnZlcnNSdW49dHJ1ZTtcclxuICAgIFdlYmNhbUhvc3QgY2FzdG9iaj0oV2ViY2FtSG9zdClvO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIHZvaWQgSW5pdENhbGxiYWNrU2VydmVycyhvYmplY3QgcnJvYmoxKSB7XHJcbiAgICBvYmo9KFdlYmNhbUhvc3QpcnJvYmoxO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIGFzeW5jIFRhc2s8TWVzc2FnZUVudHJ5PiBDYWxsUGlwZUZ1bmN0aW9uKE1lc3NhZ2VFbnRyeSBtLEVuZHBvaW50IGUpIHtcclxuICAgIHN0cmluZyBlbmFtZT1tLk1lbWJlck5hbWU7XHJcbiAgICBzd2l0Y2ggKGVuYW1lKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbFdpcmVGdW5jdGlvbihNZXNzYWdlRW50cnkgbSxFbmRwb2ludCBlKSB7XHJcbiAgICBzdHJpbmcgZW5hbWU9bS5NZW1iZXJOYW1lO1xyXG4gICAgc3dpdGNoIChlbmFtZSkge1xyXG4gICAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBNZW1iZXJOb3RGb3VuZEV4Y2VwdGlvbihcIk1lbWJlciBub3QgZm91bmRcIik7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBEaXNwYXRjaFBpcGVNZXNzYWdlKE1lc3NhZ2VFbnRyeSBtLCBFbmRwb2ludCBlKVxyXG4gICAge1xyXG4gICAgc3dpdGNoIChtLk1lbWJlck5hbWUpIHtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgTWVtYmVyTm90Rm91bmRFeGNlcHRpb24oXCJNZW1iZXIgbm90IGZvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIG92ZXJyaWRlIHZvaWQgRGlzcGF0Y2hXaXJlTWVzc2FnZShNZXNzYWdlRW50cnkgbSwgRW5kcG9pbnQgZSlcclxuICAgIHtcclxuICAgIHN3aXRjaCAobS5NZW1iZXJOYW1lKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBvdmVycmlkZSBhc3luYyBUYXNrPE1lc3NhZ2VFbnRyeT4gQ2FsbE1lbW9yeUZ1bmN0aW9uKE1lc3NhZ2VFbnRyeSBtLEVuZHBvaW50IGUpIHtcclxuICAgIHN0cmluZyBlbmFtZT1tLk1lbWJlck5hbWU7XHJcbiAgICBzd2l0Y2ggKGVuYW1lKSB7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgdGhyb3cgbmV3IE1lbWJlck5vdEZvdW5kRXhjZXB0aW9uKFwiTWVtYmVyIG5vdCBmb3VuZFwiKTtcclxuICAgIH1cclxuICAgIH1cclxufVxyXG5wdWJsaWMgY2xhc3MgV2ViY2FtX2RlZmF1bHRfaW1wbCA6IFdlYmNhbXtcclxuICAgIHByb3RlY3RlZCBQaXBlQnJvYWRjYXN0ZXI8V2ViY2FtSW1hZ2U+IHJydmFyX0ZyYW1lU3RyZWFtO1xyXG4gICAgcHVibGljIHZpcnR1YWwgVGFzazxzdHJpbmc+IGdldF9OYW1lKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBUYXNrIHNldF9OYW1lKHN0cmluZyB2YWx1ZSwgQ2FuY2VsbGF0aW9uVG9rZW4gY2FuY2VsPWRlZmF1bHQoQ2FuY2VsbGF0aW9uVG9rZW4pKSB7XHJcbiAgICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWRFeGNlcHRpb24oKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB2aXJ0dWFsIFRhc2s8V2ViY2FtSW1hZ2U+IENhcHR1cmVGcmFtZShDYW5jZWxsYXRpb25Ub2tlbiBycl9jYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZpcnR1YWwgVGFzayBTdGFydFN0cmVhbWluZyhDYW5jZWxsYXRpb25Ub2tlbiBycl9jYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZpcnR1YWwgVGFzayBTdG9wU3RyZWFtaW5nKENhbmNlbGxhdGlvblRva2VuIHJyX2NhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBUYXNrPFdlYmNhbUltYWdlX3NpemU+IENhcHR1cmVGcmFtZVRvQnVmZmVyKENhbmNlbGxhdGlvblRva2VuIHJyX2NhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBQaXBlPFdlYmNhbUltYWdlPiBGcmFtZVN0cmVhbSB7XHJcbiAgICBnZXQgeyByZXR1cm4gcnJ2YXJfRnJhbWVTdHJlYW0uUGlwZTsgIH1cclxuICAgIHNldCB7XHJcbiAgICBpZiAocnJ2YXJfRnJhbWVTdHJlYW0hPW51bGwpIHRocm93IG5ldyBJbnZhbGlkT3BlcmF0aW9uRXhjZXB0aW9uKFwiUGlwZSBhbHJlYWR5IHNldFwiKTtcclxuICAgIHJydmFyX0ZyYW1lU3RyZWFtPSBuZXcgUGlwZUJyb2FkY2FzdGVyPFdlYmNhbUltYWdlPih2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBBcnJheU1lbW9yeTxieXRlPiBidWZmZXIgeyBcclxuICAgIGdldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBNdWx0aURpbUFycmF5TWVtb3J5PGJ5dGU+IG11bHRpZGltYnVmZmVyIHtcclxuICAgIGdldCB7IHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpOyB9XHJcbiAgICB9XHJcbn1cclxucHVibGljIGNsYXNzIFdlYmNhbUhvc3RfZGVmYXVsdF9pbXBsIDogV2ViY2FtSG9zdHtcclxuICAgIHB1YmxpYyB2aXJ0dWFsIFRhc2s8RGljdGlvbmFyeTxpbnQsc3RyaW5nPj4gZ2V0X1dlYmNhbU5hbWVzKENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdmlydHVhbCBUYXNrIHNldF9XZWJjYW1OYW1lcyhEaWN0aW9uYXJ5PGludCxzdHJpbmc+IHZhbHVlLCBDYW5jZWxsYXRpb25Ub2tlbiBjYW5jZWw9ZGVmYXVsdChDYW5jZWxsYXRpb25Ub2tlbikpIHtcclxuICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHZpcnR1YWwgVGFzazxXZWJjYW0+IGdldF9XZWJjYW1zKGludCBpbmQsIENhbmNlbGxhdGlvblRva2VuIGNhbmNlbD1kZWZhdWx0KENhbmNlbGxhdGlvblRva2VuKSkge1xyXG4gICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxucHVibGljIHN0YXRpYyBjbGFzcyBSUkV4dGVuc2lvbnNcclxue1xyXG59XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBCcmlkZ2UuSHRtbDU7XHJcbnVzaW5nIFJvYm90UmFjb250ZXVyV2ViO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIGV4cGVyaW1lbnRhbC5jcmVhdGUyO1xyXG51c2luZyBleHBlcmltZW50YWwuY3JlYXRld2ViY2FtMjtcclxuXHJcbm5hbWVzcGFjZSBpUm9ib3RDcmVhdGVCcmlkZ2VDbGllbnRcclxue1xyXG4gICAgcHVibGljIGNsYXNzIEFwcFxyXG4gICAge1xyXG5cclxuICAgICAgICBzdGF0aWMgV2ViY2FtSG9zdCB3ZWJjYW1faG9zdCA9IG51bGw7XHJcbiAgICAgICAgc3RhdGljIFdlYmNhbSB3ZWJjYW0gPSBudWxsO1xyXG4gICAgICAgIHN0YXRpYyBQaXBlPFdlYmNhbUltYWdlPiB3ZWJjYW1fcGlwZSA9IG51bGw7XHJcbiAgICAgICAgc3RhdGljIFBpcGU8V2ViY2FtSW1hZ2U+LlBpcGVFbmRwb2ludCB3ZWJjYW1fcGlwZV9lcDtcclxuXHJcbiAgICAgICAgW1JlYWR5XVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJvYm90UmFjb250ZXVyTm9kZS5zLlJlZ2lzdGVyU2VydmljZVR5cGUobmV3IGV4cGVyaW1lbnRhbF9fY3JlYXRlMkZhY3RvcnkoKSk7XHJcbiAgICAgICAgICAgIFJvYm90UmFjb250ZXVyTm9kZS5zLlJlZ2lzdGVyU2VydmljZVR5cGUobmV3IGV4cGVyaW1lbnRhbF9fY3JlYXRld2ViY2FtMkZhY3RvcnkoKSk7XHJcblxyXG4gICAgICAgICAgICBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MQnV0dG9uRWxlbWVudD4oXCJDb25uZWN0V2ViY2FtXCIpLk9uQ2xpY2sgPSB4ID0+IENvbm5lY3RXZWJjYW0oKTtcclxuICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiRGlzY29ubmVjdFdlYmNhbVwiKS5PbkNsaWNrID0geCA9PiBEaXNjb25uZWN0V2ViY2FtKCk7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkdldEVsZW1lbnRCeUlkPEhUTUxCdXR0b25FbGVtZW50PihcIkNvbm5lY3RDcmVhdGVcIikuT25DbGljayA9IHggPT4gQ29ubmVjdENyZWF0ZSgpO1xyXG4gICAgICAgICAgICBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MQnV0dG9uRWxlbWVudD4oXCJEaXNjb25uZWN0Q3JlYXRlXCIpLk9uQ2xpY2sgPSB4ID0+IERpc2Nvbm5lY3RDcmVhdGUoKTtcclxuICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwic3RvcFwiKS5PbkNsaWNrID0geCA9PiBEcml2ZSgwLCAzMjc2Nyk7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkdldEVsZW1lbnRCeUlkPEhUTUxCdXR0b25FbGVtZW50PihcInJldmVyc2VcIikuT25DbGljayA9IHggPT4gRHJpdmUoLTIwMCwgMzI3NjcpO1xyXG4gICAgICAgICAgICBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MQnV0dG9uRWxlbWVudD4oXCJmb3J3YXJkXCIpLk9uQ2xpY2sgPSB4ID0+IERyaXZlKDIwMCwgMzI3NjcpO1xyXG4gICAgICAgICAgICBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MQnV0dG9uRWxlbWVudD4oXCJzcGlubGVmdFwiKS5PbkNsaWNrID0geCA9PiBEcml2ZSgyMDAsIDEpO1xyXG4gICAgICAgICAgICBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MQnV0dG9uRWxlbWVudD4oXCJzcGlucmlnaHRcIikuT25DbGljayA9IHggPT4gRHJpdmUoMjAwLCAtMSk7XHJcblxyXG4gICAgICAgICAgICBVcGRhdGVHYW1lcGFkQ2hlY2tib3goKTtcclxuXHJcbiAgICAgICAgICAgIFdpbmRvdy5BZGRFdmVudExpc3RlbmVyKEV2ZW50VHlwZS5HYW1lcGFkQ29ubmVjdGVkLCAoQWN0aW9uPEV2ZW50PikoZSA9PiBVcGRhdGVHYW1lcGFkQ2hlY2tib3goKSkpO1xyXG4gICAgICAgICAgICBXaW5kb3cuQWRkRXZlbnRMaXN0ZW5lcihFdmVudFR5cGUuR2FtZXBhZERpc2Nvbm5lY3RlZCwgKEFjdGlvbjxFdmVudD4pKGUgPT4gVXBkYXRlR2FtZXBhZENoZWNrYm94KCkpKTtcclxuICAgICAgICAgICAgV2luZG93LlNldEludGVydmFsKChBY3Rpb24pVXBkYXRlR2FtZXBhZCwgMTAwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHZvaWQgQ29ubmVjdFdlYmNhbSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nIHdlYmNhbV91cmwgPSBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MSW5wdXRFbGVtZW50PihcIldlYmNhbVVybFwiKS5WYWx1ZTtcclxuICAgICAgICAgICAgICAgIHdlYmNhbV9ob3N0ID0gKFdlYmNhbUhvc3QpYXdhaXQgUm9ib3RSYWNvbnRldXJOb2RlLnMuQ29ubmVjdFNlcnZpY2Uod2ViY2FtX3VybCk7XHJcbiAgICAgICAgICAgICAgICB3ZWJjYW0gPSBhd2FpdCB3ZWJjYW1faG9zdC5nZXRfV2ViY2FtcygwKTtcclxuICAgICAgICAgICAgICAgIHdlYmNhbV9waXBlID0gd2ViY2FtLkZyYW1lU3RyZWFtO1xyXG4gICAgICAgICAgICAgICAgd2ViY2FtX3BpcGVfZXAgPSBhd2FpdCB3ZWJjYW1fcGlwZS5Db25uZWN0KC0xKTtcclxuICAgICAgICAgICAgICAgIHdlYmNhbV9waXBlX2VwLlBhY2tldFJlY2VpdmVkRXZlbnQgKz0gV2ViY2FtUGFja2V0UmVjZWl2ZWQ7XHJcbiAgICAgICAgICAgICAgICBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MRGl2RWxlbWVudD4oXCJXZWJjYW1Mb2dpblwiKS5TdHlsZS5EaXNwbGF5ID0gRGlzcGxheS5Ob25lO1xyXG4gICAgICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTERpdkVsZW1lbnQ+KFwiV2ViY2FtRGlzcGxheVwiKS5TdHlsZS5EaXNwbGF5ID0gRGlzcGxheS5CbG9jaztcclxuXHJcbiAgICAgICAgICAgICAgICBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MQnV0dG9uRWxlbWVudD4oXCJTdGFydFN0cmVhbWluZ1wiKS5PbkNsaWNrID0gKGRlbGVnYXRlIChNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiBlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYmNhbS5TdGFydFN0cmVhbWluZygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiU3RvcFN0cmVhbWluZ1wiKS5PbkNsaWNrID0gKGRlbGVnYXRlIChNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiBlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdlYmNhbS5TdG9wU3RyZWFtaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBXaW5kb3cuQWxlcnQoXCJFcnJvcjogQ291bGQgbm90IGNvbm5lY3QgdG8gV2ViY2FtXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyB2b2lkIERpc2Nvbm5lY3RXZWJjYW0oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTERpdkVsZW1lbnQ+KFwiV2ViY2FtTG9naW5cIikuU3R5bGUuRGlzcGxheSA9IERpc3BsYXkuQmxvY2s7XHJcbiAgICAgICAgICAgIERvY3VtZW50LkdldEVsZW1lbnRCeUlkPEhUTUxEaXZFbGVtZW50PihcIldlYmNhbURpc3BsYXlcIikuU3R5bGUuRGlzcGxheSA9IERpc3BsYXkuTm9uZTtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAod2ViY2FtX2hvc3QhPW51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IFJvYm90UmFjb250ZXVyTm9kZS5zLkRpc2Nvbm5lY3RTZXJ2aWNlKHdlYmNhbV9ob3N0KTtcclxuICAgICAgICAgICAgICAgIHdlYmNhbV9ob3N0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHdlYmNhbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB3ZWJjYW1fcGlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB3ZWJjYW1fcGlwZV9lcCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHZvaWQgV2ViY2FtUGFja2V0UmVjZWl2ZWQoUGlwZTxXZWJjYW1JbWFnZT4uUGlwZUVuZHBvaW50IGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBXZWJjYW1JbWFnZSBmID0gbnVsbDtcclxuICAgICAgICAgICAgd2hpbGUgKGUuQXZhaWxhYmxlID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZiA9IGUuUmVjZWl2ZVBhY2tldCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNob3dGcmFtZShmKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0aWMgSFRNTENhbnZhc0VsZW1lbnQgY2FudmFzID0gbnVsbDtcclxuICAgICAgICBzdGF0aWMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIGN0eCA9IG51bGw7XHJcbiAgICAgICAgc3RhdGljIEltYWdlRGF0YSBpbWFnZURhdGEgPSBudWxsO1xyXG4gICAgICAgIHN0YXRpYyBVaW50OENsYW1wZWRBcnJheSBpbWFnZUJ5dGVzID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFNob3dGcmFtZShXZWJjYW1JbWFnZSBpbWFnZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXMgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzID0gRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTENhbnZhc0VsZW1lbnQ+KFwiaW1hZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBjdHggPSBjYW52YXMuR2V0Q29udGV4dChDYW52YXNUeXBlcy5DYW52YXNDb250ZXh0MkRUeXBlLkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbWFnZURhdGEgPT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gY3R4LkNyZWF0ZUltYWdlRGF0YShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGltYWdlQnl0ZXMgPSBpbWFnZURhdGEuRGF0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGltYWdlRGF0YS5XaWR0aCAhPSBpbWFnZS53aWR0aCB8fCBpbWFnZURhdGEuSGVpZ2h0ICE9IGltYWdlLmhlaWdodClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gY3R4LkNyZWF0ZUltYWdlRGF0YShpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGltYWdlQnl0ZXMgPSBpbWFnZURhdGEuRGF0YTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChpbnQgeSA9IDA7IHkgPCBpbWFnZS5oZWlnaHQ7IHkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9yIChpbnQgeCA9IDA7IHggPCBpbWFnZS53aWR0aDsgeCsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGludCBpbmRleDEgPSAoeCArIGltYWdlLndpZHRoICogeSkgKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGludCBpbmRleDIgPSAoeCAqIDMgKyBpbWFnZS5zdGVwICogeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VCeXRlc1tpbmRleDFdID0gaW1hZ2UuZGF0YVtpbmRleDIgKyAyXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZUJ5dGVzW2luZGV4MSArIDFdID0gaW1hZ2UuZGF0YVtpbmRleDIgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZUJ5dGVzW2luZGV4MSArIDJdID0gaW1hZ2UuZGF0YVtpbmRleDJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlQnl0ZXNbaW5kZXgxICsgM10gPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGN0eC5QdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRpYyBDcmVhdGUgY3JlYXRlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBhc3luYyB2b2lkIENvbm5lY3RDcmVhdGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyBjcmVhdGVfdXJsID0gRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTElucHV0RWxlbWVudD4oXCJDcmVhdGVVcmxcIikuVmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUgPSAoQ3JlYXRlKWF3YWl0IFJvYm90UmFjb250ZXVyTm9kZS5zLkNvbm5lY3RTZXJ2aWNlKGNyZWF0ZV91cmwpO1xyXG4gICAgICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTERpdkVsZW1lbnQ+KFwiQ3JlYXRlTG9naW5cIikuU3R5bGUuRGlzcGxheSA9IERpc3BsYXkuTm9uZTtcclxuICAgICAgICAgICAgICAgIERvY3VtZW50LkdldEVsZW1lbnRCeUlkPEhUTUxEaXZFbGVtZW50PihcIkNyZWF0ZURpc3BsYXlcIikuU3R5bGUuRGlzcGxheSA9IERpc3BsYXkuQmxvY2s7XHJcbiAgICAgICAgICAgICAgICBVcGRhdGVHYW1lcGFkQ2hlY2tib3goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBXaW5kb3cuQWxlcnQoXCJFcnJvcjogQ291bGQgbm90IGNvbm5lY3QgdG8gQ3JlYXRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHZvaWQgRGlzY29ubmVjdENyZWF0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY3JlYXRlIT1udWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBSb2JvdFJhY29udGV1ck5vZGUucy5EaXNjb25uZWN0U2VydmljZShjcmVhdGUpO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIERvY3VtZW50LkdldEVsZW1lbnRCeUlkPEhUTUxEaXZFbGVtZW50PihcIkNyZWF0ZUxvZ2luXCIpLlN0eWxlLkRpc3BsYXkgPSBEaXNwbGF5LkJsb2NrO1xyXG4gICAgICAgICAgICAgICAgRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTERpdkVsZW1lbnQ+KFwiQ3JlYXRlRGlzcGxheVwiKS5TdHlsZS5EaXNwbGF5ID0gRGlzcGxheS5Ob25lO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGFzeW5jIHZvaWQgRHJpdmUoc2hvcnQgdmVsb2NpdHksIHNob3J0IHJhZGl1cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZS5Ecml2ZSh2ZWxvY2l0eSwgcmFkaXVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBVcGRhdGVHYW1lcGFkQ2hlY2tib3goKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNyZWF0ZSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgY2hlY2tib3ggPSBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MSW5wdXRFbGVtZW50PihcImVuYWJsZWdhbWVwYWRcIik7XHJcbiAgICAgICAgICAgIHZhciB3ID0gV2luZG93Lk5hdmlnYXRvci5HZXRHYW1lcGFkcygpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAody5MZW5ndGggPiAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjaGVja2JveC5EaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tib3guQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyB2b2lkIFVwZGF0ZUdhbWVwYWQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNyZWF0ZSA9PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB2YXIgY2hlY2tib3ggPSBEb2N1bWVudC5HZXRFbGVtZW50QnlJZDxIVE1MSW5wdXRFbGVtZW50PihcImVuYWJsZWdhbWVwYWRcIik7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5DaGVja2VkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gRG9jdW1lbnQuR2V0RWxlbWVudEJ5SWQ8SFRNTERpdkVsZW1lbnQ+KFwicG9zXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdwID0gV2luZG93Lk5hdmlnYXRvci5HZXRHYW1lcGFkcygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGdwMSA9IGdwWzJdOyBcclxuICAgICAgICAgICAgICAgIGlmIChncDEgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgZG91YmxlIHggPSAoZG91YmxlKWdwMS5BeGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgZG91YmxlIHkgPSAtKGRvdWJsZSlncDEuQXhlc1sxXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguQWJzKHgpIDwgLjIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IChNYXRoLkFicyh4KSAtIC4yKSAvIC44ICogTWF0aC5TaWduKHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLkFicyh5KSA8IC4yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHkgPSAoTWF0aC5BYnMoeSkgLSAuMikgLyAuOCAqIE1hdGguU2lnbih5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzaG9ydCBzcGVlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzaG9ydCByYWRpdXMgPSAzMjc2NztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA9PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IDwgMCAmJiB4ICE9IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPiAwICYmIHggIT0gMClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3BlZWQgPSAoc2hvcnQpKE1hdGguQWJzKHgpICogMjAwLjApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZCA9IChzaG9ydCkoeSAqIDIwMC4wKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCAhPSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzID0gKHNob3J0KSgtKDEgLSBNYXRoLkFicyh4KSkgKiA1MDAwLjAgKiBNYXRoLlNpZ24oeCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFkaXVzID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAoc2hvcnQpKC1NYXRoLlNpZ24oeCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIERyaXZlKHNwZWVkLCByYWRpdXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iXQp9Cg==
