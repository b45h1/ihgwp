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
var strings = require("featuredContentWebPartStrings");
var FeaturedContentWebPart_1 = require("./components/FeaturedContentWebPart");
var FeatureContentLayout_1 = require("./components/layouts/FeatureContentLayout");
var PropertyFieldCamlQueryFieldMapping_1 = require("../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping");
var sp_pnp_js_1 = require("sp-pnp-js");
var PropertyFieldImageSelector_1 = require("../../propertyPane/propertyFieldImageSelector/PropertyFieldImageSelector");
var queryStringParser_1 = require("../../utilities/urlparser/queryStringParser");
var urlField = "URL";
var imageField = "Image";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var contentField = "Content";
var FeaturedContentWebPartWebPart = (function (_super) {
    __extends(FeaturedContentWebPartWebPart, _super);
    function FeaturedContentWebPartWebPart() {
        var _this = _super.call(this) || this;
        _this._activeIndex = -1;
        _this.onPropertyPaneFieldChanged = _this.onPropertyPaneFieldChanged.bind(_this);
        if (document.querySelectorAll("link[href*='bootstrap.min.css']").length === 0) {
            sp_loader_1.SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
        }
        return _this;
    }
    FeaturedContentWebPartWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp_pnp_js_1.default.setup({
                spfxContext: _this.context
            });
        });
    };
    Object.defineProperty(FeaturedContentWebPartWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FeaturedContentWebPartWebPart.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (v) {
            this._activeIndex = v;
        },
        enumerable: true,
        configurable: true
    });
    FeaturedContentWebPartWebPart.prototype.render = function () {
        var _this = this;
        this.properties.featuredContentItems.forEach(function (element) {
            if (element.Content === undefined) {
                element.Content = "";
            }
            if (element.ImageMode === undefined) {
                element.ImageMode = PropertyFieldImageSelector_1.ImageDisplayType.Auto;
            }
        });
        var element = React.createElement(FeaturedContentWebPart_1.default, {
            featuredContentItems: this.properties.featuredContentItems,
            title: this.properties.title,
            isEdit: this.displayMode === sp_core_library_1.DisplayMode.Edit,
            layoutMode: this.properties.layoutMode,
            usesListMode: this.properties.usesListMode,
            advancedCamlData: this.properties.advancedCamlData,
            advancedCamlQuery: this.properties.advancedCamlQuery,
            links: [],
            context: this.context,
            setTitle: this.setTitle.bind(this),
            setUrl: this.setUrl.bind(this),
            editItem: this.editBasicItem.bind(this),
            deleteItem: this.deleteBasicItem.bind(this),
            rearrangeItems: this.rearrangeBasicItems.bind(this),
            resetActiveIndex: this.resetIndex.bind(this)
        });
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
                    _this.webpart = ReactDom.render(element, _this.domElement);
                }).catch(function (error) { });
            }
        }
        else
            this.webpart = ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(FeaturedContentWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    FeaturedContentWebPartWebPart.prototype.openLinkSelector = function (event) {
        this.webpart.openLinkPicker(event);
    };
    FeaturedContentWebPartWebPart.prototype.itemValidation = function (length, required, errorText, value) {
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
    FeaturedContentWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        if (this.context.propertyPane.isRenderedByWebPart())
            return this.getEditItemPropertyPane();
        return this.getWebPartPropertyPane();
    };
    FeaturedContentWebPartWebPart.prototype.getWebPartPropertyPane = function () {
        return {
            pages: [
                {
                    header: {
                        description: ''
                    },
                    groups: [
                        {
                            groupName: strings.LayoutLabel,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneChoiceGroup("layoutMode", {
                                    label: strings.LayoutSelectorLabel,
                                    options: [
                                        {
                                            checked: this.properties.layoutMode === FeatureContentLayout_1.FeaturedContentLayout.HorizontalTitleOnly,
                                            key: FeatureContentLayout_1.FeaturedContentLayout.HorizontalTitleOnly,
                                            imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                                            imageSize: { height: 32, width: 32 },
                                            text: strings.TitleOnlyLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === FeatureContentLayout_1.FeaturedContentLayout.HorizontalTitleAndDescription,
                                            key: FeatureContentLayout_1.FeaturedContentLayout.HorizontalTitleAndDescription,
                                            imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            text: strings.TitleDescriptionLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === FeatureContentLayout_1.FeaturedContentLayout.Vertical,
                                            key: FeatureContentLayout_1.FeaturedContentLayout.Vertical,
                                            imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Stacked.svg",
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Stacked.svg",
                                            text: strings.StackedLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === FeatureContentLayout_1.FeaturedContentLayout.VerticalAlternating,
                                            key: FeatureContentLayout_1.FeaturedContentLayout.VerticalAlternating,
                                            imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Alt-Stacked.svg",
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Alt-Stacked.svg",
                                            text: strings.AltStackedLabel
                                        }
                                    ]
                                })
                            ]
                        },
                        {
                            groupName: strings.AdvancedListModeGroupLabel,
                            isCollapsed: !this.properties.usesListMode,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneToggle('usesListMode', {
                                    label: strings.AdvancedEnableListModeLabel,
                                    onText: strings.OnLabel,
                                    offText: strings.OffLabel
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
                                        { name: imageField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                                        { name: descriptionField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                                        { name: contentField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                                        { name: openNewTabField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Boolean, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required }
                                    ],
                                    createFields: [
                                        '<Field ID="{c29e077d-f466-4d8e-8bbe-72b66c5f205c}" Name="URL" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="URL" Group="Base Columns" Type="URL" DisplayName="URL" Required="TRUE"/>',
                                        '<Field Type="Text" DisplayName="Description" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{6df0c033-e0f6-4801-aa83-b7a5bb80f0f4}" SourceID="{a5df0f33-264b-4bf8-a651-222fcdf5d32d}" StaticName="Description" Name="Description" Version="5" />',
                                        '<Field Type="Note" DisplayName="Content" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" NumLines="6" RichText="TRUE" RichTextMode="FullHtml" IsolateStyles="TRUE" Sortable="FALSE" ID="{24f71f35-b1ad-43dc-8ad7-56faddad0870}" SourceID="{11fc90a7-6fab-44ff-87ca-f7ac20b3bc50}" StaticName="Content" Name="Content" ColName="ntext2" RowOrdinal="0" Version="1" />',
                                        '<Field Type="Number" DisplayName="SortOrder" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{7a911a9e-dbe1-4a87-bd40-c042db929a80}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="SortOrder" Name="SortOrder" Version="5" />',
                                        '<Field Type="URL" DisplayName="Image" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{f9ba1903-e722-42cd-843e-f898d4c1fcb4}" SourceID="{f9ba1903-e722-42cd-843e-f898d4c1fcb4}" StaticName="Image" Name="Image" Version="5" />',
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
    FeaturedContentWebPartWebPart.prototype.getEditItemPropertyPane = function () {
        var _this = this;
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
                                sp_webpart_base_1.PropertyPaneTextField("featuredContentItems[" + this.activeIndex + "].Title", {
                                    label: strings.EditItemGeneralTitleLabel,
                                    description: strings.EditItemGeneralTitlePreCountLabel + (80 - this.properties.featuredContentItems[this.activeIndex].Title.length) + strings.EditItemGeneralTitlePostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 80, true, strings.EditItemGeneralTitleErrorText)
                                }),
                                sp_webpart_base_1.PropertyPaneTextField("featuredContentItems[" + this.activeIndex + "].Description", {
                                    label: strings.EditItemGeneralDescriptionLabel,
                                    description: strings.EditItemGeneralDescriptionPreCountLabel + (130 - (this.properties.featuredContentItems[this.activeIndex].Description ? this.properties.featuredContentItems[this.activeIndex].Description.length : 0)) + strings.EditItemGeneralDescriptionPostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 130, false, strings.EditItemGeneralDescriptionErrorText)
                                }),
                                sp_webpart_base_1.PropertyPaneTextField("featuredContentItems[" + this.activeIndex + "].Content", {
                                    label: strings.EditItemGeneralContentLabel,
                                    multiline: true
                                }),
                                sp_webpart_base_1.PropertyPaneLabel("itemLinkLabel", {
                                    text: strings.EditItemGeneralSelectLinkLabel
                                }),
                                sp_webpart_base_1.PropertyPaneLink("featuredContentItems[" + this.activeIndex + "].URL", {
                                    target: "_blank",
                                    href: this.properties.featuredContentItems[this.activeIndex].URL,
                                    text: this.properties.featuredContentItems[this.activeIndex].URL
                                }),
                                sp_webpart_base_1.PropertyPaneButton("itemChangeLink", {
                                    text: strings.EditItemGeneralSelectLinkButtonText,
                                    buttonType: sp_webpart_base_1.PropertyPaneButtonType.Primary,
                                    onClick: this.openLinkSelector.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneCheckbox("featuredContentItems[" + this.activeIndex + "].NewTab", {
                                    text: strings.EditItemGeneralOpenTabLabel
                                })
                            ]
                        },
                        {
                            groupName: strings.EditItemImageLabel,
                            groupFields: [
                                PropertyFieldImageSelector_1.PropertyPaneImageSelector("featuredContentItems[" + this.activeIndex + "].Image", {
                                    label: strings.EditItemImageEntryLabel,
                                    properties: this.properties,
                                    context: this.context,
                                    changeImage: function (url, name) {
                                        var oldMode = _this.properties.featuredContentItems[_this.activeIndex].ImageMode;
                                        var oldUrl = _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl;
                                        var oldImage = _this.properties.featuredContentItems[_this.activeIndex].Image;
                                        var newUrl = url.indexOf(_this.context.pageContext.web.absoluteUrl) > -1 ? _this.context.pageContext.web.absoluteUrl + "/_layouts/15/getpreview.ashx?resolution=0&clientMode=modernWebPart&path=" + url : url;
                                        _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = newUrl;
                                        _this.properties.featuredContentItems[_this.activeIndex].Image = newUrl;
                                        _this.properties.featuredContentItems[_this.activeIndex].ImageMode = PropertyFieldImageSelector_1.ImageDisplayType.Custom;
                                        if (name) {
                                            var oldAlt = _this.properties.featuredContentItems[_this.activeIndex].ImageAlternate;
                                            _this.properties.featuredContentItems[_this.activeIndex].ImageAlternate = name;
                                            _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].ImageAlternate", oldAlt, name);
                                        }
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].ImageMode", oldMode, PropertyFieldImageSelector_1.ImageDisplayType.Custom);
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].Image", oldImage, newUrl);
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].CustomImageUrl", oldUrl, newUrl);
                                        _this.render();
                                        _this.context.propertyPane.refresh();
                                    },
                                    changeImageMode: function (mode) {
                                        var oldMode = _this.properties.featuredContentItems[_this.activeIndex].ImageMode;
                                        var oldImage = _this.properties.featuredContentItems[_this.activeIndex].Image;
                                        _this.properties.featuredContentItems[_this.activeIndex].ImageMode = mode;
                                        _this.properties.featuredContentItems[_this.activeIndex].Image = mode == PropertyFieldImageSelector_1.ImageDisplayType.Auto ?
                                            _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl :
                                            _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl;
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].ImageMode", oldMode, mode);
                                        _this.onPropertyPaneFieldChanged("featuredContentItems[" + _this.activeIndex + "].Image", oldImage, _this.properties.featuredContentItems[_this.activeIndex].Image);
                                        _this.render();
                                        _this.context.propertyPane.refresh();
                                    },
                                    imageMode: this.properties.featuredContentItems[this.activeIndex].ImageMode,
                                    key: "imageSelector"
                                }),
                                sp_webpart_base_1.PropertyPaneTextField("featuredContentItems[" + this.activeIndex + "].ImageAlternate", {
                                    label: strings.EditItemGeneralAlternateLabel,
                                    description: strings.EditItemGeneralDescriptionPreCountLabel + (130 - (this.properties.featuredContentItems[this.activeIndex].ImageAlternate ? this.properties.featuredContentItems[this.activeIndex].ImageAlternate.length : 0)) + strings.EditItemGeneralDescriptionPostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 130, false, strings.EditItemGeneralDescriptionErrorText)
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    FeaturedContentWebPartWebPart.prototype.rearrangeBasicItems = function (newOrder) {
        var currArr = this.properties.featuredContentItems;
        var newArr = new Array();
        for (var num in newOrder)
            newArr.push(this.properties.featuredContentItems[newOrder[num]]);
        this.properties.featuredContentItems.length = 0;
        for (var val in newArr)
            this.properties.featuredContentItems.push(newArr[val]);
        this.render();
    };
    FeaturedContentWebPartWebPart.prototype.editBasicItem = function (index) {
        if (index === -1) {
            this.properties.featuredContentItems.push({
                Title: strings.TitlePlaceholder,
                URL: "",
                NewTab: false,
                Image: "",
                Description: "",
                Content: "",
                ImageAlternate: "",
                CustomImageUrl: "",
                ImageMode: PropertyFieldImageSelector_1.ImageDisplayType.Auto,
                PreviewImageUrl: ""
            });
            index = this.properties.featuredContentItems.length - 1;
        }
        this.activeIndex = index;
        this.context.propertyPane.open();
    };
    FeaturedContentWebPartWebPart.prototype.deleteBasicItem = function (index) {
        this.properties.featuredContentItems.splice(index, 1);
        this.render();
    };
    //Function to validate previewUrl before setting Image property of item.
    FeaturedContentWebPartWebPart.prototype.checkImage = function (imageSrc, success, failure) {
        var img = new Image();
        img.onload = success;
        img.onerror = failure;
        img.src = imageSrc;
    };
    FeaturedContentWebPartWebPart.prototype.setUrl = function (urlString, name) {
        var _this = this;
        if (this.activeIndex === -1) {
            this.properties.featuredContentItems.push({
                Title: strings.TitlePlaceholder,
                Description: "",
                Content: "",
                URL: "",
                NewTab: false,
                Image: "",
                ImageAlternate: "",
                CustomImageUrl: "",
                ImageMode: PropertyFieldImageSelector_1.ImageDisplayType.Auto,
                PreviewImageUrl: ""
            });
            this.activeIndex = this.properties.featuredContentItems.length - 1;
        }
        var isDoc = false;
        var docExtensions = ["pdf", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pptm", "dot"];
        for (var i in docExtensions) {
            if (urlString.indexOf(docExtensions[i], urlString.length - docExtensions[i].length) !== -1)
                isDoc = true;
        }
        this.properties.featuredContentItems[this.activeIndex].URL = urlString + (isDoc ? "?web=1" : "");
        this.properties.featuredContentItems[this.activeIndex].Title = name ? name : this.properties.featuredContentItems[this.activeIndex].Title;
        //If image is on host server
        var url = new URL(urlString);
        if (url.host === window.location.host) {
            //Generate preview urlString
            var tmpPreviewUrl = urlString.indexOf("getpreview.ashx") > -1 ? urlString : this.context.pageContext.web.serverRelativeUrl + "/_layouts/15/getpreview.ashx?resolution=0&clientMode=modernWebPart&path=" + encodeURIComponent(urlString);
            //Validate its an image
            this.checkImage(tmpPreviewUrl, function () {
                //Success function, set Image to preview urlString unless user has already set a custom image.
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = tmpPreviewUrl;
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = tmpPreviewUrl;
                if (_this.properties.featuredContentItems[_this.activeIndex].ImageMode == PropertyFieldImageSelector_1.ImageDisplayType.Auto) {
                    _this.properties.featuredContentItems[_this.activeIndex].Image = tmpPreviewUrl;
                }
                else {
                    //if image isn't already set, reset to preview urlString
                    if (!_this.properties.featuredContentItems[_this.activeIndex].Image)
                        _this.properties.featuredContentItems[_this.activeIndex].Image = tmpPreviewUrl;
                }
                _this.context.propertyPane.refresh();
                //Force UI to display new image.
                _this.render();
            }, function () {
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].Image = "";
                _this.context.propertyPane.refresh();
            }); //Failure function -- reset images to blank in case of link change
        }
        else {
            //Image is external URL
            this.checkImage(urlString, function () {
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = encodeURI(urlString);
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = encodeURI(urlString);
                _this.properties.featuredContentItems[_this.activeIndex].Image = encodeURI(urlString);
                _this.context.propertyPane.refresh();
            }, function () {
                _this.properties.featuredContentItems[_this.activeIndex].PreviewImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].CustomImageUrl = "";
                _this.properties.featuredContentItems[_this.activeIndex].Image = "";
                _this.context.propertyPane.refresh();
            });
        }
        if (!this.propertyPaneRenderedByWebPart)
            this.context.propertyPane.open();
        this.context.propertyPane.refresh();
    };
    FeaturedContentWebPartWebPart.prototype.setTitle = function (title) {
        this.properties.title = title;
    };
    FeaturedContentWebPartWebPart.prototype.resetIndex = function () {
        this.activeIndex = -1;
    };
    FeaturedContentWebPartWebPart.prototype.onContentChange = function (content) {
        var initVal = this.properties.featuredContentItems[this.activeIndex].Content;
        this.properties.featuredContentItems[this.activeIndex].Content = content;
        this.onPropertyPaneFieldChanged("featuredContentItems[" + this.activeIndex + "].Content", initVal, content);
        this.render();
    };
    return FeaturedContentWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = FeaturedContentWebPartWebPart;

//# sourceMappingURL=FeaturedContentWebPartWebPart.js.map
