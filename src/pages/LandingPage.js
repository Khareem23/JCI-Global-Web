import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 5);
}




const LandingPage = (props) => {
    const { 
        authstate,
    } = props;
    const history = useHistory();

    // useEffect(() => {
    //     refreshPage();
    // }, []);

    useEffect(() => {
        refreshPage();
        if(authstate) {
            console.log(authstate.token);
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
