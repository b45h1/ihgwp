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
var strings = require("hubLinksStrings");
var HubLinks_1 = require("./components/HubLinks");
var IHubLinksItem_1 = require("./components/IHubLinksItem");
var HubLinksLayout_1 = require("./components/layouts/HubLinksLayout");
var PropertyFieldCamlQueryFieldMapping_1 = require("../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping");
var PropertyFieldGroupSort_1 = require("../../propertyPane/propertyFieldGroupSort/PropertyFieldGroupSort");
var sp_pnp_js_1 = require("sp-pnp-js");
var queryStringParser_1 = require("../../utilities/urlparser/queryStringParser");
// import { PropertyPaneImageSelector ImageDisplayType} from '../../../lib/propertyPane/propertyFieldImageSelector/PropertyFieldImageSelector';
var PropertyFieldImageSelector_1 = require("../../propertyPane/propertyFieldImageSelector/PropertyFieldImageSelector");
var PropertyFieldColorPickerMini_1 = require("sp-client-custom-fields/lib/PropertyFieldColorPickerMini");
var PropertyFieldPicturePicker_1 = require("sp-client-custom-fields/lib/PropertyFieldPicturePicker");
var PropertyFieldNumericInput_1 = require("sp-client-custom-fields/lib/PropertyFieldNumericInput");
var titleField = "Title";
var urlField = "URL";
var iconField = "Icon";
var groupingField = "GroupBy";
var descriptionField = "Description";
var openNewTabField = "NewTab";
var imageModeHere = PropertyFieldImageSelector_1.ImageDisplayType.Custom;
var HubLinksWebPart = (function (_super) {
    __extends(HubLinksWebPart, _super);
    function HubLinksWebPart() {
        var _this = _super.call(this) || this;
        _this._activeIndex = -1;
        _this.onPropertyPaneFieldChanged = _this.onPropertyPaneFieldChanged.bind(_this);
        if (document.querySelectorAll("link[href*='font-awesome.min.css']").length === 0) {
            sp_loader_1.SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
        }
        return _this;
    }
    HubLinksWebPart.prototype.onInit = function () {
        var _this = this;
        return _super.prototype.onInit.call(this).then(function (_) {
            sp_pnp_js_1.default.setup({
                spfxContext: _this.context
            });
        });
    };
    Object.defineProperty(HubLinksWebPart.prototype, "webpart", {
        get: function () {
            return this._webpart;
        },
        set: function (v) {
            this._webpart = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubLinksWebPart.prototype, "activeIndex", {
        get: function () {
            return this._activeIndex;
        },
        set: function (v) {
            this._activeIndex = v;
        },
        enumerable: true,
        configurable: true
    });
    HubLinksWebPart.prototype.groupItems = function (items, groups) {
        var retArray = [];
        var groupId = 1;
        if (groups) {
            //Group order defined
            groups.forEach(function (grp) {
                retArray.push(new IHubLinksItem_1.HubLinksGroupItem(new IHubLinksItem_1.HubLinksItemHeading(grp, groupId), []));
                groupId++;
            });
        }
        items.forEach(function (link, idx) {
            link.index = idx.toString();
            var newLink = JSON.parse(JSON.stringify(link));
            var newGroup = true;
            newLink[groupingField] = link[groupingField] ? link[groupingField] : "Ungrouped";
            retArray.forEach(function (propLink) {
                if (propLink.Heading.Title == newLink[groupingField]) {
                    propLink.Links.push(newLink);
                    newGroup = false;
                }
            });
            if (newGroup) {
                retArray.push(new IHubLinksItem_1.HubLinksGroupItem(new IHubLinksItem_1.HubLinksItemHeading(newLink[groupingField], groupId), [newLink]));
                groupId++;
            }
        });
        return retArray;
    };
    HubLinksWebPart.prototype.render = function () {
        var _this = this;
        var self = this;
        this.checkUpdateProperties();
        var element = React.createElement(HubLinks_1.default, {
            defaultExpand: this.properties.defaultExpand,
            links: [],
            title: this.properties.title,
            promoPrefix: this.properties.promoPrefix,
            setPromoPrefix: function (promoPrefix) {
                self.properties.promoPrefix = promoPrefix;
            },
            setTitle: function (title) {
                self.properties.title = title;
            },
            isEdit: this.displayMode === sp_core_library_1.DisplayMode.Edit,
            hubLinksItems: this.properties.hubLinksItems,
            usesListMode: this.properties.usesListMode,
            setUrl: function (url, name) {
                if (_this.activeIndex === -1) {
                    _this.properties.hubLinksItems.push(new IHubLinksItem_1.HubLinksItem(null, name, url, "", "", false, "")); //strings.TitlePlaceholder
                    _this.activeIndex = _this.properties.hubLinksItems.length - 1;
                }
                var isDoc = false;
                var docExtensions = ["pdf", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pptm", "dot"];
                for (var i in docExtensions) {
                    if (url.indexOf(docExtensions[i], url.length - docExtensions[i].length) !== -1)
                        isDoc = true;
                }
                self.properties.hubLinksItems[_this.activeIndex].URL = url + (isDoc ? "?web=1" : "");
                self.properties.hubLinksItems[_this.activeIndex].Title = name ? name : _this.properties.hubLinksItems[_this.activeIndex].Title;
                if (!_this.propertyPaneRenderedByWebPart)
                    _this.context.propertyPane.open();
                self.context.propertyPane.refresh();
            },
            editItem: function (index) {
                if (index === -1) {
                    _this.properties.hubLinksItems.push(new IHubLinksItem_1.HubLinksItem(null, "")); //strings.TitlePlaceholder
                    // this.properties.featuredContentItems.push(new FeaturedItem(null, null, null, null, false, null, null, null, null, ImageDisplayType.Auto));
                    index = _this.properties.hubLinksItems.length - 1;
                }
                _this.activeIndex = index;
                _this.context.propertyPane.open();
            },
            deleteItem: function (index) {
                _this.properties.hubLinksItems.splice(index, 1);
                _this.render();
            },
            rearrangeItems: function (newOrder) {
                var newArr = new Array();
                var currArr = _this.properties.hubLinksItems;
                for (var num in newOrder)
                    newArr.push(_this.properties.hubLinksItems[newOrder[num]]);
                _this.properties.hubLinksItems.length = 0;
                for (var val in newArr)
                    _this.properties.hubLinksItems.push(newArr[val]);
                _this.render();
            },
            setGroup: function (index, group) {
                for (var i = 0; i < _this.properties.hubLinksItems.length; i++) {
                    if (_this.properties.hubLinksItems[i].index == index)
                        _this.properties.hubLinksItems[i].GroupBy = group;
                }
            },
            resetActiveIndex: function () {
                _this.activeIndex = -1;
            },
            wpBodyText: this.properties.wpBodyText,
            advancedCamlData: this.properties.data,
            context: this.context,
            layoutMode: this.properties.layoutMode,
            showDescription: this.properties.showDescription,
            compactHeader: this.properties.compactHeader,
            background: this.properties.background,
            bgImagePicker: this.properties.bgImagePicker,
            showPanel: this.properties.showPanel,
            columnWidth: this.properties.columnWidth,
            itemToDisplay: this.properties.itemToDisplay
        });
        if (this.properties.usesListMode) {
            var propData_1 = this.properties.data ? JSON.parse(this.properties.data) : { fieldMappings: [], selectedList: {} };
            if (propData_1.selectedList.id) {
                sp_pnp_js_1.default.sp.web.lists.getById(propData_1.selectedList.id).getItemsByCAMLQuery({ ViewXml: queryStringParser_1.default.ReplaceQueryStringParameters(this.properties.listQuery) }).then(function (response) {
                    response.forEach(function (value) {
                        var item = {};
                        propData_1.fieldMappings.forEach(function (mapping) {
                            switch (mapping.type) {
                                case PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL:
                                    item[mapping.name] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Url"] : null;
                                    item[mapping.name + "_text"] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Description"] : null;
                                    break;
                                default:
                                    item[mapping.name] = value[mapping.mappedTo];
                                    break;
                            }
                        });
                        if (item[urlField] !== null) {
                            //If has GroupBy field, then make sure it exists on groups property
                            if (item.GroupBy && _this.properties.groups.indexOf(item.GroupBy) < 0) {
                                //Group not in list, add
                                _this.properties.groups.push(item.GroupBy);
                            }
                            element.props.links.push(new IHubLinksItem_1.HubLinksItem(null, item[urlField + "_text"] === item[urlField] ? item.Title : item[urlField + "_text"], item.URL, item.Description, item.Icon, item.NewTab, item.GroupBy));
                        }
                    });
                    if (_this.properties.layoutMode == HubLinksLayout_1.HubLinksLayout.GroupedListLayout) {
                        //If group layout, then reform the links into a grouped format
                        element.props.links = _this.groupItems(element.props.links, _this.properties.groups);
                        //Refresh property pane if visible
                        _this.context.propertyPane.refresh();
                    }
                    _this.webpart = ReactDom.render(element, _this.domElement);
                }).catch(function (error) { });
            }
        }
        else {
            //If group layout, then reform the links into a grouped format
            if (this.properties.layoutMode == HubLinksLayout_1.HubLinksLayout.GroupedListLayout) {
                element.props.hubLinksItems = this.groupItems(this.properties.hubLinksItems, this.properties.groups);
            }
            this.webpart = ReactDom.render(element, this.domElement);
        }
    };
    HubLinksWebPart.prototype.checkUpdateProperties = function () {
        if (this.properties.version != this.dataVersion.toString()) {
            var dataObj = this.properties.data ? JSON.parse(this.properties.data) :
                {
                    filter: [],
                    max: 0,
                    selectedList: {},
                    sort: {},
                    fieldMappings: [],
                    data: {}
                };
            var groupEnabled = void 0;
            if (dataObj.fieldMappings && dataObj.fieldMappings.length > 0) {
                groupEnabled = dataObj.fieldMappings.filter(function (item) { return item.name === "Group By"; })[0].enabled;
            }
            dataObj.fieldMappings = [
                { name: urlField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL, enabled: true, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter(function (item) { return item.name === "URL"; })[0].mappedTo },
                { name: iconField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, enabled: true, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter(function (item) { return item.name === "Font Awesome Icon"; })[0].mappedTo },
                { name: groupingField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, enabled: true, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter(function (item) { return item.name === "Group By"; })[0].mappedTo },
                { name: descriptionField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, enabled: true, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                { name: titleField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, enabled: true, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required, mappedTo: "Title" },
            ];
            this.properties.layoutMode = groupEnabled ? HubLinksLayout_1.HubLinksLayout.GroupedListLayout : HubLinksLayout_1.HubLinksLayout.ListLayout;
            this.properties.usesListMode = true;
            this.properties.showDescription = false;
            this.properties.groups = [];
            this.properties.hubLinksItems = [];
            this.properties.version = this.dataVersion.toString();
            this.properties.data = JSON.stringify(dataObj);
        }
    };
    Object.defineProperty(HubLinksWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HubLinksWebPart.prototype.openLinkSelector = function (event) {
        this.webpart.openLinkPicker(event);
    };
    HubLinksWebPart.prototype.openLinkSelectorBGImage = function (event) {
        this.webpart.openLinkPicker(event);
    };
    HubLinksWebPart.prototype.itemValidation = function (length, required, errorText, value) {
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
    HubLinksWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        var pathIdx = propertyPath.indexOf('.');
        if (propertyPath.substring(pathIdx + 1) === "usesListMode" || propertyPath.substring(pathIdx + 1) == "listQuery") {
            //Reset grouping
            this.properties.groups.length = 0;
            //this.render();
        }
        else if (propertyPath.substring(pathIdx + 1) === "GroupBy") {
            if (oldValue != newValue) {
                //Initialize groups array
                if (!this.properties.groups)
                    this.properties.groups = [];
                //If old value exists, deal with it.
                if (this.properties.groups.indexOf(oldValue) > -1) {
                    //If new value exists already, don't duplicate
                    if (this.properties.groups.indexOf(newValue) > -1) {
                        //remove old value, new value is duplicate
                        this.properties.groups.splice(this.properties.groups.indexOf(oldValue));
                    }
                    else {
                        //replace old value with new value as long as old value isn't used elsewhere
                        var cnt = 0;
                        for (var i = 0; i < this.properties.hubLinksItems.length; i++) {
                            if (this.properties.hubLinksItems[i].GroupBy == oldValue)
                                cnt++;
                        }
                        //if oldValue not found in other hubLinksItems then replace the old value with new value.
                        if (cnt < 1)
                            this.properties.groups[this.properties.groups.indexOf(oldValue)] = newValue;
                        else
                            this.properties.groups.push(newValue);
                    }
                }
                else {
                    //Add new value, if length > 0, old value doesn't exist.
                    if (newValue.length > 0)
                        this.properties.groups.push(newValue);
                }
            }
        }
    };
    HubLinksWebPart.prototype.getPropertyPaneConfiguration = function () {
        if (this.context.propertyPane.isRenderedByWebPart())
            return this.getEditItemPropertyPane();
        return this.getBasicPropertyPane();
    };
    HubLinksWebPart.prototype.getBasicPropertyPane = function () {
        //Define base configuration
        var config = {
            pages: [
                {
                    header: {
                        description: ''
                    },
                    groups: [
                        {
                            groupName: strings.LayoutLabel,
                            isCollapsed: false,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneChoiceGroup("layoutMode", {
                                    label: "",
                                    options: [
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout_1.HubLinksLayout.ItemLayout,
                                            key: HubLinksLayout_1.HubLinksLayout.ItemLayout,
                                            imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                                            imageSize: { height: 32, width: 32 },
                                            text: strings.ItemLayoutLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout_1.HubLinksLayout.ListLayout,
                                            key: HubLinksLayout_1.HubLinksLayout.ListLayout,
                                            imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            text: strings.ListLayoutLabel
                                        },
                                        {
                                            checked: this.properties.layoutMode === HubLinksLayout_1.HubLinksLayout.GroupedListLayout,
                                            key: HubLinksLayout_1.HubLinksLayout.GroupedListLayout,
                                            imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            imageSize: { height: 32, width: 32 },
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            text: strings.GroupedListLayoutLabel
                                        }
                                    ]
                                })
                            ]
                        },
                        {
                            groupName: "Header",
                            isCollapsed: true,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneChoiceGroup("background", {
                                    label: "",
                                    options: [
                                        {
                                            checked: this.properties.background === HubLinksLayout_1.bgType.BgImage,
                                            key: HubLinksLayout_1.bgType.BgImage,
                                            iconProps: { officeFabricIconFontName: "FileImage" },
                                            // imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                                            imageSize: { height: 25, width: 25 },
                                            text: "Image"
                                        },
                                        {
                                            checked: this.properties.background === HubLinksLayout_1.bgType.BgColor,
                                            key: HubLinksLayout_1.bgType.BgColor,
                                            iconProps: { officeFabricIconFontName: "Color" },
                                            // imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            imageSize: { height: 25, width: 25 },
                                            selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                                            text: "Color"
                                        }
                                    ]
                                })
                            ]
                        }
                    ],
                    displayGroupsAsAccordion: true
                }
            ]
        };
        //Add alternate configurations based on layout
        switch (this.properties.layoutMode) {
            case HubLinksLayout_1.HubLinksLayout.GroupedListLayout:
                //Add show description
                config.pages[0].groups[0].groupFields.push(sp_webpart_base_1.PropertyPaneToggle('showDescription', {
                    label: strings.ShowDescriptionLabel,
                    onText: strings.OnLabel,
                    offText: strings.OffLabel
                }));
                //Add groupes expanded by default
                config.pages[0].groups[0].groupFields.push(sp_webpart_base_1.PropertyPaneToggle('defaultExpand', {
                    label: strings.ExpandDefaultLabel,
                    onText: strings.OnLabel,
                    offText: strings.OffLabel,
                }));
                //Add Group Sort 
                config.pages[0].groups[0].groupFields.push(PropertyFieldGroupSort_1.PropertyPaneGroupSort('groups', {
                    label: strings.GroupSortLabel,
                    initialValue: this.properties.groups,
                    render: this.render.bind(this),
                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                    properties: this.properties,
                    disabled: false,
                    onGetErrorMessage: null,
                    deferredValidationTime: 0,
                    key: 'webpartGroupSort'
                }));
                break;
            case HubLinksLayout_1.HubLinksLayout.ItemLayout:
                break;
            default:
                //Add show description
                config.pages[0].groups[0].groupFields.push(sp_webpart_base_1.PropertyPaneToggle('showDescription', {
                    label: strings.ShowDescriptionLabel,
                    onText: strings.OnLabel,
                    offText: strings.OffLabel
                }));
                break;
        }
        switch (this.properties.background) {
            case HubLinksLayout_1.bgType.BgColor:
                //Background Image setup
                config.pages[0].groups[1].groupFields.push(PropertyFieldColorPickerMini_1.PropertyFieldColorPickerMini('bgImagePicker', {
                    label: "Choose a color",
                    initialColor: "#909090",
                    onPropertyChange: this.onPropertyPaneFieldChanged,
                    render: this.render.bind(this),
                    disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                    properties: this.properties,
                    key: 'verticalTimelineBgColorField'
                }));
                //Header compact view
                {
                    this.properties.layoutMode != 1 &&
                        config.pages[0].groups[1].groupFields.push(sp_webpart_base_1.PropertyPaneToggle('compactHeader', {
                            label: "Compact Header",
                            onText: strings.OnLabel,
                            offText: strings.OffLabel
                        }));
                }
                break;
            case HubLinksLayout_1.bgType.BgImage:
                config.pages[0].groups[1].groupFields.push(PropertyFieldPicturePicker_1.PropertyFieldPicturePicker("bgImagePicker", {
                    label: 'Select an image',
                    initialValue: this.properties.bgImagePicker,
                    readOnly: true,
                    previewImage: true,
                    allowedFileExtensions: '.gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png',
                    disabled: false,
                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                    render: this.render.bind(this),
                    disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                    properties: this.properties,
                    context: this.context,
                    onGetErrorMessage: null,
                    deferredValidationTime: 0,
                    key: 'picturePickerFieldId'
                }));
                break;
            default:
                config.pages[0].groups[1].groupFields.push(PropertyFieldPicturePicker_1.PropertyFieldPicturePicker("bgImagePicter", {
                    label: 'Select an image',
                    initialValue: this.properties.bgImagePicker,
                    readOnly: true,
                    previewImage: true,
                    allowedFileExtensions: '.gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png',
                    disabled: false,
                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                    render: this.render.bind(this),
                    disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                    properties: this.properties,
                    context: this.context,
                    onGetErrorMessage: null,
                    deferredValidationTime: 0,
                    key: 'picturePickerFieldId'
                }));
                break;
        }
        //Add Webpart Body Text
        config.pages[0].groups[0].groupFields.push(sp_webpart_base_1.PropertyPaneTextField('wpBodyText', {
            label: strings.WebPartBodyText,
            multiline: true
        }));
        //Add Number of item to display
        {
            this.properties.layoutMode == 0 &&
                config.pages[0].groups[0].groupFields.push(PropertyFieldNumericInput_1.PropertyFieldNumericInput('itemToDisplay', {
                    label: 'Item to display',
                    min: 0,
                    initialValue: this.properties.itemToDisplay,
                    max: 100,
                    step: 1,
                    precision: 0,
                    size: 10,
                    disabled: false,
                    onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                    render: this.render.bind(this),
                    disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                    properties: this.properties,
                    onGetErrorMessage: null,
                    deferredValidationTime: 0,
                    key: 'numericFieldId'
                }));
        }
        //Add usesListMode
        config.pages[0].groups[0].groupFields.push(sp_webpart_base_1.PropertyPaneToggle('showPanel', {
            label: "Enable Side Panel",
            onText: strings.OnLabel,
            offText: strings.OffLabel
        }));
        //Add usesListMode
        // config.pages[0].groups[0].groupFields.push(
        //   PropertyPaneToggle('usesListMode',{
        //     label: strings.AdvancedEnableListModeLabel,
        //     onText: strings.OnLabel,
        //     offText: strings.OffLabel
        //   })
        // );
        // config.pages[0].groups[0].groupFields.push(
        //   PropertyPaneLabel('listModeInfo',{
        //     text: strings.AdvancedEnableListModeInfo
        //   })
        // );
        //If usesListMode, the add advanced list mode group
        if (this.properties.usesListMode) {
            //Build fieldMapping array.
            var fieldMappings = [
                { name: urlField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.URL, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                { name: iconField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                { name: groupingField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                { name: titleField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required },
                { name: openNewTabField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Boolean, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required }
            ];
            //If showDescription then add mapping for description field.
            if (this.properties.layoutMode === HubLinksLayout_1.HubLinksLayout.ItemLayout || this.properties.showDescription) {
                fieldMappings.push({ name: descriptionField, type: PropertyFieldCamlQueryFieldMapping_1.SPFieldType.Text, requiredLevel: PropertyFieldCamlQueryFieldMapping_1.SPFieldRequiredLevel.Required });
            }
            config.pages[0].groups.push({
                groupName: strings.AdvancedListModeGroupLabel,
                isCollapsed: !this.properties.usesListMode,
                groupFields: [
                    PropertyFieldCamlQueryFieldMapping_1.PropertyFieldCamlQueryFieldMapping('listQuery', {
                        label: strings.ListQueryGroupName,
                        dataPropertyPath: "data",
                        query: this.properties.listQuery,
                        fieldMappings: fieldMappings,
                        createFields: [
                            '<Field Type="Text" DisplayName="LinkCategory" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{0dfb4045-98b8-4bad-ac61-d9c42f67d262}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="LinkCategory" Name="LinkCategory" Version="5" />',
                            '<Field ID="{c29e077d-f466-4d8e-8bbe-72b66c5f205c}" Name="URL" SourceID="http://schemas.microsoft.com/sharepoint/v3" StaticName="URL" Group="Base Columns" Type="URL" DisplayName="URL" Required="TRUE"/>',
                            '<Field Type="Text" DisplayName="FontAwesomeIcon" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{6df0c002-e0f6-4801-aa83-b7a5bb80f0f4}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="FontAwesomeIcon" Name="FontAwesomeIcon" Version="5" />',
                            '<Field Type="Number" DisplayName="SortOrder" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" Group="Web Part Columns" ID="{7a911a9e-dbe1-4a87-bd40-c042db929a80}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="SortOrder" Name="SortOrder" Version="5" />',
                            '<Field Type="Text" DisplayName="Description" Required="FALSE" EnforceUniqueValues="FALSE" Indexed="FALSE" MaxLength="255" Group="Web Part Columns" ID="{7350f220-d480-4dd8-89a5-1fafd4cd7d23}" SourceID="{a5df0f41-264b-4bf8-a651-222fcdf5d32d}" StaticName="Description" Name="Description" Version="5" />',
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
                        disabled: false,
                        onGetErrorMessage: null,
                        deferredValidationTime: 0,
                        key: 'spListQueryFieldId'
                    })
                ]
            });
        }
        return config;
    };
    HubLinksWebPart.prototype.getEditItemPropertyPane = function () {
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
                                sp_webpart_base_1.PropertyPaneTextField("hubLinksItems[" + this.activeIndex + "].Title", {
                                    label: strings.EditItemGeneralTitleLabel,
                                    description: strings.EditItemGeneralTitlePreCountLabel + (80 - this.properties.hubLinksItems[this.activeIndex].Title.length) + strings.EditItemGeneralTitlePostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 80, true, strings.EditItemGeneralTitleErrorText)
                                }),
                                // PropertyPaneTextField("hubLinksItems["+this.activeIndex+"].Description",{
                                //   label: strings.EditItemGeneralDescriptionLabel,
                                //   description: strings.EditItemGeneralDescriptionPreCountLabel+(130-(this.properties.hubLinksItems[this.activeIndex].Description ? this.properties.hubLinksItems[this.activeIndex].Description.length : 0))+strings.EditItemGeneralDescriptionPostCountLabel,
                                //   onGetErrorMessage: this.itemValidation.bind(this, 130, (this.properties.layoutMode === HubLinksLayout.ItemLayout || this.properties.showDescription), strings.EditItemGeneralDescriptionErrorText)
                                // }),
                                sp_webpart_base_1.PropertyPaneTextField("hubLinksItems[" + this.activeIndex + "].GroupBy", {
                                    label: strings.EditItemGeneralGroupByLabel,
                                    description: strings.EditItemGeneralGroupByPreCountLabel + (80 - (this.properties.hubLinksItems[this.activeIndex].GroupBy ? this.properties.hubLinksItems[this.activeIndex].GroupBy.length : 0)) + strings.EditItemGeneralGroupByPostCountLabel,
                                    onGetErrorMessage: this.itemValidation.bind(this, 80, (this.properties.layoutMode === HubLinksLayout_1.HubLinksLayout.GroupedListLayout), strings.EditItemGeneralGroupByErrorText)
                                }),
                                sp_webpart_base_1.PropertyPaneLabel("itemLinkLabel", {
                                    text: strings.EditItemGeneralSelectLinkLabel
                                }),
                                sp_webpart_base_1.PropertyPaneLink("hubLinksItems[" + this.activeIndex + "].URL", {
                                    target: "_blank",
                                    href: this.properties.hubLinksItems[this.activeIndex].URL,
                                    text: this.properties.hubLinksItems[this.activeIndex].URL
                                }),
                                sp_webpart_base_1.PropertyPaneButton("itemChangeLink", {
                                    text: strings.EditItemGeneralSelectLinkButtonText,
                                    buttonType: sp_webpart_base_1.PropertyPaneButtonType.Primary,
                                    onClick: this.openLinkSelector.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneCheckbox("hubLinksItems[" + this.activeIndex + "].NewTab", {
                                    text: strings.EditItemGeneralOpenTabLabel
                                })
                            ]
                        },
                        {
                            groupName: strings.EditItemIconLabel,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField("hubLinksItems[" + this.activeIndex + "].Icon", {
                                    label: strings.EditItemIconEntryLabel,
                                    placeholder: strings.EditItemIconEntryPlaceholder,
                                    onGetErrorMessage: this.itemValidation.bind(this, 255, (this.properties.layoutMode === HubLinksLayout_1.HubLinksLayout.ItemLayout), "")
                                }),
                                sp_webpart_base_1.PropertyPaneLink('iconShortcut', {
                                    text: strings.EditItemIconEntryLinkText,
                                    href: "https://fontawesome.com/v4.7.0/cheatsheet/",
                                    target: "_blank"
                                }),
                                sp_webpart_base_1.PropertyPaneLink('iconShortcutOfficeUI', {
                                    text: strings.EditItemIconEntryLinkTextOfficeFabricUI,
                                    href: "https://developer.microsoft.com/en-us/fabric#/styles/icons",
                                    target: "_blank"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HubLinksWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HubLinksWebPart;

//# sourceMappingURL=HubLinksWebPart.js.map
