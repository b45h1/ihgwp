import * as React from 'react';
import styles from './IhgPromo.module.scss';
import { IIhgPromoProps } from './IIhgPromoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class IhgPromo extends React.Component<IIhgPromoProps, {}> {

  
  public render(): React.ReactElement<IIhgPromoProps> {
    return (
      <div className={ styles.ihgPromo }>
        <div className={styles.image}>
          <a href={this.props.description} target={this.props.newWindow ? "_blank" : "_self"}><img src={this.props.promoImage}/></a>
        </div>
      </div>
    );
  }
}
