import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Route, Switch, Router} from 'react-router'
import {createBrowserHistory} from 'history';

import Signup from './../ui/Signup';
import NotFound from './../ui/NotFound';
import Login from './../ui/Login';
import Link from './../ui/Link';

const history = createBrowserHistory();
const unauthenticatedPages = ['/','/Signup','/Login'];
const authenticatedPages = ['/Links'];

const onEnterPublicPage = () => {
    console.log('onEnterPublicPage');
    if (Meteor.userId()){
        history.replace("/links");
    }
};

const onEnterPrivatePage = () => {
    console.log('onEnterPrivatePage');
    if (!Meteor.userId()){
        console.log(Meteor.userId(), true);
        history.replace("/");
    }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/links" component={Link} onEnter={onEnterPrivatePage}/>
      <Route path="/" component={Login} onEnter={onEnterPublicPage}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </Router>
);



export const onAuthChange = (isAuthenticated) => {
    const currentPage = history.location;
    console.log('current page', currentPage.pathname);
    console.log(authenticatedPages);
    const isAuthenticatedPage = authenticatedPages.includes(currentPage.pathname);
    console.log('isAuthenticatedPage', isAuthenticatedPage);
    const isUnAuthenticatedPage = unauthenticatedPages.includes(currentPage.pathname);
    console.log('isUnAuthenticatedPage', isUnAuthenticatedPage);
    if (isUnAuthenticatedPage && isAuthenticated){
        history.replace('/links');
    } else if (!isAuthenticated && isAuthenticatedPage) {
        history.replace('/');
    }
}