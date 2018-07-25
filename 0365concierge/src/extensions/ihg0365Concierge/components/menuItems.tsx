import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

import {homeContent} from './homeContent'

export class menuItems extends React.Component<any, any> {
  public constructor(props: {}) {
    super(props);
  }
  public render(): JSX.Element {

    const homeContents: React.ReactElement<any> = React.createElement(
      homeContent
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
            <Label>Pivot #2</Label>
          </PivotItem>
          <PivotItem linkText="Training & resources">
            <Label>Pivot #3</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
}