import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Footer from '../components/Footer'
import Usersarea from '../components/Usersarea'

export default function Users() {

    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    })

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const [usersLoading, setUsersLoading] = useState(false);

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader notify={notify} setNotify={setNotify}/>
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">

                        <Usersarea show={show} notify={notify} setNotify={setNotify} handleShow={handleShow} setShow={setShow} usersLoading={usersLoading} setUsersLoading={setUsersLoading}/>


                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
        </div>
    )
}
