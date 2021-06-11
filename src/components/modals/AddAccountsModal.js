import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { CreateAction } from '../../redux/actions/createaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CountryAutocomplete from '../CountryAutocomplete';

    const AddAccountsModal = (props) => {
    const {createaccount, isLoading, setNotify, show, handleShow, setShow, allcountriesstate } = props;
    const [accountdetails, setAccountdetails] = useState({});
    
    const handleSubmit = e => {
        e.preventDefault();
        createaccount(accountdetails, setNotify, ActionTypes.ADD_BANK_SUCCESS, ActionTypes.ADD_BANK_FAIL, handleShow, setShow);
    };

    useEffect(() => {
    }, [show]);

    const handlereturnvalue = (cout) => {
        const _statecode = cout.substring(cout.length - 3, cout.length);
        const country = cout.substring(0, cout.length - 5);
        setAccountdetails({...accountdetails, ...{ _statecode, country } });
    }

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
                            <div className="col-md-12"> 
                                <label htmlFor="exampleGender">Country Code</label>
                                
                                <CountryAutocomplete placeholder="Select a Country"
                                    suggestions={allcountriesstate} passChildData={handlereturnvalue}
                                />
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
        allcountriesstate: state.allcountriesstate.allcountriesstate,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            createaccount: (accountdetails, setNotify, successactiontype, failureactiontype, setShow) => {
                if(accountdetails.accountName !== undefined && accountdetails.bankAccountNumber !== undefined && accountdetails.bankSwiftCode !== undefined && accountdetails.bankName !== undefined && accountdetails.country !== undefined) {
                    dispatch(ShowLoading(accountdetails));
                    dispatch(CreateAction(accountdetails, setNotify, successactiontype, failureactiontype, setShow));
                } else {
                    alert("All fields are required!")
                }
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddAccountsModal);
  