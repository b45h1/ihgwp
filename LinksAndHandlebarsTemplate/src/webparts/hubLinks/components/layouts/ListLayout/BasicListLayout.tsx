import * as React from 'react';
import * as strings from 'hubLinksStrings';
import { IHubLinksItem } from '../../IHubLinksItem';
import { IHubLinksLayout } from "../HubLinksLayout";
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
//import HubLinksFactory from '../HubLinksFactory';
import HubLinksWebPart from "../../HubLinks";
import llStyles from './LLStyles.module.scss';

export default class BasicListLayout implements IHubLinksLayout{
  constructor(webpart:HubLinksWebPart){
    this.webpart = webpart;
  }
  
  
  private _webpart : HubLinksWebPart;
  public get webpart() : HubLinksWebPart {
    return this._webpart;
  }
  public set webpart(v : HubLinksWebPart) {
    this._webpart = v;
  }
  
  public render(items:IHubLinksItem[], isEditMode: boolean):JSX.Element{
    return (
      <ul className={llStyles["hubLinks"] + (this.webpart.props.isEdit? " " + llStyles["edit"] : "")}>
        { items &&
            items.map((item) => {
              return (
                <span> 
                  <li className="listItemFullWidth" key={"item-"+items.indexOf(item)} role="link" id={"item-"+items.indexOf(item)} 
                       draggable={isEditMode} onDragStart={this.webpart.startDrag.bind(this.webpart)} 
                       onMouseDown={this.webpart.mouseDragDown.bind(this.webpart)} onDragEnter={this.webpart.moveItem.bind(this.webpart)} 
                       onDragEnd={this.webpart.endDrag.bind(this.webpart)} data-index={items.indexOf(item)}>
                     {/* <i className={"fa " + (item.Icon == "" ? "fa-angle-right" : item.Icon)+ " " + llStyles["faIcon"]} aria-hidden="true"/> */}
                     <i className={"fa " + 
                      //(item.Icon == "" ? "fa-angle-right" : item.Icon)+ " " + 
                      (item.Icon=="" || item.Icon==null ? " fa-angle-right " : 
                      (item.Icon.indexOf("fa-")>-1 ? item.Icon : "ms-Icon ms-Icon--" + item.Icon)) + 
                      
                      " " + llStyles["faIcon"]} aria-hidden="true"/>
                     <a className={llStyles["linktitle"]} href={item.URL} target={item.NewTab ? "_blank" : ""}>{item.Title}</a>
                     <p className={llStyles["linkdescription"]}>{item.Description}</p>                    
                     {isEditMode &&
                       <div className={llStyles["editControls"]}>
                           <DefaultButton iconProps={{iconName:"Clear"}} onClick={this.webpart.deleteBox.bind(this.webpart)} className={llStyles["right-button"]}/>
                           <DefaultButton iconProps={{iconName:"Edit"}} onClick={this.webpart.editBox.bind(this.webpart)} className={llStyles["right-button"]}/>
                           {/* <button label="Clear" onClick={this.webpart.deleteBox.bind(this.webpart)} className={ilStyles["right-button"]}/>
                           <button label="Edit" onClick={this.webpart.editBox.bind(this.webpart)} className={ilStyles["right-button"]}/> */}
                           <i className={"ms-Icon ms-Icon--Move "+llStyles["left-button"]} id="drag-handle" aria-hidden="true"></i>
                       </div>
                     }
                 </li>
               
                 </span>
              );
            })
        }
        { (!items || items.length < 1) && isEditMode &&
          Array.apply(null,Array(1-(items ? items.length : 0))).map((o,i)=>{
            return(
              <li className={"col-md-4 "+llStyles["emptyBox"]}>
                <div role="button" onClick={this.webpart.openLinkPicker.bind(this.webpart)}>{strings.PlaceholderButtonText}</div>
              </li>
            );
          })
        }        
      </ul>
    );
  }
}