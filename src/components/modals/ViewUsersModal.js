import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const ViewUsersModal = (props) => {
    const { editrate, setNotify, show, setShow, item, handleShowView } = props;
    const [ratedetails, setRatedetails] = useState({});
   
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
                        <div className="avatar-icon-wrapper mr-2 avatar-icon-xl">
                            <div className="avatar-icon">
                            <img src="assets/images/user.jpg" alt="Avatar 5" />
                            </div>
                        </div>
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
                            <div className="widget-heading">Email</div>
                            <div className="widget-subheading">{item.email}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Phone Number</div>
                            <div className="widget-subheading">{item.phoneNumber}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Address</div>
                            <div className="widget-subheading">{item.address}, {item.city}, {item.state}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    
                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Gender</div>
                            <div className="widget-subheading">{item.gender}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                            <div className="widget-heading">Date Created</div>
                            <div className="widget-subheading">{item.createdDate?.substring(0,10)}</div>
                            </div>
                        </div>
                        </div>
                    </li>

                    
                    </ul>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            
            <Button variant="danger" onClick={handleShowView} >Close</Button>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ViewUsersModal);
  