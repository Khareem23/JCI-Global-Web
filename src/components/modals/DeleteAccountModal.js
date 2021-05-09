import React, {useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { DeleteAction } from '../../redux/actions/deleteaction';

    const DeleteAccountModal = (props) => {
    const { deleteaccount, isLoading, setNotify, show, setShow, item, handleShowDelete } = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        deleteaccount(item.id, setNotify, ActionTypes.DELETE_BANK_SUCCESS, ActionTypes.DELETE_BANK_FAIL, setShow);
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
            <Button variant="danger" disabled={isLoading} onClick={handleSubmit} >Yes</Button>
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
            deleteaccount: (accountid, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(accountid));
                dispatch(DeleteAction(accountid, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeleteAccountModal);
  