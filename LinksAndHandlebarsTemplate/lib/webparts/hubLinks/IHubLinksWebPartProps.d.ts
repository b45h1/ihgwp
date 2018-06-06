import { IHubLinksItem } from './components/IHubLinksItem';
import { HubLinksLayout, bgType } from './components/layouts/HubLinksLayout';
export interface IHubLinksWebPartProps {
    listQuery: string;
    data: string;
    title: string;
    promoPrefix: string;
    defaultExpand: boolean;
    hubLinksItems: IHubLinksItem[];
    usesListMode: boolean;
    layoutMode: HubLinksLayout;
    groups: string[];
    showDescription: boolean;
    version: string;
    wpBodyText: string;
    advancedCamlQuery: string;
    advancedCamlData: string;
    background: bgType;
    bgImagePicker: any;
    showPanel: boolean;
    columnWidth: any;
    itemToDisplay: any;
    compactHeader: boolean;
}
export interface IMyWebPartProps {
    picture: string;
}
