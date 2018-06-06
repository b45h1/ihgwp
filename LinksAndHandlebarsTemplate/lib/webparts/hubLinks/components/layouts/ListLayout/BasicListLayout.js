"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var strings = require("hubLinksStrings");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var LLStyles_module_scss_1 = require("./LLStyles.module.scss");
var BasicListLayout = (function () {
    function BasicListLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(BasicListLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    BasicListLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("ul", { className: LLStyles_module_scss_1.default["hubLinks"] + (this.webpart.props.isEdit ? " " + LLStyles_module_scss_1.default["edit"] : "") },
            items &&
                items.map(function (item) {
                    return (React.createElement("span", null,
                        React.createElement("li", { className: "listItemFullWidth", key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item) },
                            React.createElement("i", { className: "fa " +
                                    //(item.Icon == "" ? "fa-angle-right" : item.Icon)+ " " + 
                                    (item.Icon == "" || item.Icon == null ? " fa-angle-right " :
                                        (item.Icon.indexOf("fa-") > -1 ? item.Icon : "ms-Icon ms-Icon--" + item.Icon)) +
                                    " " + LLStyles_module_scss_1.default["faIcon"], "aria-hidden": "true" }),
                            React.createElement("a", { className: LLStyles_module_scss_1.default["linktitle"], href: item.URL, target: item.NewTab ? "_blank" : "" }, item.Title),
                            React.createElement("p", { className: LLStyles_module_scss_1.default["linkdescription"] }, item.Description),
                            isEditMode &&
                                React.createElement("div", { className: LLStyles_module_scss_1.default["editControls"] },
                                    React.createElement(Button_1.DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: LLStyles_module_scss_1.default["right-button"] }),
                                    React.createElement(Button_1.DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: LLStyles_module_scss_1.default["right-button"] }),
                                    React.createElement("i", { className: "ms-Icon ms-Icon--Move " + LLStyles_module_scss_1.default["left-button"], id: "drag-handle", "aria-hidden": "true" })))));
                }),
            (!items || items.length < 1) && isEditMode &&
                Array.apply(null, Array(1 - (items ? items.length : 0))).map(function (o, i) {
                    return (React.createElement("li", { className: "col-md-4 " + LLStyles_module_scss_1.default["emptyBox"] },
                        React.createElement("div", { role: "button", onClick: _this.webpart.openLinkPicker.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                })));
    };
    return BasicListLayout;
}());
exports.default = BasicListLayout;

//# sourceMappingURL=BasicListLayout.js.map
