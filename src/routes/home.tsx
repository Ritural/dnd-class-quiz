import * as React from 'react';
import { Switch } from 'react-router';
import { Route, Link } from 'react-router-dom';

import StartHere from 'components/start-here';
import NotFound from 'components/not-found';
import ReduxExample from 'components/redux-example';

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home u-m-lg'>
        
        <header>
          <Link className='' to='/'>Home</Link>
          <Link className='u-pL-lg' to='/redux-example'>Redux Example</Link>
        </header>

        <main className='Content u-m-lg'>
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
