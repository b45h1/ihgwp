import {IHubLinksItem} from './components/IHubLinksItem';
import { HubLinksLayout, bgType, FeaturedContentLayout } from './components/layouts/HubLinksLayout';



export interface IHubLinksWebPartProps {
  listQuery: string;  //advancedCAMLQuery
  data: string;  //advancedCAMLData
  title: string;
  promoPrefix:string;
  defaultExpand: boolean;
  hubLinksItems: IHubLinksItem[];
  usesListMode:boolean;
  layoutMode: HubLinksLayout;
  groups: string[];  //For Group Layout, list of groups identified with sort order
  showDescription: boolean;
  version: string;
  wpBodyText:string;
  advancedCamlQuery: string;
  advancedCamlData: string;
  background:bgType;
  bgImagePicker:any;
  showPanel:boolean;
  columnWidth:any;
  itemToDisplay:any;
  compactHeader:boolean;
}
export interface IMyWebPartProps {
  picture: string;
}

