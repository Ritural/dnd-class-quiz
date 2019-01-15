import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'styles/app.scss';

import Home from 'routes/home';
import reducers from 'state/main-reducer';

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
          <Route path='/' component={Home} />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
