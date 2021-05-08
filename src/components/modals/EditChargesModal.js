import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const EditChargesModal = (props) => {
    const { editcharge, isLoading, setNotify, show, setShow, item, handleShowEdit } = props;
    const [chargedetails, setChargedetails] = useState({});
    

    const handleSubmit = e => {
        e.preventDefault();
        
        editcharge(chargedetails, setNotify, ActionTypes.EDIT_CHARGES_SUCCESS, ActionTypes.EDIT_CHARGES_FAIL, handleShowEdit, setShow);
    };

    const processPaymentType = (type) => {
        if(type === 1)
            return 'Bank Transfer';
        else if(type === 2)
            return 'Cash';
        else if(type === 3)
            return 'Deposit';
        else 
        return 'Others';
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
            <Modal.Title>Edit Charge</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Payment Type</label>
                                <select type="select" 
                                    id="paymentType"
                                    name="paymentType"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const paymentType = event.target.value;
                                        setChargedetails({...chargedetails, ...{ paymentType } }); 
                                    }}>
                                    <option> Choose Payment Type </option>
                                    <option selected="selected" value={item.paymentType}>{processPaymentType(item.paymentType)}</option>
                                    <option value="0">Bank Transfer</option>
                                    <option value="1">Deposit</option>
                                    <option value="2">Cash</option>
                                </select>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="providerRateCharges">Provider Rate Charge</label>
                                <input name="providerRateCharges" id="providerRateCharges" placeholder={item.providerRateCharges} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const providerRateCharges = event.target.value;
                                      setChargedetails({...chargedetails, ...{ providerRateCharges } }); 
                                }}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="providerFlatCharges">Flat Charges</label>
                                
                                <input name="providerFlatCharges" id="providerFlatCharges" placeholder={item.providerFlatCharges} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const providerFlatCharges = event.target.value;
                                      setChargedetails({...chargedetails, ...{ providerFlatCharges } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="transactionCharges">Transaction Charges</label>
                                <input name="transactionCharges" id="transactionCharges" placeholder={item.transactionCharges} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const transactionCharges = event.target.value;
                                      setChargedetails({...chargedetails, ...{ transactionCharges } }); 
                                      const id = item.id;
                                      setChargedetails({...chargedetails, ...{ id } });
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
            {/* disabled={isLoading} */}
            <Button variant="danger" disabled={isLoading} onClick={handleSubmit} >Update Charge</Button>
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
            editcharge: (chargedetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(chargedetails));
                dispatch(EditAction(chargedetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditChargesModal);
  