import * as React from 'react';
import styles from './SecurityCompliance.module.scss';
import { ISecurityComplianceProps } from './ISecurityComplianceProps';
import { ISecurityComplianceState } from './ISecurityComplianceState';
// import { escape } from '@microsoft/sp-lodash-subset';
import { IListItem } from './IListItem';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { IWebPartContext} from '@microsoft/sp-webpart-base';

var siteURL;// = "https://ihgint.sharepoint.com/";

var userP = SPHttpClient;
var userName;
var userEmail;
// var listUrl;
//List Name
var listName;// = "ComplianceRequests";

export default class SecurityCompliance extends React.Component<ISecurityComplianceProps, ISecurityComplianceState> {
  
  public context: IWebPartContext;

  private listItemEntityTypeName: string = undefined;
  
  constructor(props: ISecurityComplianceProps, state: ISecurityComplianceState) {
    super(props);

    userName =props.userName;
    userEmail=props.userEmail;
    siteURL = props.siteUrl;
    listName = props.listName;

    this.state = {
      status: '',
      items: [],
      userName: props.userName,
      userEmail: props.userEmail,
      textValue:'',
      issueDesc:'',
      show: true,
      showConfirmation:false,
      showThanks:false,
      messages:'',
      checkBoxCheck:false
    };
  }

  reportMore=()=>{
    this.setState({
      status: '',
      items: [],
      userName:userName,
      userEmail:userEmail,
      textValue:'',
      issueDesc: '',
      show: true,
      showConfirmation: false,
      showThanks:false,
      messages:'',
      checkBoxCheck:false
    });
  }
  
  handleURLChange(e) {   
      this.setState({ 
        status:'',
        items:[],
        userName: userName,
        userEmail: userEmail,
        textValue: e.target.value,
        issueDesc: '',
        show:true,
        showConfirmation:false,
        showThanks:false,
        messages:'',
        checkBoxCheck:false
      });
  }

  urlValidation(event){
    var validURL = !!this.state.textValue.match(/sharepoint.com/);
    if(validURL == false){
      document.getElementById("urlField").focus();
      this.setState({ 
        status:'',
        items:[],
        userName : userName,
        userEmail: userEmail,
        textValue: this.state.textValue,
        issueDesc: '',
        show:true,
        showConfirmation:false,
        showThanks:false,
        messages:'Please enter valid Sharepoint URL',
      checkBoxCheck:false
      });
    }else{
      
    }
  }
  handleDescChange(event) {
    var linkis= `${siteURL}/_api/web/lists/getbytitle('${listName}')/items`;
    console.log(linkis);
    this.setState({ 
      status:'Ready to report',
      items:[],
      userName: userName,
      userEmail: userEmail,
      textValue: this.state.textValue,
      issueDesc: event.target.value,
      show:true,
      showConfirmation:false,
      showThanks:false,
      messages:'',
      checkBoxCheck:false
  });
}

toggleDiv=()=>{
    const {show} = this.state;
    this.setState({
      status: '',
      items: [],
      userName:userName,
      userEmail:userEmail,
      textValue:this.state.textValue,
      issueDesc: this.state.issueDesc,
      show: false,
      showConfirmation:true,
      showThanks:false,
      messages:'',
      checkBoxCheck:false
    });
  }
  

  handleConfirmationChange(event){
    if(this.state.checkBoxCheck === true){
      this.setState({
        status: '',
        items: [],
        userName:userName,
        userEmail:userEmail,
        textValue:this.state.textValue,
        issueDesc: this.state.issueDesc,
        show: false,
        showConfirmation:true,
        showThanks:false,
        messages:'',
        checkBoxCheck:false
      });
    } else{
      this.setState({
        status: 'Ready to report',
        items: [],
        userName:userName,
        userEmail:userEmail,
        textValue:this.state.textValue,
        issueDesc: this.state.issueDesc,
        show: false,
        showConfirmation:true,
        showThanks:false,
        messages:'',
        checkBoxCheck:true
      });
    }
  }

  handleThankYou(event){
    this.setState({
      status: 'Ready to report',
      items: [],
      userName:userName,
      userEmail:userEmail,
      textValue:this.state.textValue,
      issueDesc: this.state.issueDesc,
      show: false,
      showConfirmation:false,
      showThanks:true,
      messages:'',
      checkBoxCheck:false
    });
  }

  public render(): React.ReactElement<ISecurityComplianceProps> {
    return (
      <div className={styles.SCContentWrapper}>
        <div className={!this.state.show && styles.hiddenContent}>

          <div className={styles.topContent}>
            Want to flag content?
          </div>
          <div className="">
            If you see content in SharePoint or OneDrive that you think you shouldn’t be able to see, let us know below. We currently accept document and page URLs only.<br/>
          </div>

          <div className={styles.formStyle}>
            
            <span className="">Please enter the URL: <input placeholder="https://ihg.sharepoint.com/sites/example" id="urlField" value={this.state.textValue} type="text"  onChange={this.handleURLChange.bind(this)}/></span>
            <div className={styles.errorMessage} >{this.state.messages}</div>
            <span className="">Please write a short description:  <textarea value={this.state.issueDesc} onFocus={this.urlValidation.bind(this)} onChange={this.handleDescChange.bind(this)}/></span>

            <span>
              <div className={styles.buttonStyle}>
                <button className={styles.button} type="button" disabled={!this.state.status} onClick={this.toggleDiv.bind(this)}>Ready to report</button>
              </div>
            </span>
            
          </div>
        </div>

        
        <div className={!this.state.showConfirmation && styles.hiddenContent}>
          <div className={styles.topContent}>
            <h5>Please read and confirm</h5>
          </div>
      
          By submitting this URL for review, you will be starting a workflow for Global Technology to take action on your request. As a precaution, this will reset the security permissions on this content and trigger a review by Engagement Solutions, Information Security, and the content owner. We encourage employees to follow Information Security guidelines and be cautious to protect IHG intellectual property. You agree that you are using this tool within acceptable use guidelines of IHG.<br/>
          <div className={styles.iAgreeDiv}>
            <input type="checkbox" value="true" id="scCheckBox" checked={this.state.checkBoxCheck} name="myCheck" onChange={this.handleConfirmationChange.bind(this)}/> I Agree
          </div>
          <div className={styles.buttonStyleAgree}>
              <button className={styles.button} type="button" disabled={!this.state.status} onClick={() => this.createItem()}>Report</button>
            </div>
        </div>

        <div className={!this.state.showThanks && styles.hiddenContent}>
          {this.state.status}<br/>
          <div className={styles.buttonStyleAnother}>
            <button className={styles.button} type="button" onClick={this.reportMore.bind(this)}>Report another</button> 
          </div>
        </div>
      </div>
    );
  }

  private createItem(): void {
    this.setState({
      status: 'Reporting issue, please wait...',
      items: [],
      userName: userName,
      userEmail: userEmail,
      textValue: this.state.textValue,
      issueDesc: this.state.issueDesc,
      show:false,
      showConfirmation:false,
      showThanks:true,
      messages:'',
      checkBoxCheck:false
    });

    this.getListItemEntityTypeName()
      .then((listItemEntityTypeName: string): Promise<SPHttpClientResponse> => {
        const body: string = JSON.stringify({
          '__metadata': {
            'type': listItemEntityTypeName
          },
          'Title': `${this.state.userName}`,
          'reportedLink':`${this.state.textValue}`,
          'issueDescription':`${this.state.issueDesc}`,
          'uEmail':`${this.state.userEmail}`
        });
        // return this.props.spHttpClient.post(`${siteURL}_api/web/lists/getbytitle('sCompliance')/items`,
        return this.props.spHttpClient.post(`${siteURL}/_api/web/lists/getbytitle('${listName}')/items`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              'Accept': 'application/json;odata=nometadata',
              'Content-type': 'application/json;odata=verbose',
              'odata-version': ''
            },
            body: body
          });
      })
      .then((response: SPHttpClientResponse): Promise<IListItem> => {
        return response.json();
      })
      .then((item: IListItem): void => {
        this.setState({
          status: `URL has been reported successfully!`,
          items: [],
          userName:'',
          userEmail:'',
          textValue:'',
          issueDesc:'',
          show:false,
          showConfirmation:false,
          showThanks:true,
          messages:'',
      checkBoxCheck:false
        });
      }, (error: any): void => {
        this.setState({
          status: 'Oops, something went wrong. Please try one more time. <br/>Contact Administrator with the following information <br/> ' + error,
          items: [],
          userName:'',
          userEmail:'',
          textValue:'',
          issueDesc:'',
          show:false,
          showConfirmation:false,
          showThanks:true,
          messages:'',
      checkBoxCheck:false
        });
      });
  }



  private getListItemEntityTypeName(): Promise<string> {
    return new Promise<string>((resolve: (listItemEntityTypeName: string) => void, reject: (error: any) => void): void => {
      if (this.listItemEntityTypeName) {
        resolve(this.listItemEntityTypeName);
        return;
      }

      // this.props.spHttpClient.get(`${siteURL}_api/web/lists/getbytitle('sCompliance')?$select=ListItemEntityTypeFullName`,
      this.props.spHttpClient.get(`${siteURL}/_api/web/lists/getbytitle('${listName}')?$select=ListItemEntityTypeFullName`,
        SPHttpClient.configurations.v1,
        {
          headers: {
            'Accept': 'application/json;odata=nometadata',
            'odata-version': ''
          }
        })
        .then((response: SPHttpClientResponse): Promise<{ ListItemEntityTypeFullName: string }> => {
          return response.json();
        }, (error: any): void => {
          reject(error);
        })
        .then((response: { ListItemEntityTypeFullName: string }): void => {
          this.listItemEntityTypeName = response.ListItemEntityTypeFullName;
          resolve(this.listItemEntityTypeName);
        });
    });
  }
}