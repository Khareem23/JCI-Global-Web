import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

    const ViewChargeModal = (props) => {
    const { editrate, setNotify, show, setShow, item, handleShowView } = props;
    
    useEffect(() => {
    }, [show]);

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
                    
                    </div>
                    <ul className="list-group list-group-flush">
                    

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Payment Type</div>
                            <div className="widget-subheading">{item.paymentType}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Provider Rate Charges</div>
                            <div className="widget-subheading">{item.providerRateCharges}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Provider Flat Charges</div>
                            <div className="widget-subheading">{item.providerFlatCharges}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Transaction Charges</div>
                            <div className="widget-subheading">{item.transactionCharges}</div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewChargeModal);
  