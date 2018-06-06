/// <reference types="react" />
import { IHubLinksItem } from '../../IHubLinksItem';
import { IHubLinksLayout } from '../HubLinksLayout';
import HubLinksWebPart from "../../HubLinks";
export default class AdvancedItemLayoutLayout implements IHubLinksLayout {
    constructor(webpart: HubLinksWebPart);
    private _webpart;
    webpart: HubLinksWebPart;
    render(items: IHubLinksItem[], isEditMode: boolean): JSX.Element;
}
