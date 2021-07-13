import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CreateAction } from '../../redux/actions/createaction';

    const DeletePromoModal = (props) => {
    const { deletepromo, setNotify, show, setShow, item, handleShowDelete, addPromoLoading, setAddPromoLoading } = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        setAddPromoLoading(true);
        deletepromo(item.id, setNotify, ActionTypes.DELETE_PROMO_SUCCESS, ActionTypes.DELETE_PROMO_FAIL, setShow, setAddPromoLoading);
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
            <Modal.Title>Delete Promo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                                <label htmlFor="exampleGender">Are you sure you want to Delete this Promo?</label>
                            </div>
                        </div>
                    </div>
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowDelete}>
                No
            </Button>
            <Button variant="danger" disabled={addPromoLoading} onClick={handleSubmit} >Yes</Button>
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
            deletepromo: (promoid, setNotify, successactiontype, failureactiontype, setShow, setIsLoading) => {
                dispatch(CreateAction(promoid, setNotify, successactiontype, failureactiontype, setShow, setIsLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeletePromoModal);
  