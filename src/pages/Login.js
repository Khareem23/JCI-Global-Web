import React from 'react'
import SignInarea from '../components/SignInarea'

export default function Login() {
    return (
        <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
          <div className="h-100">
            <div className="h-100 no-gutters row">
              <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
                <SignInarea/>
              </div>
              <div className="d-lg-flex d-xs-none col-lg-5">
                <div className="slider-light">
                  <div className="slick-slider slick-initialized">
                    <div>
                      <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark" tabIndex={-1}>
                        <div className="slide-img-bg" style={{backgroundImage: 'url("assets/images/originals/citynights.jpg")'}} />
                        <div className="slider-content">
                          <h3>Scalable, Modular, Consistent</h3>
                          <p>Easily exclude the components you don't require. Lightweight, consistent
                            Bootstrap based styles across all elements and components
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
            )
}
