import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'securityComplianceStrings';
import SecurityCompliance from './components/SecurityCompliance';
import { ISecurityComplianceProps } from './components/ISecurityComplianceProps';
import { ISecurityComplianceWebPartProps } from './ISecurityComplianceWebPartProps';

export default class SecurityComplianceWebPart extends BaseClientSideWebPart<ISecurityComplianceWebPartProps> {

  public render(): void {
    
    const element: React.ReactElement<ISecurityComplianceProps > = React.createElement(
      SecurityCompliance,
      {
        spHttpClient: this.context.spHttpClient,
        //siteUrl: this.context.pageContext.web.absoluteUrl,
        siteUrl: this.properties.siteUrl,
        userName: this.context.pageContext.user.displayName,
        userEmail:this.context.pageContext.user.email,
        listName: this.properties.listName
      }
      
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "List connection settings"
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField('siteUrl', {
                  label: "Enter page URL"
                }),
                PropertyPaneTextField('listName',{
                  label: "Enter List Name"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
