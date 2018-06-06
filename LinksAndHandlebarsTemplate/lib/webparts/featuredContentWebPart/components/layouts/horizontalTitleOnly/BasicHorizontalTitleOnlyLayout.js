"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var strings = require("featuredContentWebPartStrings");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FeaturedContentFactory_1 = require("../FeaturedContentFactory");
var Styles_module_scss_1 = require("./Styles.module.scss");
var BasicHorizontalTitleOnlyLayout = (function () {
    function BasicHorizontalTitleOnlyLayout(webpart) {
        this.webpart = webpart;
    }
    Object.defineProperty(BasicHorizontalTitleOnlyLayout.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    BasicHorizontalTitleOnlyLayout.prototype.createNewItemFromLink = function (event) {
        this.webpart.props.resetActiveIndex();
        this.webpart.openLinkPicker(event);
    };
    BasicHorizontalTitleOnlyLayout.prototype.render = function (items, isEditMode) {
        var _this = this;
        return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content-item"] + " col-md-4 " + (isEditMode ? Styles_module_scss_1.default["edit"] : ""), key: "item-" + items.indexOf(item), role: "link", id: "item-" + items.indexOf(item), draggable: isEditMode, onDragStart: _this.webpart.startDrag.bind(_this.webpart), onMouseDown: _this.webpart.mouseDragDown.bind(_this.webpart), onDragEnter: _this.webpart.moveItem.bind(_this.webpart), onDragEnd: _this.webpart.endDrag.bind(_this.webpart), "data-index": items.indexOf(item) },
                        React.createElement("div", { className: Styles_module_scss_1.default["featured-content-picture-container"] },
                            React.createElement("img", { src: item["Image"] + FeaturedContentFactory_1.default.getWidthHeightQueryStringAppendForImage(item.Image), className: "largepictureimg", alt: item.ImageAlternate })),
                        React.createElement("div", { className: Styles_module_scss_1.default["featured-content-title"] }, item.Title),
                        React.createElement("a", { className: Styles_module_scss_1.default["featured-content-link"], href: item.URL, target: item.NewTab ? "_blank" : "" }),
                        isEditMode &&
                            React.createElement("div", { className: Styles_module_scss_1.default["edit-controls"] },
                                React.createElement(Button_1.DefaultButton, { icon: "Clear", onClick: _this.webpart.deleteBox.bind(_this.webpart), className: Styles_module_scss_1.default["right-button"] }),
                                React.createElement(Button_1.DefaultButton, { icon: "Edit", onClick: _this.webpart.editBox.bind(_this.webpart), className: Styles_module_scss_1.default["right-button"] }),
                                React.createElement("i", { className: "ms-Icon ms-Icon--Move " + Styles_module_scss_1.default["left-button"], id: "drag-handle", "aria-hidden": "true" }))));
                }),
            (!items || items.length < 3) && isEditMode &&
                Array.apply(null, Array(3 - (items ? items.length : 0))).map(function (o, i) {
                    return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content-item"] + " col-md-4 " + Styles_module_scss_1.default["empty"] },
                        React.createElement("div", { role: "button", onClick: _this.webpart.createNewItemFromLink.bind(_this.webpart) }, strings.PlaceholderButtonText)));
                }),
            React.createElement("div", { className: Styles_module_scss_1.default["clear"] })));
    };
    return BasicHorizontalTitleOnlyLayout;
}());
exports.default = BasicHorizontalTitleOnlyLayout;

//# sourceMappingURL=BasicHorizontalTitleOnlyLayout.js.map
