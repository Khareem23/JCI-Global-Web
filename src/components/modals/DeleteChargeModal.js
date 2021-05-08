import React, {useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { DeleteAction } from '../../redux/actions/deleteaction';

    const DeleteChargeModal = (props) => {
    const { deletecharge, isLoading, setNotify, show, setShow, item, handleShowDelete } = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        deletecharge(item.id, setNotify, ActionTypes.DELETE_CHARGES_SUCCESS, ActionTypes.DELETE_CHARGES_FAIL, setShow);
    };

    useEffect(() => {
        // console.log(JSON.stringify(item))
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
            deletecharge: (chargeid, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(chargeid));
                dispatch(DeleteAction(chargeid, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeleteChargeModal);
  