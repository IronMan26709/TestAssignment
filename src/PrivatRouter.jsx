import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";




const PrivateRoute = ({ component: Component, login, ...props }) => {
  return (
    <>
      <Route
        {...props}
        render={innerProps =>
          login ? <Component {...innerProps} /> : <Redirect to="/login" />
        }
      />
    </>
  );
};

const mapStateToProps = state => ({
  login: state.userReducer.login
});

export default connect(mapStateToProps)(PrivateRoute);