import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './Login';

const AppWithRouter = () => {
  return (
    <Router>
      {/* Deklarasi Komponen, Load CSS */}
      {/* domain/main/dashboard state.address = dashboard */}
      {/* domain/v1/activity state.address = activity */}
      {/* domain/ => menampilkan App.js*/}
      <Route path="/" exact component={Login} />
      <Route path="/reset-password" component={Reset-Password} />
      {/* domain/demo => menampilkan DemoHtml.js */}
      <Route path="/all-schedule" component={All-Schedule} />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>,
  document.getElementById('root')
);