import { IFeaturedItem } from '../../IFeaturedItem';
import { IFeaturedContentLayout } from "../FeatureContentLayout";
import FeaturedContentWebPart from "../../FeaturedContentWebPart";
export default class BasicHorizontalTitleOnlyLayout implements IFeaturedContentLayout {
    constructor(webpart: FeaturedContentWebPart);
    private _webpart;
    webpart: FeaturedContentWebPart;
    createNewItemFromLink(event: any): void;
    render(items: IFeaturedItem[], isEditMode: boolean): JSX.Element;
}
