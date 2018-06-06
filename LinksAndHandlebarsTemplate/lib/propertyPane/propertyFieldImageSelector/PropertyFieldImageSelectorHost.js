"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropertyFieldImageSelector_1 = require("./PropertyFieldImageSelector");
var strings = require("propertyFieldStrings");
var PropertyFields_module_scss_1 = require("../PropertyFields.module.scss");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib/ChoiceGroup");
var ILinkPickerPanelProps_1 = require("../../components/LinkPickerPanel/ILinkPickerPanelProps");
var LinkPickerPanel_1 = require("../../components/LinkPickerPanel/LinkPickerPanel");
var PropertyFieldImageSelectorHost = (function (_super) {
    __extends(PropertyFieldImageSelectorHost, _super);
    function PropertyFieldImageSelectorHost(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            imageMode: _this.props.imageMode ? _this.props.imageMode : PropertyFieldImageSelector_1.ImageDisplayType.Custom,
        };
        return _this;
    }
    PropertyFieldImageSelectorHost.prototype.getIcon = function (imageMode) {
        switch (PropertyFieldImageSelector_1.ImageDisplayType[imageMode]) {
            case PropertyFieldImageSelector_1.ImageDisplayType.Auto: return "Photo2";
            case PropertyFieldImageSelector_1.ImageDisplayType.Custom: return "Photo2Add";
        }
    };
    PropertyFieldImageSelectorHost.prototype.getChoiceLabelText = function (imageMode) {
        switch (PropertyFieldImageSelector_1.ImageDisplayType[imageMode]) {
            case PropertyFieldImageSelector_1.ImageDisplayType.Auto: return strings.ImageSelectorTypeAuto;
            case PropertyFieldImageSelector_1.ImageDisplayType.Custom: return strings.ImageSelectorTypeCustom;
        }
    };
    PropertyFieldImageSelectorHost.prototype.changeImageType = function (ev, option) {
        this.props.changeImageMode(Number(option.key));
        this.setState({ imageMode: Number(option.key) });
        this.setState(this.state);
    };
    PropertyFieldImageSelectorHost.prototype.getPropertyByString = function (o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, ''); // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            }
            else {
                return;
            }
        }
        return o;
    };
    PropertyFieldImageSelectorHost.prototype.openLinkPicker = function (event) {
        var _this = this;
        this.linkPickerPanel.pickLink().then(function (_a) {
            var name = _a.name, url = _a.url;
            _this.props.changeImage(url, name);
            _this.render();
        });
    };
    PropertyFieldImageSelectorHost.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: PropertyFields_module_scss_1.default["image-selector"] },
            React.createElement(ChoiceGroup_1.ChoiceGroup
            // className={styles["root"]}
            , { 
                // className={styles["root"]}
                onChange: this.changeImageType.bind(this), selectedKey: this.state.imageMode.toString(), options: [
                    {
                        key: PropertyFieldImageSelector_1.ImageDisplayType.Auto.toString(),
                        iconProps: { iconName: 'Photo2' },
                        text: strings.ImageSelectorTypeAuto
                    },
                    {
                        key: PropertyFieldImageSelector_1.ImageDisplayType.Custom.toString(),
                        iconProps: { iconName: 'Photo2Add' },
                        text: strings.ImageSelectorTypeCustom
                    }
                ] }),
            React.createElement("div", { className: PropertyFields_module_scss_1.default["preview"] },
                React.createElement("label", { className: "title-label" }, this.props.label),
                (this.state.imageMode != PropertyFieldImageSelector_1.ImageDisplayType.Auto || this.getPropertyByString(this.props.properties.properties, this.props.targetProperty)) &&
                    React.createElement("img", { src: this.getPropertyByString(this.props.properties.properties, this.props.targetProperty), role: "presentation", width: "150px", height: "119px", alt: "" }),
                this.state.imageMode == PropertyFieldImageSelector_1.ImageDisplayType.Auto && !this.getPropertyByString(this.props.properties.properties, this.props.targetProperty) &&
                    React.createElement("div", null, strings.NoPreviewText),
                React.createElement(Button_1.PrimaryButton, { hidden: this.state.imageMode == PropertyFieldImageSelector_1.ImageDisplayType.Auto, onClick: this.openLinkPicker.bind(this) }, strings.ChangeImageButtonText)),
            React.createElement(LinkPickerPanel_1.default, { webPartContext: this.props.context, className: PropertyFields_module_scss_1.default["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: ILinkPickerPanelProps_1.LinkType.image | ILinkPickerPanelProps_1.LinkType.folder, ref: function (ref) { _this.linkPickerPanel = ref; } })));
    };
    return PropertyFieldImageSelectorHost;
}(React.Component));
exports.default = PropertyFieldImageSelectorHost;

//# sourceMappingURL=PropertyFieldImageSelectorHost.js.map
