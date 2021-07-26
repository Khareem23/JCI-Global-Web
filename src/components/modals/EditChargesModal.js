import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CreateAction } from '../../redux/actions/createaction';

    const EditChargesModal = (props) => {
    const { editcharge, setNotify, show, setShow, item, handleShowEdit, chargesLoading, setChargesLoading } = props;
    const [chargedetails, setChargedetails] = useState({});
    

    const handleSubmit = e => {
        e.preventDefault();
        setChargesLoading(true);
        editcharge(chargedetails, setNotify, ActionTypes.EDIT_CHARGES_SUCCESS, ActionTypes.EDIT_CHARGES_FAIL, setShow, setChargesLoading);
    };

    useEffect(() => {
        if(Object.keys(item).length !== 0) {
            let id = item.id;
            let paymentType = item.paymentType;
            let providerRateCharges = item.providerRateCharges;
            let providerFlatCharges = item.providerFlatCharges;
            let transactionCharges = item.transactionCharges;
            setChargedetails({...chargedetails, ...{ id, paymentType, providerRateCharges, providerFlatCharges, transactionCharges } });
        }
    }, [item])
    

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
                                <input name="providerRateCharges" id="providerRateCharges" defaultValue={item.providerRateCharges} placeholder={item.providerRateCharges} type="number" className="form-control" 
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
                                
                                <input name="providerFlatCharges" id="providerFlatCharges" defaultValue={item.providerFlatCharges} placeholder={item.providerFlatCharges} type="number" className="form-control" 
                                    onChange={(event) => {
                                    const providerFlatCharges = event.target.value;
                                      setChargedetails({...chargedetails, ...{ providerFlatCharges } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="transactionCharges">Transaction Charges</label>
                                <input name="transactionCharges" id="transactionCharges" defaultValue={item.transactionCharges} placeholder={item.transactionCharges} type="number" className="form-control" 
                                    onChange={(event) => {
                                      const transactionCharges = event.target.value;
                                      const id = item.id;
                                      setChargedetails({...chargedetails, ...{ transactionCharges, id } });
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
            <Button variant="danger" disabled={chargesLoading} onClick={handleSubmit}>Update Charge</Button>
            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
        // isLoading: state.loadingstate.isLoading,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            editcharge: (chargedetails, setNotify, successactiontype, failureactiontype, setShow, setChargesLoading) => {
                dispatch(CreateAction(chargedetails, setNotify, successactiontype, failureactiontype, setShow, setChargesLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditChargesModal);
  