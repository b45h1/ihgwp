"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var PropertyFieldImageSelectorHost_1 = require("./PropertyFieldImageSelectorHost");
var PropertyFieldImageSelectorBuilder = (function () {
    function PropertyFieldImageSelectorBuilder(_targetProperty, _properties) {
        this.type = sp_webpart_base_1.PropertyPaneFieldType.Custom;
        this.render = this.render.bind(this);
        this.targetProperty = _targetProperty;
        this.properties = _properties;
        this.context = _properties.context;
        this.properties.onRender = this.render;
        this.label = _properties.label;
        this.key = _properties.key;
        this.changeImage = _properties.changeImage;
        this.changeImageMode = _properties.changeImageMode;
        this.imageMode = _properties.imageMode;
    }
    PropertyFieldImageSelectorBuilder.prototype.render = function (elem) {
        var element = React.createElement(PropertyFieldImageSelectorHost_1.default, {
            onRender: this.render,
            properties: this.properties,
            context: this.context,
            targetProperty: this.targetProperty,
            label: this.label,
            key: this.key,
            changeImage: this.changeImage,
            changeImageMode: this.changeImageMode,
            imageMode: this.imageMode
        });
        ReactDom.render(element, elem);
    };
    return PropertyFieldImageSelectorBuilder;
}());
function PropertyPaneImageSelector(targetProperty, properties) {
    var newProperties = {
        onRender: null,
        properties: properties.properties,
        context: properties.context,
        targetProperty: targetProperty,
        label: properties.label,
        key: properties.key,
        changeImage: properties.changeImage,
        changeImageMode: properties.changeImageMode,
        imageMode: properties.imageMode
    };
    return new PropertyFieldImageSelectorBuilder(targetProperty, newProperties);
}
exports.PropertyPaneImageSelector = PropertyPaneImageSelector;
var ImageDisplayType;
(function (ImageDisplayType) {
    ImageDisplayType[ImageDisplayType["Auto"] = 0] = "Auto";
    ImageDisplayType[ImageDisplayType["Custom"] = 1] = "Custom";
})(ImageDisplayType = exports.ImageDisplayType || (exports.ImageDisplayType = {}));

//# sourceMappingURL=PropertyFieldImageSelector.js.map
