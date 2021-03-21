import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Login from './Login';
import Reset_Password from './pages/Reset-Password';
import Profile from './pages/Profile';
import All_Schedule from './pages/All-Schedule';
import For_You from './pages/For-You'
import Activity from './pages/Activity'

const AppWithRouter = () => {
  return (
    <Router>
      {/* Deklarasi Komponen, Load CSS */}
      {/* domain/main/dashboard state.address = dashboard */}
      {/* domain/v1/activity state.address = activity */}
      {/* domain/ => menampilkan App.js*/}
      <Route path="/" exact component={Login} />
      <Route path="/Reset-Password" component={Reset_Password} />
      <Route path="/Profile" component={Profile} />
      <Route path="/All-Schedule" component={All_Schedule} />
      <Route path="/For-You" component={For_You} />
      <Route path="/Activity" component={Activity} />
      {/* domain/demo => menampilkan DemoHtml.js */}
      {/* <Route path="/all-schedule" component={All-Schedule} /> */}
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>,
  document.getElementById('root')
);