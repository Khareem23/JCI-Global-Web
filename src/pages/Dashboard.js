import React from 'react'
import AppDrawerWraper from '../components/AppDrawerWraper'
import AppHeader from '../components/AppHeader'
import Appmainarea from '../components/Appmainarea'
import UIThemeSettings from '../components/UIThemeSettings'

export default function Dashboard() {
    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
            <AppHeader/>
            <UIThemeSettings/>
            <Appmainarea/>
            <div className="app-drawer-overlay d-none animated fadeIn" />

        </div>
        
    )
}
