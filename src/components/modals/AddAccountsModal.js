import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { CreateAction } from '../../redux/actions/createaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

    const AddAccountsModal = (props) => {
    const {createaccount, isLoading, setNotify, show, handleShow, setShow } = props;
    const [accountdetails, setAccountdetails] = useState({});
    
    const handleSubmit = e => {
        e.preventDefault();
        createaccount(accountdetails, setNotify, ActionTypes.ADD_RATE_SUCCESS, ActionTypes.ADD_RATE_FAIL, handleShow, setShow);
    };

    useEffect(() => {
        console.log("Valued Changed " + show);
    }, [show]);

    return (
            <Modal
            show={show}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Add New Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Country Code</label>
                                <select type="select" 
                                    id="countryCode" 
                                    name="countryCode"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const countryCode = event.target.value;
                                        setAccountdetails({...accountdetails, ...{ countryCode } }); 
                                    }}>
                                    <option> --Select Country Code-- </option>
                                    <option value="NG">Nigeria</option>
                                    <option value="GH">Ghana</option>
                                </select>
                            </div>
                            
                            
                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Country</label>
                                <select type="select" 
                                    id="country" 
                                    name="country"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const country = event.target.value;
                                        setAccountdetails({...accountdetails, ...{ country } }); 
                                    }}>
                                    <option> --Select Country-- </option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Ghana">Ghana</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="bankName">Bank Name</label>
                                
                                <input name="bankName" id="bankName" placeholder="Bank Name" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankName = event.target.value;
                                    setAccountdetails({...accountdetails, ...{ bankName } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="bankSwiftCode">Bank Swift Code</label>
                                <input name="bankSwiftCode" id="bankSwiftCode" placeholder="Bank Swift Code" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankSwiftCode = event.target.value;
                                    setAccountdetails({...accountdetails, ...{ bankSwiftCode } }); 
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="bankAccountNumber">Bank Account Number</label>
                                <input name="bankAccountNumber" id="bankAccountNumber" placeholder="Bank Account Number" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankAccountNumber = event.target.value;
                                    setAccountdetails({...accountdetails, ...{ bankAccountNumber } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="accountName">Account Name</label>
                                <input name="accountName" id="accountName" placeholder="Account Name" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const accountName = event.target.value;
                                    setAccountdetails({...accountdetails, ...{ accountName } }); 
                                }}/>
                            </div>
                        </div>
                    </div>                    
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
                Close
            </Button>
            <Button variant="danger" onClick={handleSubmit} disabled={isLoading} >Add Account</Button>
            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.loadingstate.isLoading,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            createaccount: (accountdetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(accountdetails));
                dispatch(CreateAction(accountdetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddAccountsModal);
  