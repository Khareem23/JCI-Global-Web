import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { GetAction } from '../redux/actions/getaction';
import ActionTypes from '../redux/actiontype/ActionTypes';
import ViewUsersModal from './modals/ViewUsersModal';


const Usersarea = (props) => {
    const { setNotify, show, setShow, fetchallusers, allusers, handleShow } = props;
    const [users, setUsers] = useState({});
    const [item, setItem] = useState({});
    const [exportdetails, setExportdetails] = useState({});
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        fetchallusers(show, setNotify, ActionTypes.FETCH_ALL_USERS_SUCCESS, ActionTypes.FETCH_ALL_USERS_FAIL, setShow);
    }, []);

    useEffect(() => {
        if(allusers !== undefined)
        {            
            setUsers(allusers);
        }
    }, [allusers]);

    const processStatus = (type) => {
        if(type === true)
            return 'Active';
        else if(type === false)
            return 'In-Active';
        else return 'Others';
    }

    const handleShowEdit = () => {
        setShowEdit(!showEdit);
    }

    function viewUser (item) {
        setShowEdit(true);
        setItem(item);
    }

    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr style={{textAlign: 'center'}}>
                        <td>{item.email}</td>
                        <td>{item.firstName} {item.lastName}</td>
                        <td>{processStatus(item.isActive)}</td>
                        <td>{item.createdDate.substring(0, 10)}</td>
                        <td> <button className="btn-wide btn btn-danger" onClick={() => { viewUser(item)}}>View</button> </td>
                        
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
                    <div className="page-title-heading">
                    <div>
                        <div className="page-title-head center-elem">
                        {/* <span className="d-inline-block pr-2">
                            <i className="lnr-apartment icon-gradient bg-mean-fruit" />
                        </span> */}
                        <span className="d-inline-block">User Management & Verification</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage users and their verifications</span>
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
                            <div className="widget-chart-flex">
                                <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                    <div className="fsize-4">
                                    <span>User Search</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <h6 className="widget-subheading mb-0 opacity-5" style={{fontSize: 12}}>You can seat for any user here...</h6>

                            <div className="form-row">
                                
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                    <label htmlFor="exampleEmail" style={{ marginTop: 30}}>Enter Email</label>
                                    <input name="email" id="exampleEmail" placeholder="Email" type="email" className="form-control" 
                                            
                                    />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group">
                                    <label htmlFor="exampleCustomSelect" style={{marginTop: 30}}>View Total Users In a Country</label>
                                    <select type="select" id="exampleCustomSelect" name="customSelect" className="custom-select">
                                        <option value>Select Country</option>
                                        <option>Nigeria</option>
                                        <option>Algeria</option>
                                        <option>Ghana</option>
                                        <option>Egypt</option>
                                        <option>South Africa</option>
                                    </select>
                                    </div>

                                    <div className="row">
                                        <div style={{marginLeft: 8}}>
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide btn btn-danger">View All</button>
                                                    </span>
                                            </div>
                                        </div>
                                        <div className="ml-auto" style={{marginRight: 15}}>
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide btn btn-danger">Update</button>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="form-check" style={{marginLeft: 7, marginTop: -20}}>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">View Only Unverified Customer</label>
                                </div>

                            </div>
                           
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-card mb-3 card">
                <div className="card-body">
                    <table style={{width: '100%'}} id="example" className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                            <th>Email Address</th>
                            <th>Full Name</th>
                            <th>Verification Status</th>
                            <th>Date Created</th>
                            <th>User Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderrow(users)
                            }
                        </tbody>
                        <tfoot>
                        <tr style={{textAlign: 'center'}}>
                        <th>Email Address</th>
                            <th>Full Name</th>
                            <th>Verification Status</th>
                            <th>Date Created</th>
                            <th>User Action</th>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>
            
            <ViewUsersModal item={item} show={showEdit} setShow={setShowEdit} handleShowEdit={handleShowEdit} />
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        allusers: state.allusers.allusers,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchallusers: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Usersarea);