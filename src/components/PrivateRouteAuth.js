import { Route, Redirect } from "react-router-dom";
function PrivateRouteAuth({ Component, token, ...rest }) {
    
    return (  
      <Route
        {...rest}
        render={(props) =>
            token.token !== null ? <Redirect to="/User/Dashboard" /> : <Component {...props} />
        }
      />
    );
  }
export default PrivateRouteAuth