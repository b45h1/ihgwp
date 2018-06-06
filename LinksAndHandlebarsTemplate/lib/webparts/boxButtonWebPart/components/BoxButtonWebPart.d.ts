/// <reference types="react" />
import * as React from 'react';
import { IBoxButtonWebPartProps } from './IBoxButtonWebPartProps';
import { IBoxButton } from './IBoxButton';
export default class BoxButtonWebPart extends React.Component<IBoxButtonWebPartProps, void> {
    constructor();
    private linkPickerPanel;
    private _dragElement;
    dragElement: any;
    private _mouseTarget;
    mouseTarget: any;
    private _eventDone;
    eventDone: boolean;
    setTitle(event: any): void;
    openLinkPicker(event: any): void;
    addBox(event: any): void;
    editBox(event: any): boolean;
    deleteBox(event: any): boolean;
    checkEventDone(event: any): boolean;
    mouseDragDown(event: any): void;
    startDrag(event: any): void;
    isbefore(a: any, b: any): boolean;
    endDrag(event: any): void;
    moveItem(event: any): void;
    render(): React.ReactElement<IBoxButtonWebPartProps>;
    renderBasicWebPart(): JSX.Element;
    renderBasicDefaultLayout(item: IBoxButton): JSX.Element;
    renderAdvancedWebPart(): JSX.Element;
    renderAdvancedDefaultLayout(item: any): JSX.Element;
}
