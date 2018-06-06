import * as React from 'react';
import styles from './HubLinks.module.scss';
import * as strings from 'hubLinksStrings';
import { IHubLinksProps } from './IHubLinksProps';
import IPanelState from './IHubLinksState';
import { HubLinksLayout, bgType } from './layouts/HubLinksLayout';
import HubLinksFactory from './layouts/HubLinksFactory';
import HubLinksSidePanel from './layouts/HubLinksSidePanel';
import { CommandButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import LinkPickerPanel from '../../../components/LinkPickerPanel/LinkPickerPanel';
import { LinkType } from '../../../components/LinkPickerPanel/ILinkPickerPanelProps';
import ElemUtil from "../../../utilities/element/elemUtil";
import { DelayedRender } from 'office-ui-fabric-react/lib/Utilities';

export default class HubLinks extends React.Component<IHubLinksProps, IPanelState> {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false
    };
  }
  public bgStyle: any;
  public bgStylePromo: any;
  public bgStylePromoRight: any;
  public columnWidth: any;
  public solidColorHeaderWidth: any;



  /* Manage drag and drop sorting feature */
  private _dragElement: any;
  public get dragElement(): any {
    return this._dragElement;
  }
  public set dragElement(v: any) {
    this._dragElement = v;
  }

  private _mouseTarget: any;
  public get mouseTarget(): any {
    return this._mouseTarget;
  }
  public set mouseTarget(v: any) {
    this._mouseTarget = v;
  }

  public mouseDragDown(event) {
    this.mouseTarget = event.target;
  }

  public startDrag(event) {
    event.stopPropagation();
    if (event.currentTarget.querySelector('#drag-handle').contains(this.mouseTarget)) {
      this.dragElement = event.currentTarget;
      event.dataTransfer.eventAllowed = "move";
      event.dataTransfer.setData('text/plan', 'drag-handle');
    }
    else {
      event.preventDefault();
    }
  }

  public isbefore(a, b) {
    if (a.parentNode == b.parentNode) {
      for (var cur = a; cur; cur = cur.previousSibling) {
        if (cur === b) {
          return true;
        }
      }
    }
    return false;
  }

  public endDrag(event) {
    const indexArr: number[] = [];
    //If Grouped Layout, update GroupBy field if group has changed
    if (this.props.layoutMode == HubLinksLayout.GroupedListLayout) {
      const currentGroup = ElemUtil.closest(event.currentTarget, '[data-group]');
      var groupProp = currentGroup.getAttribute('data-group');
      if (groupProp.length > 0) {
        var group = groupProp.split("-")[1];
        if (group.length > 0)
          this.props.setGroup(event.currentTarget.getAttribute('data-index'), group);
      }
    }
    const currentElements = ElemUtil.closest(event.currentTarget, '[data-reactroot]').querySelectorAll('[data-index]');
    currentElements.forEach((element) => { indexArr.push(parseInt(element.getAttribute('data-index'))); });
    this.props.rearrangeItems(indexArr);
  }

  public moveItem(event) {
    if (this.isbefore(this.dragElement, ElemUtil.closest(event.target, '[data-index]'))) {
      ElemUtil.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, ElemUtil.closest(event.target, '[data-index]'));
    }
    else {
      if (!this.dragElement.contains(ElemUtil.closest(event.target, '[data-index]')))
        ElemUtil.closest(event.target, '[data-index]').parentNode.insertBefore(this.dragElement, ElemUtil.closest(event.target, '[data-index]').nextSibling);
    }
  }

  public toggleGroup(event) {
    if (event.target.tagName === 'A') return;
    event.stopPropagation();
    event.preventDefault();
    var element = ElemUtil.closest(event.target, "[data-group]");
    if (element.getAttributeNode('data-expanded')) {
      element.removeAttribute('data-expanded');
    } else {
      element.setAttribute('data-expanded', "");
    }
  }

  public setTitle(event) {
    this.props.setTitle(event.target.value);
  }

  public setPromoPrefix(event) {
    this.props.setPromoPrefix(event.target.value);
  }

  public addBox(event) {
    this.props.editItem(-1);
  }

  public editBox(event) {
    event.stopPropagation();
    event.preventDefault();
    this.props.editItem(ElemUtil.closest(event.target, '[data-index]').getAttribute("data-index"));
    return false;
  }

  public deleteBox(event) {
    event.stopPropagation();
    event.preventDefault();
    if (confirm(strings.DeleteItemConfirmMessage))
      this.props.deleteItem(ElemUtil.closest(event.target, '[data-index]').getAttribute("data-index"));
    return false;
  }

  // ** Event handlers for link picker **
  private linkPickerPanel: LinkPickerPanel;
  // Open the link picker - called from onClick of Change (link) button
  public openLinkPicker(event) {
    this.linkPickerPanel.pickLink().then(({ name, url }) => {
      this.props.setUrl(url, name);
    });
  }


  public render(): React.ReactElement<IHubLinksProps> {
    // document.getElementsByClassName[0].onresize = function() {this.renderBasicWebPart()};
    return this.props.usesListMode ? this.renderAdvancedWebPart() : this.renderBasicWebPart();
  }

  public renderBasicWebPart(): JSX.Element {
    var mediaQuery = window.matchMedia("(max-width:767px)");
    var colors = ['#d96932', '#707372', '#385e9d', '#71b2c9'];

    if (mediaQuery.matches){ //For Small Screens
      this.bgStyle = {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        height: "110px",
        padding: "20px"
      };
      this.bgStylePromo = {
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        height: "250px",
        width: "10%",
        float: "left"
      };
      this.bgStylePromoRight = {
        width: "90%",
        float: "left",
        height: "250px",
        background: "rgba(56, 94, 157, 0.1)",
        overflow:"hidden"
      }
    }else{ //For Big Screens
      if (this.props.background == bgType.BgImage) {
        this.bgStyle = {
          backgroundImage: `url(${this.props.bgImagePicker})`,
          backgroundSize: "cover",
          height: "110px",
          padding: "20px"
        };
        this.bgStylePromo = {
          backgroundImage: `url(${this.props.bgImagePicker})`,
          backgroundSize: "cover",
          height: "250px",
          width: "30%",
          float: "left"
        };   
        this.bgStylePromoRight = {
          width: "70%",
          height: "250px",
          background: "rgba(56, 94, 157, 0.1)",
          overflow:"hidden",
          position:"relative"
        }
      } else if (this.props.background == bgType.BgColor) {
        //Compact header configuration
        if(this.props.compactHeader){
          this.bgStyle = {
            backgroundColor: this.props.bgImagePicker,
            height: "55px",
            padding: "5px 20px 5px 20px"
          }; 
        }else{
          this.bgStyle = {
            backgroundColor: this.props.bgImagePicker,
            height: "110px",
            padding: "20px"
          };
        }

        this.solidColorHeaderWidth={
            width:"100%",
        }

        this.bgStylePromo = {
          backgroundColor: this.props.bgImagePicker,
          height: "250px",
          width: "30%",
          float: "left"
        };

        this.bgStylePromoRight = {
          width: "70%",
          float: "left",
          height: "250px",
          background: "rgba(56, 94, 157, 0.1)",
          overflow:"hidden",
          position:"relative"
        }
      }

    }

    // this.props.columnWidth=document.getElementById("myUnorderList").offsetWidth;
    return (
      <div>
        {this.props.layoutMode == 0 && //List mode LIST
          this.listView()
        }
        {this.props.layoutMode == 1 && //List mode Promo
          this.promoView()
        }
        {this.props.layoutMode == 2 && //List mode Group Item
          this.listView()
        }
      </div>
    );
  }

  private _setShowPanel = (showPanel: boolean): () => void => {
    return (): void => {
      this.setState({ showPanel });
    };
  }

  public listView(): JSX.Element {
    return (
      <div>
        <div className={styles["webpart-header"]} style={this.bgStyle}>
          {this.props.isEdit && <textarea onChange={this.setTitle.bind(this)} className={styles["edit"]} style={this.solidColorHeaderWidth} placeholder={strings.TitlePlaceholder} aria-label="Add a title">{this.props.title}</textarea>}
          {!this.props.isEdit && this.props.title && <span style={this.solidColorHeaderWidth} className={styles["view"]}>{this.props.title}</span>}
        </div>
        <div className={styles["webpart-desription"]}>
          {this.props.wpBodyText}
        </div>
        {this.props.isEdit &&
          <CommandButton iconProps={{ iconName: 'Add' }} onClick={this.addBox.bind(this)}>{strings.AddNewButtonText}</CommandButton>
        }
        <div className={styles["wpUnorderList"]}>
          {HubLinksFactory.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit)}
          {this.props.isEdit &&
            <LinkPickerPanel
              webPartContext={this.props.context}
              className={styles["link-picker"]}
              webAbsUrl={this.props.context.pageContext.web.absoluteUrl}
              linkType={LinkType.any}
              ref={(ref) => { this.linkPickerPanel = ref; }} />
          }
        </div>
        <div className={this.props.showPanel && styles["sidePanelBtn"]}>
          {this.props.showPanel &&
            <DefaultButton
              description='Show more'
              onClick={this._setShowPanel(true)}
              text='More'
              className={styles['showPanelBtn']}
            />}
          <Panel
            isOpen={this.state.showPanel}
            onDismiss={this._setShowPanel(false)}
            type={PanelType.medium}
            headerText=""
            headerClassName={styles["sidePanelHeader"]}
            className={styles["sidePanel"]}
            isLightDismiss={true}
          >
            <div className={styles["webpart-headerSidePanel"]} style={this.bgStyle}>
              <div className={"webpartTitleText"}>{this.props.isEdit && <textarea onChange={this.setTitle.bind(this)} className={styles["edit"]} placeholder={strings.TitlePlaceholder} aria-label="Add a title">{this.props.title}</textarea>}
                {!this.props.isEdit && this.props.title && <span className={styles["view"]}>{this.props.title}</span>}
              </div>
            </div>

            <div className={styles["sidePanelContentArea"]}>{this.props.wpBodyText}<br /><br />{HubLinksSidePanel.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit)}</div>
          </Panel>
        </div>
      </div>
    );
  }
  public promoView(): JSX.Element {
    return (
      <div>
        <div className={styles["webpart-header-promo"]} style={this.bgStylePromo}>

        </div>
        <div style={this.bgStylePromoRight}>

          <div className={styles["promoPrefix"]}>
            {this.props.isEdit && <textarea onChange={this.setPromoPrefix.bind(this)} className={styles["edit"]} placeholder={strings.PromoPrefixPlaceholder} aria-label="Add a promo prefix">{this.props.promoPrefix}</textarea>}
            {!this.props.isEdit && this.props.promoPrefix && <span className={styles["view"]}>{this.props.promoPrefix}</span>}
          </div>
          <div className={styles["promoTitle"]}>
            {this.props.isEdit && <textarea onChange={this.setTitle.bind(this)} className={styles["edit"]} placeholder={strings.TitlePlaceholder} aria-label="Add a title">{this.props.title}</textarea>}
            {!this.props.isEdit && this.props.title && <span className={styles["view"]}>{this.props.title}</span>}
          </div>
          <div className={styles["webpart-desription-promo"]}>
            {this.props.wpBodyText}
          </div>
          {this.props.isEdit &&
            <CommandButton iconProps={{ iconName: 'Add' }} onClick={this.addBox.bind(this)}>{strings.AddNewButtonText}</CommandButton>
            // <button onClick={this.addBox.bind(this)} label={strings.AddNewButtonText}/>
          }
          <div className={styles["promoUnorderList"]}>
            {HubLinksFactory.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit)}
            {this.props.isEdit &&
              <LinkPickerPanel
                webPartContext={this.props.context}
                className={styles["link-picker"]}
                webAbsUrl={this.props.context.pageContext.web.absoluteUrl}
                linkType={LinkType.any}
                ref={(ref) => { this.linkPickerPanel = ref; }} />
            }
          </div>
          {this.props.layoutMode == 1 ?
            <div className={this.props.showPanel && styles["sidePanelBtnPromo"]}>
              {this.props.showPanel &&
                <DefaultButton
                  description='Show more'
                  onClick={this._setShowPanel(true)}
                  text='More'
                  className={styles['showPanelBtnPromo']}
                />}
              <Panel
                isOpen={this.state.showPanel}
                onDismiss={this._setShowPanel(false)}
                type={PanelType.medium}
                headerText=""
                headerClassName={styles["sidePanelHeader"]}
                className={styles["sidePanel"]}
                isLightDismiss={true}
              >
                <div className={styles["webpart-headerSidePanel"]} style={this.bgStyle}>
                  <div className={"webpartTitleText"}>{this.props.isEdit && <textarea onChange={this.setTitle.bind(this)} className={styles["edit"]} placeholder={strings.TitlePlaceholder} aria-label="Add a title">{this.props.title}</textarea>}
                    {!this.props.isEdit && this.props.title && <span className={styles["view"]}>{this.props.title}</span>}
                  </div>
                </div>

                <div className={styles["sidePanelContentArea"]}>{this.props.wpBodyText}<br /><br />{HubLinksSidePanel.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit)}</div>
              </Panel>
            </div>
            :
            <div className={this.props.showPanel && styles["sidePanelBtn"]}>
              {this.props.showPanel &&
                <DefaultButton
                  description='Show more'
                  onClick={this._setShowPanel(true)}
                  text='More'
                  className={styles['showPanelBtn']}
                />}
              <Panel
                isOpen={this.state.showPanel}
                onDismiss={this._setShowPanel(false)}
                type={PanelType.medium}
                headerText=""
                headerClassName={styles["sidePanelHeader"]}
                className={styles["sidePanel"]}
                isLightDismiss={true}
              >
                <div className={styles["webpart-headerSidePanel"]} style={this.bgStyle}>
                  <div className={"webpartTitleText"}>{this.props.isEdit && <textarea onChange={this.setTitle.bind(this)} className={styles["edit"]} placeholder={strings.TitlePlaceholder} aria-label="Add a title">{this.props.title}</textarea>}
                    {!this.props.isEdit && this.props.title && <span className={styles["view"]}>{this.props.title}</span>}
                  </div>
                </div>

                <div className={styles["sidePanelContentArea"]}>{this.props.wpBodyText}<br /><br />{HubLinksSidePanel.getLayout(this.props.layoutMode, false, this).render(this.props.hubLinksItems, this.props.isEdit)}</div>
              </Panel>
            </div>

          }
        </div>
      </div>
    );
  }
  componentWillMount() {
    setTimeout(() => {
      // let a = document.getElementsByClassName("CanvasSection-xl4");
      // console.log(a);
      let itemA = document.querySelectorAll('.CanvasSection-xl6 #myUnorderList li') as HTMLCollectionOf<HTMLElement>;
      let counterA;
      for (counterA = 0; counterA < itemA.length; counterA++) {
        itemA[counterA].style.width = "100%";
        // console.log("Should work now" + i);
      }
      let itemB = document.querySelectorAll('.CanvasSection-xl4 #myUnorderList li') as HTMLCollectionOf<HTMLElement>;
      let counterB;
      for (counterB = 0; counterB < itemB.length; counterB++) {
        itemB[counterB].style.width = "100%";
        // console.log("Should work now" + i);
      }

      // console.log(b);
    }, 500);
  }
  public renderAdvancedWebPart(): JSX.Element {
    return (
      <div>
        <div className={styles["webpart-header"]}>
          {this.props.isEdit && <textarea onChange={this.setTitle.bind(this)} className={styles["edit"]} placeholder={strings.TitlePlaceholder} aria-label="Add a title">{this.props.title}</textarea>}
          {!this.props.isEdit && this.props.title && <span className={styles["view"]}>{this.props.title}</span>}
        </div>
        {HubLinksFactory.getLayout(this.props.layoutMode, true, this).render(this.props.links, this.props.isEdit)}
      </div>
    );
  }
}