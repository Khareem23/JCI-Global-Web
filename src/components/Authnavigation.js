import React from 'react'

export default function Authnavigation() {
    return (
        <div className="app-page-title" style={{backgroundColor: "white"}}>
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img src="assets/images/logo-inverse.jpeg" width="200" height="100" style={{marginLeft: 100, marginTop: 10}} />
                    <div>
                    </div>
                    </div>
                    <div className="page-title-actions">
                    
                    <div className="d-inline-block dropdown">
                        <button className="mb-2 mr-2 btn-pill btn btn-link">FAQ</button>
                        <button className="mb-2 mr-2 btn-pill btn btn-link">Testimonial</button>
                        <button className="mb-2 mr-2 btn-pill btn btn-link">Contact Us</button>
                        </div>
                    </div>    
                </div>
        </div>
    )
}
