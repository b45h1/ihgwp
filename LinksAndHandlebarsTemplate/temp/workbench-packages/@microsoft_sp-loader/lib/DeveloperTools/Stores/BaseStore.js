var BaseStore = (function () {
    function BaseStore() {
        this._isDisposed = false;
        this._listeners = [];
        this._isDisposed = false;
    }
    BaseStore.prototype.addListener = function (listener) {
        if (!this._isDisposed) {
            this._listeners.push(listener);
        }
    };
    BaseStore.prototype.removeListener = function (listener) {
        if (!this._isDisposed) {
            var listenerIdx = this._listeners.indexOf(listener);
            if (listenerIdx > -1) {
                this._listeners.splice(listenerIdx, 1);
            }
        }
    };
    BaseStore.prototype.removeAllListeners = function () {
        this._listeners = [];
    };
    BaseStore.prototype.count = function () {
        return !this._isDisposed ? this._listeners.length : 0;
    };
    BaseStore.prototype.emitChange = function () {
        if (!this._isDisposed) {
            this._listeners.forEach(function (listener) { return listener(); });
        }
    };
    BaseStore.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._listeners.splice(0);
            this._listeners = [];
            this._isDisposed = true;
        }
    };
    return BaseStore;
}());
export default BaseStore;
