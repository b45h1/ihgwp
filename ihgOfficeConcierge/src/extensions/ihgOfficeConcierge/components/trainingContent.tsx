import * as React from 'react';
import styles from '../ihg0365Concierge.module.scss';

var brainstormLogo = require('../img/brainstorm_logo.png');
var microsoftLogo = require('../img/microsoft.png');


export class trainingContent extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={styles.trianingContainer}>
        <hr />
        <div className={styles.trainingContainerTitle + ' ms-font-l'}>
          Training content here
        </div>
        <div className={styles.trianingContainerDescription}>
          Diam accumsan elementum consectetur justo vestibulum adipiscing egestas a a a in suspendisse aliquam consequat nisi lobortis elementum interdum mauris himenaeos vestibulum bibendum torquent a adipiscing convallis.Convallis quam at arcu.
        </div>
        <hr />
        <div className={styles.trainingBoxContainer}>
          <div className={styles.trainingBoxContainerLeftBox}>
            <img className={styles.brainstormLogo} src={brainstormLogo} /><br />
            <div className={styles.trainingLeftBoxTitle + ' ms-fontSize-l'}>
              Brainstorm
            </div>
            <div className={styles.trainingLeftBoxDesc + ' ms-fontSize-m'}>
              Learning solutions and training services
            </div>
          </div>
          <div className={styles.trainingBoxContainerRightBox}>
            <div className={styles.rightBoxTitle + ' ms-fontWeight-semibold'}>
              Brainstorm
            </div>
            <div className={styles.rightBoxDesc}>
              Diam accumsan elementum consectetur justo vestibulum adipiscing egestas a a a in suspendisse aliquam consequat nisi lobortis elementum interdum mauris himenaeos vestibulum bibendum torquent a adipiscing convallis. Convallis quam at arcu.
            </div>
          </div>
        </div>
        <div className={styles.clearBoth}></div>
        <hr />
        <div className={styles.trainingBoxContainer}>
          <div className={styles.trainingBoxContainerLeftBox}>
            <img className={styles.microsoftLogo} src={microsoftLogo}/>
          </div>
          <div className={styles.trainingBoxContainerRightBox}>
            <div className={styles.rightBoxTitle + ' ms-fontWeight-semibold'}>
              Microsoft
            </div>
            <div className={styles.rightBoxDesc}>
              <ul>
                <li>Diam accumsan elementum consectetur justo vestibulum</li>
                <li>A consectetur placerat molestie aliquet</li>
                <li>Interdum ac potenti laoreet at</li>
                <li>Platea malesuada bibendum congue suscipit scelerisque in nibh</li>
                <li>Ac venenatis suscipit nec augue a diam non vestibulum</li>
                <li>A taciti adipiscing quis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}