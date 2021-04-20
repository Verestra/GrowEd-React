import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ Component, token, ...rest }) {
   
    return (  
      <Route
        {...rest}
        render={(props) =>
            token.token !== null ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
export default PrivateRoute