import React, {useState, useEffect} from 'react';
import { FetchStatesByCountryCode } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { PatchAction } from '../../redux/actions/patchaction';
import CountryAutocomplete from '../CountryAutocomplete';

    const EditBeneficiaryModal = (props) => {
    const { edittransaction, setNotify, show, setShow, item, handleShowEdit, beneficiaryLoading, setBeneficiaryLoading, allcountriesstate} = props;
    const [userdetails, setUserdetails] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setBeneficiaryLoading(true);
        edittransaction(userdetails, item.id, setBeneficiaryLoading, setNotify, ActionTypes.EDIT_BENEFICARY_SUCCESS, ActionTypes.EDIT_BENEFICARY_FAIL, setShow);
    };

    useEffect(() => {
        if(Object.keys(item).length !== 0) {
            let id = item.id;
            let accountBSBCode = item.accountBSBCode;
            let accountCurrency = item.accountCurrency;
            let accountName = item.accountName; 
            let accountNumber = item.accountNumber;
            let accountSWiftCode = item.accountSWiftCode;
            let bankAddress = item.bankAddress;
            let bankCity = item.bankCity;
            let bankName = item.bankName;
            let bankPostalCode = item.bankPostalCode;
            let bankState = item.bankState;
            let corresBankCountry = item.corresBankCountry;
            let corresBankIBAN = item.corresBankIBAN;
            let corresBankName = item.corresBankName;
            let country = item.country;
            let customerId = item.customerId;
            setUserdetails({...userdetails, ...{ id, accountBSBCode, accountCurrency, accountName, accountNumber, 
                accountSWiftCode, bankAddress, bankCity, bankName, bankPostalCode, bankState, corresBankCountry, corresBankIBAN, corresBankName, country, customerId } });
        }
    }, [item])

    const handlesendingfrom = (cout) => {
        const country = cout.substring(cout.length - 3, cout.length);
        setUserdetails({...userdetails, ...{ country } });
    }

    const handlesendingfrom2 = (cout) => {
        const corresBankCountry = cout.substring(cout.length - 3, cout.length);
        setUserdetails({...userdetails, ...{ corresBankCountry } });
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
            <Modal.Title>Edit Beneficary Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="accountName">Account Name</label>
                                <input name="accountName" id="accountName" placeholder={item.accountName} defaultValue={item.accountName} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const accountName = event.target.value;
                                    setUserdetails({...userdetails, ...{ accountName } }); 
                                }}/>
                            </div>
                            <div className="col-md-6"> 
                                <label htmlFor="accountNumber">Account Number</label>
                                <input name="accountNumber" id="accountNumber" placeholder={item.accountNumber} defaultValue={item.accountNumber} type="number" className="form-control" 
                                    onChange={(event) => {
                                    const accountNumber = event.target.value;
                                    setUserdetails({...userdetails, ...{ accountNumber } }); 
                                }}/>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="bankName">Bank Name</label>
                                <input name="bankName" id="bankName" placeholder={item.bankName} defaultValue={item.bankName} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankName = event.target.value;
                                    setUserdetails({...userdetails, ...{ bankName } }); 
                                }}/>
                            </div>
                            <div className="col-md-6"> 
                                <label htmlFor="accountCurrency">Account Number</label>
                                <input name="accountCurrency" id="accountCurrency" placeholder={item.accountCurrency} defaultValue={item.accountCurrency} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const accountCurrency = event.target.value;
                                    setUserdetails({...userdetails, ...{ accountCurrency } }); 
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="accountBSBCode">Account BSB Code</label>
                                <input name="accountBSBCode" id="accountBSBCode" placeholder={item.accountBSBCode} defaultValue={item.accountBSBCode} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const accountBSBCode = event.target.value;
                                    setUserdetails({...userdetails, ...{ accountBSBCode } }); 
                                }}/>
                            </div>
                            <div className="col-md-6"> 
                                <label htmlFor="accountSWiftCode">Account SWift Code</label>
                                <input name="accountSWiftCode" id="accountSWiftCode" placeholder={item.accountSWiftCode} defaultValue={item.accountSWiftCode} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const accountSWiftCode = event.target.value;
                                    setUserdetails({...userdetails, ...{ accountSWiftCode } }); 
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="bankCity">Bank City</label>
                                <input name="bankCity" id="bankCity" placeholder={item.bankCity} defaultValue={item.bankCity} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankCity = event.target.value;
                                    setUserdetails({...userdetails, ...{ bankCity } }); 
                                }}/>
                            </div>
                            <div className="col-md-6"> 
                                <label htmlFor="bankPostalCode">Bank Postal Code</label>
                                <input name="bankPostalCode" id="bankPostalCode" placeholder={item.bankPostalCode} defaultValue={item.bankPostalCode} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankPostalCode = event.target.value;
                                    setUserdetails({...userdetails, ...{ bankPostalCode } }); 
                                }}/>
                            </div>
                        </div>
                    </div>

                    

                    
                    
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">

                            <div className="col-md-12"> 
                                <label htmlFor="bankAddress">Bank Address</label>
                                <input name="bankAddress" id="bankAddress" placeholder={item.bankAddress} defaultValue={item.bankAddress} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankAddress = event.target.value;
                                    setUserdetails({...userdetails, ...{ bankAddress } }); 
                                }}/>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender"><strong>Country</strong></label>
                                
                                <CountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
                                    suggestions={ allcountriesstate } passChildData={handlesendingfrom}
                                />

                            </div>
                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender"><strong>Corresponding Bank Country</strong></label>
                                
                                <CountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
                                    suggestions={ allcountriesstate } passChildData={handlesendingfrom2}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">                            
                            <div className="col-md-6"> 
                                <label htmlFor="corresBankName">Corresponding Bank Name</label>
                                <input name="corresBankName" id="corresBankName" placeholder={item.corresBankName} defaultValue={item.corresBankName} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const corresBankName = event.target.value;
                                    setUserdetails({...userdetails, ...{ corresBankName } }); 
                                }}/>
                            </div>
                            <div className="col-md-6"> 
                                <label htmlFor="corresBankIBAN">Bank Postal Code</label>
                                <input name="corresBankIBAN" id="corresBankIBAN" placeholder={item.corresBankIBAN} defaultValue={item.corresBankIBAN} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const corresBankIBAN = event.target.value;
                                    setUserdetails({...userdetails, ...{ corresBankIBAN } }); 
                                }}/>
                            </div>
                        </div>
                    </div>

                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowEdit}>
                Close
            </Button>
            <Button variant="danger" disabled={beneficiaryLoading} onClick={handleSubmit}>Update Beneficary</Button>
            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
        allcountriesstate: state.allcountriesstate.allcountriesstate, 
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchallcountrystates: (setError, statecode) => {
                dispatch(FetchStatesByCountryCode(setError, statecode));
            },
            edittransaction: (fileupload, id, setLoading, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(PatchAction(fileupload, id, setLoading, setNotify, successactiontype, failureactiontype, setShow))
            },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditBeneficiaryModal);
  