import * as React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import Controller from 'components/start-here';
import NotFound from 'components/not-found';

export default class Home extends React.Component {
  render() {
    return (
      <div className='Home'>
        <main className='Content'>
          <Switch>
            <Route exact={true} path='/' component={Controller} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}
