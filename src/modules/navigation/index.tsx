import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePageContainer from '../pages/home';
import HeroPageContainer from '../pages/superhero';

import { APP_KEYS } from '../common/consts';


export const MainRouter = () => (
  <Router>
    <Switch>
      <Route component={HomePageContainer} exact path={APP_KEYS.ROUTER_KEYS.HOME} />
      <Route component={HeroPageContainer} path={APP_KEYS.ROUTER_KEYS.HERO} />
    </Switch>
  </Router>
);
