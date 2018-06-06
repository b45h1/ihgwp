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
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FeaturedContentWebPart_module_scss_1 = require("./FeaturedContentWebPart.module.scss");
var strings = require("featuredContentWebPartStrings");
var FeaturedContentFactory_1 = require("./layouts/FeaturedContentFactory");
var ILinkPickerPanelProps_1 = require("../../../components/LinkPickerPanel/ILinkPickerPanelProps");
var LinkPickerPanel_1 = require("../../../components/LinkPickerPanel/LinkPickerPanel");
var elemUtil_1 = require("../../../utilities/element/elemUtil");
var urlField = "URL";
var imageField = "Image";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var contentField = "Content";
var FeaturedContentWebPart = (function (_super) {
    __extends(FeaturedContentWebPart, _super);
    function FeaturedContentWebPart() {
        return _super.call(this) || this;
    }
    Object.defineProperty(FeaturedContentWebPart.prototype, "dragElement", {
        get: function () {
            return this._dragElement;
        },
        set: function (v) {
            this._dragElement = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeaturedContentWebPart.prototype, "mouseTarget", {
        get: function () {
            return this._mouseTarget;
        },
        set: function (v) {
            this._mouseTarget = v;
        },
        enumerable: true,
        configurable: true
    });
    FeaturedContentWebPart.prototype.setTitle = function (event) {
        this.props.setTitle(event.target.value);
    };
    FeaturedContentWebPart.prototype.addBox = function (event) {
        this.setState({
            isLinkPanelOpen: false,
            isSiteSelected: true,
            linkValid: false,
            linkEntered: ""
        });
        this.props.editItem(-1);
    };
    FeaturedContentWebPart.prototype.editBox = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.editItem(elemUtil_1.default.closest(event.target, '[data-index]').getAttribute("data-index"));
        return false;
    };
    FeaturedContentWebPart.prototype.deleteBox = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (confirm(strings.DeleteItemConfirmMessage))
            this.props.deleteItem(elemUtil_1.default.closest(event.target, '[data-index]').getAttribute("data-index"));
        return false;
    };
    FeaturedContentWebPart.prototype.mouseDragDown = function (event) {
        this.mouseTarget = event.target;
    };
    FeaturedContentWebPart.prototype.startDrag = function (event) {
        event.stopPropagation();
        if (event.currentTarget.querySelector('#drag-handle').contains(this.mouseTarget)) {
            this.dragElement = event.currentTarget;
            event.dataTransfer.eventAllowed = "move";
            event.dataTransfer.setData('text/plan', 'drag-handle');
        }
        else {
            event.preventDefault();
        }
    };
    FeaturedContentWebPart.prototype.isbefore = function (a, b) {
        if (a.parentNode == b.parentNode) {
            for (var cur = a; cur; cur = cur.previousSibling) {
                if (cur === b) {
                    return true;
                }
            }
        }
        return false;
    };
    FeaturedContentWebPart.prototype.endDrag = function (event) {
        var indexArr = [];
        var currentElements = elemUtil_1.default.closest(event.currentTarget, '[data-reactroot]').querySelectorAll('[data-index]');
        currentElements.forEach(function (element) { indexArr.push(parseInt(element.getAttribute('data-index'))); });
        this.props.rearrangeItems(indexArr);
    };
    FeaturedContentWebPart.prototype.moveItem = function (event) {
        if (this.isbefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]'))) {
            elemUtil_1.default.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]'));
        }
        else {
            if (!this.dragElement.contains(elemUtil_1.default.closest(event.target, '[data-index]')))
                elemUtil_1.default.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]').nextSibling);
        }
    };
    FeaturedContentWebPart.prototype.render = function () {
        return this.props.usesListMode ? this.renderAdvancedWebPart() : this.renderBasicWebPart();
    };
    FeaturedContentWebPart.prototype.openLinkPicker = function (event) {
        var _this = this;
        this.linkPickerPanel.pickLink().then(function (_a) {
            var name = _a.name, url = _a.url;
            _this.props.setUrl(url, name);
        });
    };
    FeaturedContentWebPart.prototype.createNewItemFromLink = function (event) {
        this.props.resetActiveIndex();
        this.openLinkPicker(event);
    };
    FeaturedContentWebPart.prototype.renderBasicWebPart = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: FeaturedContentWebPart_module_scss_1.default["webpart-header"] },
                this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: FeaturedContentWebPart_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                !this.props.isEdit && this.props.title && React.createElement("span", { className: FeaturedContentWebPart_module_scss_1.default["view"] }, this.props.title)),
            this.props.isEdit &&
                React.createElement(Button_1.CommandButton, { className: FeaturedContentWebPart_module_scss_1.default["new-item"], icon: 'Add', onClick: this.addBox.bind(this) }, strings.AddNewButtonText),
            FeaturedContentFactory_1.default.getLayout(this.props.layoutMode, false, this).render(this.props.featuredContentItems, this.props.isEdit),
            this.props.isEdit &&
                React.createElement(LinkPickerPanel_1.default, { webPartContext: this.props.context, className: FeaturedContentWebPart_module_scss_1.default["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: ILinkPickerPanelProps_1.LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })));
    };
    FeaturedContentWebPart.prototype.renderAdvancedWebPart = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: FeaturedContentWebPart_module_scss_1.default["webpart-header"] },
                this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: FeaturedContentWebPart_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                !this.props.isEdit && this.props.title && React.createElement("span", { className: FeaturedContentWebPart_module_scss_1.default["view"] }, this.props.title)),
            FeaturedContentFactory_1.default.getLayout(this.props.layoutMode, true, this).render(this.props.links, this.props.isEdit)));
    };
    return FeaturedContentWebPart;
}(React.Component));
exports.default = FeaturedContentWebPart;

//# sourceMappingURL=FeaturedContentWebPart.js.map
