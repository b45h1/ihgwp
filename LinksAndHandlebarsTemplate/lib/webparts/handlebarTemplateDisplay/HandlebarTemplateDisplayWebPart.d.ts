import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IHandlebarTemplateDisplayWebPartProps } from './IHandlebarTemplateDisplayWebPartProps';
export default class HandlebarTemplateDisplayWebPart extends BaseClientSideWebPart<IHandlebarTemplateDisplayWebPartProps> {
    constructor();
    onInit(): Promise<void>;
    private _fields;
    fields: any[];
    private _webpart;
    webpart: any;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    openTemplateSelector(event: any): void;
    openStyleSelector(event: any): void;
    openScriptSelector(event: any): void;
    setTitle(title: string): void;
    setTemplateUrl(url: string, name?: string): void;
    setCSSUrl(url: string, name?: string): void;
    setJSUrl(url: string, name?: string): void;
}
