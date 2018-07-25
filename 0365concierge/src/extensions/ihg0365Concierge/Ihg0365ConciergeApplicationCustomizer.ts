import * as React from "react";
import * as ReactDOM from "react-dom";
import { override } from '@microsoft/decorators';
import {topPlaceHolderButton} from './components/topButton';

import {
  BaseApplicationCustomizer, PlaceholderName, PlaceholderContent
} from '@microsoft/sp-application-base';


import * as strings from 'Ihg0365ConciergeApplicationCustomizerStrings';

const LOG_SOURCE: string = 'Ihg0365ConciergeApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IIhg0365ConciergeApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class Ihg0365ConciergeApplicationCustomizer
  extends BaseApplicationCustomizer<IIhg0365ConciergeApplicationCustomizerProperties> {

  private _topPlaceholder: PlaceholderContent | undefined;

  @override
  public onInit(): Promise<void> {
    // Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // let message: string = this.properties.testMessage;
    // if (!message) {
    //   message = '(No properties were provided.)';
    // }

    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`);
    let placeholder: PlaceholderContent;
    placeholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top);

    const element: React.ReactElement<any> = React.createElement(
      topPlaceHolderButton
    );

    // render the react element in the top placeholder.
    ReactDOM.render(element, placeholder.domElement);

      return Promise.resolve();
  }


}
