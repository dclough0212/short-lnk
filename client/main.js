import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { routes, onAuthChange } from './../imports/routes/routes';
import {Links} from './../imports/api/links';

import './main.html';

Tracker.autorun(() => {
  onAuthChange(!!Meteor.userId());
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
