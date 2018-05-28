import * as React from 'react';

interface IToggleButton {
  icon?: string;
  label?: string;
  value: string;
}

interface IToggleSwitcherProps {
  buttonViewClass: string;
  buttons: IToggleButton[];
  currentValue: boolean | number | string;
  cssClass?: string;
  name: string;
  title: string;
  type: 'radio' | 'checkbox';
  onToggleChange(): void;
}

export class ToggleSwitcher extends React.Component<IToggleSwitcherProps, {}> {
  constructor(props: IToggleSwitcherProps) {
    super(props);
  }

  public render() {
    return <div className={`c-toggle-switcher ${this.props.cssClass || ''}`}>
      <span className='c-toggle-switcher-title'>
        {this.props.title}
      </span>

      <div className='c-toggle-switcher-buttons btn-group btn-group-toggle' data-toggle='buttons'>
        {this.props.buttons.map((button, index) => this.getButton(button, index))}
      </div>
    </div>;
  }

  public getActiveButtonClass(type: string): string {
    return this.props.currentValue === type ? 'active' : '';
  }

  private getButton(button: IToggleButton, index: number) {
    return <label
    // tslint:disable-next-line:max-line-length
        className={`c-toggle-switcher-button btn ${this.props.buttonViewClass} ${button.value} ${this.getActiveButtonClass(button.value)}`}
        key={`c-toggle-switcher-button-${index}`}
    >
      <input
          type={this.props.type}
          name={this.props.name}
          value={button.value}
          onChange={this.props.onToggleChange}
          checked={this.props.currentValue === button.value}
      />
        {button.icon ? <i className={button.icon} /> : null}
        {button.label ? button.label : null}
    </label>;
  }
}
