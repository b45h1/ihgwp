import FeaturedContentWebPart from '../FeaturedContentWebPart';
import { IFeaturedContentLayout, FeaturedContentLayout } from './FeatureContentLayout';
export default class FeaturedContentFactory {
    static getLayout(layout: FeaturedContentLayout, isAdvancedMode: boolean, webPart: FeaturedContentWebPart): IFeaturedContentLayout;
    static getWidthHeightQueryStringAppendForImage(imageUrl: string): string;
}
