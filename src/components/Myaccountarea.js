import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FetchAllCountry } from '../redux/actions/authaction';
import { EditAction } from '../redux/actions/editaction';
import { GetSingleObjectAction } from '../redux/actions/getsoaction';
import ActionTypes from "../redux/actiontype/ActionTypes"
import CountryAutocomplete from './CountryAutocomplete';

const Myaccountarea = (props) => {
    const { isLoading, setNotify, show, handleShow, setShow, fetchprofiledetails, userprofilestate, authstate, editaccount, allcountriesstate, fetchallcountry } = props;
    const [userprofile, setUserProfile] = useState({});
    const [accountdetails, setAccountdetails] = useState({});
    useEffect(() => {
        fetchallcountry(setNotify);
        let customerId = authstate.nameid;
        fetchprofiledetails(customerId, setNotify, ActionTypes.FETCH_USER_PROFILE_SUCCESS, ActionTypes.FETCH_USER_PROFILE_FAIL, setShow);
    }, []);

    useEffect(() => {
        let firstobject = userprofilestate[0];
        setUserProfile(firstobject);

        const bankSwiftCode = firstobject.customerBankAccount.accSwiftCode;
        const accountName = firstobject.customerBankAccount.accountName;
        const bankAccountNumber = firstobject.customerBankAccount.accNumber;
        const bankName = firstobject.customerBankAccount.accBankName;
        const accCountry = firstobject.customerBankAccount.accCountry;
        const id = firstobject.id;

        setAccountdetails({...accountdetails, ...{ bankSwiftCode, accountName, bankAccountNumber, bankName, accCountry, id} });

    }, [userprofilestate]);

    const handleSubmit = e => {
        e.preventDefault();        
        editaccount(accountdetails, setNotify, ActionTypes.EDIT_BANK_SUCCESS, ActionTypes.EDIT_BANK_FAIL, handleShow, setShow);
    };

    const handlesendingfrom = (cout) => {
        const countryCode = cout.substring(cout.length - 3, cout.length);
        const country = cout.substring(0, cout.length - 5);
        console.log(country)
        setAccountdetails({...accountdetails, ...{ countryCode, country } });
    }

    function copyFunction(prop) {
        /* Get the text field */
        var copyText = document.getElementById(prop);
      
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        alert("Text Copied: " + copyText.value);
    }

    return (
        <>
            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading" style={{marginLeft: 16}}>
                        <div>
                            <div className="page-title-head center-elem">
                                <span className="d-inline-block"><h2>My Account</h2></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">Profile Account Details</h5>
                        <form className>
                        <div className="position-relative form-group">
                            <div className="no-shadow rm-border bg-transparent text-center">
                                <br></br>
                                <img src="assets/images/user.jpg" alt="" width={200} height={200} />
                                <br></br><br></br>
                                <h5 className="card-title">Profile Image</h5>
                            </div>
                        </div>
                       
                        <div className="position-relative form-group">
                                <label htmlFor="exampleAccountType">Account Type</label>
                                <input name="exampleAccountType" defaultValue={userprofile.accountType} readOnly id="exampleAccountType" placeholder="Account Type" type="text" className="form-control"/>
                        </div>
                        <div className="position-relative form-group">
                                <label htmlFor="exampleAccountRole">Account Role</label>
                                <input name="exampleAccountRole" defaultValue={userprofile.userRole} readOnly id="exampleAccountRole" placeholder="Account Role" type="text" className="form-control"/>
                        </div>
                        <div className="position-relative form-group">
                                <label htmlFor="exampleEmail">Email Address</label>
                                <input name="exampleEmail" defaultValue={userprofile.email} id="exampleEmail" type="email" placeholder="Email Address" className="form-control"/>
                        </div>
                        

                        {/* id(pin):10
                        email(pin):"decloud23@gmail.com"
                        firstName(pin):"Simi"
                        lastName(pin):"Ahmed"
                        createdDate(pin):"2021-05-01T18:18:18"
                        userRole(pin):"Customer"
                        phoneNumber(pin):"+2349083456765"
                        businessName(pin):""
                        businessRegNumber(pin):""
                        pin(pin):"333399"
                        country(pin):null
                        state(pin):"Oyo"
                        city(pin):"Ibadan"
                        postalCode(pin):"234908"
                        address(pin):"23 Fitila Street"
                        gender(pin):"Female"
                        isKYCCompliancePassed(pin):true
                        isAMLCompliancePassed(pin):true
                        isScannedForAML(pin):true
                        isActive(pin):true
                        lastUpdatedDate(pin):"2021-05-01T18:18:18"
                        dateOfBirth(pin):"2021-03-31T12:16:01"
                        age(pin):0
                        resetKey(pin):"JCI-Reset-RUEHM"
                        referralDiscountCode(pin):"JCI-DIS-56141447"
                        accountType(pin):"Individual-Account" */}

                        {/* <div className="position-relative form-group">
                                <label htmlFor="exampleGender">Status</label>
                                <select readonly type="select" 
                                    id="gender" 
                                    name="gender"
                                    className="mb-2 form-control"
                                    >
                                    <option value="Male">Verified</option>
                                    <option value="Female">Not Verified</option>
                                </select>
                        </div> */}
                        <div className="position-relative form-group">
                                <label htmlFor="exampleFirstname">First Name</label>
                                <input name="exampleFirstname" defaultValue={userprofile.firstName} id="exampleFirstname" placeholder="First Name" type="text" className="form-control" />
                        </div>
                        <div className="position-relative form-group">
                                <label htmlFor="exampleLastname">Last Name</label>
                                <input name="exampleLastname" defaultValue={userprofile.lastName} id="exampleLastname" placeholder="Last Name" type="text" className="form-control" />
                        </div>
                        <div className="position-relative form-group">
                                <label htmlFor="examplePhone">Phone Number</label>
                                <input name="examplePhone" defaultValue={userprofile.phoneNumber} id="examplePhone" placeholder="Phone Number" type="text" className="form-control" 
                                />
                        </div>

                        <div className="form-row"> 
                            <div className="position-relative form-group col-md-6">
                                <label htmlFor="exampleGender">Gender</label>
                                <input name="exampleGender" defaultValue={userprofile.gender} id="exampleGender" placeholder="Gender" type="text" className="form-control" 
                                        
                                />
                            </div>
                            <div className="position-relative form-group col-md-6">
                                <label htmlFor="exampleDOB">D.O.B</label> 
                                {/* .substring(0, 10) */}
                                <input name="exampleDOB" defaultValue={userprofile.dateOfBirth} id="exampleDOB" placeholder="Date of Birth" type="text" className="form-control" />
                            </div>
                        </div>
                                    
                        
                        </form>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">Account Details</h5>
                        <form className>
                            
                        <div className="position-relative form-group">
                            <label htmlFor="examplePin">PIN</label>
                            <input name="examplePin" defaultValue={userprofile.pin} id="examplePin" placeholder="Pin" type="password" className="form-control"/>
                        </div>
                        <div className="form-row"> 
                            <div className="position-relative form-group col-md-10">
                                <label htmlFor="refCode">Referral Code</label>
                                <input name="refCode" defaultValue={userprofile.referralDiscountCode} id="refCode" type="text" className="form-control" />
                            </div>

                            <div className="position-relative form-group col-md-2" > 
                                    <label htmlfor="exampleDate"></label>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted" style={{marginTop: 7}}>
                                        <span className="text-success pl-2">
                                            <button className="btn mb-2 mr-2 btn-shadow btn-danger btn-lg" onClick={() => { copyFunction('refCode') }}>Copy</button>
                                            </span>
                                    </div>                                   
                            </div>
                        </div>
                        <div className="form-row"> 
                            <div className="position-relative form-group col-md-10">
                                <label htmlFor="resetKey">Reset Key</label>
                                <input name="resetKey" defaultValue={userprofile.resetKey} id="resetKey" type="text" className="form-control" />
                            </div>

                            <div className="position-relative form-group col-md-2" > 
                                    <label htmlfor="exampleDate"></label>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted" style={{marginTop: 7}}>
                                        <span className="text-success pl-2">
                                            <button className="btn mb-2 mr-2 btn-shadow btn-danger btn-lg" onClick={() => { copyFunction('resetKey') }}>Copy</button>
                                            </span>
                                    </div>                                   
                            </div>
                        </div>
                        <div className="divider" />
                            {(() => {
                                if(userprofile.accountType !== 'Individual-Account')
                                {
                                    return <div className="position-relative form-group">
                                                <label htmlFor="examplebusinessName">Business Name</label>
                                                <input name="examplebusinessName" defaultValue={userprofile.businessName} id="examplebusinessName" placeholder="Business Name" type="text" className="form-control"/>
                                            </div>
                                } else {
                                    
                                }
                            })()}

                            {(() => {
                                if(userprofile.accountType !== 'Individual-Account')
                                {
                                    return <div className="position-relative form-group">
                                                <label htmlFor="examplebusinessRegNumber">Business Reg. Number</label>
                                                <input name="examplebusinessRegNumber" defaultValue={userprofile.businessRegNumber} id="examplebusinessRegNumber" placeholder="Business Reg. Number" type="text" className="form-control"/>
                                            </div>
                                } else {
                                    
                                }
                            })()}
                        </form>
                    </div>
                    </div>
                    <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">Contact details</h5>
                        <form className>
                        <fieldset className="position-relative form-group">
                            <div className="position-relative form-group">
                                <label htmlFor="exampleAddress">Address</label>
                                <textarea defaultValue={userprofile.address} name="exampleAddress" id="exampleAddress" type="text" className="form-control" />
                            </div>
                            <div className="position-relative form-group">
                                <label htmlFor="examplepostalCode">Postal Code</label>
                                <input name="examplepostalCode" id="examplepostalCode" defaultValue={userprofile.postalCode} placeholder="Postal Code" type="text" className="form-control" 
                                />
                            </div>
                            <div className="position-relative form-group">
                                <label htmlFor="exampleCity">City</label>
                                <input name="exampleCity" defaultValue={userprofile.city} id="exampleCity" placeholder="City" type="text" className="form-control" 
                                />
                            </div>
                            <div className="position-relative form-group">
                                <label htmlFor="exampleState">State</label>
                                <input name="exampleState" defaultValue={userprofile.state} id="exampleState" placeholder="State" type="text" className="form-control" 
                                />
                            </div>
                            <div className="position-relative form-group">
                                <label htmlFor="exampleCountry">Country</label>
                                <input name="exampleCountry" id="exampleCountry" defaultValue={userprofile.country} placeholder="Country" type="text" className="form-control" 
                                />
                            </div>
                            {/* <div className="position-relative form-check">
                            <label className="form-check-label">
                                <input name="radio1" type="radio" className="form-check-input" /> 
                                Option one is this and that—be sure to include why it's great
                            </label>
                            </div>
                            <div className="position-relative form-check">
                            <label className="form-check-label">
                                <input name="radio1" type="radio" className="form-check-input" /> 
                                Option two can be something else and selecting it will deselect option one
                            </label>
                            </div>
                            <div className="position-relative form-check disabled">
                            <label className="form-check-label">
                                <input name="radio1" disabled type="radio" className="form-check-input" /> Option three is disabled
                            </label>
                            </div> */}
                        </fieldset>
                        {/* <div className="position-relative form-check">
                            <label className="form-check-label">
                            <input type="checkbox" className="form-check-input" /> Check me out
                            </label>
                        </div> */}
                        </form>
                    </div>
                    </div>
                </div>
            </div>



            <div className="col-md-12 col-xl-12">
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                        <div className="widget-chat-wrapper-outer">
                        <div className="widget-chart-content pt-3 pl-3 pb-1">
                            <div className="widget-chart-flex">
                                <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                    <div className="fsize-4">
                                    {/* <span>My Bank Account For Compesation</span> */}
                                    {/* accCountry(pin):"Nigeria"
                                    accBankName(pin):"Guaranty Trust Bank"
                                    accNumber(pin):"3433333567"
                                    accSwiftCode(pin):"GTB454545NG"
                                    accountName(pin):"Olayinka Usman Kareem"
                                    customerId(pin):10 */} 
                                    <h5 className="card-title">My Bank Account For Compesation</h5>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="form-row">
                                
                            <div className="col-md-12 position-relative form-group">
                            <div className="form-row">                               
                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender">Account Country</label>
                                    {/* defaultValue={userprofile.customerBankAccount.accCountry}  */}
                                    {/* <input name="accCountry" defaultValue={userprofile.customerBankAccount?.accCountry} id="accNumber" placeholder="Account Country" type="text" className="form-control" 
                                        onLoad={(event) => {
                                            const accCountry = event.target.value;
                                            setAccountdetails({...accountdetails, ...{ accCountry} });
                                        }}
                                    /> */}

                                        <CountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
                                            suggestions={ allcountriesstate } passChildData={handlesendingfrom}
                                        />
                                    

                                </div>
                                
                               
                                <div className="col-md-4"> 
                                    <label htmlFor="accBankName">Account Bank Name</label>
                                    {/* defaultValue={userprofile.customerBankAccount.accBankName} */}
                                    <input name="accBankName" defaultValue={userprofile.customerBankAccount?.accBankName} id="accBankName" placeholder="Account Bank Name" type="text" className="form-control" 
                                        onLoad={(event) => {
                                            const bankName = event.target.value;
                                            setAccountdetails({...accountdetails, ...{ bankName} });
                                        }}
                                    />
                                </div>
                                <div className="col-md-4"> 
                                    <label htmlfor="accNumber">Account Number / IBAN</label>
                                    <div className="position-relative form-group">
                                        {/* defaultValue={userprofile.customerBankAccount.accNumber} */}
                                        <input name="accNumber" defaultValue={userprofile.customerBankAccount?.accNumber} id="accNumber" placeholder="Account Number / IBAN" type="text" className="form-control" 
                                            onLoad={(event) => {
                                                const bankAccountNumber = event.target.value;
                                                setAccountdetails({...accountdetails, ...{ bankAccountNumber} });
                                            }} 
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4"> 
                                    <label htmlfor="accountName">Account Name</label>
                                    <div className="position-relative form-group">
                                        {/* defaultValue={userprofile.customerBankAccount.accountName} */}
                                        <input name="accountName" id="accountName" defaultValue={userprofile.customerBankAccount?.accountName} placeholder="Account Name" type="text" className="form-control"
                                            onLoad={(event) => {
                                                const accountName = event.target.value;
                                                setAccountdetails({...accountdetails, ...{ accountName} });
                                            }} 
                                        />
                                    </div>
                                </div>

                                <div className="col-md-4"> 
                                    <label htmlFor="accSwiftCode">Account Swift Code</label>
                                    <input name="accSwiftCode" id="accSwiftCode" defaultValue={userprofile.customerBankAccount?.accSwiftCode} placeholder="Account Swift Code" type="text" className="form-control" 
                                            onLoad={(event) => {
                                                const bankSwiftCode = event.target.value;
                                                setAccountdetails({...accountdetails, ...{ bankSwiftCode} });
                                            }} 
                                />
                                </div>
                               
                                
                                <div className="col-md-4" style={{marginLeft: 0}}> 
                                    <label htmlfor="exampleDate"></label>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" onClick={handleSubmit}>Update Bank Account Details</button>
                                                    </span>
                                            </div>                                   
                                </div>
                               
                            </div>
                        </div>
                            </div>
                           
                        </div>
                    </div>
             



                </div>
            </div>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userprofilestate: state.userprofilestate.userprofilestate,
        authstate: state.authstate.authstate,
        allcountriesstate: state.allcountriesstate.allcountriesstate,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchprofiledetails: (customerId, setNotify, successactiontype, failureactiontype, setShow) => {                
                dispatch(GetSingleObjectAction(customerId, setNotify, successactiontype, failureactiontype, setShow));
            },
            editaccount: (accountdetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(EditAction(accountdetails, setNotify, successactiontype, failureactiontype, setShow));
            },
            fetchallcountry: (setError) => {
                dispatch(FetchAllCountry(setError));
            },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Myaccountarea);