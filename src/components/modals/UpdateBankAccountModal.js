import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';
import CountryAutocomplete from '../CountryAutocomplete';
import { FetchStatesByCountryCode } from '../../redux/actions/authaction';


    const UpdateBankAccountModal = (props) => {
    const { setNotify, show, setShowAcctUpdate, handleShowAccountUpdate, editbankaccount, allcountriesstate, fetchallcountrystates, allstatesstate, authstate, userprofilestate } = props;
    const [bankdetails, setBankDetails] = useState({});
    const [acctdetails, setAcctDetails] = useState({});
    const [updateBACKLoading, setUpdateBACKLoading] = useState(false);


    const handleSubmit = e => {
        e.preventDefault();     
        if(acctdetails !== undefined ) {            
            setUpdateBACKLoading(true);
            editbankaccount(acctdetails, setNotify, ActionTypes.UPDATE_BANK_ACCOUNT_SUCCESS, ActionTypes.UPDATE_BANK_ACCOUNT_FAIL, setShowAcctUpdate, setUpdateBACKLoading);
        }        
    };

    const handlereturnvalue = (cout) => {
        const accCountry = cout.substring(0, cout.length - 5);
        setAcctDetails({...acctdetails, ...{ accCountry } });
    }

    useEffect(() => {
        let firstobject = userprofilestate[0];

        if(firstobject.customerBankAccount) {

            setBankDetails(firstobject.customerBankAccount);

            let accBankName = firstobject.customerBankAccount.accBankName;
            let accCountry = firstobject.customerBankAccount.accCountry;
            let accNumber = firstobject.customerBankAccount.accNumber;
            let accSwiftCode = firstobject.customerBankAccount.accSwiftCode;
            let accountName = firstobject.customerBankAccount.accountName;
            let id = firstobject.customerBankAccount.id;
            let customerId = firstobject.customerBankAccount.customerId;
            setAcctDetails({...acctdetails, ...{ id, customerId, accBankName, accCountry, accNumber, accSwiftCode, accountName } });
        }
        
       
    }, [])

    useEffect(() => {
    }, [show])

    return (
            <Modal
            show={show}
            onHide={handleShowAccountUpdate}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Update Bank Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                <label htmlFor="accBankName">Bank Name</label>
                                <input name="text" id="accBankName" defaultValue={bankdetails.accBankName} placeholder="Account Bank Name" type="text" className="form-control"
                                    onChange={(event) => {
                                        const accBankName = event.target.value;
                                        setAcctDetails({...acctdetails, ...{ accBankName } });
                                    }} 
                                />
                                </div>
                            </div>
                            {/* 
//     "id": 0,
//   "accCountry": "string",
//   "accBankName": "string",
//   "accNumber": "string",
//   "accSwiftCode": "string",
//   "accountName": "string",
//   "customerId": 0 */}
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                <label htmlFor="accNumber">Account Number</label>
                                <input name="text" id="accNumber" defaultValue={bankdetails.accNumber} placeholder="Account Number" type="text" className="form-control"
                                    onChange={(event) => {
                                        const accNumber = event.target.value;
                                        setAcctDetails({...acctdetails, ...{ accNumber } });
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
                                    <label htmlFor="accountName">Account Name</label>
                                    <input name="email" id="accountName" defaultValue={bankdetails.accountName} className="form-control" placeholder="Account Name" type="text" required
                                            onChange={(event) => {
                                            const accountName = event.target.value;
                                            setAcctDetails({...acctdetails, ...{ accountName }});
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6"> 
                                <label htmlfor="accSwiftCode">Swift Code</label>
                                <div className="position-relative form-group">
                                    <input name="phone" id="accSwiftCode" placeholder="Account Swift Code" defaultValue={bankdetails.accSwiftCode} type="text" className="form-control col-md-12"
                                            onChange={(event) => {
                                            const accSwiftCode = event.target.value;
                                            setAcctDetails({...acctdetails, ...{ accSwiftCode } });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                                <div className="position-relative form-group">
                                <label htmlFor="exampleCountry" ><span className="text-danger"></span>Country Of Bank</label>
                                    <CountryAutocomplete placeholder="Select a Country"
                                        suggestions={allcountriesstate} passChildData={handlereturnvalue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowAccountUpdate}>
                Close
            </Button>

            <Button variant="danger" disabled={updateBACKLoading} onClick={handleSubmit}> Update Bank Account </Button>

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
            editbankaccount: (accountdetails, setNotify, successactiontype, failureactiontype, setShow, setUpdateBACKLoading) => {
                dispatch(EditAction(accountdetails, setNotify, successactiontype, failureactiontype, setShow, setUpdateBACKLoading));
            },
            fetchallcountrystates: (setError, statecode) => {
                dispatch(FetchStatesByCountryCode(setError, statecode));
            }, 
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UpdateBankAccountModal);
  