import React from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Footer from '../components/Footer'
import Sendmoneyarea2 from '../components/Sendmoneyarea2'

export default function SendMoney2() {
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader/>
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">                        

                        <Sendmoneyarea2/>

                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
        </div>
        
    )
}



