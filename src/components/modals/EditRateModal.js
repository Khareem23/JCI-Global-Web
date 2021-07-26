import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CreateAction } from '../../redux/actions/createaction';

    const EditRateModal = (props) => {
    const { editrate, setNotify, show, setShow, item, handleShowEdit, ratesLoading, setRatesLoading } = props;
    const [ratedetails, setRatedetails] = useState({});
    const handleSubmit = e => {
        e.preventDefault();        
        setRatesLoading(true);
        editrate(ratedetails, setNotify, ActionTypes.EDIT_RATE_SUCCESS, ActionTypes.EDIT_RATE_FAIL, setShow, setRatesLoading);
    };

    const processStatus = (type) => {
        if(type)
            return 'Active';
        else 
            return 'In-Active';
    }

    useEffect(() => {
        if(Object.keys(item).length !== 0) {
            let id = item.id;
            let amount = item.amount;
            let amount_NgaUSD = item.amount_NgaUSD;
            let currencyDesc = item.currencyDesc;
            let isActive = item.isActive;
            let isUSDDisplay = item.isUSDDisplay;
            let rateType = item.rateType;
            let receiveCurrencyCode = item.receiveCurrencyCode;
            let sendCurrencyCode = item.sendCurrencyCode;
            setRatedetails({...ratedetails, ...{ id, amount, amount_NgaUSD, currencyDesc, isActive, isUSDDisplay, rateType, receiveCurrencyCode, sendCurrencyCode } });
        }
    }, [item])
    

    const processDisplay = (type) => {
        
        if(type)
            return 'Yes';
        else
            return 'No';
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
            <Modal.Title>Edit Rate</Modal.Title>
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
                                    <option selected="selected" value={item.rateType}>{item.rateType}</option>
                                    <option value="LiveRate">LiveRate</option>
                                    <option value="TransactionRate">TransactionRate</option>
                                </select>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="currencyDesc">Currency Description</label>
                                <input name="currencyDesc" id="currencyDesc" placeholder={item.currencyDesc} defaultValue={item.currencyDesc} type="text" className="form-control" 
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
                                
                                <input name="sendCurrencyCode" id="sendCurrencyCode" defaultValue={item.sendCurrencyCode} placeholder={item.sendCurrencyCode} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const sendCurrencyCode = event.target.value;
                                    const id = item.id;
                                    setRatedetails({...ratedetails, ...{ sendCurrencyCode , id} }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="receiveCurrencyCode">Receive Currency Code</label>
                                <input name="receiveCurrencyCode" id="receiveCurrencyCode" defaultValue={item.receiveCurrencyCode} placeholder={item.receiveCurrencyCode} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const receiveCurrencyCode = event.target.value;
                                    setRatedetails({...ratedetails, ...{ receiveCurrencyCode } }); 
                                }}/>
                            </div>

                            {/* <div className="col-md-4"> 
                                <label htmlFor="bonusValue">Bonus Value</label>
                                <input name="bonusValue" id="bonusValue" placeholder={item.bonusValue} type="number" min="1" className="form-control" 
                                    onChange={(event) => {
                                    const bonusValue = event.target.value;
                                    const id = item.id;
                                    setRatedetails({...ratedetails, ...{ bonusValue, id  } }); 
                                    
                                }}/>
                            </div> */}                             
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-6"> 
                                <label htmlFor="amount">Amount</label>
                                <input name="amount" id="amount" placeholder={item.amount} defaultValue={item.amount} type="number" className="form-control" 
                                    onChange={(event) => {
                                    const amount = event.target.value;
                                    setRatedetails({...ratedetails, ...{ amount } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="amount_NgaUSD">Amount NGA USD</label>
                                <input name="amount_NgaUSD" id="amount_NgaUSD" placeholder={item.amount_NgaUSD} defaultValue={item.amount_NgaUSD}  type="number" className="form-control" 
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
                                    <option selected="selected" value={item.isActive}>{processStatus(item.isActive)}</option>
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
                                    <option selected="selected" value={item.isUSDDisplay}>{processDisplay(item.isUSDDisplay)}</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                   
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowEdit}>
                Close
            </Button>
            <Button variant="danger" disabled={ratesLoading} onClick={handleSubmit}>Update Rate</Button>
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
            editrate: (ratedetails, setNotify, successactiontype, failureactiontype, setShow, setRatesLoading) => {
                dispatch(CreateAction(ratedetails, setNotify, successactiontype, failureactiontype, setShow, setRatesLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditRateModal);
  