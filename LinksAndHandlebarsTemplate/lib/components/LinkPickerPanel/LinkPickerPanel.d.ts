/// <reference types="react" />
import * as React from 'react';
import { ILinkPickerPanel, ILinkPickerChoice } from './ILinkPickerPanel';
import { ILinkPickerPanelProps } from './ILinkPickerPanelProps';
import { ILinkPickerPanelState } from './ILinkPickerPanelState';
export default class LinkPickerPanel extends React.Component<ILinkPickerPanelProps, ILinkPickerPanelState> implements ILinkPickerPanel {
    constructor();
    render(): JSX.Element;
    private resolvePickLink;
    private rejectPickLink;
    pickLink(): Promise<ILinkPickerChoice>;
    private openLinkPanel();
    private closeLinkPanel();
    private addMessageListener();
    private removeMessageListener();
    private onMessageReceived(event);
    private getDocPickerUrl();
    private onSiteNavClick(event);
    private onLinkNavClick(event);
    private onNavClick(navState, event);
    private onLinkTextChange(event);
    private onOkButtonClick(event);
    private onCancelButtonClick();
    private isValidLink(url);
}
