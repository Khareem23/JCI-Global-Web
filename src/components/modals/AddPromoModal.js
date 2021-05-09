import React, {useState, useEffect} from 'react';
import { ShowLoading } from '../../redux/actions/authaction';
import { CreateAction } from '../../redux/actions/createaction';
import { connect } from 'react-redux';
import ActionTypes from "../../redux/actiontype/ActionTypes"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

    const AddPromoModal = (props) => {
    const { createpromo, isLoading, setNotify, show, handleShow, setShow } = props;
    const [promodetails, setPromodetails] = useState({});
    const handleSubmit = e => {
        e.preventDefault();
        createpromo(promodetails, setNotify, ActionTypes.ADD_PROMO_SUCCESS, ActionTypes.ADD_PROMO_FAIL, handleShow, setShow);
    };

    useEffect(() => {
        console.log("Valued Changed " + show);
    }, [show]);

    return (

            <Modal
            show={show}
            onHide={handleShow}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
            <Modal.Title>Add New Promo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                    <div className="col-md-12 position-relative form-group">
                        <div className="form-row">
                            {/* <div className="col-md-6"> 
                                <label htmlFor="exampleGender">Title</label>
                                <select type="select" 
                                    id="title" 
                                    name="title"
                                    className="mb-2 form-control"
                                    onChange={(event) => {
                                        const title = event.target.value;
                                        setPromodetails({...promodetails, ...{ title } }); 
                                    }}>
                                    <option> Choose Title </option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Chief">Chief</option>
                                </select>

                                // "id": 0,
                                // "title": "Sallah Promo",
                                // "discountCode": "DIS234098666",
                                // "bonusValue": 6.2,
                                // "startDate": "2021-05-02T14:59:20.062Z",
                                // "isActive": false

                            </div> */}
                            <div className="col-md-6"> 
                                <label htmlFor="title">Title</label>
                                <input name="title" id="title" placeholder="Title" type="text" className="form-control" 
                                    onChange={(event) => {
                                    const title = event.target.value;
                                    setPromodetails({...promodetails, ...{ title } }); 
                                }}/>
                            </div>
                            
                            <div className="col-md-6"> 
                                <label htmlFor="discountCode">Discount Code</label>
                                <input name="discountCode" id="discountCode" placeholder="Discount Code" type="text" className="form-control" 
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
                                
                                    <input name="date" id="startDate" placeholder="Start Date" type="date" className="form-control" 
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
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                            <div className="col-md-4"> 
                                <label htmlFor="bonusValue">Bonus Value</label>
                                <input name="bonusValue" id="bonusValue" placeholder="Bonus Value" type="number" min="1" className="form-control" 
                                    onChange={(event) => {
                                    const bonusValue = event.target.value;
                                    setPromodetails({...promodetails, ...{ bonusValue } }); 
                                }}/>
                            </div>

                        </div>
                    </div>
                      
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
                Close
            </Button>
            <Button variant="danger" onClick={handleSubmit} disabled={isLoading} >Add Promo</Button>
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
            createpromo: (promodetails, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(promodetails));
                dispatch(CreateAction(promodetails, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddPromoModal);
  