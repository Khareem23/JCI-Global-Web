import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const ChangePinModal = (props) => {
    const { setNotify, show, setShowPin, handleShowPin, editpinaction, authstate } = props;
    const [pindetails, setPindetails] = useState({});
    const [cpinLoading, setCpinLoading] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();     
        if(pindetails.newPin !== undefined && pindetails.confirmPin !== undefined ) {
            if(pindetails.newPin === pindetails.confirmPin)
            {
                setCpinLoading(true);
                editpinaction(pindetails.newPin, setNotify, ActionTypes.UPDATE_PIN_SUCCESS, ActionTypes.UPDATE_PIN_FAIL, setShowPin, setCpinLoading);
            } else {
                setNotify({
                    isOpen: true,
                    message: "Pins does not match!",
                    type: 'error',
                });
            }
        } else {
            setNotify({
                isOpen: true,
                message: "Kindly supply all required data!",
                type: 'error',
            });
        }
        
    };

    useEffect(() => {
        let id = authstate.nameid;
        setPindetails({...pindetails, ...{ id } });
    }, []);

    useEffect(() => {
    }, [show])

    return (
            <Modal
            show={show}
            onHide={handleShowPin}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Change PIN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                                <label htmlFor="newPin">New Pin</label>
                                <input name="newPin" id="newPin" placeholder="New Pin" type="password" className="form-control" 
                                    onChange={(event) => {
                                    const newPin = event.target.value;
                                    setPindetails({...pindetails, ...{ newPin } }); 
                                }}/>
                            </div>                 
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                        <div className="col-md-12"> 
                                <label htmlFor="confirmPin">Confirm Pin</label>
                                <input name="confirmPin" id="confirmPin" placeholder="Confirm Pin" type="password" className="form-control" 
                                    onChange={(event) => {
                                    const confirmPin = event.target.value;
                                    setPindetails({...pindetails, ...{ confirmPin } }); 
                                }}/>
                            </div>                   
                        </div>
                    </div>
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowPin}>
                Close
            </Button>

            <Button variant="danger" disabled={cpinLoading} onClick={handleSubmit}> Update Pin </Button>

            </Modal.Footer>
            </Modal>
            
    )
}

const mapStateToProps = (state) => {
    return {
        authstate: state.authstate.authstate,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            editpinaction: (pindetails, setNotify, successactiontype, failureactiontype, setShow, setCpinLoading) => {
                // dispatch(ShowLoading(ratedetails));
                dispatch(EditAction(pindetails, setNotify, successactiontype, failureactiontype, setShow, setCpinLoading));
            },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChangePinModal);
  