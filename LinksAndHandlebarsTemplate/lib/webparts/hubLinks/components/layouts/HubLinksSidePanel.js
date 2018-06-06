"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HubLinksLayout_1 = require("./HubLinksLayout");
var AdvancedGroupedListLayout_1 = require("./GroupedListLayout/AdvancedGroupedListLayout");
var SidePanelItemLayout_1 = require("./ItemLayout/SidePanelItemLayout");
var SidePanelListLayout_1 = require("./ListLayout/SidePanelListLayout");
var SidePanelGroupedListLayout_1 = require("./GroupedListLayout/SidePanelGroupedListLayout");
var AdvancedItemLayout_1 = require("./ItemLayout/AdvancedItemLayout");
var AdvancedListLayout_1 = require("./ListLayout/AdvancedListLayout");
var FeaturedContentFactory = (function () {
    function FeaturedContentFactory() {
    }
    FeaturedContentFactory.getLayout = function (layout, isAdvancedMode, webPart) {
        if (!isAdvancedMode) {
            switch (layout) {
                case HubLinksLayout_1.HubLinksLayout.GroupedListLayout: return new SidePanelGroupedListLayout_1.default(webPart);
                case HubLinksLayout_1.HubLinksLayout.ItemLayout: return new SidePanelItemLayout_1.default(webPart);
                default: return new SidePanelListLayout_1.default(webPart);
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

//# sourceMappingURL=HubLinksSidePanel.js.map
