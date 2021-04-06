import React from 'react'

export default function SignInarea() {
    return (
        <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-5" style={{marginTop: -60}}>
                  <div className="app-logo" />
                  <h4>
                    <h2>Welcome back.</h2>
                    <span>Sign in <span className="text-success">to access</span> your account</span>
                  </h4>
                  <div>
                    <form className>
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <label htmlFor="exampleEmail" className><span className="text-danger">*</span> Email</label>
                            <input name="email" id="exampleEmail" placeholder="Email here..." type="email" className="form-control" />
                          </div>
                        </div>
                        
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <label htmlFor="examplePassword" className><span className="text-danger">*</span> Password</label>
                            <input name="password" id="examplePassword" placeholder="Password here..." type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                                <button className="btn-wide btn-pill form-control btn-shadow btn-hover-shine btn btn-primary btn-lg" style={{marginTop: 50}}>Login</button>
                          </div>
                        </div>
                        
                       
                      </div>
                      <div className="mt-3 position-relative form-check">
                        <input name="check" id="exampleCheck" type="checkbox" className="form-check-input" />
                        <label htmlFor="exampleCheck" className="form-check-label">Remember this Device.</label>
                      </div>
                      <div className="mt-4 d-flex align-items-center">
                        <h5 className="mb-0">New User?</h5>
                        <h5 className="ml-auto">
                            <a href="javascript:void(0);" className="text-primary btn-wide">Sign Up</a>
                        </h5>
                      </div>
                    </form>
                  </div>
        </div>
    )
}
