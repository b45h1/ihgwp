import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IBoxButtonWebPartWebPartProps } from './IBoxButtonWebPartWebPartProps';
export default class BoxButtonWebPartWebPart extends BaseClientSideWebPart<IBoxButtonWebPartWebPartProps> {
    constructor();
    onInit(): Promise<void>;
    private _webpart;
    webpart: any;
    private _activeIndex;
    activeIndex: number;
    render(): void;
    setTitle(title: string): void;
    openLinkSelector(event: any): void;
    itemValidation(length: number, required: boolean, errorText: string, value: string): Promise<string>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    getBasicPropertyPane(): IPropertyPaneConfiguration;
    getEditItemPropertyPane(): IPropertyPaneConfiguration;
}
