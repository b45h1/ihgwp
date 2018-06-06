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
var BoxButtonWebPart_module_scss_1 = require("./BoxButtonWebPart.module.scss");
var strings = require("boxButtonWebPartStrings");
var LinkPickerPanel_1 = require("../../../components/LinkPickerPanel/LinkPickerPanel");
var ILinkPickerPanelProps_1 = require("../../../components/LinkPickerPanel/ILinkPickerPanelProps");
var elemUtil_1 = require("../../../utilities/element/elemUtil");
var urlField = "URL";
var iconField = "Font Awesome Icon";
var isBlueField = "Has Blue Background";
var openNewTabField = "Open Link in New Tab";
var BoxButtonWebPart = (function (_super) {
    __extends(BoxButtonWebPart, _super);
    function BoxButtonWebPart() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BoxButtonWebPart.prototype, "dragElement", {
        get: function () {
            return this._dragElement;
        },
        set: function (v) {
            this._dragElement = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoxButtonWebPart.prototype, "mouseTarget", {
        get: function () {
            return this._mouseTarget;
        },
        set: function (v) {
            this._mouseTarget = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoxButtonWebPart.prototype, "eventDone", {
        get: function () {
            return this._eventDone;
        },
        set: function (v) {
            this._eventDone = v;
        },
        enumerable: true,
        configurable: true
    });
    BoxButtonWebPart.prototype.setTitle = function (event) {
        this.props.setTitle(event.target.value);
    };
    // ** Event handlers for link picker **
    // Open the link picker - called from onClick of Change (link) button
    BoxButtonWebPart.prototype.openLinkPicker = function (event) {
        var _this = this;
        if (this.linkPickerPanel) {
            this.linkPickerPanel.pickLink()
                .then(function (_a) {
                var name = _a.name, url = _a.url;
                _this.props.setUrl(name, url);
            });
        }
    };
    // ** Event handlers for buttons **/
    // User clicks + button to add a link
    BoxButtonWebPart.prototype.addBox = function (event) {
        this.props.editItem(-1);
    };
    // User clicks edit button on a link
    BoxButtonWebPart.prototype.editBox = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.editItem(elemUtil_1.default.closest(event.target, '[data-index]').getAttribute("data-index"));
        return false;
    };
    // User clicks delete button on a link
    BoxButtonWebPart.prototype.deleteBox = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (confirm(strings.DeleteItemConfirmMessage))
            this.props.deleteItem(elemUtil_1.default.closest(event.target, '[data-index]').getAttribute("data-index"));
        return false;
    };
    BoxButtonWebPart.prototype.checkEventDone = function (event) {
        if (this.eventDone) {
            this.eventDone = false;
            return false;
        }
    };
    // Event handlers for drag and drop
    BoxButtonWebPart.prototype.mouseDragDown = function (event) {
        this.mouseTarget = event.target;
    };
    BoxButtonWebPart.prototype.startDrag = function (event) {
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
    BoxButtonWebPart.prototype.isbefore = function (a, b) {
        if (a.parentNode == b.parentNode) {
            for (var cur = a; cur; cur = cur.previousSibling) {
                if (cur === b) {
                    return true;
                }
            }
        }
        return false;
    };
    BoxButtonWebPart.prototype.endDrag = function (event) {
        var indexArr = [];
        var currentElements = elemUtil_1.default.closest(event.currentTarget, '[data-reactroot]').querySelectorAll('[data-index]');
        currentElements.forEach(function (element) { indexArr.push(parseInt(element.getAttribute('data-index'))); });
        this.props.rearrangeItems(indexArr);
    };
    BoxButtonWebPart.prototype.moveItem = function (event) {
        if (this.isbefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]'))) {
            elemUtil_1.default.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]'));
        }
        else {
            if (!this.dragElement.contains(elemUtil_1.default.closest(event.target, '[data-index]')))
                elemUtil_1.default.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]').nextSibling);
        }
    };
    // ** Render functions **
    BoxButtonWebPart.prototype.render = function () {
        return this.props.usesListMode ?
            this.renderAdvancedWebPart() :
            this.renderBasicWebPart();
    };
    // Render the "basic" web part with editable links
    BoxButtonWebPart.prototype.renderBasicWebPart = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["webpart-header"] },
                this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: BoxButtonWebPart_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title", defaultValue: this.props.title }),
                !this.props.isEdit && this.props.title && React.createElement("span", { className: BoxButtonWebPart_module_scss_1.default["view"] }, this.props.title)),
            this.props.isEdit &&
                React.createElement(Button_1.CommandButton, { className: BoxButtonWebPart_module_scss_1.default["new-item"], icon: 'Add', onClick: this.addBox.bind(this) }, strings.AddNewButtonText),
            this.props.data.length > 0 && this.props.data.map(function (item) {
                return _this.renderBasicDefaultLayout(item);
            }),
            this.props.data.length === 0 &&
                React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["box-link"] },
                    React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["empty-box"] },
                        React.createElement("div", { role: "button", onClick: this.openLinkPicker.bind(this) }, strings.PlaceholderButtonText))),
            this.props.isEdit &&
                React.createElement(LinkPickerPanel_1.default, { webPartContext: this.props.context, className: BoxButtonWebPart_module_scss_1.default["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: ILinkPickerPanelProps_1.LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })));
    };
    BoxButtonWebPart.prototype.renderBasicDefaultLayout = function (item) {
        return (React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["box-link"], role: "link", id: "item-" + this.props.data.indexOf(item), key: "item-" + this.props.data.indexOf(item), draggable: this.props.isEdit, onDragStart: this.startDrag.bind(this), onMouseDown: this.mouseDragDown.bind(this), onDragEnter: this.moveItem.bind(this), onDragEnd: this.endDrag.bind(this), "data-index": this.props.data.indexOf(item) },
            React.createElement("a", { href: item.url, target: item.openNew ? "_blank" : "" },
                React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["box-button"] + " " + (item.isBlue ? BoxButtonWebPart_module_scss_1.default["blue"] : "") + " " + (this.props.isEdit ? BoxButtonWebPart_module_scss_1.default["edit"] : "") },
                    React.createElement("i", { className: item.icon ? "fa " + item.icon : "" }),
                    item.name)),
            this.props.isEdit &&
                React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["edit-controls"] },
                    React.createElement(Button_1.DefaultButton, { icon: "Clear", onClick: this.deleteBox.bind(this) }),
                    React.createElement(Button_1.DefaultButton, { icon: "Edit", onClick: this.editBox.bind(this) }),
                    React.createElement("i", { className: "ms-Icon ms-Icon--Move", id: "drag-handle", "aria-hidden": "true" }))));
    };
    // Render the "advanced" web part, which is list-driven
    BoxButtonWebPart.prototype.renderAdvancedWebPart = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["webpart-header"] },
                this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: BoxButtonWebPart_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title", defaultValue: this.props.title }),
                !this.props.isEdit && this.props.title && React.createElement("span", { className: BoxButtonWebPart_module_scss_1.default["view"] }, this.props.title)),
            this.props.links.length > 0 && this.props.links.map(function (item) {
                return _this.renderAdvancedDefaultLayout(item);
            })));
    };
    BoxButtonWebPart.prototype.renderAdvancedDefaultLayout = function (item) {
        return (React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["box-link"], role: "link", key: "item-" + this.props.links.indexOf(item) },
            React.createElement("a", { href: item[urlField], target: item[openNewTabField] ? "_blank" : "" },
                React.createElement("div", { className: BoxButtonWebPart_module_scss_1.default["box-button"] + " " + (item[isBlueField] ? BoxButtonWebPart_module_scss_1.default["blue"] : "") },
                    React.createElement("i", { className: item[iconField] ? "fa " + item[iconField] : "" }),
                    item[urlField + "_text"]))));
    };
    return BoxButtonWebPart;
}(React.Component));
exports.default = BoxButtonWebPart;

//# sourceMappingURL=BoxButtonWebPart.js.map
