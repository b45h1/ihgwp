import * as React from "react";
import * as ReactDOM from "react-dom";
import { override } from '@microsoft/decorators';
import {topPlaceHolderButton} from './components/topButton';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderName, PlaceholderContent
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'IhgOfficeConciergeApplicationCustomizerStrings';

const LOG_SOURCE: string = 'IhgOfficeConciergeApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IIhgOfficeConciergeApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class IhgOfficeConciergeApplicationCustomizer
  extends BaseApplicationCustomizer<IIhgOfficeConciergeApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    let placeholder: PlaceholderContent;
    placeholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);
    console.log("Top Placeholder Initalising DONE!!!");

    const element: React.ReactElement<any> = React.createElement(
      topPlaceHolderButton
    );

    ReactDOM.render(element, placeholder.domElement);

    return Promise.resolve();
  }
}
