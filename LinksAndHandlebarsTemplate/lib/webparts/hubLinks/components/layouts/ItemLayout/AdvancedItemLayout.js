"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ILStyles_module_scss_1 = require("./ILStyles.module.scss");
var AdvancedItemLayoutLayout = (function () {
    function AdvancedItemLayoutLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(AdvancedItemLayoutLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    AdvancedItemLayoutLayout.prototype.render = function (items, isEditMode) {
        return (React.createElement("ul", { className: ILStyles_module_scss_1.default["hubLinks"] + " " + ILStyles_module_scss_1.default["blue"] + (this.webpart.props.isEdit ? " " + ILStyles_module_scss_1.default["edit"] : "") },
            items &&
                items.map(function (item) {
                    return (React.createElement("li", null,
                        React.createElement("i", { className: "fa " + item.Icon + " " + ILStyles_module_scss_1.default["faIcon"], "aria-hidden": "true" }),
                        React.createElement("a", { className: ILStyles_module_scss_1.default["linktitle"], href: item.URL, target: item.NewTab ? "_blank" : "" }, item.Title),
                        React.createElement("p", { className: ILStyles_module_scss_1.default["linkdescription"] }, item.Description)));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
    };
    return AdvancedItemLayoutLayout;
}());
exports.default = AdvancedItemLayoutLayout;

//# sourceMappingURL=AdvancedItemLayout.js.map
