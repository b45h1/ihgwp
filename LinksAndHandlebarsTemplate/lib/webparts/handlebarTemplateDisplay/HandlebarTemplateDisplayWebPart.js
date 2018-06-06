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
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_http_1 = require("@microsoft/sp-http");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("handlebarTemplateDisplayStrings");
var HandlebarTemplateDisplay_1 = require("./components/HandlebarTemplateDisplay");
var PropertyFieldCamlQueryFieldMapping_1 = require("../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping");
var queryStringParser_1 = require("../../utilities/urlparser/queryStringParser");
var sp_pnp_js_1 = require("sp-pnp-js");
var HandlebarTemplateDisplayWebPart = (function (_super) {
    __extends(HandlebarTemplateDisplayWebPart, _super);
    function HandlebarTemplateDisplayWebPart() {
        var _this = _super.call(this) || this;
        _this.onPropertyPaneFieldChanged = _this.onPropertyPaneFieldChanged.bind(_this);
        return _this;
    }
    HandlebarTemplateDisplayWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp_pnp_js_1.default.setup({
                spfxContext: _this.context
            });
        });
    };
    Object.defineProperty(HandlebarTemplateDisplayWebPart.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        set: function (v) {
            this._fields = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HandlebarTemplateDisplayWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    HandlebarTemplateDisplayWebPart.prototype.render = function () {
        var _this = this;
        var propData = this.properties.listQueryData ? JSON.parse(this.properties.listQueryData) : { fieldMappings: [], selectedList: {} };
        var element = React.createElement(HandlebarTemplateDisplay_1.default, {
            isEdit: this.displayMode === sp_core_library_1.DisplayMode.Edit,
            title: this.properties.title,
            items: [],
            templateUrl: this.properties.handlebarTemplateUrl,
            template: "",
            cssUrl: this.properties.cssUrl,
            jsUrl: this.properties.jsUrl,
            context: this.context,
            listIsSelected: propData.selectedList.id !== undefined,
            containerClass: this.properties.containerClass,
            setTitle: this.setTitle.bind(this),
            setTemplateUrl: this.setTemplateUrl.bind(this),
            setStyleUrl: this.setCSSUrl.bind(this),
            setScriptUrl: this.setJSUrl.bind(this)
        });
        if (propData.selectedList.id) {
            sp_pnp_js_1.default.sp.web.lists.getById(propData.selectedList.id).getItemsByCAMLQuery({ ViewXml: queryStringParser_1.default.ReplaceQueryStringParameters(this.properties.listQuery) }).then(function (response) {
                response.forEach(function (value) {
                    element.props.items.push(value);
                });
                _this.context.spHttpClient.get(_this.properties.handlebarTemplateUrl, sp_http_1.SPHttpClient.configurations.v1).then(function (templateResponse) {
                    templateResponse.text().then(function (s) {
                        element.props.template = s;
                        _this.webpart = ReactDom.render(element, _this.domElement);
                    });
                }).catch(function (error) {
                    _this.webpart = ReactDom.render(element, _this.domElement);
                });
            }).catch(function (error) {
                _this.webpart = ReactDom.render(element, _this.domElement);
            });
        }
        else {
            this.webpart = ReactDom.render(element, this.domElement);
        }
    };
    Object.defineProperty(HandlebarTemplateDisplayWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HandlebarTemplateDisplayWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyFieldCamlQueryFieldMapping_1.PropertyFieldCamlQueryFieldMapping('listQuery', {
                                    label: strings.QueryFieldLabel,
                                    dataPropertyPath: 'listQueryData',
                                    query: this.properties.listQuery,
                                    fieldMappings: [],
                                    createFields: [],
                                    createTitleRequired: false,
                                    includeHidden: false,
                                    orderBy: PropertyFieldCamlQueryFieldMapping_1.PropertyFieldCamlQueryOrderBy.Title,
                                    showOrderBy: true,
                                    showFilters: true,
                                    showMax: true,
                                    showCreate: false,
                                    render: this.render.bind(this),
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    context: this.context,
                                    properties: this.properties,
                                    disabled: false,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'spListQueryFieldId'
                                }),
                                sp_webpart_base_1.PropertyPaneLabel("templateLabel", {
                                    text: strings.TemplateFieldLabel,
                                }),
                                sp_webpart_base_1.PropertyPaneLink("handlebarTemplateUrl", {
                                    href: this.properties.handlebarTemplateUrl,
                                    text: this.properties.handlebarTemplateUrl,
                                    target: '_blank'
                                }),
                                sp_webpart_base_1.PropertyPaneButton("templateChange", {
                                    text: strings.TemplateFieldButtonText,
                                    buttonType: sp_webpart_base_1.PropertyPaneButtonType.Primary,
                                    onClick: this.openTemplateSelector.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneLabel("cssLabel", {
                                    text: strings.StyleFieldLabel,
                                }),
                                sp_webpart_base_1.PropertyPaneLink("cssUrl", {
                                    href: this.properties.cssUrl,
                                    text: this.properties.cssUrl,
                                    target: '_blank'
                                }),
                                sp_webpart_base_1.PropertyPaneButton("cssChange", {
                                    text: strings.StyleFieldButtonText,
                                    buttonType: sp_webpart_base_1.PropertyPaneButtonType.Primary,
                                    onClick: this.openStyleSelector.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneLabel("jsLabel", {
                                    text: strings.ScriptFieldLabel,
                                }),
                                sp_webpart_base_1.PropertyPaneLink("jsUrl", {
                                    href: this.properties.jsUrl,
                                    text: this.properties.jsUrl,
                                    target: '_blank'
                                }),
                                sp_webpart_base_1.PropertyPaneButton("jsChange", {
                                    text: strings.ScriptFieldButtonText,
                                    buttonType: sp_webpart_base_1.PropertyPaneButtonType.Primary,
                                    onClick: this.openScriptSelector.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneTextField("containerClass", {
                                    label: strings.ContainerClassLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    HandlebarTemplateDisplayWebPart.prototype.openTemplateSelector = function (event) {
        this.webpart.openTemplateLinkPicker();
    };
    HandlebarTemplateDisplayWebPart.prototype.openStyleSelector = function (event) {
        this.webpart.openStyleLinkPicker();
    };
    HandlebarTemplateDisplayWebPart.prototype.openScriptSelector = function (event) {
        this.webpart.openScriptLinkPicker();
    };
    HandlebarTemplateDisplayWebPart.prototype.setTitle = function (title) {
        this.properties.title = title;
    };
    HandlebarTemplateDisplayWebPart.prototype.setTemplateUrl = function (url, name) {
        var oldUrl = this.properties.handlebarTemplateUrl;
        this.properties.handlebarTemplateUrl = url;
        this.onPropertyPaneFieldChanged("handlebarTemplateUrl", oldUrl, url);
        this.render();
        this.context.propertyPane.refresh();
    };
    HandlebarTemplateDisplayWebPart.prototype.setCSSUrl = function (url, name) {
        var oldUrl = this.properties.cssUrl;
        this.properties.cssUrl = url;
        this.onPropertyPaneFieldChanged("cssUrl", oldUrl, url);
        this.render();
        this.context.propertyPane.refresh();
    };
    HandlebarTemplateDisplayWebPart.prototype.setJSUrl = function (url, name) {
        var oldUrl = this.properties.jsUrl;
        this.properties.jsUrl = url;
        this.onPropertyPaneFieldChanged("jsUrl", oldUrl, url);
        this.render();
        this.context.propertyPane.refresh();
    };
    return HandlebarTemplateDisplayWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HandlebarTemplateDisplayWebPart;

//# sourceMappingURL=HandlebarTemplateDisplayWebPart.js.map
