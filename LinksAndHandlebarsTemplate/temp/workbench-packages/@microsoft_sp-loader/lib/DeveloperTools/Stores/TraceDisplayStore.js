var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { _LogEvent } from '@microsoft/sp-diagnostics';
import BaseStore from './BaseStore';
import strings from './../Components/DeveloperModules/TraceDisplay/TraceDisplay.resx';
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["all"] = 0] = "all";
    LogLevel[LogLevel["verbose"] = 1] = "verbose";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["warning"] = 3] = "warning";
    LogLevel[LogLevel["error"] = 4] = "error";
})(LogLevel = LogLevel || (LogLevel = {}));
var TraceDisplayStore = (function (_super) {
    __extends(TraceDisplayStore, _super);
    function TraceDisplayStore() {
        var _this = _super.call(this) || this;
        _this._filter = {
            level: { all: true, verbose: true, info: true, warning: true, error: true, none: true },
            source: { all: true, none: true },
            scope: { all: true, none: true }
        };
        _this._traces = [];
        return _this;
    }
    Object.defineProperty(TraceDisplayStore, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new TraceDisplayStore();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraceDisplayStore.prototype, "traces", {
        get: function () {
            var _this = this;
            var errorMessage = undefined;
            var data = _LogEvent.logManager.events;
            this._traces = [];
            if (!data) {
                errorMessage = strings.ErrorAccessingTraceDataErrorMessage;
            }
            else {
                data.forEach(function (value) {
                    if (value) {
                        _this._traces.push(value);
                    }
                });
            }
            return this._traces;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraceDisplayStore.prototype, "currentFilter", {
        get: function () {
            return this._filter;
        },
        enumerable: true,
        configurable: true
    });
    TraceDisplayStore.prototype.applyTraceFilter = function (filter) {
        this._filter = filter;
        this.emitChange();
    };
    return TraceDisplayStore;
}(BaseStore));
export { TraceDisplayStore };
export default TraceDisplayStore.instance;
