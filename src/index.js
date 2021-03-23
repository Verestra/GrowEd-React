import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/circle.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Login from './pages/Login';
import Reset_Password from './pages/Reset-Password/Reset-Password';
import Reset_Password_Otp from './pages/Reset-Password/Reset-Password-Otp';
import Reset_Password_New from './pages/Reset-Password/Reset-Password-New';
import Register from './pages/Register';
import Profile from './pages/User/Profile';
import All_Schedule from './pages/User/Dashboard/All-Schedule';
import For_You from './pages/User/Dashboard/For-You';
import Activity from './pages/User/Activity/Activity';
import My_class from './pages/User/Activity/My-Class';
import Class_Progress from './pages/User/Activity/Class-Progress';
import Class_Detail from './pages/User/Activity/Class-Detail';
import Chat_Pages from './pages/media-queries/Chat-Pages';
import Dashboard_Fasilitator from './pages/Fasilitator/Dashboard/Dashboard-Fasilitator';
import Activity_Fasilitator from './pages/Fasilitator/Activity/Activity';
import Class_Details from './pages/Fasilitator/Activity/Class-Details';
import Member from './pages/Fasilitator/Activity/Member';

const AppWithRouter = () => {
  return (
    <Router>
      {/* Deklarasi Komponen, Load CSS */}
      {/* domain/main/dashboard state.address = dashboard */}
      {/* domain/v1/activity state.address = activity */}
      {/* domain/ => menampilkan App.js*/}
      <Route path="/" exact component={Login} />
      <Route path="/Reset-Password" component={Reset_Password} />
      <Route path="/Reset-Password-Otp" component={Reset_Password_Otp} />  
      <Route path="/Reset-Password-New" component={Reset_Password_New} />
      <Route path="/Register" exact component={Register} />
      <Route path="/User/Profile" component={Profile} />
      <Route path="/User/All-Schedule" exact component={All_Schedule} />
      <Route path="/User/For-You" component={For_You} />
      <Route path="/User/Activity" component={Activity} />
      <Route path="/User/My-Class" component={My_class} />
      <Route path="/User/Class-Progress" component={Class_Progress} />
      <Route path="/User/Class-Detail" component={Class_Detail} />
      <Route path="/Fasilitator/Dashboard" exact component={Dashboard_Fasilitator} />
      <Route path="/Fasilitator/Activity" exact component={Activity_Fasilitator} />
      <Route path="/Fasilitator/Class-Details" exact component={Class_Details} />
      <Route path="/Fasilitator/Member" exact component={Member} />
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