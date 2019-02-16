// Run this example by adding <%= javascript_pack_tag 'landing' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingApp from '../components/landing/LandingApp';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={LandingApp} />
    </Router>,
    document.getElementById('app-mounting-point')
  );
});
