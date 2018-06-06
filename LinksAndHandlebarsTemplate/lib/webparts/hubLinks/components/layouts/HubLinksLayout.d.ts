/// <reference types="react" />
import { IHubLinksItem, HubLinksGroupItem } from '../IHubLinksItem';
export declare enum HubLinksLayout {
    ItemLayout = 0,
    ListLayout = 1,
    GroupedListLayout = 2,
}
export declare enum bgType {
    BgImage = 0,
    BgColor = 1,
}
export interface IHubLinksLayout {
    render(items: IHubLinksItem[] | HubLinksGroupItem[], isEditMode: boolean): JSX.Element;
}
export declare enum FeaturedContentLayout {
    HorizontalTitleOnly = 0,
    HorizontalTitleAndDescription = 1,
    Vertical = 2,
    VerticalAlternating = 3,
}
