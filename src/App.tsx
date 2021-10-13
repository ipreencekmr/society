import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>
      <Router>
        <Switch>
          <Provider store={store}>
            <Route exact path="/login" component={LoginComponent}/>
            <Route exact path="/dashboard" component={DashboardComponent}/>
          </Provider>
        </Switch>
      </Router>
      <FooterComponent></FooterComponent>
    </React.Fragment>
  );
}

export default App;
