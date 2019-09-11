import * as React from 'react';
import { Redirect } from 'react-router';

interface IProps {
  label: string;
  action: (() => void) | string;
  keyCode?: string;
}

interface IState {
  needsToRedirect: string | null;
}

export class Button extends React.Component<IProps, IState> {
  state: IState = {
    needsToRedirect: null,
  };

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
    } = this.props;

    // HandleKeyPress isn't added if a keyCode isn't present
    if (keyCode === ev.key) {
      this.fireAction();
    }
  };

  fireAction = () => {
    const {
      action,
    } = this.props;

    // It's a link
    if (typeof action === 'string') {
      return this.setState({
        needsToRedirect: action,
      });
    }

    // Else it's a function
    return action();
  }

  render() {
    const {
      label,
      keyCode,
    } = this.props;
    const {
      needsToRedirect,
    } = this.state;

    if (needsToRedirect) {
      return <Redirect push to={needsToRedirect} />;
    }

    return (
      <button className='Button' type='button' onClick={this.fireAction}>
        <span className='Button-keyCode'>{keyCode}</span>
        {label}
      </button>
    );
  }
}
