import React, { useState, useEffect} from 'react';
import Authfooter from '../components/Authfooter'
import Authnavigation from '../components/Authnavigation'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { UserRegisterAuthAction, ShowLoading, FetchAllCountry, FetchStatesByCountryCode, CheckIfEmailExist, CheckIfPhoneExist} from '../redux/actions/authaction';
import { usePasswordValidation } from "../utils/passwordValidation";
import CountryAutocomplete from '../components/CountryAutocomplete';
import StatesAutocomplete from '../components/StatesAutocomplete';
import Notification from '../components/Notification';


const Register = (props) => {
    const { registeruser, isLoading, fetchallcountry, fetchallcountrystates, checkifemailexist, checkifphoneexist, allcountriesstate, allstatesstate, isEmailValid, isPhoneValid } = props;
    const [userdetails, setUserdetails] = useState({});
    const [emailValid, setEmailValid] = useState(false);
    const history = useHistory();
    const pwderrmsg1 = "Your password must match each other and it must have a special character, a number, Upper & lower case letters and not less than 8 characters"
    const pwderrmsg2 = "Your password must has a special character, a number, Upper & lower case letters and not less than 8 characters"
    const [err, setErr] = useState();
    const [err2, setErr2] = useState();
    const [showerr, setShowErr] = useState(false);
    const [errmsg, setErrmsg] = useState();
    const [errmsg2, setErrmsg2] = useState();
    const today = new Date();

    const [error, setError] = useState({
        hasError: false,
        message: "",
    })

    useEffect(() => {
        fetchallcountry(setError);
    }, [])

    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
       });
    
    const [
    validLength,
    hasNumber,
    upperCase,
    lowerCase,
    match,
    specialChar,
    ] = usePasswordValidation({
    firstPassword: password.firstPassword,
    secondPassword: password.secondPassword,
    });

    const [notify, setNotify] = useState({
        isOpen: false,
        message: '',
        type: '',
    })


    const handlereturnvalue = (cout) => {
        // const _statecode = cout.substring(cout.length - 3, cout.length);
        // fetchallcountrystates(setError, _statecode)
        const countryOfNationality = cout.substring(0, cout.length - 5);
        setUserdetails({...userdetails, ...{ countryOfNationality } });
    }

    const handlereturnvalue2 = (cout) => {
        const _statecode = cout.substring(cout.length - 3, cout.length);
        fetchallcountrystates(setError, _statecode)
        const countryofResidence = cout.substring(0, cout.length - 5);
        const country = cout.substring(0, cout.length - 5);
        setUserdetails({...userdetails, ...{ countryofResidence, country } });
    }

    const handlereturnvalueforstates = (state) => {
        setUserdetails({...userdetails, ...{ state } });
    }

    const checkemail = (email) => {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( reg.test(email) ) {
            // this is a valid email address
            setEmailValid(true);
            checkifemailexist(setError, email);
        }
        else {
            // invalid email, maybe show an error to the user.
            setEmailValid(false);
        }
    }

    const checkphone = (phone) => {
        checkifphoneexist(setError, phone);
    }  

    const handleSubmit = e => {
        e.preventDefault();
        registeruser(userdetails, history, setError, setNotify);
    };
    
    const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
        setShowErr(true);
        if(validLength && hasNumber && upperCase && lowerCase && specialChar)
        {
            if(match)
            {
                setErrmsg("");
                setErr(false);
            }
        } else {
            setErrmsg(pwderrmsg2);
            setErr(true);
        }
    };

    const setSecond = (event) => {
        setShowErr(true);
        setPassword({ ...password, secondPassword: event.target.value });
        if(validLength && hasNumber && upperCase && lowerCase && specialChar && match)
        {
            setErrmsg("");
            setErr(false);
            const password = event.target.value;
            setUserdetails({...userdetails, ...{ password } });
        } else {
            setErrmsg(pwderrmsg1);
            setErr(true);
        }
    };


    return (
            <div className="app-container app-theme-white body-tabs-shadow">
                <div className="app-container">
                    <div className="h-100">
                    <Notification notify={notify} setNotify={setNotify} />
                        <div className="h-100 no-gutters row">
                            
                                <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-12" >
                                    <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9" style={{marginTop: 200}}>
                                        <div className="app-logo" />
                                        <Authnavigation/>

                                        <h4>
                                        <div>Create Account</div>
                                        
                                        </h4>

                                        <div className="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
                                                <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="main-card mb-3 card">
                                                    <div className="card-body">
                                                        <div id="smartwizard">
                                                        <ul className="forms-wizard">
                                                            <li>
                                                            <a href="#step-1">
                                                                <em>1</em><span>Personal Information</span>
                                                            </a>
                                                            </li>
                                                            <li>
                                                            <a href="#step-2">
                                                                <em>2</em><span>Account Information</span>
                                                            </a>
                                                            </li>
                                                            <li>
                                                            <a href="#step-3">
                                                                <em>3</em><span>Business Details</span>
                                                            </a>
                                                            </li>
                                                        </ul>
                                                        




                                                        {/* <form className="login-form-wrap" 
                                                        onSubmit={(event) => {
                                                        event.preventDefault();
                                                        registeruser(userdetails, history, setError);
                                                        }}> */}

                                                            <div className="form-wizard-content">
                                                            <div id="step-1">
                                                                <div id="accordion" className="accordion-wrapper mb-3" >
                                                                    <div className="card">
                                                                        <div id="headingOne" className="card-header">
                                                                            <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="text-left m-0 p-0 btn btn-link btn-block">
                                                                            <span className="form-heading" >Account Information<p>Enter your account details below</p></span>
                                                                            </button>
                                                                        </div>
                                                                        <div data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne" className="collapse show" >
                                                                            <div className="card-body">
                                                                                <div className="form-row">
                                                                                
                                                                                <div className="col-md-6">
                                                                                    <div className="position-relative form-group">
                                                                                    <label htmlFor="firstName" >First Name</label>
                                                                                    <input name="text" id="firstName" placeholder="First Name" type="text" className="form-control"
                                                                                        onChange={(event) => {
                                                                                            const firstName = event.target.value;
                                                                                            setUserdetails({...userdetails, ...{ firstName } });
                                                                                        }} 
                                                                                    />
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div className="col-md-6">
                                                                                    <div className="position-relative form-group">
                                                                                    <label htmlFor="lastName" >Last Name</label>
                                                                                    <input name="text" id="lastName" placeholder="Last Name" type="text" className="form-control"
                                                                                        onChange={(event) => {
                                                                                            const lastName = event.target.value;
                                                                                            setUserdetails({...userdetails, ...{ lastName } });
                                                                                        }} 
                                                                                    />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div className="position-relative form-group">
                                                                                    <label htmlFor="exampleEmail" ><span className="text-danger">*</span> Email</label>
                                                                                    <input name="email" id="exampleEmail" className="form-control" placeholder="Email" type="email" required 
                                                                                        style={{
                                                                                            backgroundColor: (isEmailValid && emailValid) ? '' : 'red',
                                                                                          }}
                                                                                         onChange={(event) => {
                                                                                            const email = event.target.value;
                                                                                            setUserdetails({...userdetails, ...{ email }});
                                                                                            checkemail(email);
                                                                                        }}
                                                                                    />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6"> 
                                                                                    <label htmlfor="examplePhone">Phone Number</label>
                                                                                    <div className="position-relative form-group">
                                                                                        <input name="phone" id="examplePhone" placeholder="Phone Number" type="tel" className="form-control col-md-12"
                                                                                            style={{
                                                                                                backgroundColor: (isPhoneValid ) ? '' : 'red',
                                                                                            }}
                                                                                             onChange={(event) => {
                                                                                                const phoneNumber = event.target.value;
                                                                                                setUserdetails({...userdetails, ...{ phoneNumber } });
                                                                                                checkphone(phoneNumber);
                                                                                            }}
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                
                                                                                <div className="col-md-6 position-relative form-group">
                                                                                    <div className="form-row">
                                                                                        <div className="col-md-4"> 
                                                                                            <label htmlFor="exampleGender">Gender</label>
                                                                                            <select type="select" 
                                                                                                id="gender" 
                                                                                                name="gender"
                                                                                                className="mb-2 form-control"
                                                                                                onChange={(event) => {
                                                                                                    const gender = event.target.value;
                                                                                                    setUserdetails({...userdetails, ...{ gender } }); 
                                                                                                }}>
                                                                                                <option value=""> -- Select Gender -- </option>
                                                                                                <option value="Male">Male</option>
                                                                                                <option value="Female">Female</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-md-8"> 
                                                                                            <label htmlfor="exampleDate">Date of Birth</label>
                                                                                            <div className="position-relative form-group">
                                                                                            
                                                                                                <input name="date" id="exampleDate" placeholder="date placeholder" type="date" className="form-control" 
                                                                                                onChange={(event) => {
                                                                                                    const dateOfBirth = event.target.value;
                                                                                                    setUserdetails({...userdetails, ...{ dateOfBirth } }); 
                                                                                                }}/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6 position-relative form-group">
                                                                                    <div className="form-row">
                                                                                        <div className="col-md-6"> 
                                                                                            <div className="position-relative form-group">
                                                                                            <label htmlFor="exampleCountry" ><span className="text-danger"></span>Country Of Nationality</label>

                                                                                            <CountryAutocomplete placeholder="Select a Country"
                                                                                                suggestions={allcountriesstate} passChildData={handlereturnvalue}
                                                                                            />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-md-6"> 
                                                                                            <div className="position-relative form-group">
                                                                                            <label htmlFor="exampleCountry" ><span className="text-danger"></span>Country of Residence</label>

                                                                                            <CountryAutocomplete placeholder="Select a Country"
                                                                                                suggestions={allcountriesstate} passChildData={handlereturnvalue2}
                                                                                            />
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
                                                            <div id="step-2">
                                                            <div id="accordion" className="accordion-wrapper mb-3">
                                                                <div className="card">
                                                                <div id="headingOne" className="card-header">
                                                                    <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="text-left m-0 p-0 btn btn-link btn-block">
                                                                    <span className="form-heading">Business Information<p>Enter your business and address details below</p></span>
                                                                    </button>
                                                                </div>
                                                                <div data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne" className="collapse show">
                                                                    <div className="card-body">
                                                                    
                                                                    <div className="form-row">
                                                                        <div className="col-md-6"> 
                                                                            <div className="position-relative form-group">
                                                                                <label htmlFor="exampleUserType" >Account Type</label>
                                                                                <select  id="exampleUserType" className="mb-2 form-control"
                                                                                onClick={(event) => {
                                                                                    const accountType = event.target.value;
                                                                                    const userRole = event.target.value;
                                                                                    setUserdetails({...userdetails, ...{ accountType, userRole } });
                                                                                }}
                                                                                onChange={(event) => {
                                                                                    const accountType = event.target.value;
                                                                                    const userRole = event.target.value;
                                                                                    setUserdetails({...userdetails, ...{ accountType, userRole } });
                                                                                }}>
                                                                                    <option>-- Select Type --</option>
                                                                                    <option value="0">Individual Account</option>
                                                                                    <option value="1">Business Account</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="position-relative form-group">
                                                                            <label htmlFor="accessPin" >Access PIN</label>
                                                                            <input name="text" id="accessPin" placeholder="Access Pin" type="text" className="form-control"
                                                                            onChange={(event) => {
                                                                                const pin = event.target.value;
                                                                                setUserdetails({...userdetails, ...{ pin } }); 
                                                                            }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                   
                                                                                
                                                                    <div className="position-relative form-group">
                                                                        <div className="form-row">
                                                                            <div className="col-md-6">
                                                                            <div className="position-relative form-group">
                                                                                    <div className="form-row">
                                                                                        <div className="col-md-7">
                                                                                        <div className="position-relative form-group">
                                                                                            <label htmlFor="exampleState" ><span className="text-danger"></span>State</label>
                                                                                               
                                                                                                <StatesAutocomplete placeholder="Select a State"
                                                                                                    suggestions={allstatesstate} passChildData={handlereturnvalueforstates}
                                                                                                />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-md-5">
                                                                                            <div className="position-relative form-group">
                                                                                            <label htmlFor="exampleCity" ><span className="text-danger"></span>City</label>
                                                                                                <input name="text" id="exampleCity" placeholder="City" type="text" className="form-control"
                                                                                                onChange={(event) => {
                                                                                                    const city = event.target.value;
                                                                                                    setUserdetails({...userdetails, ...{ city } }); 
                                                                                                }} />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-6">
                                                                                <div className="position-relative form-group">
                                                                                    <div className="form-row">
                                                                                        <div className="col-md-6">
                                                                                            <div className="position-relative form-group">
                                                                                            <label htmlFor="examplePassword" ><span className="text-danger"></span>Password</label>
                                                                                            <input name="password" id="examplePassword" placeholder="Password" type="password" className="form-control"
                                                                                                onChange={(event) => {
                                                                                                    setFirst(event)
                                                                                                }}
                                                                                                onKeyUp={(event) => {
                                                                                                    setFirst(event)
                                                                                                }} />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-md-6">
                                                                                            <div className="position-relative form-group">
                                                                                            <label htmlFor="examplePasswordRep" ><span className="text-danger"></span>Re-type Password</label>
                                                                                            <input name="passwordrep" id="examplePasswordRep" placeholder="Confirm Password" type="password" className="form-control" 
                                                                                                onKeyUp={(event) => {
                                                                                                    setSecond(event)
                                                                                                }}
                                                                                                onChange={(event) => {
                                                                                                    setSecond(event)
                                                                                                }}/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p> {showerr ? <span style={{fontsize:  8, color: 'red', width: 20}}>{errmsg}</span> : <span />}</p>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>                                                                    
                                                                    <div className="position-relative form-group" style={{marginTop: -30}}>
                                                                        <div className="form-row">
                                                                            <div className="col-md-10"> 
                                                                            <label htmlFor="exampleAddress">Address</label>
                                                                                <div className="position-relative form-group">
                                                                                    <input name="address" id="exampleAddress" placeholder="1234 Main St" type="text" className="form-control" 
                                                                                    onChange={(event) => {
                                                                                        const address = event.target.value;
                                                                                        setUserdetails({...userdetails, ...{ address } }); 
                                                                                    }}/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <div className="position-relative form-group">
                                                                                    <label htmlFor="exampleCountry" ><span className="text-danger"></span>Postal Code</label>
                                                                                    <input name="text" id="exampleCode" placeholder="Postal Code" type="text" className="form-control" 
                                                                                    onChange={(event) => {
                                                                                        const postalCode = event.target.value;
                                                                                        setUserdetails({...userdetails, ...{ postalCode } }); 
                                                                                    }}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div id="step-3">
                                                            <div className="no-results">
                                                                    <div className="form-row" style={{marginTop: 30}}>
                                                                        <div className="col-md-6"> 
                                                                            <div className="position-relative form-group">
                                                                                <label htmlFor="businessName" >Business Name</label>
                                                                                <input name="text" id="businessName" placeholder="Business Name" type="text" className="form-control"
                                                                                onChange={(event) => {
                                                                                    const businessName = event.target.value;
                                                                                    setUserdetails({...userdetails, ...{ businessName } }); 
                                                                                }} />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="position-relative form-group">
                                                                            <label htmlFor="accessBRN" >Business Registration Number</label>
                                                                                <input name="text" id="accessBRN" placeholder="Business Registration Number" type="text" className="form-control"
                                                                                onChange={(event) => {
                                                                                    const businessRegNumber = event.target.value;
                                                                                    setUserdetails({...userdetails, ...{ businessRegNumber } }); 
                                                                                }} />
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                <div className="swal2-icon swal2-success swal2-animate-success-icon">
                                                                <div className="swal2-success-circular-line-left" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
                                                                <span className="swal2-success-line-tip" />
                                                                <span className="swal2-success-line-long" />
                                                                <div className="swal2-success-ring" />
                                                                <div className="swal2-success-fix" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
                                                                <div className="swal2-success-circular-line-right" style={{backgroundColor: 'rgb(255, 255, 255)'}} />
                                                                </div>
                                                                <div className="results-subtitle mt-4" style={{marginBottom: 12}}>Finished!</div>
                                                                <div className="results-title">You arrived at the last step!</div>
                                                                <div className="mt-3 mb-3" />
                                                                <div className="text-center">
                                                                    <button 
                                                                        className="btn-shadow btn-wide btn btn-success btn-lg"
                                                                        type="submit"
                                                                        disabled={isLoading}
                                                                        onClick={handleSubmit}
                                                                    >
                                                                    Submit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>

                                                        {/* </form> */}




                                                       



                                                        </div>
                                                        <div className="clearfix">
                                                        <button type="button" id="reset-btn" className="btn-shadow float-left btn btn-link">Reset</button>
                                                        <button type="button" id="next-btn" className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-danger">Next</button>
                                                        <button type="button" id="prev-btn" className="btn-shadow float-right btn-wide btn-pill mr-3 btn btn-outline-secondary">Previous</button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>

                                            <Authfooter/>
                                        
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {
        user: state,
        isLoading: state.loadingstate.isLoading,
        isEmailValid: state.emailcheckstate.isValid,
        isPhoneValid: state.phonecheckstate.isValid,
        allcountriesstate: state.allcountriesstate.allcountriesstate,
        allstatesstate: state.allstatesstate.allstatesstate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registeruser: (userdetails, history, setError, setNotify) => {
            dispatch(ShowLoading(userdetails));
            dispatch(UserRegisterAuthAction(userdetails, history, setError, setNotify));
        },
        fetchallcountry: (setError) => {
            dispatch(FetchAllCountry(setError));
        },
        fetchallcountrystates: (setError, statecode) => {
            dispatch(FetchStatesByCountryCode(setError, statecode));
        },        
        checkifemailexist: (setError, email) => {
            dispatch(CheckIfEmailExist(setError, email));
        },
        checkifphoneexist: (setError, phone) => {
            dispatch(CheckIfPhoneExist(setError, phone));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

