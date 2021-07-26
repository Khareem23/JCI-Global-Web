import React, {useState, useEffect} from 'react';
import { CheckIfEmailExist, CheckIfPhoneExist, FetchStatesByCountryCode } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CountryAutocomplete from '../CountryAutocomplete';
import StatesAutocomplete from '../StatesAutocomplete';
import { CreateAction } from '../../redux/actions/createaction';

    const EditUserModal = (props) => {
    const { edituser, setNotify, show, setShow, item, handleShowEdit, allcountriesstate, allstatesstate, fetchallcountrystates, isPhoneValid, isEmailValid, checkifemailexist, checkifphoneexist, editUserLoading, setEditUserLoading} = props;
    const [userdetails, setUserdetails] = useState({});
    const [emailValid, setEmailValid] = useState(false);
    

    const handleSubmit = e => {
        e.preventDefault();
        setEditUserLoading(true);
        edituser(userdetails, setNotify, ActionTypes.EDIT_USER_SUCCESS, ActionTypes.EDIT_USER_FAIL, setShow, setEditUserLoading);
    };

    useEffect(() => {
        if(Object.keys(item).length !== 0) {
            let id = item.id;
            let email = item.email;
            let firstName = item.firstName;
            let lastName = item.lastName;
            let country = item.country;
            let state = item.state;
            let city = item.city;
            let postalCode = item.postalCode;
            let address = item.address;
            let phoneNumber = item.phoneNumber;
            setUserdetails({...userdetails, ...{ id, email, firstName, lastName, country, state, city, postalCode, address, phoneNumber } });
        }
    }, [item])

    const handlereturnvalue = (cout) => {
        const _statecode = cout.substring(cout.length - 3, cout.length);
        fetchallcountrystates(setNotify, _statecode)
        const countryofResidence = cout.substring(0, cout.length - 5);
        const country = cout.substring(0, cout.length - 5);
        setUserdetails({...userdetails, ...{ countryofResidence, country } });
    }
    
    const handlereturnvalueforstates = (state) => {
        setUserdetails({...userdetails, ...{ state } });
    }

    const checkphone = (phone) => {
        checkifphoneexist(setNotify, phone);
    } 

    const checkemail = (email) => {
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( reg.test(email) ) {
            // this is a valid email address
            setEmailValid(true);
            checkifemailexist(setNotify, email);
        }
        else {
            // invalid email, maybe show an error to the user.
            setEmailValid(false);
        }
    }


    useEffect(() => {
    }, [show])


    

    return (
            <Modal
            show={show}
            onHide={handleShowEdit}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="firstName">First Name</label>
                                <input name="firstName" id="firstName" placeholder={item.firstName} defaultValue={item.firstName} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const firstName = event.target.value;
                                    setUserdetails({...userdetails, ...{ firstName } }); 
                                }}/>
                            </div>

                            <div className="col-md-6"> 
                                <label htmlfor="lastName">Last Name</label>
                                <div className="position-relative form-group">
                                    <input name="date" id="lastName" placeholder={item.lastName} defaultValue={item.lastName} type="text" className="form-control" 
                                        onChange={(event) => {
                                            const lastName = event.target.value;
                                            setUserdetails({...userdetails, ...{ lastName } }); 
                                        }}/>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">

                            <div className="col-md-6"> 
                                <label htmlfor="examplePhone">Phone Number</label>
                                <div className="position-relative form-group">
                                    <input name="phone" id="examplePhone" placeholder="Phone Number" defaultValue={item.phoneNumber} type="tel" className="form-control col-md-12"
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
                            
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                <label htmlFor="exampleEmail" >Email</label>
                                <input name="email" id="exampleEmail" className="form-control" defaultValue={item.email} placeholder="Email" type="email" required 
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
                           
                            

                             
                        </div>
                    </div>
                      
                    
                    <div className="position-relative form-group">
                        <div className="form-row">
                            
                            <div className="col-md-6"> 
                                <label htmlFor="country">Country</label>
                                    <CountryAutocomplete placeholder="Select a Country"
                                        suggestions={allcountriesstate} passChildData={handlereturnvalue}
                                    />
                            </div>

                            <div className="col-md-6">
                            <div className="position-relative form-group">
                                <label htmlFor="exampleState" ><span className="text-danger"></span>State</label>
                                    
                                    <StatesAutocomplete placeholder="Select a State"
                                        suggestions={allstatesstate} passChildData={handlereturnvalueforstates}
                                    />
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12">
                            <label htmlFor="exampleAddress">Address</label>
                                <div className="position-relative form-group">
                                    <input name="address" id="exampleAddress" defaultValue={item.address} placeholder="1234 Main St" type="text" className="form-control" 
                                    onChange={(event) => {
                                        const address = event.target.value;
                                        setUserdetails({...userdetails, ...{ address } }); 
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                <label htmlFor="exampleCity" ><span className="text-danger"></span>City</label>
                                    <input name="text" id="exampleCity" defaultValue={item.city} placeholder="City" type="text" className="form-control"
                                    onChange={(event) => {
                                        const city = event.target.value;
                                        setUserdetails({...userdetails, ...{ city } }); 
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleCountry" ><span className="text-danger"></span>Postal Code</label>
                                    <input name="text" id="exampleCode" defaultValue={item.postalCode} placeholder="Postal Code" type="text" className="form-control" 
                                    onChange={(event) => {
                                        const postalCode = event.target.value;
                                        setUserdetails({...userdetails, ...{ postalCode } }); 
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowEdit}>
                Close
            </Button>
            <Button variant="danger" disabled={editUserLoading} onClick={handleSubmit} >Update User</Button>
            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
        allcountriesstate: state.allcountriesstate.allcountriesstate,
        allstatesstate: state.allstatesstate.allstatesstate,
        isPhoneValid: state.phonecheckstate.isValid,
        isEmailValid: state.emailcheckstate.isValid,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            edituser: (userdetails, setNotify, successactiontype, failureactiontype, setShow, setEditUserLoading) => {
                dispatch(CreateAction(userdetails, setNotify, successactiontype, failureactiontype, setShow, setEditUserLoading)
            )},
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditUserModal);
  