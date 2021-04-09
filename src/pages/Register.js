import React, {useState, useEffect} from 'react';
import Authfooter from '../components/Authfooter'
import Authnavigation from '../components/Authnavigation'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { UserRegisterAuthAction, ShowLoading, FetchAllCountry} from '../redux/actions/authaction';
import { usePasswordValidation } from "../utils/passwordValidation";
import CountryAutocomplete from '../components/CountryAutocomplete';


const Register = (props) => {
    const { registeruser, isLoading, fetchallcountry, allcountriesstate } = props;
    const [userdetails, setUserdetails] = useState({});
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
                        
                        <div className="h-100 no-gutters row">
                            
                                <div className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-12">
                                    <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
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
                                                                <em>3</em><span>Finish Wizard</span>
                                                            </a>
                                                            </li>
                                                        </ul>
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
                                                                                    <label htmlFor="firstName" className>First Name</label>
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
                                                                                    <label htmlFor="lastName" className>Last Name</label>
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
                                                                                    <label htmlFor="exampleEmail" className><span className="text-danger">*</span> Email</label>
                                                                                    <input name="email" id="exampleEmail" placeholder="Email" type="email" className="form-control" 
                                                                                         onChange={(event) => {
                                                                                            const email = event.target.value;
                                                                                            setUserdetails({...userdetails, ...{ email } });
                                                                                        }}
                                                                                    />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6"> 
                                                                                    <label htmlfor="examplePhone">Phone Number</label>
                                                                                    <div className="position-relative form-group">
                                                                                        <input name="phone" id="examplePhone" placeholder="Phone Number" type="tel" className="form-control col-md-12"
                                                                                             onChange={(event) => {
                                                                                                const phoneNumber = event.target.value;
                                                                                                setUserdetails({...userdetails, ...{ phoneNumber } });
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
                                                                                                    const name = event.target.value;
                                                                                                    setUserdetails({...userdetails, ...{ name } }); 
                                                                                                }}>
                                                                                                <option value="">Select Option</option>
                                                                                                <option value="Male">Male</option>
                                                                                                <option value="Female">Female</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-md-8"> 
                                                                                            <label htmlfor="exampleDate">Date of Birth</label>
                                                                                            <div className="position-relative form-group">
                                                                                            
                                                                                                <input name="date" id="exampleDate" placeholder="date placeholder" type="date" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-6">
                                                                                    <div className="position-relative form-group">
                                                                                    <label htmlFor="exampleCountry" className><span className="text-danger"></span>Country</label>
                                                                                            <CountryAutocomplete placeholder="Select a Country"
                                                                                                suggestions={allcountriesstate}
                                                                                            />
                                                                                        <select id="exampleCountry" className="mb-2 form-control">
                                                                                            <option>Nigeria</option>
                                                                                            <option>Ghana</option>
                                                                                            <option>Alageria</option>
                                                                                        </select>
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
                                                                                <label htmlFor="exampleUserType" className>Account Type</label>
                                                                                <select  id="exampleUserType" className="mb-2 form-control">
                                                                                    <option>Individual Account</option>
                                                                                    <option>Business Account</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="position-relative form-group">
                                                                            <label htmlFor="accessPin" className>Access PIN</label>
                                                                            <input name="text" id="accessPin" placeholder="Access Pin" type="text" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                   
                                                                                
                                                                    <div className="position-relative form-group">
                                                                        <div className="form-row">
                                                                            <div className="col-md-6">
                                                                            <div className="position-relative form-group">
                                                                                    <div className="form-row">
                                                                                        <div className="col-md-6">
                                                                                        <div className="position-relative form-group">
                                                                                            <label htmlFor="exampleState" className><span className="text-danger"></span>State</label>
                                                                                                <input name="text" id="exampleState" placeholder="State" type="text" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-md-6">
                                                                                            <div className="position-relative form-group">
                                                                                            <label htmlFor="exampleCity" className><span className="text-danger"></span>City</label>
                                                                                                <input name="text" id="exampleCity" placeholder="City" type="text" className="form-control" />
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
                                                                                            <label htmlFor="examplePassword" className><span className="text-danger"></span>Password</label>
                                                                                            <input name="password" id="examplePassword" placeholder="Password" type="password" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                        
                                                                                        <div className="col-md-6">
                                                                                            <div className="position-relative form-group">
                                                                                            <label htmlFor="examplePasswordRep" className><span className="text-danger"></span>Re-type Password</label>
                                                                                            <input name="passwordrep" id="examplePasswordRep" placeholder="Confirm Password" type="password" className="form-control" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>                                                                    
                                                                    <div className="position-relative form-group" style={{marginTop: -30}}>
                                                                        <div className="form-row">
                                                                            <div className="col-md-10"> 
                                                                            <label htmlFor="exampleAddress">Address</label>
                                                                                <div className="position-relative form-group">
                                                                                    <input name="address" id="exampleAddress" placeholder="1234 Main St" type="text" className="form-control" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-2">
                                                                                <div className="position-relative form-group">
                                                                                    <label htmlFor="exampleCountry" className><span className="text-danger"></span>Postal Code</label>
                                                                                    <input name="text" id="exampleCode" placeholder="Postal Code" type="text" className="form-control" />
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
                                                                                <label htmlFor="businessName" className>Business Name</label>
                                                                                <input name="text" id="businessName" placeholder="Business Name" type="text" className="form-control" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="position-relative form-group">
                                                                            <label htmlFor="accessBRN" className>Business Registration Number</label>
                                                                            <input name="text" id="accessBRN" placeholder="Business Registration Number" type="text" className="form-control" />
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
                                                                <button className="btn-shadow btn-wide btn btn-success btn-lg">Finish</button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
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
        allcountriesstate: state.allcountriesstate.allcountriesstate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registeruser: (userdetails, history, setError) => {
            dispatch(ShowLoading(userdetails));
            dispatch(UserRegisterAuthAction(userdetails, history, setError));
        },
        fetchallcountry: (setError) => {
            console.log("okada men are fighting")
            dispatch(FetchAllCountry(setError));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

