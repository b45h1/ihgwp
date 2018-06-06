import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IFeaturedContentWebPartWebPartProps } from './IFeaturedContentWebPartWebPartProps';
export default class FeaturedContentWebPartWebPart extends BaseClientSideWebPart<IFeaturedContentWebPartWebPartProps> {
    constructor();
    onInit(): Promise<void>;
    private _webpart;
    webpart: any;
    private _activeIndex;
    activeIndex: number;
    render(): void;
    protected readonly dataVersion: Version;
    openLinkSelector(event: any): void;
    itemValidation(length: number, required: boolean, errorText: string, value: string): Promise<string>;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    getWebPartPropertyPane(): IPropertyPaneConfiguration;
    getEditItemPropertyPane(): IPropertyPaneConfiguration;
    private rearrangeBasicItems(newOrder);
    private editBasicItem(index);
    private deleteBasicItem(index);
    private checkImage(imageSrc, success, failure);
    private setUrl(urlString, name?);
    private setTitle(title);
    private resetIndex();
    private onContentChange(content);
}
