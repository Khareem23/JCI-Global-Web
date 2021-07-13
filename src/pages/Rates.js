import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Footer from '../components/Footer'
import AddRatesModal from '../components/modals/AddRatesModal'
import Ratesarea from '../components/Ratesarea'

export default function Rates() {
    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    })

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const [ratesLoading, setRatesLoading] = useState(false);

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader notify={notify} setNotify={setNotify} />
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">                        

                        <Ratesarea show={show} notify={notify} setNotify={setNotify} handleShow={handleShow} setShow={setShow} ratesLoading={ratesLoading} setRatesLoading={setRatesLoading}/>

                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
            <AddRatesModal notify={notify} setNotify={setNotify} show={show}  handleShow={handleShow} setShow={setShow} ratesLoading={ratesLoading} setRatesLoading={setRatesLoading} />
        </div>
        
    )
}
