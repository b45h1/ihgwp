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
var ModernCharts_module_scss_1 = require("./ModernCharts.module.scss");
require("chart.js");
var react_chartjs_2_1 = require("react-chartjs-2");
var react_chartjs_2_2 = require("react-chartjs-2");
var react_chartjs_2_3 = require("react-chartjs-2");
var react_chartjs_2_4 = require("react-chartjs-2");
var react_chartjs_2_5 = require("react-chartjs-2");
var react_chartjs_2_6 = require("react-chartjs-2");
var react_chartjs_2_7 = require("react-chartjs-2");
var ChartOptions_1 = require("../ChartOptions");
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var ModernCharts = (function (_super) {
    __extends(ModernCharts, _super);
    function ModernCharts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModernCharts.prototype.render = function () {
        var _this = this;
        var charts = this.props.charts.map(function (chart, i) {
            return (React.createElement(DocumentCard_1.DocumentCard, { onClickHref: '#', className: ModernCharts_module_scss_1.default.docContainer + ' ms-Grid-col ms-u-sm12 ms-u-md12 ms-u-lg' + chart.config.size, key: chart.key },
                React.createElement("div", { className: ModernCharts_module_scss_1.default.chartCard }, _this.chart(ChartOptions_1.default.Data(chart), ChartOptions_1.default.Options(), chart.config.type)),
                React.createElement(DocumentCard_1.DocumentCardLocation, { location: chart.config.description }),
                React.createElement(DocumentCard_1.DocumentCardTitle, { title: chart.config.title })));
        });
        return (React.createElement("div", { className: ModernCharts_module_scss_1.default.chartjs + ' ms-Grid' },
            React.createElement("div", { className: 'ms-Grid-row' }, charts),
            React.createElement("div", { style: { clear: 'both' } })));
    };
    ModernCharts.prototype.chart = function (data, options, type) {
        var tChart;
        switch (type) {
            case 'doughnut':
                tChart = React.createElement(react_chartjs_2_1.Doughnut, { data: data, options: options });
                return tChart;
            case 'line':
                tChart = React.createElement(react_chartjs_2_2.Line, { data: data, options: options });
                return tChart;
            case 'pie':
                tChart = React.createElement(react_chartjs_2_3.Pie, { data: data, options: options });
                return tChart;
            case 'bar':
                tChart = React.createElement(react_chartjs_2_4.Bar, { data: data, options: options });
                return tChart;
            case 'horizontalbar':
                tChart = React.createElement(react_chartjs_2_5.HorizontalBar, { data: data, options: options });
                return tChart;
            case 'radar':
                tChart = React.createElement(react_chartjs_2_6.Radar, { data: data, options: options });
                return tChart;
            case 'polar':
                tChart = React.createElement(react_chartjs_2_7.Polar, { data: data, options: options });
                return tChart;
            default:
                tChart = React.createElement(react_chartjs_2_2.Line, { data: data, options: options });
                return tChart;
        }
    };
    return ModernCharts;
}(React.Component));
exports.default = ModernCharts;

//# sourceMappingURL=ModernCharts.js.map
