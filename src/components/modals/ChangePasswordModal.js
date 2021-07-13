import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const ChangePasswordModal = (props) => {
    const { setNotify, show, setShowPassword, handleShowPassword, editpassword, authstate } = props;
    
    const [pwddetails, setPwddetails] = useState({});
    const [cpwdLoading, setCpwdLoading] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();     
        if(pwddetails.newPassword !== undefined && pwddetails.confirmPassword !== undefined ) {
            if(pwddetails.newPassword === pwddetails.confirmPassword)
            {
                setCpwdLoading(true);
                editpassword(pwddetails.newPassword, setNotify, ActionTypes.UPDATE_PASSWORD_SUCCESS, ActionTypes.UPDATE_PASSWORD_FAIL, handleShowPassword, setShowPassword, setCpwdLoading);
            } else {
                setNotify({
                    isOpen: true,
                    message: "Passwords does not match!",
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
        setPwddetails({...pwddetails, ...{ id } });
    }, []);


    useEffect(() => {
    }, [show])

    return (
            <Modal
            show={show}
            onHide={handleShowPassword}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                                <label htmlFor="sendCurrencyCode">New Password</label>
                                <input name="newPassword" id="newPassword" placeholder="New Password" type="password" className="form-control" 
                                    onChange={(event) => {
                                    const newPassword = event.target.value;
                                    setPwddetails({...pwddetails, ...{ newPassword } }); 
                                }}/>
                            </div>                 
                        </div>
                    </div>

                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                        <div className="col-md-12"> 
                                <label htmlFor="sendCurrencyCode">Confirm Password</label>
                                <input name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" type="password" className="form-control" 
                                    onChange={(event) => {
                                    const confirmPassword = event.target.value;
                                    setPwddetails({...pwddetails, ...{ confirmPassword } }); 
                                }}/>
                            </div>                   
                        </div>
                    </div>
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowPassword}>
                Close
            </Button>

            <Button variant="danger" disabled={cpwdLoading} onClick={handleSubmit}> Update Password </Button>

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
        editpassword: (pwddetails, setNotify, successactiontype, failureactiontype, setShow, setCpwdLoading) => {
            dispatch(EditAction(pwddetails, setNotify, successactiontype, failureactiontype, setShow, setCpwdLoading));
        },
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordModal);
  