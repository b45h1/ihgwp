/// <reference types="react" />
import * as React from 'react';
import 'file-saver';
import { IHandlebarTemplateDisplayProps } from './IHandlebarTemplateDisplayProps';
export default class HandlebarTemplateDisplay extends React.Component<IHandlebarTemplateDisplayProps, void> {
    private linkPickerPanel;
    private _templateExport;
    templateExport: string;
    setTitle(event: any): void;
    openTemplateLinkPicker(event: any): void;
    openStyleLinkPicker(event: any): void;
    openScriptLinkPicker(event: any): void;
    copyTemplate(event: any): void;
    componentDidMount(): void;
    render(): React.ReactElement<IHandlebarTemplateDisplayProps>;
    private templateRender(item, template);
    private noTemplateRender(item);
    private buildExampleTemplate(obj, path?);
    private getLeadingTab(path);
    private renderConfigureWebPartView();
    private openPropertyPane(event);
}
