import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import './assets/css/circle.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import PrivateRoute from './components/PrivateRoute'
import PrivateRouteAuth from './components/PrivateRouteAuth'

class AppWithRouter extends Component {
  
  state = {
    token : localStorage.getItem("token"),
  };

  
  
  render() {
    const token = this.state
    console.log(token)
    console.log(token.token === null)
  return (
    <Router>
      <Switch>
        <PrivateRoute
          path="/User/Dashboard"
          token={token}
          Component={AllSchedule}
        />
        <PrivateRoute
          path="/User/Profile"
          token={token}
          Component={Profile}
        />
        <PrivateRoute
          path="/User/For-You"
          token={token}
          Component={ForYou}
        />
        <PrivateRoute
          path="/User/Activity"
          token={token}
          Component={Activity}
        />
        <PrivateRoute
          path="/User/My-Class"
          token={token}
          Component={MyClass}
        />
        <PrivateRoute
          path="/User/Class-Progress"
          token={token}
          Component={ClassProgress}
        />
        <PrivateRoute
          path="/User/Class-Detail"
          token={token}
          Component={ClassDetail}
        />
        <PrivateRoute
          path="/User/Dashboard"
          token={token}
          Component={AllSchedule}
        />
         <PrivateRoute
          path="/Fasilitator/Dashboard"
          token={token}
          Component={DashboardFasilitator}
        />
        <PrivateRoute
          path="/Fasilitator/Activity"
          token={token}
          Component={ActivityFasilitator}
        />
        <PrivateRoute
          path="/Fasilitator/Class-Details"
          token={token}
          Component={ClassDetails}
        />
        <PrivateRoute
          path="/Fasilitator/Member"
          token={token}
          Component={Member}
        />
        <PrivateRouteAuth
          path="/"
          token={token}
          Component={Login}
        />
         <PrivateRouteAuth
          path="/Reset-Password"
          token={token}
          Component={ResetPassword}
        />
         <PrivateRouteAuth
          path="/Reset-Password-Otp"
          token={token}
          Component={ResetPasswordOtp}
        />
         <PrivateRouteAuth
          path="/Reset-Password-New"
          token={token}
          Component={ResetPasswordNew}
        />
         <PrivateRouteAuth
          path="/Register"
          token={token}
          Component={Register}
        />
      </Switch>
      {/* Deklarasi Komponen, Load CSS */}
      {/* domain/main/dashboard state.address = dashboard */}
      {/* domain/v1/activity state.address = activity */}
      {/* domain/ => menampilkan App.js*/}
      {/* <Route path="/" exact component={Login} />
      <Route path="/Reset-Password" component={ResetPassword} />
      <Route path="/Reset-Password-Otp" component={ResetPasswordOtp} />   */}
      {/* <Route path="/Reset-Password-New" component={ResetPasswordNew} /> */}
      {/* <Route path="/Register" exact component={Register} /> */}
      <Route path="/Chat-Pages" component={ChatPages} />
      {/* domain/demo => menampilkan DemoHtml.js */}
      {/* <Route path="/all-schedule" component={All-Schedule} /> */}
    </Router>
  );
}
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <AppWithRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);