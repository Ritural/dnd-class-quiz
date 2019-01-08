import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import 'styles/app.scss';

import Home from 'routes/home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={Home} />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
