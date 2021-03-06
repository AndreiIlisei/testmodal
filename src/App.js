import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import axios from "axios";

// Pages
import Home from "./pages/index";
import HomePage from "./pages/homepage";
import Profile from "./pages/Profile"

// Components
import Signup from "./components/SignIn/Signup1";
// import Login from "./components/SignIn/Login";
import Login from "./components/SignIn/Login1";
import AuthRoute from "./util/AuthRoute";
// import Schimbare from "./components/SignIn/Switching";

//Redux
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import { SET_AUTHENTICATED } from "./redux/reducers/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 10000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} exact />
          <Route exact path="/homepage" component={HomePage} />
          <Route path="/profile" component={Profile} />
          <AuthRoute
            exact
            path="/login"
            component={Login}
          />
          <AuthRoute
            exact
            path="/signup"
            component={Signup}
          />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
