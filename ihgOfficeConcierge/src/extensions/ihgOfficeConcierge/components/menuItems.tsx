import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

import {homeContent} from './homeContent';
import {trainingContent} from './trainingContent';
import {submitTicket} from './submitTicket';

export class menuItems extends React.Component<any, any> {
  public constructor(props: {}) {
    super(props);
  }
  public render(): JSX.Element {

    const homeContents: React.ReactElement<any> = React.createElement(
      homeContent
    );
    const trainingContents: React.ReactElement<any> = React.createElement(
      trainingContent
    );

    const submitTickets: React.ReactElement<any> = React.createElement(
      submitTicket
    );
    // const homeContent: React.ReactElement<any> = React.createElement(
    //   homeContent
    // );
    return (
      <div>
        <Pivot linkSize={PivotLinkSize.large}>
          <PivotItem linkText="Home">
            {homeContents}     
          </PivotItem>
          <PivotItem linkText="Submit a Ticket">
            {submitTickets}
          </PivotItem>
          <PivotItem linkText="Training & resources">
            {trainingContents}
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}