import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IHubLinksWebPartProps } from './IHubLinksWebPartProps';
export default class HubLinksWebPart extends BaseClientSideWebPart<IHubLinksWebPartProps> {
    constructor();
    onInit(): Promise<void>;
    private _webpart;
    webpart: any;
    private _activeIndex;
    activeIndex: number;
    private groupItems(items, groups?);
    render(): void;
    private checkUpdateProperties();
    protected readonly dataVersion: Version;
    openLinkSelector(event: any): void;
    openLinkSelectorBGImage(event: any): void;
    itemValidation(length: number, required: boolean, errorText: string, value: string): Promise<string>;
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    getBasicPropertyPane(): IPropertyPaneConfiguration;
    getEditItemPropertyPane(): IPropertyPaneConfiguration;
}
