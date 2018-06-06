import { IFeaturedItem } from '../../IFeaturedItem';
import { IFeaturedContentLayout } from "../FeatureContentLayout";
import FeaturedContentWebPart from "../../FeaturedContentWebPart";
export default class BasicHorizontalTitleDescriptionLayout implements IFeaturedContentLayout {
    constructor(webpart: FeaturedContentWebPart);
    private _webpart;
    webpart: FeaturedContentWebPart;
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
