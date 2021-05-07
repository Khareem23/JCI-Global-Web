import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { CreateAction } from '../../redux/actions/createaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

    const AddChargesModal = (props) => {
    const { createcharge, isLoading, setNotify, show, handleShow, setShow } = props;
    const [chargedetails, setChargedetails] = useState({});
    

    const handleSubmit = e => {
        e.preventDefault();
        createcharge(chargedetails, setNotify, ActionTypes.ADD_CHARGES_SUCCESS, ActionTypes.ADD_CHARGES_FAIL, handleShow, setShow);
    };

    useEffect(() => {
    }, [show])

    return (

            <Modal
            show={show}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Add New Charges</Modal.Title>
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
                                    <option value="0">Bank Transfer</option>
                                    <option value="1">Deposit</option>
                                    <option value="2">Cash</option>
                                </select>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="providerRateCharges">Provider Rate Charge</label>
                                <input name="providerRateCharges" id="providerRateCharges" placeholder="Provider Rate Charges" type="text" className="form-control" 
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
                                
                                <input name="providerFlatCharges" id="providerFlatCharges" placeholder="Provider Flat Charges" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const providerFlatCharges = event.target.value;
                                      setChargedetails({...chargedetails, ...{ providerFlatCharges } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="transactionCharges">Transaction Charges</label>
                                <input name="transactionCharges" id="transactionCharges" placeholder="Transaction Charges" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const transactionCharges = event.target.value;
                                      setChargedetails({...chargedetails, ...{ transactionCharges } }); 
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
            <Button variant="danger" onClick={handleSubmit} disabled={isLoading} >Add Charges</Button>
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
            createcharge: (chargedetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(chargedetails));
                dispatch(CreateAction(chargedetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddChargesModal);
  