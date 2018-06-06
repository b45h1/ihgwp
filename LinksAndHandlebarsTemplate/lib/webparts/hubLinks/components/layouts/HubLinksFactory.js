"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HubLinksLayout_1 = require("./HubLinksLayout");
var BasicGroupedListLayout_1 = require("./GroupedListLayout/BasicGroupedListLayout");
var AdvancedGroupedListLayout_1 = require("./GroupedListLayout/AdvancedGroupedListLayout");
var BasicItemLayout_1 = require("./ItemLayout/BasicItemLayout");
var AdvancedItemLayout_1 = require("./ItemLayout/AdvancedItemLayout");
var BasicListLayout_1 = require("./ListLayout/BasicListLayout");
var AdvancedListLayout_1 = require("./ListLayout/AdvancedListLayout");
var FeaturedContentFactory = (function () {
    function FeaturedContentFactory() {
    }
    FeaturedContentFactory.getLayout = function (layout, isAdvancedMode, webPart) {
        if (!isAdvancedMode) {
            switch (layout) {
                case HubLinksLayout_1.HubLinksLayout.GroupedListLayout: return new BasicGroupedListLayout_1.default(webPart);
                case HubLinksLayout_1.HubLinksLayout.ItemLayout: return new BasicItemLayout_1.default(webPart);
                default: return new BasicListLayout_1.default(webPart);
            }
        }
        else {
            switch (layout) {
                case HubLinksLayout_1.HubLinksLayout.GroupedListLayout: return new AdvancedGroupedListLayout_1.default(webPart);
                case HubLinksLayout_1.HubLinksLayout.ItemLayout: return new AdvancedItemLayout_1.default(webPart);
                default: return new AdvancedListLayout_1.default(webPart);
            }
        }
    };
    return FeaturedContentFactory;
}());
exports.default = FeaturedContentFactory;

//# sourceMappingURL=HubLinksFactory.js.map
