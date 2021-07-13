import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const EditRateModal = (props) => {
    const { editrate, isLoading, setNotify, show, setShow, item, handleShowEdit } = props;
    const [ratedetails, setRatedetails] = useState({});
    const handleSubmit = e => {
        e.preventDefault();        
        editrate(ratedetails, setNotify, ActionTypes.EDIT_RATE_SUCCESS, ActionTypes.EDIT_RATE_FAIL, handleShowEdit, setShow);
    };

    const processStatus = (type) => {
        if(type)
            return 'Active';
        else 
            return 'In-Active';
        
    }
    

    const processRateType = (type) => {
        if(type === 0)
            return 'Live Rate';
        else if(type === 1)
            return 'Transaction Rate';
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
                                    <option selected="selected" value={item.rateType}>{processRateType(item.rateType)}</option>
                                    <option value="0">Live Rate</option>
                                    <option value="1">Transaction Rate</option>
                                </select>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="currencyDesc">Currency Description</label>
                                <input name="currencyDesc" id="currencyDesc" placeholder={item.currencyDesc} type="text" className="form-control" 
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
                                
                                <input name="sendCurrencyCode" id="sendCurrencyCode" placeholder={item.sendCurrencyCode} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const sendCurrencyCode = event.target.value;
                                    const id = item.id;
                                    setRatedetails({...ratedetails, ...{ sendCurrencyCode , id} }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="receiveCurrencyCode">Receive Currency Code</label>
                                <input name="receiveCurrencyCode" id="receiveCurrencyCode" placeholder={item.receiveCurrencyCode} type="text" className="form-control" 
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
                                <input name="amount" id="amount" placeholder={item.amount} type="number" className="form-control" 
                                    onChange={(event) => {
                                    const amount = event.target.value;
                                    setRatedetails({...ratedetails, ...{ amount } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="amount_NgaUSD">Amount NGA USD</label>
                                <input name="amount_NgaUSD" id="amount_NgaUSD" placeholder={item.amount_NgaUSD} type="number" className="form-control" 
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
                                    <option selected="selected" value={item.isUSDDisplay}>{item.isUSDDisplay}</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
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
            <Button variant="danger" disabled={isLoading} onClick={handleSubmit} >Update Rate</Button>
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
            editrate: (ratedetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(ratedetails));
                dispatch(EditAction(ratedetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditRateModal);
  