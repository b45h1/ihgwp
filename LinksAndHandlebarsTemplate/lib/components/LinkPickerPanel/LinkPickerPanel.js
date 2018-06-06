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
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var Nav_1 = require("office-ui-fabric-react/lib/Nav");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ILinkPickerPanelProps_1 = require("./ILinkPickerPanelProps");
var ILinkPickerPanelState_1 = require("./ILinkPickerPanelState");
var LinkPickerPanel_module_scss_1 = require("./LinkPickerPanel.module.scss");
var en_us_1 = require("../loc/en-us");
//import pnp from 'sp-pnp-js';
var LinkPickerPanel = (function (_super) {
    __extends(LinkPickerPanel, _super);
    function LinkPickerPanel() {
        var _this = _super.call(this) || this;
        _this.state = {
            isOpen: false,
            navState: ILinkPickerPanelState_1.NavState.site,
            isUrlValid: false,
            url: ""
        };
        return _this;
    }
    LinkPickerPanel.prototype.render = function () {
        // Figure out which UI to show based on the navigation state
        var showDocPickerIFrame = this.state.navState == ILinkPickerPanelState_1.NavState.site;
        var showLinkEntryForm = this.state.navState == ILinkPickerPanelState_1.NavState.link;
        return (React.createElement(Panel_1.Panel, { isOpen: this.state.isOpen, onDismissed: this.removeMessageListener.bind(this), className: LinkPickerPanel_module_scss_1.default["link-picker"], hasCloseButton: false, type: Panel_1.PanelType.extraLarge, isLightDismiss: true, onDismiss: this.onCancelButtonClick.bind(this) },
            React.createElement(Nav_1.Nav, { initialSelectedKey: "site", isOnTop: true, groups: [{
                        links: [
                            {
                                name: en_us_1.strings.LinkPickerSiteNav,
                                icon: "Globe", key: "site", url: "#",
                                onClick: this.onSiteNavClick.bind(this),
                                isExpanded: showDocPickerIFrame
                            },
                            {
                                name: en_us_1.strings.LinkPickerLinkNav,
                                icon: "Link", key: "link", url: "#",
                                onClick: this.onLinkNavClick.bind(this),
                                isExpanded: showLinkEntryForm
                            }
                        ]
                    }] }),
            React.createElement("div", { className: LinkPickerPanel_module_scss_1.default["tabs"] },
                React.createElement("div", { hidden: !showDocPickerIFrame },
                    React.createElement("iframe", { src: this.getDocPickerUrl(), role: "application", title: en_us_1.strings.LinkPickerSelectFromSiteTitle })),
                React.createElement("div", { hidden: !showLinkEntryForm, className: LinkPickerPanel_module_scss_1.default["link-insert"] },
                    React.createElement("h2", null, en_us_1.strings.LinkPickerSelectFromLinkLabel),
                    React.createElement("label", { htmlFor: "linkUrl" }, en_us_1.strings.LinkPickerSelectFromLinkDescription),
                    React.createElement("br", null),
                    React.createElement("textarea", { id: "linkUrl", "aria-label": en_us_1.strings.LinkPickerSelectFromLinkDescription, onChange: this.onLinkTextChange.bind(this), defaultValue: this.state.url }),
                    React.createElement("div", { className: LinkPickerPanel_module_scss_1.default["buttons"] },
                        React.createElement(Button_1.PrimaryButton, { disabled: !this.state.isUrlValid, onClick: this.onOkButtonClick.bind(this) }, en_us_1.strings.LinkPickerSelectButtonText),
                        React.createElement(Button_1.DefaultButton, { onClick: this.onCancelButtonClick.bind(this) }, en_us_1.strings.LinkPickerCancelButtonText))))));
    };
    // Public method to pick a link
    LinkPickerPanel.prototype.pickLink = function () {
        var _this = this;
        this.openLinkPanel();
        return new Promise(function (resolve, reject) {
            _this.resolvePickLink = resolve;
            _this.rejectPickLink = reject;
        });
    };
    LinkPickerPanel.prototype.openLinkPanel = function () {
        this.addMessageListener();
        this.setState({
            isOpen: true,
            navState: ILinkPickerPanelState_1.NavState.site,
            isUrlValid: false,
            url: ""
        });
    };
    LinkPickerPanel.prototype.closeLinkPanel = function () {
        this.removeMessageListener();
        this.setState({
            isOpen: false,
        });
    };
    // ** Functions to manage the document selection iFrame **
    LinkPickerPanel.prototype.addMessageListener = function () {
        addEventListener('message', this.onMessageReceived.bind(this), false);
    };
    LinkPickerPanel.prototype.removeMessageListener = function () {
        removeEventListener('message', this.onMessageReceived.bind(this), false);
    };
    LinkPickerPanel.prototype.onMessageReceived = function (event) {
        if (event.data.indexOf('[OneDrive-FromPicker]', 0) === 0) {
            var json = JSON.parse(event.data.replace('[OneDrive-FromPicker]', ''));
            var eventType = json.type;
            switch (eventType) {
                case 'success':
                    var name_1 = json.items[0].name;
                    var url = json.items[0].sharePoint.url;
                    this.resolvePickLink({ name: name_1, url: url });
                    this.closeLinkPanel();
                    break;
                case 'cancel':
                    this.rejectPickLink();
                    this.closeLinkPanel();
                    break;
            }
        }
    };
    LinkPickerPanel.prototype.getDocPickerUrl = function () {
        var anchor = document.createElement('a');
        anchor.href = this.props.webAbsUrl;
        var typeFilter = '&view=2&p=2';
        if (this.props.linkType != ILinkPickerPanelProps_1.LinkType.all) {
            typeFilter += '&typeFilters=';
            if (this.props.linkType & ILinkPickerPanelProps_1.LinkType.folder)
                typeFilter += 'folder,';
            if (this.props.linkType & ILinkPickerPanelProps_1.LinkType.doc)
                typeFilter += '.doc,.docx,.docm,.xls,.xlsx,.xlsm,.pot,.potx,.ppt,.pptx,.pptm,.vsdx,.vsdm,.vsd,.pdf,';
            if (this.props.linkType & ILinkPickerPanelProps_1.LinkType.image)
                typeFilter += '.gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png,.jxr,';
            if (this.props.linkType & ILinkPickerPanelProps_1.LinkType.page)
                typeFilter += '.aspx,';
            if (this.props.linkType & ILinkPickerPanelProps_1.LinkType.developer)
                typeFilter += '.html,.css,.handlebars,.js,.json,.ts,.tsx,.jsx,.less,.scss,.sass';
            typeFilter = typeFilter.slice(0, -1); // Trim trailing comma
        }
        typeFilter += '&picker={"sn":false,"v":"files","id":"1","o":"';
        return anchor.href +
            "/_layouts/15/onedrive.aspx?id=" +
            (anchor.pathname.substring(0, 1) === '/' ? "" : "/") +
            anchor.pathname +
            typeFilter +
            anchor.hostname +
            '","s":"single"}';
    };
    // ** UI Event Handlers **
    // <Nav> event handlers
    LinkPickerPanel.prototype.onSiteNavClick = function (event) {
        this.onNavClick(ILinkPickerPanelState_1.NavState.site, event);
    };
    LinkPickerPanel.prototype.onLinkNavClick = function (event) {
        this.onNavClick(ILinkPickerPanelState_1.NavState.link, event);
    };
    LinkPickerPanel.prototype.onNavClick = function (navState, event) {
        event.stopPropagation();
        event.preventDefault();
        this.setState({
            navState: navState,
            isUrlValid: false,
            url: ""
        });
        return false;
    };
    // Link entry form
    LinkPickerPanel.prototype.onLinkTextChange = function (event) {
        this.setState({
            url: event.currentTarget.value,
            isUrlValid: this.isValidLink(event.currentTarget.value)
        });
    };
    LinkPickerPanel.prototype.onOkButtonClick = function (event) {
        this.resolvePickLink({ name: "", url: this.state.url });
        this.closeLinkPanel();
    };
    LinkPickerPanel.prototype.onCancelButtonClick = function () {
        this.rejectPickLink();
        this.closeLinkPanel();
    };
    // ** Validation  **
    LinkPickerPanel.prototype.isValidLink = function (url) {
        var httpUrlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        var dataUrlRegex = /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*)\s*$/i;
        return httpUrlRegex.test(url) ||
            ((this.props.linkType | ILinkPickerPanelProps_1.LinkType.image) && dataUrlRegex.test(url));
    };
    return LinkPickerPanel;
}(React.Component));
exports.default = LinkPickerPanel;

//# sourceMappingURL=LinkPickerPanel.js.map
