/// <reference types="react" />
import * as React from 'react';
import { IHubLinksProps } from './IHubLinksProps';
import IPanelState from './IHubLinksState';
export default class HubLinks extends React.Component<IHubLinksProps, IPanelState> {
    constructor(props: any);
    bgStyle: any;
    bgStylePromo: any;
    bgStylePromoRight: any;
    columnWidth: any;
    solidColorHeaderWidth: any;
    private _dragElement;
    dragElement: any;
    private _mouseTarget;
    mouseTarget: any;
    mouseDragDown(event: any): void;
    startDrag(event: any): void;
    isbefore(a: any, b: any): boolean;
    endDrag(event: any): void;
    moveItem(event: any): void;
    toggleGroup(event: any): void;
    setTitle(event: any): void;
    setPromoPrefix(event: any): void;
    addBox(event: any): void;
    editBox(event: any): boolean;
    deleteBox(event: any): boolean;
    private linkPickerPanel;
    openLinkPicker(event: any): void;
    render(): React.ReactElement<IHubLinksProps>;
    renderBasicWebPart(): JSX.Element;
    private _setShowPanel;
    listView(): JSX.Element;
    promoView(): JSX.Element;
    componentWillMount(): void;
    renderAdvancedWebPart(): JSX.Element;
}
