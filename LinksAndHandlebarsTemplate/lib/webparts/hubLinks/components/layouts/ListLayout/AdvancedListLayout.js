"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LLStyles_module_scss_1 = require("./LLStyles.module.scss");
var AdvancedListLayout = (function () {
    function AdvancedListLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(AdvancedListLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    AdvancedListLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("ul", { id: "myID", className: LLStyles_module_scss_1.default["hubLinks"] + (this.webpart.props.isEdit ? " " + LLStyles_module_scss_1.default["edit"] : "") },
            items &&
                items.map(function (item) {
                    return (React.createElement("li", null,
                        item.Icon && item.Icon.length > 0 &&
                            React.createElement("i", { className: "fa " + item.Icon + " " + LLStyles_module_scss_1.default["faIcon"], "aria-hidden": "true" }),
                        React.createElement("a", { className: LLStyles_module_scss_1.default["linktitle"], href: item.URL, target: item.NewTab ? "_blank" : "" }, item.Title),
                        _this.webpart.props.showDescription &&
                            React.createElement("p", { className: LLStyles_module_scss_1.default["linkdescription"] }, item.Description)));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
    };
    return AdvancedListLayout;
}());
exports.default = AdvancedListLayout;

//# sourceMappingURL=AdvancedListLayout.js.map
