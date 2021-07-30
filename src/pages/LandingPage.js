import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';


const LandingPage = (props) => {
    const { 
        authstate,
    } = props;
    const history = useHistory();

    useEffect(() => {
        if(authstate) {
            if(authstate.role === "Customer")
            {
                history.push("/sendmoney#step-1");
            } else if(authstate.role === "Admin")
            {
                history.push("/dashboard"); 
            }
        } else {
            history.push("/login");
        }
    }, [])

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authstate: state.authstate.authstate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutuser: (history) => {
            // dispatch(LogOutAuthAction(history));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
