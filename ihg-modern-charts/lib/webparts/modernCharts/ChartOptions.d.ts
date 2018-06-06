export interface Theme {
    name: string;
    bgColors: Array<string>;
    hoverColors: Array<string>;
}
import { MChart } from './IModernChartsWebPartProps';
export default class ChartOptions {
    static _sampleData: Array<number>;
    static _sampleCols: Array<string>;
    static Options(): Object;
    static Data(chart: MChart): {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
            hoverBackgroundColor: string[];
        }[];
    };
    static RandomColors(): Object;
    static SampleData(): {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: any;
            hoverBackgroundColor: any;
        }[];
    };
    static shuffleArray(array: any): any;
}
