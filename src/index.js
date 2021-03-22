import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/circle.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Login from './pages/Login';
import Reset_Password from './pages/Reset-Password/Reset-Password';
import Profile from './pages/User/Profile';
import All_Schedule from './pages/User/Dashboard/All-Schedule';
import For_You from './pages/User/Dashboard/For-You';
import Activity from './pages/User/Activity/Activity';
import My_class from './pages/User/Activity/My-Class';
import Class_Progress from './pages/User/Activity/Class-Progress';
import Class_Detail from './pages/User/Activity/Class-Detail';
import Chat_Pages from './pages/media-queries/Chat-Pages';

const AppWithRouter = () => {
  return (
    <Router>
      {/* Deklarasi Komponen, Load CSS */}
      {/* domain/main/dashboard state.address = dashboard */}
      {/* domain/v1/activity state.address = activity */}
      {/* domain/ => menampilkan App.js*/}
      <Route path="/" exact component={Login} />
      <Route path="/Reset-Password" component={Reset_Password} />
      <Route path="/User/Profile" component={Profile} />
      <Route path="/User/All-Schedule" exact component={All_Schedule} />
      <Route path="/User/For-You" component={For_You} />
      <Route path="/User/Activity" component={Activity} />
      <Route path="/User/My-Class" component={My_class} />
      <Route path="/User/Class-Progress" component={Class_Progress} />
      <Route path="/User/Class-Detail" component={Class_Detail} />
      <Route path="/Chat-Pages" component={Chat_Pages} />
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