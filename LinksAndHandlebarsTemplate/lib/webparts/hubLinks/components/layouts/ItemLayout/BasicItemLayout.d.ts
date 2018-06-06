/// <reference types="react" />
import { IHubLinksItem } from '../../IHubLinksItem';
import { IHubLinksLayout } from "../HubLinksLayout";
import HubLinksWebPart from "../../HubLinks";
export default class BasicHorizontalTitleLayout implements IHubLinksLayout {
    constructor(webpart: HubLinksWebPart);
    columnWidth: any;
    private _webpart;
    webpart: HubLinksWebPart;
    render(items: IHubLinksItem[], isEditMode: boolean): JSX.Element;
}
