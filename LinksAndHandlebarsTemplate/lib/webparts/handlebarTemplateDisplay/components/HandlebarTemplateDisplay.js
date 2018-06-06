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
var strings = require("handlebarTemplateDisplayStrings");
var Handlebars = require("handlebars");
require("file-saver");
var HandlebarTemplateDisplay_module_scss_1 = require("./HandlebarTemplateDisplay.module.scss");
var LinkPickerPanel_1 = require("../../../components/LinkPickerPanel/LinkPickerPanel");
var ILinkPickerPanelProps_1 = require("../../../components/LinkPickerPanel/ILinkPickerPanelProps");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var specialChar = "    ";
//Handlebars.registerHelper("date",(date: Date,format: string): string=>{
//  return moment(date).format(format);
//});
var HandlebarTemplateDisplay = (function (_super) {
    __extends(HandlebarTemplateDisplay, _super);
    function HandlebarTemplateDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HandlebarTemplateDisplay.prototype, "templateExport", {
        get: function () {
            return this._templateExport;
        },
        set: function (v) {
            this._templateExport = v;
        },
        enumerable: true,
        configurable: true
    });
    HandlebarTemplateDisplay.prototype.setTitle = function (event) {
        this.props.setTitle(event.target.value);
    };
    HandlebarTemplateDisplay.prototype.openTemplateLinkPicker = function (event) {
        var _this = this;
        if (this.linkPickerPanel) {
            this.linkPickerPanel.pickLink()
                .then(function (_a) {
                var name = _a.name, url = _a.url;
                _this.props.setTemplateUrl(url, name);
            });
        }
    };
    HandlebarTemplateDisplay.prototype.openStyleLinkPicker = function (event) {
        var _this = this;
        if (this.linkPickerPanel) {
            this.linkPickerPanel.pickLink()
                .then(function (_a) {
                var name = _a.name, url = _a.url;
                _this.props.setStyleUrl(url, name);
            });
        }
    };
    HandlebarTemplateDisplay.prototype.openScriptLinkPicker = function (event) {
        var _this = this;
        if (this.linkPickerPanel) {
            this.linkPickerPanel.pickLink()
                .then(function (_a) {
                var name = _a.name, url = _a.url;
                _this.props.setScriptUrl(url, name);
            });
        }
    };
    HandlebarTemplateDisplay.prototype.copyTemplate = function (event) {
        var template = new Blob([this.templateExport], { type: "text/html;charset=utf-8" });
        window["saveAs"](template, "example.html");
    };
    HandlebarTemplateDisplay.prototype.componentDidMount = function () {
        if (this.props.jsUrl) {
            var script = document.createElement("script");
            script.src = this.props.jsUrl + "?v=1.0";
            script.async = true;
            document.body.appendChild(script);
        }
        if (this.props.cssUrl) {
            var link = document.createElement("link");
            link.href = this.props.cssUrl + "?v=1.0";
            link.rel = "stylesheet";
            link.type = "text/css";
            document.head.appendChild(link);
        }
    };
    HandlebarTemplateDisplay.prototype.render = function () {
        var _this = this;
        var template = Handlebars.compile(this.props.template);
        return (React.createElement("div", null,
            React.createElement("div", { className: HandlebarTemplateDisplay_module_scss_1.default["webpart-header"] },
                this.props.isEdit && React.createElement("textarea", { onChange: this.setTitle.bind(this), className: HandlebarTemplateDisplay_module_scss_1.default["edit"], placeholder: strings.TitlePlaceholder, "aria-label": "Add a title", defaultValue: this.props.title }),
                !this.props.isEdit && this.props.title && React.createElement("span", { className: HandlebarTemplateDisplay_module_scss_1.default["view"] }, this.props.title)),
            React.createElement("div", { className: this.props.containerClass },
                this.props.items.length > 0 && this.props.templateUrl && this.props.items.map(function (item) { return _this.templateRender(item, template); }),
                this.props.items.length > 0 && !this.props.templateUrl && this.noTemplateRender(this.props.items[0]),
                this.props.items.length === 0 && !this.props.listIsSelected && this.renderConfigureWebPartView()),
            React.createElement(LinkPickerPanel_1.default, { className: HandlebarTemplateDisplay_module_scss_1.default["link-picker"], webPartContext: this.props.context, webAbsUrl: this.props.context.pageContext.web.absoluteUrl, linkType: ILinkPickerPanelProps_1.LinkType.any, ref: function (ref) { _this.linkPickerPanel = ref; } })));
    };
    HandlebarTemplateDisplay.prototype.templateRender = function (item, template) {
        return (React.createElement("span", { dangerouslySetInnerHTML: { __html: template(item) } }));
    };
    HandlebarTemplateDisplay.prototype.noTemplateRender = function (item) {
        this.templateExport = this.buildExampleTemplate(item);
        var temaplate = Handlebars.compile(this.templateExport);
        return (React.createElement("div", null,
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement(Button_1.Button, { iconProps: { iconName: "Download" }, style: { position: "absolute", right: '0', top: "0" }, onClick: this.copyTemplate.bind(this) }, strings.DownloadButtonText)),
            React.createElement("div", { style: { border: '1px solid #DEDEDE', marginBottom: '5px', padding: '7px' }, dangerouslySetInnerHTML: { __html: temaplate(item) } })));
    };
    HandlebarTemplateDisplay.prototype.buildExampleTemplate = function (obj, path) {
        if (path === void 0) { path = ""; }
        var template = "";
        var separator = path ? "." : "";
        for (var i in obj) {
            if (typeof obj[i] === 'object') {
                template += this.getLeadingTab(path) + '<div style="margin-left:10px;">';
                template += '\n' + this.getLeadingTab(path) + '    <span style="font-weight:bold;">';
                template += i + ": ";
                template += "</span>";
                template += "\n" + this.getLeadingTab(path) + "    <span>";
                template += this.buildExampleTemplate(obj[i], path + separator + i);
                template += "</span>";
                template += "\n" + this.getLeadingTab(path) + "</div>\n";
            }
            else {
                template += this.getLeadingTab(path) + '<div style="margin-left:10px;">';
                template += '\n' + this.getLeadingTab(path) + '    <span style="font-weight:bold;">';
                template += i + ": ";
                template += "</span>";
                template += "\n" + this.getLeadingTab(path) + '    <span style="word-wrap:break-word;">';
                template += "{{" + path + separator + i + "}}";
                template += "</span>";
                template += this.getLeadingTab(path) + "\n</div>\n";
            }
        }
        return template;
    };
    HandlebarTemplateDisplay.prototype.getLeadingTab = function (path) {
        var periodFinder = new RegExp(/\./g);
        var periods = periodFinder.exec(path);
        var periodCount = periods ? periods.length : 0;
        var leading = "";
        for (var i = 0; i < periodCount; i++) {
            leading += specialChar;
        }
        return leading;
    };
    HandlebarTemplateDisplay.prototype.renderConfigureWebPartView = function () {
        return (React.createElement(Button_1.CommandButton, { iconProps: { iconName: "Settings" }, onClick: this.openPropertyPane.bind(this) }, strings.ConfigureWebPartButtonText));
    };
    HandlebarTemplateDisplay.prototype.openPropertyPane = function (event) {
        this.props.context.propertyPane.open();
    };
    return HandlebarTemplateDisplay;
}(React.Component));
exports.default = HandlebarTemplateDisplay;

//# sourceMappingURL=HandlebarTemplateDisplay.js.map
