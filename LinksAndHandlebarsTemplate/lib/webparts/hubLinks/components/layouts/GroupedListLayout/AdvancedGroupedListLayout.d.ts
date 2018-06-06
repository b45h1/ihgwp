/// <reference types="react" />
import { IHubLinksLayout } from '../HubLinksLayout';
import HubLinksWebPart from "../../HubLinks";
export default class AdvancedGroupedListLayout implements IHubLinksLayout {
    private groupDefault;
    constructor(webpart: HubLinksWebPart);
    private _webpart;
    webpart: HubLinksWebPart;
    render(items: any[], isEditMode: boolean): JSX.Element;
}
