import React from 'react'
import {connect} from 'react-redux';

function LoginComponent() {
    return (
        <div>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch:any) => {
    return () => {
        dispatch:(actionObj:any) => dispatch(actionObj)
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)
