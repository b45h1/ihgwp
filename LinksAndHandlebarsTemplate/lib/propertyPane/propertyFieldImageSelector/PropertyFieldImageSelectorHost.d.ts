/// <reference types="react" />
import * as React from 'react';
import { IPropertyFieldImageSelectorPropsInternal, ImageDisplayType } from './PropertyFieldImageSelector';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
export interface IPropertyFieldImageSelectorHostProps extends IPropertyFieldImageSelectorPropsInternal {
}
export interface IPropertyFieldImageSelectorHostState {
    imageMode: ImageDisplayType;
}
export default class PropertyFieldImageSelectorHost extends React.Component<IPropertyFieldImageSelectorHostProps, IPropertyFieldImageSelectorHostState> {
    constructor(props: IPropertyFieldImageSelectorHostProps);
    getIcon(imageMode: string): "Photo2" | "Photo2Add";
    getChoiceLabelText(imageMode: string): string;
    changeImageType(ev: React.SyntheticEvent<HTMLElement>, option: IChoiceGroupOption): void;
    getPropertyByString(o: any, s: any): any;
    private linkPickerPanel;
    openLinkPicker(event: any): void;
    render(): JSX.Element;
}
