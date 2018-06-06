import { IFeaturedItem } from '../../IFeaturedItem';
import { IFeaturedContentLayout } from '../FeatureContentLayout';
export default class AdvancedHorizontalTitleOnlyLayout implements IFeaturedContentLayout {
    constructor();
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
