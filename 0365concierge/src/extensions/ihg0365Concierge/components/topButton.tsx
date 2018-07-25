import * as React from 'react';
// import { css, classNamesFunction } from '../../../Utilities';
// import { getStyles, IButtonBasicExampleStyleProps, IButtonBasicExampleStyles } from './Button.Basic.Example.styles';
import { ActionButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import {menuItems} from './menuItems'
import { Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';

import styles from '../ihg0365Concierge.module.scss';


export class topPlaceHolderButton extends React.Component<IButtonProps, {showPanel:boolean}> {
  public constructor(props: {}) {
    super(props);

    this.state = { showPanel: false };
  }

  public render(): JSX.Element {
    const { disabled, checked } = this.props;

    // const getClassNames = classNamesFunction<IButtonBasicExampleStyleProps, IButtonBasicExampleStyles>();
    // const classNames = getClassNames(getStyles);
    const menuBar: React.ReactElement<any> = React.createElement(
        menuItems
      );
    return (
      <div className={styles.topPlaceholder}>
        <ActionButton
          data-automation-id="test"
          iconProps={{ iconName: 'OfficeAssistantLogo' }}
        //   allowDisabledFocus={true}
          disabled={disabled}
          checked={checked}
          onClick={this._showPanel}
        >
          O365 concierge
        </ActionButton>

        <Panel
          isOpen={this.state.showPanel}
          isLightDismiss={true}
          headerText="IHG Office 365 Concierge"
          onDismiss={this._hidePanel}
          type={PanelType.medium}
          className={styles.panelClass}
        >
            {menuBar}
        </Panel> 
      </div>
    );
  }

  private _showPanel = (): void => {
    this.setState({ showPanel: true });
    
  };

  private _hidePanel = (): void => {
    this.setState({ showPanel: false });
  };
}