import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { LoginAuthAction } from '../redux/actions/authaction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SignInarea = (props) => {
  const { loginuser, isLoading, authstate, notify, setNotify } = props;
  const [userdetails, setUserdetails] = useState({});
  const history = useHistory();

  const handleSubmit = e => {
      e.preventDefault();
      setLoginLoading(true)
      loginuser(userdetails, history, setNotify, setLoginLoading);
  };

  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 50);
}

  const [loginloading, setLoginLoading] = useState(false)

  useEffect(() => {
  }, [isLoading])


  //to chaeck the login state of the user on loads
  useEffect(() => {
      // if(authstate.isLoggedIn && authstate.role === "Customer")
      // {
      //   //redirect to customer page
      //   history.push('/sendmoney');
      // } else if(authstate.isLoggedIn && authstate.role === "Admin") {
      //   //redirect to admin page
      //   history.push('/dashboard');
      // }
  }, [])

    return (
        <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-5" style={{marginTop: -60}}>
                  <div className="app-logo" />
                  <div>
                    <h2>Welcome back.</h2>
                    <h4><span>Sign in <span className="text-danger">to access</span> your account</span></h4>
                  </div>
                  <div>
                    <form >
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <label htmlFor="exampleEmail">Email</label>
                            <input name="email" id="exampleEmail" placeholder="Email here..." type="email" className="form-control" 
                             onChange={(event) => {
                              const username = event.target.value;
                              setUserdetails({...userdetails, ...{ username } }); 
                          }}/>
                          </div>
                        </div>
                        
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                            <label htmlFor="examplePassword">Password</label>
                            <input name="password" id="examplePassword" placeholder="Password here..." type="password" className="form-control" 
                             onChange={(event) => {
                              const password = event.target.value;
                              setUserdetails({...userdetails, ...{ password } }); 
                          }}/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="position-relative form-group">
                                <button className="btn-wide btn-pill form-control btn-shadow btn-hover-shine btn btn-danger" 
                                type="submit"
                                style={{fontSize: 14, marginTop: 40}}
                                disabled={loginloading}
                                onClick={handleSubmit}>
                                  Login
                                </button>
                          </div>
                        </div>
                        
                       
                      </div>
                      <div className="mt-3 position-relative form-check">
                        <input name="check" id="exampleCheck" type="checkbox" className="form-check-input" />
                        <label htmlFor="exampleCheck" className="form-check-label text-danger">Remember this Device.</label>
                      </div>
                      <div className="mt-4 d-flex align-items-center">
                        <h5 className="mb-0">New User?</h5>
                        <h5 className="ml-auto">
                            <Link to="/register#step-1" className="text-danger btn-wide" onClick={refreshPage}>Sign Up</Link>
                        </h5>
                      </div>
                    </form>
                  </div>
        </div>
    )
}


const mapStateToProps = (state) => {
  return {
      isLoading: state.loadingstate.isLoading,
      authstate: state.authstate.authstate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginuser: (userdetails, history, setNotify, setLoginLoading) => {
          // dispatch(ShowLoading(userdetails));
          dispatch(LoginAuthAction(userdetails, history, setNotify, setLoginLoading)
          );
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInarea);
