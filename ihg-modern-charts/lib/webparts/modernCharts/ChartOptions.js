"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cs = require("color-scheme/lib/color-scheme");
var ChartOptions = (function () {
    function ChartOptions() {
    }
    ChartOptions.Options = function () {
        return {
            legend: {
                display: true,
                layout: {
                    padding: 5
                },
                position: 'bottom',
                labels: {
                    fontColor: 'rgba(100, 100, 100, 1.0)'
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        };
    };
    ChartOptions.Data = function (chart) {
        return {
            labels: chart.labels,
            datasets: [{
                    data: chart.data,
                    backgroundColor: chart.config.bgColors,
                    hoverBackgroundColor: chart.config.hoverColors
                }]
        };
    };
    ChartOptions.RandomColors = function () {
        var colors = { bgColors: [], hoverColors: [] };
        var colorTheme = new cs;
        var colorHue = Math.floor(Math.random() * 360);
        var colorPalette = colorTheme.from_hue(colorHue).scheme('analogic').variation('default');
        colors.bgColors = this.shuffleArray(colorPalette.add_complement(true).colors());
        colors.hoverColors = this.shuffleArray((colorPalette.add_complement(true).colors()).splice(6, 6));
        colors.bgColors.forEach(function (hex, i) { colors.bgColors[i] = '#' + hex; });
        colors.hoverColors.forEach(function (hex, i) { colors.hoverColors[i] = '#' + hex; });
        return colors;
    };
    ChartOptions.SampleData = function () {
        var theme = this.RandomColors();
        return {
            labels: [
                'Red',
                'Green',
                'Yellow',
                '??'
            ],
            datasets: [{
                    data: [100, 50, 275, 100],
                    backgroundColor: theme['bgColors'],
                    hoverBackgroundColor: theme['hoverColors']
                }]
        };
    };
    ChartOptions.shuffleArray = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    ChartOptions._sampleData = [100, 50, 275, 100];
    ChartOptions._sampleCols = ['UPS', 'FedEx', 'USPS', 'OnTrac'];
    return ChartOptions;
}());
exports.default = ChartOptions;

//# sourceMappingURL=ChartOptions.js.map
