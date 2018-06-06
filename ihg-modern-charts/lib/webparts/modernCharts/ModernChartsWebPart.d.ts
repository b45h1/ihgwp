import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, IWebPartContext } from '@microsoft/sp-webpart-base';
import { IModernChartsWebPartProps } from './IModernChartsWebPartProps';
import { ChartConfiguration } from './IModernChartsWebPartProps';
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
export default class ModernChartsWebPart extends BaseClientSideWebPart<IModernChartsWebPartProps> {
    private reactCharts;
    private colsDisabled;
    private listDisabled;
    private urlTextDisabled;
    private _chartThemeOptions;
    private _siteOptions;
    private _dropdownOptions;
    private _columnOptions;
    private _ListColumnOptions;
    private _chartSizeOptions;
    private _chartTypeOptions;
    private _chartColActions;
    constructor(context: IWebPartContext);
    private ChartThemes;
    private defaultOptions;
    defaultChartConfig(chartDesc: string): ChartConfiguration;
    render(): void;
    protected readonly dataVersion: Version;
    private getChartData();
    private getCharts(charts);
    private calculateData(data, config);
    private getUnique(data, config);
    private getValues(data, unique, config);
    protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void;
    protected onPropertyPaneConfigurationStart(): void;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected onPropertyPaneConfigurationComplete(): void;
    private _getSiteRootWeb();
    private _getSites(rootWebUrl);
    private _getListTitles(site);
    private _getListColumns(listName, listsite);
    getData(chartConfig: Object): Promise<any>;
    private _updateListTitles(siteUrl, _chartConfig);
    private _updateListColumns(siteUrl, listName, _chartConfig);
}
