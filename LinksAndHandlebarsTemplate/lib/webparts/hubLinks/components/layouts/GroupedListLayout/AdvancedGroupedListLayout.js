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
var GLLStyles_module_scss_1 = require("./GLLStyles.module.scss");
var AdvancedGroupedListLayout = (function () {
    function AdvancedGroupedListLayout(webpart) {
        this.groupDefault = {};
        this.webpart = webpart;
        if (webpart.props.defaultExpand) {
            this.groupDefault['data-expanded'] = true;
        }
    }
    Object.defineProperty(AdvancedGroupedListLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    AdvancedGroupedListLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("div", { className: GLLStyles_module_scss_1.default["hubLinks"] + (this.webpart.props.isEdit ? " " + GLLStyles_module_scss_1.default["edit"] : "") },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", __assign({ className: GLLStyles_module_scss_1.default["grouped"] }, _this.groupDefault, { "data-group": true, onClick: _this.webpart.toggleGroup.bind(_this) }),
                        React.createElement("div", { role: "button", className: GLLStyles_module_scss_1.default["groupHeader"] },
                            item.Heading.Title,
                            React.createElement("div", { className: GLLStyles_module_scss_1.default["expand"] },
                                React.createElement("i", { className: "fa fa-angle-right", "aria-hidden": "true" })),
                            React.createElement("div", { className: GLLStyles_module_scss_1.default["collapse"] },
                                React.createElement("i", { className: "fa fa-angle-down", "aria-hidden": "true" }))),
                        React.createElement("ul", null, item.Links && item.Links.map(function (link) {
                            return (React.createElement("li", { className: GLLStyles_module_scss_1.default["linkItem"] },
                                link.Icon && link.Icon.length > 0 &&
                                    React.createElement("i", { className: "fa " + link.Icon + " " + GLLStyles_module_scss_1.default["faIcon"], "aria-hidden": "true" }),
                                React.createElement("a", { className: GLLStyles_module_scss_1.default["linktitle"], href: link.URL, target: link.NewTab ? "_blank" : "" }, link.Title),
                                _this.webpart.props.showDescription &&
                                    React.createElement("p", { className: GLLStyles_module_scss_1.default["linkdescription"] }, link.Description)));
                        }))));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part.")));
    };
    return AdvancedGroupedListLayout;
}());
exports.default = AdvancedGroupedListLayout;

//# sourceMappingURL=AdvancedGroupedListLayout.js.map
