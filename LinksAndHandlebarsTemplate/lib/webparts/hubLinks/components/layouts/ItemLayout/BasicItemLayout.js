"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var strings = require("hubLinksStrings");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ILStyles_module_scss_1 = require("./ILStyles.module.scss");
var BasicHorizontalTitleLayout = (function () {
    function BasicHorizontalTitleLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(BasicHorizontalTitleLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    // componentDidUpdate(){
    //   this.columnWidth = document.getElementById("myUnorderList");
    //   if(this.columnWidth != null){
    //     console.log("here is the width ====>>> " + this.columnWidth.offsetWidth);
    //     console.log(this.columnWidth);
    //   }
    // }
    BasicHorizontalTitleLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("ul", { id: "myUnorderList", className: ILStyles_module_scss_1.default["hubLinks"] + " ms-CommandBarItem-iconColor " + ILStyles_module_scss_1.default["blue"] + (this.webpart.props.isEdit ? " " + ILStyles_module_scss_1.default["edit"] : "") },
            items &&
                items.map(function (item) {
                    return (React.createElement("span", null, items.indexOf(item) <= _this.webpart.props.itemToDisplay - 1 &&
                        React.createElement("li", { className: "listItemFullWidth", key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item) },
                            React.createElement("i", { className: "fa " +
                                    //(item.Icon == "" ? "fa-angle-right" : item.Icon)+ " " + 
                                    (item.Icon == "" || item.Icon == null ? " fa-angle-right " :
                                        (item.Icon.indexOf("fa-") > -1 ? item.Icon : "ms-Icon ms-Icon--" + item.Icon)) +
                                    " " + ILStyles_module_scss_1.default["faIcon"], "aria-hidden": "true" }),
                            React.createElement("a", { className: ILStyles_module_scss_1.default["linktitle"], href: item.URL, target: item.NewTab ? "_blank" : "" }, item.Title),
                            React.createElement("p", { className: ILStyles_module_scss_1.default["linkdescription"] }, item.Description),
                            isEditMode &&
                                React.createElement("div", { className: ILStyles_module_scss_1.default["editControls"] },
                                    React.createElement(Button_1.DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: ILStyles_module_scss_1.default["right-button"] }),
                                    React.createElement(Button_1.DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: ILStyles_module_scss_1.default["right-button"] }),
                                    React.createElement("i", { className: "ms-Icon ms-Icon--Move " + ILStyles_module_scss_1.default["left-button"], id: "drag-handle", "aria-hidden": "true" })))));
                }),
            (!items || items.length < 1) && isEditMode &&
                Array.apply(null, Array(1 - (items ? items.length : 0))).map(function (o, i) {
                    return (React.createElement("li", { className: "col-md-4 " + ILStyles_module_scss_1.default["emptyBox"] },
                        React.createElement("div", { role: "button", onClick: _this.webpart.openLinkPicker.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                })));
    };
    return BasicHorizontalTitleLayout;
}());
exports.default = BasicHorizontalTitleLayout;

//# sourceMappingURL=BasicItemLayout.js.map
