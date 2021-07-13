import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { CreateAction } from '../../redux/actions/createaction';

    const DeleteRateModal = (props) => {
    const { deleterate, isLoading, setNotify, show, setShow, item, handleShowDelete, ratesLoading, setRatesLoading } = props;
    
    const handleSubmit = e => {
        e.preventDefault();
        setRatesLoading(true);
        deleterate(item.id, setNotify, ActionTypes.DELETE_RATE_SUCCESS, ActionTypes.DELETE_RATE_FAIL, setShow, setRatesLoading);
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
            <Modal.Title>Delete Rate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-12"> 
                                <label htmlFor="exampleGender">Are you sure you want to Delete this Rate?</label>
                            </div>
                        </div>
                    </div>
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowDelete}>
                No
            </Button>
            <Button variant="danger" disabled={ratesLoading} onClick={handleSubmit} >Yes</Button>
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
            deleterate: (rateid, setNotify, successactiontype, failureactiontype, setShow, setRatesLoading) => {
                dispatch(CreateAction(rateid, setNotify, successactiontype, failureactiontype, setShow, setRatesLoading)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(DeleteRateModal);
  