import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, DisplayMode } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneButton,
  PropertyPaneButtonType,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneTextField,
  PropertyPaneToggle,
  PropertyPaneChoiceGroup
} from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';
import * as strings from 'hubLinksStrings';
import HubLinks from './components/HubLinks';
import { IHubLinksItem, HubLinksItem, HubLinksItemHeading, IHubLinksGroupItem, HubLinksGroupItem } from './components/IHubLinksItem';
import { HubLinksLayout, bgType } from './components/layouts/HubLinksLayout';
import { IHubLinksProps } from './components/IHubLinksProps';
import { IHubLinksWebPartProps, IMyWebPartProps } from './IHubLinksWebPartProps';
import { PropertyFieldCamlQueryFieldMapping, SPFieldType, SPFieldRequiredLevel, PropertyFieldCamlQueryOrderBy } from '../../propertyPane/propertyFieldCamlQueryFieldMapping/PropertyFieldCamlQueryFieldMapping';
import { PropertyPaneGroupSort } from '../../propertyPane/propertyFieldGroupSort/PropertyFieldGroupSort'; 
import pnp from 'sp-pnp-js';
import QueryStringParser from "../../utilities/urlparser/queryStringParser";
// import { PropertyPaneImageSelector ImageDisplayType} from '../../../lib/propertyPane/propertyFieldImageSelector/PropertyFieldImageSelector';
import { PropertyPaneImageSelector, ImageDisplayType } from "../../propertyPane/propertyFieldImageSelector/PropertyFieldImageSelector";
import { PropertyFieldColorPickerMini } from "sp-client-custom-fields/lib/PropertyFieldColorPickerMini";
import { PropertyFieldPicturePicker } from "sp-client-custom-fields/lib/PropertyFieldPicturePicker";
import { PropertyFieldNumericInput } from "sp-client-custom-fields/lib/PropertyFieldNumericInput";
import { PropertyPaneSlider } from '@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneSlider/PropertyPaneSlider';

const titleField = "Title";
const urlField = "URL";
const iconField = "Icon";
const groupingField = "GroupBy";
const descriptionField = "Description";
const openNewTabField = "NewTab";
const imageModeHere = ImageDisplayType.Custom;

export default class HubLinksWebPart extends BaseClientSideWebPart<IHubLinksWebPartProps> {

  constructor() {
    super();
    this.onPropertyPaneFieldChanged = this.onPropertyPaneFieldChanged.bind(this);
    if(document.querySelectorAll("link[href*='font-awesome.min.css']").length===0){
      SPComponentLoader.loadCss('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    }
  }

  public onInit(): Promise<void> {
    return super.onInit().then(_ => {
      pnp.setup({
        spfxContext: this.context
      });
    });
  }

  private _webpart : any;
  public get webpart() : any {
    return this._webpart;
  }
  public set webpart(v : any) {
    this._webpart = v;
  } 

  private _activeIndex : number = -1;
  public get activeIndex() : number {
    return this._activeIndex;
  }
  public set activeIndex(v : number) {
    this._activeIndex = v;
  }

  private groupItems(items: IHubLinksItem[], groups?: string[]): IHubLinksGroupItem[]{
    var retArray: Array<IHubLinksGroupItem> = [];
    var groupId: number = 1;

    if(groups){
      //Group order defined
      groups.forEach(grp => {
        retArray.push(new HubLinksGroupItem(new HubLinksItemHeading(grp, groupId), []));
        groupId ++;
      });
    }

    items.forEach((link, idx) => {
      link.index = idx.toString();
      var newLink: IHubLinksItem = JSON.parse(JSON.stringify(link));
      var newGroup = true;
      newLink[groupingField] = link[groupingField] ? link[groupingField] : "Ungrouped";
      retArray.forEach(propLink =>{
        if(propLink.Heading.Title==newLink[groupingField]){
          propLink.Links.push(newLink);
          newGroup = false;
        }
      });
      if(newGroup){
        retArray.push(new HubLinksGroupItem(new HubLinksItemHeading(newLink[groupingField], groupId), [newLink]));
        groupId ++;
      }
    });
    return retArray;
  }

  public render(): void {
    const self = this;
    this.checkUpdateProperties();

    
    
    const element: React.ReactElement<IHubLinksProps > = React.createElement(
      HubLinks,
      {
        defaultExpand: this.properties.defaultExpand,
        links: [],
        title: this.properties.title,
        promoPrefix:this.properties.promoPrefix,
        setPromoPrefix:(promoPrefix:string)=>{
          self.properties.promoPrefix = promoPrefix;
        },
        setTitle: (title:string) => {
          self.properties.title = title;
        },
        isEdit:this.displayMode===DisplayMode.Edit,
        hubLinksItems: this.properties.hubLinksItems,
        usesListMode: this.properties.usesListMode,
        setUrl: (url:string, name: string)=>{
          if(this.activeIndex===-1){
            this.properties.hubLinksItems.push(new HubLinksItem(null, name, url, "", "", false, "")); //strings.TitlePlaceholder
            this.activeIndex = this.properties.hubLinksItems.length-1;
          }

          var isDoc = false;
          const docExtensions = ["pdf", "xls", "xlsx", "doc", "docx", "ppt", "pptx", "pptm", "dot"];
          for(var i in docExtensions){
            if(url.indexOf(docExtensions[i], url.length - docExtensions[i].length) !== -1)
              isDoc = true;
          }

          self.properties.hubLinksItems[this.activeIndex].URL=url+( isDoc ? "?web=1" : "");
          self.properties.hubLinksItems[this.activeIndex].Title=name ? name : this.properties.hubLinksItems[this.activeIndex].Title;
          if(!this.propertyPaneRenderedByWebPart)
            this.context.propertyPane.open();
          self.context.propertyPane.refresh();
        },
        editItem: (index:number)=>{
          if(index===-1){
            this.properties.hubLinksItems.push(new HubLinksItem(null, "")); //strings.TitlePlaceholder
            // this.properties.featuredContentItems.push(new FeaturedItem(null, null, null, null, false, null, null, null, null, ImageDisplayType.Auto));
            index = this.properties.hubLinksItems.length-1;
          }          
          this.activeIndex = index;
          this.context.propertyPane.open();          
        },
        deleteItem: (index:number)=>{
          this.properties.hubLinksItems.splice(index,1);
          this.render();     
        },
        rearrangeItems: (newOrder: [number])=>{
          const newArr = new Array<HubLinksItem>();
          const currArr = this.properties.hubLinksItems;
          for(var num in newOrder)
            newArr.push(this.properties.hubLinksItems[newOrder[num]]);
          this.properties.hubLinksItems.length=0;
          for(var val in newArr)
            this.properties.hubLinksItems.push(newArr[val]);
          this.render();
        },
        setGroup: (index: string, group: string)=>{
          for(var i=0; i<this.properties.hubLinksItems.length; i++){
            if(this.properties.hubLinksItems[i].index == index)
              this.properties.hubLinksItems[i].GroupBy = group;
          }
        },
        resetActiveIndex: ()=>{
          this.activeIndex = -1;
        },
        wpBodyText: this.properties.wpBodyText,
        advancedCamlData: this.properties.data,
        context:  this.context,
        layoutMode: this.properties.layoutMode,
        showDescription: this.properties.showDescription,
        compactHeader : this.properties.compactHeader,
        background:this.properties.background,
        bgImagePicker : this.properties.bgImagePicker,
        showPanel : this.properties.showPanel,
        columnWidth:this.properties.columnWidth,
        itemToDisplay:this.properties.itemToDisplay
      }
    );

    if(this.properties.usesListMode){
      const propData = this.properties.data ? JSON.parse(this.properties.data) : {fieldMappings:[], selectedList:{}};
      if(propData.selectedList.id){
        pnp.sp.web.lists.getById(propData.selectedList.id).getItemsByCAMLQuery({ ViewXml: QueryStringParser.ReplaceQueryStringParameters(this.properties.listQuery)}).then((response:any[])=>{
          response.forEach(value => {
          var item: any = {};
          propData.fieldMappings.forEach(mapping => {
            switch(mapping.type){
              case SPFieldType.URL:
                item[mapping.name] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Url"] : null;
                item[mapping.name+"_text"] = value[mapping.mappedTo] ? value[mapping.mappedTo]["Description"] : null;
                break;
              default: 
                item[mapping.name] = value[mapping.mappedTo];
                break;
              }
            });
            if(item[urlField] !== null){ 
              //If has GroupBy field, then make sure it exists on groups property
              if(item.GroupBy && this.properties.groups.indexOf(item.GroupBy) < 0){
                //Group not in list, add
                this.properties.groups.push(item.GroupBy);
              }  
              element.props.links.push(new HubLinksItem(null, item[urlField+"_text"] === item[urlField] ? item.Title : item[urlField+"_text"], item.URL, item.Description, item.Icon, item.NewTab, item.GroupBy));
            }              
          });

          if(this.properties.layoutMode == HubLinksLayout.GroupedListLayout){
            //If group layout, then reform the links into a grouped format
            element.props.links = this.groupItems(element.props.links, this.properties.groups);
            //Refresh property pane if visible
            this.context.propertyPane.refresh();
          }
          
          this.webpart = ReactDom.render(element, this.domElement);
        }).catch((error)=>{ });
      }
    }
    else {
      //If group layout, then reform the links into a grouped format
      if(this.properties.layoutMode == HubLinksLayout.GroupedListLayout){
        element.props.hubLinksItems = this.groupItems(this.properties.hubLinksItems, this.properties.groups);
      }
      this.webpart = ReactDom.render(element, this.domElement);
    }
  }

  private checkUpdateProperties(): void {
    if(this.properties.version!=this.dataVersion.toString()){
      const dataObj = this.properties.data ? JSON.parse(this.properties.data) : 
      {
        filter: [],
        max: 0,
        selectedList: {},
        sort: {},
        fieldMappings: [],
        data: {}
      };
      let groupEnabled: boolean;
      if(dataObj.fieldMappings && dataObj.fieldMappings.length > 0){
        groupEnabled = dataObj.fieldMappings.filter((item)=>{return item.name==="Group By";})[0].enabled;
      }
      dataObj.fieldMappings = [
        { name: urlField, type: SPFieldType.URL, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter((item)=>{return item.name==="URL";})[0].mappedTo },
        { name: iconField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter((item)=>{return item.name==="Font Awesome Icon";})[0].mappedTo },
        { name: groupingField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: dataObj.fieldMappings.filter((item)=>{return item.name==="Group By";})[0].mappedTo },
        { name: descriptionField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required },
        { name: titleField, type: SPFieldType.Text, enabled: true, requiredLevel: SPFieldRequiredLevel.Required, mappedTo: "Title" },
      ];
      this.properties.layoutMode = groupEnabled ? HubLinksLayout.GroupedListLayout :  HubLinksLayout.ListLayout;
      this.properties.usesListMode = true;
      this.properties.showDescription = false;
      this.properties.groups = [];
      this.properties.hubLinksItems = [];
      this.properties.version=this.dataVersion.toString();
      this.properties.data = JSON.stringify(dataObj);
    }
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  public openLinkSelector(event){
    this.webpart.openLinkPicker(event);
  }

  public openLinkSelectorBGImage(event){
    this.webpart.openLinkPicker(event);
  }

  public itemValidation(length: number, required: boolean, errorText: string, value: string): Promise<string> {
    return new Promise<string>((resolve: (validationMessage: string)=>void)=>{
      if(value.length>length){
        resolve(errorText);
      }
      else if(required && value.length<1){
        resolve(strings.RequiredValueErrorText);
      }
      else{
        resolve("");
      }
    });
  }

  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void{
    var pathIdx = propertyPath.indexOf('.');
    if(propertyPath.substring(pathIdx + 1) === "usesListMode" || propertyPath.substring(pathIdx + 1) == "listQuery"){
      //Reset grouping
      this.properties.groups.length = 0;
      //this.render();
    }else if(propertyPath.substring(pathIdx + 1) === "GroupBy"){
      if(oldValue != newValue){
        //Initialize groups array
        if(!this.properties.groups) this.properties.groups = [];
        //If old value exists, deal with it.
        if(this.properties.groups.indexOf(oldValue) > -1){
          //If new value exists already, don't duplicate
          if(this.properties.groups.indexOf(newValue) > -1){
            //remove old value, new value is duplicate
            this.properties.groups.splice(this.properties.groups.indexOf(oldValue));
          }else{
            //replace old value with new value as long as old value isn't used elsewhere
            var cnt = 0;
            for(var i=0; i<this.properties.hubLinksItems.length; i++){
              if(this.properties.hubLinksItems[i].GroupBy == oldValue)
                cnt++;
            }
            //if oldValue not found in other hubLinksItems then replace the old value with new value.
            if(cnt < 1)
              this.properties.groups[this.properties.groups.indexOf(oldValue)] = newValue;
            else
              this.properties.groups.push(newValue);
          }
        }else{
          //Add new value, if length > 0, old value doesn't exist.
          if(newValue.length > 0)
            this.properties.groups.push(newValue);
        }
      }
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    if(this.context.propertyPane.isRenderedByWebPart()) return this.getEditItemPropertyPane();
    return this.getBasicPropertyPane();
  }

  public getBasicPropertyPane(): IPropertyPaneConfiguration{
    //Define base configuration
    var config: IPropertyPaneConfiguration = {
      pages: [
        {
          header: {
            description: ''
          },
          groups:[
            {
              groupName: strings.LayoutLabel,
              isCollapsed: false,
              groupFields: [
                PropertyPaneChoiceGroup("layoutMode",{
                  label: "",
                  options:[
                    {
                      checked: this.properties.layoutMode===HubLinksLayout.ItemLayout,
                      key: HubLinksLayout.ItemLayout,
                      imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                      selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                      imageSize: { height:32, width:32 },
                      text: strings.ItemLayoutLabel
                    },
                    {
                      checked: this.properties.layoutMode===HubLinksLayout.ListLayout,
                      key: HubLinksLayout.ListLayout,
                      imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                      imageSize: { height:32,width:32 },
                      selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                      text: strings.ListLayoutLabel
                    },
                    {
                      checked: this.properties.layoutMode===HubLinksLayout.GroupedListLayout,
                      key: HubLinksLayout.GroupedListLayout,
                      imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                      imageSize: { height:32,width:32 },
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
                PropertyPaneChoiceGroup("background",{
                  label: "",
                  options:[
                    {
                      checked: this.properties.background===bgType.BgImage,
                      key: bgType.BgImage,
                      iconProps:{officeFabricIconFontName:"FileImage"},
                      // imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                      selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Image-Title.svg",
                      imageSize: { height:25, width:25 },
                      text: "Image"
                    },
                    {
                      checked: this.properties.background===bgType.BgColor,
                      key: bgType.BgColor,
                      iconProps:{officeFabricIconFontName:"Color"},
                      // imageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                      imageSize: { height:25,width:25 },
                      selectedImageSrc: "https://thehubcdnvz.azureedge.net/hub-web-parts/fc-Layout-Title-Description.svg",
                      text: "Color"
                    }
                  ]
                })
              ]
            }
          ],
          displayGroupsAsAccordion: true 
        }]
    };

    //Add alternate configurations based on layout
    switch(this.properties.layoutMode){
      case HubLinksLayout.GroupedListLayout: 
        //Add show description
        config.pages[0].groups[0].groupFields.push(
          PropertyPaneToggle('showDescription',{
            label: strings.ShowDescriptionLabel,
            onText: strings.OnLabel,
            offText: strings.OffLabel
          })
        );
        //Add groupes expanded by default
        config.pages[0].groups[0].groupFields.push(
          PropertyPaneToggle('defaultExpand',{
            label: strings.ExpandDefaultLabel,
            onText: strings.OnLabel,
            offText: strings.OffLabel,
          })
        );
        //Add Group Sort 
        config.pages[0].groups[0].groupFields.push(
          PropertyPaneGroupSort('groups', {
            label: strings.GroupSortLabel,
            initialValue: this.properties.groups,
            render: this.render.bind(this),
            onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
            properties: this.properties,
            disabled: false,
            onGetErrorMessage: null,
            deferredValidationTime: 0,
            key: 'webpartGroupSort'
          })
        );
        break;
      case HubLinksLayout.ItemLayout: 
        break;
      default:
        //Add show description
        config.pages[0].groups[0].groupFields.push(
          PropertyPaneToggle('showDescription',{
            label: strings.ShowDescriptionLabel,
            onText: strings.OnLabel,
            offText: strings.OffLabel
          })
        );
        break;
    }

    switch (this.properties.background){
      case bgType.BgColor:
       //Background Image setup
      config.pages[0].groups[1].groupFields.push(
        PropertyFieldColorPickerMini('bgImagePicker', {
          label: "Choose a color",
          initialColor: "#909090",
          onPropertyChange: this.onPropertyPaneFieldChanged,
          render: this.render.bind(this),
          disableReactivePropertyChanges: this.disableReactivePropertyChanges,
          properties: this.properties,
          key: 'verticalTimelineBgColorField'
        })
      );
      
      //Header compact view
      {this.properties.layoutMode!=1 &&
        config.pages[0].groups[1].groupFields.push(
        PropertyPaneToggle('compactHeader',{
          label: "Compact Header",
          onText: strings.OnLabel,
          offText: strings.OffLabel
        })
      );
    }
    break;
      case bgType.BgImage:
      config.pages[0].groups[1].groupFields.push(
      PropertyFieldPicturePicker("bgImagePicker", {
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
      })
    );
    break;
    default:
    config.pages[0].groups[1].groupFields.push(
      PropertyFieldPicturePicker("bgImagePicter", {
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
    })
    );
    break;
    }

    //Add Webpart Body Text
    config.pages[0].groups[0].groupFields.push(
      PropertyPaneTextField('wpBodyText',{
        label: strings.WebPartBodyText,
        multiline:true
      })
    );
    
    //Add Number of item to display
    {this.properties.layoutMode==0 &&
    config.pages[0].groups[0].groupFields.push(
      PropertyFieldNumericInput('itemToDisplay', {
        label: 'Item to display',
        min: 0,
        initialValue:this.properties.itemToDisplay,
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
     })
    );
  }
  
    //Add usesListMode
    config.pages[0].groups[0].groupFields.push(
      PropertyPaneToggle('showPanel',{
        label: "Enable Side Panel",
        onText: strings.OnLabel,
        offText: strings.OffLabel
      })
    );
   
      
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
    if(this.properties.usesListMode){
      //Build fieldMapping array.
      var fieldMappings: Array<any> = [
                { name: urlField,type: SPFieldType.URL, requiredLevel: SPFieldRequiredLevel.Required },
                { name: iconField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                { name: groupingField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                { name: titleField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required },
                { name: openNewTabField, type: SPFieldType.Boolean, requiredLevel: SPFieldRequiredLevel.Required }
              ];
      //If showDescription then add mapping for description field.
      if(this.properties.layoutMode === HubLinksLayout.ItemLayout || this.properties.showDescription){
        fieldMappings.push({name: descriptionField, type: SPFieldType.Text, requiredLevel: SPFieldRequiredLevel.Required});
      }

      config.pages[0].groups.push(
        {
          groupName: strings.AdvancedListModeGroupLabel,
          isCollapsed:!this.properties.usesListMode,
          groupFields:[
            PropertyFieldCamlQueryFieldMapping('listQuery', {
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
              createTitleRequired:false,
              includeHidden: false,
              orderBy: PropertyFieldCamlQueryOrderBy.Title,
              showOrderBy: true,
              showFilters: true,
              showMax:false,
              showCreate:true,
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
        }
      ) ;
    }
    
    return config;
  }
  public getEditItemPropertyPane(): IPropertyPaneConfiguration{    
    return {
      pages: [
        {
          header: {
            description: ""
          },
          displayGroupsAsAccordion:true,
          groups: [
            {
              groupName: strings.EditItemGeneralLabel,
              groupFields:[
                PropertyPaneTextField("hubLinksItems["+this.activeIndex+"].Title",{
                  label: strings.EditItemGeneralTitleLabel,
                  description: strings.EditItemGeneralTitlePreCountLabel+(80-this.properties.hubLinksItems[this.activeIndex].Title.length)+strings.EditItemGeneralTitlePostCountLabel,
                  onGetErrorMessage: this.itemValidation.bind(this, 80, true, strings.EditItemGeneralTitleErrorText)
                }),
                // PropertyPaneTextField("hubLinksItems["+this.activeIndex+"].Description",{
                //   label: strings.EditItemGeneralDescriptionLabel,
                //   description: strings.EditItemGeneralDescriptionPreCountLabel+(130-(this.properties.hubLinksItems[this.activeIndex].Description ? this.properties.hubLinksItems[this.activeIndex].Description.length : 0))+strings.EditItemGeneralDescriptionPostCountLabel,
                //   onGetErrorMessage: this.itemValidation.bind(this, 130, (this.properties.layoutMode === HubLinksLayout.ItemLayout || this.properties.showDescription), strings.EditItemGeneralDescriptionErrorText)
                // }),
                PropertyPaneTextField("hubLinksItems["+this.activeIndex+"].GroupBy",{
                  label: strings.EditItemGeneralGroupByLabel,
                  description: strings.EditItemGeneralGroupByPreCountLabel+(80-(this.properties.hubLinksItems[this.activeIndex].GroupBy ? this.properties.hubLinksItems[this.activeIndex].GroupBy.length : 0))+strings.EditItemGeneralGroupByPostCountLabel,
                  onGetErrorMessage: this.itemValidation.bind(this, 80, (this.properties.layoutMode === HubLinksLayout.GroupedListLayout), strings.EditItemGeneralGroupByErrorText)
                }),
                PropertyPaneLabel("itemLinkLabel",{
                  text: strings.EditItemGeneralSelectLinkLabel
                }),
                PropertyPaneLink("hubLinksItems["+this.activeIndex+"].URL",{
                  target: "_blank",
                  href: this.properties.hubLinksItems[this.activeIndex].URL,
                  text: this.properties.hubLinksItems[this.activeIndex].URL
                }),
                PropertyPaneButton("itemChangeLink",{
                  text: strings.EditItemGeneralSelectLinkButtonText,
                  buttonType: PropertyPaneButtonType.Primary,
                  onClick: this.openLinkSelector.bind(this)
                }),
                PropertyPaneCheckbox("hubLinksItems["+this.activeIndex+"].NewTab",{
                  text:strings.EditItemGeneralOpenTabLabel
                })
              ]
            },
            {
              groupName: strings.EditItemIconLabel,
              groupFields:[
                PropertyPaneTextField("hubLinksItems["+this.activeIndex+"].Icon",{
                  label: strings.EditItemIconEntryLabel,
                  placeholder: strings.EditItemIconEntryPlaceholder,
                  onGetErrorMessage: this.itemValidation.bind(this, 255, (this.properties.layoutMode === HubLinksLayout.ItemLayout), "")
                }),
                PropertyPaneLink('iconShortcut',{
                  text: strings.EditItemIconEntryLinkText,
                  href:"https://fontawesome.com/v4.7.0/cheatsheet/",
                  target: "_blank"
                }),
                PropertyPaneLink('iconShortcutOfficeUI',{
                  text: strings.EditItemIconEntryLinkTextOfficeFabricUI,
                  href:"https://developer.microsoft.com/en-us/fabric#/styles/icons",
                  target: "_blank"
                })
              ]
            }
          ]
        }
      ]
    };
  }


}
