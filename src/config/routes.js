import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Router from 'react-router';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={Home} />
  </Route>
);