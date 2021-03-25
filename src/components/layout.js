import React from 'react'
import sidenav from './sidenav'
import main from './main'

export default function layout() {
    return (
            <div id="layoutSidenav">
                <sidenav/>
                <div id="layoutSidenav_content">
                    <main/>
                    <footer/>
                </div>
            </div>
        )
}
