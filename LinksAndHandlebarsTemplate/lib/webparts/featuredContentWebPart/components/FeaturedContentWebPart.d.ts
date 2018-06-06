/// <reference types="react" />
import * as React from 'react';
import { IFeaturedContentWebPartProps } from './IFeaturedContentWebPartProps';
import { IFeaturedContentState } from './IFeaturedContentState';
export default class FeaturedContentWebPart extends React.Component<IFeaturedContentWebPartProps, IFeaturedContentState> {
    constructor();
    private _dragElement;
    dragElement: any;
    private _mouseTarget;
    mouseTarget: any;
    setTitle(event: any): void;
    addBox(event: any): void;
    editBox(event: any): boolean;
    deleteBox(event: any): boolean;
    mouseDragDown(event: any): void;
    startDrag(event: any): void;
    isbefore(a: any, b: any): boolean;
    endDrag(event: any): void;
    moveItem(event: any): void;
    render(): React.ReactElement<IFeaturedContentWebPartProps>;
    private linkPickerPanel;
    openLinkPicker(event: any): void;
    createNewItemFromLink(event: any): void;
    renderBasicWebPart(): JSX.Element;
    renderAdvancedWebPart(): JSX.Element;
}
