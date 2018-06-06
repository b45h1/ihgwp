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
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_loader_1 = require("@microsoft/sp-loader");
var strings = require("boxButtonWebPartStrings");
var BoxButtonWebPart_1 = require("./components/BoxButtonWebPart");
var PropertyFieldCamlQueryFieldMapping_1 = require("../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping");
var sp_pnp_js_1 = require("sp-pnp-js");
var queryStringParser_1 = require("../../utilities/urlparser/queryStringParser");
var urlField = "URL";
var iconField = "Font Awesome Icon";
var isBlueField = "Has Blue Background";
var openNewTabField = "Open Link in New Tab";
var BoxButtonWebPartWebPart = (function (_super) {
    __extends(BoxButtonWebPartWebPart, _super);
    function BoxButtonWebPartWebPart() {
        var _this = _super.call(this) || this;
        _this._activeIndex = -1;
        sp_loader_1.SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
        sp_loader_1.SPComponentLoader.loadScript('https://thehubcdnvz.azureedge.net/hub-web-parts/polyfill.closest.min.js');
        return _this;
    }
    BoxButtonWebPartWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp_pnp_js_1.default.setup({
                spfxContext: _this.context
            });
        });
    };
    Object.defineProperty(BoxButtonWebPartWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BoxButtonWebPartWebPart.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (v) {
            this._activeIndex = v;
        },
        enumerable: true,
        configurable: true
    });
    BoxButtonWebPartWebPart.prototype.render = function () {
        var _this = this;
        // Copy properties from previous version if needed (??)
        if (!this.properties.data && this.properties.name) {
            this.properties.data = [{
                    name: this.properties.name,
                    isBlue: this.properties.isBlue,
                    icon: this.properties.fontAwesomeIcon,
                    url: this.properties.url,
                    openNew: this.properties.newTab
                }];
            this.properties.name = undefined;
            this.properties.isBlue = undefined;
            this.properties.fontAwesomeIcon = undefined;
            this.properties.url = undefined;
            this.properties.newTab = undefined;
        }
        var props = this.properties;
        var propPaneRefresh = this.context.propertyPane.refresh;
        // Set up the BoxButtonWebPart component
        var element = React.createElement(BoxButtonWebPart_1.default, {
            name: this.properties.name,
            isBlue: this.properties.isBlue,
            fontAwesomeIcon: this.properties.fontAwesomeIcon,
            url: this.properties.url,
            newTab: this.properties.newTab,
            data: this.properties.data,
            title: this.properties.title,
            usesListMode: this.properties.usesListMode,
            advancedCamlQuery: this.properties.advancedCamlQuery,
            advancedCamlData: this.properties.advancedCamlData,
            links: [],
            isEdit: this.displayMode === sp_core_library_1.DisplayMode.Edit,
            setTitle: function (title) {
                props.title = title;
            },
            // Callback from main component when user selects a new link
            setUrl: function (name, url) {
                // If there is no active index, add a new link at the top and make it active
                if (_this.activeIndex === -1) {
                    _this.properties.data.push({
                        name: name,
                        isBlue: false,
                        icon: "",
                        url: "",
                        openNew: false
                    });
                    _this.activeIndex = 0;
                }
                // Figure out if it's a document
                var isDoc = false;
                var docExtensions = ["pdf", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pptm", "dot"];
                for (var i in docExtensions) {
                    if (url.indexOf(docExtensions[i], url.length - docExtensions[i].length) !== -1)
                        isDoc = true;
                }
                if (name) {
                    props.data[_this.activeIndex].name =
                        name.split('.')[0].replace('-', ' ').replace('_', ' ');
                }
                // In the "data" (array of links) adjust the URL to use OWA if it's a document
                props.data[_this.activeIndex].url = url + (isDoc ? "?web=1" : "");
                // If the property pane isn't already open, open it and refresh it
                if (!_this.propertyPaneRenderedByWebPart)
                    _this.context.propertyPane.open();
                propPaneRefresh();
            },
            // Called when user clicks edit on a link in BoxButtonWebPart
            editItem: function (index) {
                if (index === -1) {
                    _this.properties.data.push({
                        name: strings.TitlePlaceholder,
                        isBlue: false,
                        icon: "",
                        url: "",
                        openNew: false
                    });
                    index = _this.properties.data.length - 1;
                }
                _this.activeIndex = index;
                _this.context.propertyPane.open();
            },
            // Called when user clicks delete on a link in BoxButtonWebPart
            deleteItem: function (index) {
                _this.properties.data.splice(index, 1);
                _this.render();
            },
            // Called when a user rearranges links in BoxButtonWebPart
            rearrangeItems: function (newOrder) {
                var newArr = [];
                var currArr = _this.properties.data;
                for (var num in newOrder)
                    newArr.push(_this.properties.data[newOrder[num]]);
                _this.properties.data.length = 0;
                for (var val in newArr)
                    _this.properties.data.push(newArr[val]);
                _this.render();
            },
            context: this.context
        });
        // OK we have the BoxButtonWebPart component
        // If we're in List mode, read the list
        if (this.properties.usesListMode) {
            var propData_1 = this.properties.advancedCamlData ? JSON.parse(this.properties.advancedCamlData) : { fieldMappings: [], selectedList: {} };
            if (propData_1.selectedList.id) {
                sp_pnp_js_1.default.sp.web.lists.getById(propData_1.selectedList.id).getItemsByCAMLQuery({ ViewXml: queryStringParser_1.default.ReplaceQueryStringParameters(this.properties.advancedCamlQuery) }).then(function (response) {
                    response.forEach(function (value) {
                        var link = {};
                        propData_1.fieldMappings.forEach(function (mapping) {
                            switch (mapping.type) {
                                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL:
                                    link[mapping.name] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Url"] : null;
                                    link[mapping.name + "_text"] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Description"] : null;
                                    break;
                                default:
                                    link[mapping.name] = value[mapping.mappedTo];
                                    break;
                            }
                        });
                        if (link[urlField] !== null)
                            element.props.links.push(link);
                    });
                    // TODO: Return from ReactDom.render has a race condition
                    // Switch to a function ref
                    _this.webpart = ReactDom.render(element, _this.domElement);
                }).catch(function (error) { });
            }
        }
        else
            // Not in list mode, just render the BoxButtonWebPart
            // TODO: Return from ReactDom.render has a race condition
            // Switch to a function ref
            this.webpart = ReactDom.render(element, this.domElement);
    }; // render()
    BoxButtonWebPartWebPart.prototype.setTitle = function (title) {
        this.properties.title = title;
    };
    // onClick of "Change" button in classic editing panel
    // TODO: Why is this public?
    // Event doesn't seem to be passed in
    BoxButtonWebPartWebPart.prototype.openLinkSelector = function (event) {
        this.webpart.openLinkPicker(event);
    };
    BoxButtonWebPartWebPart.prototype.itemValidation = function (length, required, errorText, value) {
        return new Promise(function (resolve) {
            if (value.length > length) {
                resolve(errorText);
            }
            else if (required && value.length < 1) {
                resolve(strings.RequiredValueErrorText);
            }
            else {
                resolve("");
            }
        });
    };
    Object.defineProperty(BoxButtonWebPartWebPart.prototype, "dataVersion", {
        // public nameValidation(value: string): Promise<string>{
        //   return new Promise<string>((resolve: (validationMessage: string)=>void)=>{
        //     if(value.length>40){
        //       resolve(strings.EditItemGeneralTitleErrorText);
        //     }
        //     else{
        //       resolve('');
        //     }
        //   });
        // }
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    BoxButtonWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        if (this.context.propertyPane.isRenderedByWebPart())
            return this.getEditItemPropertyPane();
        return this.getBasicPropertyPane();
    };
    // Property pane for List mode
    BoxButtonWebPartWebPart.prototype.getBasicPropertyPane = function () {
        return {
            pages: [
                {
                    header: {
                        description: '' //strings.PropertyPaneBaseDescription
                    },
                    groups: [
                        {
                            groupName: strings.AdvancedListModeGroupLabel,
                            isCollapsed: !this.properties.usesListMode,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneToggle('usesListMode', {
                                    label: strings.AdvancedEnableListModeLabel,
                                    onText: strings.EditItemColorOnLabel,
                                    offText: strings.EditItemColorOffLabel
                                }),
                                sp_webpart_base_1.PropertyPaneLabel('listModeInfo', {
                                    text: strings.AdvancedEnableListModeInfo
                                }),
                                PropertyFieldCamlQueryFieldMapping_1.PropertyFieldCamlQueryFieldMapping('advancedCamlQuery', {
                                    label: "",
                                    dataPropertyPath: 'advancedCamlData',
                                    query: this.properties.advancedCamlQuery,
                                    fieldMappings: [
                                        { name: urlField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                                        { name: iconField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                                        { name: isBlueField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Boolean, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                                        { name: openNewTabField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Boolean, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required }
                                    ],
                                    createFields: [
                                        '<Field ID="{c29e077d-f466-4d8e-8bbe-72b66c5f205c}" Name="URL" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="URL" Group="Base Columns" Type="URL" DisplayName="URL" Required="TRUE"/>',
                                        '<Field Type="Text" DisplayName="FontAwesomeIcon" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{6df0c002-e0f6-4801-aa83-b7a5bb80f0f4}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="FontAwesomeIcon" Name="FontAwesomeIcon" Version="5" />',
                                        '<Field Type="Number" DisplayName="SortOrder" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{7a911a9e-dbe1-4a87-bd40-c042db929a80}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="SortOrder" Name="SortOrder" Version="5" />',
                                        '<Field Type="Boolean" DisplayName="HasBlueBackground" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{f9ba1903-e7be-42cd-843e-f898d4c1fcb4}" SourceID="{f9ba1903-e7be-42cd-843e-f898d4c1fcb4}" StaticName="HasBlueBackground" Name="HasBlueBackground" Version="5" />',
                                        '<Field Type="Boolean" DisplayName="OpenLinkinNewTab" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{4bf7c60f-0737-49c9-894c-6a31af134242}" SourceID="{4bf7c60f-0737-49c9-894c-6a31af134242}" StaticName="OpenLinkInNewTab" Name="OpenLinkInNewTab" Version="5" />'
                                    ],
                                    createTitleRequired: false,
                                    includeHidden: false,
                                    orderBy: PropertyFieldCamlQueryFieldMapping_1.PropertyFieldCamlQueryOrderBy.Title,
                                    showOrderBy: true,
                                    showFilters: true,
                                    showMax: false,
                                    showCreate: true,
                                    render: this.render.bind(this),
                                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                                    context: this.context,
                                    properties: this.properties,
                                    disabled: !this.properties.usesListMode,
                                    onGetErrorMessage: null,
                                    deferredValidationTime: 0,
                                    key: 'spListQueryFieldId'
                                })
                            ]
                        }
                    ],
                    displayGroupsAsAccordion: true
                }
            ]
        };
    };
    // Property pane for editing an item in non-List mode
    BoxButtonWebPartWebPart.prototype.getEditItemPropertyPane = function () {
        return {
            pages: [
                {
                    header: {
                        description: ""
                    },
                    displayGroupsAsAccordion: true,
                    groups: [
                        {
                            groupName: strings.EditItemGeneralLabel,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField("data[" + this.activeIndex + "].name", {
                                    label: strings.EditItemGeneralTitleLabel,
                                    description: strings.EditItemGeneralTitlePreCountLabel + (40 - this.properties.data[this.activeIndex].name.length) + strings.EditItemGeneralTitlePostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 40, true, strings.EditItemGeneralTitleErrorText)
                                    //onGetErrorMessage: this.nameValidation.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneLabel("itemLinkLabel", {
                                    text: strings.EditItemGeneralSelectLinkLabel
                                }),
                                sp_webpart_base_1.PropertyPaneLink("data[" + this.activeIndex + "].url", {
                                    target: "_blank",
                                    href: this.properties.data[this.activeIndex].url,
                                    text: this.properties.data[this.activeIndex].url
                                }),
                                sp_webpart_base_1.PropertyPaneButton("itemChangeLink", {
                                    text: strings.EditItemGeneralSelectLinkButtonText,
                                    buttonType: sp_webpart_base_1.PropertyPaneButtonType.Primary,
                                    // ??? Link Selector - only this is passed, no other arg or event
                                    onClick: this.openLinkSelector.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneCheckbox("data[" + this.activeIndex + "].openNew", {
                                    text: strings.EditItemGeneralOpenTabLabel
                                })
                            ]
                        },
                        {
                            groupName: strings.EditItemIconLabel,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField("data[" + this.activeIndex + "].icon", {
                                    label: strings.EditItemIconEntryLabel,
                                    placeholder: strings.EditItemIconEntryPlaceholder
                                }),
                                sp_webpart_base_1.PropertyPaneLink('iconShortcut', {
                                    text: strings.EditItemIconEntryLinkText,
                                    href: "http://fontawesome.io/cheatsheet/",
                                    target: "_blank"
                                })
                            ]
                        },
                        {
                            groupName: strings.EditItemColorLabel,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneToggle("data[" + this.activeIndex + "].isBlue", {
                                    label: strings.EditItemColorFieldLabel,
                                    onText: strings.EditItemColorOnLabel,
                                    offText: strings.EditItemColorOffLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return BoxButtonWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = BoxButtonWebPartWebPart;

//# sourceMappingURL=BoxButtonWebPartWebPart.js.map
