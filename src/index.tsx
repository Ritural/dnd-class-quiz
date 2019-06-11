import * as React from 'react';
import * as ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Footer } from 'components/footer';
import { Header } from 'components/header';
import { Home } from 'routes/home';
import { NotFound } from 'routes/not-found';
import { ReduxExample } from 'routes/redux-example';
import { store } from 'store/main-reducer';
import 'styles/app.scss';

const RouteContainer = posed.div({
  enter: {
    opacity: 1,
    transition: {
      default: { ease: 'linear', duration: 350 },
    },
  },
  exit: {
    opacity: 0,
    transition: {
      default: { ease: 'linear', duration: 350 },
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route
            render={({ location }) => (
              <PoseGroup>
                <RouteContainer key={location.pathname}>
                  <Header />

                  <main className='Content'>
                    <Switch>
                      <Route exact={true} path='/' component={Home} />
                      <Route
                        exact={true}
                        path='/redux-example'
                        component={ReduxExample}
                      />
                      <Route component={NotFound} />
                    </Switch>
                  </main>

                  <Footer />
                </RouteContainer>
              </PoseGroup>
            )}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
