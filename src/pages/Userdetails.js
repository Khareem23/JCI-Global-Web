import React from 'react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import Userdetailsarea from '../components/Userdetailsarea'
import Footer from '../components/Footer'

export default function Userdetails() {
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader/>
            <div className="app-main">
            
                <AppSidebar/>

                <div className="app-main__outer">
                    <div className="app-main__inner">
                        

                        <Userdetailsarea/>


                        <Footer/>
                    
                    </div>
                </div>        
            </div>
            <div className="app-drawer-overlay d-none animated fadeIn" />
        </div>
    )
}
