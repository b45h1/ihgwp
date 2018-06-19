/// <reference types="react" />
/**
 * @file PropertyFieldCamlQueryHost.tsx
 * Renders the controls for PropertyFieldCamlQuery component
 *
 * @copyright 2017 Shire
 * Released under MIT licence
 *
 * Uses the PropertyFieldSPListQueryHost by Olivier Carpentier
 *
 */
import * as React from 'react';
import { IPropertyFieldCamlQueryFieldMappingPropsInternal, IField, IList, ISort, IMapping } from './PropertyFieldCamlQueryFieldMapping';
import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { List } from 'linqts';
/**
 * @interface
 * PropertyFieldCamlQueryHost properties interface
 *
 */
export interface IPropertyFieldCamlQueryFieldMappingHostProps extends IPropertyFieldCamlQueryFieldMappingPropsInternal {
}
export interface IFilter {
    field?: string;
    fieldKind?: number;
    operator?: string;
    value?: string;
}
export interface IPropertyFieldCamlQueryFieldMappingHostState {
    lists: IList[];
    fields: List<IField>;
    arranged: IDropdownOption[];
    selectedList?: IList;
    sort?: ISort;
    max?: number;
    operators?: IDropdownOption[];
    filters?: IFilter[];
    filterType: string;
    fieldMappings?: IMapping[];
    errorMessage?: string;
    loadedList: boolean;
    loadedFields: boolean;
    isCreateOpen: boolean;
}
/**
 * @class
 * Renders the controls for PropertyFieldCamlQuery component
 */
export default class PropertyFieldCamlQueryFieldMappingHost extends React.Component<IPropertyFieldCamlQueryFieldMappingHostProps, IPropertyFieldCamlQueryFieldMappingHostState> {
    private latestValidateValue;
    private latestMappingValidateValue;
    private async;
    private delayedValidate;
    private delayedMappingValidate;
    private listElementId;
    private listIsDocLib;
    /**
     * @function
     * Constructor
     */
    constructor(props: IPropertyFieldCamlQueryFieldMappingHostProps);
    private loadDefaultData();
    /**
     * @function
     * Loads the list from SharePoint current web site
     */
    private loadLists();
    private loadFields(updateView?);
    private getKindForType(type);
    private getFieldList(fieldType);
    private getFieldByInternalName(fieldTypeName);
    private saveState();
    private saveQuery();
    /**
     * @function
     * Validates the new custom field value
     */
    private validate(value);
    /**
     * @function
     * Notifies the parent Web Part of a property value change
     */
    private notifyAfterValidate(oldValue, newValue);
    /**
     * @function
     * Called when the component will unmount
     */
    componentWillUnmount(): void;
    /**
     * @function
     * Raises when a list has been selected
     */
    private onChangedList(option, index?);
    private onChangedField(option, index?);
    private onChangedArranged(option, index?);
    private onChangedMax(newValue?);
    private onClickAddFilter(elm?);
    private onClickRemoveFilter(index);
    private onChangedFilterField(option, index?, selectedIndex?);
    private onChangedFilterOperator(option, index?, selectedIndex?);
    private onChangedFilterValue(value?, index?);
    private onChangedFieldMapping(option, index?);
    private onChangedFilterType(option, index?);
    private onChangedFieldMappingEnabled(sender, checked?, index?);
    private openCreateNewListDialog(element?);
    private createNewList(element?);
    private setTitleOptional(list);
    private createField(list, fieldXmls, currentIndex);
    private addFieldsToView(idx);
    private saveAndReloadData();
    private cancelListCreate(element?);
    private openListInNewTab();
    /**
     * @function
     * Renders the controls
     */
    render(): JSX.Element;
}
