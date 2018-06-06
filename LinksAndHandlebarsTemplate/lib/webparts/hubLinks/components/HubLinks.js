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
var HubLinks_module_scss_1 = require("./HubLinks.module.scss");
var strings = require("hubLinksStrings");
var HubLinksLayout_1 = require("./layouts/HubLinksLayout");
var HubLinksFactory_1 = require("./layouts/HubLinksFactory");
var HubLinksSidePanel_1 = require("./layouts/HubLinksSidePanel");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var Button_2 = require("office-ui-fabric-react/lib/Button");
var LinkPickerPanel_1 = require("../../../components/LinkPickerPanel/LinkPickerPanel");
var ILinkPickerPanelProps_1 = require("../../../components/LinkPickerPanel/ILinkPickerPanelProps");
var elemUtil_1 = require("../../../utilities/element/elemUtil");
var HubLinks = (function (_super) {
    __extends(HubLinks, _super);
    function HubLinks(props) {
        var _this = _super.call(this, props) || this;
        _this._setShowPanel = function (showPanel) {
            return function () {
                _this.setState({ showPanel: showPanel });
            };
        };
        _this.state = {
            showPanel: false
        };
        return _this;
    }
    Object.defineProperty(HubLinks.prototype, "dragElement", {
        get: function () {
            return this._dragElement;
        },
        set: function (v) {
            this._dragElement = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubLinks.prototype, "mouseTarget", {
        get: function () {
            return this._mouseTarget;
        },
        set: function (v) {
            this._mouseTarget = v;
        },
        enumerable: true,
        configurable: true
    });
    HubLinks.prototype.mouseDragDown = function (event) {
        this.mouseTarget = event.target;
    };
    HubLinks.prototype.startDrag = function (event) {
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
    HubLinks.prototype.isbefore = function (a, b) {
        if (a.parentNode == b.parentNode) {
            for (var cur = a; cur; cur = cur.previousSibling) {
                if (cur === b) {
                    return true;
                }
            }
        }
        return false;
    };
    HubLinks.prototype.endDrag = function (event) {
        var indexArr = [];
        //If Grouped Layout, update GroupBy field if group has changed
        if (this.props.layoutMode == HubLinksLayout_1.HubLinksLayout.GroupedListLayout) {
            var currentGroup = elemUtil_1.default.closest(event.currentTarget, '[data-group]');
            var groupProp = currentGroup.getAttribute('data-group');
            if (groupProp.length > 0) {
                var group = groupProp.split("-")[1];
                if (group.length > 0)
                    this.props.setGroup(event.currentTarget.getAttribute('data-index'), group);
            }
        }
        var currentElements = elemUtil_1.default.closest(event.currentTarget, '[data-reactroot]').querySelectorAll('[data-index]');
        currentElements.forEach(function (element) { indexArr.push(parseInt(element.getAttribute('data-index'))); });
        this.props.rearrangeItems(indexArr);
    };
    HubLinks.prototype.moveItem = function (event) {
        if (this.isbefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]'))) {
            elemUtil_1.default.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]'));
        }
        else {
            if (!this.dragElement.contains(elemUtil_1.default.closest(event.target, '[data-index]')))
                elemUtil_1.default.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, elemUtil_1.default.closest(event.target, '[data-index]').nextSibling);
        }
    };
    HubLinks.prototype.toggleGroup = function (event) {
        if (event.target.tagName === 'A')
            return;
        event.stopPropagation();
        event.preventDefault();
        var element = elemUtil_1.default.closest(event.target, "[data-group]");
        if (element.getAttributeNode('data-expanded')) {
            element.removeAttribute('data-expanded');
        }
        else {
            element.setAttribute('data-expanded', "");
        }
    };
    HubLinks.prototype.setTitle = function (event) {
        this.props.setTitle(event.target.value);
    };
    HubLinks.prototype.setPromoPrefix = function (event) {
        this.props.setPromoPrefix(event.target.value);
    };
    HubLinks.prototype.addBox = function (event) {
        this.props.editItem(-1);
    };
    HubLinks.prototype.editBox = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.props.editItem(elemUtil_1.default.closest(event.target, '[data-index]').getAttribute("data-index"));
        return false;
    };
    HubLinks.prototype.deleteBox = function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (confirm(strings.DeleteItemConfirmMessage))
            this.props.deleteItem(elemUtil_1.default.closest(event.target, '[data-index]').getAttribute("data-index"));
        return false;
    };
    // Open the link picker - called from onClick of Change (link) button
    HubLinks.prototype.openLinkPicker = function (event) {
        var _this = this;
        this.linkPickerPanel.pickLink().then(function (_a) {
            var name = _a.name, url = _a.url;
            _this.props.setUrl(url, name);
        });
    };
    HubLinks.prototype.render = function () {
        // document.getElementsByClassName[0].onresize = function() {this.renderBasicWebPart()};
        return this.props.usesListMode ? this.renderAdvancedWebPart() : this.renderBasicWebPart();
    };
    HubLinks.prototype.renderBasicWebPart = function () {
        var mediaQuery = window.matchMedia("(max-width:767px)");
        var colors = ['#d96932', '#707372', '#385e9d', '#71b2c9'];
        if (mediaQuery.matches) {
            this.bgStyle = {
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                height: "110px",
                padding: "20px"
            };
            this.bgStylePromo = {
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                height: "250px",
                width: "10%",
                float: "left"
            };
            this.bgStylePromoRight = {
                width: "90%",
                float: "left",
                height: "250px",
                background: "rgba(56, 94, 157, 0.1)",
                overflow: "hidden"
            };
        }
        else {
            if (this.props.background == HubLinksLayout_1.bgType.BgImage) {
                this.bgStyle = {
                    backgroundImage: "url(" + this.props.bgImagePicker + ")",
                    backgroundSize: "cover",
                    height: "110px",
                    padding: "20px"
                };
                this.bgStylePromo = {
                    backgroundImage: "url(" + this.props.bgImagePicker + ")",
                    backgroundSize: "cover",
                    height: "250px",
                    width: "30%",
                    float: "left"
                };
                this.bgStylePromoRight = {
                    width: "70%",
                    height: "250px",
                    background: "rgba(56, 94, 157, 0.1)",
                    overflow: "hidden",
                    position: "relative"
                };
            }
            else if (this.props.background == HubLinksLayout_1.bgType.BgColor) {
                //Compact header configuration
                if (this.props.compactHeader) {
                    this.bgStyle = {
                        backgroundColor: this.props.bgImagePicker,
                        height: "55px",
                        padding: "5px 20px 5px 20px"
                    };
                }
                else {
                    this.bgStyle = {
                        backgroundColor: this.props.bgImagePicker,
                        height: "110px",
                        padding: "20px"
                    };
                }
                this.solidColorHeaderWidth = {
                    width: "100%",
                };
                this.bgStylePromo = {
                    backgroundColor: this.props.bgImagePicker,
                    height: "250px",
                    width: "30%",
                    float: "left"
                };
                this.bgStylePromoRight = {
                    width: "70%",
                    float: "left",
                    height: "250px",
                    background: "rgba(56, 94, 157, 0.1)",
                    overflow: "hidden",
                    position: "relative"
                };
            }
        }
        // this.props.columnWidth=document.getElementById("myUnorderList").offsetWidth;
        return (React.createElement("div", null,
            this.props.layoutMode == 0 &&
                this.listView(),
            this.props.layoutMode == 1 &&
                this.promoView(),
            this.props.layoutMode == 2 &&
                this.listView()));
    };
    HubLinks.prototype.listView = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-header"], style: this.bgStyle },
                this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: HubLinks_module_scss_1.default["edit"], style: this.solidColorHeaderWidth, placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                !this.props.isEdit && this.props.title && React.createElement("span", { style: this.solidColorHeaderWidth, className: HubLinks_module_scss_1.default["view"] }, this.props.title)),
            React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-desription"] }, this.props.wpBodyText),
            this.props.isEdit &&
                React.createElement(Button_1.CommandButton, { iconProps: { iconName: 'Add' }, onClick: this.addBox.bind(this) }, strings.AddNewButtonText),
            React.createElement("div", { className: HubLinks_module_scss_1.default["wpUnorderList"] },
                HubLinksFactory_1.default.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit),
                this.props.isEdit &&
                    React.createElement(LinkPickerPanel_1.default, { webPartContext: this.props.context, className: HubLinks_module_scss_1.default["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: ILinkPickerPanelProps_1.LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })),
            React.createElement("div", { className: this.props.showPanel && HubLinks_module_scss_1.default["sidePanelBtn"] },
                this.props.showPanel &&
                    React.createElement(Button_2.DefaultButton, { description: 'Show more', onClick: this._setShowPanel(true), text: 'More', className: HubLinks_module_scss_1.default['showPanelBtn'] }),
                React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, onDismiss: this._setShowPanel(false), type: Panel_1.PanelType.medium, headerText: "", headerClassName: HubLinks_module_scss_1.default["sidePanelHeader"], className: HubLinks_module_scss_1.default["sidePanel"], isLightDismiss: true },
                    React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-headerSidePanel"], style: this.bgStyle },
                        React.createElement("div", { className: "webpartTitleText" },
                            this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: HubLinks_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                            !this.props.isEdit && this.props.title && React.createElement("span", { className: HubLinks_module_scss_1.default["view"] }, this.props.title))),
                    React.createElement("div", { className: HubLinks_module_scss_1.default["sidePanelContentArea"] },
                        this.props.wpBodyText,
                        React.createElement("br", null),
                        React.createElement("br", null),
                        HubLinksSidePanel_1.default.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit))))));
    };
    HubLinks.prototype.promoView = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-header-promo"], style: this.bgStylePromo }),
            React.createElement("div", { style: this.bgStylePromoRight },
                React.createElement("div", { className: HubLinks_module_scss_1.default["promoPrefix"] },
                    this.props.isEdit && React.createElement("textarea", { onChange: this.setPromoPrefix.bind(this), className: HubLinks_module_scss_1.default["edit"], placeholder: strings.PromoPrefixPlaceholder, "aria-label": "Add a promo prefix" }, this.props.promoPrefix),
                    !this.props.isEdit && this.props.promoPrefix && React.createElement("span", { className: HubLinks_module_scss_1.default["view"] }, this.props.promoPrefix)),
                React.createElement("div", { className: HubLinks_module_scss_1.default["promoTitle"] },
                    this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: HubLinks_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                    !this.props.isEdit && this.props.title && React.createElement("span", { className: HubLinks_module_scss_1.default["view"] }, this.props.title)),
                React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-desription-promo"] }, this.props.wpBodyText),
                this.props.isEdit &&
                    React.createElement(Button_1.CommandButton, { iconProps: { iconName: 'Add' }, onClick: this.addBox.bind(this) }, strings.AddNewButtonText)
            // <button onClick={this.addBox.bind(this)} label={strings.AddNewButtonText}/>
            ,
                React.createElement("div", { className: HubLinks_module_scss_1.default["promoUnorderList"] },
                    HubLinksFactory_1.default.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit),
                    this.props.isEdit &&
                        React.createElement(LinkPickerPanel_1.default, { webPartContext: this.props.context, className: HubLinks_module_scss_1.default["link-picker"], webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: ILinkPickerPanelProps_1.LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })),
                this.props.layoutMode == 1 ?
                    React.createElement("div", { className: this.props.showPanel && HubLinks_module_scss_1.default["sidePanelBtnPromo"] },
                        this.props.showPanel &&
                            React.createElement(Button_2.DefaultButton, { description: 'Show more', onClick: this._setShowPanel(true), text: 'More', className: HubLinks_module_scss_1.default['showPanelBtnPromo'] }),
                        React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, onDismiss: this._setShowPanel(false), type: Panel_1.PanelType.medium, headerText: "", headerClassName: HubLinks_module_scss_1.default["sidePanelHeader"], className: HubLinks_module_scss_1.default["sidePanel"], isLightDismiss: true },
                            React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-headerSidePanel"], style: this.bgStyle },
                                React.createElement("div", { className: "webpartTitleText" },
                                    this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: HubLinks_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                                    !this.props.isEdit && this.props.title && React.createElement("span", { className: HubLinks_module_scss_1.default["view"] }, this.props.title))),
                            React.createElement("div", { className: HubLinks_module_scss_1.default["sidePanelContentArea"] },
                                this.props.wpBodyText,
                                React.createElement("br", null),
                                React.createElement("br", null),
                                HubLinksSidePanel_1.default.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit))))
                    :
                        React.createElement("div", { className: this.props.showPanel && HubLinks_module_scss_1.default["sidePanelBtn"] },
                            this.props.showPanel &&
                                React.createElement(Button_2.DefaultButton, { description: 'Show more', onClick: this._setShowPanel(true), text: 'More', className: HubLinks_module_scss_1.default['showPanelBtn'] }),
                            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, onDismiss: this._setShowPanel(false), type: Panel_1.PanelType.medium, headerText: "", headerClassName: HubLinks_module_scss_1.default["sidePanelHeader"], className: HubLinks_module_scss_1.default["sidePanel"], isLightDismiss: true },
                                React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-headerSidePanel"], style: this.bgStyle },
                                    React.createElement("div", { className: "webpartTitleText" },
                                        this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: HubLinks_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                                        !this.props.isEdit && this.props.title && React.createElement("span", { className: HubLinks_module_scss_1.default["view"] }, this.props.title))),
                                React.createElement("div", { className: HubLinks_module_scss_1.default["sidePanelContentArea"] },
                                    this.props.wpBodyText,
                                    React.createElement("br", null),
                                    React.createElement("br", null),
                                    HubLinksSidePanel_1.default.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit)))))));
    };
    HubLinks.prototype.componentWillMount = function () {
        setTimeout(function () {
            // let a = document.getElementsByClassName("CanvasSection-xl4");
            // console.log(a);
            var itemA = document.querySelectorAll('.CanvasSection-xl6 #myUnorderList li');
            var counterA;
            for (counterA = 0; counterA < itemA.length; counterA++) {
                itemA[counterA].style.width = "100%";
                // console.log("Should work now" + i);
            }
            var itemB = document.querySelectorAll('.CanvasSection-xl4 #myUnorderList li');
            var counterB;
            for (counterB = 0; counterB < itemB.length; counterB++) {
                itemB[counterB].style.width = "100%";
                // console.log("Should work now" + i);
            }
            // console.log(b);
        }, 500);
    };
    HubLinks.prototype.renderAdvancedWebPart = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: HubLinks_module_scss_1.default["webpart-header"] },
                this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: HubLinks_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title" }, this.props.title),
                !this.props.isEdit && this.props.title && React.createElement("span", { className: HubLinks_module_scss_1.default["view"] }, this.props.title)),
            HubLinksFactory_1.default.getLayout(this.props.layoutMode, true, this).render(this.props.links, this.props.isEdit)));
    };
    return HubLinks;
}(React.Component));
exports.default = HubLinks;

//# sourceMappingURL=HubLinks.js.map
