import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const EditAccountModal = (props) => {
    const { editaccount, isLoading, setNotify, show, setShow, item, handleShowEdit } = props;
    const [accountdetails, setAccountdetails] = useState({});
    const handleSubmit = e => {
        e.preventDefault();        
        editaccount(accountdetails, setNotify, ActionTypes.EDIT_BANK_SUCCESS, ActionTypes.EDIT_BANK_FAIL, handleShowEdit, setShow);
    };

    const processStatus = (type) => {
        if(type)
            return 'Active';
        else 
            return 'In-Active';
        
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
            <Modal.Title>Edit Account</Modal.Title>
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
                                    <option value="ENG">English</option>
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
                                    <option selected="selected" value={item.country}>{item.country}</option>
                                    <option value="nigeria">Nigeria</option>
                                    <option value="ghana">Ghana</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="bankName">Bank Name</label>
                                <input name="bankName" id="bankName" placeholder={item.bankName} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const bankName = event.target.value;
                                    const id = item.id;
                                    setAccountdetails({...accountdetails, ...{ bankName, id } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="bankSwiftCode">Bank Swift Code</label>
                                <input name="bankSwiftCode" id="bankSwiftCode" placeholder={item.bankSwiftCode} type="text" className="form-control" 
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
                                    <input name="bankAccountNumber" id="bankAccountNumber" placeholder={item.bankAccountNumber} type="text" className="form-control" 
                                        onChange={(event) => {
                                        const bankAccountNumber = event.target.value;
                                        setAccountdetails({...accountdetails, ...{ bankAccountNumber } }); 
                                    }}/>
                                </div>
                                
                                <div className="col-md-6"> 
                                    <label htmlFor="accountName">Account Name</label>
                                    <input name="accountName" id="accountName" placeholder={item.accountName}  type="text" className="form-control" 
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
            <Button variant="secondary" onClick={handleShowEdit}>
                Close
            </Button>
            <Button variant="danger" disabled={isLoading} onClick={handleSubmit} >Update Account</Button>
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
            editaccount: (accountdetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(accountdetails));
                dispatch(EditAction(accountdetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditAccountModal);
  