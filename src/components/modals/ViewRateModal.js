import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

    const ViewRateModal = (props) => {
    const { editrate, setNotify, show, setShow, item, handleShowEdit } = props;
    
    useEffect(() => {
    }, [show]);

    const processRateType = (type) => {
        if(type === 0)
            return 'Live Rate';
        else if(type === 1)
            return 'Transaction Rate';
    }

    return (
            <Modal
            show={show}
            onHide={handleShowEdit}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Body>
            <div className="col-md-12" style={{marginTop: 15}}>
                <div className="card-shadow-primary profile-responsive card-border mb-7 card">
                    <div className="dropdown-menu-header">
                    
                    </div>
                    <ul className="list-group list-group-flush">
                    

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Rate Type</div>
                            <div className="widget-subheading">{processRateType(item.rateType)}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Currency Description</div>
                            <div className="widget-subheading">{item.currencyDesc}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Send Currency Code</div>
                            <div className="widget-subheading">{item.sendCurrencyCode}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Receive Currency Code</div>
                            <div className="widget-subheading">{item.receiveCurrencyCode}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Amount</div>
                            <div className="widget-subheading">{item.amount}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Amount_NGA USD</div>
                            <div className="widget-subheading">{item.amount_NgaUSD}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    
                    </ul>
                </div>
            </div>    
                    
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="danger" onClick={handleShowEdit}>Close</Button>
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
            
        }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewRateModal);
  