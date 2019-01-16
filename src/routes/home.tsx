import * as React from 'react';
import { Switch } from 'react-router';
import { Route, Link } from 'react-router-dom';

import StartHere from 'components/start-here';
import NotFound from 'components/not-found';
import ReduxExample from 'components/redux-example';

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        
        <header>
          <Link to='/'>Home</Link>
          <Link to='/redux-example'>Redux Example</Link>
        </header>

        <main className='Content'>
          <Switch>
            <Route exact={true} path='/' component={StartHere} />
            <Route exact={true} path='/redux-example' component={ReduxExample} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}
