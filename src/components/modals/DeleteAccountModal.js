import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CreateAction } from '../../redux/actions/createaction';

    const DeleteAccountModal = (props) => {
    const { deleteaccount, setNotify, show, setShow, item, handleShowDelete, addaccountLoading, setAddAccountLoading } = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        setAddAccountLoading(true);
        deleteaccount(item.id, setNotify, ActionTypes.DELETE_BANK_SUCCESS, ActionTypes.DELETE_BANK_FAIL, setShow, setAddAccountLoading);
    };

    useEffect(() => {
    }, [show])

    return (
            <Modal
            show={show}
            onHide={handleShowDelete}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Delete Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                                <label htmlFor="exampleGender">Are you sure you want to delete this Account?</label>
                            </div>
                        </div>
                    </div>
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowDelete}>
                No
            </Button>
            <Button variant="danger" disabled={addaccountLoading} onClick={handleSubmit} >Yes</Button>
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
            deleteaccount: (accountid, setNotify, successactiontype, failureactiontype, setShow, setAddAccountLoading) => {
                // dispatch(ShowLoading(accountid));
                dispatch(CreateAction(accountid, setNotify, successactiontype, failureactiontype, setShow, setAddAccountLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccountModal);
  