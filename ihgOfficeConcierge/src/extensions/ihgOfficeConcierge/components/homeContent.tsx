import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import styles from '../ihg0365Concierge.module.scss';
// import supportMan from "../assets/supportMan.png";
var supportMan = require('../img/supportMan.png');
var trainingBook = require('../img/trainingBook.png');
var twoPeople = require('../img/twoPeople.png');

export class homeContent extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={styles.homeContentContainer}>
        <hr/>
        <div className="homeTopContainer">
            <div className={styles.topContainerTitle + ' ms-font-l'}>What would you like to do today?</div>
            <div className={styles.supportBtnsContainer}>
                <div className={styles.supportBtn + ' ms-fontSize-mPlus'}>
                    <img src={supportMan}/><br/>
                    Submit a support request
                </div>
                <div className={styles.trainingBtn + ' ms-fontSize-mPlus'}>
                    <img src={trainingBook}/><br/>
                    Browse training materials
                </div>
            </div>
            <div className={styles.speakToSomeone}>
                <div className={styles.speakToSomeoneTitle + ' ms-font-l'}>
                    <img className={styles.speakToSomeoneImg} src={twoPeople}/> Need to speak to someone?
                </div>
                <div className={styles.speakToSomeoneDescription + ' ms-fontSize-m'}>
                    <ul>
                        <li>Come and see us every Tuesday at the Smart Solutions bar in Ravinia or Lrem ipsum dolor.</li>
                        <li>Et placerat ac at a sed suspendisse adipiscing lacinia platea vitae commodo dui</li>
                    </ul>
                </div>
            </div>
        </div>    
        <hr/>
        <div className={styles.homeBottomContainer}>
            <div className={styles.homeBottomContainerTitle + ' ms-font-l'}>
                What is office 365 at IHG and what to use when
            </div>
            <div className={styles.homeBottomContainerDescription + ' ms-fontSize-m'}>
            <p>Amet sit blandit ut cubilia himenaeos non augue cras quis adipiscing metus nibh risus ipsum erat ullamcorper parturient class enim iaculis.A leo lacus felis consectetur est sit a etiam dictumst viverra parturient a amet a.Id gravida at.</p>

<p>A a ante vestibulum venenatis consequat condimentum a ultrices odio vivamus eget scelerisque mi vehicula ad condimentum.A lectus nisi sit a ut magna vehicula eu consectetur adipiscing ut in a id vulputate volutpat non tincidunt erat per et.Vitae habitasse eu ultrices placerat scelerisque curae euismod class vestibulum dis sapien a tincidunt nascetur sed potenti quis felis libero leo cursus nulla nostra condimentum.Cubilia imperdiet parturient condimentum parturient.</p>

<p>Vestibulum sapien sit dapibus a mi malesuada justo malesuada quis fermentum quam enim vestibulum massa adipiscing.Convallis sagittis morbi cras primis sodales tellus pretium</p>
            </div>
        </div>    
      </div>
    );
  }
}