import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { EditAction } from '../../redux/actions/editaction';

    const EditPromoModal = (props) => {
    const { editpromo, isLoading, setNotify, show, setShow, item, handleShowEdit } = props;
    const [promodetails, setPromodetails] = useState({});
    const handleSubmit = e => {
        e.preventDefault();        
        editpromo(promodetails, setNotify, ActionTypes.EDIT_PROMO_SUCCESS, ActionTypes.EDIT_PROMO_FAIL, handleShowEdit, setShow);
    };

    const processStatus = (type) => {
        if(type)
            return 'Active';
        else 
            return 'In-Active';
        
    }
    

    useEffect(() => {
    }, [show])

    return (
            <Modal
            show={show}
            onHide={handleShowEdit}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Edit Promo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                                                        
                            
                            <div className="col-md-6"> 
                                <label htmlFor="title">Title</label>
                                <input name="title" id="title" placeholder={item.title} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const title = event.target.value;
                                    setPromodetails({...promodetails, ...{ title } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="discountCode">Discount Code</label>
                                <input name="discountCode" id="discountCode" placeholder={item.discountCode} type="text" className="form-control" 
                                    onChange={(event) => {
                                    const discountCode = event.target.value;
                                    setPromodetails({...promodetails, ...{ discountCode } }); 
                                }}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            <div className="col-md-4"> 
                                <label htmlfor="startDate">Start Date</label>
                                <div className="position-relative form-group">
                                    <input name="date" id="startDate" placeholder={item.startDate} type="date" className="form-control" 
                                        onChange={(event) => {
                                            const startDate = event.target.value;
                                            setPromodetails({...promodetails, ...{ startDate } }); 
                                        }}/>
                                </div>
                            </div>

                            <div className="col-md-4"> 
                                <label htmlFor="exampleGender">Status</label>
                                <select type="select" 
                                    id="isActive" 
                                    name="isActive"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const isActive = event.target.value;
                                        setPromodetails({...promodetails, ...{ isActive } }); 
                                    }}>
                                    <option> -- Select Status -- </option>
                                     <option selected="selected" value={item.isActive}>{processStatus(item.isActive)}</option>
                                    <option value="true">Active</option>
                                    <option value="false">In-Active</option>
                                </select>
                            </div>
                            <div className="col-md-4"> 
                                <label htmlFor="bonusValue">Bonus Value</label>
                                <input name="bonusValue" id="bonusValue" placeholder={item.bonusValue} type="number" min="1" className="form-control" 
                                    onChange={(event) => {
                                    const bonusValue = event.target.value;
                                    const id = item.id;
                                    setPromodetails({...promodetails, ...{ bonusValue, id  } }); 
                                    
                                }}/>
                            </div>
                            

                             
                        </div>
                    </div>
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShowEdit}>
                Close
            </Button>
            <Button variant="danger" disabled={isLoading} onClick={handleSubmit} >Update Promo</Button>
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
            editpromo: (promodetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(promodetails));
                dispatch(EditAction(promodetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditPromoModal);
  