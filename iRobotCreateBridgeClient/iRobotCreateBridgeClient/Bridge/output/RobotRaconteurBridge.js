//  Robot Raconteur(R) - A communication library for robotics and automation systems
//  Copyright (C) 2014 John Wason <wason@wasontech.com>
//                     Wason Technology, LLC
//
//  This program is released under the terms of the Robot Raconteur(R)
//  license.  Full text can be found at  http://robotraconteur.com/license2 .
//  Attribute to this library as "Robot Raconteur(R)" in documentation or
//  packaging.  This software is royalty free for commercial use under
//  the conditions of the license.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

(function (globals) {
    "use strict";

    Bridge.define('RobotRaconteur.ArrayBinaryReader', {
        view: null,
        limits: null,
        m_Position: 0,
        config: {
            init: function () {
                this.limits = new Bridge.List$1(Bridge.UInt32)();
            }
        },
        constructor: function (b, offset, length) {
            this.view = new DataView(b, offset, length);
            this.limits.add((length >>> 0));
        },
        getCurrentLimit: function () {
            return this.limits.getItem(0);
        },
        getPosition: function () {
            return this.m_Position;
        },
        getDistanceFromLimit: function () {
            return ((((this.getCurrentLimit()) | 0) - (this.m_Position | 0)) | 0);
        },
        readArray: function (a) {
            if (Bridge.is(a, Float64Array)) {
                var a2 = Bridge.as(a, Float64Array);
                for (var i = 0; i < a2.length; i = (i + 1) | 0) {
                    a2[i] = this.readDouble();
                }
            }
            else  {
                if (Bridge.is(a, Float32Array)) {
                    var a21 = Bridge.as(a, Float32Array);
                    for (var i1 = 0; i1 < a21.length; i1 = (i1 + 1) | 0) {
                        a21[i1] = this.readSingle();
                    }
                }
                else  {
                    if (Bridge.is(a, Uint8Array)) {
                        var a22 = Bridge.as(a, Uint8Array);
                        for (var i2 = 0; i2 < a22.length; i2 = (i2 + 1) | 0) {
                            a22[i2] = this.readByte();
                        }
                    }
                    else  {
                        if (Bridge.is(a, Int8Array)) {
                            var a23 = Bridge.as(a, Int8Array);
                            for (var i3 = 0; i3 < a23.length; i3 = (i3 + 1) | 0) {
                                a23[i3] = this.readSByte();
                            }
                        }
                        else  {
                            if (Bridge.is(a, Int16Array)) {
                                var a24 = Bridge.as(a, Int16Array);
                                for (var i4 = 0; i4 < a24.length; i4 = (i4 + 1) | 0) {
                                    a24[i4] = this.readInt16();
                                }
                            }
                            else  {
                                if (Bridge.is(a, Uint16Array)) {
                                    var a25 = Bridge.as(a, Uint16Array);
                                    for (var i5 = 0; i5 < a25.length; i5 = (i5 + 1) | 0) {
                                        a25[i5] = this.readUInt16();
                                    }
                                }
                                else  {
                                    if (Bridge.is(a, Int32Array)) {
                                        var a26 = Bridge.as(a, Int32Array);
                                        for (var i6 = 0; i6 < a26.length; i6 = (i6 + 1) | 0) {
                                            a26[i6] = this.readInt32();
                                        }
                                    }
                                    else  {
                                        if (Bridge.is(a, Uint32Array)) {
                                            var a27 = Bridge.as(a, Uint32Array);
                                            for (var i7 = 0; i7 < a27.length; i7 = (i7 + 1) | 0) {
                                                a27[i7] = this.readUInt32();
                                            }
                                        }
                                        else  {
                                            throw new RobotRaconteur.DataTypeException("Unknown array type");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        readString8: function (l) {
            var b = Bridge.Array.init(l, 0);
            if (Bridge.Long(this.getPosition()).add(Bridge.Long(b.length)).gt(Bridge.Long(this.getCurrentLimit()))) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var n = this.read(b, 0, b.length);
    
            //TODO: handle international characters
    
            var s = Bridge.Linq.Enumerable.from(b).select($_.RobotRaconteur.ArrayBinaryReader.f1).toArray().join(""); // UTF8Encoding.UTF8.GetString(b);             
    
            return s;
    
        },
        readNumber: function (t) {
    
            switch (t) {
                case RobotRaconteur.DataTypes.double_t: 
                    return this.readDouble();
                case RobotRaconteur.DataTypes.single_t: 
                    return this.readSingle();
                case RobotRaconteur.DataTypes.int8_t: 
                    return this.readSByte();
                case RobotRaconteur.DataTypes.uint8_t: 
                    return this.readByte();
                case RobotRaconteur.DataTypes.int16_t: 
                    return this.readInt16();
                case RobotRaconteur.DataTypes.uint16_t: 
                    return this.readUInt16();
                case RobotRaconteur.DataTypes.int32_t: 
                    return this.readInt32();
                case RobotRaconteur.DataTypes.uint32_t: 
                    return this.readUInt32();
                case RobotRaconteur.DataTypes.int64_t: 
                    return this.readInt64();
                case RobotRaconteur.DataTypes.uint64_t: 
                    return this.readUInt64();
            }
    
            throw new RobotRaconteur.DataTypeException("Unknown data type to read");
        },
        read: function (buffer, index, count) {
            for (var i = 0; i < count; i = (i + 1) | 0) {
                buffer[((i + index) | 0)] = this.readByte();
            }
            return count;
        },
        readDouble: function () {
            if (((this.getPosition() + 8) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getFloat64((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 8) >>> 0;
            return i;
        },
        readSingle: function () {
            if (((this.getPosition() + 4) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getFloat32((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 4) >>> 0;
            return i;
        },
        readSByte: function () {
            if (((this.getPosition() + 1) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getInt8((this.m_Position | 0));
            this.m_Position = (this.m_Position + 1) >>> 0;
            return i;
        },
        readByte: function () {
            if (((this.getPosition() + 1) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getUint8((this.m_Position | 0));
            this.m_Position = (this.m_Position + 1) >>> 0;
            return i;
        },
        readInt16: function () {
            if (((this.getPosition() + 2) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getInt16((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 2) >>> 0;
            return i;
        },
        readUInt16: function () {
            if (((this.getPosition() + 2) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getUint16((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 2) >>> 0;
            return i;
        },
        readInt32: function () {
            if (((this.getPosition() + 4) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getInt32((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 4) >>> 0;
            return i;
        },
        readUInt32: function () {
            if (((this.getPosition() + 4) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getUint32((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 4) >>> 0;
            return i;
        },
        readInt64: function () {
            //TODO: handle longs better
            if (((this.getPosition() + 8) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getInt32((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 8) >>> 0;
            return Bridge.Long(i);
        },
        readUInt64: function () {
            //TODO: handle longs better
            if (((this.getPosition() + 8) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message read error");
            }
            var i = this.view.getUint32((this.m_Position | 0), true);
            this.m_Position = (this.m_Position + 8) >>> 0;
            return Bridge.ULong(i);
        },
        pushRelativeLimit: function (limit) {
            if (((this.getPosition() + limit) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Error reading message");
            }
    
            this.limits.insert(0, ((this.getPosition() + limit) >>> 0));
        },
        pushAbsoluteLimit: function (limit) {
            if (limit > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Error reading message");
            }
    
            this.limits.insert(0, limit);
        },
        popLimit: function () {
            this.limits.removeAt(0);
        },
        reset: function (length) {
            this.limits.clear();
            this.limits.insert(0, (length >>> 0));
            this.m_Position = 0;
        }
    });
    
    var $_ = {};
    
    Bridge.ns("RobotRaconteur.ArrayBinaryReader", $_)
    
    Bridge.apply($_.RobotRaconteur.ArrayBinaryReader, {
        f1: function (x) {
            return String.fromCharCode(x);
        }
    });
    
    Bridge.define('RobotRaconteur.ArrayBinaryWriter', {
        statics: {
            getStringByteCount8: function (s) {
                //TODO: handle international characters
                return s.length;
                //return UTF8Encoding.UTF8.GetByteCount(s);
            }
        },
        view: null,
        limits: null,
        m_Position: 0,
        config: {
            init: function () {
                this.limits = new Bridge.List$1(Bridge.UInt32)();
            }
        },
        constructor: function (b, offset, length) {
    
            this.view = new DataView(b, offset, length);
            this.limits.add((length >>> 0));
        },
        getCurrentLimit: function () {
            return this.limits.getItem(0);
        },
        getPosition: function () {
            return this.m_Position;
        },
        getDistanceFromLimit: function () {
            return ((((this.getCurrentLimit()) | 0) - (this.m_Position | 0)) | 0);
        },
        writeArray: function (a) {
            if (Bridge.is(a, Float64Array)) {
                var a2 = Bridge.as(a, Float64Array);
                for (var i = 0; i < a2.length; i = (i + 1) | 0) {
                    this.write$2(a2[i]);
                }
            }
            else  {
                if (Bridge.is(a, Float32Array)) {
                    var a21 = Bridge.as(a, Float32Array);
                    for (var i1 = 0; i1 < a21.length; i1 = (i1 + 1) | 0) {
                        this.write$7(a21[i1]);
                    }
                }
                else  {
                    if (Bridge.is(a, Int8Array)) {
                        var a22 = Bridge.as(a, Int8Array);
                        for (var i2 = 0; i2 < a22.length; i2 = (i2 + 1) | 0) {
                            this.write$6(a22[i2]);
                        }
                    }
                    else  {
                        if (Bridge.is(a, Uint8Array)) {
                            var a23 = Bridge.as(a, Uint8Array);
                            for (var i3 = 0; i3 < a23.length; i3 = (i3 + 1) | 0) {
                                this.write(a23[i3]);
                            }
                        }
                        else  {
                            if (Bridge.is(a, Int16Array)) {
                                var a24 = Bridge.as(a, Int16Array);
                                for (var i4 = 0; i4 < a24.length; i4 = (i4 + 1) | 0) {
                                    this.write$3(a24[i4]);
                                }
                            }
                            else  {
                                if (Bridge.is(a, Uint16Array)) {
                                    var a25 = Bridge.as(a, Uint16Array);
                                    for (var i5 = 0; i5 < a25.length; i5 = (i5 + 1) | 0) {
                                        this.write$8(a25[i5]);
                                    }
                                }
                                else  {
                                    if (Bridge.is(a, Int32Array)) {
                                        var a26 = Bridge.as(a, Int32Array);
                                        for (var i6 = 0; i6 < a26.length; i6 = (i6 + 1) | 0) {
                                            this.write$4(a26[i6]);
                                        }
                                    }
                                    else  {
                                        if (Bridge.is(a, Uint32Array)) {
                                            var a27 = Bridge.as(a, Uint32Array);
                                            for (var i7 = 0; i7 < a27.length; i7 = (i7 + 1) | 0) {
                                                this.write$9(a27[i7]);
                                            }
                                        }
                                        else  {
                                            throw new RobotRaconteur.DataTypeException("Unknown array type");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        writeString8: function (s) {
    
            var b = Bridge.Array.init(s.length, 0); //UTF8Encoding.UTF8.GetBytes(s);
            for (var i = 0; i < s.length; i = (i + 1) | 0) {
                b[i] = (s.charCodeAt(i)) & 255;
            }
            if (Bridge.Long(b.length).add(Bridge.Long(this.getPosition())).gt(Bridge.Long(this.getCurrentLimit()))) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.write$1(b, 0, b.length);
    
        },
        writeNumber: function (n, t) {
            switch (t) {
                case RobotRaconteur.DataTypes.double_t: 
                    this.write$2(Bridge.cast(n, Bridge.Double));
                    return;
                case RobotRaconteur.DataTypes.single_t: 
                    this.write$7(Bridge.cast(n, Bridge.Single));
                    return;
                case RobotRaconteur.DataTypes.int8_t: 
                    this.write$6(Bridge.cast(n, Bridge.SByte));
                    return;
                case RobotRaconteur.DataTypes.uint8_t: 
                    this.write(Bridge.cast(n, Bridge.Byte));
                    return;
                case RobotRaconteur.DataTypes.int16_t: 
                    this.write$3(Bridge.cast(n, Bridge.Int16));
                    return;
                case RobotRaconteur.DataTypes.uint16_t: 
                    this.write$8(Bridge.cast(n, Bridge.UInt16));
                    return;
                case RobotRaconteur.DataTypes.int32_t: 
                    this.write$4(Bridge.cast(n, Bridge.Int32));
                    return;
                case RobotRaconteur.DataTypes.uint32_t: 
                    this.write$9(Bridge.cast(n, Bridge.UInt32));
                    return;
                case RobotRaconteur.DataTypes.int64_t: 
                    this.write$5(Bridge.cast(n, Bridge.Long));
                    return;
                case RobotRaconteur.DataTypes.uint64_t: 
                    this.write$10(Bridge.cast(n, Bridge.ULong));
                    return;
            }
    
            throw new RobotRaconteur.DataTypeException("Unknown data type to write");
        },
        write$1: function (buffer, index, count) {
            for (var i = 0; i < count; i = (i + 1) | 0) {
                this.write(buffer[((i + index) | 0)]);
            }
        },
        write$2: function (value) {
            if (((8 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setFloat64((this.m_Position | 0), value, true);
            this.m_Position = (this.m_Position + 8) >>> 0;
        },
        write$7: function (value) {
            if (((4 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setFloat32((this.m_Position | 0), value, true);
            this.m_Position = (this.m_Position + 4) >>> 0;
        },
        write: function (value) {
            if (((1 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setUint8((this.m_Position | 0), value);
            this.m_Position = (this.m_Position + 1) >>> 0;
        },
        write$6: function (value) {
            if (((1 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setInt8((this.m_Position | 0), value);
            this.m_Position = (this.m_Position + 1) >>> 0;
        },
        write$3: function (value) {
            if (((2 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setInt16((this.m_Position | 0), value, true);
            this.m_Position = (this.m_Position + 2) >>> 0;
        },
        write$8: function (value) {
            if (((2 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setUint16(this.m_Position, value, true);
            this.m_Position = (this.m_Position + 2) >>> 0;
        },
        write$4: function (value) {
            if (((4 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setInt32((this.m_Position | 0), value, true);
            this.m_Position = (this.m_Position + 4) >>> 0;
        },
        write$9: function (value) {
            if (((4 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setUint32(this.m_Position, value, true);
            this.m_Position = (this.m_Position + 4) >>> 0;
        },
        write$5: function (value) {
            //TODO: long types
            if (((8 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setInt32((this.m_Position | 0), Bridge.Long.clip32(value), true);
            this.view.setInt32((((this.m_Position | 0) + 4) | 0), 0, true);
            this.m_Position = (this.m_Position + 8) >>> 0;
        },
        write$10: function (value) {
            //TODO: long types
            if (((8 + this.getPosition()) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            this.view.setUint32(this.m_Position, Bridge.Long.clipu32(value), true);
            this.view.setUint32(((this.m_Position + 4) >>> 0), 0, true);
            this.m_Position = (this.m_Position + 8) >>> 0;
        },
        pushRelativeLimit: function (limit) {
            if (((this.getPosition() + limit) >>> 0) > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Error reading message");
            }
    
            this.limits.insert(0, ((this.getPosition() + limit) >>> 0));
        },
        pushAbsoluteLimit: function (limit) {
            if (limit > this.getCurrentLimit()) {
                throw new RobotRaconteur.ProtocolException("Error reading message");
            }
    
            this.limits.insert(0, limit);
        },
        popLimit: function () {
            this.limits.removeAt(0);
        },
        reset: function (length) {
            this.limits.clear();
            this.limits.insert(0, (length >>> 0));
            this.m_Position = 0;
        }
    });
    
    Bridge.define('RobotRaconteur.AsyncMutex', {
        waiting_tasks: null,
        current: null,
        config: {
            init: function () {
                this.waiting_tasks = new Bridge.List$1(Bridge.TaskCompletionSource)();
            }
        },
        lock: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                t, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    t = this.enter();
                                    $task1 = t;
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    $tcs.setResult(new RobotRaconteur.AsyncMutex.LockHandle(this, t));
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        lockWithTimeout: function (timeout) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                t, 
                noop, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4], $step);
                            switch ($step) {
                                case 0: {
                                    t = null;
                                    t = this.enter();
                                    $task1 = Bridge.Task.whenAny(t, Bridge.Task.delay(timeout));
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    if (t.isCompleted() || t.isFaulted() || t.isCanceled()) {
                                        $step = 2;
                                        continue;
                                    } 
                                    $step = 4;
                                    continue;
                                }
                                case 2: {
                                    $task2 = t;
                                    $step = 3;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $task2.getAwaitedResult();
                                    $tcs.setResult(new RobotRaconteur.AsyncMutex.LockHandle(this, t));
                                    return;
                                }
                                case 4: {
                                    
                                    noop = t.continueWith(Bridge.fn.bind(this, $_.RobotRaconteur.AsyncMutex.f1));
                                    
                                    throw new Bridge.Exception("Timeout wating for mutex lock");
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        enter: function () {
            var t = new Bridge.TaskCompletionSource();
    
            if (this.current == null) {
                t.trySetResult(0);
                this.current = t.task;
                return t.task;
            }
            else  {
                this.waiting_tasks.add(t);
                return t.task;
            }
        },
        exit: function (t) {
            var c = null;
    
            if (!Bridge.referenceEquals(t, this.current)) {
                throw new Bridge.InvalidOperationException("Invalid task to release mutex");
            }
            if (this.waiting_tasks.getCount() > 0) {
                c = this.waiting_tasks.getItem(0);
                this.waiting_tasks.removeAt(0);
                this.current = c.task;
            }
            else  {
                this.current = null;
            }
    
            if (c != null) {
                c.trySetResult(0);
            }
        },
        cancelAll: function () {
            var $t, $t1;
            var c2 = new Bridge.List$1(Bridge.TaskCompletionSource)();
    
            $t = Bridge.getEnumerator(this.waiting_tasks);
            while ($t.moveNext()) {
                var i = $t.getCurrent();
                c2.add(i);
            }
    
            $t1 = Bridge.getEnumerator(c2);
            while ($t1.moveNext()) {
                var i1 = $t1.getCurrent();
                i1.trySetCanceled();
            }
        }
    });
    
    Bridge.ns("RobotRaconteur.AsyncMutex", $_)
    
    Bridge.apply($_.RobotRaconteur.AsyncMutex, {
        f1: function (x) {
            var e = x.exception;
            try {
                this.exit(x);
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
        }
    });
    
    Bridge.define('RobotRaconteur.AsyncMutex.LockHandle', {
        inherits: [Bridge.IDisposable],
        task: null,
        owner: null,
        constructor: function (owner, task) {
            this.task = task;
            this.owner = owner;
        },
        dispose: function () {
            this.owner.exit(this.task);
        }
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurException', {
        inherits: [Bridge.Exception],
        errorCode: 0,
        error: "",
        constructor: function () {
            Bridge.Exception.prototype.$constructor.call(this);
    
        },
        constructor$1: function (ErrorCode, error, message) {
            Bridge.Exception.prototype.$constructor.call(this, message);
    
            this.error = error;
            this.errorCode = ErrorCode;
        },
        constructor$2: function (message, innerexception) {
            Bridge.Exception.prototype.$constructor.call(this, message, innerexception);
    
    
        },
        toString: function () {
            return "RobotRaconteurException: " + this.error + ": " + this.getMessage();
        }
    });
    
    Bridge.define('RobotRaconteur.MemberDefinition', {
        name: null,
        serviceEntry: null,
        constructor: function (ServiceEntry) {
            this.serviceEntry = ServiceEntry;
        }
    });
    
    Bridge.define('RobotRaconteur.Endpoint', {
        m_LocalEndpoint: 0,
        m_RemoteEndpoint: 0,
        m_RemoteNodeName: "",
        m_RemoteNodeID: null,
        transportConnection: null,
        messageNumber: 0,
        messageNumberLock: null,
        node: null,
        config: {
            init: function () {
                this.m_RemoteNodeID = RobotRaconteur.NodeID.getAny();
                this.lastMessageReceivedTime = Bridge.Date.utcNow() || new Date(-864e13);
                this.messageNumberLock = { };
            }
        },
        constructor: function (node) {
            if (node == null) {
                this.node = RobotRaconteur.RobotRaconteurNode.gets();
            }
            else  {
                this.node = node;
            }
        },
        getLocalEndpoint: function () {
            return this.m_LocalEndpoint;
        },
        getRemoteEndpoint: function () {
            return this.m_RemoteEndpoint;
        },
        getRemoteNodeName: function () {
            return this.m_RemoteNodeName;
        },
        getRemoteNodeID: function () {
            return this.m_RemoteNodeID;
        },
        sendMessage: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (m.header == null) {
                                        m.header = new RobotRaconteur.MessageHeader();
                                    }
                                    
                                    if (m.entries.getCount() === 1 && Bridge.cast(m.entries.getItem(0).entryType, Bridge.Int32) <= 500) {
                                        m.header.receiverNodeName = this.getRemoteNodeName();
                                        m.header.senderNodeName = this.node.getNodeName();
                                    }
                                    m.header.senderEndpoint = this.getLocalEndpoint();
                                    m.header.receiverEndpoint = this.getRemoteEndpoint();
                                    
                                    m.header.senderNodeID = this.node.getNodeID();
                                    m.header.receiverNodeID = this.getRemoteNodeID();
                                    
                                    m.header.messageID = this.messageNumber;
                                    this.messageNumber = (((this.messageNumber === (65535)) ? 0 : ((this.messageNumber + 1) | 0))) & 65535;
                                    
                                    $task1 = this.node.sendMessage(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        }
    });
    
    Bridge.define('RobotRaconteur.DataTypes', {
        statics: {
            void_t: 0,
            double_t: 1,
            single_t: 2,
            int8_t: 3,
            uint8_t: 4,
            int16_t: 5,
            uint16_t: 6,
            int32_t: 7,
            uint32_t: 8,
            int64_t: 9,
            uint64_t: 10,
            string_t: 11,
            structure_t: 101,
            vector_t: 102,
            dictionary_t: 103,
            object_t: 104,
            varvalue_t: 105,
            varobject_t: 106,
            multidimarray_t: 107,
            list_t: 108
        },
        $enum: true
    });
    
    Bridge.define('RobotRaconteur.DataTypeUtil', {
        statics: {
            size: function (type) {
                switch (type) {
                    case RobotRaconteur.DataTypes.double_t: 
                        return 8;
                    case RobotRaconteur.DataTypes.single_t: 
                        return 4;
                    case RobotRaconteur.DataTypes.int8_t: 
                    case RobotRaconteur.DataTypes.uint8_t: 
                        return 1;
                    case RobotRaconteur.DataTypes.int16_t: 
                    case RobotRaconteur.DataTypes.uint16_t: 
                        return 2;
                    case RobotRaconteur.DataTypes.int32_t: 
                    case RobotRaconteur.DataTypes.uint32_t: 
                        return 4;
                    case RobotRaconteur.DataTypes.int64_t: 
                    case RobotRaconteur.DataTypes.uint64_t: 
                        return 8;
                    case RobotRaconteur.DataTypes.string_t: 
                        return 1;
                }
                throw new Bridge.InvalidOperationException();
                //return 0;
            },
            typeIDFromObject: function (obj) {
    
                if (obj == null) {
                    return RobotRaconteur.DataTypes.void_t;
                }
                else  {
                    if (Bridge.is(obj, Float64Array)) {
                        return RobotRaconteur.DataTypes.double_t;
                    }
                    else  {
                        if (Bridge.is(obj, Float32Array)) {
                            return RobotRaconteur.DataTypes.single_t;
                        }
                        else  {
                            if (Bridge.is(obj, Int8Array)) {
                                return RobotRaconteur.DataTypes.int8_t;
                            }
                            else  {
                                if (Bridge.is(obj, Uint8Array)) {
                                    return RobotRaconteur.DataTypes.uint8_t;
                                }
                                else  {
                                    if (Bridge.is(obj, Int16Array)) {
                                        return RobotRaconteur.DataTypes.int16_t;
                                    }
                                    else  {
                                        if (Bridge.is(obj, Uint16Array)) {
                                            return RobotRaconteur.DataTypes.uint16_t;
                                        }
                                        else  {
                                            if (Bridge.is(obj, Int32Array)) {
                                                return RobotRaconteur.DataTypes.int32_t;
                                            }
                                            else  {
                                                if (Bridge.is(obj, Uint32Array)) {
                                                    return RobotRaconteur.DataTypes.uint32_t;
                                                }
                                                else  {
                                                    if (Bridge.is(obj, String)) {
                                                        return RobotRaconteur.DataTypes.string_t;
                                                    }
                                                    else  {
                                                        if (Bridge.is(obj, RobotRaconteur.MessageElementStructure)) {
                                                            return RobotRaconteur.DataTypes.structure_t;
                                                        }
                                                        else  {
                                                            if (Bridge.is(obj, RobotRaconteur.MessageElementMap$1(Bridge.Int32))) {
                                                                return RobotRaconteur.DataTypes.vector_t;
                                                            }
                                                            else  {
                                                                if (Bridge.is(obj, RobotRaconteur.MessageElementMap$1(String))) {
                                                                    return RobotRaconteur.DataTypes.dictionary_t;
                                                                }
                                                                else  {
                                                                    if (Bridge.is(obj, RobotRaconteur.MessageElementMultiDimArray)) {
                                                                        return RobotRaconteur.DataTypes.multidimarray_t;
                                                                    }
                                                                    else  {
                                                                        if (Bridge.is(obj, RobotRaconteur.MessageElementList)) {
                                                                            return RobotRaconteur.DataTypes.list_t;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
    
                //TODO: varvalue?
                /* else
                {
                    return DataTypes.varvalue_t;
                }*/
    
                throw new RobotRaconteur.DataTypeException("Unknown data type");
            },
            typeIDFromObject_known: function (obj) {
    
                if (obj == null) {
                    return true;
                }
                else  {
                    if (Bridge.is(obj, Float64Array)) {
                        return true;
                    }
                    else  {
                        if (Bridge.is(obj, Float32Array)) {
                            return true;
                        }
                        else  {
                            if (Bridge.is(obj, Int8Array)) {
                                return true;
                            }
                            else  {
                                if (Bridge.is(obj, Uint8Array)) {
                                    return true;
                                }
                                else  {
                                    if (Bridge.is(obj, Int16Array)) {
                                        return true;
                                    }
                                    else  {
                                        if (Bridge.is(obj, Uint16Array)) {
                                            return true;
                                        }
                                        else  {
                                            if (Bridge.is(obj, Int32Array)) {
                                                return true;
                                            }
                                            else  {
                                                if (Bridge.is(obj, Uint32Array)) {
                                                    return true;
                                                }
                                                else  {
                                                    if (true) {
                                                        return true;
                                                    }
                                                    else  {
                                                        if (Bridge.is(obj, RobotRaconteur.MessageElementStructure)) {
                                                            return true;
                                                        }
                                                        else  {
                                                            if (Bridge.is(obj, RobotRaconteur.MessageElementMap$1(Bridge.Int32))) {
                                                                return true;
                                                            }
                                                            else  {
                                                                if (Bridge.is(obj, RobotRaconteur.MessageElementMap$1(String))) {
                                                                    return true;
                                                                }
                                                                else  {
                                                                    if (Bridge.is(obj, RobotRaconteur.MessageElementMultiDimArray)) {
                                                                        return true;
                                                                    }
                                                                    else  {
                                                                        if (Bridge.is(obj, RobotRaconteur.MessageElementList)) {
                                                                            return true;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
    
                return false;
            },
            isNumber: function (t) {
                return ((t >= RobotRaconteur.DataTypes.double_t) && (RobotRaconteur.DataTypes.uint64_t >= t));
            },
            arrayFromDataType: function (t, length) {
                switch (t) {
                    case RobotRaconteur.DataTypes.double_t: 
                        return new Float64Array(length);
                    case RobotRaconteur.DataTypes.single_t: 
                        return new Float32Array(length);
                    case RobotRaconteur.DataTypes.int8_t: 
                        return new Int8Array(length);
                    case RobotRaconteur.DataTypes.uint8_t: 
                        return new Uint8Array(length);
                    case RobotRaconteur.DataTypes.int16_t: 
                        return new Int16Array(length);
                    case RobotRaconteur.DataTypes.uint16_t: 
                        return new Uint16Array(length);
                    case RobotRaconteur.DataTypes.int32_t: 
                        return new Int32Array(length);
                    case RobotRaconteur.DataTypes.uint32_t: 
                        return new Uint32Array(length);
                    case RobotRaconteur.DataTypes.int64_t: 
                        return new Int32Array(length);
                    case RobotRaconteur.DataTypes.uint64_t: 
                        return new Uint32Array(length);
                    case RobotRaconteur.DataTypes.string_t: 
                        return null;
                    case RobotRaconteur.DataTypes.structure_t: 
                        return null;
                }
    
                throw new RobotRaconteur.DataTypeException("Could not create array for data type");
            },
            arrayFromScalar: function (inv) {
    
                if (Bridge.is(inv, Array)) {
                    return inv;
                }
    
                var stype = Bridge.getType(inv).toString();
                switch (stype) {
                    case "System.Double": 
                        return [Bridge.cast(inv, Bridge.Double)];
                    case "System.Single": 
                        return [Bridge.cast(inv, Bridge.Single)];
                    case "System.SByte": 
                        return [Bridge.cast(inv, Bridge.SByte)];
                    case "System.Byte": 
                        return [Bridge.cast(inv, Bridge.Byte)];
                    case "System.Int16": 
                        return [Bridge.cast(inv, Bridge.Int16)];
                    case "System.UInt16": 
                        return [Bridge.cast(inv, Bridge.UInt16)];
                    case "System.Int32": 
                        return [Bridge.cast(inv, Bridge.Int32)];
                    case "System.UInt32": 
                        return [Bridge.cast(inv, Bridge.UInt32)];
                    case "System.Int64": 
                        return [Bridge.Long(Bridge.cast(inv, Bridge.Long))];
                    case "System.UInt64": 
                        return [Bridge.ULong(Bridge.cast(inv, Bridge.ULong))];
                }
    
                throw new RobotRaconteur.DataTypeException("Could not create array for data");
            }
        }
    });
    
    Bridge.define('RobotRaconteur.Evt', {
        listeners: null,
        stub: null,
        def: null,
        config: {
            init: function () {
                this.listeners = new Bridge.List$1(Function)();
            }
        },
        constructor: function (stub, def) {
            this.stub = stub;
            this.def = def;
        },
        addListener: function (listener) {
            this.listeners.add(listener);
        },
        removeListener: function (listener) {
            this.listeners.remove(listener);
        },
        fire: function (m) {
            var $t, $t1;
            var param = new Bridge.List$1(Object)();
            $t = Bridge.getEnumerator(this.def.parameters);
            while ($t.moveNext()) {
                var t = $t.getCurrent();
                param.add(this.stub.getRR_Context().unpackMessageElement(m.findElement(t.name), t, this.stub));
            }
    
            var l = this.listeners.toArray();
            $t1 = Bridge.getEnumerator(l);
            while ($t1.moveNext()) {
                (function () {
                    var ll = $t1.getCurrent();
                    Bridge.Task.run(function () {
                        ll(param.toArray());
                    });
                }).call(this);
            }
        }
    });
    
    Bridge.define('RobotRaconteur.Extensions', {
        statics: {
            ignoreResult: function (t) {
                return t.continueWith($_.RobotRaconteur.Extensions.f1);
            },
            awaitWithTimeout: function (task, timeout) {
                var $step = 0,
                    $task1, 
                    $task2, 
                    $taskResult2, 
                    $task3, 
                    $jumpFromFinally, 
                    $tcs = new Bridge.TaskCompletionSource(), 
                    $returnValue, 
                    timeout_task, 
                    r1, 
                    noop, 
                    noop1, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = Bridge.Array.min([0,1,2,3,4,5,6,7,8], $step);
                                switch ($step) {
                                    case 0: {
                                        if (timeout < 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = task;
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $task1.getAwaitedResult();
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    case 3: {
                                        
                                        timeout_task = Bridge.Task.delay(timeout);
                                        
                                        $task2 = Bridge.Task.whenAny(task, timeout_task);
                                        $step = 4;
                                        $task2.continueWith($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        r1 = $taskResult2;
                                        if (task.isCompleted() || task.isFaulted() || task.isCanceled()) {
                                            $step = 5;
                                            continue;
                                        } else  {
                                            $step = 7;
                                            continue;
                                        }
                                    }
                                    case 5: {
                                        
                                        noop = RobotRaconteur.Extensions.ignoreResult(timeout_task);
                                        
                                        $task3 = task;
                                        $step = 6;
                                        $task3.continueWith($asyncBody);
                                        return;
                                    }
                                    case 6: {
                                        $task3.getAwaitedResult();
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    case 7: {
                                        noop1 = RobotRaconteur.Extensions.ignoreResult(task);
                                        throw new Bridge.Exception("Operation timed out");
                                        $step = 8;
                                        continue;
                                    }
                                    case 8: {
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
                            $async_e = Bridge.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);
    
                $asyncBody();
                return $tcs.task;
            },
            awaitWithTimeout$1: function (T, task, timeout) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $task2, 
                    $taskResult2, 
                    $task3, 
                    $taskResult3, 
                    $jumpFromFinally, 
                    $tcs = new Bridge.TaskCompletionSource(), 
                    $returnValue, 
                    timeout_task, 
                    r1, 
                    noop, 
                    noop1, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = Bridge.Array.min([0,1,2,3,4,5,6,7,8], $step);
                                switch ($step) {
                                    case 0: {
                                        if (timeout < 0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                    }
                                    case 1: {
                                        $task1 = task;
                                        $step = 2;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult($taskResult1);
                                        return;
                                    }
                                    case 3: {
                                        
                                        
                                        timeout_task = Bridge.Task.delay(timeout);
                                        
                                        $task2 = Bridge.Task.whenAny(task, timeout_task);
                                        $step = 4;
                                        $task2.continueWith($asyncBody);
                                        return;
                                    }
                                    case 4: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        r1 = $taskResult2;
                                        if (task.isCompleted() || task.isFaulted() || task.isCanceled()) {
                                            $step = 5;
                                            continue;
                                        } else  {
                                            $step = 7;
                                            continue;
                                        }
                                    }
                                    case 5: {
                                        noop = RobotRaconteur.Extensions.ignoreResult(timeout_task);
                                        
                                        $task3 = task;
                                        $step = 6;
                                        $task3.continueWith($asyncBody);
                                        return;
                                    }
                                    case 6: {
                                        $taskResult3 = $task3.getAwaitedResult();
                                        $tcs.setResult($taskResult3);
                                        return;
                                    }
                                    case 7: {
                                        noop1 = RobotRaconteur.Extensions.ignoreResult(task);
                                        throw new Bridge.Exception("Operation timed out");
                                        $step = 8;
                                        continue;
                                    }
                                    case 8: {
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
                            $async_e = Bridge.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);
    
                $asyncBody();
                return $tcs.task;
            },
            splitEmpty: function (str) {
                return Bridge.String.split(str, [32, 9].map(function(i) {{ return String.fromCharCode(i); }}), null, 1);
            },
            splitEmpty$1: function (str, count) {
                return Bridge.String.split(str, [32, 9].map(function(i) {{ return String.fromCharCode(i); }}), count, 1);
            }
        }
    });
    
    Bridge.ns("RobotRaconteur.Extensions", $_)
    
    Bridge.apply($_.RobotRaconteur.Extensions, {
        f1: function (t2) {
            try {
                var e = t2.exception;
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
        }
    });
    
    Bridge.define('RobotRaconteur.ITransportConnection');
    
    Bridge.define('RobotRaconteur.Message', {
        header: null,
        entries: null,
        constructor: function () {
            this.entries = new Bridge.List$1(RobotRaconteur.MessageEntry)();
        },
        computeSize: function () {
            var $t;
            var s = this.header.computeSize();
            $t = Bridge.getEnumerator(this.entries);
            while ($t.moveNext()) {
                var e = $t.getCurrent();
                s = (s + e.computeSize()) >>> 0;
            }
            return s;
        },
        write: function (w) {
            var $t;
            w.pushRelativeLimit(this.computeSize());
            this.header.updateHeader(this.computeSize(), ((this.entries.getCount()) & 65535));
            this.header.write(w);
            $t = Bridge.getEnumerator(this.entries);
            while ($t.moveNext()) {
                var e = $t.getCurrent();
                e.write(w);
            }
            if (w.getDistanceFromLimit() !== 0) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            w.popLimit();
    
        },
        findEntry: function (name) {
            var $t;
    
            if (this.entries == null) {
                return null;
            }
    
            $t = Bridge.getEnumerator(this.entries);
            while ($t.moveNext()) {
                var m = $t.getCurrent();
                if (Bridge.referenceEquals(m.memberName, name)) {
                    return m;
                }
            }
    
            throw new RobotRaconteur.MessageEntryNotFoundException("Element " + name + " not found.");
    
        },
        addEntry: function (t, name) {
            var m = new RobotRaconteur.MessageEntry("constructor");
            m.memberName = name;
            m.entryType = t;
    
            if (this.entries == null) {
                this.entries = new Bridge.List$1(RobotRaconteur.MessageEntry)();
            }
            this.entries.add(m);
    
            return m;
        },
        read: function (r) {
            this.header = new RobotRaconteur.MessageHeader();
            this.header.read(r);
    
            r.pushRelativeLimit(((this.header.messageSize - this.header.headerLength) >>> 0));
    
            var s = this.header.entryCount;
            this.entries = new Bridge.List$1(RobotRaconteur.MessageEntry)(s);
            for (var i = 0; i < s; i = (i + 1) | 0) {
                var e = new RobotRaconteur.MessageEntry("constructor");
                e.read(r);
                this.entries.add(e);
            }
    
            r.popLimit();
    
        }
    });
    
    Bridge.define('RobotRaconteur.MessageElement', {
        statics: {
            findElement: function (m, name) {
                var $t;
                $t = Bridge.getEnumerator(m);
                while ($t.moveNext()) {
                    var e = $t.getCurrent();
                    if (Bridge.referenceEquals(e.elementName, name)) {
                        return e;
                    }
                }
                throw new RobotRaconteur.MessageElementNotFoundException("Could not find element " + name);
            },
            castData: function (T, Data) {
                if (Data == null) {
                    return Bridge.getDefaultValue(T);
                }
                if (Bridge.is(Data, T)) {
                    return Bridge.cast(Data, T);
                }
                throw new RobotRaconteur.DataTypeException("Could not cast data to type " + T.toString());
            }
        },
        elementSize: 0,
        elementName: "",
        elementType: 0,
        elementTypeName: "",
        metaData: "",
        dataCount: 0,
        dat: null,
        constructor: function () {
        },
        constructor$1: function (name, datin) {
            this.elementName = name;
            this.setData(datin);
            //UpdateData();
        },
        getData: function () {
            return this.dat;
        },
        setData: function (value) {
            this.dat = value;
    
            this.updateData();
        },
        computeSize: function () {
            var $t, $t1, $t2, $t3, $t4;
            var s = (((((16 + ((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.elementName)) >>> 0)) >>> 0) + ((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.elementTypeName)) >>> 0)) >>> 0) + ((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.metaData)) >>> 0)) >>> 0;
    
            if (this.elementType === RobotRaconteur.DataTypes.structure_t) {
    
                var d = Bridge.cast(this.getData(), RobotRaconteur.MessageElementStructure);
    
    
                $t = Bridge.getEnumerator(d.elements);
                while ($t.moveNext()) {
                    var e = $t.getCurrent();
                    s = (s + e.computeSize()) >>> 0;
                }
    
    
            }
            else  {
                if (this.elementType === RobotRaconteur.DataTypes.vector_t) {
                    var d1 = Bridge.cast(this.getData(), RobotRaconteur.MessageElementMap$1(Bridge.Int32));
    
    
                    $t1 = Bridge.getEnumerator(d1.elements);
                    while ($t1.moveNext()) {
                        var e1 = $t1.getCurrent();
                        s = (s + e1.computeSize()) >>> 0;
                    }
                }
                else  {
                    if (this.elementType === RobotRaconteur.DataTypes.dictionary_t) {
                        var d2 = Bridge.cast(this.getData(), RobotRaconteur.MessageElementMap$1(String));
    
    
                        $t2 = Bridge.getEnumerator(d2.elements);
                        while ($t2.moveNext()) {
                            var e2 = $t2.getCurrent();
                            s = (s + e2.computeSize()) >>> 0;
                        }
                    }
                    else  {
                        if (this.elementType === RobotRaconteur.DataTypes.list_t) {
                            var d3 = Bridge.cast(this.getData(), RobotRaconteur.MessageElementList);
    
    
                            $t3 = Bridge.getEnumerator(d3.elements);
                            while ($t3.moveNext()) {
                                var e3 = $t3.getCurrent();
                                s = (s + e3.computeSize()) >>> 0;
                            }
                        }
                        else  {
                            if (this.elementType === RobotRaconteur.DataTypes.multidimarray_t) {
                                var d4 = Bridge.cast(this.getData(), RobotRaconteur.MessageElementMultiDimArray);
    
    
                                $t4 = Bridge.getEnumerator(d4.elements);
                                while ($t4.moveNext()) {
                                    var e4 = $t4.getCurrent();
                                    s = (s + e4.computeSize()) >>> 0;
                                }
                            }
                            else  {
                                if (this.elementType === RobotRaconteur.DataTypes.void_t) {
                                    s = (s + 0) >>> 0;
                                }
                                else  {
    
                                    s = (s + (((this.dataCount * RobotRaconteur.DataTypeUtil.size(this.elementType)) >>> 0))) >>> 0;
                                }
                            }
                        }
                    }
                }
            }
    
            return s;
        },
        updateData: function () {
    
    
            if (this.dat == null) {
    
            }
            else  {
                if (Bridge.is(this.dat, Float64Array)) {
                    this.dataCount = (Bridge.cast(this.dat, Float64Array).length) >>> 0;
                }
                else  {
                    if (Bridge.is(this.dat, Float32Array)) {
                        this.dataCount = (Bridge.cast(this.dat, Float32Array).length) >>> 0;
                    }
                    else  {
                        if (Bridge.is(this.dat, Int8Array)) {
                            this.dataCount = (Bridge.cast(this.dat, Int8Array).length) >>> 0;
                        }
                        else  {
                            if (Bridge.is(this.dat, Uint8Array)) {
                                this.dataCount = (Bridge.cast(this.dat, Uint8Array).length) >>> 0;
                            }
                            else  {
                                if (Bridge.is(this.dat, Int16Array)) {
                                    this.dataCount = (Bridge.cast(this.dat, Int16Array).length) >>> 0;
                                }
                                else  {
                                    if (Bridge.is(this.dat, Uint16Array)) {
                                        this.dataCount = (Bridge.cast(this.dat, Uint16Array).length) >>> 0;
                                    }
                                    else  {
                                        if (Bridge.is(this.dat, Int32Array)) {
                                            this.dataCount = (Bridge.cast(this.dat, Int32Array).length) >>> 0;
                                        }
                                        else  {
                                            if (Bridge.is(this.dat, Uint32Array)) {
                                                this.dataCount = (Bridge.cast(this.dat, Uint32Array).length) >>> 0;
                                            }
                                            else  {
                                                if (Bridge.is(this.dat, RobotRaconteur.MessageElementStructure)) {
                                                    this.dataCount = (Bridge.cast(this.dat, RobotRaconteur.MessageElementStructure).elements.getCount()) >>> 0;
                                                    this.elementTypeName = Bridge.cast(this.dat, RobotRaconteur.MessageElementStructure).type;
    
                                                }
                                                else  {
                                                    if (Bridge.is(this.dat, RobotRaconteur.MessageElementMap$1(Bridge.Int32))) {
                                                        this.dataCount = (Bridge.cast(this.dat, RobotRaconteur.MessageElementMap$1(Bridge.Int32)).elements.getCount()) >>> 0;
    
                                                    }
                                                    else  {
                                                        if (Bridge.is(this.dat, RobotRaconteur.MessageElementMap$1(String))) {
                                                            this.dataCount = (Bridge.cast(this.dat, RobotRaconteur.MessageElementMap$1(String)).elements.getCount()) >>> 0;
    
                                                        }
                                                        else  {
                                                            if (Bridge.is(this.dat, RobotRaconteur.MessageElementList)) {
                                                                this.dataCount = (Bridge.cast(this.dat, RobotRaconteur.MessageElementList).elements.getCount()) >>> 0;
    
                                                            }
                                                            else  {
                                                                if (Bridge.is(this.dat, RobotRaconteur.MessageElementMultiDimArray)) {
                                                                    this.dataCount = (Bridge.cast(this.dat, RobotRaconteur.MessageElementMultiDimArray).elements.getCount()) >>> 0;
    
                                                                }
                                                                else  {
                                                                    if (Bridge.is(this.dat, String)) {
    
                                                                        this.dataCount = (RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(Bridge.cast(this.dat, String))) >>> 0;
    
                                                                    }
                                                                    else  {
    
                                                                        throw new RobotRaconteur.DataTypeException("Invalid data type");
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    
            this.elementType = RobotRaconteur.DataTypeUtil.typeIDFromObject(this.dat);
    
            /* if (ElementType != DataTypes.void_t && ElementType < DataTypes.string_t && !(Script.IsArray(dat)))
                {
                    throw new DataTypeException("Invalid data type");
                    //Can't handle this in Javascript
                    //dat = DataTypeUtil.ArrayFromScalar(dat);
                }*/
    
            this.elementSize = this.computeSize();
    
        },
        write: function (w) {
            var $t, $t1, $t2, $t3, $t4;
            this.updateData();
            w.pushRelativeLimit(this.elementSize);
            w.write$9(this.elementSize);
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.elementName)) & 65535));
            w.writeString8(this.elementName);
            w.write$8(Bridge.cast(this.elementType, Bridge.UInt16));
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.elementTypeName)) & 65535));
            w.writeString8(this.elementTypeName);
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.metaData)) & 65535));
            w.writeString8(this.metaData);
            w.write$9(this.dataCount);
            if (this.dat == null) {
    
            }
            else  {
                if (Bridge.is(this.dat, Float64Array) || Bridge.is(this.dat, Float32Array) || Bridge.is(this.dat, Int8Array) || Bridge.is(this.dat, Uint8Array) || Bridge.is(this.dat, Int16Array) || Bridge.is(this.dat, Uint16Array) || Bridge.is(this.dat, Int32Array) || Bridge.is(this.dat, Uint32Array)) {
                    w.writeArray(this.dat);
                }
                else  {
                    if (Bridge.is(this.dat, RobotRaconteur.MessageElementStructure)) {
                        var l = Bridge.cast(this.dat, RobotRaconteur.MessageElementStructure).elements;
                        $t = Bridge.getEnumerator(l);
                        while ($t.moveNext()) {
                            var e = $t.getCurrent();
                            e.write(w);
                        }
    
                    }
                    else  {
                        if (Bridge.is(this.dat, RobotRaconteur.MessageElementMap$1(Bridge.Int32))) {
                            var l1 = Bridge.cast(this.dat, RobotRaconteur.MessageElementMap$1(Bridge.Int32)).elements;
                            $t1 = Bridge.getEnumerator(l1);
                            while ($t1.moveNext()) {
                                var e1 = $t1.getCurrent();
                                e1.write(w);
                            }
    
                        }
                        else  {
                            if (Bridge.is(this.dat, RobotRaconteur.MessageElementMap$1(String))) {
                                var l2 = Bridge.cast(this.dat, RobotRaconteur.MessageElementMap$1(String)).elements;
                                $t2 = Bridge.getEnumerator(l2);
                                while ($t2.moveNext()) {
                                    var e2 = $t2.getCurrent();
                                    e2.write(w);
                                }
    
                            }
                            else  {
                                if (Bridge.is(this.dat, RobotRaconteur.MessageElementList)) {
                                    var l3 = Bridge.cast(this.dat, RobotRaconteur.MessageElementList).elements;
                                    $t3 = Bridge.getEnumerator(l3);
                                    while ($t3.moveNext()) {
                                        var e3 = $t3.getCurrent();
                                        e3.write(w);
                                    }
    
                                }
                                else  {
                                    if (Bridge.is(this.dat, String)) {
                                        w.writeString8(Bridge.cast(this.dat, String));
                                    }
                                    else  {
                                        if (Bridge.is(this.dat, RobotRaconteur.MessageElementMultiDimArray)) {
                                            var l4 = Bridge.cast(this.dat, RobotRaconteur.MessageElementMultiDimArray).elements;
                                            $t4 = Bridge.getEnumerator(l4);
                                            while ($t4.moveNext()) {
                                                var e4 = $t4.getCurrent();
                                                e4.write(w);
                                            }
    
                                        }
                                        else  {
                                            w.writeNumber(this.dat, this.elementType);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    
            if (w.getDistanceFromLimit() !== 0) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            w.popLimit();
    
        },
        read: function (r) {
            this.elementSize = r.readUInt32();
            r.pushRelativeLimit(((this.elementSize - 4) >>> 0));
            var name_s = r.readUInt16();
            this.elementName = r.readString8(name_s);
            this.elementType = r.readUInt16();
            var nametype_s = r.readUInt16();
            this.elementTypeName = r.readString8(nametype_s);
            var metadata_s = r.readUInt16();
            this.metaData = r.readString8(metadata_s);
            this.dataCount = r.readUInt32();
    
            if (this.elementType === RobotRaconteur.DataTypes.void_t) {
            }
            else  {
                if (this.elementType === RobotRaconteur.DataTypes.structure_t) {
                    var l = new Bridge.List$1(RobotRaconteur.MessageElement)((this.dataCount | 0));
                    for (var i = 0; Bridge.Long(i).lt(Bridge.Long(this.dataCount)); i = (i + 1) | 0) {
                        var m = new RobotRaconteur.MessageElement("constructor");
                        m.read(r);
                        l.add(m);
    
                    }
    
                    this.dat = new RobotRaconteur.MessageElementStructure(this.elementTypeName, l);
                }
                else  {
                    if (this.elementType === RobotRaconteur.DataTypes.vector_t) {
                        var l1 = new Bridge.List$1(RobotRaconteur.MessageElement)((this.dataCount | 0));
                        for (var i1 = 0; Bridge.Long(i1).lt(Bridge.Long(this.dataCount)); i1 = (i1 + 1) | 0) {
                            var m1 = new RobotRaconteur.MessageElement("constructor");
                            m1.read(r);
                            l1.add(m1);
    
                        }
    
                        this.dat = new RobotRaconteur.MessageElementMap$1(Bridge.Int32)(l1);
                    }
                    else  {
                        if (this.elementType === RobotRaconteur.DataTypes.dictionary_t) {
                            var l2 = new Bridge.List$1(RobotRaconteur.MessageElement)((this.dataCount | 0));
                            for (var i2 = 0; Bridge.Long(i2).lt(Bridge.Long(this.dataCount)); i2 = (i2 + 1) | 0) {
                                var m2 = new RobotRaconteur.MessageElement("constructor");
                                m2.read(r);
                                l2.add(m2);
    
                            }
    
                            this.dat = new RobotRaconteur.MessageElementMap$1(String)(l2);
                        }
                        else  {
                            if (this.elementType === RobotRaconteur.DataTypes.list_t) {
                                var l3 = new Bridge.List$1(RobotRaconteur.MessageElement)((this.dataCount | 0));
                                for (var i3 = 0; Bridge.Long(i3).lt(Bridge.Long(this.dataCount)); i3 = (i3 + 1) | 0) {
                                    var m3 = new RobotRaconteur.MessageElement("constructor");
                                    m3.read(r);
                                    l3.add(m3);
    
                                }
    
                                this.dat = new RobotRaconteur.MessageElementList(l3);
                            }
                            else  {
                                if (this.elementType === RobotRaconteur.DataTypes.string_t) {
                                    if (Bridge.Long(this.dataCount).gt(Bridge.Long(r.getDistanceFromLimit()))) {
                                        throw new RobotRaconteur.ProtocolException("Error reading message");
                                    }
                                    this.dat = r.readString8(this.dataCount);
    
                                }
                                else  {
                                    if (this.elementType === RobotRaconteur.DataTypes.multidimarray_t) {
                                        var l4 = new Bridge.List$1(RobotRaconteur.MessageElement)((this.dataCount | 0));
                                        for (var i4 = 0; Bridge.Long(i4).lt(Bridge.Long(this.dataCount)); i4 = (i4 + 1) | 0) {
                                            var m4 = new RobotRaconteur.MessageElement("constructor");
                                            m4.read(r);
                                            l4.add(m4);
    
                                        }
    
                                        this.dat = new RobotRaconteur.MessageElementMultiDimArray(l4);
                                    }
                                    else  {
                                        if (Bridge.Long(this.dataCount * RobotRaconteur.DataTypeUtil.size(this.elementType)).gt(Bridge.Long(r.getDistanceFromLimit()))) {
                                            throw new RobotRaconteur.ProtocolException("Error reading message");
                                        }
                                        var d = RobotRaconteur.DataTypeUtil.arrayFromDataType(this.elementType, this.dataCount);
                                        r.readArray(d);
                                        this.dat = d;
    
                                    }
                                }
                            }
                        }
                    }
                }
            }
    
            if (r.getDistanceFromLimit() !== 0) {
                throw new RobotRaconteur.ProtocolException("Error reading message");
            }
            r.popLimit();
    
        },
        castData: function (T) {
            if (this.getData() == null) {
                return Bridge.getDefaultValue(T);
            }
            if (Bridge.is(this.getData(), T)) {
                return Bridge.cast(this.getData(), T);
            }
            throw new RobotRaconteur.DataTypeException("Could not cast data to type " + T.toString());
        }
    });
    
    Bridge.define('RobotRaconteur.MessageElementList', {
        elements: null,
        constructor: function (e) {
            this.elements = e;
        }
    });
    
    Bridge.define('RobotRaconteur.MessageElementMap$1', function (T) { return {
        elements: null,
        constructor: function (e) {
            this.elements = e;
        }
    }; });
    
    Bridge.define('RobotRaconteur.MessageElementMultiDimArray', {
        elements: null,
        constructor: function (e) {
            this.elements = e;
        }
    });
    
    Bridge.define('RobotRaconteur.MessageElementStructure', {
        elements: null,
        type: null,
        constructor: function (type_, elements_) {
            this.elements = elements_;
            this.type = type_;
        }
    });
    
    Bridge.define('RobotRaconteur.MessageEntry', {
        entrySize: 0,
        entryType: 0,
        servicePath: "",
        memberName: "",
        transactionID: 0,
        error: 0,
        metaData: "",
        elements: null,
        constructor: function () {
            this.elements = new Bridge.List$1(RobotRaconteur.MessageElement)();
        },
        constructor$1: function (t, n) {
            this.elements = new Bridge.List$1(RobotRaconteur.MessageElement)();
            this.entryType = t;
            this.memberName = n;
        },
        computeSize: function () {
            var $t;
            var s = 22;
            $t = Bridge.getEnumerator(this.elements);
            while ($t.moveNext()) {
                var e = $t.getCurrent();
                s = (s + e.computeSize()) >>> 0;
            }
    
            s = (s + ((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.servicePath)) >>> 0)) >>> 0;
            s = (s + ((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.memberName)) >>> 0)) >>> 0;
            s = (s + ((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.metaData)) >>> 0)) >>> 0;
    
            return s;
        },
        findElement: function (name) {
            var $t;
    
            if (this.elements == null) {
                return null;
            }
    
            $t = Bridge.getEnumerator(this.elements);
            while ($t.moveNext()) {
                var m = $t.getCurrent();
                if (Bridge.referenceEquals(m.elementName, name)) {
                    return m;
                }
            }
    
            throw new RobotRaconteur.MessageElementNotFoundException("Element " + name + " not found.");
    
        },
        addElement$1: function (name, data) {
            var m = new RobotRaconteur.MessageElement("constructor");
            m.elementName = name;
            m.setData(data);
    
            if (this.elements == null) {
                this.elements = new Bridge.List$1(RobotRaconteur.MessageElement)();
            }
            this.elements.add(m);
    
            return m;
        },
        addElement: function (m) {
            if (this.elements == null) {
                this.elements = new Bridge.List$1(RobotRaconteur.MessageElement)();
            }
            this.elements.add(m);
    
            return m;
        },
        write: function (w) {
            var $t;
    
            this.entrySize = this.computeSize();
            w.pushRelativeLimit(this.entrySize);
            w.write$9(this.entrySize);
            w.write$8(Bridge.cast(this.entryType, Bridge.UInt16));
            w.write$8(0);
    
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.servicePath)) & 65535));
            w.writeString8(this.servicePath);
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.memberName)) & 65535));
            w.writeString8(this.memberName);
            w.write$9(this.transactionID);
            w.write$8(Bridge.cast(this.error, Bridge.UInt16));
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.metaData)) & 65535));
            w.writeString8(this.metaData);
            w.write$8(((this.elements.getCount()) & 65535));
    
            $t = Bridge.getEnumerator(this.elements);
            while ($t.moveNext()) {
                var e = $t.getCurrent();
                e.write(w);
            }
    
            if (w.getDistanceFromLimit() !== 0) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            w.popLimit();
        },
        read: function (r) {
            this.entrySize = r.readUInt32();
    
            r.pushRelativeLimit(((this.entrySize - 4) >>> 0));
    
            this.entryType = r.readUInt16();
            r.readUInt16();
    
            var sname_s = r.readUInt16();
            this.servicePath = r.readString8(sname_s);
            var mname_s = r.readUInt16();
            this.memberName = r.readString8(mname_s);
            this.transactionID = r.readUInt32();
            this.error = r.readUInt16();
    
            var metadata_s = r.readUInt16();
            this.metaData = r.readString8(metadata_s);
    
            var ecount = r.readUInt16();
    
    
    
            this.elements = new Bridge.List$1(RobotRaconteur.MessageElement)(ecount);
            for (var i = 0; i < ecount; i = (i + 1) | 0) {
                var e = new RobotRaconteur.MessageElement("constructor");
                e.read(r);
                this.elements.add(e);
            }
    
            if (r.getDistanceFromLimit() !== 0) {
                throw new RobotRaconteur.ProtocolException("Error reading message");
            }
            r.popLimit();
    
        }
    });
    
    Bridge.define('RobotRaconteur.MessageEntryType', {
        statics: {
            Null: 0,
            StreamOp: 1,
            StreamOpRet: 2,
            StreamCheckCapability: 3,
            StreamCheckCapabilityRet: 4,
            GetServiceDesc: 101,
            GetServiceDescRet: 102,
            ObjectTypeName: 103,
            ObjectTypeNameRet: 104,
            ServiceClosed: 105,
            ServiceClosedRet: 106,
            ConnectClient: 107,
            ConnectClientRet: 108,
            DisconnectClient: 109,
            DisconnectClientRet: 110,
            ConnectionTest: 111,
            ConnectionTestRet: 112,
            GetNodeInfo: 113,
            GetNodeInfoRet: 114,
            ReconnectClient: 115,
            ReconnectClientRet: 116,
            NodeCheckCapability: 117,
            NodeCheckCapabilityRet: 118,
            GetServiceAttributes: 119,
            GetServiceAttributesRet: 120,
            EndpointCheckCapability: 501,
            EndpointCheckCapabilityRet: 502,
            ServiceCheckCapabilityReq: 1101,
            ServiceCheckCapabilityRet: 1102,
            ClientKeepAliveReq: 1105,
            ClientKeepAliveRet: 1106,
            ClientSessionOpReq: 1107,
            ClientSessionOpRet: 1108,
            ServicePathReleasedReq: 1109,
            ServicePathReleasedRet: 1110,
            PropertyGetReq: 1111,
            PropertyGetRes: 1112,
            PropertySetReq: 1113,
            PropertySetRes: 1114,
            FunctionCallReq: 1121,
            FunctionCallRes: 1122,
            EventReq: 1131,
            EventRes: 1132,
            PipePacket: 1141,
            PipePacketRet: 1142,
            PipeConnectReq: 1143,
            PipeConnectRet: 1144,
            PipeDisconnectReq: 1145,
            PipeDisconnectRet: 1146,
            PipeClosed: 1147,
            PipeClosedRet: 1148,
            CallbackCallReq: 1151,
            CallbackCallRet: 1152,
            WirePacket: 1161,
            WirePacketRet: 1162,
            WireConnectReq: 1163,
            WireConnectRet: 1164,
            WireDisconnectReq: 1165,
            WireDisconnectRet: 1166,
            WireClosed: 1167,
            WireClosedRet: 1168,
            MemoryRead: 1171,
            MemoryReadRet: 1172,
            MemoryWrite: 1173,
            MemoryWriteRet: 1174,
            MemoryGetParam: 1175,
            MemoryGetParamRet: 1176,
            WireTransportOpReq: 11161,
            WireTransportOpRet: 11162,
            WireTransportEvent: 11163,
            WireTransportEventRet: 11164
        },
        $enum: true
    });
    
    Bridge.define('RobotRaconteur.MessageErrorType', {
        statics: {
            None: 0,
            ConnectionError: 1,
            ProtocolError: 2,
            ServiceNotFound: 3,
            ObjectNotFound: 4,
            InvalidEndpoint: 5,
            EndpointCommunicationFatalError: 6,
            NodeNotFound: 7,
            ServiceError: 8,
            MemberNotFound: 9,
            MemberFormatMismatch: 10,
            DataTypeMismatch: 11,
            DataTypeError: 12,
            DataSerializationError: 13,
            MessageEntryNotFound: 14,
            MessageElementNotFound: 15,
            UnknownError: 16,
            RemoteError: 100,
            TransactionTimeout: 101,
            AuthenticationError: 150,
            ObjectLockedError: 151
        },
        $enum: true
    });
    
    Bridge.define('RobotRaconteur.MessageHeader', {
        headerLength: 0,
        senderEndpoint: 0,
        receiverEndpoint: 0,
        senderNodeName: "",
        receiverNodeName: "",
        senderNodeID: null,
        receiverNodeID: null,
        metaData: "",
        entryCount: 0,
        messageID: 0,
        messageResID: 0,
        messageSize: 0,
        config: {
            init: function () {
                this.senderNodeID = new RobotRaconteur.NodeID("constructor", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                this.receiverNodeID = new RobotRaconteur.NodeID("constructor", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            }
        },
        computeSize: function () {
            return (((((((((64 + RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.senderNodeName)) | 0) + RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.receiverNodeName)) | 0) + RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.metaData)) | 0))) & 65535);
        },
        updateHeader: function (message_size, entry_count) {
            this.headerLength = this.computeSize();
            this.messageSize = message_size;
            this.entryCount = entry_count;
        },
        write: function (w) {
            w.pushRelativeLimit(this.headerLength);
            w.writeString8("RRAC");
            w.write$9(this.messageSize);
            w.write$8(2);
    
            w.write$8(this.headerLength);
    
            var bSenderNodeID = this.senderNodeID.toByteArray();
            var bReceiverNodeID = this.receiverNodeID.toByteArray();
            for (var i = 0; i < 16; i = (i + 1) | 0) {
                w.write(bSenderNodeID[i]);
            }
            ;
            for (var i1 = 0; i1 < 16; i1 = (i1 + 1) | 0) {
                w.write(bReceiverNodeID[i1]);
            }
            ;
            w.write$9(this.senderEndpoint);
            w.write$9(this.receiverEndpoint);
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.senderNodeName)) & 65535));
            w.writeString8(this.senderNodeName);
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.receiverNodeName)) & 65535));
            w.writeString8(this.receiverNodeName);
            w.write$8(((RobotRaconteur.ArrayBinaryWriter.getStringByteCount8(this.metaData)) & 65535));
            w.writeString8(this.metaData);
            w.write$8(this.entryCount);
            w.write$8(this.messageID);
            w.write$8(this.messageResID);
    
            if (w.getDistanceFromLimit() !== 0) {
                throw new RobotRaconteur.ProtocolException("Message write error");
            }
            w.popLimit();
    
        },
        read: function (r) {
            var seed = r.readString8(4);
            if (!Bridge.referenceEquals(seed, "RRAC")) {
                throw new RobotRaconteur.ProtocolException("Incorrect message seed");
            }
            this.messageSize = r.readUInt32();
            var version = r.readUInt16();
            if (version !== 2) {
                throw new RobotRaconteur.ProtocolException("Uknown protocol version");
            }
    
            this.headerLength = r.readUInt16();
    
            r.pushRelativeLimit((((((this.headerLength - 12) | 0))) >>> 0));
    
            var bSenderNodeID = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (var i = 0; i < 16; i = (i + 1) | 0) {
                bSenderNodeID[i] = r.readByte();
            }
            ;
            this.senderNodeID = new RobotRaconteur.NodeID("constructor", bSenderNodeID);
            var bReceiverNodeID = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (var i1 = 0; i1 < 16; i1 = (i1 + 1) | 0) {
                bReceiverNodeID[i1] = r.readByte();
            }
            ;
            this.receiverNodeID = new RobotRaconteur.NodeID("constructor", bReceiverNodeID);
            this.senderEndpoint = r.readUInt32();
            this.receiverEndpoint = r.readUInt32();
            var pname_s = r.readUInt16();
            this.senderNodeName = r.readString8(pname_s);
            var pname_r = r.readUInt16();
            this.receiverNodeName = r.readString8(pname_r);
            var meta_s = r.readUInt16();
            this.metaData = r.readString8(meta_s);
    
            this.entryCount = r.readUInt16();
            this.messageID = r.readUInt16();
            this.messageResID = r.readUInt16();
            if (r.getDistanceFromLimit() !== 0) {
                throw new RobotRaconteur.ProtocolException("Error reading message");
            }
            r.popLimit();
    
        }
    });
    
    Bridge.define('RobotRaconteur.MultiDimArray', {
        dimCount: 0,
        dims: null,
        real: null,
        complex: false,
        imag: null,
        constructor: function () {
        },
        constructor$1: function (Dims, Real, Imag) {
            if (Imag === void 0) { Imag = null; }
    
            this.dimCount = Dims.length;
            this.dims = Dims;
            this.real = Real;
    
            if (Imag != null) {
                this.complex = true;
                this.imag = Imag;
            }
        },
        calculateCopyIndices: function (mema, memorypos, memb, startbuffer, count, dimcount, indexa, indexb) {
            if (mema.complex !== memb.complex) {
                throw new Bridge.InvalidOperationException("Complex mismatch");
            }
    
            dimcount.v = mema.dimCount;
    
            if (dimcount.v === 0) {
                throw new Bridge.InvalidOperationException("Destination array is empty");
            }
    
            if (dimcount.v !== memb.dimCount || dimcount.v !== memorypos.length || dimcount.v !== startbuffer.length || dimcount.v !== count.length) {
                throw new Bridge.InvalidOperationException("Dimension counts do not match");
            }
    
    
            var copy_ops = 1;
    
            for (var i = 1; i < dimcount.v; i = (i + 1) | 0) {
                copy_ops = (copy_ops * count[i]) | 0;
            }
    
            var stridea = Bridge.Array.init(dimcount.v, 0);
    
            for (var i1 = 0; i1 < dimcount.v; i1 = (i1 + 1) | 0) {
                stridea[i1] = 1;
                for (var j = 0; j < i1; j = (j + 1) | 0) {
                    stridea[i1] = (stridea[i1] * mema.dims[j]) | 0;
                }
            }
    
            var strideb = Bridge.Array.init(dimcount.v, 0);
    
            for (var i2 = 0; i2 < dimcount.v; i2 = (i2 + 1) | 0) {
                strideb[i2] = 1;
                for (var j1 = 0; j1 < i2; j1 = (j1 + 1) | 0) {
                    strideb[i2] = (strideb[i2] * memb.dims[j1]) | 0;
                }
            }
    
    
            var cdims = Bridge.Array.init(dimcount.v, 0);
    
    
            indexa.v = new Int32Array(copy_ops);
            indexb.v = new Int32Array(copy_ops);
    
            for (var i3 = 0; i3 < copy_ops; i3 = (i3 + 1) | 0) {
                indexa.v[i3] = 0;
                for (var j2 = 0; j2 < dimcount.v; j2 = (j2 + 1) | 0) {
                    indexa.v[i3] = (indexa.v[i3] + ((((((cdims[j2] + memorypos[j2]) | 0)) * stridea[j2]) | 0))) | 0;
                }
                indexb.v[i3] = 0;
                for (var j3 = 0; j3 < dimcount.v; j3 = (j3 + 1) | 0) {
                    indexb.v[i3] = (indexb.v[i3] + ((((((cdims[j3] + startbuffer[j3]) | 0)) * strideb[j3]) | 0))) | 0;
                }
    
                cdims[1] = (cdims[1] + 1) | 0;
                for (var j4 = 1; j4 < dimcount.v; j4 = (j4 + 1) | 0) {
                    if (cdims[j4] > (((count[j4] - 1) | 0))) {
                        cdims[j4] = (cdims[j4] - count[j4]) | 0;
                        if (j4 < ((dimcount.v - 1) | 0)) {
                            cdims[((j4 + 1) | 0)] = (cdims[((j4 + 1) | 0)] + 1) | 0;
                        }
                    }
                }
            }
        },
        retrieveSubArray: function (memorypos, buffer, bufferpos, count) {
    
            var mema = this;
            var memb = buffer;
    
            if (mema.complex !== memb.complex) {
                throw new Bridge.InvalidOperationException("Complex mismatch");
            }
    
            var dimcount = { };
            var indexa = { };
            var indexb = { };
    
            this.calculateCopyIndices(mema, memorypos, memb, bufferpos, count, dimcount, indexa, indexb);
    
            for (var i = 0; i < indexa.v.length; i = (i + 1) | 0) {
                Bridge.Array.copy(mema.real, indexa.v[i], memb.real, indexb.v[i], count[0]);
                if (mema.complex) {
                    Bridge.Array.copy(mema.imag, indexa.v[i], memb.imag, indexb.v[i], count[0]);
                }
            }
        },
        assignSubArray: function (memorypos, buffer, bufferpos, count) {
    
    
            var mema = this;
            var memb = buffer;
    
            if (mema.complex !== memb.complex) {
                throw new Bridge.InvalidOperationException("Complex mismatch");
            }
    
            var dimcount = { };
            var indexa = { };
            var indexb = { };
    
            this.calculateCopyIndices(mema, memorypos, memb, bufferpos, count, dimcount, indexa, indexb);
    
            for (var i = 0; i < indexa.v.length; i = (i + 1) | 0) {
                Bridge.Array.copy(memb.real, indexb.v[i], mema.real, indexa.v[i], count[0]);
                if (mema.complex) {
                    Bridge.Array.copy(memb.imag, indexb.v[i], mema.imag, indexa.v[i], count[0]);
                }
            }
        }
    });
    
    Bridge.define('RobotRaconteur.NodeID', {
        statics: {
            getAny: function () {
                return new RobotRaconteur.NodeID("constructor", Bridge.Array.init(16, 0));
            },
            tryParse$1: function (stringid, bytes) {
                if (Bridge.referenceEquals(stringid, "{0}")) {
                    bytes.v = Bridge.Array.init(16, 0);
                    return true;
                }
    
                bytes.v = null;
                var r = new RegExp("\\{?([a-fA-F0-9]{8})-([a-fA-F0-9]{4})-([a-fA-F0-9]{4})-([a-fA-F0-9]{4})-([a-fA-F0-9]{12})\\}?");
    
                var res = r.exec(stringid);
                if (res == null) {
                    return false;
                }
                var res1 = "";
                for (var i = 1; i < 6; i = (i + 1) | 0) {
                    res1 += res[i];
                }
                bytes.v = Bridge.Array.init(16, 0);
                for (var i1 = 0; i1 < 16; i1 = (i1 + 1) | 0) {
                    var res2 = res1.substr(((i1 * 2) | 0), 2).toUpperCase();
                    var res3 = Bridge.Array.init(2, 0);
                    for (var j = 0; j < 2; j = (j + 1) | 0) {
                        if (res2.charCodeAt(j) >= 48 && res2.charCodeAt(j) <= 57) {
                            res3[j] = ((((res2.charCodeAt(j) - 48) | 0))) & 255;
                        }
                        else  {
                            res3[j] = ((((((res2.charCodeAt(j) - 65) | 0) + 10) | 0))) & 255;
                        }
                    }
                    bytes.v[i1] = (((res3[0] << 4) | res3[1])) & 255;
                }
                return true;
            },
            tryParse: function (stringid, nodeid) {
                var bytes = { };
                nodeid.v = null;
                if (!RobotRaconteur.NodeID.tryParse$1(stringid, bytes)) {
                    return false;
                }
                nodeid.v = new RobotRaconteur.NodeID("constructor", bytes.v);
                return true;
            },
            newUniqueID: function () {
                var byte_id = Bridge.Array.init(16, 0);
                for (var i = 0; i < 16; i = (i + 1) | 0) {
                    byte_id[i] = Bridge.Int.clipu8(Math.random() * 255);
                }
    
                byte_id[6] = (((byte_id[6] & 15) | 64)) & 255;
                byte_id[8] = (((byte_id[8] & 15) | 160)) & 255;
                return new RobotRaconteur.NodeID("constructor", byte_id);
            },
            op_Explicit: function (i) {
                return i.toByteArray();
            },
            op_Equality: function (id1, id2) {
                if (id1 == null && id2 == null) {
                    return true;
                }
                if ((id1 == null && id2 != null) || (id1 != null && id2 == null)) {
                    return false;
                }
    
                return Bridge.Linq.Enumerable.from(id1.id).sequenceEqual(id2.id);
            },
            op_Inequality: function (id1, id2) {
                if (id1 == null && id2 == null) {
                    return false;
                }
                if ((id1 == null && id2 != null) || (id1 != null && id2 == null)) {
                    return true;
                }
    
                return !Bridge.Linq.Enumerable.from(id1.id).sequenceEqual(id2.id);
            }
        },
        id: null,
        constructor: function (id) {
            if (id.length !== 16) {
                throw new Bridge.InvalidOperationException("Node ID must be 128 bits long");
            }
            this.id = id;
        },
        constructor$1: function (id) {
            var id1 = { };
            if (RobotRaconteur.NodeID.tryParse$1(id, id1)) {
                this.id = id1.v;
                return;
            }
    
    
            throw new Bridge.InvalidOperationException("Invalid format for NodeID");
    
        },
        getIsAnyNode: function () {
            return Bridge.Linq.Enumerable.from(this.id).all($_.RobotRaconteur.NodeID.f1);
        },
        toByteArray: function () {
            var bid = Bridge.Array.init(16, 0);
            Bridge.Array.copy(this.id, 0, bid, 0, 16);
            return bid;
        },
        toString: function () {
            var hexvals = Bridge.Linq.Enumerable.from(this.id).select($_.RobotRaconteur.NodeID.f2).toArray();
            var g1 = hexvals.slice(0, 0 + 4).join("");
            var g2 = hexvals.slice(4, 4 + 2).join("");
            var g3 = hexvals.slice(6, 6 + 2).join("");
            var g4 = hexvals.slice(8, 8 + 2).join("");
            var g5 = hexvals.slice(10, 10 + 6).join("");
    
            return "{" + [g1, g2, g3, g4, g5].join("-") + "}";
        },
        equals: function (obj) {
            if (obj == null) {
                return false;
            }
            if (!(Bridge.is(obj, RobotRaconteur.NodeID))) {
                return false;
            }
            return RobotRaconteur.NodeID.op_Equality(this, Bridge.cast(obj, RobotRaconteur.NodeID));
        },
        getHashCode: function () {
            var $t;
            var sum = 0;
            $t = Bridge.getEnumerator(this.id);
            while ($t.moveNext()) {
                var b = $t.getCurrent();
                sum = (sum + b) | 0;
            }
            return sum;
        }
    });
    
    Bridge.ns("RobotRaconteur.NodeID", $_)
    
    Bridge.apply($_.RobotRaconteur.NodeID, {
        f1: function (x) {
            return x === 0;
        },
        f2: function (x) {
            return Bridge.String.format("{0:x2}", x);
        }
    });
    
    Bridge.define('RobotRaconteur.ParseConnectionUrlResult', {
        scheme: null,
        host: null,
        port: 0,
        path: null,
        nodeid: null,
        nodename: null,
        service: null
    });
    
    Bridge.define('RobotRaconteur.Pipe', {
        statics: {
            ANY_INDEX: -1
        },
        pipeendpoints: null,
        m_Name: null,
        datatype: null,
        stub: null,
        connecting: null,
        early_endpoints: null,
        config: {
            init: function () {
                this.pipeendpoints = new Bridge.Dictionary$2(Bridge.Int32,RobotRaconteur.Pipe.PipeEndpoint)();
                this.connecting = new Bridge.List$1(Object)();
                this.early_endpoints = new Bridge.Dictionary$2(Bridge.Int32,RobotRaconteur.Pipe.PipeEndpoint)();
            }
        },
        constructor: function (name, datatype, stub) {
            this.m_Name = name;
            this.stub = stub;
            this.datatype = datatype;
        },
        getMemberName: function () {
            return this.m_Name;
        },
        sendPipePacket: function (data, index, packetnumber, requestack, e) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                me, 
                m, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (e === void 0) { e = null; }
                                    me = this.packPacket(data, index, packetnumber, requestack);
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.PipePacket, this.getMemberName());
                                    m.addElement(me);
                                    $task1 = this.stub.rR_SendPipeMessage(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        connect: function (index) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                connecting_key, 
                connecting_key2, 
                m, 
                ret, 
                rindex, 
                e, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4], $step);
                            switch ($step) {
                                case 0: {
                                    if (index === void 0) { index = -1; }
                                    connecting_key = { };
                                    connecting_key2 = { item1: index, item2: connecting_key };
                                    this.connecting.add(connecting_key2);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.PipeConnectReq, this.getMemberName());
                                    m.addElement(this.stub.getRR_Context().packMessageElement(index, "int32 index", this.stub));
                                    $task1 = this.stub.rR_ProcessTransaction(m);
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    ret = $taskResult1;
                                    
                                    rindex = Bridge.cast(this.stub.getRR_Context().unpackMessageElement(ret.findElement("index"), "int32 index", this.stub), Bridge.Int32);
                                    
                                    if (this.early_endpoints.containsKey(rindex)) {
                                        e = this.early_endpoints.get(rindex);
                                        this.early_endpoints.remove(rindex);
                                    }
                                    else  {
                                        e = new RobotRaconteur.Pipe.PipeEndpoint(this, rindex);
                                    }
                                    this.pipeendpoints.add(rindex, e);
                                    
                                    $returnValue = e;
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    this.connecting.remove(connecting_key2);
                                    if (this.connecting.getCount() === 0) {
                                        this.early_endpoints.clear();
                                    }
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 4;
                                    continue;
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ($step >= 1 && $step <= 2){
    
                            $step = 3;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        pipePacketReceived: function (m, e) {
            var $t, $t1;
            if (e === void 0) { e = null; }
            if (m.entryType === RobotRaconteur.MessageEntryType.PipeClosed) {
                try {
    
                    var index = Bridge.cast(this.stub.getRR_Context().unpackMessageElement(m.findElement("index"), "int32 index", this.stub), Bridge.Int32);
                    this.pipeendpoints.get(index).remoteClose();
                }
                catch ($e1) {
                    $e1 = Bridge.Exception.create($e1);
                }
                ;
            }
            else  {
                if (m.entryType === RobotRaconteur.MessageEntryType.PipePacket) {
                    var ack = new Bridge.List$1(RobotRaconteur.MessageElement)();
                    $t = Bridge.getEnumerator(m.elements);
                    while ($t.moveNext()) {
                        var $t1 = (function () {
                            var me = $t.getCurrent();
                            try {
    
                                var index1 = Bridge.Int32.parse(me.elementName);
                                var pnum = { };
    
                                var p = null;
                                if (this.pipeendpoints.containsKey(index1)) {
                                    p = this.pipeendpoints.get(index1);
                                }
                                else  {
                                    if (this.early_endpoints.containsKey(index1)) {
                                        p = this.early_endpoints.get(index1);
                                    }
                                    else  {
                                        if (this.connecting.getCount() > 0) {
                                            if (Bridge.Linq.Enumerable.from(this.connecting).any(function (x) {
                                                return x.item1 === -1 || x.item1 === index1;
                                            })) {
                                                p = new RobotRaconteur.Pipe.PipeEndpoint(this, index1);
                                                this.early_endpoints.add(index1, p);
                                            }
                                        }
                                    }
                                }
    
                                if (p == null) {
                                    return {jump:1};
                                }
                                if (this.dispatchPacket(me, p, pnum)) {
                                    var ack_me = this.stub.getRR_Context().packMessageElement(pnum.v, "uint32 value", this.stub);
                                    ack_me.elementName = me.elementName;
                                    ack.add(ack_me);
                                }
                            }
                            catch ($e2) {
                                $e2 = Bridge.Exception.create($e2);
    
                            }
                        }).call(this) || {};
                        if($t1.jump == 1) continue;
                    }
                    try {
                        if (ack.getCount() > 0) {
                            var mack = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.PipePacketRet, m.memberName);
                            mack.elements = ack;
                            RobotRaconteur.Extensions.ignoreResult(this.stub.rR_SendPipeMessage(mack));
                        }
                    }
                    catch ($e3) {
                        $e3 = Bridge.Exception.create($e3);
                    }
                }
                else  {
                    if (m.entryType === RobotRaconteur.MessageEntryType.PipePacketRet) {
                        try {
                            $t1 = Bridge.getEnumerator(m.elements);
                            while ($t1.moveNext()) {
                                var me1 = $t1.getCurrent();
                                var index2 = Bridge.Int32.parse(me1.elementName);
                                this.dispatchPacketAck(me1, this.pipeendpoints.get(index2));
                            }
                        }
                        catch ($e4) {
                            $e4 = Bridge.Exception.create($e4);
                        }
                    }
                }
            }
        },
        shutdown: function () {
            var $t;
            var endps = Bridge.Linq.Enumerable.from(this.pipeendpoints.getValues()).toArray();
            $t = Bridge.getEnumerator(endps);
            while ($t.moveNext()) {
                var e = $t.getCurrent();
                try {
                    e.remoteClose();
                }
                catch ($e1) {
                    $e1 = Bridge.Exception.create($e1);
                }
            }
        },
        close: function (e, ee) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                m, 
                ret, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (ee === void 0) { ee = null; }
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.PipeDisconnectReq, this.getMemberName());
                                    m.addElement(this.stub.getRR_Context().packMessageElement(e.getIndex(), "int32 index", this.stub));
                                    $task1 = this.stub.rR_ProcessTransaction(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    ret = $taskResult1;
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        dispatchPacketAck: function (me, e) {
            var pnum = Bridge.cast(this.stub.getRR_Context().unpackMessageElement(me, "uint32 packetnumber", this.stub), Bridge.UInt32);
            e.pipePacketAckReceived(pnum);
        },
        dispatchPacket: function (me, e, packetnumber) {
            var index = Bridge.Int32.parse(me.elementName);
            var elems = Bridge.cast(me.getData(), RobotRaconteur.MessageElementMap$1(String)).elements;
            packetnumber.v = Bridge.cast(this.stub.getRR_Context().unpackMessageElement(RobotRaconteur.MessageElement.findElement(elems, "packetnumber"), "uint32 packetnumber", this.stub), Bridge.UInt32);
            var data;
    
            data = this.stub.getRR_Context().unpackMessageElement(RobotRaconteur.MessageElement.findElement(elems, "packet"), this.datatype, this.stub);
    
            e.pipePacketReceived(data, packetnumber.v);
    
            var requestack = (Bridge.Linq.Enumerable.from(elems).any($_.RobotRaconteur.Pipe.f1));
            return requestack;
        },
        packPacket: function (data, index, packetnumber, requestack) {
            var elems = new Bridge.List$1(RobotRaconteur.MessageElement)();
            elems.add(this.stub.getRR_Context().packMessageElement(packetnumber, "uint32 packetnumber", this.stub));
            //elems.Add(new MessageElement("packetnumber", packetnumber));
    
            var elem = this.stub.getRR_Context().packMessageElement(data, this.datatype, this.stub);
            elem.elementName = "packet";
            elems.add(elem);
    
            if (requestack) {
                elems.add(this.stub.getRR_Context().packMessageElement(1, "int32 requestack", this.stub));
            }
    
            var delems = new RobotRaconteur.MessageElementMap$1(String)(elems);
    
            var me = new RobotRaconteur.MessageElement("constructor$1", index.toString(), delems);
    
            return me;
        },
        deleteEndpoint: function (e) {
            this.pipeendpoints.remove(e.getIndex());
        }
    });
    
    Bridge.ns("RobotRaconteur.Pipe", $_)
    
    Bridge.apply($_.RobotRaconteur.Pipe, {
        f1: function (x) {
            return Bridge.referenceEquals(x.elementName, "requestack");
        }
    });
    
    Bridge.define('RobotRaconteur.Pipe.PipeEndpoint', {
        send_packet_number: 0,
        recv_packet_number: 0,
        parent: null,
        index: 0,
        endpoint: null,
        requestPacketAck: false,
        send_mutex: null,
        out_of_order_packets: null,
        recv_lock: null,
        recv_packets: null,
        close_callback: null,
        config: {
            events: {
                PacketReceivedEvent: null,
                PacketAckReceivedEvent: null
            },
            init: function () {
                this.send_mutex = new RobotRaconteur.AsyncMutex();
                this.out_of_order_packets = new Bridge.Dictionary$2(Bridge.UInt32,Object)();
                this.recv_lock = { };
                this.recv_packets = new Bridge.List$1(Object)();
            }
        },
        constructor: function (parent, index, endpoint) {
            if (endpoint === void 0) { endpoint = null; }
    
            this.parent = parent;
            this.index = index;
            this.endpoint = endpoint;
        },
        getIndex: function () {
            return this.index;
        },
        getEndpoint: function () {
            return this.endpoint.getLocalEndpoint();
        },
        getAvailable: function () {
            return this.recv_packets.getCount();
        },
        getPipeCloseCallback: function () {
            return this.close_callback;
        },
        setPipeCloseCallback: function (value) {
            this.close_callback = value;
        },
        sendPacket: function (packet) {
            var $step = 0,
                $task1, 
                $task2, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                mutex, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4,5], $step);
                            switch ($step) {
                                case 0: {
                                    mutex = this.send_mutex.enter();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    $task1 = mutex;
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $task1.getAwaitedResult();
                                    this.send_packet_number = (this.send_packet_number < 4294967295) ? ((this.send_packet_number + 1) >>> 0) : 0;
                                    
                                    $task2 = this.parent.sendPipePacket(packet, this.index, this.send_packet_number, this.requestPacketAck, this.endpoint);
                                    $step = 3;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $task2.getAwaitedResult();
                                    $returnValue = this.send_packet_number;
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    this.send_mutex.exit(mutex);
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ($step >= 1 && $step <= 3){
    
                            $step = 4;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        close: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.parent.close(this);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        increment_packet_number: function (packetnum) {
            return (packetnum < 4294967295) ? ((packetnum + 1) >>> 0) : 0;
    
        },
        pipePacketReceived: function (packet, packetnum) {
            if (packetnum === this.increment_packet_number(this.recv_packet_number)) {
                this.recv_packets.add(packet);
                this.recv_packet_number = this.increment_packet_number(this.recv_packet_number);
                if (this.out_of_order_packets.getCount() > 0) {
                    while (Bridge.Array.contains(this.out_of_order_packets.getKeys(), this.increment_packet_number(this.recv_packet_number))) {
                        this.recv_packet_number = this.increment_packet_number(this.recv_packet_number);
                        var opacket = this.out_of_order_packets.get(this.recv_packet_number);
                        this.recv_packets.add(opacket);
                        this.out_of_order_packets.remove(this.recv_packet_number);
                    }
                }
    
                if (this.PacketReceivedEvent != null) {
                    try {
                        this.PacketReceivedEvent(this);
                    }
                    catch ($e1) {
                        $e1 = Bridge.Exception.create($e1);
                    }
                }
            }
            else  {
                this.out_of_order_packets.add(packetnum, packet);
            }
        },
        pipePacketAckReceived: function (packetnum) {
            this.PacketAckReceivedEvent(this, packetnum);
        },
        peekNextPacket: function () {
            return Bridge.Linq.Enumerable.from(this.recv_packets).first();
        },
        receivePacket: function () {
            var o = Bridge.Linq.Enumerable.from(this.recv_packets).first();
            this.recv_packets.removeAt(0);
            return o;
        },
        remoteClose: function () {
            if (this.close_callback != null) {
                try {
                    this.close_callback(this);
                }
                catch ($e1) {
                    $e1 = Bridge.Exception.create($e1);
                }
            }
            ;
            try {
                RobotRaconteur.Extensions.ignoreResult(this.close());
            }
            catch ($e2) {
                $e2 = Bridge.Exception.create($e2);
            }
        }
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurExceptionUtil', {
        statics: {
            exceptionToMessageEntry: function (exception, entry) {
                if (Bridge.is(exception, RobotRaconteur.RobotRaconteurException)) {
                    var r = Bridge.cast(exception, RobotRaconteur.RobotRaconteurException);
                    entry.error = r.errorCode;
                    entry.addElement$1("errorname", r.error);
                    entry.addElement$1("errorstring", r.getMessage());
    
                }
                else  {
                    entry.error = RobotRaconteur.MessageErrorType.RemoteError;
                    entry.addElement$1("errorname", Bridge.getType(exception).toString());
                    entry.addElement$1("errorstring", exception.getMessage());
    
    
                }
    
            },
            messageEntryToException: function (entry) {
                switch (entry.error) {
                    case RobotRaconteur.MessageErrorType.ConnectionError: 
                        return new RobotRaconteur.ConnectionException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.ProtocolError: 
                        return new RobotRaconteur.ProtocolException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.ServiceNotFound: 
                        return new RobotRaconteur.ServiceNotFoundException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.ObjectNotFound: 
                        return new RobotRaconteur.ObjectNotFoundException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.InvalidEndpoint: 
                        return new RobotRaconteur.InvalidEndpointException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.EndpointCommunicationFatalError: 
                        return new RobotRaconteur.EndpointCommunicationFatalException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.NodeNotFound: 
                        return new RobotRaconteur.NodeNotFoundException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.ServiceError: 
                        return new RobotRaconteur.ServiceException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.MemberNotFound: 
                        return new RobotRaconteur.MemberNotFoundException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.MemberFormatMismatch: 
                        return new RobotRaconteur.MemberFormatMismatchException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.DataTypeMismatch: 
                        return new RobotRaconteur.DataTypeMismatchException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.DataTypeError: 
                        return new RobotRaconteur.DataTypeException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.DataSerializationError: 
                        return new RobotRaconteur.DataTypeException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.MessageEntryNotFound: 
                        return new RobotRaconteur.MessageEntryNotFoundException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.MessageElementNotFound: 
                        return new RobotRaconteur.MessageElementNotFoundException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.UnknownError: 
                        return new RobotRaconteur.UnknownException(entry.findElement("errorname").castData(String), entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.RemoteError: 
                        return new RobotRaconteur.RobotRaconteurRemoteException("constructor$1", entry.findElement("errorname").castData(String), entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.TransactionTimeout: 
                        return new RobotRaconteur.TransactionTimeoutException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.AuthenticationError: 
                        return new RobotRaconteur.AuthenticationException(entry.findElement("errorstring").castData(String));
                    case RobotRaconteur.MessageErrorType.ObjectLockedError: 
                        return new RobotRaconteur.ObjectLockedException(entry.findElement("errorstring").castData(String));
                }
    
                return new RobotRaconteur.RobotRaconteurException("constructor$1", entry.error, entry.findElement("errorname").castData(String), entry.findElement("errorstring").castData(String));
    
            }
        }
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurNode', {
        statics: {
            sp: null,
            Version: "0.8.0",
            gets: function () {
                if (RobotRaconteur.RobotRaconteurNode.sp == null) {
                    RobotRaconteur.RobotRaconteurNode.sp = new RobotRaconteur.RobotRaconteurNode();
                }
                return RobotRaconteur.RobotRaconteurNode.sp;
            }
        },
        m_NodeID: null,
        m_NodeName: null,
        endpoints: null,
        endpointInactivityTimeout: 600000,
        transportInactivityTimeout: 600000,
        transactionTimeout: 15000,
        transport: null,
        config: {
            init: function () {
                this.endpoints = new Bridge.Dictionary$2(Bridge.UInt32,RobotRaconteur.Endpoint)();
            }
        },
        constructor: function () {
            this.transport = new RobotRaconteur.WebSocketTransport(this);
        },
        getNodeID: function () {
            if (this.m_NodeID == null) {
                this.m_NodeID = RobotRaconteur.NodeID.newUniqueID();
            }
            return this.m_NodeID;
        },
        setNodeID: function (value) {
            if (this.m_NodeID == null) {
                this.m_NodeID = value;
    
            }
            else  {
                throw new Bridge.InvalidOperationException("NodeID cannot be changed once it is set");
            }
        },
        getNodeName: function () {
            if (this.m_NodeName == null) {
                this.m_NodeName = "";
            }
            return this.m_NodeName;
        },
        setNodeName: function (value) {
            if (this.m_NodeName == null) {
    
                var r = new RegExp("^[a-zA-Z][a-zA-Z0-9_\\.\\-]*$");
    
                if (r.exec(value) == null) {
                    throw new Bridge.InvalidOperationException("Invalid node name");
                }
    
                this.m_NodeName = value;
    
            }
            else  {
                throw new Bridge.InvalidOperationException("NodeName cannot be changed once it is set");
            }
        },
        sendMessage: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                e, 
                $e1, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (RobotRaconteur.NodeID.op_Inequality(m.header.senderNodeID, this.getNodeID())) {
                                    
                                        throw new RobotRaconteur.ConnectionException("Could not route message");
                                    
                                    }
                                    
                                    try {
                                        e = this.endpoints.get(m.header.senderEndpoint);
                                    }
                                    catch ($e1) {
                                        $e1 = Bridge.Exception.create($e1);
                                        if (Bridge.is($e1, Bridge.KeyNotFoundException)) {
                                            throw new RobotRaconteur.InvalidEndpointException("Could not find endpoint");
                                        }
                                        else {
                                            throw $e1;
                                        }
                                    }
                                    
                                    $task1 = this.transport.sendMessage(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        messageReceived: function (m) {
            if (RobotRaconteur.NodeID.op_Inequality(m.header.receiverNodeID, this.getNodeID())) {
                var eret = this.generateErrorReturnMessage(m, RobotRaconteur.MessageErrorType.NodeNotFound, "RobotRaconteur.NodeNotFound", "Could not find route to remote node");
                if (eret.entries.getCount() > 0) {
                    RobotRaconteur.Extensions.ignoreResult(this.sendMessage(eret));
                }
            }
            else  {
                try {
                    var e;
                    e = this.endpoints.get(m.header.receiverEndpoint);
                    e.messageReceived(m);
                }
                catch ($e1) {
                    $e1 = Bridge.Exception.create($e1);
                    if (Bridge.is($e1, Bridge.KeyNotFoundException)) {
                        var eret1 = this.generateErrorReturnMessage(m, RobotRaconteur.MessageErrorType.InvalidEndpoint, "RobotRaconteur.InvalidEndpoint", "Invalid destination endpoint");
                        if (eret1.entries.getCount() > 0) {
                            RobotRaconteur.Extensions.ignoreResult(this.sendMessage(eret1));
                        }
                    }
                    else {
                        throw $e1;
                    }
                }
            }
        },
        generateErrorReturnMessage: function (m, err, errname, errdesc) {
            var $t;
            var ret = new RobotRaconteur.Message();
            ret.header = new RobotRaconteur.MessageHeader();
            ret.header.receiverNodeName = m.header.senderNodeName;
            ret.header.senderNodeName = m.header.receiverNodeName;
            ret.header.receiverNodeID = m.header.senderNodeID;
            ret.header.receiverEndpoint = m.header.senderEndpoint;
            ret.header.senderEndpoint = m.header.receiverEndpoint;
            ret.header.senderNodeID = m.header.receiverNodeID;
            $t = Bridge.getEnumerator(m.entries);
            while ($t.moveNext()) {
                var me = $t.getCurrent();
                if (Bridge.cast(me.entryType, Bridge.Int32) % 2 === 1) {
                    var eret = new RobotRaconteur.MessageEntry("constructor$1", me.entryType + 1, me.memberName);
                    eret.transactionID = me.transactionID;
                    eret.servicePath = me.servicePath;
                    eret.addElement$1("errorname", errname);
                    eret.addElement$1("errorstring", errdesc);
                    eret.error = err;
                    ret.entries.add(eret);
                }
            }
    
            return ret;
    
        },
        registerEndpoint: function (e) {
            var ep;
            do  {
                ep = Bridge.Int.clipu32(Math.random() * 4294967295);
            } while (this.endpoints.containsKey(ep));
    
            e.m_LocalEndpoint = ep;
            this.endpoints.add(ep, e);
            return ep;
        },
        deleteEndpoint: function (e) {
            try {
                RobotRaconteur.Extensions.ignoreResult(this.transport.closeTransportConnection(e));
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
    
            try {
                this.endpoints.remove(e.getLocalEndpoint());
            }
            catch ($e2) {
                $e2 = Bridge.Exception.create($e2);
            }
        },
        checkConnection: function (endpoint) {
            try {
                var e;
                try {
                    e = this.endpoints.get(endpoint);
                }
                catch ($e1) {
                    $e1 = Bridge.Exception.create($e1);
                    if (Bridge.is($e1, Bridge.KeyNotFoundException)) {
                        throw new RobotRaconteur.InvalidEndpointException("Invalid endpoint");
                    }
                    else {
                        throw $e1;
                    }
                }
    
                this.transport.checkConnection(endpoint);
            }
            catch ($e2) {
                $e2 = Bridge.Exception.create($e2);
                if (Bridge.is($e2, Bridge.KeyNotFoundException)) {
                    throw new RobotRaconteur.ConnectionException("Transport not connected");
                }
                else {
                    throw $e2;
                }
            }
    
        },
        connectService: function (url, username, credentials) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                c, 
                $e1, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4], $step);
                            switch ($step) {
                                case 0: {
                                    if (username === void 0) { username = null; }
                                    if (credentials === void 0) { credentials = null; }
                                    c = new RobotRaconteur.ClientContext(this);
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    this.registerEndpoint(c);
                                    $task1 = RobotRaconteur.Extensions.awaitWithTimeout$1(Object, c.connectService(this.transport, url, username, credentials), 5000);
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                    return;
                                }
                                case 3: {
                                    try {
                                        this.deleteEndpoint(c);
                                    }
                                    catch ($e1) {
                                        $e1 = Bridge.Exception.create($e1);
                                    }
                                    ;
                                    throw $async_e;
                                    $step = 4;
                                    continue;
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 1 && $step <= 2 ){
                            $step = 3;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        disconnectService: function (obj) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                stub, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    stub = Bridge.cast(obj, RobotRaconteur.ServiceStub);
                                    $task1 = stub.getRR_Context().close();
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        requestObjectLock: function (obj, flags) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                s, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (!(Bridge.is(obj, RobotRaconteur.ServiceStub))) {
                                        throw new Bridge.InvalidOperationException("Can only lock object opened through Robot Raconteur");
                                    }
                                    s = Bridge.cast(obj, RobotRaconteur.ServiceStub);
                                    
                                    $task1 = s.getRR_Context().requestObjectLock(obj, flags);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        releaseObjectLock: function (obj) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                s, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (!(Bridge.is(obj, RobotRaconteur.ServiceStub))) {
                                        throw new Bridge.InvalidOperationException("Can only unlock object opened through Robot Raconteur");
                                    }
                                    s = Bridge.cast(obj, RobotRaconteur.ServiceStub);
                                    
                                    $task1 = s.getRR_Context().releaseObjectLock(obj);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        monitorEnter: function (obj, timeout) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                s, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (timeout === void 0) { timeout = -1; }
                                    if (!(Bridge.is(obj, RobotRaconteur.ServiceStub))) {
                                        throw new Bridge.InvalidOperationException("Only service stubs can be monitored by RobotRaconteurNode");
                                    }
                                    s = Bridge.cast(obj, RobotRaconteur.ServiceStub);
                                    
                                    $task1 = s.getRR_Context().monitorEnter(obj, timeout);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        monitorExit: function (lock_) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = lock_.stub.getRR_Context().monitorExit(lock_);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        }
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurNode.MonitorLock', {
        lock_: null,
        stub: null
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurObjectLockFlags', {
        statics: {
            USER_LOCK: 0,
            CLIENT_LOCK: 1
        },
        $enum: true
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurParseException', {
        inherits: [Bridge.Exception],
        lineNumber: 0,
        constructor: function (e) {
            Bridge.Exception.prototype.$constructor.call(this, e);
    
    
        },
        constructor$1: function (e, line) {
            Bridge.Exception.prototype.$constructor.call(this, e);
    
            this.lineNumber = line;
    
        },
        toString: function () {
            return "RobotRaconteur Parse Error On Line " + this.lineNumber + ": " + this.getMessage();
        }
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurVarValue', {
        datatype: null,
        data: null,
        constructor: function (data, datatype) {
            this.datatype = datatype;
            this.data = data;
        }
    });
    
    Bridge.define('RobotRaconteur.ServiceDefinition', {
        name: null,
        structures: null,
        objects: null,
        options: null,
        imports: null,
        exceptions: null,
        version: "0",
        config: {
            init: function () {
                this.structures = new Bridge.Dictionary$2(String,RobotRaconteur.ServiceEntryDefinition)();
                this.objects = new Bridge.Dictionary$2(String,RobotRaconteur.ServiceEntryDefinition)();
                this.options = new Bridge.List$1(String)();
                this.imports = new Bridge.List$1(String)();
                this.exceptions = new Bridge.List$1(String)();
            }
        },
        toString: function () {
            var $t, $t1, $t2, $t3, $t4, $t5;
            var o = "service " + this.name + "\n\n";
    
            $t = Bridge.getEnumerator(this.imports);
            while ($t.moveNext()) {
                var $import = $t.getCurrent();
                o += "import " + $import + "\n";
    
            }
    
            $t1 = Bridge.getEnumerator(this.options);
            while ($t1.moveNext()) {
                var option = $t1.getCurrent();
                o += "option " + Bridge.String.replaceAll(option, "\"", "\"\"") + "\n";
            }
    
            $t2 = Bridge.getEnumerator(this.exceptions);
            while ($t2.moveNext()) {
                var exception = $t2.getCurrent();
                o += "exception " + exception + "\n";
            }
    
    
            if (this.version != null && !Bridge.referenceEquals(this.version, "") && !Bridge.referenceEquals(this.version, "0")) {
                var found = false;
    
                $t3 = Bridge.getEnumerator(this.options);
                while ($t3.moveNext()) {
                    var so = $t3.getCurrent();
                    var so1 = RobotRaconteur.Extensions.splitEmpty(so);
                    if (so1.length > 0 && Bridge.referenceEquals(so1[0], "version")) {
                        found = true;
                    }
                }
    
                if (!found) {
                    o += "option version " + this.version + "\n";
                }
            }
    
            o += "\n";
    
            $t4 = Bridge.getEnumerator(this.structures.getValues());
            while ($t4.moveNext()) {
                var d = $t4.getCurrent();
                o += d.toString() + "\n\n";
            }
    
            $t5 = Bridge.getEnumerator(this.objects.getValues());
            while ($t5.moveNext()) {
                var d1 = $t5.getCurrent();
                o += d1.toString() + "\n\n";
            }
    
            return o;
        },
        fromString: function (s) {
            var $t, $t1;
    
            var lines2 = new Bridge.List$1(String)();
    
            var lines3 = Bridge.String.split(s, ["\n", "\r", "\r\n"], null, 1);
            $t = Bridge.getEnumerator(lines3);
            while ($t.moveNext()) {
                var l = $t.getCurrent();
                var l2 = l.replace(new RegExp("^[ \\t]*#[^\\n]*$"), "");
                var l3 = l2.replace(new RegExp("^[ \\t]+|[ \\t]+$"), "").trim();
                lines2.add(l3);
            }
    
    
            var pos = 0;
            var lines = lines2.toArray();
    
            while (lines[pos].length === 0) {
                pos = (pos + 1) | 0;
    
            }
    
            var s1 = RobotRaconteur.Extensions.splitEmpty(lines[pos]);
            if (!Bridge.referenceEquals(s1[0], "service")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Service name must be specified at start of definition");
            }
            if (s1.length > 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", pos);
            }
            this.name = s1[1].trim();
    
            this.structures = new Bridge.Dictionary$2(String,RobotRaconteur.ServiceEntryDefinition)();
            this.objects = new Bridge.Dictionary$2(String,RobotRaconteur.ServiceEntryDefinition)();
    
            pos = (pos + 1) | 0;
    
            try {
                while (pos < lines.length) {
                    while (pos < lines.length && lines[pos].length === 0) {
                        pos = (pos + 1) | 0;
    
    
    
                    }
    
                    if (!(pos < lines.length)) {
                        break;
                    }
    
                    var stype = RobotRaconteur.Extensions.splitEmpty(lines[pos])[0].trim();
    
                    while (Bridge.referenceEquals(stype, "option") || Bridge.referenceEquals(stype, "import") || Bridge.referenceEquals(stype, "exception")) {
    
                        if (Bridge.referenceEquals(stype, "option")) {
                            var odata = RobotRaconteur.Extensions.splitEmpty$1(lines[pos], 2);
                            this.options.add(odata[1].trim());
    
                            if (Bridge.String.startsWith(RobotRaconteur.Extensions.splitEmpty(odata[1])[0], "version")) {
                                var odata2 = RobotRaconteur.Extensions.splitEmpty(lines[pos]);
                                var ver = odata2[2];
    
                                var nver = Bridge.Linq.Enumerable.from(Bridge.String.split(ver, [46].map(function(i) {{ return String.fromCharCode(i); }}))).select($_.RobotRaconteur.ServiceDefinition.f1).toArray();
                                var rrver = Bridge.Linq.Enumerable.from(Bridge.String.split(RobotRaconteur.RobotRaconteurNode.Version, [46].map(function(i) {{ return String.fromCharCode(i); }}))).select($_.RobotRaconteur.ServiceDefinition.f1).toArray();
    
                                var max = (nver.length >= rrver.length) ? nver.length : rrver.length;
                                for (var i = 0; i < max; i = (i + 1) | 0) {
                                    var n1 = (i < nver.length) ? nver[i] : 0;
                                    var rr1 = (i < rrver.length) ? rrver[i] : 0;
    
                                    if (n1 > rr1) {
                                        throw new Bridge.Exception("Service requires newer version of Robot Raconteur");
                                    }
                                    if (n1 < rr1) {
                                        break;
                                    }
                                }
    
                            }
    
                        }
    
                        if (Bridge.referenceEquals(stype, "import")) {
                            var s2 = RobotRaconteur.Extensions.splitEmpty(lines[pos]);
                            if (s2.length !== 2) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", pos);
                            }
                            this.imports.add(s2[1]);
                        }
    
                        if (Bridge.referenceEquals(stype, "exception")) {
                            var s21 = RobotRaconteur.Extensions.splitEmpty(lines[pos]);
                            if (s21.length !== 2) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", pos);
                            }
                            this.exceptions.add(s21[1]);
                        }
    
                        pos = (pos + 1) | 0;
    
                        while (pos < lines.length && lines[pos].length === 0) {
                            pos = (pos + 1) | 0;
                        }
    
                        if (!(pos < lines.length)) {
                            break;
                        }
                        stype = RobotRaconteur.Extensions.splitEmpty(lines[pos])[0].trim();
                    }
    
                    var l1 = "";
    
                    while (pos < lines.length && lines[pos].length === 0) {
                        pos = (pos + 1) | 0;
                    }
    
                    if (!(pos < lines.length)) {
                        break;
                    }
    
                    var initpos = pos;
    
                    var found = false;
                    while (pos < lines.length && !found) {
                        l1 += lines[pos] + "\n";
                        if (lines[pos].length >= 3) {
                            found = (Bridge.referenceEquals(lines[pos].substr(0, 3), "end"));
                        }
                        ;
                        pos = (pos + 1) | 0;
                    }
    
                    var se = new RobotRaconteur.ServiceEntryDefinition(this);
                    se.fromString$1(l1, initpos);
                    if (se.isStructure) {
                        this.structures.add(se.name, se);
                    }
                    else  {
                        this.objects.add(se.name, se);
                    }
    
                }
    
                $t1 = Bridge.getEnumerator(this.options);
                while ($t1.moveNext()) {
                    var so = $t1.getCurrent();
                    var so1 = RobotRaconteur.Extensions.splitEmpty(so);
    
                    if (so1.length > 0 && Bridge.referenceEquals(so1[0], "version")) {
                        if (so1.length !== 2) {
                            throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", pos);
                        }
                        this.version = so1[1];
                    }
                }
    
            }
            catch (e) {
                e = Bridge.Exception.create(e);
                if (Bridge.is(e, RobotRaconteur.RobotRaconteurParseException)) {
                    throw e;
                }
                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error near: " + lines[pos], pos);
            }
        },
        checkVersion: function (verstr) {
            var $t;
            if (verstr === void 0) { verstr = null; }
            if (verstr == null) {
                verstr = "0.8.0";
            }
    
            $t = Bridge.getEnumerator(this.options);
            while ($t.moveNext()) {
                var e = $t.getCurrent();
                var odata_1_split = RobotRaconteur.Extensions.splitEmpty(e);
                if (Bridge.referenceEquals(odata_1_split[0], "version")) {
                    if (odata_1_split.length > 2) {
                        throw new RobotRaconteur.ServiceException("Invalid version in Service Definition");
                    }
                    var ver = odata_1_split[1];
                    var nver = Bridge.Linq.Enumerable.from(Bridge.String.split(ver, [46].map(function(i) {{ return String.fromCharCode(i); }}))).select($_.RobotRaconteur.ServiceDefinition.f1).toArray();
                    var rrver = Bridge.Linq.Enumerable.from(Bridge.String.split(verstr, [46].map(function(i) {{ return String.fromCharCode(i); }}))).select($_.RobotRaconteur.ServiceDefinition.f1).toArray();
    
                    var max = Math.max(nver.length, rrver.length);
                    for (var i = 0; i < max; i = (i + 1) | 0) {
                        var n1 = (i < nver.length) ? nver[i] : 0;
                        var rr1 = (i < rrver.length) ? rrver[i] : 0;
                        if (n1 > rr1) {
                            throw new RobotRaconteur.ServiceException("Service requires newer version of Robot Raconteur");
                        }
                        if (n1 < rr1) {
                            break;
                        }
                    }
                }
            }
    
        }
    });
    
    Bridge.ns("RobotRaconteur.ServiceDefinition", $_)
    
    Bridge.apply($_.RobotRaconteur.ServiceDefinition, {
        f1: function (x) {
            return Bridge.Int32.parse(x);
        }
    });
    
    Bridge.define('RobotRaconteur.ServiceDefinitionUtil', {
        statics: {
            splitQualifiedName: function (name) {
                var pos = name.lastIndexOf(String.fromCharCode(46));
                if (pos < 0) {
                    return { item1: Bridge.cast(null, String), item2: name };
                }
                return { item1: name.substr(0, pos), item2: name.substr(((pos + 1) | 0), ((((name.length - pos) | 0) - 1) | 0)) };
            },
            splitParameterString: function (str) {
                var o = new Bridge.List$1(String)();
    
                var inbracket = false;
                var pos = 0;
                for (var i = 0; i < str.length; i = (i + 1) | 0) {
                    if (!inbracket && str.charCodeAt(i) === 91) {
                        inbracket = true;
                    }
                    if (inbracket && str.charCodeAt(i) === 93) {
                        inbracket = false;
                    }
    
                    if (!inbracket) {
                        if (str.charCodeAt(i) === 44) {
                            o.add(str.substr(pos, ((i - pos) | 0)));
                            pos = (i + 1) | 0;
                            if (pos > str.length) {
                                break;
                            }
                        }
                    }
                }
    
                if (pos < str.length) {
                    o.add(str.substr(pos));
                }
                return Bridge.Linq.Enumerable.from(o).select($_.RobotRaconteur.ServiceDefinitionUtil.f1).toArray();
            }
        }
    });
    
    Bridge.ns("RobotRaconteur.ServiceDefinitionUtil", $_)
    
    Bridge.apply($_.RobotRaconteur.ServiceDefinitionUtil, {
        f1: function (x) {
            return x.trim();
        }
    });
    
    Bridge.define('RobotRaconteur.ServiceEntryDefinition', {
        name: null,
        members: null,
        isStructure: true,
        implements: null,
        options: null,
        serviceDefinition: null,
        config: {
            init: function () {
                this.members = new Bridge.Dictionary$2(String,RobotRaconteur.MemberDefinition)();
                this.implements = new Bridge.List$1(String)();
                this.options = new Bridge.List$1(String)();
            }
        },
        constructor: function (def) {
            this.serviceDefinition = def;
        },
        toString: function () {
            var $t, $t1, $t2;
    
            var o = (this.isStructure ? "struct" : "object") + " " + this.name + "\n";
    
            $t = Bridge.getEnumerator(this.implements);
            while ($t.moveNext()) {
                var imp = $t.getCurrent();
                o += "    implements " + imp + "\n";
    
            }
    
            $t1 = Bridge.getEnumerator(this.options);
            while ($t1.moveNext()) {
                var option = $t1.getCurrent();
                o += "    option " + option + "\n";
            }
    
            $t2 = Bridge.getEnumerator(this.members.getValues());
            while ($t2.moveNext()) {
                var d = $t2.getCurrent();
                o += "    " + d.toString() + "\n";
            }
    
            o += "end " + (this.isStructure ? "struct" : "object") + "\n";
    
            if (this.isStructure) {
                o = Bridge.String.replaceAll(o, "property", "field");
    
            }
    
            return o;
    
        },
        fromString: function (s) {
            this.fromString$1(s, 0);
        },
        fromString$1: function (s, startline) {
            this.members = new Bridge.Dictionary$2(String,RobotRaconteur.MemberDefinition)();
            var c = [10];
            var l = Bridge.String.split(s, c.map(function(i) {{ return String.fromCharCode(i); }}));
    
            var def = RobotRaconteur.Extensions.splitEmpty(l[0]);
            if (def.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", startline);
            }
            var tt = def[0];
            var i = 0;
            try {
    
                if (!Bridge.referenceEquals(tt, "struct") && !Bridge.referenceEquals(tt, "object")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Unknown service entry type", startline);
                }
    
                this.isStructure = (Bridge.referenceEquals(tt, "struct"));
    
                this.name = def[1].trim();
                for (i = 1; i < l.length; i = (i + 1) | 0) {
                    if (l[i].length === 0) {
                        continue;
                    }
    
                    tt = RobotRaconteur.Extensions.splitEmpty(l[i])[0];
                    switch (tt) {
                        case "implements": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var s2 = RobotRaconteur.Extensions.splitEmpty(l[i]);
                            if (s2.length !== 2) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", ((startline + 1) | 0));
                            }
                            this.implements.add(s2[1]);
                            break;
                        case "option": 
                            var odata = RobotRaconteur.Extensions.splitEmpty$1(l[i], 2);
                            this.options.add(odata[1].trim());
                            break;
                        case "field": 
                            if (!this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Objects cannot contain fields.  Use properties instead.", ((startline + 1) | 0));
                            }
                            var p1f = new RobotRaconteur.PropertyDefinition(this);
                            p1f.fromString(l[i]);
                            this.members.add(p1f.name, p1f);
                            break;
                        case "property": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p1 = new RobotRaconteur.PropertyDefinition(this);
                            p1.fromString(l[i]);
                            this.members.add(p1.name, p1);
                            break;
                        case "function": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p2 = new RobotRaconteur.FunctionDefinition(this);
                            p2.fromString(l[i]);
                            this.members.add(p2.name, p2);
                            break;
                        case "event": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p3 = new RobotRaconteur.EventDefinition(this);
                            p3.fromString(l[i]);
                            this.members.add(p3.name, p3);
                            break;
                        case "objref": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p4 = new RobotRaconteur.ObjRefDefinition(this);
                            p4.fromString(l[i]);
                            this.members.add(p4.name, p4);
                            break;
                        case "pipe": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p5 = new RobotRaconteur.PipeDefinition(this);
                            p5.fromString(l[i]);
                            this.members.add(p5.name, p5);
                            break;
                        case "callback": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p6 = new RobotRaconteur.CallbackDefinition(this);
                            p6.fromString(l[i]);
                            this.members.add(p6.name, p6);
                            break;
                        case "wire": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p7 = new RobotRaconteur.WireDefinition(this);
                            p7.fromString(l[i]);
                            this.members.add(p7.name, p7);
                            break;
                        case "memory": 
                            if (this.isStructure) {
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Structures can only contain fields and options", ((startline + i) | 0));
                            }
                            var p8 = new RobotRaconteur.MemoryDefinition(this);
                            p8.fromString(l[i]);
                            this.members.add(p8.name, p8);
                            break;
                        case "end": 
                            if (this.isStructure) {
                                var r = new RegExp("^end\\s+struct$");
                                if (r.exec(l[i].trim()) == null) {
                                    throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", ((startline + i) | 0));
                                }
                            }
                            else  {
                                var r1 = new RegExp("^end\\s+object$");
                                if (r1.exec(l[i].trim()) == null) {
                                    throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error", ((startline + i) | 0));
                                }
                            }
                            return;
                        default: 
                            throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Unknown member type", ((startline + i) | 0));
                    }
    
                }
    
            }
            catch (exp) {
                exp = Bridge.Exception.create(exp);
                throw new RobotRaconteur.RobotRaconteurParseException("constructor$1", "Parse error: " + exp.getMessage() + " near: " + l[i], ((startline + i) | 0));
            }
    
        }
    });
    
    Bridge.define('RobotRaconteur.ServiceStub', {
        rr_objecttype: null,
        rR_ServicePath: null,
        rr_context: null,
        rr_async_mutex: null,
        config: {
            init: function () {
                this.rr_async_mutex = new RobotRaconteur.AsyncMutex();
            }
        },
        constructor: function (objecttype, path, c) {
            this.rr_context = c;
            this.rR_ServicePath = path;
            this.rr_objecttype = objecttype;
        },
        getRR_Context: function () {
            return this.rr_context;
        },
        rR_ReleaseContext: function () {
            this.rr_context = null;
        },
        rR_ProcessTransaction: function (m) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (this.getRR_Context() == null) {
                                        throw new RobotRaconteur.ServiceException("Reference has been released");
                                    }
                                    
                                    m.servicePath = this.rR_ServicePath;
                                    $task1 = this.getRR_Context().processTransaction(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $tcs.setResult($taskResult1);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        rR_FindObjRef: function (n) {
            if (this.getRR_Context() == null) {
                throw new RobotRaconteur.ServiceException("Reference has been released");
            }
            return this.getRR_Context().findObjRef(this.rR_ServicePath + "." + n);
        },
        rR_FindObjRef$1: function (n, i) {
            if (this.getRR_Context() == null) {
                throw new RobotRaconteur.ServiceException("Reference has been released");
            }
            return this.getRR_Context().findObjRef(this.rR_ServicePath + "." + n + "[" + Bridge.String.replaceAll(encodeURI(i.toString()), ".", "%2e") + "]");
        },
        rR_SendPipeMessage: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (this.getRR_Context() == null) {
                                        throw new RobotRaconteur.ServiceException("Reference has been released");
                                    }
                                    m.servicePath = this.rR_ServicePath;
                                    $task1 = this.getRR_Context().sendPipeMessage(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        rR_SendWireMessage: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (this.getRR_Context() == null) {
                                        throw new RobotRaconteur.ServiceException("Reference has been released");
                                    }
                                    m.servicePath = this.rR_ServicePath;
                                    $task1 = this.getRR_Context().sendWireMessage(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        }
    });
    
    Bridge.define('RobotRaconteur.Transport', {
        statics: {
            m_CurrentThreadTransportConnectionURL: null,
            m_CurrentThreadTransport: null,
            getCurrentThreadTransportConnectionURL: function () {
                return RobotRaconteur.Transport.m_CurrentThreadTransportConnectionURL;
            },
            getCurrentThreadTransport: function () {
                return RobotRaconteur.Transport.m_CurrentThreadTransport;
            }
        },
        transportID: 0,
        node: null,
        config: {
            events: {
                MessageReceivedEvent: null,
                TransportListeners: null
            }
        },
        constructor: function (node) {
            if (node === void 0) { node = null; }
    
            if (node != null) {
    
                this.node = node;
            }
            else  {
                this.node = RobotRaconteur.RobotRaconteurNode.gets();
            }
        },
        checkConnection: function (endpoint) {
    
        },
        sendMessage: function (m) {
            throw new Bridge.NotImplementedException();
        },
        messageReceived: function (m) {
            this.MessageReceivedEvent(m);
        },
        close: function () {
            this.fireTransportEventListener(RobotRaconteur.TransportListenerEventType.TransportClosed, null);
            return Bridge.Task.fromResult(0);
        },
        fireTransportEventListener: function (ev, parameter) {
            if (this.TransportListeners != null) {
                try {
                    this.TransportListeners(this, ev, parameter);
                }
                catch ($e1) {
                    $e1 = Bridge.Exception.create($e1);
                }
            }
        }
    });
    
    Bridge.define('RobotRaconteur.TransportListenerEventType', {
        statics: {
            TransportClosed: 1,
            TransportConnectionClosed: 2
        },
        $enum: true
    });
    
    Bridge.define('RobotRaconteur.TransportUtil', {
        statics: {
            parseConnectionUrl: function (url) {
                var $t;
                //TODO: fix default port for rr+tcp
                var rr1 = new RegExp("^([^:\\s]+)://((?:\\[[A-Fa-f0-9\\:]+(?:\\%\\w*)?\\])|(?:[^\\[\\]\\:/\\?\\s]+))(?::([^:/\\?\\s]+))?(?:/([^\\?\\s]*))?\\??([^\\s]*)$");
                var u1 = rr1.exec(url);
    
                if (u1 == null) {
                    throw new RobotRaconteur.ConnectionException("Invalid connection URL");
                }
    
                if (u1[0] == null || u1[1] == null) {
                    throw new RobotRaconteur.ConnectionException("Invalid connection URL");
                }
    
                var o = new RobotRaconteur.ParseConnectionUrlResult();
    
                o.scheme = u1[1];
                o.host = u1[2];
                if (!Bridge.referenceEquals(u1[3], "") && u1[3] != null) {
                    o.port = Bridge.Int32.parse(u1[3]);
                }
                else  {
                    o.port = -1;
                }
    
                if (Bridge.referenceEquals(o.scheme, "tcp")) {
                    if (!(Bridge.referenceEquals(u1[5], "") || u1[5] == null)) {
                        throw new RobotRaconteur.ConnectionException("Invalid connection URL");
                    }
    
                    if (Bridge.referenceEquals(u1[4], "") || u1[4] == null) {
                        throw new RobotRaconteur.ConnectionException("Invalid connection URL");
                    }
    
                    var ap = Bridge.String.split(u1[4], [47].map(function(i) {{ return String.fromCharCode(i); }}), null, 1);
                    if (ap.length !== 2) {
                        throw new RobotRaconteur.ConnectionException("Invalid connection URL");
                    }
                    var noden = ap[0];
                    if (Bridge.String.contains(noden,"{") || Bridge.String.contains(noden,"[")) {
                        o.nodeid = new RobotRaconteur.NodeID("constructor$1", noden);
                        o.nodename = "";
                    }
                    else  {
                        o.nodename = noden;
                        o.nodeid = RobotRaconteur.NodeID.getAny();
                    }
    
                    o.service = ap[1];
                    o.path = "/";
    
                    return o;
                }
    
                if (o.port === -1) {
                    if (Bridge.referenceEquals(o.scheme, "rr+tcp") || Bridge.referenceEquals(o.scheme, "rrs+tcp")) {
                        o.port = 48653;
                    }
                    if (Bridge.referenceEquals(o.scheme, "rr+ws") || Bridge.referenceEquals(o.scheme, "rrs+ws")) {
                        o.port = 80;
                    }
                    if (Bridge.referenceEquals(o.scheme, "rr+wss") || Bridge.referenceEquals(o.scheme, "rrs+wss")) {
                        o.port = 443;
                    }
                }
    
                o.path = u1[4];
    
                if (o.path == null || Bridge.referenceEquals(o.path, "")) {
                    o.path = "/";
                }
    
                var query_params = new Bridge.Dictionary$2(String,String)();
    
                if (Bridge.referenceEquals(u1[5], "") || u1[5] == null) {
                    throw new RobotRaconteur.ConnectionException("Invalid connection URL");
                }
    
                var q2 = new Bridge.List$1(String)();
                $t = Bridge.getEnumerator(Bridge.String.split(Bridge.String.trimStart(u1[5], [63]), [38].map(function(i) {{ return String.fromCharCode(i); }}), null, 1));
                while ($t.moveNext()) {
                    var e = $t.getCurrent();
                    var q3 = Bridge.String.split(e, [61].map(function(i) {{ return String.fromCharCode(i); }}));
                    if (q3.length !== 2) {
                        throw new RobotRaconteur.ConnectionException("Invalid Connection URL");
                    }
                    if (q3[0].length === 0 || q3[1].length === 0) {
                        throw new RobotRaconteur.ConnectionException("Invalid Connection URL");
                    }
                    query_params.add(q3[0], decodeURI(q3[1]));
                }
    
                if (!query_params.containsKey("service")) {
                    throw new RobotRaconteur.ConnectionException("Invalid Connection URL");
                }
    
                o.service = query_params.get("service");
                if (Bridge.String.isNullOrWhiteSpace(o.service)) {
                    throw new RobotRaconteur.ConnectionException("Invalid Connection URL");
                }
    
                if (query_params.containsKey("nodeid")) {
                    o.nodeid = new RobotRaconteur.NodeID("constructor$1", query_params.get("nodeid"));
                }
                else  {
                    o.nodeid = RobotRaconteur.NodeID.getAny();
                }
    
                if (query_params.containsKey("nodename")) {
                    o.nodename = query_params.get("nodename");
                    var rr = new RegExp("^[a-zA-Z][a-zA-Z0-9_\\.\\-]*$");
    
                    if (rr.exec(o.nodename) == null) {
                        throw new RobotRaconteur.ConnectionException("\"" + o.nodename + "\" is an invalid NodeName");
                    }
                }
                else  {
                    o.nodename = "";
                }
    
                return o;
            }
        }
    });
    
    Bridge.define('RobotRaconteur.TypeDefinition', {
        statics: {
            dataTypeFromString: function (d) {
                switch (d) {
                    case "void": 
                        return RobotRaconteur.DataTypes.void_t;
                    case "double": 
                        return RobotRaconteur.DataTypes.double_t;
                    case "single": 
                        return RobotRaconteur.DataTypes.single_t;
                    case "int8": 
                        return RobotRaconteur.DataTypes.int8_t;
                    case "uint8": 
                        return RobotRaconteur.DataTypes.uint8_t;
                    case "int16": 
                        return RobotRaconteur.DataTypes.int16_t;
                    case "uint16": 
                        return RobotRaconteur.DataTypes.uint16_t;
                    case "int32": 
                        return RobotRaconteur.DataTypes.int32_t;
                    case "uint32": 
                        return RobotRaconteur.DataTypes.uint32_t;
                    case "int64": 
                        return RobotRaconteur.DataTypes.int64_t;
                    case "uint64": 
                        return RobotRaconteur.DataTypes.uint64_t;
                    case "string": 
                        return RobotRaconteur.DataTypes.string_t;
                    case "structure": 
                        return RobotRaconteur.DataTypes.structure_t;
                    case "object": 
                        return RobotRaconteur.DataTypes.object_t;
                    case "varvalue": 
                        return RobotRaconteur.DataTypes.varvalue_t;
                    case "varobject": 
                        return RobotRaconteur.DataTypes.varobject_t;
                }
    
                return RobotRaconteur.DataTypes.structure_t;
            },
            stringFromDataType: function (d) {
                switch (d) {
                    case RobotRaconteur.DataTypes.void_t: 
                        return "void";
                    case RobotRaconteur.DataTypes.double_t: 
                        return "double";
                    case RobotRaconteur.DataTypes.single_t: 
                        return "single";
                    case RobotRaconteur.DataTypes.int8_t: 
                        return "int8";
                    case RobotRaconteur.DataTypes.uint8_t: 
                        return "uint8";
                    case RobotRaconteur.DataTypes.int16_t: 
                        return "int16";
                    case RobotRaconteur.DataTypes.uint16_t: 
                        return "uint16";
                    case RobotRaconteur.DataTypes.int32_t: 
                        return "int32";
                    case RobotRaconteur.DataTypes.uint32_t: 
                        return "uint32";
                    case RobotRaconteur.DataTypes.int64_t: 
                        return "int64";
                    case RobotRaconteur.DataTypes.uint64_t: 
                        return "uint64";
                    case RobotRaconteur.DataTypes.string_t: 
                        return "string";
                    case RobotRaconteur.DataTypes.structure_t: 
                        return "structure";
                    case RobotRaconteur.DataTypes.object_t: 
                        return "object";
                    case RobotRaconteur.DataTypes.varvalue_t: 
                        return "varvalue";
                    case RobotRaconteur.DataTypes.varobject_t: 
                        return "varobject";
                }
    
                return null;
                ;
            },
            op_Equality: function (a, b) {
                if (Bridge.referenceEquals(a, b)) {
                    return true;
                }
    
                if ((a == null) || (b == null)) {
                    return false;
                }
    
                if (!Bridge.referenceEquals(a.name, b.name)) {
                    return false;
                }
                if (!Bridge.referenceEquals(a.typeString, b.typeString)) {
                    return false;
                }
                if (a.isArray !== b.isArray) {
                    return false;
                }
                if (a.isMultiDimArray !== b.isMultiDimArray) {
                    return false;
                }
                if (a.isMap !== b.isMap) {
                    return false;
                }
                if (a.keyType !== b.keyType) {
                    return false;
                }
                if (a.isList !== b.isList) {
                    return false;
                }
                if (a.length !== b.length) {
                    return false;
                }
                if (a.varLength !== b.varLength) {
                    return false;
                }
                if (!(a.multiDimLength == null && b.multiDimLength == null)) {
                    if (a.multiDimLength == null || b.multiDimLength == null) {
                        return false;
                    }
                    if (!Bridge.Linq.Enumerable.from(a.multiDimLength).sequenceEqual(b.multiDimLength)) {
                        return false;
                    }
                }
                if (a.importedType !== b.importedType) {
                    return false;
                }
                return true;
            },
            op_Inequality: function (a, b) {
                return !(RobotRaconteur.TypeDefinition.op_Equality(a, b));
            }
        },
        name: null,
        type: 0,
        typeString: null,
        isArray: false,
        isMultiDimArray: false,
        isMap: false,
        keyType: 0,
        isList: false,
        length: 0,
        varLength: false,
        multiDimLength: null,
        importedType: false,
        member: null,
        constructor: function () {
    
        },
        constructor$1: function (copyFrom) {
            this.name = copyFrom.name;
            this.type = copyFrom.type;
            this.typeString = copyFrom.typeString;
            this.isArray = copyFrom.isArray;
            this.isMultiDimArray = copyFrom.isMultiDimArray;
            this.isMap = copyFrom.isMap;
            this.keyType = copyFrom.keyType;
            this.isList = copyFrom.isList;
            this.length = copyFrom.length;
            this.varLength = copyFrom.varLength;
            this.multiDimLength = copyFrom.multiDimLength;
            this.member = copyFrom.member;
    
        },
        toString: function () {
    
            var o = (this.type >= RobotRaconteur.DataTypes.structure_t && (!(this.type === RobotRaconteur.DataTypes.varvalue_t) && !(this.type === RobotRaconteur.DataTypes.varobject_t))) ? this.typeString : RobotRaconteur.TypeDefinition.stringFromDataType(this.type);
    
    
    
    
            if (this.isArray) {
                if (!this.isMultiDimArray) {
                    o += "[" + (this.length !== 0 ? (this.length + (this.varLength ? "-" : "")) : "") + "]";
                }
                else  {
                    if (this.varLength) {
                        o += "[*]";
                    }
                    else  {
                        o += "[" + Bridge.toArray(Bridge.Linq.Enumerable.from(this.multiDimLength).select($_.RobotRaconteur.TypeDefinition.f1)).join(",") + "]";
                    }
                }
            }
    
            if (this.isMap) {
                o += "{" + RobotRaconteur.TypeDefinition.stringFromDataType(this.keyType) + "}";
    
            }
    
            if (this.isList) {
                o += "{list}";
            }
    
            o += " " + this.name;
            return o;
    
        },
        fromString: function (s) {
            s = s.trim();
    
            var sres = RobotRaconteur.Extensions.splitEmpty(s);
            var ttype = sres[0];
            this.name = (sres.length > 1) ? sres[1].trim() : "";
    
            if (sres.length > 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
    
            var stype;
    
            if (Bridge.String.contains(ttype,"{") || Bridge.String.contains(ttype,"}")) {
                var sres2 = Bridge.String.split(ttype, [123].map(function(i) {{ return String.fromCharCode(i); }}));
    
                if (sres2.length !== 2) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
    
                ttype = sres2[0].trim();
    
    
                var s2 = sres2[1].trim();
                if (!Bridge.String.endsWith(s2, "}")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
                s2 = s2.substr(0, ((s2.length - 1) | 0));
    
                if (Bridge.String.contains(s2,"{")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Only one dimension of indexing allowed");
                }
                if (Bridge.String.contains(s2,"}") || Bridge.String.contains(s2,"[") || Bridge.String.contains(s2,"]")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
    
                if (Bridge.referenceEquals(s2, "list")) {
                    this.isList = true;
                }
                else  {
                    this.isMap = true;
                    this.keyType = RobotRaconteur.TypeDefinition.dataTypeFromString(s2);
    
                    if (this.keyType !== RobotRaconteur.DataTypes.int32_t && this.keyType !== RobotRaconteur.DataTypes.string_t) {
                        throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Only int32 and string types can be used as indexers");
                    }
                }
    
            }
    
    
            if (Bridge.String.contains(ttype,"[") || Bridge.String.contains(ttype,"]")) {
                this.isArray = true;
    
                var sres21 = Bridge.String.split(ttype, [91].map(function(i) {{ return String.fromCharCode(i); }}));
                if (sres21.length !== 2) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
    
                stype = sres21[0].trim();
    
                var s21 = sres21[1];
                if (!Bridge.String.endsWith(s21, "]")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
                s21 = s21.substr(0, ((s21.length - 1) | 0));
    
                if (Bridge.String.contains(s21,"[")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Use [*] syntax for multidimensional arrays");
                }
                if (Bridge.String.contains(s21,"]") || Bridge.String.contains(s21,"{") || Bridge.String.contains(s21,"}")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
    
                if (s21.length === 0) {
                    this.length = 0;
    
                    this.varLength = true;
    
                }
                else  {
                    if (Bridge.referenceEquals(s21, "*")) {
                        this.isMultiDimArray = true;
                        this.varLength = true;
                        this.length = 0;
                    }
                    else  {
                        if (Bridge.String.contains(s21,",")) {
                            var l = null;
                            try {
                                l = Bridge.Linq.Enumerable.from(Bridge.String.split(s21, [44].map(function(i) {{ return String.fromCharCode(i); }}))).select($_.RobotRaconteur.TypeDefinition.f2).select($_.RobotRaconteur.TypeDefinition.f3).toArray();
                            }
                            catch ($e1) {
                                $e1 = Bridge.Exception.create($e1);
                                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Could not parse data type: " + s);
                            }
    
                            this.varLength = false;
                            this.isMultiDimArray = true;
                            this.length = 0;
                            this.multiDimLength = l;
    
                        }
                        else  {
                            if (Bridge.String.endsWith(s21, "-")) {
                                this.varLength = true;
                                s21 = s21.substr(0, ((s21.length - 1) | 0));
                            }
    
                            this.length = Bridge.UInt32.parse(s21);
                        }
                    }
    
                }
            }
            else  {
                stype = ttype;
            }
    
            if (Bridge.String.contains(stype,"[") || Bridge.String.contains(stype,"]") || Bridge.String.contains(stype,"{") || Bridge.String.contains(stype,"}")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            if (Bridge.String.contains(this.name,"[") || Bridge.String.contains(this.name,"]") || Bridge.String.contains(this.name,"{") || Bridge.String.contains(this.name,"}")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
    
    
            var t = RobotRaconteur.TypeDefinition.dataTypeFromString(stype);
            if (t === RobotRaconteur.DataTypes.structure_t) {
                this.type = RobotRaconteur.DataTypes.structure_t;
                this.typeString = stype;
                if (Bridge.String.contains(stype,".")) {
                    this.importedType = true;
                }
    
            }
            else  {
                this.type = t;
                this.typeString = "";
            }
    
        },
        equals: function (o) {
            if (o == null) {
                return false;
            }
            return RobotRaconteur.TypeDefinition.op_Equality(this, Bridge.cast(o, RobotRaconteur.TypeDefinition));
        }
    });
    
    Bridge.ns("RobotRaconteur.TypeDefinition", $_)
    
    Bridge.apply($_.RobotRaconteur.TypeDefinition, {
        f1: function (x) {
            return x.toString();
        },
        f2: function (x) {
            return x.trim();
        },
        f3: function (x) {
            return Bridge.UInt32.parse(x);
        }
    });
    
    Bridge.define('RobotRaconteur.AuthenticationException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.AuthenticationError, "RobotRaconteur.AuthenticationError", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.CallbackDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        returnType: null,
        parameters: null,
        config: {
            init: function () {
                this.parameters = new Bridge.List$1(RobotRaconteur.TypeDefinition)();
            }
        },
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
    
    
            var pa = Bridge.Array.init(this.parameters.getCount(), null);
            for (var i = 0; i < pa.length; i = (i + 1) | 0) {
                pa[i] = this.parameters.getItem(i).toString();
            }
    
            return "callback " + this.returnType.toString() + " " + this.name + " (" + pa.join(", ") + ")";
    
    
    
        },
        fromString: function (s) {
            var sp = RobotRaconteur.Extensions.splitEmpty$1(s.trim(), 2);
    
            if (!Bridge.referenceEquals(sp[0].trim(), "callback")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            var sp2 = RobotRaconteur.Extensions.splitEmpty$1(sp[1], 2);
    
            this.returnType = new RobotRaconteur.TypeDefinition("constructor");
            this.returnType.member = this;
            this.returnType.fromString(sp2[0]);
    
            var sp3 = Bridge.String.split(sp2[1], [40].map(function(i) {{ return String.fromCharCode(i); }}));
            if (sp3.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            if (RobotRaconteur.Extensions.splitEmpty(sp3[0]).length !== 1) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            this.name = sp3[0].trim();
    
            var sp3_1 = sp3[1].trim();
            if (!Bridge.String.endsWith(sp3_1, ")")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
            sp3_1 = sp3_1.substr(0, ((sp3_1.length - 1) | 0));
            if (Bridge.String.contains(sp3_1,")")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            var sp4 = RobotRaconteur.ServiceDefinitionUtil.splitParameterString(sp3_1);
    
    
            var pcount = sp4.length;
            if (pcount === 1 && sp4[0].trim().length === 0) {
                pcount = 0;
            }
    
            this.parameters = new Bridge.List$1(RobotRaconteur.TypeDefinition)(pcount);
            for (var i = 0; i < pcount; i = (i + 1) | 0) {
                var d = new RobotRaconteur.TypeDefinition("constructor");
                d.member = this;
                d.fromString(sp4[i]);
                if (Bridge.String.isNullOrWhiteSpace(d.name)) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
                this.parameters.add(d);
            }
        }
    });
    
    Bridge.define('RobotRaconteur.ClientContext', {
        inherits: [RobotRaconteur.Endpoint],
        statics: {
            memberIter: function (T, d) {
                return Bridge.Linq.Enumerable.from(d.members).where(function (x) {
                    return Bridge.is(x.value, T);
                }).select(function (x) {
                    return Bridge.as(x.value, T);
                });
            }
        },
        stubs: null,
        m_Connected: false,
        m_ServiceName: null,
        rec_wait: null,
        processTransaction_checkconnection_current: null,
        transaction_number: 0,
        connecturl: null,
        root_object_type: null,
        pulled_service_defs: null,
        m_UserAuthenticated: false,
        m_AuthenticatedUsername: null,
        config: {
            init: function () {
                this.rec_wait = new Bridge.Dictionary$2(Bridge.UInt32,Bridge.TaskCompletionSource)();
                this.lastMessageSentTime = Bridge.Date.utcNow() || new Date(-864e13);
                this.pulled_service_defs = new Bridge.Dictionary$2(String,Object)();
            }
        },
        constructor: function (node) {
            RobotRaconteur.Endpoint.prototype.$constructor.call(this, node);
    
            this.stubs = new Bridge.Dictionary$2(String,RobotRaconteur.ServiceStub)();
    
        },
        getConnected: function () {
            return this.m_Connected;
        },
        getServiceName: function () {
            return this.m_ServiceName;
        },
        getUserAuthenticated: function () {
            return this.m_UserAuthenticated;
        },
        getAuthenticatedUsername: function () {
            return this.m_AuthenticatedUsername;
        },
        findObjRef: function (path) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                e, 
                ret, 
                objecttype, 
                objectdef, 
                stub, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    
                                    if (Bridge.Array.contains(this.stubs.getKeys(), path)) {
                                        $tcs.setResult(this.stubs.get(path));
                                        return;
                                    
                                    }
                                    
                                    
                                    e = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ObjectTypeName, "");
                                    //MessageElement m = e.AddElement("ObjectPath", path);
                                    e.servicePath = path;
                                    $task1 = this.processTransaction(e);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    ret = $taskResult1;
                                    objecttype = ret.findElement("objecttype").castData(String);
                                    
                                    if (Bridge.referenceEquals(objecttype, "")) {
                                        throw new RobotRaconteur.ObjectNotFoundException("Object type was not returned.");
                                    }
                                    
                                    objectdef = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(objecttype).item1;
                                    
                                    //var stub = ServiceDef.CreateStub(objecttype, path, this);
                                    stub = this.initStub(objecttype, path);
                                    
                                    
                                    if (!Bridge.Array.contains(this.stubs.getKeys(), path)) {
                                        this.stubs.set(path, stub);
                                        $tcs.setResult(stub);
                                        return;
                                    }
                                    else  {
                                        $tcs.setResult(this.stubs.get(path));
                                        return;
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        processTransaction: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                transaction_start, 
                transaction_timeout, 
                rec_source, 
                t_id, 
                rec_message, 
                r, 
                $async_e, 
                e, 
                e2, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4], $step);
                            switch ($step) {
                                case 0: {
                                    
                                    transaction_start = Bridge.Date.utcNow();
                                    transaction_timeout = this.node.transactionTimeout;
                                    
                                    rec_source = new Bridge.TaskCompletionSource();
                                    
                                    this.transaction_number = (this.transaction_number + 1) >>> 0;
                                    m.transactionID = this.transaction_number;
                                    t_id = this.transaction_number;
                                    this.rec_wait.add(t_id, rec_source);
                                    if (this.processTransaction_checkconnection_current == null) {
                                        this.processTransaction_checkconnection_current = this.processTransaction_checkconnection();
                                    }
                                    
                                    
                                    rec_message = null;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    r = Bridge.fn.bind(this, function () {
                                        var $step = 0,
                                            $task1, 
                                            $task2, 
                                            $taskResult2, 
                                            $jumpFromFinally, 
                                            $tcs = new Bridge.TaskCompletionSource(), 
                                            $returnValue, 
                                            $async_e, 
                                            $asyncBody = Bridge.fn.bind(this, function () {
                                                try {
                                                    for (;;) {
                                                        $step = Bridge.Array.min([0,1,2], $step);
                                                        switch ($step) {
                                                            case 0: {
                                                                $task1 = this.sendMessage$1(m);
                                                                $step = 1;
                                                                $task1.continueWith($asyncBody);
                                                                return;
                                                            }
                                                            case 1: {
                                                                $task1.getAwaitedResult();
                                                                $task2 = rec_source.task;
                                                                $step = 2;
                                                                $task2.continueWith($asyncBody);
                                                                return;
                                                            }
                                                            case 2: {
                                                                $taskResult2 = $task2.getAwaitedResult();
                                                                rec_message = $taskResult2;
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
                                                    $async_e = Bridge.Exception.create($async_e1);
                                                    $tcs.setException($async_e);
                                                }
                                            }, arguments);
                                    
                                        $asyncBody();
                                        return $tcs.task;
                                    });
                                    
                                    $task1 = RobotRaconteur.Extensions.awaitWithTimeout(r(), ((this.node.transactionTimeout) | 0));
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $task1.getAwaitedResult();
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    this.rec_wait.remove(t_id);
                                    
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    
                                    if (rec_message.transactionID !== t_id) {
                                        throw new Bridge.Exception("This should be impossible!");
                                    }
                                    
                                    if (rec_message.error !== RobotRaconteur.MessageErrorType.None) {
                                        e = RobotRaconteur.RobotRaconteurExceptionUtil.messageEntryToException(rec_message);
                                        e2 = Bridge.as(e, RobotRaconteur.RobotRaconteurRemoteException);
                                        /* if (e2 != null)
                                                    {
                                                        //TODO: improve exception type handling
                                                        Exception e3 = ServiceDef.GetException(e2.Error, e2.Message);
                                                        if (e3 != null) e = e3;
                                                    }*/
                                        throw e;
                                    }
                                    
                                    $tcs.setResult(rec_message);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        if ($step >= 1 && $step <= 2){
    
                            $step = 3;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        processTransaction_checkconnection: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $e1, 
                rec_wait2, 
                $t, 
                r, 
                $t1, 
                t, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,5,6], $step);
                            switch ($step) {
                                case 0: {
                                    if ( true ) {
                                        $step = 1;
                                        continue;
                                    } 
                                    $step = 6;
                                    continue;
                                }
                                case 1: {
                                    
                                    if (this.rec_wait.getCount() < 0) {
                                        this.processTransaction_checkconnection_current = null;
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    
                                    
                                    try {
                                        this.node.checkConnection(this.getLocalEndpoint());
                                    }
                                    catch ($e1) {
                                        $e1 = Bridge.Exception.create($e1);
                                        rec_wait2 = new Bridge.List$1(Bridge.TaskCompletionSource)();
                                    
                                        $t = Bridge.getEnumerator(this.rec_wait.getValues());
                                        while ($t.moveNext()) {
                                            r = $t.getCurrent();
                                            rec_wait2.add(r);
                                        }
                                    
                                    
                                        $t1 = Bridge.getEnumerator(rec_wait2);
                                        while ($t1.moveNext()) {
                                            t = $t1.getCurrent();
                                            t.trySetException(new RobotRaconteur.ConnectionException("Connection closed"));
                                        }
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    $task1 = Bridge.Task.delay(500);
                                    $step = 3;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $task1.getAwaitedResult();
                                    $step = 5;
                                    continue;
                                }
    
                                case 5: {
                                    
                                    $step = 0;
                                    continue;
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 2 && $step <= 3 ){
                            $step = 4;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        sendMessage$1: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                mm, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    //m.ServiceName = ServiceName;
                                    
                                    if (!this.getConnected()) {
                                        throw new RobotRaconteur.ConnectionException("Client has been disconnected");
                                    }
                                    
                                    mm = new RobotRaconteur.Message();
                                    mm.header = new RobotRaconteur.MessageHeader();
                                    mm.entries.add(m);
                                    
                                    this.lastMessageSentTime = Bridge.Date.utcNow();
                                    
                                    $task1 = this.sendMessage(mm);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        messageReceived: function (m) {
            var $t;
            this.lastMessageReceivedTime = Bridge.Date.utcNow();
            if (m.entries.getCount() >= 1) {
                if (m.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.ConnectClientRet) {
                    this.m_RemoteEndpoint = m.header.senderEndpoint;
                    this.m_RemoteNodeID = m.header.senderNodeID;
                    this.m_RemoteNodeName = m.header.senderNodeName;
                }
    
                if (m.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.EndpointCheckCapability) {
                    //CheckEndpointCapabilityMessage(m);
                    return;
                }
            }
    
            $t = Bridge.getEnumerator(m.entries);
            while ($t.moveNext()) {
                var mm = $t.getCurrent();
                if (mm.error === RobotRaconteur.MessageErrorType.InvalidEndpoint) {
                    RobotRaconteur.Extensions.ignoreResult(this.close());
                    return;
                }
                this.messageEntryReceived(mm);
            }
        },
        messageEntryReceived: function (m) {
            var $t;
            //lock (rec_loc)
            {
                if (m.entryType === RobotRaconteur.MessageEntryType.EventReq) {
                    var a = null;
    
                    if (Bridge.Array.contains(this.stubs.getKeys(), m.servicePath)) {
                        var stub;
                        stub = this.stubs.get(m.servicePath);
                        var e = Bridge.as(stub[m.memberName], RobotRaconteur.Evt);
                        a = (function () {
                            e.fire(m);
                        });
                    }
                    if (a != null) {
                        RobotRaconteur.Extensions.ignoreResult(Bridge.Task.run(a));
                    }
                }
                else  {
                    if (m.entryType === RobotRaconteur.MessageEntryType.PropertyGetRes || m.entryType === RobotRaconteur.MessageEntryType.PropertySetRes || m.entryType === RobotRaconteur.MessageEntryType.FunctionCallRes || m.entryType === RobotRaconteur.MessageEntryType.ObjectTypeNameRet || m.entryType === RobotRaconteur.MessageEntryType.ConnectClientRet || m.entryType === RobotRaconteur.MessageEntryType.DisconnectClientRet || m.entryType === RobotRaconteur.MessageEntryType.GetServiceDescRet || (m.entryType >= RobotRaconteur.MessageEntryType.PipeConnectReq && m.entryType <= RobotRaconteur.MessageEntryType.PipeDisconnectRet) || m.entryType === RobotRaconteur.MessageEntryType.ClientSessionOpRet || m.entryType === RobotRaconteur.MessageEntryType.WireConnectRet || m.entryType === RobotRaconteur.MessageEntryType.WireDisconnectRet || m.entryType === RobotRaconteur.MessageEntryType.MemoryReadRet || m.entryType === RobotRaconteur.MessageEntryType.MemoryWriteRet || m.entryType === RobotRaconteur.MessageEntryType.MemoryGetParamRet) {
                        // Console.WriteLine("Got " + m.TransactionID + " " + m.EntryType + " " + m.MemberName);
                        var r = null;
    
                        var t_id = m.transactionID;
                        if (this.rec_wait.containsKey(t_id)) {
                            r = this.rec_wait.get(t_id);
                        }
    
    
                        if (r != null) {
                            r.trySetResult(m);
                        }
    
    
                    }
                    else  {
                        if (m.entryType === RobotRaconteur.MessageEntryType.ServiceClosed) {
                            RobotRaconteur.Extensions.ignoreResult(this.close());
                        }
                        else  {
                            if (m.entryType === RobotRaconteur.MessageEntryType.ClientKeepAliveRet) {
                            }
                            else  {
                                if (m.entryType === RobotRaconteur.MessageEntryType.PipePacket || m.entryType === RobotRaconteur.MessageEntryType.PipeClosed || m.entryType === RobotRaconteur.MessageEntryType.PipePacketRet) {
                                    var a1 = null;
    
                                    if (Bridge.Array.contains(this.stubs.getKeys(), m.servicePath)) {
                                        var stub1;
                                        stub1 = this.stubs.get(m.servicePath);
                                        a1 = (function () {
                                            Bridge.cast(stub1[m.memberName], RobotRaconteur.Pipe).pipePacketReceived(m);
                                        });
    
                                        //stub.DispatchEvent(m);
                                    }
                                    if (a1 != null) {
                                        RobotRaconteur.Extensions.ignoreResult(Bridge.Task.run(a1));
                                    }
                                }
                                else  {
                                    if (m.entryType === RobotRaconteur.MessageEntryType.WirePacket || m.entryType === RobotRaconteur.MessageEntryType.WireClosed) {
                                        var a2 = null;
    
                                        if (Bridge.Array.contains(this.stubs.getKeys(), m.servicePath)) {
                                            var stub2;
                                            stub2 = this.stubs.get(m.servicePath);
                                            //a = delegate() { stub.RR_DispatchWireMessage(m); };
    
                                            //stub.DispatchEvent(m);
                                        }
    
                                        if (a2 != null) {
                                            RobotRaconteur.Extensions.ignoreResult(Bridge.Task.run(a2));
                                        }
                                    }
                                    else  {
                                        if (m.entryType === RobotRaconteur.MessageEntryType.ServicePathReleasedReq) {
                                            var path = m.servicePath;
                                            var objkeys = Bridge.Linq.Enumerable.from(this.stubs.getKeys()).where(function (x) {
                                                return (x.length >= path.length) && (Bridge.referenceEquals(x.substr(0, path.length), path));
                                            }).toArray();
                                            //if (objkeys.Count() == 0) throw new ServiceException("Unknown service path");
    
                                            $t = Bridge.getEnumerator(objkeys);
                                            while ($t.moveNext()) {
                                                var path1 = $t.getCurrent();
                                                try {
                                                    this.stubs.get(path1).rR_ReleaseContext();
    
                                                    this.stubs.remove(path1);
                                                }
                                                catch ($e1) {
                                                    $e1 = Bridge.Exception.create($e1);
                                                }
                                            }
    
                                        }
                                        else  {
                                            if (m.entryType === RobotRaconteur.MessageEntryType.CallbackCallReq) {
                                                RobotRaconteur.Extensions.ignoreResult(this.processCallbackCall(m));
                                            }
                                            else  {
                                                throw new RobotRaconteur.ServiceException("Unknown service command");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
    
            }
        },
        processCallbackCall: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                ret, 
                stub, 
                s, 
                objectdef, 
                typedef, 
                param, 
                $t, 
                t, 
                cb, 
                ret1, 
                mr, 
                e, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    ret = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.CallbackCallRet, m.memberName);
                                    ret.servicePath = m.servicePath;
                                    ret.transactionID = m.transactionID;
                                    try {
                                        if (!this.stubs.containsKey(m.servicePath)) {
                                            throw new RobotRaconteur.ServiceException("Stub not found");
                                        }
                                    
                                        stub = this.stubs.get(m.servicePath);
                                    
                                        s = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(stub.rr_objecttype);
                                        objectdef = this.getPulledServiceType(s.item1).item2.objects.get(s.item2);
                                        typedef = Bridge.as(objectdef.members.get(m.memberName), RobotRaconteur.CallbackDefinition);
                                        if (typedef == null) {
                                            throw new RobotRaconteur.MemberNotFoundException("Member not found");
                                        }
                                        param = new Bridge.List$1(Object)();
                                        $t = Bridge.getEnumerator(typedef.parameters);
                                        while ($t.moveNext()) {
                                            t = $t.getCurrent();
                                            param.add(this.unpackMessageElement(m.findElement(t.name), t, stub));
                                        }
                                        cb = stub[typedef.name];
                                    
                                        if (typedef.returnType.type === RobotRaconteur.DataTypes.void_t) {
                                            (cb)(param.toArray());
                                            ret.addElement(this.packMessageElement(0, "int32 return", stub));
                                        }
                                        else  {
                                            ret1 = (cb)(param.toArray());
                                            mr = this.packMessageElement(ret1, typedef.returnType, stub);
                                            mr.elementName = "return";
                                            ret.addElement(mr);
                                        }
                                    }
                                    catch (e) {
                                        e = Bridge.Exception.create(e);
                                        ret = new RobotRaconteur.MessageEntry("constructor$1", m.entryType + 1, m.memberName);
                                        ret.servicePath = m.servicePath;
                                        ret.transactionID = m.transactionID;
                                        RobotRaconteur.RobotRaconteurExceptionUtil.exceptionToMessageEntry(e, ret);
                                    }
                                    
                                    $task1 = this.sendMessage$1(ret);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        sendPipeMessage: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.sendMessage$1(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        sendWireMessage: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    $task1 = this.sendMessage$1(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        connectService: function (c, url, username, credentials) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $taskResult3, 
                $task4, 
                $taskResult4, 
                $task5, 
                $taskResult5, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                u, 
                d, 
                $t, 
                d2, 
                e, 
                ret, 
                type, 
                e2, 
                stub, 
                noop, 
                e1, 
                $e1, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4,5,6,7,8,9,10], $step);
                            switch ($step) {
                                case 0: {
                                    if (username === void 0) { username = null; }
                                    if (credentials === void 0) { credentials = null; }
                                    this.connecturl = url;
                                    u = RobotRaconteur.TransportUtil.parseConnectionUrl(url);
                                    
                                    this.m_RemoteNodeID = u.nodeid;
                                    
                                    this.m_RemoteNodeName = u.nodename;
                                    this.m_ServiceName = u.service;
                                    
                                    
                                    if (!c.canConnectService(url)) {
                                        throw new RobotRaconteur.ServiceException("Invalid transport");
                                    }
                                    
                                    $task1 = c.createTransportConnection(url, this);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    this.transportConnection = $taskResult1;
                                    this.m_Connected = true;
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    
                                    this.m_RemoteEndpoint = 0;
                                    
                                    $task2 = this.pullServiceDefinitionAndImports(null);
                                    $step = 3;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    d = $taskResult2;
                                    
                                    $t = Bridge.getEnumerator(d);
                                    while ($t.moveNext()) {
                                        d2 = $t.getCurrent();
                                        if (!this.pulled_service_defs.containsKey(d2.item2.name)) {
                                            this.pulled_service_defs.add(d2.item2.name, d2);
                                        }
                                    }
                                    
                                    e = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ObjectTypeName, "");
                                    
                                    e.servicePath = this.getServiceName();
                                    
                                    $task3 = this.processTransaction(e);
                                    $step = 4;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 4: {
                                    $taskResult3 = $task3.getAwaitedResult();
                                    ret = $taskResult3;
                                    if (ret.error !== RobotRaconteur.MessageErrorType.None) {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    type = ret.findElement("objecttype").castData(String);
                                    if (Bridge.referenceEquals(type, "")) {
                                        $tcs.setResult(new RobotRaconteur.ObjectNotFoundException("Could not find object type"));
                                        return;
                                    }
                                    ;
                                    this.root_object_type = type;
                                    
                                    e2 = new RobotRaconteur.MessageEntry("constructor");
                                    e2.servicePath = this.getServiceName();
                                    e2.memberName = "registerclient";
                                    e2.entryType = RobotRaconteur.MessageEntryType.ConnectClient;
                                    $task4 = this.processTransaction(e2);
                                    $step = 5;
                                    $task4.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $taskResult4 = $task4.getAwaitedResult();
                                    
                                    if (username != null) {
                                        $step = 6;
                                        continue;
                                    } 
                                    $step = 8;
                                    continue;
                                }
                                case 6: {
                                    $task5 = this.authenticateUser(username, credentials);
                                    $step = 7;
                                    $task5.continueWith($asyncBody);
                                    return;
                                }
                                case 7: {
                                    $taskResult5 = $task5.getAwaitedResult();
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    
                                    stub = this.initStub(type, this.getServiceName());
                                    this.stubs.add(this.getServiceName(), stub);
                                    
                                    noop = this.doHeartbeat();
                                    
                                    $tcs.setResult(stub);
                                    return;
                                }
                                case 9: {
                                    
                                    this.m_Connected = false;
                                    try {
                                        this.transportConnection.close();
                                    }
                                    catch ($e1) {
                                        $e1 = Bridge.Exception.create($e1);
                                    }
                                    throw e1;
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 2 && $step <= 8 ){
                            e1 = $async_e;
                            $step = 9;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        pullServiceDefinition: function (servicetype) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                e3, 
                res, 
                def, 
                d, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    e3 = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.GetServiceDesc, "");
                                    e3.servicePath = this.m_ServiceName;
                                    if (servicetype != null) {
                                        e3.addElement$1("ServiceType", servicetype);
                                    }
                                    
                                    $task1 = this.processTransaction(e3);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    res = $taskResult1;
                                    
                                    def = res.findElement("servicedef").castData(String);
                                    if (Bridge.referenceEquals(def, "")) {
                                        throw new RobotRaconteur.ServiceNotFoundException("Could not find service definition");
                                    }
                                    d = new RobotRaconteur.ServiceDefinition();
                                    d.fromString(def);
                                    
                                    if (servicetype == null) {
                                    
                                        if (Bridge.Linq.Enumerable.from(res.elements).count($_.RobotRaconteur.ClientContext.f1) !== 0) {
                                            //TODO: fix attributes
                                            //Attributes = (Dictionary<string, object>)node.UnpackMapType<string, object>(res.FindElement("attributes").CastData<MessageElementMap<string>>(), null);                    
                                        }
                                    }
                                    
                                    $tcs.setResult({ item1: def, item2: d });
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        pullServiceDefinitionAndImports: function (servicetype) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                defs, 
                root, 
                $t, 
                i, 
                defs2, 
                $t1, 
                d, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4,5,6,7], $step);
                            switch ($step) {
                                case 0: {
                                    defs = new Bridge.List$1(Object)();
                                    $task1 = this.pullServiceDefinition(servicetype);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    root = $taskResult1;
                                    defs.add(root);
                                    if (root.item2.imports.getCount() === 0) {
                                        $tcs.setResult(defs.toArray());
                                        return;
                                    }
                                    
                                    $t = Bridge.getEnumerator(root.item2.imports);
                                    $step = 2;
                                    continue;
                                }
                                case 2: {
                                    if ($t.moveNext()) {
                                        i = $t.getCurrent();
                                        $step = 3;
                                        continue;
                                    }
                                    $step = 7;
                                    continue;
                                }
                                case 3: {
                                    if (Bridge.Linq.Enumerable.from(defs).count(function (x) {
                                        return Bridge.referenceEquals(x.item2.name, i);
                                    }) === 0) {
                                        $step = 4;
                                        continue;
                                    } 
                                    $step = 6;
                                    continue;
                                }
                                case 4: {
                                    $task2 = this.pullServiceDefinitionAndImports(i);
                                    $step = 5;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    defs2 = $taskResult2;
                                    $t1 = Bridge.getEnumerator(defs2);
                                    while ($t1.moveNext()) {
                                        (function () {
                                            d = $t1.getCurrent();
                                            if (Bridge.Linq.Enumerable.from(defs).count(function (x) {
                                                return Bridge.referenceEquals(x.item2.name, d.item2.name);
                                            }) === 0) {
                                                defs.add(d);
                                            }
                                        }).call(this);
                                    }
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    $step = 2;
                                    continue;
                                }
                                case 7: {
                                    
                                    $tcs.setResult(defs.toArray());
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        getPulledServiceType: function (type) {
            if (!this.pulled_service_defs.containsKey(type)) {
                throw new RobotRaconteur.ServiceException("Unknown service type");
            }
            return this.pulled_service_defs.get(type);
        },
        getPulledServiceTypes: function () {
            return Bridge.Linq.Enumerable.from(this.pulled_service_defs.getKeys()).toArray();
    
        },
        doHeartbeat: function () {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                noop, 
                m, 
                noop1, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3], $step);
                            switch ($step) {
                                case 0: {
                                    if ( this.m_Connected ) {
                                        $step = 1;
                                        continue;
                                    } 
                                    $step = 3;
                                    continue;
                                }
                                case 1: {
                                    if ((Bridge.Date.subdd(Bridge.Date.utcNow(), this.lastMessageReceivedTime)).getTotalMilliseconds() > this.node.endpointInactivityTimeout) {
                                        noop = RobotRaconteur.Extensions.ignoreResult(this.close());
                                    }
                                    
                                    if (this.m_RemoteEndpoint !== 0) {
                                        if ((Bridge.Date.subdd(Bridge.Date.utcNow(), this.lastMessageSentTime)).getTotalMilliseconds() > 60000) {
                                            m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ClientKeepAliveReq, "");
                                            m.servicePath = this.m_ServiceName;
                                            m.transactionID = 0;
                                            noop1 = RobotRaconteur.Extensions.ignoreResult(this.sendMessage$1(m));
                                        }
                                    }
                                    
                                    $task1 = Bridge.Task.delay(5000);
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $task1.getAwaitedResult();
                                    
                                    $step = 0;
                                    continue;
                                }
                                case 3: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        close: function () {
            var $step = 0,
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                e, 
                noop, 
                $e1, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0], $step);
                            switch ($step) {
                                case 0: {
                                    try {
                                        e = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.DisconnectClient, "");
                                        e.addElement$1("servicename", this.getServiceName());
                                        noop = RobotRaconteur.Extensions.ignoreResult(this.processTransaction(e));
                                    }
                                    catch ($e1) {
                                        $e1 = Bridge.Exception.create($e1);
                                    }
                                    
                                    this.stubs.clear();
                                    this.m_Connected = false;
                                    this.node.deleteEndpoint(this);
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        packMessageElement: function (data, type1, stub) {
            var $t, $t1, $t2, $t3;
            var type;
    
            if (Bridge.is(type1, String)) {
                type = new RobotRaconteur.TypeDefinition("constructor");
                type.fromString(Bridge.cast(type1, String));
            }
            else  {
                type = Bridge.cast(type1, RobotRaconteur.TypeDefinition);
            }
    
            if (type.type === RobotRaconteur.DataTypes.varvalue_t && !type.isMap && !type.isList) {
                var data2 = Bridge.cast(data, RobotRaconteur.RobotRaconteurVarValue);
                var dt = data2.datatype;
                if (RobotRaconteur.Extensions.splitEmpty(dt).length === 1) {
                    dt = dt + " value";
                }
                type = new RobotRaconteur.TypeDefinition("constructor");
                type.fromString(dt);
                data = data2.data;
            }
    
            var element = new RobotRaconteur.MessageElement("constructor");
            element.elementName = type.name;
    
            if (data == null) {
                if (type.type >= RobotRaconteur.DataTypes.double_t && type.type <= RobotRaconteur.DataTypes.uint64_t) {
                    if (type.length === 0 && !type.varLength) {
                        throw new Bridge.NullReferenceException("Fixed length array must not be null");
                    }
                }
    
                if (type.type === RobotRaconteur.DataTypes.multidimarray_t) {
                    if (!type.varLength) {
                        throw new Bridge.NullReferenceException("Fixed dimension array much not be null");
                    }
                }
    
                element.elementType = RobotRaconteur.DataTypes.void_t;
                element.dataCount = 0;
                element.setData(null);
                return element;
            }
            else  {
                if (type.isList) {
                    var type2 = new RobotRaconteur.TypeDefinition("constructor");
                    type2.fromString(type.toString());
                    type2.isList = false;
                    type2.keyType = RobotRaconteur.DataTypes.void_t;
    
                    element.elementType = RobotRaconteur.DataTypes.list_t;
                    var l = new Bridge.List$1(RobotRaconteur.MessageElement)();
                    var i = 0;
    
                    $t = Bridge.getEnumerator((Bridge.as(data, Bridge.IEnumerable)));
                    while ($t.moveNext()) {
                        var v = $t.getCurrent();
                        var el = this.packMessageElement(v, type2, stub);
                        el.elementName = i.toString();
                        l.add(el);
                        i = (i + 1) | 0;
                    }
    
                    element.dataCount = (l.getCount()) >>> 0;
                    element.setData(new RobotRaconteur.MessageElementList(l));
                    return element;
                }
                else  {
                    if (type.isMap) {
                        var type21 = new RobotRaconteur.TypeDefinition("constructor");
                        type21.fromString(type.toString());
                        type21.isMap = false;
                        type21.keyType = RobotRaconteur.DataTypes.void_t;
    
                        if (type.keyType === RobotRaconteur.DataTypes.int32_t) {
                            element.elementType = RobotRaconteur.DataTypes.vector_t;
                            var l1 = new Bridge.List$1(RobotRaconteur.MessageElement)();
    
                            $t1 = Bridge.getEnumerator((Bridge.as(data, Bridge.IEnumerable)));
                            while ($t1.moveNext()) {
                                var v1 = $t1.getCurrent();
                                var v2 = v1;
                                var el1 = this.packMessageElement(v2.value, type21, stub);
                                el1.elementName = v2.key.toString();
                                l1.add(el1);
                            }
    
                            element.dataCount = (l1.getCount()) >>> 0;
                            element.setData(new RobotRaconteur.MessageElementMap$1(Bridge.Int32)(l1));
                            return element;
    
                        }
                        else  {
                            if (type.keyType === RobotRaconteur.DataTypes.string_t) {
                                element.elementType = RobotRaconteur.DataTypes.dictionary_t;
                                var l2 = new Bridge.List$1(RobotRaconteur.MessageElement)();
    
                                $t2 = Bridge.getEnumerator((Bridge.as(data, Bridge.IEnumerable)));
                                while ($t2.moveNext()) {
                                    var v3 = $t2.getCurrent();
                                    var v21 = v3;
                                    var el2 = this.packMessageElement(v21.value, type21, stub);
                                    el2.elementName = v21.key.toString();
                                    l2.add(el2);
                                }
    
                                element.dataCount = (l2.getCount()) >>> 0;
                                element.setData(new RobotRaconteur.MessageElementMap$1(String)(l2));
                                return element;
                            }
                            else  {
                                throw new RobotRaconteur.DataTypeException("Invalid key type");
                            }
                        }
    
                    }
                    else  {
                        if (type.isMultiDimArray) {
                            //TODO: implement multidimarray check
    
                            var data21 = Bridge.cast(data, RobotRaconteur.MultiDimArray);
    
                            element.elementType = RobotRaconteur.DataTypes.multidimarray_t;
                            var l3 = new Bridge.List$1(RobotRaconteur.MessageElement)();
                            l3.add(this.packMessageElement(data21.dimCount, "int32 dimcount", stub));
                            l3.add(this.packMessageElement(data21.dims, "int32[] dims", stub));
                            var type1_r = new RobotRaconteur.TypeDefinition("constructor");
                            type1_r.fromString(type.toString());
                            type1_r.name = "real";
                            type1_r.isMultiDimArray = false;
                            type1_r.varLength = true;
                            l3.add(this.packMessageElement(data21.real, type1_r, stub));
                            if (!data21.complex) {
                                element.dataCount = 3;
                            }
                            else  {
                                var type1_i = new RobotRaconteur.TypeDefinition("constructor");
                                type1_i.fromString(type.toString());
                                type1_i.name = "imag";
                                type1_i.isMultiDimArray = false;
                                l3.add(this.packMessageElement(data21.imag, type1_i, stub));
                                element.dataCount = 4;
                            }
                            element.setData(new RobotRaconteur.MessageElementMultiDimArray(l3));
                            return element;
                        }
                        else  {
                            if (type.type === RobotRaconteur.DataTypes.structure_t) {
                                var typestr2 = type.typeString;
                                var servicetype_str;
                                var structuretype_str;
                                if (Bridge.String.contains(typestr2,".")) {
                                    var t = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(typestr2);
                                    servicetype_str = t.item1;
                                    structuretype_str = t.item2;
                                }
                                else  {
                                    if (stub == null) {
                                        servicetype_str = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(this.root_object_type).item1;
                                    }
                                    else  {
                                        servicetype_str = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(stub.rr_objecttype).item1;
                                    }
                                    structuretype_str = typestr2;
                                }
    
                                var servicetype = this.getPulledServiceType(servicetype_str).item2;
                                if (!servicetype.structures.containsKey(structuretype_str)) {
                                    throw new RobotRaconteur.DataTypeException("Invalid structure type");
                                }
    
                                var structuretype = servicetype.structures.get(structuretype_str);
    
                                var l4 = new Bridge.List$1(RobotRaconteur.MessageElement)();
                                $t3 = Bridge.getEnumerator(Bridge.Linq.Enumerable.from(structuretype.members).select($_.RobotRaconteur.ClientContext.f2));
                                while ($t3.moveNext()) {
                                    var f = $t3.getCurrent();
                                    var mm = this.packMessageElement(data[f.name], f.type, stub);
                                    mm.elementName = f.name;
                                    l4.add(mm);
                                }
    
                                element.elementType = RobotRaconteur.DataTypes.structure_t;
                                element.dataCount = (l4.getCount()) >>> 0;
                                element.setData(new RobotRaconteur.MessageElementStructure(servicetype_str + "." + structuretype_str, l4));
                                return element;
                            }
                            else  {
                                if (type.type === RobotRaconteur.DataTypes.string_t) {
                                    element.elementType = RobotRaconteur.DataTypes.string_t;
                                    element.setData(Bridge.as(data, String));
                                    element.dataCount = ((Bridge.as(data, String)).length) >>> 0;
                                    return element;
                                }
                                else  {
                                    if (type.type >= RobotRaconteur.DataTypes.double_t && type.type <= RobotRaconteur.DataTypes.uint64_t) {
                                        var data22;
                                        var count;
    
                                        if (Bridge.is(data, Float64Array)) {
                                            if (type.type !== RobotRaconteur.DataTypes.double_t) {
                                                throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                            }
                                            data22 = data;
                                            count = ((Bridge.as(data, Float64Array)).length) >>> 0;
                                        }
                                        else  {
                                            if (Bridge.is(data, Float32Array)) {
                                                if (type.type !== RobotRaconteur.DataTypes.single_t) {
                                                    throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                                }
                                                data22 = data;
                                                count = ((Bridge.as(data, Float32Array)).length) >>> 0;
                                            }
                                            else  {
                                                if (Bridge.is(data, Uint8Array)) {
                                                    if (type.type !== RobotRaconteur.DataTypes.uint8_t) {
                                                        throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                                    }
                                                    data22 = data;
                                                    count = ((Bridge.as(data, Uint8Array)).length) >>> 0;
                                                }
                                                else  {
                                                    if (Bridge.is(data, Int8Array)) {
                                                        if (type.type !== RobotRaconteur.DataTypes.int8_t) {
                                                            throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                                        }
                                                        data22 = data;
                                                        count = ((Bridge.as(data, Int8Array)).length) >>> 0;
                                                    }
                                                    else  {
                                                        if (Bridge.is(data, Uint16Array)) {
                                                            if (type.type !== RobotRaconteur.DataTypes.uint16_t) {
                                                                throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                                            }
                                                            data22 = data;
                                                            count = ((Bridge.as(data, Uint16Array)).length) >>> 0;
                                                        }
                                                        else  {
                                                            if (Bridge.is(data, Int16Array)) {
                                                                if (type.type !== RobotRaconteur.DataTypes.int16_t) {
                                                                    throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                                                }
                                                                data22 = data;
                                                                count = ((Bridge.as(data, Int16Array)).length) >>> 0;
                                                            }
                                                            else  {
                                                                if (Bridge.is(data, Uint32Array)) {
                                                                    if (type.type !== RobotRaconteur.DataTypes.uint32_t) {
                                                                        throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                                                    }
                                                                    data22 = data;
                                                                    count = ((Bridge.as(data, Uint32Array)).length) >>> 0;
                                                                }
                                                                else  {
                                                                    if (Bridge.is(data, Int32Array)) {
                                                                        if (type.type !== RobotRaconteur.DataTypes.int32_t) {
                                                                            throw new RobotRaconteur.DataTypeMismatchException("Data type mismatch");
                                                                        }
                                                                        data22 = data;
                                                                        count = ((Bridge.as(data, Int32Array)).length) >>> 0;
                                                                    }
                                                                    else  {
                                                                        var data3;
                                                                        if (Bridge.isArray(data)) {
                                                                            data3 = data;
                                                                        }
                                                                        else  {
                                                                            data3 = [data];
                                                                        }
                                                                        switch (type.type) {
                                                                            case RobotRaconteur.DataTypes.double_t: 
                                                                                data22 = new Float64Array(data3);
                                                                                count = ((Bridge.as(data22, Float64Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.single_t: 
                                                                                data22 = new Float32Array(data3);
                                                                                count = ((Bridge.as(data22, Float32Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.uint8_t: 
                                                                                data22 = new Uint8Array(data3);
                                                                                count = ((Bridge.as(data22, Uint8Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.int8_t: 
                                                                                data22 = new Int8Array(data3);
                                                                                count = ((Bridge.as(data22, Int8Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.uint16_t: 
                                                                                data22 = new Uint16Array(data3);
                                                                                count = ((Bridge.as(data22, Uint16Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.int16_t: 
                                                                                data22 = new Int16Array(data3);
                                                                                count = ((Bridge.as(data22, Int16Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.uint32_t: 
                                                                                data22 = new Uint32Array(data3);
                                                                                count = ((Bridge.as(data22, Uint32Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.int32_t: 
                                                                                data22 = new Int32Array(data3);
                                                                                count = ((Bridge.as(data22, Int32Array)).length) >>> 0;
                                                                                break;
                                                                            case RobotRaconteur.DataTypes.uint64_t: 
                                                                            case RobotRaconteur.DataTypes.int64_t: 
                                                                                throw new Bridge.NotImplementedException("64-bit types not implemented");
                                                                            default: 
                                                                                throw new RobotRaconteur.DataTypeException("Could not pack message element");
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
    
                                        if (!type.isArray) {
                                            if (count !== 1) {
                                                throw new RobotRaconteur.DataTypeException("Number expected");
                                            }
                                        }
                                        else  {
                                            if (!type.varLength) {
                                                if (count !== type.length) {
                                                    throw new RobotRaconteur.DataTypeException("Expected array of length " + type.length);
                                                }
                                            }
                                        }
    
                                        element.elementType = type.type;
                                        element.dataCount = count;
                                        element.setData(data22);
                                        return element;
                                    }
                                    else  {
                                        throw new RobotRaconteur.DataTypeException("Could not pack message element");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        unpackMessageElement: function (element, type1, stub) {
            var $t, $t1, $t2, $t3;
            var type = null;
    
            if (type1 != null) {
                if (Bridge.is(type1, String)) {
                    type = new RobotRaconteur.TypeDefinition("constructor");
                    type.fromString(Bridge.cast(type1, String));
                }
                else  {
                    type = Bridge.cast(type1, RobotRaconteur.TypeDefinition);
                }
                if (type.type === RobotRaconteur.DataTypes.varvalue_t) {
                    if (!type.isMap && !type.isList) {
                        type = null;
                        var vardata = this.unpackMessageElement(element, null, stub);
                        var type1_2t = new RobotRaconteur.TypeDefinition("constructor");
                        if (element.elementType >= RobotRaconteur.DataTypes.double_t && element.elementType < RobotRaconteur.DataTypes.uint64_t) {
                            type1_2t.isArray = true;
                            type1_2t.type = element.elementType;
                        }
                        else  {
                            if (element.elementType === RobotRaconteur.DataTypes.string_t) {
                                type1_2t.type = element.elementType;
                            }
                            else  {
                                if (element.elementType === RobotRaconteur.DataTypes.structure_t) {
                                    type1_2t.type = element.elementType;
                                    type1_2t.typeString = element.elementTypeName;
                                }
                                else  {
                                    if (element.elementType === RobotRaconteur.DataTypes.list_t) {
                                        type1_2t.type = RobotRaconteur.DataTypes.varvalue_t;
                                        type1_2t.isList = true;
                                    }
                                    else  {
                                        if (element.elementType === RobotRaconteur.DataTypes.vector_t) {
                                            type1_2t.type = RobotRaconteur.DataTypes.varvalue_t;
                                            type1_2t.isMap = true;
                                            type1_2t.keyType = RobotRaconteur.DataTypes.int32_t;
                                        }
                                        else  {
                                            if (element.elementType === RobotRaconteur.DataTypes.dictionary_t) {
                                                type1_2t.type = RobotRaconteur.DataTypes.varvalue_t;
                                                type1_2t.isMap = true;
                                                type1_2t.keyType = RobotRaconteur.DataTypes.string_t;
                                            }
                                            else  {
                                                if (element.elementType === RobotRaconteur.DataTypes.multidimarray_t) {
                                                    type1_2t.isArray = true;
                                                    type1_2t.isMultiDimArray = true;
                                                    type1_2t.type = RobotRaconteur.MessageElement.findElement(element.castData(RobotRaconteur.MessageElementMultiDimArray).elements, "real").elementType;
                                                }
                                                else  {
                                                    throw new RobotRaconteur.DataTypeException("Invalid data type");
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        type1_2t.name = "value";
                        return new RobotRaconteur.RobotRaconteurVarValue(vardata, type1_2t.toString());
                    }
                }
    
            }
    
            if (element.elementType === RobotRaconteur.DataTypes.void_t) {
                return null;
            }
            else  {
                if (element.elementType >= RobotRaconteur.DataTypes.double_t && element.elementType <= RobotRaconteur.DataTypes.uint64_t) {
                    var count = Bridge.cast((element.getData()).length, Bridge.UInt32);
                    if (type != null) {
                        if (!type.isArray) {
                            return (element.getData())[0];
                        }
                        else  {
                            if (!type.varLength) {
                                if (count !== type.length) {
                                    throw new RobotRaconteur.DataTypeMismatchException("Invalid array length");
                                }
                            }
                        }
                    }
                    return element.getData();
                }
                else  {
                    if (element.elementType === RobotRaconteur.DataTypes.string_t) {
                        return element.getData();
                    }
                    else  {
                        if (element.elementType === RobotRaconteur.DataTypes.structure_t) {
                            var typestr2 = element.elementTypeName;
                            var servicetype_str;
                            var structuretype_str;
                            if (Bridge.String.contains(typestr2,".")) {
                                var t = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(typestr2);
                                servicetype_str = t.item1;
                                structuretype_str = t.item2;
                            }
                            else  {
                                if (stub == null) {
                                    servicetype_str = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(this.root_object_type).item1;
                                }
                                else  {
                                    servicetype_str = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(stub.rr_objecttype).item1;
                                }
                                structuretype_str = typestr2;
                            }
    
                            var servicetype = this.getPulledServiceType(servicetype_str).item2;
                            if (!servicetype.structures.containsKey(structuretype_str)) {
                                throw new RobotRaconteur.DataTypeException("Invalid structure type");
                            }
    
                            var structuretype = servicetype.structures.get(structuretype_str);
                            var o = { };
                            $t = Bridge.getEnumerator(Bridge.Linq.Enumerable.from(structuretype.members).select($_.RobotRaconteur.ClientContext.f2));
                            while ($t.moveNext()) {
                                var f = $t.getCurrent();
                                var el = RobotRaconteur.MessageElement.findElement(element.castData(RobotRaconteur.MessageElementStructure).elements, f.name);
                                var field = this.unpackMessageElement(el, f.type, stub);
                                o[f.name] = field;
                            }
                            return o;
                        }
                        else  {
                            if (element.elementType === RobotRaconteur.DataTypes.list_t) {
                                var type2 = null;
                                if (type != null) {
                                    if (!type.isList) {
                                        throw new RobotRaconteur.DataTypeMismatchException("Type is not a list");
                                    }
                                    type2 = new RobotRaconteur.TypeDefinition("constructor");
                                    type2.fromString(type.toString());
                                    type2.isList = false;
                                    type2.keyType = RobotRaconteur.DataTypes.void_t;
                                }
    
                                var l = new Bridge.List$1(Object)();
                                var i = 0;
                                $t1 = Bridge.getEnumerator(element.castData(RobotRaconteur.MessageElementList).elements);
                                while ($t1.moveNext()) {
                                    var el1 = $t1.getCurrent();
                                    if (Bridge.UInt32.parse(el1.elementName) !== i) {
                                        throw new RobotRaconteur.DataTypeException("Invalid list");
                                    }
                                    l.add(this.unpackMessageElement(el1, type2, stub));
                                    i = (i + 1) >>> 0;
                                }
                                return l;
                            }
                            else  {
                                if (element.elementType === RobotRaconteur.DataTypes.vector_t) {
                                    var type21 = null;
                                    if (type != null) {
                                        if (!type.isMap) {
                                            throw new RobotRaconteur.DataTypeMismatchException("Type is not a map");
                                        }
                                        type21 = new RobotRaconteur.TypeDefinition("constructor");
                                        type21.fromString(type.toString());
                                        type21.isMap = false;
                                        type21.keyType = RobotRaconteur.DataTypes.void_t;
                                    }
    
                                    var l1 = new Bridge.Dictionary$2(Bridge.Int32,Object)();
                                    $t2 = Bridge.getEnumerator(element.castData(RobotRaconteur.MessageElementMap$1(Bridge.Int32)).elements);
                                    while ($t2.moveNext()) {
                                        var el2 = $t2.getCurrent();
                                        l1.add(Bridge.Int32.parse(el2.elementName), this.unpackMessageElement(el2, type21, stub));
                                    }
                                    return l1;
                                }
                                else  {
                                    if (element.elementType === RobotRaconteur.DataTypes.dictionary_t) {
                                        var type22 = null;
                                        if (type != null) {
                                            if (!type.isMap) {
                                                throw new RobotRaconteur.DataTypeMismatchException("Type is not a map");
                                            }
                                            type22 = new RobotRaconteur.TypeDefinition("constructor");
                                            type22.fromString(type.toString());
                                            type22.isMap = false;
                                            type22.keyType = RobotRaconteur.DataTypes.void_t;
                                        }
    
                                        var l2 = new Bridge.Dictionary$2(String,Object)();
                                        $t3 = Bridge.getEnumerator(element.castData(RobotRaconteur.MessageElementMap$1(String)).elements);
                                        while ($t3.moveNext()) {
                                            var el3 = $t3.getCurrent();
                                            l2.add(el3.elementName, this.unpackMessageElement(el3, type22, stub));
                                        }
                                        return l2;
                                    }
                                    else  {
                                        if (element.elementType === RobotRaconteur.DataTypes.multidimarray_t) {
                                            if (type != null) {
                                                if (!type.isMultiDimArray) {
                                                    throw new RobotRaconteur.DataTypeMismatchException("Invalid Data Type");
                                                }
                                            }
    
                                            var elems = element.castData(RobotRaconteur.MessageElementMultiDimArray).elements;
                                            var dims = Bridge.cast(this.unpackMessageElement(RobotRaconteur.MessageElement.findElement(elems, "dims"), "int32[] value", stub), Int32Array);
                                            var dimcount = Bridge.cast(this.unpackMessageElement(RobotRaconteur.MessageElement.findElement(elems, "dimcount"), "int value", stub), Bridge.Int32);
                                            if (dims.length !== dimcount) {
                                                throw new RobotRaconteur.DataTypeException("MultiDimArray mismatch");
                                            }
                                            var real = this.unpackMessageElement(RobotRaconteur.MessageElement.findElement(elems, "real"), null, stub);
                                            var imag = null;
                                            if (Bridge.Linq.Enumerable.from(elems).count($_.RobotRaconteur.ClientContext.f3) !== 0) {
                                                imag = this.unpackMessageElement(RobotRaconteur.MessageElement.findElement(elems, "imag"), null, stub);
                                            }
    
                                            return new RobotRaconteur.MultiDimArray("constructor$1", dims, real, imag);
                                        }
                                        else  {
                                            throw new RobotRaconteur.DataTypeException("Could not unpack message element");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    
        },
        initStub: function (type, path) {
            var $t, $t1, $t2, $t3, $t4, $t5;
            var s = RobotRaconteur.ServiceDefinitionUtil.splitQualifiedName(type);
            var def = this.getPulledServiceType(s.item1);
            if (!def.item2.objects.containsKey(s.item2)) {
                throw new RobotRaconteur.ServiceException("Invalid object type");
            }
    
            var objectdef = def.item2.objects.get(s.item2);
    
            var stub = new RobotRaconteur.ServiceStub(type, path, this);
    
            $t = Bridge.getEnumerator(RobotRaconteur.ClientContext.memberIter(RobotRaconteur.PropertyDefinition, objectdef));
            while ($t.moveNext()) {
                (function () {
                    var p = $t.getCurrent();
                    var get_ = Bridge.fn.bind(this, function () {
                        return Bridge.fn.bind(this, function () {
                            var $step = 0,
                                $task1, 
                                $taskResult1, 
                                $jumpFromFinally, 
                                $tcs = new Bridge.TaskCompletionSource(), 
                                $returnValue, 
                                req, 
                                res, 
                                $async_e, 
                                $asyncBody = Bridge.fn.bind(this, function () {
                                    try {
                                        for (;;) {
                                            $step = Bridge.Array.min([0,1], $step);
                                            switch ($step) {
                                                case 0: {
                                                    if (arguments.length !== 0) {
                                                        throw new Bridge.InvalidOperationException("Incorrect number of function parameters for property get");
                                                    }
                                                    
                                                    req = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.PropertyGetReq, p.name);
                                                    $task1 = stub.rR_ProcessTransaction(req);
                                                    $step = 1;
                                                    $task1.continueWith($asyncBody);
                                                    return;
                                                }
                                                case 1: {
                                                    $taskResult1 = $task1.getAwaitedResult();
                                                    res = $taskResult1;
                                                    $tcs.setResult(this.unpackMessageElement(res.findElement("value"), p.type, stub));
                                                    return;
                                                }
                                                default: {
                                                    $tcs.setResult(null);
                                                    return;
                                                }
                                            }
                                        }
                                    } catch($async_e1) {
                                        $async_e = Bridge.Exception.create($async_e1);
                                        $tcs.setException($async_e);
                                    }
                                }, arguments);
    
                            $asyncBody();
                            return $tcs.task;
                        });
    
                    });
    
                    var set_ = Bridge.fn.bind(this, function () {
                        return Bridge.fn.bind(this, function () {
                            var $step = 0,
                                $task1, 
                                $taskResult1, 
                                $jumpFromFinally, 
                                $tcs = new Bridge.TaskCompletionSource(), 
                                $returnValue, 
                                req, 
                                res, 
                                $async_e, 
                                $asyncBody = Bridge.fn.bind(this, function () {
                                    try {
                                        for (;;) {
                                            $step = Bridge.Array.min([0,1], $step);
                                            switch ($step) {
                                                case 0: {
                                                    if (arguments.length !== 1) {
                                                        throw new Bridge.InvalidOperationException("Incorrect number of function parameters for property set");
                                                    }
                                                    
                                                    req = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.PropertySetReq, p.name);
                                                    req.elements.add(this.packMessageElement(arguments[0], p.type, stub));
                                                    $task1 = stub.rR_ProcessTransaction(req);
                                                    $step = 1;
                                                    $task1.continueWith($asyncBody);
                                                    return;
                                                }
                                                case 1: {
                                                    $taskResult1 = $task1.getAwaitedResult();
                                                    res = $taskResult1;
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
                                        $async_e = Bridge.Exception.create($async_e1);
                                        $tcs.setException($async_e);
                                    }
                                }, arguments);
    
                            $asyncBody();
                            return $tcs.task;
                        });
    
                    });
    
                    stub["get_" + p.name] = get_();
                    stub["set_" + p.name] = set_();
    
                }).call(this);
            }
    
            $t1 = Bridge.getEnumerator(RobotRaconteur.ClientContext.memberIter(RobotRaconteur.EventDefinition, objectdef));
            while ($t1.moveNext()) {
                var p1 = $t1.getCurrent();
                stub[p1.name] = new RobotRaconteur.Evt(stub, p1);
            }
    
            $t2 = Bridge.getEnumerator(RobotRaconteur.ClientContext.memberIter(RobotRaconteur.FunctionDefinition, objectdef));
            while ($t2.moveNext()) {
                (function () {
                    var p2 = $t2.getCurrent();
    
                    var f = Bridge.fn.bind(this, function () {
                        return Bridge.fn.bind(this, function () {
                            var $step = 0,
                                $task1, 
                                $taskResult1, 
                                $jumpFromFinally, 
                                $tcs = new Bridge.TaskCompletionSource(), 
                                $returnValue, 
                                req, 
                                i, 
                                res, 
                                $async_e, 
                                $asyncBody = Bridge.fn.bind(this, function () {
                                    try {
                                        for (;;) {
                                            $step = Bridge.Array.min([0,1], $step);
                                            switch ($step) {
                                                case 0: {
                                                    if (arguments.length !== p2.parameters.getCount()) {
                                                        throw new Bridge.InvalidOperationException("Incorrect number of function parameters for: " + p2.name);
                                                    }
                                                    
                                                    req = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.FunctionCallReq, p2.name);
                                                    for (i = 0; i < p2.parameters.getCount(); i = (i + 1) | 0) {
                                                        req.elements.add(this.packMessageElement(arguments[i], p2.parameters.getItem(i), stub));
                                                    }
                                                    $task1 = stub.rR_ProcessTransaction(req);
                                                    $step = 1;
                                                    $task1.continueWith($asyncBody);
                                                    return;
                                                }
                                                case 1: {
                                                    $taskResult1 = $task1.getAwaitedResult();
                                                    res = $taskResult1;
                                                    if (p2.returnType.type === RobotRaconteur.DataTypes.void_t) {
                                                        $tcs.setResult(null);
                                                        return;
                                                    }
                                                    else  {
                                                        $tcs.setResult(this.unpackMessageElement(res.findElement("return"), p2.returnType, stub));
                                                        return;
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
                                        $async_e = Bridge.Exception.create($async_e1);
                                        $tcs.setException($async_e);
                                    }
                                }, arguments);
    
                            $asyncBody();
                            return $tcs.task;
                        });
                    });
    
                    stub[p2.name] = f();
                }).call(this);
            }
    
            $t3 = Bridge.getEnumerator(RobotRaconteur.ClientContext.memberIter(RobotRaconteur.ObjRefDefinition, objectdef));
            while ($t3.moveNext()) {
                (function () {
                    var p3 = $t3.getCurrent();
                    var get_1 = function () {
                        if (p3.isArray || p3.isIndexed) {
                            return function () {
                                var $step = 0,
                                    $task1, 
                                    $taskResult1, 
                                    $jumpFromFinally, 
                                    $tcs = new Bridge.TaskCompletionSource(), 
                                    $returnValue, 
                                    $async_e, 
                                    $asyncBody = Bridge.fn.bind(this, function () {
                                        try {
                                            for (;;) {
                                                $step = Bridge.Array.min([0,1], $step);
                                                switch ($step) {
                                                    case 0: {
                                                        $task1 = stub.rR_FindObjRef$1(p3.name, arguments[0].toString());
                                                        $step = 1;
                                                        $task1.continueWith($asyncBody);
                                                        return;
                                                    }
                                                    case 1: {
                                                        $taskResult1 = $task1.getAwaitedResult();
                                                        $tcs.setResult($taskResult1);
                                                        return;
                                                    }
                                                    default: {
                                                        $tcs.setResult(null);
                                                        return;
                                                    }
                                                }
                                            }
                                        } catch($async_e1) {
                                            $async_e = Bridge.Exception.create($async_e1);
                                            $tcs.setException($async_e);
                                        }
                                    }, arguments);
    
                                $asyncBody();
                                return $tcs.task;
                            };
                        }
                        else  {
                            return function () {
                                var $step = 0,
                                    $task1, 
                                    $taskResult1, 
                                    $jumpFromFinally, 
                                    $tcs = new Bridge.TaskCompletionSource(), 
                                    $returnValue, 
                                    $async_e, 
                                    $asyncBody = Bridge.fn.bind(this, function () {
                                        try {
                                            for (;;) {
                                                $step = Bridge.Array.min([0,1], $step);
                                                switch ($step) {
                                                    case 0: {
                                                        $task1 = stub.rR_FindObjRef(p3.name);
                                                        $step = 1;
                                                        $task1.continueWith($asyncBody);
                                                        return;
                                                    }
                                                    case 1: {
                                                        $taskResult1 = $task1.getAwaitedResult();
                                                        $tcs.setResult($taskResult1);
                                                        return;
                                                    }
                                                    default: {
                                                        $tcs.setResult(null);
                                                        return;
                                                    }
                                                }
                                            }
                                        } catch($async_e1) {
                                            $async_e = Bridge.Exception.create($async_e1);
                                            $tcs.setException($async_e);
                                        }
                                    }, arguments);
    
                                $asyncBody();
                                return $tcs.task;
                            };
                        }
                    };
    
                    stub["get_" + p3.name] = get_1();
                }).call(this);
            }
    
            $t4 = Bridge.getEnumerator(RobotRaconteur.ClientContext.memberIter(RobotRaconteur.PipeDefinition, objectdef));
            while ($t4.moveNext()) {
                var p4 = $t4.getCurrent();
                var pipe_client = new RobotRaconteur.Pipe(p4.name, p4.type, stub);
                stub[p4.name] = pipe_client;
            }
    
            $t5 = Bridge.getEnumerator(RobotRaconteur.ClientContext.memberIter(RobotRaconteur.CallbackDefinition, objectdef));
            while ($t5.moveNext()) {
                var p5 = $t5.getCurrent();
                stub[p5.name] = null;
            }
    
            return stub;
    
        },
        requestObjectLock: function (obj, flags) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                s, 
                command, 
                m, 
                ret, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (!(Bridge.is(obj, RobotRaconteur.ServiceStub))) {
                                        throw new Bridge.InvalidOperationException("Can only lock object opened through Robot Raconteur");
                                    }
                                    s = Bridge.cast(obj, RobotRaconteur.ServiceStub);
                                    
                                    command = "";
                                    if (flags === RobotRaconteur.RobotRaconteurObjectLockFlags.USER_LOCK) {
                                        command = "RequestObjectLock";
                                    }
                                    else  {
                                        if (flags === RobotRaconteur.RobotRaconteurObjectLockFlags.CLIENT_LOCK) {
                                            command = "RequestClientObjectLock";
                                        }
                                        else  {
                                            throw new Bridge.InvalidOperationException("Unknown flags");
                                        }
                                    }
                                    
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ClientSessionOpReq, command);
                                    m.servicePath = s.rR_ServicePath;
                                    
                                    $task1 = this.processTransaction(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    ret = $taskResult1;
                                    $tcs.setResult(ret.findElement("return").castData(String));
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        releaseObjectLock: function (obj) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                s, 
                m, 
                ret, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    if (!(Bridge.is(obj, RobotRaconteur.ServiceStub))) {
                                        throw new Bridge.InvalidOperationException("Can only lock object opened through Robot Raconteur");
                                    }
                                    s = Bridge.cast(obj, RobotRaconteur.ServiceStub);
                                    
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ClientSessionOpReq, "ReleaseObjectLock");
                                    m.servicePath = s.rR_ServicePath;
                                    
                                    $task1 = this.processTransaction(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    ret = $taskResult1;
                                    $tcs.setResult(ret.findElement("return").castData(String));
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        monitorEnter: function (obj, timeout) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $taskResult3, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                iserror, 
                lock_, 
                s, 
                keep_trying, 
                m, 
                ret, 
                retcode, 
                m1, 
                ret1, 
                retcode1, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4,5,6,7,8,10,11], $step);
                            switch ($step) {
                                case 0: {
                                    iserror = true;
                                    lock_ = null;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if (!(Bridge.is(obj, RobotRaconteur.ServiceStub))) {
                                        throw new Bridge.InvalidOperationException("Can only unlock object opened through Robot Raconteur");
                                    }
                                    s = Bridge.cast(obj, RobotRaconteur.ServiceStub);
                                    $task1 = s.rr_async_mutex.lock();
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    lock_ = $taskResult1;
                                    
                                    keep_trying = true;
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ClientSessionOpReq, "MonitorEnter");
                                    m.servicePath = s.rR_ServicePath;
                                    m.addElement(this.packMessageElement(timeout, "int32 timeout", s));
                                    
                                    $task2 = this.processTransaction(m);
                                    $step = 3;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    ret = $taskResult2;
                                    retcode = ret.findElement("return").castData(String);
                                    
                                    if (Bridge.referenceEquals(retcode, "OK")) {
                                        iserror = false;
                                        $returnValue = Bridge.merge(new RobotRaconteur.RobotRaconteurNode.MonitorLock(), {
                                            lock_: lock_,
                                            stub: s
                                        } );
                                        $step = 10;
                                        continue;}
                                    if (Bridge.referenceEquals(retcode, "Continue")) {
                                        $step = 4;
                                        continue;
                                    } else  {
                                        $step = 8;
                                        continue;
                                    }
                                }
                                case 4: {
                                    if ( keep_trying ) {
                                        $step = 5;
                                        continue;
                                    } 
                                    $step = 7;
                                    continue;
                                }
                                case 5: {
                                    m1 = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ClientSessionOpReq, "MonitorContinueEnter");
                                    m1.servicePath = s.rR_ServicePath;
                                    
                                    $task3 = this.processTransaction(m1);
                                    $step = 6;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 6: {
                                    $taskResult3 = $task3.getAwaitedResult();
                                    ret1 = $taskResult3;
                                    retcode1 = ret1.findElement("return").castData(String);
                                    if (Bridge.referenceEquals(retcode1, "OK")) {
                                        iserror = false;
                                        $returnValue = Bridge.merge(new RobotRaconteur.RobotRaconteurNode.MonitorLock(), {
                                            lock_: lock_,
                                            stub: s
                                        } );
                                        $step = 10;
                                        continue;}
                                    if (!Bridge.referenceEquals(retcode1, "Continue")) {
                                        throw new RobotRaconteur.ProtocolException("Unknown return code");
                                    }
                                    
                                    $step = 4;
                                    continue;
                                }
                                case 7: {
                                    $step = 9;
                                    continue;
                                }
                                case 8: {
                                    throw new RobotRaconteur.ProtocolException("Unknown return code");
                                    $step = 9;
                                    continue;
                                }
    
                                case 10: {
                                    if (iserror) {
                                        if (lock_ != null) {
                                            lock_.dispose();
                                        }
                                    }
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    
                                    throw new RobotRaconteur.ProtocolException("Unknown return code");
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ($step >= 1 && $step <= 9){
    
                            $step = 10;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        monitorExit: function (lock_) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                m, 
                ret, 
                retcode, 
                $async_e, 
                $e1, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([1,2,3,4], $step);
                            switch ($step) {
    
                                case 1: {
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ClientSessionOpReq, "MonitorExit");
                                    m.servicePath = lock_.stub.rR_ServicePath;
                                    
                                    $task1 = this.processTransaction(m);
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    ret = $taskResult1;
                                    retcode = ret.findElement("return").castData(String);
                                    if (!Bridge.referenceEquals(retcode, "OK")) {
                                        throw new RobotRaconteur.ProtocolException("Unknown return code");
                                    }
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    try {
                                        lock_.lock_.dispose();
                                    }
                                    catch ($e1) {
                                        $e1 = Bridge.Exception.create($e1);
                                    }
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 4;
                                    continue;
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ($step >= 1 && $step <= 2){
    
                            $step = 3;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        authenticateUser: function (username, credentials) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                m, 
                ret, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    m = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ClientSessionOpReq, "AuthenticateUser");
                                    m.servicePath = this.getServiceName();
                                    m.addElement(this.packMessageElement(username, "string username", null));
                                    m.addElement(this.packMessageElement(credentials, "varvalue{string} credentials", null));
                                    
                                    $task1 = this.processTransaction(m);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    ret = $taskResult1;
                                    this.m_AuthenticatedUsername = username;
                                    this.m_UserAuthenticated = true;
                                    $tcs.setResult(ret.findElement("return").castData(String));
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        }
    });
    
    Bridge.ns("RobotRaconteur.ClientContext", $_)
    
    Bridge.apply($_.RobotRaconteur.ClientContext, {
        f1: function (x) {
            return Bridge.referenceEquals(x.elementName, "attributes");
        },
        f2: function (x) {
            return Bridge.as(x.value, RobotRaconteur.PropertyDefinition);
        },
        f3: function (x) {
            return Bridge.referenceEquals(x.elementName, "imag");
        }
    });
    
    Bridge.define('RobotRaconteur.ConnectionException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.ConnectionError, "RobotRaconteur.ConnectionError", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.DataSerializationException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.DataSerializationError, "RobotRaconteur.DataSerializationError", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.DataTypeException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.DataTypeError, "RobotRaconteur.DataTypeError", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.DataTypeMismatchException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.DataTypeMismatch, "RobotRaconteur.DataTypeMismatch", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.EndpointCommunicationFatalException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.EndpointCommunicationFatalError, "RobotRaconteur.EndpointCommunicationFatalError", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.EventDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        parameters: null,
        config: {
            init: function () {
                this.parameters = new Bridge.List$1(RobotRaconteur.TypeDefinition)();
            }
        },
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
            var pa = Bridge.Array.init(this.parameters.getCount(), null);
            for (var i = 0; i < pa.length; i = (i + 1) | 0) {
                pa[i] = this.parameters.getItem(i).toString();
            }
    
            return "event " + this.name + " (" + pa.join(", ") + ")";
    
    
        },
        fromString: function (s) {
    
            var sp = RobotRaconteur.Extensions.splitEmpty$1(s.trim(), 2);
    
            if (!Bridge.referenceEquals(sp[0].trim(), "event")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            var sp3 = Bridge.String.split(sp[1], [40].map(function(i) {{ return String.fromCharCode(i); }}));
            if (sp3.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
            if (RobotRaconteur.Extensions.splitEmpty(sp3[0]).length !== 1) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            this.name = sp3[0].trim();
    
            var sp3_1 = sp3[1].trim();
            if (!Bridge.String.endsWith(sp3_1, ")")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
            sp3_1 = sp3_1.substr(0, ((sp3_1.length - 1) | 0));
            if (Bridge.String.contains(sp3_1,")")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            var sp4 = RobotRaconteur.ServiceDefinitionUtil.splitParameterString(sp3_1);
    
    
            var pcount = sp4.length;
            if (pcount === 1 && sp4[0].trim().length === 0) {
                pcount = 0;
            }
    
            this.parameters = new Bridge.List$1(RobotRaconteur.TypeDefinition)(pcount);
            for (var i = 0; i < pcount; i = (i + 1) | 0) {
                var d = new RobotRaconteur.TypeDefinition("constructor");
                d.member = this;
                d.fromString(sp4[i]);
                if (Bridge.String.isNullOrWhiteSpace(d.name)) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
                this.parameters.add(d);
            }
        }
    });
    
    Bridge.define('RobotRaconteur.FunctionDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        returnType: null,
        parameters: null,
        config: {
            init: function () {
                this.parameters = new Bridge.List$1(RobotRaconteur.TypeDefinition)();
            }
        },
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
    
    
            var pa = Bridge.Array.init(this.parameters.getCount(), null);
            for (var i = 0; i < pa.length; i = (i + 1) | 0) {
                pa[i] = this.parameters.getItem(i).toString();
            }
    
            return "function " + this.returnType.toString() + " " + this.name + " (" + pa.join(", ") + ")";
    
    
    
        },
        fromString: function (s) {
            var sp = RobotRaconteur.Extensions.splitEmpty$1(s.trim(), 2);
    
            if (!Bridge.referenceEquals(sp[0].trim(), "function")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            var sp2 = RobotRaconteur.Extensions.splitEmpty$1(sp[1], 2);
    
            this.returnType = new RobotRaconteur.TypeDefinition("constructor");
            this.returnType.member = this;
            this.returnType.fromString(sp2[0]);
    
            var sp3 = Bridge.String.split(sp2[1], [40].map(function(i) {{ return String.fromCharCode(i); }}));
            if (sp3.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            if (RobotRaconteur.Extensions.splitEmpty(sp3[0]).length !== 1) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            this.name = sp3[0].trim();
    
            var sp3_1 = sp3[1].trim();
            if (!Bridge.String.endsWith(sp3_1, ")")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
            sp3_1 = sp3_1.substr(0, ((sp3_1.length - 1) | 0));
            if (Bridge.String.contains(sp3_1,")")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            var sp4 = RobotRaconteur.ServiceDefinitionUtil.splitParameterString(sp3_1);
    
    
            var pcount = sp4.length;
            if (pcount === 1 && sp4[0].trim().length === 0) {
                pcount = 0;
            }
    
            this.parameters = new Bridge.List$1(RobotRaconteur.TypeDefinition)(pcount);
            for (var i = 0; i < pcount; i = (i + 1) | 0) {
                var d = new RobotRaconteur.TypeDefinition("constructor");
                d.member = this;
                d.fromString(sp4[i]);
                if (Bridge.String.isNullOrWhiteSpace(d.name)) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
                this.parameters.add(d);
            }
        }
    });
    
    Bridge.define('RobotRaconteur.InvalidEndpointException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.InvalidEndpoint, "RobotRaconteur.InvalidEndpoint", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.MemberFormatMismatchException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.MemberFormatMismatch, "RobotRaconteur.MemberFormatMismatch", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.MemberNotFoundException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.MemberNotFound, "RobotRaconteur.MemberNotFound", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.MemoryDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        type: null,
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
            var t = new RobotRaconteur.TypeDefinition("constructor$1", this.type);
            t.name = this.name;
            t.member = this;
    
    
            return Bridge.String.format("memory {0}", t.toString());
    
        },
        fromString: function (s) {
            var sp = RobotRaconteur.Extensions.splitEmpty$1(s.trim(), 2);
    
            if (!Bridge.referenceEquals(sp[0].trim(), "memory")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            if (sp.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            this.type = new RobotRaconteur.TypeDefinition("constructor");
            this.type.member = this;
            this.type.fromString(sp[1]);
            if (Bridge.String.isNullOrWhiteSpace(this.type.name)) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            this.name = this.type.name;
            this.type.name = "packettype";
    
            if (!this.type.isArray || this.type.isMap) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Memory must be an array or multidimarray");
            }
    
            if (!(this.type.type >= RobotRaconteur.DataTypes.double_t && this.type.type <= RobotRaconteur.DataTypes.uint64_t)) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Memory must be a number array or multidimarray");
            }
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.MessageElementNotFoundException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.MessageElementNotFound, "RobotRaconteur.MessageElementNotFound", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.MessageEntryNotFoundException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.MessageEntryNotFound, "RobotRaconteur.MessageEntryNotFound", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.NodeNotFoundException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.NodeNotFound, "RobotRaconteur.NodeNotFound", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.ObjectLockedException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.ObjectLockedError, "RobotRaconteur.ObjectLockedError", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.ObjectNotFoundException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.ObjectNotFound, "RobotRaconteur.ObjectNotFound", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.ObjRefDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        objectType: null,
        isArray: false,
        isIndexed: false,
        indexerType: 0,
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
    
    
            var s_indexedtype = "";
            if (this.isIndexed) {
                switch (this.indexerType) {
                    case RobotRaconteur.DataTypes.int32_t: 
                        s_indexedtype = "{int32}";
                        break;
                    case RobotRaconteur.DataTypes.string_t: 
                        s_indexedtype = "{string}";
                        break;
                    default: 
                        throw new RobotRaconteur.DataTypeException("Unknown indexer type");
                }
    
            }
    
            var objt = this.objectType;
            if (Bridge.referenceEquals(objt, "object")) {
                objt = "varobject";
            }
    
            return "objref " + objt + (this.isArray ? "[]" : s_indexedtype) + " " + this.name;
        },
        fromString: function (s) {
            var sp = RobotRaconteur.Extensions.splitEmpty(s.trim());
            if (sp.length !== 3) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
    
            if (!Bridge.referenceEquals(sp[0].trim(), "objref")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            if (Bridge.String.contains(sp[1],"[") || Bridge.String.contains(sp[1],"]")) {
                if (!Bridge.String.endsWith(sp[1], "[]")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
                var sp_2 = sp[1].substr(0, ((sp[1].length - 2) | 0));
                if (Bridge.String.contains(sp_2,"[") || Bridge.String.contains(sp_2,"]")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                }
    
                this.isArray = true;
                if (Bridge.String.contains(sp_2,"{") || Bridge.String.contains(sp_2,"}")) {
                    throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Invalid object indexing notation");
                }
                this.objectType = sp_2;
                if (Bridge.referenceEquals(this.objectType, "varobject")) {
                    this.objectType = "object";
                }
                this.name = sp[2].trim();
            }
            else  {
                if (Bridge.String.contains(sp[1],"{") || Bridge.String.contains(sp[1],"}")) {
    
                    this.isIndexed = true;
                    var sp1 = Bridge.String.split(sp[1], [123].map(function(i) {{ return String.fromCharCode(i); }}));
    
                    if (sp1.length !== 2) {
                        throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                    }
    
                    if (!Bridge.String.endsWith(sp1[1], "}")) {
                        throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                    }
                    var sp_21 = sp1[1].substr(0, ((sp1[1].length - 1) | 0));
    
                    if (Bridge.String.contains(sp_21,"[") || Bridge.String.contains(sp_21,"]") || Bridge.String.contains(sp_21,"{") || Bridge.String.contains(sp_21,"}")) {
                        throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
                    }
    
                    var stype = sp_21;
    
                    switch (stype) {
                        case "int32": 
                            this.indexerType = RobotRaconteur.DataTypes.int32_t;
                            break;
                        case "string": 
                            this.indexerType = RobotRaconteur.DataTypes.string_t;
                            break;
                        default: 
                            throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Invalid object reference indexer type");
                    }
    
                    this.objectType = sp1[0];
                    if (Bridge.referenceEquals(this.objectType, "varobject")) {
                        this.objectType = "object";
                    }
                    this.name = sp[2].trim();
    
    
                }
                else  {
                    this.objectType = sp[1];
                    if (Bridge.referenceEquals(this.objectType, "varobject")) {
                        this.objectType = "object";
                    }
                    this.name = sp[2].trim();
                }
            }
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.PipeDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        type: null,
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
            var t = new RobotRaconteur.TypeDefinition("constructor$1", this.type);
            t.member = this;
            t.name = this.name;
    
    
            return Bridge.String.format("pipe {0}", t.toString());
    
        },
        fromString: function (s) {
            var sp = RobotRaconteur.Extensions.splitEmpty$1(s.trim(), 2);
    
            if (!Bridge.referenceEquals(sp[0].trim(), "pipe")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            if (sp.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            this.type = new RobotRaconteur.TypeDefinition("constructor");
            this.type.member = this;
            this.type.fromString(sp[1]);
            if (Bridge.String.isNullOrWhiteSpace(this.type.name)) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            this.name = this.type.name;
            this.type.name = "packettype";
    
        }
    });
    
    Bridge.define('RobotRaconteur.PropertyDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        type: null,
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
            return this.toString$1(false);
        },
        toString$1: function (isstruct) {
            var t = new RobotRaconteur.TypeDefinition("constructor$1", this.type);
            t.member = this;
            t.name = this.name;
            t.isArray = this.type.isArray;
    
            if (isstruct) {
                return Bridge.String.format("field {0}", t.toString());
            }
            else  {
                return Bridge.String.format("property {0}", t.toString());
            }
        },
        fromString: function (s) {
            var sp = RobotRaconteur.Extensions.splitEmpty$1(s.trim(), 2);
    
            if (!Bridge.referenceEquals(sp[0].trim(), "property") && !Bridge.referenceEquals(sp[0].trim(), "field")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            if (sp.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            this.type = new RobotRaconteur.TypeDefinition("constructor");
            this.type.member = this;
            this.type.fromString(sp[1]);
            if (Bridge.String.isNullOrWhiteSpace(this.type.name)) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            this.name = this.type.name;
            this.type.name = "value";
    
        }
    });
    
    Bridge.define('RobotRaconteur.ProtocolException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.ProtocolError, "RobotRaconteur.ProtocolError", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.RobotRaconteurRemoteException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor$1: function (error, message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.RemoteError, error, message);
    
    
        },
        constructor: function (innerexception) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.RemoteError, Bridge.getType(innerexception).toString(), innerexception.getMessage());
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.ServiceException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.ServiceError, "RobotRaconteur.ServiceError", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.ServiceNotFoundException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.ServiceNotFound, "RobotRaconteur.ServiceNotFound", message);
    
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.TransactionTimeoutException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.TransactionTimeout, "RobotRaconteur.TransactionTimeout", message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.UnknownException', {
        inherits: [RobotRaconteur.RobotRaconteurException],
        constructor: function (error, message) {
            RobotRaconteur.RobotRaconteurException.prototype.constructor$1.call(this, RobotRaconteur.MessageErrorType.UnknownError, error, message);
    
    
        }
    });
    
    Bridge.define('RobotRaconteur.WebSocketTransport', {
        inherits: [RobotRaconteur.Transport],
        statics: {
            robot_Raconteur_Node_Node_Root_CA: "-----BEGIN CERTIFICATE-----\r\nMIIFujCCA6KgAwIBAgIQDdViP0ny9X/N86KnGB9/GzANBgkqhkiG9w0BAQsFADBU\r\nMQswCQYDVQQGEwJVUzEeMBwGA1UEChMVV2Fzb24gVGVjaG5vbG9neSwgTExDMSUw\r\nIwYDVQQDExxSb2JvdCBSYWNvbnRldXIgTm9kZSBSb290IENBMB4XDTE1MTIxNzAw\r\nMDAwMFoXDTQ1MTIxNjIzNTk1OVowVDELMAkGA1UEBhMCVVMxHjAcBgNVBAoTFVdh\r\nc29uIFRlY2hub2xvZ3ksIExMQzElMCMGA1UEAxMcUm9ib3QgUmFjb250ZXVyIE5v\r\nZGUgUm9vdCBDQTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAKz0a+6Q\r\nz3KpjDuHWp+4nl7AEVuwtO2MtoQCIL+HA807Fsa8DDFlWks4tXUa/BvW9mEz1BDU\r\nvcl698QN74sNEKfUdSGrsPkTvFi1AbV9nmQg9aDSZ0WnzCeu8VzxawmiYVlfYWVl\r\n1nCijAFZzp0Ii1kaVAjxUaeliXIuTpFjmOH29IecKKrpDeOVM3aRkaCin9CRloqt\r\nk3b8VgGl/h5hlQA2KLnhpsoqnYoX27ecPoVx4cnZ/Nj+w6TgxSb+JLu2r9n8QgIq\r\nnewIznDTlVkmdQgs19JpQz7AqTkKPBUuOZksGSA64ZZx42DhdbhDedZjAI9P65px\r\nNZa+iUE6Tdtpv5H/Zs+/+BnVRjTl85hJLR4EXXA4qRR/I0ILxBz5lx5/XqMO20X+\r\nc75wm6s5EH7Fjot/1BqaR2ABSQ7oclfqOmSHb0ifySPIs++sVGu8Na1zI7Gvj1c3\r\n/HzjD7nYvKDzpe809oobLj+G9huwNO9JGnBdmmCWA4qK6L7sdkUTiNRtwINxldJH\r\nGqJ53BIx82ZeomGCMn9HgDXlDnnIPiYlWmkS5pAiFGL8+YpxdLP+JWjUa0QR+wQN\r\n4XjOl7cAIe2GJF+mnQWChLBlS41i6CpAGYHuqub99ee4jFRQ403TyZmGbxtVkzZ9\r\nJ+3MT+ss8/KPFtn9CyzG3rdnxnUQUXO0L6k9AgMBAAGjgYcwgYQwEgYDVR0TAQH/\r\nBAgwBgEB/wIBATAOBgNVHQ8BAf8EBAMCAQYwFgYMKwYBBAGC4w8BAQMBAQH/BAMB\r\nAf8wJwYDVR0RBCAwHqQcMBoxGDAWBgNVBAMTD01QS0ktNDA5Ni0xLTIxMTAdBgNV\r\nHQ4EFgQURwBrvHpIMFp63LVGH7XrAZbq/sgwDQYJKoZIhvcNAQELBQADggIBAIbT\r\n+sutok2DTnTKCknxDxgdVeha2KBm8qe2wfygSYmM/hGfoIEZnn8Dbh7kLCyrVAZ9\r\nt3KDRm7YY/WuMU7hJxnbiURxigqhLNDFSXrJ0a0Evev5MbXj4vX4603RpuWwQ2F8\r\nRzHhH1TDMkc5+MaAZRifgZlufOlaOkK5pr5Izm2rgIaEuLxkt+DiCzejf4HH91sr\r\nKKbH1JaqWVngYtDnHuDhDipLsYCwTPNJSCta0FXoTJXGDF+3ft0lL2QOn4WvdmXK\r\nEve6VcSXiXlcgPlYyPUbEm7Sy5pQ8r/ulyfWixmbSZ3WuSRZDPx8g1xn6U3EeLXl\r\nM01qajteTTKMLcBAASjv5liJilk37hWTSCL48vG7JBcLmilPVXMMkalR0vUyZP6Y\r\ndqzeE8DSKIOUHJ4kRIyV/ECVIHKafr3FmJAlARN00iE3OP1u40ym+HA0q3rGG610\r\nJgpL4YU8s7OeeYJtCtXl9U4/Angm9sH0jIuMVD0frMCtk1KV92/hmtYVJIMurBjj\r\nC6YjQE9GeVtJlk9vpVm2FZTfsjixSuj/HhSC0KGiioSzet6e5qwDK9jlJkKJuLf5\r\n0IwyjKVX/DJpcRz+1wYfwHeD0oWohvs2dO6A4srDewpmtVtWVhxcbD3uS3mSgS62\r\nw5hECOru5bK1ZNWz2yDdlsBztP9lUqWL++rper0W\r\n-----END CERTIFICATE-----\r\n"
        },
        transportConnections: null,
        config: {
            properties: {
                DefaultReceiveTimeout: 0
            },
            init: function () {
                this.transportConnections = new Bridge.Dictionary$2(Bridge.UInt32,RobotRaconteur.WebSocketTransportConnection)();
            }
        },
        constructor: function (node) {
            if (node === void 0) { node = null; }
    
            RobotRaconteur.Transport.prototype.$constructor.call(this, node);
    
            this.setDefaultReceiveTimeout(15000);
        },
        getIsClient: function () {
            return true;
        },
        getIsServer: function () {
            return false;
        },
        getUrlSchemeString: function () {
            return ["rr+ws", "rr+wss", "rr+tcp", "tcp", "rrs+tcp", "rrs+ws", "rrs+wss"];
        },
        canConnectService: function (url) {
            var u = RobotRaconteur.TransportUtil.parseConnectionUrl(url);
            if (Bridge.Linq.Enumerable.from(this.getUrlSchemeString()).contains(u.scheme)) {
                return true;
            }
            return false;
        },
        createTransportConnection: function (url, e) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                t, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1], $step);
                            switch ($step) {
                                case 0: {
                                    t = new RobotRaconteur.WebSocketTransportConnection(this);
                                    $task1 = t.connectTransport(url, e);
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $task1.getAwaitedResult();
                                    $tcs.setResult(t);
                                    return;
                                }
                                default: {
                                    $tcs.setResult(null);
                                    return;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        closeTransportConnection: function (e) {
            if (this.transportConnections.containsKey(e.getLocalEndpoint())) {
                this.transportConnections.get(e.getLocalEndpoint()).close();
            }
            return Bridge.Task.fromResult(0);
        },
        sendMessage: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4], $step);
                            switch ($step) {
                                case 0: {
                                    if (RobotRaconteur.NodeID.op_Inequality(m.header.senderNodeID, this.node.getNodeID())) {
                                        throw new RobotRaconteur.NodeNotFoundException("Invalid sender node");
                                    }
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    $task1 = this.transportConnections.get(m.header.senderEndpoint).sendMessage(m);
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $task1.getAwaitedResult();
                                    $step = 4;
                                    continue;
                                }
                                case 3: {
                                    throw new RobotRaconteur.ConnectionException("Connection to remote node has been closed");
                                    $step = 4;
                                    continue;
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 1 && $step <= 2 ){
                            if (Bridge.is($async_e, Bridge.KeyNotFoundException)) {
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        messageReceived: function (m) {
            this.node.messageReceived(m);
        }
    });
    
    Bridge.define('RobotRaconteur.WebSocketTransportConnection', {
        inherits: [RobotRaconteur.ITransportConnection],
        m_LocalEndpoint: 0,
        m_RemoteEndpoint: 0,
        m_RemoteNodeID: null,
        receiveTimeout: 15000,
        m_HeartbeatPeriod: 5000,
        target_nodeid: null,
        target_nodename: null,
        node: null,
        parent: null,
        m_Connected: false,
        websocket: null,
        connect_task: null,
        connecting: false,
        use_tls: false,
        tls_active: false,
        tls: null,
        recv_buf: null,
        recv_header: null,
        recv_message_len: 0,
        recv_message_pos: 0,
        send_backlog: null,
        pause_send: false,
        streamop_queue: null,
        streamop_ret: null,
        clienthandshake_recv_task: null,
        clienthandshake_connect_task: null,
        starttls_host: null,
        config: {
            init: function () {
                this.m_RemoteNodeID = RobotRaconteur.NodeID.getAny();
                this.tlastsend = new Date(-864e13);
                this.tlastrec = new Date(-864e13);
                this.tlastrec_mes = new Date(-864e13);
                this.recv_buf = new Uint8Array(10240);
                this.recv_header = new ArrayBuffer(0);
                this.send_backlog = new Bridge.List$1(RobotRaconteur.Message)();
                this.streamop_queue = new Bridge.List$1(Bridge.TaskCompletionSource)();
            }
        },
        constructor: function (parent) {
            this.parent = parent;
            this.tlastsend = Bridge.Date.utcNow();
            this.tlastrec = Bridge.Date.utcNow();
            this.tlastrec_mes = Bridge.Date.utcNow();
            this.node = parent.node;
            this.receiveTimeout = 15000;
        },
        getLocalEndpoint: function () {
            return this.m_LocalEndpoint;
        },
        getRemoteEndpoint: function () {
            return this.m_RemoteEndpoint;
        },
        getRemoteNodeID: function () {
            {
                return this.m_RemoteNodeID;
            }
        },
        connectTransport: function (url, e) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $task3, 
                $taskResult3, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                u, 
                d, 
                $e1, 
                url2, 
                a, 
                args, 
                noop, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4,5], $step);
                            switch ($step) {
                                case 0: {
                                    u = RobotRaconteur.TransportUtil.parseConnectionUrl(url);
                                    
                                    if (Bridge.String.startsWith(u.scheme, "rrs+")) {
                                        try {
                                            d = forge.tls;
                                            if (d == null) {
                                                throw new RobotRaconteur.ConnectionException("TLS not available");
                                            }
                                            this.use_tls = true;
                                        }
                                        catch ($e1) {
                                            $e1 = Bridge.Exception.create($e1);
                                            throw new RobotRaconteur.ConnectionException("TLS not available");
                                        }
                                    }
                                    
                                    if (Bridge.referenceEquals(u.scheme, "rr+tcp") || Bridge.referenceEquals(u.scheme, "rrs+tcp")) {
                                        url2 = "ws://" + u.host + ":" + u.port.toString() + u.path + "?" + Bridge.String.split(url, [63].map(function(i) {{ return String.fromCharCode(i); }}), 2)[1];
                                    }
                                    else  {
                                        if (Bridge.referenceEquals(u.scheme, "tcp")) {
                                            a = new Bridge.Dictionary$2(String,String)();
                                    
                                            if (!u.nodeid.getIsAnyNode()) {
                                                a.add("nodeid", Bridge.String.trim(u.nodeid.toString(), [123, 125]));
                                            }
                                            else  {
                                                if (!Bridge.String.isNullOrEmpty(u.nodename)) {
                                                    a.add("nodename", u.nodename);
                                                }
                                            }
                                            a.add("service", u.service);
                                    
                                            url2 = "ws://" + u.host + ":" + u.port.toString() + "?" + Bridge.toArray(Bridge.Linq.Enumerable.from(a).select($_.RobotRaconteur.WebSocketTransportConnection.f1)).join("&");
                                        }
                                        else  {
                                            if (Bridge.referenceEquals(u.scheme, "rr+ws") || Bridge.referenceEquals(u.scheme, "rrs+ws")) {
                                                url2 = "ws://" + u.host + ":" + u.port.toString() + u.path + "?" + Bridge.String.split(url, [63].map(function(i) {{ return String.fromCharCode(i); }}), 2)[1];
                                            }
                                            else  {
                                                if (Bridge.referenceEquals(u.scheme, "rr+wss") || Bridge.referenceEquals(u.scheme, "rrs+wss")) {
                                                    url2 = "wss://" + u.host + ":" + u.port.toString() + u.path + "?" + Bridge.String.split(url, [63].map(function(i) {{ return String.fromCharCode(i); }}), 2)[1];
                                                }
                                                else  {
                                                    throw new RobotRaconteur.ConnectionException("Invalid transport scheme");
                                                }
                                            }
                                        }
                                    }
                                    
                                    
                                    this.m_LocalEndpoint = e.getLocalEndpoint();
                                    this.target_nodeid = u.nodeid;
                                    this.target_nodename = u.nodename;
                                    
                                    this.websocket=new WebSocket(url2, "robotraconteur.robotraconteur.com");
                                    this.websocket.binaryType = "arraybuffer";
                                    this.websocket.onmessage = Bridge.fn.bind(this, $_.RobotRaconteur.WebSocketTransportConnection.f2);
                                    this.websocket.onopen = Bridge.fn.bind(this, $_.RobotRaconteur.WebSocketTransportConnection.f3);
                                    this.websocket.onclose = Bridge.fn.bind(this, $_.RobotRaconteur.WebSocketTransportConnection.f4);
                                    this.websocket.onerror = Bridge.fn.bind(this, $_.RobotRaconteur.WebSocketTransportConnection.f5);
                                    this.connecting = true;
                                    this.connect_task = new Bridge.TaskCompletionSource();
                                    $task1 = this.connect_task.task;
                                    $step = 1;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 1: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    this.m_Connected = true;
                                    
                                    if (this.use_tls) {
                                        $step = 2;
                                        continue;
                                    } 
                                    $step = 4;
                                    continue;
                                }
                                case 2: {
                                    $task2 = this.doClientTlsHandshake();
                                    $step = 3;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $task2.getAwaitedResult();
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    
                                    args = { item1: u.nodeid, item2: u.nodename };
                                    $task3 = this.streamOp("CreateConnection", args);
                                    $step = 5;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $taskResult3 = $task3.getAwaitedResult();
                                    noop = this.doHeartbeat();
                                    this.parent.transportConnections.add(this.m_LocalEndpoint, this);
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        onmessage: function (evt) {
            var evt2 = evt;
            var data = Bridge.as(evt2.data, ArrayBuffer);
            if (data == null) {
                this.close();
                return;
            }
            if (!this.tls_active) {
                this.onmessage2(data);
            }
            else  {
                var data2 = forge.util.binary.raw.encode(new Uint8Array(data));
                this.tls.process(data2);
            }
    
        },
        onmessage2: function (data) {
            if (this.recv_message_len === 0) {
    
                if (this.recv_header.byteLength === 0) {
                    if (data.byteLength < 8) {
                        this.recv_header = data;
                        return;
                    }
    
                    var recv_header1 = data.slice(0, 8);
                    var len = this.read_message_len(recv_header1);
                    if (len === -1) {
                        this.close();
                        return;
                    }
    
                    if (this.recv_buf.byteLength < len) {
                        this.recv_buf = new Uint8Array(len);
                    }
    
                    this.recv_message_len = len;
                    this.recv_message_pos = 0;
    
                    this.onmessage2(data);
                    return;
    
                }
                else  {
                    var data4 = new Uint8Array(((this.recv_header.byteLength + data.byteLength) | 0));
                    data4.set(new Uint8Array(this.recv_header), 0);
                    data4.set(new Uint8Array(data), this.recv_header.byteLength);
                    if (((data.byteLength + this.recv_header.byteLength) | 0) < 8) {
                        this.recv_header = data4.buffer;
                        return;
                    }
    
                    this.recv_header = new ArrayBuffer(0);
    
                    this.onmessage2(data4.buffer);
                    return;
                }
            }
            else  {
                var needed = (this.recv_message_len - this.recv_message_pos) | 0;
                var take = needed > data.byteLength ? data.byteLength : needed;
    
                this.recv_buf.set(new Uint8Array(data).subarray(0, take), this.recv_message_pos);
                this.recv_message_pos = (this.recv_message_pos + take) | 0;
    
                if (this.recv_message_pos < this.recv_message_len) {
                    //Need more data
                    return;
                }
    
                //Handle message
                var r = new RobotRaconteur.ArrayBinaryReader(this.recv_buf.buffer, 0, this.recv_message_len);
                var m = new RobotRaconteur.Message();
                m.read(r);
    
                this.recv_message_len = 0;
                this.recv_message_pos = 0;
    
                Bridge.Task.run(Bridge.fn.bind(this, function () {
                    return RobotRaconteur.Extensions.ignoreResult(this.processMessage(m));
                }));
    
                if (data.byteLength > take) {
                    //Pass extra data recursively
                    this.onmessage2(data.slice(needed));
                }
                return;
    
            }
    
        },
        read_message_len: function (data) {
            var r = new RobotRaconteur.ArrayBinaryReader(data, 0, 8);
            var seed = r.readString8(4);
            if (!Bridge.referenceEquals(seed, "RRAC")) {
                return -1;
            }
            var len = r.readUInt32();
            return (len | 0);
        },
        onopen: function (evt) {
            if (this.connecting) {
                this.connecting = false;
                var c = this.connect_task;
                this.connect_task = null;
                c.trySetResult(0);
            }
    
        },
        onclose: function (evt) {
            if (this.connecting) {
                this.connecting = false;
                var c = this.connect_task;
                this.connect_task = null;
                c.trySetException(new RobotRaconteur.ConnectionException("Could not connect to service"));
                return;
            }
    
            try {
                this.close();
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
    
        },
        onerror: function (evt) {
            if (this.connecting) {
                this.connecting = false;
                var c = this.connect_task;
                this.connect_task = null;
                c.trySetException(new RobotRaconteur.ConnectionException("Could not connect to service"));
                return;
            }
    
            try {
                this.close();
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
    
        },
        websocket_send: function (buf) {
            if (buf.byteLength < 65535) {
                this.websocket.send(buf);
            }
            else  {
                var pos = 0;
                while (pos < buf.byteLength) {
                    var l = ((buf.byteLength - pos) | 0) > 65535 ? 65535 : ((buf.byteLength - pos) | 0);
                    var buf2 = buf.slice(pos, (((l + pos) | 0)));
                    this.websocket.send(buf2);
                    pos = (pos + l) | 0;
                }
            }
        },
        sendMessage: function (m) {
            if (this.pause_send) {
                this.send_backlog.add(m);
                return Bridge.Task.fromResult(0);
            }
    
            var size = m.computeSize();
            var buf = new ArrayBuffer((size | 0));
            var w = new RobotRaconteur.ArrayBinaryWriter(buf, 0, (size | 0));
            m.write(w);
            if (!this.tls_active) {
                this.websocket_send(buf);
            }
            else  {
                this.tls.prepare(buf);
            }
            this.tlastsend = Bridge.Date.utcNow();
            return Bridge.Task.fromResult(0);
        },
        close: function () {
            this.m_Connected = false;
            try {
                this.parent.transportConnections.remove(this.m_LocalEndpoint);
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
            this.websocket.close();
            if (this.clienthandshake_recv_task != null) {
                this.clienthandshake_recv_task.trySetCanceled();
            }
            if (this.clienthandshake_connect_task != null) {
                this.clienthandshake_recv_task.trySetCanceled();
            }
            if (this.streamop_ret != null) {
                this.streamop_ret.trySetCanceled();
            }
        },
        processMessage: function (mes) {
            var $step = 0,
                $task1, 
                $task2, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                RemoteNodeID1, 
                local_ep, 
                remote_ep, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([1,2,3,4,5,6,7,8,9,10,11,12], $step);
                            switch ($step) {
    
                                case 1: {
                                    
                                    
                                    RemoteNodeID1 = this.m_RemoteNodeID;
                                    local_ep = this.m_LocalEndpoint;
                                    remote_ep = this.m_RemoteEndpoint;
                                    
                                    
                                    this.tlastrec = Bridge.Date.utcNow();
                                    
                                    if ((mes.entries.getCount() === 1) && (mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.StreamOp || mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.StreamOpRet)) {
                                        $step = 2;
                                        continue;
                                    } 
                                    $step = 7;
                                    continue;
                                }
                                case 2: {
                                    if (mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.StreamOpRet && Bridge.referenceEquals(mes.entries.getItem(0).memberName, "STARTTLS")) {
                                        $step = 3;
                                        continue;
                                    } else  {
                                        $step = 4;
                                        continue;
                                    }
                                }
                                case 3: {
                                    if (this.clienthandshake_recv_task == null) {
                                        this.close();
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    else  {
                                        this.tls_active = true;
                                        this.clienthandshake_recv_task.trySetResult(mes);
                                    }
                                    $step = 6;
                                    continue;
                                }
                                case 4: {
                                    $task1 = this.streamOpMessageReceived(mes);
                                    $step = 5;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $task1.getAwaitedResult();
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    $tcs.setResult(null);
                                    return;
                                }
                                case 7: {
                                    
                                    if (mes.entries.getCount() === 1 && (mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.StreamCheckCapability || mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.StreamCheckCapabilityRet)) {
                                        this.checkStreamCapability_MessageReceived(mes);
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    
                                    if ((mes.entries.getCount() === 1) && (mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.ConnectClientRet && remote_ep === 0)) {
                                    
                                    
                                        if (this.m_RemoteEndpoint === 0) {
                                            this.m_RemoteEndpoint = mes.header.senderEndpoint;
                                        }
                                        remote_ep = this.m_RemoteEndpoint;
                                    
                                    }
                                    
                                    
                                    
                                    if (!((mes.entries.getCount() === 1) && ((mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.ConnectionTest) || (mes.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.ConnectionTestRet)))) {
                                        $step = 8;
                                        continue;
                                    } 
                                    $step = 10;
                                    continue;
                                }
                                case 8: {
                                    this.tlastrec_mes = Bridge.Date.utcNow();
                                    $task2 = this.processMessage2(mes);
                                    $step = 9;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 9: {
                                    $task2.getAwaitedResult();
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
                                    $step = 12;
                                    continue;
                                }
                                case 11: {
                                    this.close();
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 1 && $step <= 10 ){
                            $step = 11;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        processMessage2: function (m) {
            var $step = 0,
                $task1, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([1,2,3,4,5], $step);
                            switch ($step) {
    
                                case 1: {
                                    //Transport.m_CurrentThreadTransportConnectionURL = GetConnectionURL();
                                    //Transport.m_CurrentThreadTransport = this;
                                    $task1 = this.messageReceived(m);
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $task1.getAwaitedResult();
                                    $step = 4;
                                    continue;
                                }
                                case 3: {
                                    this.close();
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    //Transport.m_CurrentThreadTransportConnectionURL = null;
                                    //Transport.m_CurrentThreadTransport = null;
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 1 && $step <= 2 ){
                            $step = 3;
                            $asyncBody();
                            return;
                        }
                        if ($step >= 1 && $step <= 3){
    
                            $step = 4;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        messageReceived: function (m) {
            var $step = 0,
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0], $step);
                            switch ($step) {
                                case 0: {
                                    this.parent.messageReceived(m);
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        packStreamOpRequest: function (command, args) {
            var mm = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.StreamOp, command);
    
            if (Bridge.referenceEquals(command, "GetRemoteNodeID")) {
    
            }
            else  {
                throw new Bridge.InvalidOperationException("Unknown StreamOp command");
            }
    
            return Bridge.Task.fromResult(mm);
    
        },
        unpackStreamOpResponse: function (response, header) {
            var command = response.memberName;
            switch (command) {
                case "GetRemoteNodeID": 
                    {
                        var n = header.senderNodeID;
                        return Bridge.Task.fromResult(n);
                    }
                case "CreateConnection": 
                    {
    
                        {
    
                            if (response.error !== RobotRaconteur.MessageErrorType.None && response.error !== RobotRaconteur.MessageErrorType.ProtocolError) {
                                throw RobotRaconteur.RobotRaconteurExceptionUtil.messageEntryToException(response);
                            }
    
                            if (!this.m_RemoteNodeID.getIsAnyNode()) {
                                if (RobotRaconteur.NodeID.op_Inequality(header.senderNodeID, this.m_RemoteNodeID)) {
                                    throw new RobotRaconteur.ConnectionException("Invalid node connection");
                                }
                            }
                            else  {
                                if (!Bridge.referenceEquals(this.target_nodename, "")) {
                                    if (!Bridge.referenceEquals(this.target_nodename, header.senderNodeName)) {
                                        throw new RobotRaconteur.ConnectionException("Invalid node connection");
                                    }
                                }
    
                                if (!this.target_nodeid.getIsAnyNode()) {
                                    if (RobotRaconteur.NodeID.op_Inequality(this.target_nodeid, header.senderNodeID)) {
                                        throw new RobotRaconteur.ConnectionException("Invalid node connection");
                                    }
                                }
                            }
                        }
    
                        var n1 = header.senderNodeID;
                        return Bridge.Task.fromResult(n1);
                    }
                default: 
                    throw new RobotRaconteur.MemberNotFoundException("Unknown command");
            }
    
        },
        processStreamOpRequest: function (request, header) {
            var command = request.memberName;
            var mmret = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.StreamOpRet, command);
    
            try {
                switch (command) {
                    case "GetRemoteNodeID": 
                        break;
                    default: 
                        throw new RobotRaconteur.ProtocolException("Unknown StreamOp Command");
                }
    
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
                mmret.error = RobotRaconteur.MessageErrorType.ProtocolError;
                mmret.addElement$1("errorname", "RobotRaconteur.ProtocolError");
                mmret.addElement$1("errorstring", "Invalid Stream Operation");
            }
    
            return Bridge.Task.fromResult(mmret);
    
        },
        streamOp: function (command, args) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $task4, 
                $taskResult4, 
                $task5, 
                $taskResult5, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                t, 
                m, 
                a, 
                mm, 
                mm1, 
                streamop_ret1, 
                $async_e, 
                t2, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,4,5,6,7,8,9,10,11,12,13], $step);
                            switch ($step) {
                                case 0: {
                                    if (args === void 0) { args = null; }
                                    t = null;
                                    
                                    
                                    if (!this.m_Connected) {
                                        throw new RobotRaconteur.ConnectionException("Transport connection closed");
                                    }
                                    
                                    if (this.streamop_ret == null) {
                                        this.streamop_ret = new Bridge.TaskCompletionSource();
                                        //streamop_ret.AttachCancellationToken(cancel, new ConnectionException("Timed out"));
                                    }
                                    else  {
                                        t = new Bridge.TaskCompletionSource();
                                        //t.AttachCancellationToken(cancel, new ConnectionException("Timed out"));
                                        this.streamop_queue.add(t);
                                    }
                                    
                                    
                                    if (t != null) {
                                        $step = 1;
                                        continue;
                                    } 
                                    $step = 3;
                                    continue;
                                }
                                case 1: {
                                    $task1 = t.task;
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    $step = 3;
                                    continue;
                                }
    
                                case 4: {
                                    m = new RobotRaconteur.Message();
                                    m.header = new RobotRaconteur.MessageHeader();
                                    m.header.receiverNodeName = "";
                                    m.header.senderNodeName = this.node.getNodeName();
                                    m.header.senderNodeID = this.node.getNodeID();
                                    m.header.receiverNodeID = this.getRemoteNodeID();
                                    
                                    
                                    if (Bridge.referenceEquals(command, "CreateConnection")) {
                                        $step = 5;
                                        continue;
                                    } else  {
                                        $step = 6;
                                        continue;
                                    }
                                }
                                case 5: {
                                    a = args;
                                    m.header.receiverNodeID = a.item1;
                                    m.header.receiverNodeName = a.item2;
                                    mm = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.StreamOp, command);
                                    m.entries.add(mm);
                                    $step = 8;
                                    continue;
                                }
                                case 6: {
                                    $task2 = this.packStreamOpRequest(command, args);
                                    $step = 7;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 7: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    mm1 = $taskResult2;
                                    m.entries.add(mm1);
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    
                                    
                                    
                                    $task3 = this.sendMessage(m);
                                    $step = 9;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 9: {
                                    $task3.getAwaitedResult();
                                    
                                    $task4 = this.streamop_ret.task;
                                    $step = 10;
                                    $task4.continueWith($asyncBody);
                                    return;
                                }
                                case 10: {
                                    $taskResult4 = $task4.getAwaitedResult();
                                    streamop_ret1 = $taskResult4; //.AwaitWithTimeout(10000);
                                    
                                    $task5 = this.unpackStreamOpResponse(streamop_ret1.entries.getItem(0), streamop_ret1.header);
                                    $step = 11;
                                    $task5.continueWith($asyncBody);
                                    return;
                                }
                                case 11: {
                                    $taskResult5 = $task5.getAwaitedResult();
                                    $returnValue = $taskResult5;
                                    $step = 12;
                                    continue;
                                }
                                case 12: {
                                    
                                    
                                    if (this.streamop_queue.getCount() === 0) {
                                        this.streamop_ret = null;
                                    }
                                    else  {
                                        this.streamop_ret = new Bridge.TaskCompletionSource();
                                        t2 = this.streamop_queue.getItem(0);
                                        this.streamop_queue.removeAt(0);
                                        t2.trySetResult(0);
                                    }
                                    
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 13;
                                    continue;
                                }
                                case 13: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ($step >= 4 && $step <= 11){
    
                            $step = 12;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        streamOpMessageReceived: function (m) {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                mm, 
                $e1, 
                command, 
                mret, 
                mmret, 
                r, 
                $async_e, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4,5,6,7], $step);
                            switch ($step) {
                                case 0: {
                                    
                                    try {
                                        mm = m.entries.getItem(0);
                                    }
                                    catch ($e1) {
                                        $e1 = Bridge.Exception.create($e1);
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    if (mm.entryType === RobotRaconteur.MessageEntryType.StreamOp) {
                                        $step = 1;
                                        continue;
                                    } else  {
                                        $step = 6;
                                        continue;
                                    }
                                }
                                case 1: {
                                    command = mm.memberName;
                                    mret = new RobotRaconteur.Message();
                                    mret.header = new RobotRaconteur.MessageHeader();
                                    mret.header.senderNodeName = this.node.getNodeName();
                                    mret.header.receiverNodeName = m.header.senderNodeName;
                                    mret.header.senderNodeID = this.node.getNodeID();
                                    mret.header.receiverNodeID = m.header.senderNodeID;
                                    $task1 = this.processStreamOpRequest(mm, m.header);
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    mmret = $taskResult1;
                                    
                                    if (mmret != null) {
                                        $step = 3;
                                        continue;
                                    } 
                                    $step = 5;
                                    continue;
                                }
                                case 3: {
                                    mret.entries.add(mmret);
                                    $task2 = this.sendMessage(mret);
                                    $step = 4;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 4: {
                                    $task2.getAwaitedResult();
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    $step = 7;
                                    continue;
                                }
                                case 6: {
                                    r = null;
                                    
                                    
                                    if (this.streamop_ret == null) {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                    r = this.streamop_ret;
                                    
                                    r.trySetResult(m);
                                    $step = 7;
                                    continue;
                                }
                                case 7: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        checkStreamCapability_MessageReceived: function (m) {
            try {
                if (m.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.StreamCheckCapability) {
                    var ret = new RobotRaconteur.Message();
                    ret.header = new RobotRaconteur.MessageHeader();
                    ret.header.senderNodeID = this.node.getNodeID();
                    ret.header.receiverNodeID = m.header.senderNodeID;
                    var mret = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.StreamCheckCapabilityRet, m.entries.getItem(0).memberName);
                    mret.servicePath = m.entries.getItem(0).servicePath;
                    var retval = new Uint32Array(1);
                    retval[0] = 0;
                    mret.addElement$1("return", retval);
                    ret.entries.add(mret);
                    this.sendMessage(ret);
                }
                else  {
                    if (m.entries.getItem(0).entryType === RobotRaconteur.MessageEntryType.StreamCheckCapabilityRet) {
                        /* TaskCompletionSource<Message> r = null;
                        lock (this)
                        {
                            if (CheckStreamCapability_ret == null)
                            {
                                return;
                            }
                            r = CheckStreamCapability_ret;
    
                        }
                        r.TrySetResult(m);*/
                    }
                }
            }
            catch ($e1) {
                $e1 = Bridge.Exception.create($e1);
            }
            ;
        },
        checkConnection: function (endpoint) {
            if (!this.m_Connected || endpoint !== this.m_LocalEndpoint) {
                throw new RobotRaconteur.ConnectionException("Transport connection closed");
            }
        },
        doHeartbeat: function () {
            var $step = 0,
                $task1, 
                $task2, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                m, 
                mm, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([1,2,3,4,5,6,7,8,9], $step);
                            switch ($step) {
    
                                case 1: {
                                    if ( this.m_Connected ) {
                                        $step = 2;
                                        continue;
                                    } 
                                    $step = 7;
                                    continue;
                                }
                                case 2: {
                                    $task1 = Bridge.Task.delay(500);
                                    $step = 3;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $task1.getAwaitedResult();
                                    
                                    
                                    if ((Bridge.Date.subdd(Bridge.Date.utcNow(), this.tlastsend)).getTotalMilliseconds() > this.m_HeartbeatPeriod) {
                                        $step = 4;
                                        continue;
                                    } 
                                    $step = 6;
                                    continue;
                                }
                                case 4: {
                                    m = new RobotRaconteur.Message();
                                    m.header = new RobotRaconteur.MessageHeader();
                                    m.header.senderNodeID = this.node.getNodeID();
                                    m.header.receiverNodeID = this.getRemoteNodeID();
                                    mm = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.ConnectionTest, "");
                                    m.entries.add(mm);
                                    
                                    $task2 = this.sendMessage(m);
                                    $step = 5;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 5: {
                                    $task2.getAwaitedResult();
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    
                                    if ((Bridge.Date.subdd(this.tlastsend, this.tlastrec)).getTotalMilliseconds() > this.receiveTimeout) {
                                        this.close();
                                    }
                                    else  {
                                        if ((Bridge.Date.subdd(Bridge.Date.utcNow(), this.tlastrec_mes)).getTotalMilliseconds() > this.node.transportInactivityTimeout) {
                                            this.close();
                                        }
                                    }
                                    
                                    $step = 1;
                                    continue;
                                }
                                case 7: {
                                    $step = 9;
                                    continue;
                                }
                                case 8: {
                                    this.close();
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 1 && $step <= 7 ){
                            $step = 8;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        doClientTlsHandshake: function () {
            var $step = 0,
                $task1, 
                $taskResult1, 
                $task2, 
                $taskResult2, 
                $task3, 
                $jumpFromFinally, 
                $tcs = new Bridge.TaskCompletionSource(), 
                $returnValue, 
                m, 
                mm, 
                cert, 
                mutualauth, 
                size, 
                buf, 
                w, 
                mret, 
                recv_nodeid, 
                recv_nodename, 
                host, 
                forge_args, 
                $t, 
                m2, 
                $async_e, 
                $async_e1, 
                $asyncBody = Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            $step = Bridge.Array.min([0,1,2,3,4,5,6,7,8,9,10], $step);
                            switch ($step) {
                                case 0: {
                                    this.clienthandshake_recv_task = new Bridge.TaskCompletionSource();
                                    this.clienthandshake_connect_task = new Bridge.TaskCompletionSource();
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    this.pause_send = true;
                                    
                                    m = new RobotRaconteur.Message();
                                    m.header = new RobotRaconteur.MessageHeader();
                                    m.header.receiverNodeID = this.target_nodeid;
                                    m.header.receiverNodeName = this.target_nodename;
                                    mm = new RobotRaconteur.MessageEntry("constructor$1", RobotRaconteur.MessageEntryType.StreamOp, "STARTTLS");
                                    cert = this.getTlsCertificate();
                                    mutualauth = cert != null;
                                    if (mutualauth) {
                                        mm.addElement$1("mutualauth", "true");
                                    }
                                    m.entries.add(mm);
                                    
                                    size = m.computeSize();
                                    buf = new ArrayBuffer((size | 0));
                                    w = new RobotRaconteur.ArrayBinaryWriter(buf, 0, (size | 0));
                                    m.write(w);
                                    this.websocket_send(buf);
                                    
                                    $task1 = this.clienthandshake_recv_task.task;
                                    $step = 2;
                                    $task1.continueWith($asyncBody);
                                    return;
                                }
                                case 2: {
                                    $taskResult1 = $task1.getAwaitedResult();
                                    mret = $taskResult1;
                                    
                                    recv_nodeid = mret.header.senderNodeID;
                                    recv_nodename = mret.header.senderNodeName;
                                    if (!this.target_nodeid.getIsAnyNode() && RobotRaconteur.NodeID.op_Inequality(this.target_nodeid, recv_nodeid)) {
                                        throw new RobotRaconteur.ConnectionException("Could not validate remote node");
                                    }
                                    if (!Bridge.String.isNullOrEmpty(this.target_nodename) && !Bridge.referenceEquals(this.target_nodename, recv_nodename)) {
                                        throw new RobotRaconteur.ConnectionException("Could not validate remote node");
                                    }
                                    if (mret.entries.getCount() !== 1) {
                                        throw new RobotRaconteur.ConnectionException("TLS handshake error");
                                    }
                                    if (mret.entries.getItem(0).entryType !== RobotRaconteur.MessageEntryType.StreamOpRet || !Bridge.referenceEquals(mret.entries.getItem(0).memberName, "STARTTLS")) {
                                        throw new RobotRaconteur.ConnectionException("TLS handshake error");
                                    }
                                    if (mutualauth && Bridge.Linq.Enumerable.from(mret.entries.getItem(0).elements).count($_.RobotRaconteur.WebSocketTransportConnection.f6) === 0) {
                                        throw new RobotRaconteur.ConnectionException("TLS handshake error");
                                    }
                                    
                                    host = "Robot Raconteur Node " + recv_nodeid.toString();
                                    
                                    this.starttls_host = host;
                                    
                                    forge_args = {};
                                    forge_args["server"] = false;
                                    forge_args["virtualHost"] = host;
                                    forge_args["verify"] = Bridge.fn.bind(this, this.verify_remote_cert);
                                    forge_args["connected"] = Bridge.fn.bind(this, this.on_tls_connected);
                                    forge_args["tlsDataReady"] = Bridge.fn.bind(this, this.on_tls_tlsDataReady);
                                    forge_args["dataReady"] = Bridge.fn.bind(this, this.on_tls_dataReady);
                                    forge_args["closed"] = Bridge.fn.bind(this, this.on_tls_closed);
                                    forge_args["error"] = Bridge.fn.bind(this, this.on_tls_error);
                                    forge_args["caStore"] = [RobotRaconteur.WebSocketTransport.robot_Raconteur_Node_Node_Root_CA];
                                    
                                    forge.oids['1.3.6.1.4.1.45455.1.1.3.1'] = 'robotRaconteurRoot';
                                    forge.oids['1.3.6.1.4.1.45455.1.1.3.2'] = 'robotRaconteurIntermediate';
                                    forge.oids['1.3.6.1.4.1.45455.1.1.3.3'] = 'robotRaconteurNode';
                                    
                                    this.tls = forge.tls.createConnection(forge_args);
                                    this.tls.handshake();
                                    
                                    $task2 = this.clienthandshake_connect_task.task;
                                    $step = 3;
                                    $task2.continueWith($asyncBody);
                                    return;
                                }
                                case 3: {
                                    $taskResult2 = $task2.getAwaitedResult();
                                    
                                    this.pause_send = false;
                                    $t = Bridge.getEnumerator(this.send_backlog);
                                    $step = 4;
                                    continue;
                                }
                                case 4: {
                                    if ($t.moveNext()) {
                                        m2 = $t.getCurrent();
                                        $step = 5;
                                        continue;
                                    }
                                    $step = 7;
                                    continue;
                                }
                                case 5: {
                                    $task3 = this.sendMessage(m2);
                                    $step = 6;
                                    $task3.continueWith($asyncBody);
                                    return;
                                }
                                case 6: {
                                    $task3.getAwaitedResult();
                                    $step = 4;
                                    continue;
                                }
                                case 7: {
                                    $step = 9;
                                    continue;
                                }
                                case 8: {
                                    this.close();
                                    throw $async_e;
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    this.clienthandshake_recv_task = null;
                                    this.clienthandshake_connect_task = null;
                                    
                                    if ($jumpFromFinally > -1) {
                                        $step = $jumpFromFinally;
                                        $jumpFromFinally = null;
                                    } else if ($async_e) {
                                        $tcs.setException($async_e);
                                        return;
                                    } else if (Bridge.isDefined($returnValue)) {
                                        $tcs.setResult($returnValue);
                                        return;
                                    }
                                    $step = 10;
                                    continue;
                                }
                                case 10: {
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
                        $async_e = Bridge.Exception.create($async_e1);
                        if ( $step >= 1 && $step <= 7 ){
                            $step = 8;
                            $asyncBody();
                            return;
                        }
                        if ($step >= 1 && $step <= 8){
    
                            $step = 9;
                            $asyncBody();
                            return;
                        }
                        $tcs.setException($async_e);
                    }
                }, arguments);
    
            $asyncBody();
            return $tcs.task;
        },
        getTlsCertificate: function () {
            //TODO: implement client certificate
            return null;
        },
        verify_remote_cert: function (connection, verified, depth, certs) {
            if (Bridge.referenceEquals(depth, 0)) {
                var cn_good = false;
                var attr = certs[0].subject.attributes;
                for (var i = 0; i < attr.length; i = (i + 1) | 0) {
                    if (Bridge.referenceEquals(attr[i].name, "commonName")) {
                        if (Bridge.referenceEquals(attr[i].value, this.starttls_host)) {
                            cn_good = true;
                        }
                    }
                }
    
                if (!cn_good) {
                    return false;
                }
    
                var extension_good = false;
                var ext = certs[0].extensions;
                for (var i1 = 0; i1 < ext.length; i1 = (i1 + 1) | 0) {
                    if (Bridge.referenceEquals(ext[i1].id, "1.3.6.1.4.1.45455.1.1.3.3")) {
                        extension_good = true;
                    }
                }
                //TODO: implement when certificates ready
                //if (!extension_good) return false;
    
            }
            else  {
                var extension_good1 = false;
                var ext1 = certs[depth].extensions;
                for (var i2 = 0; i2 < ext1.length; i2 = (i2 + 1) | 0) {
                    if (Bridge.referenceEquals(ext1[i2].id, "1.3.6.1.4.1.45455.1.1.3.2")) {
                        extension_good1 = true;
                    }
                }
                if (!extension_good1) {
                    return false;
                }
    
            }
    
            //TODO: Verify the OIDs of critical extensions            
            return verified;
        },
        on_tls_connected: function (connection) {
            if (this.clienthandshake_connect_task != null) {
                this.clienthandshake_connect_task.trySetResult(0);
            }
        },
        on_tls_tlsDataReady: function (connection) {
            var buf = forge.util.binary.raw.decode(connection.tlsData.getBytes());
            if (buf.length > 0) {
                this.websocket_send(buf.buffer);
            }
        },
        on_tls_dataReady: function (connection) {
            var dat = forge.util.binary.raw.decode(connection.data.getBytes());
            this.onmessage2(dat.buffer);
        },
        on_tls_closed: function (connection) {
            this.close();
        },
        on_tls_error: function (connection, error) {
            console.log("TLS error: " + error.message);
            this.close();
        }
    });
    
    Bridge.ns("RobotRaconteur.WebSocketTransportConnection", $_)
    
    Bridge.apply($_.RobotRaconteur.WebSocketTransportConnection, {
        f1: function (x) {
            return x.key + "=" + x.value;
        },
        f2: function (evt) {
            this.onmessage(evt);
        },
        f3: function (evt) {
            this.onopen(evt);
        },
        f4: function (evt) {
            this.onclose(evt);
        },
        f5: function (evt) {
            this.onerror(evt);
        },
        f6: function (x) {
            return Bridge.referenceEquals(x.elementName, "mutualauth") && Bridge.referenceEquals(x.castData(String).toLowerCase(), "true");
        }
    });
    
    Bridge.define('RobotRaconteur.WireDefinition', {
        inherits: [RobotRaconteur.MemberDefinition],
        type: null,
        constructor: function (ServiceEntry) {
            RobotRaconteur.MemberDefinition.prototype.$constructor.call(this, ServiceEntry);
    
        },
        toString: function () {
            var t = new RobotRaconteur.TypeDefinition("constructor$1", this.type);
            t.member = this;
            t.name = this.name;
    
            return Bridge.String.format("wire {0}", t.toString());
    
        },
        fromString: function (s) {
            var sp = RobotRaconteur.Extensions.splitEmpty$1(s.trim(), 2);
    
            if (!Bridge.referenceEquals(sp[0].trim(), "wire")) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Format Error");
            }
    
            if (sp.length !== 2) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error near: " + s);
            }
    
            this.type = new RobotRaconteur.TypeDefinition("constructor");
            this.type.member = this;
            this.type.fromString(sp[1]);
            if (Bridge.String.isNullOrWhiteSpace(this.type.name)) {
                throw new RobotRaconteur.RobotRaconteurParseException("constructor", "Parse error");
            }
            this.name = this.type.name;
            this.type.name = "packettype";
    
        }
    });
    
    Bridge.init();
})(this);
