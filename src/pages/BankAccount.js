import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';
import Footer from '../components/Footer';
import AddAccountsModal from '../components/modals/AddAccountsModal';
import Bankaccountsarea from '../components/Bankaccountsarea';

export default function BankAccount() {
    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    })

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader notify={notify} setNotify={setNotify} />
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">                        

                        <Bankaccountsarea notify={notify} setNotify={setNotify} handleShow={handleShow}/>

                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
            <AddAccountsModal notify={notify} setNotify={setNotify} show={show}  handleShow={handleShow} setShow={setShow} />
        </div>
        
    )
}
