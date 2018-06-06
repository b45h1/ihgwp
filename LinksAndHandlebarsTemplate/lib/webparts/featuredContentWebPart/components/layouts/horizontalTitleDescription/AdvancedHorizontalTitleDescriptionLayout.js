"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FeaturedContentFactory_1 = require("../FeaturedContentFactory");
var Styles_module_scss_1 = require("./Styles.module.scss");
var AdvancedHorizontalTitleDescriptionLayout = (function () {
    function AdvancedHorizontalTitleDescriptionLayout() {
    }
    AdvancedHorizontalTitleDescriptionLayout.prototype.render = function (items, isEditMode) {
        return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content-item"] + " col-md-4" },
                        React.createElement("div", { className: Styles_module_scss_1.default["featured-content-picture-container"] }, item["Image"] &&
                            React.createElement("img", { src: item["Image"] + FeaturedContentFactory_1.default.getWidthHeightQueryStringAppendForImage(item.Image), className: "largepictureimg", alt: item.ImageAlternate })),
                        React.createElement("div", { className: Styles_module_scss_1.default["featured-content-title"] }, item.Title),
                        React.createElement("div", { className: Styles_module_scss_1.default["featured-content-desc"], dangerouslySetInnerHTML: { __html: item.Description } }),
                        React.createElement("a", { className: Styles_module_scss_1.default["featured-content-link"], href: item.URL, target: item.NewTab ? "_blank" : "" })));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part."),
            React.createElement("div", { className: Styles_module_scss_1.default["clear"] })));
    };
    return AdvancedHorizontalTitleDescriptionLayout;
}());
exports.default = AdvancedHorizontalTitleDescriptionLayout;

//# sourceMappingURL=AdvancedHorizontalTitleDescriptionLayout.js.map
