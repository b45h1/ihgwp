import * as React from 'react';

import styles from '../ihg0365Concierge.module.scss';

import { TextField } from 'office-ui-fabric-react/lib/TextField';

import {DefaultButton} from 'office-ui-fabric-react/lib/Button'


var twoPeople = require('../assets/twoPeople.png');


export class submitTicket extends React.Component<any, any> {

  public render(): JSX.Element {
      const submitATicket = function():any{
          console.log("Button Click Registered");
          return null;
      };
    return (
      <div className={styles.homeContentContainer}>
        <hr/>
        <div className="homeTopContainer">
            <div className={styles.topContainerTitle + ' ms-font-l'}>Sharepoint support ticket</div>
            <div className={styles.topContainerDesc + ' ms-fontSize-m'}>The quickest and easiest way to get the help you need for SharePoint is by raising a support request. Simply fill out the form below.</div>
            
            <div className={styles.submitTicketFormContainer}>
            <TextField label="Requested for: " required={true} />
            <TextField label="Search our help topics (optional): " required={false} />
            <TextField label="Issue description: " multiline rows={5} required={true} />

            <DefaultButton
                primary={true}
                data-automation-id="test"
                disabled={false}
                checked={true}
                text="Submit"
                onClick={submitATicket}
                // allowDisabledFocus={true}
            />
            </div>
            <div className={styles.speakToSomeoneST}>
                <div className={styles.speakToSomeoneTitleST + ' ms-font-l'}>
                    <img className={styles.speakToSomeoneImg} src={twoPeople}/>
                </div>
                <div className={styles.speakToSomeoneDescriptionST + ' ms-fontSize-m'}>
                    <ul>
                        <li>Come and see us every Tuesday at the Smart Solutions bar in Ravinia or Lrem ipsum dolor.</li>
                        <li>Et placerat ac at a sed suspendisse adipiscing lacinia platea vitae commodo dui</li>
                    </ul>
                </div>
            </div>
        </div>            
      </div>
    );
  }

}
