import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { GetAction } from '../redux/actions/getaction';
import ActionTypes from '../redux/actiontype/ActionTypes';
import generatePDF from '../utils/reportGenerator';
import $ from 'jquery';
import DataTable from 'datatables.net';
import ViewTransactionModal from './modals/ViewTransactionModal';
import EditTransactionModal from './modals/EditTransactionModal';


const Transactionsarea = (props) => {
    const { setNotify, show, setShow, fetchalltransactions, alltransactions} = props;
    const [transactions, setTransactions] = useState({});
    const [exportdetails, setExportdetails] = useState({});
    const [item, setItem] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const [showView, setShowView] = useState(false);

    const [editTransactionLoading, setEditTransactionLoading] = useState(false)
    
    useEffect(()=>{
        $(document).ready(function(){
            $('#examtable').DataTable({responsive:!0})
        })
    },[])

    useEffect(() => {
        
        fetchalltransactions(show, setNotify, ActionTypes.FETCH_ALL_TRANSACTION_SUCCESS, ActionTypes.FETCH_ALL_TRANSACTION_FAIL, setShow);
    }, []);

    useEffect(() => {
        if(alltransactions !== undefined)
        {            
            setTransactions(alltransactions);
        }
    }, [alltransactions]);

    const returndate = (nmdate) => {
        let sdate = new Date(nmdate);
        return sdate
    }

    const exportReport = () => {
        const typetransactions = transactions !== undefined ? transactions.filter(
            ({transactionType }) => transactionType !== null ? transactionType.toLowerCase().indexOf(exportdetails.transType.toLowerCase()) > -1 : {}) : []

        const finalfil = typetransactions.filter(
            user => (returndate(user.dateSent.substring(0, 10)).getTime()) >= returndate(exportdetails.startDate.toLowerCase()).getTime() && (returndate(user.dateSent.substring(0, 10)).getTime()) <=  returndate(exportdetails.endDate.toLowerCase()).getTime()
        )

        //calling the generate report function
        generatePDF(finalfil);
    }

    const handleShowEdit = () => {
        setShowEdit(!showEdit);
    }

    const handleShowView = () => {
        setShowView(!showView);
    }

    function viewUser (item) {
        setShowView(true);
        setItem(item);
    }

    function editUser (item) {
        setShowEdit(true);
        setItem(item);
    }

    const renderrow = (items) => {
        if(Object.keys(items).length !== 0) {
            return items.map((item, i) => {
                return (
                <>
                    <tr>
                        <td>{item.transactionRefNumber}</td>
                        <td>{item.amountToSend}</td>
                        <td>{item.amountToReceive}</td>
                        <td>{item.amountToCharge}</td>
                        <td>{item.exchangeRate}</td>
                        <td>{item.payInMethod}</td>
                        <td>{item.transactionStatus}</td>
                        <td>{item.transactionType}</td>
                        <td> <button className="btn-wide btn btn-danger" onClick={() => { viewUser(item)}}>View</button> </td>
                        <td> <button className="btn-wide btn btn-danger" onClick={() => { editUser(item)}}>Edit</button> </td>
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
                        <span className="d-inline-block">Transaction Management & Verification</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage all your transactions and process them</span>
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
                                    <span>Searching</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="form-row">
                                
                            <div className="col-md-5">
                                    <div className="position-relative form-group">
                                    <input name="refnumber" id="exampleRef" placeholder="Enter Ref Number" type="text" className="form-control" 
                                            
                                    />
                                    </div>
                                    <div className="row">
                                        
                                        <div className="ml-auto" style={{marginRight: 15}}>
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide btn btn-danger">Find Now</button>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-md-1">

                                </div>
                                <div className="col-md-6">
                                    <div className="position-relative form-group col-md-10">
                                    <select type="select" id="exampleCustomSelect" name="customSelect" className="custom-select">
                                        <option value="">Transaction Type</option>
                                        <option value="Buy">Buy</option>
                                        <option value="Sell">Sell</option>
                                    </select>
                                    </div>

                                    <div className="row ">
                                        <div className="ml-auto" style={{marginRight: 0, marginTop: -52}}>
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg">View All</button>
                                                    </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-check" style={{marginLeft: 15, marginTop: -2}}>
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">View Only Unprocessed Transactions</label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>                
                </div>



                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                    
                <div className="widget-chat-wrapper-outer">
                        <div className="widget-chart-content pt-3 pl-3 pb-1">
                            <div className="widget-chart-flex">
                                <div className="widget-numbers">
                                <div className="widget-chart-flex">
                                    <div className="fsize-4">
                                    <span>Reporting</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="form-row">
                                
                            <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                               
                                {/* <div className="col-md-3"> 
                                    <label htmlFor="exampleGender">Currency List</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">Select Currency</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div> */}
                                
                               
                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender">Transaction Type</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"

                                        onChange={(event) => {
                                            const transType = event.target.value;
                                            setExportdetails({...exportdetails, ...{ transType } }); 
                                        }}

                                        >
                                        <option value="">Transaction Type</option>
                                        <option value="Buy">Buy</option>
                                        <option value="Sell">Sell</option>
                                    </select>
                                </div>
                                <div className="col-md-3"> 
                                    <label htmlfor="exampleDate">From Date</label>
                                    <div className="position-relative form-group">
                                        <input name="startDate"  id="exampleDate" placeholder="date placeholder" type="date" className="form-control"
                                            onChange={(event) => {
                                                const startDate = event.target.value;
                                                setExportdetails({...exportdetails, ...{ startDate } }); 
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-3"> 
                                    <label htmlfor="exampleDate">To Date</label>
                                    <div className="position-relative form-group">
                                        <input name="endDate" id="exampleDate" placeholder="date placeholder" type="date" className="form-control" 
                                            onChange={(event) => {
                                                const endDate = event.target.value;
                                                setExportdetails({...exportdetails, ...{ endDate } }); 
                                            }}
                                        />
                                    </div>
                                </div>
                                
                                <div className="col-md-3" style={{marginLeft: 0}}> 
                                    <label htmlfor="exampleDate"></label>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    {/* <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg">Export Report</button> */}
                                                    <button className="btn-wide btn btn-danger" style={{marginTop: 12}} onClick={() => { exportReport() }}>Export Report</button>
                                                    </span>
                                            </div>                                   
                                </div>
                               
                            </div>
                        </div>
                            </div>
                           
                        </div>
                    </div>                
                </div>
            </div>

            <div className="main-card mb-3 card">
                <div className="card-body">
                    <table style={{width: '100%'}} id="examtable" className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Transaction Ref. No</th>
                            <th>Amount To Send</th>
                            <th>Amount To Receive</th>
                            <th>Amount To Charge</th>
                            <th>Exchange Rate</th>
                            <th>PayIn Method</th>
                            <th>Transaction Status</th>
                            <th>Transaction Type</th>
                            <th>View</th>
                            <th>Edit</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                renderrow(transactions)
                            }
                        </tbody>
                        <tfoot>
                        <tr>
                            <th>Transaction Ref. No</th>
                            <th>Amount To Send</th>
                            <th>Amount To Receive</th>
                            <th>Amount To Charge</th>
                            <th>Exchange Rate</th>
                            <th>PayIn Method</th>
                            <th>Transaction Status</th>
                            <th>Transaction Type</th>
                            <th>View</th>
                            <th>Edit</th>
                        </tr>
                    </tfoot>
                    </table>
                </div>
            </div>


            <ViewTransactionModal item={item} show={showView} setShow={setShowView} handleShowView={handleShowView} />
            <EditTransactionModal item={item} show={showEdit} setShow={setShowEdit} handleShowEdit={handleShowEdit} setNotify={setNotify} editTransactionLoading={editTransactionLoading} setEditTransactionLoading={setEditTransactionLoading}/>

        </>
    )
}



const mapStateToProps = (state) => {
    return {
        alltransactions: state.alltransactions.alltransactions,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
            fetchalltransactions: (show, setNotify, successactiontype, failureactiontype, setShow) => {
                dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
            );
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Transactionsarea);