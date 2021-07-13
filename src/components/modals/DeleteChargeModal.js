import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { DeleteAction } from '../../redux/actions/deleteaction';

    const DeleteChargeModal = (props) => {
    const { deletecharge, setNotify, show, setShow, item, handleShowDelete, chargesLoading, setChargesLoading } = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        setChargesLoading(true);
        deletecharge(item.id, setNotify, ActionTypes.DELETE_CHARGES_SUCCESS, ActionTypes.DELETE_CHARGES_FAIL, setShow, setChargesLoading);
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
            <Modal.Title>Delete Charge</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                                <label htmlFor="exampleGender">Are you sure you want to Delete this Charge?</label>
                            </div>
                        </div>
                    </div>
                    
                   
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowDelete}>
                No
            </Button>
            <Button variant="danger" disabled={chargesLoading} onClick={handleSubmit}>Yes</Button>
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
            deletecharge: (chargeid, setNotify, successactiontype, failureactiontype, setShow, setChargesLoading) => {
                dispatch(DeleteAction(chargeid, setNotify, successactiontype, failureactiontype, setShow, setChargesLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeleteChargeModal);
  