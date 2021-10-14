import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

function DashboardComponent(props:any) {
    return (
        <div className="container">
            <pre>{JSON.stringify(props.loginResponse)}</pre>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        loginResponse:state.loginResponse
    }
}

export default withRouter(connect(mapStateToProps)(DashboardComponent))