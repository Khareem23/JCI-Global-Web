import React, { useState } from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Footer from '../components/Footer'
import AddPromoModal from '../components/modals/AddPromoModal'
import Promoarea from '../components/Promoarea'


export default function Promo() {
    
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
            <AppHeader notify={notify} setNotify={setNotify}/>
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">                        

                        <Promoarea notify={notify} setNotify={setNotify} handleShow={handleShow}/>

                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
            <AddPromoModal notify={notify} setNotify={setNotify} show={show}  handleShow={handleShow} setShow={setShow} />
        </div>
        
    )
}
