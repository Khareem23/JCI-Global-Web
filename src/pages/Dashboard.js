import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Dashboardarea from '../components/Dashboardarea'
import Footer from '../components/Footer'
import { connect } from 'react-redux';


function Dashboard(props) {

    const { authstate } = props;

    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    })

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const [dashboardLoading, setDashboardLoading] = useState(false);

    // useEffect(() => {
    //     setNotify({
    //         isOpen: true,
    //         message: authstate.message,
    //         type: 'success',
    //     });
    // }, []);
    
    

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader notify={notify} setNotify={setNotify}/>
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">

                        <Dashboardarea show={show} notify={notify} setNotify={setNotify} handleShow={handleShow} setShow={setShow} dashboardLoading={dashboardLoading} setDashboardLoading={setDashboardLoading}/>

                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authstate: state.authstate.authstate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
