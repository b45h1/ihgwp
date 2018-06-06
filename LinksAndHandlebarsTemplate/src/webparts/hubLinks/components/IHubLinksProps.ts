import { HubLinksLayout, bgType } from './layouts/HubLinksLayout';
import{ IWebPartContext } from '@microsoft/sp-webpart-base';

export interface IHubLinksProps {
  defaultExpand:boolean;
  links: any[];
  title: string;
  promoPrefix:string;
  setTitle: any;
  setPromoPrefix:any;
  setUrl: Function;
  isEdit: boolean;
  hubLinksItems: any[];
  usesListMode:boolean;
  editItem: Function;
  deleteItem: Function;
  rearrangeItems: Function;
  setGroup: Function;
  resetActiveIndex: Function;
  advancedCamlData: string; 
  context: IWebPartContext;
  layoutMode: HubLinksLayout;
  showDescription: boolean;
  wpBodyText:string;
  background:bgType;
  bgImagePicker:any;
  showPanel: boolean;
  columnWidth:any;
  itemToDisplay:any;
  compactHeader:boolean;
}
