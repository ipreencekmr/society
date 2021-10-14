import React from 'react'
import './HomeComponent.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import DashboardComponent from '../DashboardComponent/DashboardComponent';

function HomeComponent() {
    return (
        <>
        <HeaderComponent></HeaderComponent>
        <Router>
            <Switch>
                <Route path="/" component={DashboardComponent}/>
                <Route path="/dashboard" component={DashboardComponent}/>
            </Switch>
        </Router>
        <FooterComponent></FooterComponent>
        </>
    )
}

export default withRouter(HomeComponent)
