import { IFeaturedItem } from '../IFeaturedItem';
export declare enum FeaturedContentLayout {
    HorizontalTitleOnly = 0,
    HorizontalTitleAndDescription = 1,
    Vertical = 2,
    VerticalAlternating = 3,
}
export interface IFeaturedContentLayout {
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
