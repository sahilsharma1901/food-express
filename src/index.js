import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Shops from './components/Shops/Shops';
import AboutUs from "./components/HomePage/Footer/AboutUs/AboutUs";
import ContactUs from "./components/HomePage/Footer/ContactUs/ContactUs";
import PrivacyPolicy from "./components/HomePage/Footer/PrivacyPolicy/PrivacyPolicy";
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
  <Router>
    <Switch>
      <Route path="/about" component={AboutUs} />
      <Route path="/login" component={Login} />
      <Route path="/shops" component={Shops} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/policy" component={PrivacyPolicy} />
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
