import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

    const ViewTransactionModal = (props) => {
    const {show, item, handleShowView } = props;
   
    useEffect(() => {
    }, [show])
    
    return (
            <Modal
            show={show}
            onHide={handleShowView}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Body>

            <div className="col-md-12" style={{marginTop: 15}}>
                <div className="card-shadow-primary profile-responsive card-border mb-7 card">
                    <div className="dropdown-menu-header">
                    <div className="dropdown-menu-header-inner bg-danger">
                        <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/abstract1.jpg")'}} />
                        <div className="menu-header-content btn-pane-right">
                        {/* <div className="avatar-icon-wrapper mr-2 avatar-icon-xl">
                            <div className="avatar-icon">
                            <img src="assets/images/user.jpg" alt="Avatar 5" />
                            </div>
                        </div> */}
                        <div>
                            <h5 className="menu-header-title">{item.firstName} {item.lastName}</h5>
                            <h6 className="menu-header-subtitle">{item.userRole}</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                    <ul className="list-group list-group-flush">
                    
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">FullName</div>
                            <div className="widget-subheading">{item.fullName}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Sender Email</div>
                            <div className="widget-subheading">{item.senderEmail}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Transaction Reference Number</div>
                            <div className="widget-subheading">{item.transactionRefNumber}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Transaction Type</div>
                            <div className="widget-subheading">{item.transactionType}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Sendeing From - Receiving From</div>
                            <div className="widget-subheading">{item.sendingCountry} - {item.receivingCountry}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Amount To Send</div>
                            <div className="widget-subheading">{item.amountToSend}</div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Amount To Charge</div>
                            <div className="widget-subheading">{item.amountToCharge}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Amount To Receive</div>
                            <div className="widget-subheading">{item.amountToReceive}</div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Pay In Method</div>
                            <div className="widget-subheading">{item.payInMethod}</div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Date Sent</div>
                            <div className="widget-subheading">{item.dateSent?.substring(0,10)}</div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Transaction Status</div>
                            <div className="widget-subheading">{item.transactionStatus}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Exchange Rate</div>
                            <div className="widget-subheading">{item.exchangeRate}</div>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Payment Purpose</div>
                            <div className="widget-subheading">{item.paymentPurpose}</div>
                            </div>
                        </div>
                        </div>
                    </li>                    
                    </ul>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="danger" onClick={handleShowView}>Close</Button>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewTransactionModal);
  