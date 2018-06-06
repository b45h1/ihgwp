import * as React from 'react';
import styles from './IhgTimelineWebpart.module.scss';
import { IIhgTimelineWebpartProps } from './IIhgTimelineWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class IhgTimelineWebpart extends React.Component<IIhgTimelineWebpartProps, {}> {
  public render(): React.ReactElement<IIhgTimelineWebpartProps> {
    return (
      <div className={ styles.ihgTimelineWebpart }>
       
      </div>
    );
  }
}
