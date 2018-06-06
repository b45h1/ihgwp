"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FeaturedContentFactory_1 = require("../FeaturedContentFactory");
var Styles_module_scss_1 = require("./Styles.module.scss");
var urlField = "URL";
var imageField = "Image";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var AdvancedHorizontalTitleOnlyLayout = (function () {
    function AdvancedHorizontalTitleOnlyLayout() {
    }
    AdvancedHorizontalTitleOnlyLayout.prototype.render = function (items, isEditMode) {
        return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content"] },
            items &&
                items.map(function (item) {
                    return (React.createElement("div", { className: Styles_module_scss_1.default["featured-content-item"] + " col-md-4" },
                        React.createElement("div", { className: Styles_module_scss_1.default["featured-content-picture-container"] }, item["Image"] &&
                            React.createElement("img", { src: item["Image"] + FeaturedContentFactory_1.default.getWidthHeightQueryStringAppendForImage(item.Image), className: "largepictureimg", alt: item.ImageAlternate })),
                        React.createElement("div", { className: Styles_module_scss_1.default["featured-content-title"] }, item[urlField + "_text"]),
                        React.createElement("a", { className: Styles_module_scss_1.default["featured-content-link"], href: item[urlField], target: item[openNewTabField] ? "_blank" : "" })));
                }),
            !items && isEditMode &&
                React.createElement("div", null, "Please configure the list mapping in the property pane of this web part."),
            React.createElement("div", { className: Styles_module_scss_1.default["clear"] })));
    };
    return AdvancedHorizontalTitleOnlyLayout;
}());
exports.default = AdvancedHorizontalTitleOnlyLayout;

//# sourceMappingURL=AdvancedHorizontalTitleOnlyLayout.js.map
