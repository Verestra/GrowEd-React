import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/circle.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";


import Login from './pages/Login';
import ResetPassword from './pages/Reset-Password/Reset-Password';
import ResetPasswordOtp from './pages/Reset-Password/Reset-Password-Otp';
import ResetPasswordNew from './pages/Reset-Password/Reset-Password-New';
import Register from './pages/Register';
import Profile from './pages/User/Profile';
import AllSchedule from './pages/User/Dashboard/Dashboard';
import ForYou from './pages/User/Dashboard/For-You';
import Activity from './pages/User/Activity/Activity';
import MyClass from './pages/User/Activity/My-Class';
import ClassProgress from './pages/User/Activity/Class-Progress';
import ClassDetail from './pages/User/Activity/Class-Detail';
import ChatPages from './pages/media-queries/Chat-Pages';
import DashboardFasilitator from './pages/Fasilitator/Dashboard/Dashboard';
import ActivityFasilitator from './pages/Fasilitator/Activity/Activity';
import ClassDetails from './pages/Fasilitator/Activity/Class-Details';
import Member from './pages/Fasilitator/Activity/Member';
import reduxStore from "./Redux/Store";

const AppWithRouter = () => {
  return (
    <Router>
      {/* Deklarasi Komponen, Load CSS */}
      {/* domain/main/dashboard state.address = dashboard */}
      {/* domain/v1/activity state.address = activity */}
      {/* domain/ => menampilkan App.js*/}
      <Route path="/" exact component={Login} />
      <Route path="/Reset-Password" component={ResetPassword} />
      <Route path="/Reset-Password-Otp" component={ResetPasswordOtp} />  
      <Route path="/Reset-Password-New" component={ResetPasswordNew} />
      <Route path="/Register" exact component={Register} />
      <Route path="/User/Profile" component={Profile} />
      <Route path="/User/Dashboard" exact component={AllSchedule} />
      <Route path="/User/For-You" component={ForYou} />
      <Route path="/User/Activity" component={Activity} />
      <Route path="/User/My-Class" component={MyClass} />
      <Route path="/User/Class-Progress" component={ClassProgress} />
      <Route path="/User/Class-Detail/" component={ClassDetail} />
      <Route path="/Fasilitator/Dashboard" exact component={DashboardFasilitator} />
      <Route path="/Fasilitator/Activity" exact component={ActivityFasilitator} />
      <Route path="/Fasilitator/Class-Details" exact component={ClassDetails} />
      <Route path="/Fasilitator/Member" exact component={Member} />
      <Route path="/Chat-Pages" component={ChatPages} />
      {/* domain/demo => menampilkan DemoHtml.js */}
      {/* <Route path="/all-schedule" component={All-Schedule} /> */}
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <AppWithRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);