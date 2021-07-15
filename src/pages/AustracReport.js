import React, {useState} from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Austracreportarea from '../components/Austracreportarea'
import Footer from '../components/Footer'

export default function AustracReport() {

    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    })

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const [austracLoading, setAustracLoading] = useState(false);

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader notify={notify} setNotify={setNotify}/>
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">                        

                        <Austracreportarea show={show} notify={notify} setNotify={setNotify} handleShow={handleShow} setShow={setShow} austracLoading={austracLoading} setAustracLoading={setAustracLoading}/>

                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
        </div>
        
    )
}
