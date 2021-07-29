import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';
import CountryAutocomplete from '../CountryAutocomplete';
import { FetchStatesByCountryCode } from '../../redux/actions/authaction';
import StatesAutocomplete from '../StatesAutocomplete';

    const UpdateProfileModal = (props) => {
    const { setNotify, show, setShowProfile, handleShowProfile, editprofile, allcountriesstate, fetchallcountrystates, allstatesstate, authstate, userprofilestate } = props;
    const [userprofile, setUserProfile] = useState({});
    const [profiledetails, setProfileDetails] = useState({});
    const [updateProfileLoading, setUpdateProfileLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();     
        if(profiledetails !== undefined ) {            
            setUpdateProfileLoading(true);
            editprofile(profiledetails, setNotify, ActionTypes.UPDATE_PROFILE_SUCCESS, ActionTypes.UPDATE_PROFILE_FAIL, setShowProfile, setUpdateProfileLoading);
        }        
    };

    const handlereturnvalueforstates = (state) => {
        setProfileDetails({...profiledetails, ...{ state } });
    }

    const handlereturnvalue = (cout) => {
        const _statecode = cout.substring(cout.length - 3, cout.length);
        fetchallcountrystates(setNotify, _statecode)
        const country = cout.substring(0, cout.length - 5);
        setProfileDetails({...profiledetails, ...{ country } });
    }

    useEffect(() => {
        if(userprofilestate) {
            let firstobject = userprofilestate[0];
            setUserProfile(firstobject);
    
            let id = authstate.nameid;
            let email = firstobject.email;
            let postalCode = firstobject.postalCode;
            let firstName = firstobject.firstName;
            let lastName = firstobject.lastName;
            let city = firstobject.city;
            let phoneNumber = firstobject.phoneNumber;
            let country = firstobject.country;
            let address = firstobject.address;
            let state = firstobject.state;
            setProfileDetails({...profiledetails, ...{ id, email, postalCode, city, lastName, firstName, phoneNumber, country, address, state } });
        }
        
       
    }, [])

    useEffect(() => {
    }, [show])

    return (
            <Modal
            show={show}
            onHide={handleShowProfile}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Update Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input name="text" id="firstName" defaultValue={userprofile.firstName} placeholder="First Name" type="text" className="form-control"
                                    onChange={(event) => {
                                        const firstName = event.target.value;
                                        setProfileDetails({...profiledetails, ...{ firstName } });
                                    }} 
                                />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input name="text" id="lastName" defaultValue={userprofile.lastName} placeholder="Last Name" type="text" className="form-control"
                                    onChange={(event) => {
                                        const lastName = event.target.value;
                                        setProfileDetails({...profiledetails, ...{ lastName } });
                                    }} 
                                />
                                </div>
                            </div>           
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleEmail" ><span className="text-danger">*</span> Email</label>
                                    <input name="email" id="exampleEmail" defaultValue={userprofile.email} className="form-control" placeholder="Email" type="email" required
                                            onChange={(event) => {
                                            const email = event.target.value;
                                            setProfileDetails({...profiledetails, ...{ email }});
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6"> 
                                <label htmlfor="examplePhone">Phone Number</label>
                                <div className="position-relative form-group">
                                    <input name="phone" id="examplePhone" placeholder="Phone Number" defaultValue={userprofile.phoneNumber} type="tel" className="form-control col-md-12"
                                            onChange={(event) => {
                                            const phoneNumber = event.target.value;
                                            setProfileDetails({...profiledetails, ...{ phoneNumber } });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
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
                                    <label htmlFor="exampleState">State</label>
                                    <StatesAutocomplete placeholder="Select a State"
                                        suggestions={allstatesstate} passChildData={handlereturnvalueforstates}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                <label htmlFor="exampleCity" ><span className="text-danger"></span>City</label>
                                    <input name="city" id="exampleCity" defaultValue={userprofile.city} placeholder="City" type="text" className="form-control"
                                    onChange={(event) => {
                                        const city = event.target.value;
                                        setProfileDetails({...profiledetails, ...{ city } }); 
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label htmlFor="exampleCountry"><span className="text-danger"></span>Postal Code</label>
                                    <input name="postalCode" id="exampleCode" defaultValue={userprofile.postalCode} placeholder="Postal Code" type="text" className="form-control" 
                                    onChange={(event) => {
                                        const postalCode = event.target.value;
                                        setProfileDetails({...profiledetails, ...{ postalCode } }); 
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                            <label htmlFor="exampleAddress">Address</label>
                                <div className="position-relative form-group">
                                    <input name="address" id="exampleAddress" defaultValue={userprofile.address} placeholder="1234 Main St" type="text" className="form-control" 
                                    onChange={(event) => {
                                        const address = event.target.value;
                                        setProfileDetails({...profiledetails, ...{ address } }); 
                                    }}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowProfile}>
                Close
            </Button>

            <Button variant="danger" disabled={updateProfileLoading} onClick={handleSubmit}> Update Profile </Button>

            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
        // isLoading: state.loadingstate.isLoading,
        allcountriesstate: state.allcountriesstate.allcountriesstate,
        allstatesstate: state.allstatesstate.allstatesstate,
        authstate: state.authstate.authstate,
        userprofilestate: state.userprofilestate.userprofilestate,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            editprofile: (profiledetails, setNotify, successactiontype, failureactiontype, setShow, setUpdateProfileLoading) => {
                dispatch(EditAction(profiledetails, setNotify, successactiontype, failureactiontype, setShow, setUpdateProfileLoading));
            },
            fetchallcountrystates: (setError, statecode) => {
                dispatch(FetchStatesByCountryCode(setError, statecode));
            }, 
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileModal);
  