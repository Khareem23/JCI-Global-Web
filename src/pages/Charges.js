import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Chargesarea from '../components/Chargesarea'
import Footer from '../components/Footer'
import AddChargesModal from '../components/modals/AddChargesModal'

export default function Charges() {

    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    });

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader notify={notify} setNotify={setNotify}/>
            <div className="app-main">
            
                <AppSidebar/>
                
                <div className="app-main__outer">
                    <div className="app-main__inner">                        

                        <Chargesarea show={show} notify={notify} setNotify={setNotify} handleShow={handleShow} setShow={setShow} />

                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
            <AddChargesModal notify={notify} setNotify={setNotify} show={show}  handleShow={handleShow} setShow={setShow} />
        </div>
        
    )
}
