import * as React from 'react';
import * as ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Home } from 'routes/Home/Home';
import { NotFound } from 'routes/NotFound/NotFound';
import { Preview } from 'routes/Preview/Preview';
import { store } from 'store/main-reducer';
import { Quiz } from 'routes/Quiz/Quiz';

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
  componentDidMount() {
    // Remove .InitialLoader from root element
    const rootEl = document.body.querySelector('.InitialLoader');
    if (rootEl) {
      rootEl.classList.remove('InitialLoader');
    }
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route
            render={({ location }) => (
              <PoseGroup>
                <RouteContainer className='Main' key={location.pathname}>
                  <Header />

                  <main className='Content'>
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/quiz' component={Quiz} />

                      <Route exact path='/preview' component={Preview} />

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
