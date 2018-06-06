import { IFeaturedItem } from '../../IFeaturedItem';
import { IFeaturedContentLayout } from '../FeatureContentLayout';
export default class AdvancedStackedLayout implements IFeaturedContentLayout {
    constructor();
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
