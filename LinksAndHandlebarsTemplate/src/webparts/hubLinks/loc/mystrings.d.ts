declare interface IHubLinksStrings {
  PropertyPaneDescription: string;
  ListQueryGroupName: string;
  FieldMappingGroupName: string;
  DescriptionFieldLabel: string;
  ShowIconFieldLabel: string;
  GroupLinksFieldLabel: string;
  NotConfiguredMessage: string;
  TitlePlaceholder:string;
  PromoPrefixPlaceholder:string;
  ExpandDefaultLabel:string;

  BasicGroupName: string;
  ContentListFieldLabel: string;
  ManageContentLabel: string;

  AddNewButtonText:string;
  PlaceholderButtonText:string;
  SaveButtonText:string;
  SelectButtonText:string;
  CancelButtonText:string;
  SelectFromLinkLabel:string;
  SelectFromLinkDescription:string;
  SelectFromSiteTitle:string;

  EditItemGeneralLabel: string;
  EditItemGeneralTitleLabel: string;
  EditItemGeneralTitlePreCountLabel: string;
  EditItemGeneralTitlePostCountLabel: string;
  EditItemGeneralTitleErrorText: string;
  EditItemGeneralDescriptionLabel: string;
  EditItemGeneralAlternateLabel: string;
  EditItemGeneralDescriptionPreCountLabel: string;
  EditItemGeneralDescriptionPostCountLabel: string;
  EditItemGeneralDescriptionErrorText: string;
  EditItemGeneralGroupByLabel: string;
  EditItemGeneralGroupByPreCountLabel: string;
  EditItemGeneralGroupByPostCountLabel: string;
  EditItemGeneralGroupByErrorText: string;
  EditItemGeneralSelectLinkLabel: string;
  EditItemGeneralSelectLinkButtonText: string;
  EditItemGeneralOpenTabLabel: string;
  EditItemIconLabel: string;
  EditItemIconEntryLabel: string;
  EditItemIconEntryPlaceholder: string;
  EditItemIconEntryLinkText: string;
  EditItemIconEntryLinkTextOfficeFabricUI: string;
  EditItemImageLabel: string;
  EditItemImageEntryLabel: string;
  EditItemImageEntryPlaceholder: string;
  EditItemImageEntryLinkText: string;
  EditItemGuidanceLabel: string;

  DeleteItemConfirmMessage: string;

  WebPartPropertySwitcherGroupLabel: string;
  SwitchToBasicLabel: string;
  SwitchToBasicButtonText: string;
  SwitchToAdvancedLabel: string;
  SwitchToAdvancedButtonText: string;
  OnLabel:string;
  OffLabel:string;

  AdvancedListModeGroupLabel: string;
  AdvancedEnableListModeLabel: string;
  AdvancedEnableListModeInfo: string;

  LayoutLabel: string;
  LayoutSelectorLabel: string;
  ItemLayoutLabel: string;
  ListLayoutLabel: string;
  GroupedListLayoutLabel: string;

  WebPartBodyText: string;
  ShowDescriptionLabel: string;
  GroupSortLabel: string;
  RequiredValueErrorText: string;
}

declare module 'hubLinksStrings' {
  const strings: IHubLinksStrings;
  export = strings;
}
