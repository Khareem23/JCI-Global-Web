import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const EditPromoModal = (props) => {
    const { editpromo, isLoading, setNotify, show, setShow, item, handleShowEdit } = props;
    const [promodetails, setPromodetails] = useState({});
    const handleSubmit = e => {
        e.preventDefault();        
        editpromo(promodetails, setNotify, ActionTypes.EDIT_PROMO_SUCCESS, ActionTypes.EDIT_PROMO_FAIL, handleShowEdit, setShow);
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
            <Modal.Title>Edit Promo</Modal.Title>
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
                                        setPromodetails({...promodetails, ...{ paymentType } }); 
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
                                    setPromodetails({...promodetails, ...{ providerRateCharges } }); 
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
                                    setPromodetails({...promodetails, ...{ providerFlatCharges } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="transactionCharges">Transaction Charges</label>
                                <input name="transactionCharges" id="transactionCharges" placeholder={item.transactionCharges} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const transactionCharges = event.target.value;
                                    setPromodetails({...promodetails, ...{ transactionCharges } }); 
                                      const id = item.id;
                                      setPromodetails({...promodetails, ...{ id } });
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
            <Button variant="danger" disabled={isLoading} onClick={handleSubmit} >Update Promo</Button>
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
            editpromo: (promodetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(promodetails));
                dispatch(EditAction(promodetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditPromoModal);
  