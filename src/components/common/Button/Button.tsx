import * as React from 'react';

interface IProps {
  label: string;
  action: any;
  keyCode?: string;
}

export class Button extends React.Component<IProps> {
  componentDidMount() {
    const {
      keyCode,
    } = this.props;

    if (keyCode) {
      document.addEventListener('keypress', this.handleKeyPress);
    }
  }

  componentWillUnmount() {
    const {
      keyCode,
    } = this.props;

    if (keyCode) {
      console.log('removed');
      document.removeEventListener('keypress', this.handleKeyPress);
    }
  }

  handleKeyPress = (ev: any): void => {
    const {
      keyCode,
      action,
    } = this.props;

    // HandleKeyPress isn't added if a keyCode isn't present
    if (keyCode === ev.key) {
      action();
    }
  };

  render() {
    const {
      label,
      action,
      keyCode,
    } = this.props;

    return (
      <button className='Button' type='button' onClick={() => action()}>
        <span className='Button-keyCode'>{keyCode}</span>
        {label}
      </button>
    );
  }
}
