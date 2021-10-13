import React from 'react'
import {connect} from 'react-redux';

function DashboardComponent() {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state:any) => {
    loginResponse:state.loginResponse
}

export default connect(mapStateToProps)(DashboardComponent)
