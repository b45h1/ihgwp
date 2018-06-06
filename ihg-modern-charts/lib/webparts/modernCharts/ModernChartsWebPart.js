"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("modernChartsStrings");
var ModernCharts_1 = require("./components/ModernCharts");
var ChartOptions_1 = require("./ChartOptions");
var sp_http_1 = require("@microsoft/sp-http");
var ModernChartsWebPart = (function (_super) {
    __extends(ModernChartsWebPart, _super);
    function ModernChartsWebPart(context) {
        var _this = _super.call(this) || this;
        // Columns Enable / Disable
        _this.colsDisabled = true;
        _this.listDisabled = true;
        _this.urlTextDisabled = true;
        //Property Dropdown Options
        _this._chartThemeOptions = [];
        _this._siteOptions = [];
        _this._dropdownOptions = [];
        _this._columnOptions = [];
        _this._ListColumnOptions = [];
        _this._chartSizeOptions = [
            { key: 3, text: 'Small' },
            { key: 6, text: 'Medium' },
            { key: 9, text: 'Medium-Large' },
            { key: 12, text: 'Large' }
        ];
        _this._chartTypeOptions = [
            { key: 'bar', text: 'Bar' },
            { key: 'horizontalbar', text: 'Horizontal Bar' },
            { key: 'doughnut', text: 'Doughnut' },
            { key: 'line', text: 'Line' },
            { key: 'pie', text: 'Pie' },
            { key: 'polar', text: 'Polar' },
            { key: 'radar', text: 'Radar' }
        ];
        _this._chartColActions = [
            { key: 'average', text: 'Average' },
            { key: 'count', text: 'Count' },
            { key: 'sum', text: 'Sum' }
        ];
        _this.defaultOptions = {
            legend: {
                display: false,
                layout: {
                    padding: 10
                },
                position: 'bottom',
                labels: {
                    fontColor: 'rgba(100, 100, 100, 1.0)'
                }
            }
        };
        return _this;
    }
    ModernChartsWebPart.prototype.defaultChartConfig = function (chartDesc) {
        var defConfig = {
            title: 'Chart Title',
            description: chartDesc,
            type: 'doughnut',
            list: null,
            dataurl: this.context.pageContext.web.absoluteUrl,
            url: this.context.pageContext.web.absoluteUrl,
            other: true,
            dataUrlDisabled: true,
            colsDisabled: true,
            listsDisabled: false,
            col1: '',
            col2: '',
            act: '',
            unique: '',
            size: 12,
            options: ChartOptions_1.default.Options(),
            columns: [],
            lists: this.properties.listOptions,
            theme: "Random",
            bgColors: ChartOptions_1.default.RandomColors()['bgColors'],
            hoverColors: ChartOptions_1.default.RandomColors()['bgColors']
        };
        return defConfig;
    };
    ModernChartsWebPart.prototype.render = function () {
        //Initialize first demo chart
        if (!this.properties.state) {
            this.properties.state = true;
            this.properties.firstLoad = true;
            this.properties.numCharts = 1;
            this.properties.chartConfig = [];
            var firstChartConfig = this.defaultChartConfig;
            this.properties.chartConfig.push(this.defaultChartConfig('Demo Chart, Edit Web Part to Customize'));
        }
        this.getChartData();
    };
    Object.defineProperty(ModernChartsWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ModernChartsWebPart.prototype.getChartData = function () {
        var _this = this;
        var _chartData = [];
        var _count = 0;
        this.properties.chartConfig.forEach(function (cfg, i) {
            if (cfg.list != null) {
                _this.getData(cfg).then(function (response) {
                    var chart = _this.calculateData(response.value, cfg);
                    var _chart = { data: chart['data'], labels: chart['labels'], config: cfg, key: i };
                    _chartData[i] = _chart;
                    if (++_count == _this.properties.chartConfig.length) {
                        _this.getCharts(_chartData);
                    }
                });
            }
            else {
                var _chart = { data: ChartOptions_1.default._sampleData, labels: ChartOptions_1.default._sampleCols, config: cfg, key: i };
                _chartData[i] = _chart;
                if (++_count == _this.properties.chartConfig.length) {
                    _this.getCharts(_chartData);
                }
            }
        });
    };
    ModernChartsWebPart.prototype.getCharts = function (charts) {
        var chartArea = React.createElement(ModernCharts_1.default, {
            description: this.properties.description,
            title: this.properties.description,
            state: this.properties.state,
            config: {},
            context: this.context,
            data: {},
            charts: charts
        });
        ReactDom.render(chartArea, this.domElement);
    };
    ModernChartsWebPart.prototype.calculateData = function (data, config) {
        var values = [];
        var labels = this.getUnique(data, config);
        var dataVal = this.getValues(data, labels['unique'], config);
        switch (config.act) {
            case 'sum':
                dataVal.forEach(function (vals, i) {
                    values[i] = 0;
                    vals.forEach(function (val) {
                        values[i] += parseFloat(val);
                    });
                });
                break;
            case 'average':
                dataVal.forEach(function (vals, i) {
                    values[i] = 0;
                    vals.forEach(function (val) {
                        values[i] += parseFloat(val);
                    });
                    if (values[i] != 0) {
                        values[i] = values[i] / vals.length;
                    }
                });
                break;
            case 'count':
                dataVal.forEach(function (vals) {
                    values.push(vals.length);
                });
                break;
            default:
                values = [100, 250, 90, 300];
                break;
        }
        return { data: values, labels: labels['labels'] };
    };
    ModernChartsWebPart.prototype.getUnique = function (data, config) {
        var chLabels = { unique: [], labels: [] };
        data.forEach(function (item) {
            if (chLabels['unique'].indexOf(item[config.unique]) == -1 && item[config.unique] != null && item[config.unique] != "") {
                chLabels['unique'].push(item[config.unique]);
                chLabels['labels'].push(item[config.col1]);
            }
        });
        return chLabels;
    };
    ModernChartsWebPart.prototype.getValues = function (data, unique, config) {
        var values = {};
        var vals = [[]];
        unique.forEach(function (col, i) {
            values[col] = [];
            vals[i] = [];
            data.forEach(function (item, _i) {
                if (item[config.unique] == col) {
                    vals[i].push(item[config.col2]);
                }
            });
        });
        return vals;
    };
    ModernChartsWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        var pPath = propertyPath;
        var pPathInd = propertyPath[12];
        if (pPath === 'numCharts' && oldValue != newValue) {
            if (this.properties.chartConfig.length < newValue) {
                while (this.properties.chartConfig.length < newValue) {
                    this.properties.chartConfig.push(this.defaultChartConfig('Chart Description'));
                }
            }
            else if (this.properties.chartConfig.length > newValue) {
                while (newValue < this.properties.chartConfig.length) {
                    this.properties.chartConfig.pop();
                }
            }
        }
        if (propertyPath.indexOf('[') != -1) {
            pPath = propertyPath.substring(16).replace('\"]', '');
        }
        if (pPath === 'url' && newValue == 'other' && (oldValue != newValue)) {
            this.urlTextDisabled = false;
            this.properties.chartConfig[pPathInd].dataUrlDisabled = false;
            this.properties.chartConfig[pPathInd].dataurl = oldValue;
        }
        if (pPath === 'url' && newValue != 'other' && (oldValue != newValue)) {
            this.properties.chartConfig[pPathInd].dataurl = newValue;
            this.properties.chartConfig[pPathInd].dataUrlDisabled = true;
        }
        if ((pPath === 'url' && (newValue != oldValue)) || (pPath === 'dataurl' && (newValue != oldValue))) {
            this._updateListTitles(newValue, this.properties.chartConfig[pPathInd]);
            this.properties.chartConfig[pPathInd]['other'] = true;
            this.properties.state = true;
        }
        if (pPath === 'list' && (newValue != oldValue)) {
            var siteUrl = this.properties.chartConfig[pPathInd]['dataurl'];
            this._updateListColumns(siteUrl, newValue, this.properties.chartConfig[pPathInd]);
            this.properties.chartConfig[pPathInd].colsDisabled = false;
        }
        if (pPath === 'theme' && (newValue != oldValue)) {
            var newTheme = ChartOptions_1.default.RandomColors();
            this.properties.chartConfig[pPathInd].bgColors = newTheme['bgColors'];
            this.properties.chartConfig[pPathInd].hoverColors = newTheme['hoverColors'];
        }
        this.context.propertyPane.refresh();
        this.render();
    };
    ModernChartsWebPart.prototype.onPropertyPaneConfigurationStart = function () {
        var _this = this;
        if (this.properties.firstLoad || this.properties.chartConfig[0].columns.length <= 0 || this.properties.chartConfig[0].list.length <= 0) {
            this.context.statusRenderer.displayLoadingIndicator(this.domElement, 'First Time Configuration');
            this.properties.firstLoad = false;
            this._getSiteRootWeb()
                .then(function (response0) {
                _this._getSites(response0['Url'])
                    .then(function (response) {
                    var sites = [];
                    sites.push({ key: _this.context.pageContext.web.absoluteUrl, text: 'This Site' });
                    sites.push({ key: 'other', text: 'Other Site (Specify Url)' });
                    for (var _key in response.value) {
                        if (_this.context.pageContext.web.absoluteUrl != response.value[_key]['Url']) {
                            sites.push({ key: response.value[_key]['Url'], text: response.value[_key]['Title'] });
                        }
                    }
                    _this._siteOptions = sites;
                    _this.properties.siteOptions = sites;
                    _this._getListTitles(_this.properties.chartConfig[0].dataurl)
                        .then(function (response2) {
                        _this.properties.listOptions = response2.value.map(function (list) {
                            return {
                                key: list.Title,
                                text: list.Title
                            };
                        });
                        _this.properties.chartConfig[0].lists = _this.properties.listOptions;
                        _this._getListColumns(_this.properties.chartConfig[0].list, _this.properties.chartConfig[0].url)
                            .then(function (response3) {
                            var col = [];
                            for (var __key in response3.value) {
                                col.push({ key: response3.value[__key]['InternalName'], text: response3.value[__key]['Title'] });
                            }
                            _this._columnOptions = col;
                            _this.colsDisabled = false;
                            _this.listDisabled = false;
                            _this.context.propertyPane.refresh();
                            _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
                            _this.render();
                        });
                    });
                });
            });
        }
    };
    ModernChartsWebPart.prototype.getPropertyPaneConfiguration = function () {
        var columnPropertyOptions;
        columnPropertyOptions = [
            {
                groupName: 'General Options',
                groupFields: [
                    sp_webpart_base_1.PropertyPaneTextField('description', {
                        label: 'Web Part Title'
                    }),
                    sp_webpart_base_1.PropertyPaneSlider('numCharts', {
                        label: 'Number of Charts',
                        min: 1,
                        max: 10
                    }),
                    sp_webpart_base_1.PropertyPaneSlider('maxResults', {
                        label: 'Max # of list items',
                        min: 1,
                        max: 1000
                    })
                ]
            }
        ];
        for (var _i = 0; _i < this.properties.numCharts; _i++) {
            columnPropertyOptions.push({
                groupName: "Chart " + (_i + 1) + " Configuration",
                groupFields: [
                    sp_webpart_base_1.PropertyPaneTextField('chartConfig[' + _i + ']["title"]', {
                        label: "Chart Title"
                    }),
                    sp_webpart_base_1.PropertyPaneTextField('chartConfig[' + _i + ']["description"]', {
                        label: "Description "
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["type"]', {
                        label: 'Chart Type',
                        options: this._chartTypeOptions
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["size"]', {
                        label: 'Chart Size',
                        options: this._chartSizeOptions
                    }),
                    sp_webpart_base_1.PropertyPaneButton('chartConfig[' + _i + ']["theme"]', {
                        buttonType: 0,
                        text: 'Generate Theme',
                        icon: 'Color',
                        onClick: (function (val) {
                            return new Date().valueOf();
                        })
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["url"]', {
                        label: 'Chart Data Source',
                        options: this.properties.siteOptions
                    }),
                    sp_webpart_base_1.PropertyPaneTextField('chartConfig[' + _i + ']["dataurl"]', {
                        label: 'Chart Site Url (i.e. https://contoso.sharepoint.com/path)',
                        disabled: this.properties.chartConfig[_i].dataUrlDisabled
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["list"]', {
                        label: 'List Data Source',
                        options: this.properties.chartConfig[_i].lists,
                        disabled: this.properties.chartConfig[_i].listsDisabled
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["col1"]', {
                        label: 'Label Column',
                        options: this.properties.chartConfig[_i].columns,
                        disabled: this.properties.chartConfig[_i].colsDisabled
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["col2"]', {
                        label: 'Data Column',
                        options: this.properties.chartConfig[_i].columns,
                        disabled: this.properties.chartConfig[_i].colsDisabled
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["unique"]', {
                        label: 'Unique Identifier',
                        options: this.properties.chartConfig[_i].columns,
                        disabled: this.properties.chartConfig[_i].colsDisabled
                    }),
                    sp_webpart_base_1.PropertyPaneDropdown('chartConfig[' + _i + ']["act"]', {
                        label: 'Operation',
                        options: this._chartColActions,
                        disabled: this.properties.chartConfig[_i].colsDisabled
                    })
                ]
            });
        }
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: columnPropertyOptions
                }
            ]
        };
    };
    ModernChartsWebPart.prototype.onPropertyPaneConfigurationComplete = function () {
        this.render();
    };
    ModernChartsWebPart.prototype._getSiteRootWeb = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/Site/RootWeb?$select=Title,Url", sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    ModernChartsWebPart.prototype._getSites = function (rootWebUrl) {
        return this.context.spHttpClient.get(rootWebUrl + "/_api/web/webs?$select=Title,Url", sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    ModernChartsWebPart.prototype._getListTitles = function (site) {
        return this.context.spHttpClient.get(site + "/_api/web/lists?$filter=Hidden eq false and BaseType eq 0", sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    ModernChartsWebPart.prototype._getListColumns = function (listName, listsite) {
        return this.context.spHttpClient.get(listsite + ("/_api/web/lists/GetByTitle('" + listName + "')/Fields?$filter=Hidden eq false and ReadOnlyField eq false and TypeAsString ne 'User' and TypeAsString ne 'Lookup'"), sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    ModernChartsWebPart.prototype.getData = function (chartConfig) {
        return this.context.spHttpClient.get(chartConfig['dataurl'] + ("/_api/web/lists/GetByTitle('" + chartConfig['list'] + "')/items?$orderby=Id desc&$limit=10&$top=" + this.properties.maxResults), sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    ModernChartsWebPart.prototype._updateListTitles = function (siteUrl, _chartConfig) {
        var _this = this;
        this._getListTitles(siteUrl).then(function (response) {
            var respLists = [];
            for (var _key in response.value) {
                respLists.push({ key: response.value[_key]['Title'], text: response.value[_key]['Title'] });
            }
            _this._dropdownOptions = respLists;
            _chartConfig.lists = respLists;
            _this.context.propertyPane.refresh();
        }).catch(function (err) {
            _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
            _this.context.statusRenderer.renderError(_this.domElement, "There was an error loading your list, please verify the selected list has Calendar Events or choose a new list.");
        });
    };
    ModernChartsWebPart.prototype._updateListColumns = function (siteUrl, listName, _chartConfig) {
        var _this = this;
        this._getListColumns(listName, siteUrl).then(function (response) {
            var respLists = [];
            console.log(response.value);
            for (var _key in response.value) {
                respLists.push({ key: response.value[_key]['InternalName'], text: response.value[_key]['Title'] });
            }
            _this._columnOptions = respLists;
            _chartConfig.columns = respLists;
            _this.context.propertyPane.refresh();
        }).catch(function (err) {
            _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
            _this.context.statusRenderer.renderError(_this.domElement, "There was an error loading your list, please verify the selected list has Calendar Events or choose a new list.");
        });
    };
    return ModernChartsWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = ModernChartsWebPart;

//# sourceMappingURL=ModernChartsWebPart.js.map
