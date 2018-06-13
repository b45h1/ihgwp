import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLink,
  PropertyPaneButton,
  PropertyPaneButtonType,
  PropertyPaneCheckbox
} from '@microsoft/sp-webpart-base';
import { PropertyFieldPicturePicker } from "sp-client-custom-fields/lib/PropertyFieldPicturePicker";


import * as strings from 'IhgPromoWebPartStrings';
import IhgPromo from './components/IhgPromo';
import { IIhgPromoProps } from './components/IIhgPromoProps';
import { IIhgPromoWebPartProps } from './IhgPromoWebPartProps'


export default class IhgPromoWebPart extends BaseClientSideWebPart<IIhgPromoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IIhgPromoProps > = React.createElement(
      IhgPromo,
      {
        description: this.properties.description,
        resourceLink: this.properties.resourceLink,
        promoImage: this.properties.promoImage,
        newWindow: this.properties.newWindow
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _webpart : any;
  public get webpart() : any {
    return this._webpart;
  }
  public set webpart(v : any) {
    this._webpart = v;
  } 

  public openLinkSelector(event){
    this.webpart.openLinkPicker(event);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                
                PropertyFieldPicturePicker("promoImage", {
                  label: 'Select an image',
                  initialValue: this.properties.promoImage,
                  readOnly: true,
                  previewImage: true,
                  allowedFileExtensions: '.gif,.jpg,.jpeg,.bmp,.dib,.tif,.tiff,.ico,.png',
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  context: this.context,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'picturePickerFieldId'
                }),
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel,
                  placeholder: "e.g. https://ihg.sharepoint.com/sites/"
                }),
                PropertyPaneCheckbox('newWindow', {
                  text: strings.newWindow
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
