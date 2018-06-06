"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var GLLStyles_module_scss_1 = require("./GLLStyles.module.scss");
var BasicGroupedListLayout = (function () {
    function BasicGroupedListLayout(webpart) {
        this.groupDefault = {};
        this.webpart = webpart;
        if (!webpart.props.defaultExpand) {
            this.groupDefault['data-expanded'] = true;
        }
    }
    Object.defineProperty(BasicGroupedListLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    BasicGroupedListLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("div", { className: GLLStyles_module_scss_1.default["hubLinksPanel"] + (this.webpart.props.isEdit ? " " + GLLStyles_module_scss_1.default["edit"] : "") },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", __assign({ className: GLLStyles_module_scss_1.default["grouped"] + " " }, _this.groupDefault, { onClick: _this.webpart.toggleGroup.bind(_this), "data-group": "group-" + item.Heading.Title }),
                        React.createElement("div", { role: "button", className: GLLStyles_module_scss_1.default["groupHeader"] },
                            item.Heading.Title,
                            React.createElement("div", { className: GLLStyles_module_scss_1.default["expand"] },
                                React.createElement("i", { className: "fa fa-angle-right", "aria-hidden": "true" })),
                            React.createElement("div", { className: GLLStyles_module_scss_1.default["collapse"] },
                                React.createElement("i", { className: "fa fa-angle-down", "aria-hidden": "true" }))),
                        React.createElement("ul", null, item.Links && item.Links.map(function (link) {
                            return (React.createElement("li", { className: GLLStyles_module_scss_1.default["linkItem"], key: "item-" + link.index + link.Title.replace(" ", ""), role: "link", draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": link.index },
                                link.Icon && link.Icon.length > 0 &&
                                    // <i className={"fa "+link.Icon + " " + gllStyles["faIcon"]} aria-hidden="true"/>
                                    React.createElement("i", { className: "fa " +
                                            //(item.Icon == "" ? "fa-angle-right" : item.Icon)+ " " + 
                                            (link.Icon == "" || link.Icon == null ? " fa-angle-right " :
                                                (link.Icon.indexOf("fa-") > -1 ? link.Icon : "ms-Icon ms-Icon--" + link.Icon)) +
                                            " " + GLLStyles_module_scss_1.default["faIcon"], "aria-hidden": "true" }),
                                React.createElement("a", { className: GLLStyles_module_scss_1.default["linktitle"], href: link.URL, target: link.NewTab ? "_blank" : "" }, link.Title),
                                _this.webpart.props.showDescription &&
                                    React.createElement("p", { className: GLLStyles_module_scss_1.default["linkdescription"] }, link.Description),
                                isEditMode &&
                                    React.createElement("div", { className: GLLStyles_module_scss_1.default["editControls"] },
                                        React.createElement(Button_1.DefaultButton, { iconProps: { iconName: "Clear" }, onClick: _this.webpart.deleteBox.bind(_this.webpart), className: GLLStyles_module_scss_1.default["right-button"] }),
                                        React.createElement(Button_1.DefaultButton, { iconProps: { iconName: "Edit" }, onClick: _this.webpart.editBox.bind(_this.webpart), className: GLLStyles_module_scss_1.default["right-button"] }),
                                        React.createElement("i", { className: "ms-Icon ms-Icon--Move " + GLLStyles_module_scss_1.default["left-button"], id: "drag-handle", "aria-hidden": "true" }))));
                        }))));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
    };
    return BasicGroupedListLayout;
}());
exports.default = BasicGroupedListLayout;

//# sourceMappingURL=SidePanelGroupedListLayout.js.map
