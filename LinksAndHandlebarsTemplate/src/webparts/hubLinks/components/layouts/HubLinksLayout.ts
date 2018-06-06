import { IHubLinksItem, HubLinksGroupItem } from '../IHubLinksItem';

export enum HubLinksLayout{
    ItemLayout,
    ListLayout,
    GroupedListLayout
}

export enum bgType{
    BgImage,
    BgColor
}

export interface IHubLinksLayout{
    render(items:IHubLinksItem[] | HubLinksGroupItem[], isEditMode: boolean):JSX.Element;
}

export enum FeaturedContentLayout{
    HorizontalTitleOnly,
    HorizontalTitleAndDescription,
    Vertical,
    VerticalAlternating
}