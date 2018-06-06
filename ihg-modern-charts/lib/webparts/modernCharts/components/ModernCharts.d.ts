/// <reference types="react" />
import * as React from 'react';
import { IModernChartsProps } from '../IModernChartsWebPartProps';
import 'chart.js';
export default class ModernCharts extends React.Component<IModernChartsProps, void> {
    render(): JSX.Element;
    chart(data: Object, options: Object, type: string): any;
}
