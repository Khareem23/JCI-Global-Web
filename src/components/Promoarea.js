import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ShowLoading } from '../redux/actions/authaction';
import { GetAction } from '../redux/actions/getaction';
import ActionTypes from "../redux/actiontype/ActionTypes"
import DeletePromoModal from './modals/DeletePromoModal';
import EditPromoModal from './modals/EditPromoModal';

const Promoarea = (props) => {
    const { createpromo, isLoading, setNotify, show, handleShow, setShow, fetchpromos, allpromos } = props;
    const [promos, setPromos] = useState({});
    useEffect(() => {
      fetchpromos(show, setNotify, ActionTypes.GET_PROMOS_SUCCESS, ActionTypes.GET_PROMOS_FAIL, setShow);
    }, []);

    useEffect(() => {
        if(allpromos !== undefined)
        {
            setPromos(allpromos);
        }
    }, [allpromos]);

    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleShowEdit = () => {
        setShowEdit(!showEdit);
    }
    const handleShowDelete = () => {
        setShowDelete(!showDelete);
    }

    const [item, setItem] = useState({});

    function handleEdit (item) {
        setShowEdit(true);
        setItem(item);
    }

    function handleDelete (item) {
        setShowDelete(true);
        setItem(item);
    }

    const processStatus = (type) => {
        if(type === true)
            return 'Active';
        else if(type === false)
            return 'In-Active';
        else return 'Others';
    }

    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr>
                        <td>{item.discountCode}</td>
                        <td>{item.title}</td>
                        <td>{item.bonusValue}</td>
                        <td>{processStatus(item.isActive)}</td>
                        <td><button className="mb-2 mr-2 btn btn-warning" onClick={() => handleEdit(item)}>Edit</button></td>
                        <td><button className="mb-2 mr-2 btn btn-danger" onClick={() => handleDelete(item)}>Delete</button></td>
                    </tr>
                </>
                )
            })
        }
    }

    

    return (
        <>

            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading" style={{marginLeft: 16}}>
                    <div>
                        <div className="page-title-head center-elem">
                        <span className="d-inline-block">Promo Management</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage all your promos</span>
                            </li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-xl-12">
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">                
                    <div className="widget-chat-wrapper-outer">
                        <div className="widget-chart-content pt-3 pl-3 pb-1">
                            <div className="form-row">
                                <div className="ml-auto" style={{marginRight: 15}}>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                        <span className="text-success pl-2">
                                            <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg" onClick={handleShow}>Create Promo</button>
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-card mb-3 card">
                <div className="card-body">
                    <table style={{width: '100%'}} id="example" className="table table-hover table-striped table-bordered">
                        <thead style={{textAlign: 'center'}}>
                            <tr>
                            <th>Discount Code</th>
                            <th>Title</th>
                            <th>Bonus Value</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign: 'center'}}>
                            {
                                renderrow(promos)
                            }
                            
                        </tbody>
                        <tfoot style={{textAlign: 'center'}}>
                            <tr>
                            <th>Discount Code</th>
                            <th>Title</th>
                            <th>Bonus Value</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        
            <EditPromoModal item={item} setNotify={setNotify} show={showEdit} handleEdit={handleEdit} setShow={setShowEdit} handleShowEdit={handleShowEdit} />
            <DeletePromoModal item={item} setNotify={setNotify} show={showDelete} handleDelete={handleDelete} setShow={setShowDelete} handleShowDelete={handleShowDelete} />
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        allpromos: state.allpromos.allpromos,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchpromos: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(ShowLoading(setNotify));
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Promoarea);
  

  
