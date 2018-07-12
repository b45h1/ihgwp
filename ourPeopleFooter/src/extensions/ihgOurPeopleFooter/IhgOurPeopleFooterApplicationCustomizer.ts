import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName

} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import styles from './IhgOutPeopleFooterApplicationCustomizer.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'IhgOurPeopleFooterApplicationCustomizerStrings';

const askmyImage: any = require('./img/askmyhr_white.png');
const contactsImage: any = require('./img/contacts_white.png');
const helpImage: any = require('./img/help.png');
const myhrImage: any = require('./img/myhr_white.png');

const LOG_SOURCE: string = 'IhgOurPeopleFooterApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IIhgOurPeopleFooterApplicationCustomizerProperties {
  // This is an example; replace with your own property
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class IhgOurPeopleFooterApplicationCustomizer
  extends BaseApplicationCustomizer<IIhgOurPeopleFooterApplicationCustomizerProperties> {

  private _bottomPlaceholder: PlaceholderContent | undefined;
  @override
  public onInit(): Promise<void> {
    // Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // let message: string = this.properties.myHrStr;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
        //Adding GTM Script
        let gtmStr: string = '';
        gtmStr += `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KPX8NQH');`;
    
        let head: any = document.getElementsByTagName("head")[0] || document.documentElement,
          script = document.createElement("script");
        script.type = "text/javascript";
        try {   
          script.appendChild(document.createTextNode(gtmStr));
        }
        catch (e) {
          
          script.text = gtmStr;
        }
        head.insertBefore(script, head.firstChild);
        head.removeChild(script);
    
        console.log("Extension execution-DONE");
        // /Adding GTM Script

    // Call render method for generating the HTML elements.
    this._renderPlaceHolders();

    return Promise.resolve();
  }

  private _renderPlaceHolders(): void {
      

    // Handling the bottom placeholder
    if (!this._bottomPlaceholder) {
      this._bottomPlaceholder =
        this.context.placeholderProvider.tryCreateContent(
          PlaceholderName.Bottom,
          { onDispose: this._onDispose });

      // The extension should not assume that the expected placeholder is available.
      if (!this._bottomPlaceholder) {
        console.error('The expected placeholder (Bottom) was not found.');
        return;
      }

      if (this.properties) {
        

        if (this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML = `
        <div class="${styles.app}">
          <div class="${styles.bottom} ms-CommandBar">
            <div class="${styles.footerContainer}">
              <a href="https://wd3.myworkday.com/ihg/login.flex" target="_blank">
                <div class="${styles.footerDivBox}">
                  <div class="${styles.imgContainer}">
                    <img src="${myhrImage}"/>
                  </div>
                  <div class="${styles.textContainer}">${strings.myHrStr}</div>
                </div>
              </a>

              <a href="https://ihg.service-now.com/liftportal/report_issue.do?sysparm_tower=HR" target="_blank">
                <div class="${styles.footerDivBox}">
                  <div class="${styles.imgContainer}">
                    <img src="${askmyImage}"/>
                  </div>
                  <div class="${styles.textContainer}">${strings.askMyHrStr}</div>
                </div>
              </a>
              <!--<a href="https://ihg.sharepoint.com/sites/ourpeople/SitePages/Help-&-support.aspx">
                <div class="${styles.footerDivBox}">
                  <div class="${styles.imgContainer}">
                    <img src="${helpImage}"/>
                  </div>
                  <div class="${styles.textContainer}">${strings.helpNSupportStr}</div>
                </div>
              </a>-->

              <a href="https://ihg.sharepoint.com/sites/ourpeople/SitePages/Contacts.aspx">
                <div class="${styles.footerDivBox}">
                  <div class="${styles.imgContainer}">
                    <img src="${contactsImage}"/>
                  </div>
                  <div class="${styles.textContainer}">${strings.contactStr}</div>
                </div>
              </a>
              <div style="clear:both;"></div>
            </div>
          </div>
        </div>`;
        }
      }
    }
  }

  private _onDispose(): void {
    console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom placeholders.');
  }

}
