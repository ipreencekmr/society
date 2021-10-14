import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Provider store={store}>
            <Route exact path="/">
              <Redirect to="/login"></Redirect>
            </Route>
            <Route exact path="/login" component={LoginComponent}/>
            <Route path="/home" component={HomeComponent}/>
          </Provider>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
