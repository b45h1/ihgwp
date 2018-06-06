"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FeaturedContentFactory_1 = require("../FeaturedContentFactory");
var Styles_module_scss_1 = require("./Styles.module.scss");
var urlField = "URL";
var imageField = "Image";
var contentField = "Content";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var AdvancedStackedLayout = (function () {
    function AdvancedStackedLayout() {
    }
    AdvancedStackedLayout.prototype.render = function (items, isEditMode) {
        return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content-item"] },
                        React.createElement("div", { role: "presentation", className: Styles_module_scss_1.default["box-container"] },
                            React.createElement("div", { className: Styles_module_scss_1.default["image"] },
                                React.createElement("a", { className: Styles_module_scss_1.default["featured-content-link"], href: item[urlField], target: item[openNewTabField] ? "_blank" : "" }),
                                item[imageField] &&
                                    React.createElement("img", { src: item[imageField] + FeaturedContentFactory_1.default.getWidthHeightQueryStringAppendForImage(item[imageField]) })),
                            React.createElement("div", { className: Styles_module_scss_1.default["content"] },
                                React.createElement("div", { className: Styles_module_scss_1.default["title"] },
                                    React.createElement("a", { className: Styles_module_scss_1.default["featured-content-link"], href: item[urlField], target: item[openNewTabField] ? "_blank" : "" }, item[urlField + "_text"])),
                                React.createElement("span", { className: Styles_module_scss_1.default["description"] }, item[descriptionField]),
                                React.createElement("span", { className: Styles_module_scss_1.default["rich-text-field"] },
                                    item[contentField],
                                    ">")))));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part."),
            React.createElement("div", { className: Styles_module_scss_1.default["clear"] })));
    };
    return AdvancedStackedLayout;
}());
exports.default = AdvancedStackedLayout;

//# sourceMappingURL=AdvancedStackedAlternatingLayout.js.map
