import React, {useState, useEffect} from 'react';
import { CreateAction } from '../../redux/actions/createaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

    const AddRatesModal = (props) => {
    const {createrate, setNotify, show, handleShow, setShow, ratesLoading, setRatesLoading } = props;
    const [ratedetails, setRatedetails] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setRatesLoading(true);
        createrate(ratedetails, setNotify, ActionTypes.ADD_RATE_SUCCESS, ActionTypes.ADD_RATE_FAIL, setShow, setRatesLoading);
    };

    useEffect(() => {
    }, [show]);

    return (
            <Modal
            show={show}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Add New Rate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Rate Type</label>
                                <select type="select" 
                                    id="rateType" 
                                    name="rateType"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const rateType = event.target.value;
                                        setRatedetails({...ratedetails, ...{ rateType } }); 
                                    }}>
                                    <option> Select Rate Type </option>
                                    <option value="0">Live Rate</option>
                                    <option value="1">Transaction Rate</option>
                                </select>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="currencyDesc">Currency Description</label>
                                <input name="currencyDesc" id="currencyDesc" placeholder="Currency Description" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const currencyDesc = event.target.value;
                                    setRatedetails({...ratedetails, ...{ currencyDesc } }); 
                                }}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="sendCurrencyCode">Send Currency Code</label>
                                
                                <input name="sendCurrencyCode" id="sendCurrencyCode" placeholder="Send Currency Code" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const sendCurrencyCode = event.target.value;
                                    setRatedetails({...ratedetails, ...{ sendCurrencyCode } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="receiveCurrencyCode">Receive Currency Code</label>
                                <input name="receiveCurrencyCode" id="receiveCurrencyCode" placeholder="Receive Currency Code" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const receiveCurrencyCode = event.target.value;
                                    setRatedetails({...ratedetails, ...{ receiveCurrencyCode } }); 
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="amount">Amount</label>
                                <input name="amount" id="amount" placeholder="Amount" type="number" className="form-control" 
                                    onChange={(event) => {
                                    const amount = event.target.value;
                                    setRatedetails({...ratedetails, ...{ amount } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="amount_NgaUSD">Amount NGA USD</label>
                                <input name="amount_NgaUSD" id="amount_NgaUSD" placeholder="Amount NGA USD" type="number" className="form-control" 
                                    onChange={(event) => {
                                    const amount_NgaUSD = event.target.value;
                                    setRatedetails({...ratedetails, ...{ amount_NgaUSD } }); 
                                }}/>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Active Status</label>
                                <select type="select" 
                                    id="isActive" 
                                    name="isActive"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const isActive = event.target.value;
                                        setRatedetails({...ratedetails, ...{ isActive } }); 
                                    }}>
                                    <option> -- Select Status -- </option>                                    
                                    <option value="true">Active</option>
                                    <option value="false">In-Active</option>
                                   

                                </select>
                            </div>

                            <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Display USD </label>
                                <select type="select" 
                                    id="isUSDDisplay" 
                                    name="isUSDDisplay"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const isUSDDisplay = event.target.value;
                                        setRatedetails({...ratedetails, ...{ isUSDDisplay } }); 
                                    }}>
                                    <option> -- Select Display -- </option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
                Close
            </Button>
            <Button variant="danger" onClick={handleSubmit} disabled={ratesLoading}>Add Rate</Button>
            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            createrate: (ratedetails, setNotify, successactiontype, failureactiontype, setShow, setRatesLoading) => {
                dispatch(CreateAction(ratedetails, setNotify, successactiontype, failureactiontype, setShow, setRatesLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddRatesModal);
  