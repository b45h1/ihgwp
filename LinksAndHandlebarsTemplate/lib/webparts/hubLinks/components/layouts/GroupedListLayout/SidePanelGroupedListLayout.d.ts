/// <reference types="react" />
import { IHubLinksLayout } from "../HubLinksLayout";
import HubLinksWebPart from "../../HubLinks";
import { IHubLinksGroupItem } from "../../IHubLinksItem";
export default class BasicGroupedListLayout implements IHubLinksLayout {
    private groupDefault;
    constructor(webpart: HubLinksWebPart);
    private _webpart;
    webpart: HubLinksWebPart;
    render(items: IHubLinksGroupItem[], isEditMode: boolean): JSX.Element;
}
