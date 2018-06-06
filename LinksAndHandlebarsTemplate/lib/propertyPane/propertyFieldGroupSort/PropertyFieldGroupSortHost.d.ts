/// <reference types="react" />
import * as React from 'react';
import { IPropertyFieldGroupSortPropsInternal } from './PropertyFieldGroupSort';
export interface IPropertyFieldGroupSortHostProps extends IPropertyFieldGroupSortPropsInternal {
}
export interface IPropertyFieldGroupSortState {
    currentValue?: string[];
    errorMessage?: string;
    selectedIndex?: number;
}
export default class PropertyFieldGroupSortHost extends React.Component<IPropertyFieldGroupSortHostProps, IPropertyFieldGroupSortState> {
    private latestValidateValue;
    private async;
    private delayedValidate;
    constructor(props: IPropertyFieldGroupSortHostProps);
    private onValueChanged(newValue);
    private validate(value);
    private notifyAfterValidate(oldValue, newValue);
    componentWillUnmount(): void;
    private setSelectItem(index);
    private moveUp();
    private moveDown();
    render(): JSX.Element;
}
