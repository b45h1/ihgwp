"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FeatureContentLayout_1 = require("./FeatureContentLayout");
var AdvancedHorizontalTitleOnlyLayout_1 = require("./horizontalTitleOnly/AdvancedHorizontalTitleOnlyLayout");
var BasicHorizontalTitleOnlyLayout_1 = require("./horizontalTitleOnly/BasicHorizontalTitleOnlyLayout");
var AdvancedHorizontalTitleDescriptionLayout_1 = require("./horizontalTitleDescription/AdvancedHorizontalTitleDescriptionLayout");
var BasicHorizontalTitleDescriptionLayout_1 = require("./horizontalTitleDescription/BasicHorizontalTitleDescriptionLayout");
var AdvancedStackedLayout_1 = require("./stacked/AdvancedStackedLayout");
var BasicStackedLayout_1 = require("./stacked/BasicStackedLayout");
var AdvancedStackedAlternatingLayout_1 = require("./stackedAlternating/AdvancedStackedAlternatingLayout");
var BasicStackedAlternatingLayout_1 = require("./stackedAlternating/BasicStackedAlternatingLayout");
var FeaturedContentFactory = (function () {
    function FeaturedContentFactory() {
    }
    FeaturedContentFactory.getLayout = function (layout, isAdvancedMode, webPart) {
        if (!isAdvancedMode) {
            switch (layout) {
                case FeatureContentLayout_1.FeaturedContentLayout.HorizontalTitleAndDescription: return new BasicHorizontalTitleDescriptionLayout_1.default(webPart);
                case FeatureContentLayout_1.FeaturedContentLayout.Vertical: return new BasicStackedLayout_1.default(webPart);
                case FeatureContentLayout_1.FeaturedContentLayout.VerticalAlternating: return new BasicStackedAlternatingLayout_1.default(webPart);
                default: return new BasicHorizontalTitleOnlyLayout_1.default(webPart);
            }
        }
        else {
            switch (layout) {
                case FeatureContentLayout_1.FeaturedContentLayout.HorizontalTitleAndDescription: return new AdvancedHorizontalTitleDescriptionLayout_1.default();
                case FeatureContentLayout_1.FeaturedContentLayout.Vertical: return new AdvancedStackedLayout_1.default();
                case FeatureContentLayout_1.FeaturedContentLayout.VerticalAlternating: return new AdvancedStackedAlternatingLayout_1.default();
                default: return new AdvancedHorizontalTitleOnlyLayout_1.default();
            }
        }
    };
    FeaturedContentFactory.getWidthHeightQueryStringAppendForImage = function (imageUrl) {
        if (imageUrl.indexOf(window.location.origin) > -1 && imageUrl.indexOf("?") > -1) {
            return "&width=252&height=200";
        }
        else if (imageUrl.indexOf(window.location.origin) > -1) {
            return "?width=252&height=200";
        }
        else {
            return "";
        }
    };
    return FeaturedContentFactory;
}());
exports.default = FeaturedContentFactory;

//# sourceMappingURL=FeaturedContentFactory.js.map
