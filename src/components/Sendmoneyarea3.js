

// import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux';
// import { ShowLoading, FetchAllCountry} from '../redux/actions/authaction';
// import { CreateAction } from '../redux/actions/createaction';
// import { PatchAction } from '../redux/actions/patchaction';
// import { GetPurposeAction, GetAction } from '../redux/actions/getaction';
// import ActionTypes from "../redux/actiontype/ActionTypes"
// import BankAutocomplete from './BankAutocomplete';
// import CountryAutocomplete from './CountryAutocomplete';
// import CustomCountryAutocomplete from './CustomCountryAutocomplete';


// const Sendmoneyarea = (props) => {
//     const {  
//         fetchallcountry,
//         fetchallreceivingcountry,
//         fetchallsendingcountry, 
//         allcountriesstate, 
//         allpurposestate, 
//         fetchallpurpose, 
//         fetchaccounts,
//         setNotify, 
//         show, 
//         createbeneficiary,
//         handleShow, 
//         setShow, 
//         createconvert, 
//         createtransact, 
//         conversionstate, 
//         authstate,
//         allbanks,
//         transactionstate,
//         allreceivingcurrencystate,
//         allsendingcurrencystate,
//         alluserreceivers,
//         fetchalluserreceivers,
//     } = props;

//     const [transferdetails, setTransferDetails] = useState({});
//     const [beneficiarydetails, setBeneficiarydetails] = useState({});
//     const [submitted, setSubmitted] = useState(true)
//     const [isLoading, setIsLoading] = useState(false);
//     // const [transactstatus, setTransactStatus] = useState(false);

//     const [error, setError] = useState({
//         hasError: false,
//         message: "",
//     })

//     useEffect(() => {

//         if(conversionstate) { // && submitted
//             createTransaction(conversionstate);
//         }
        
//     }, [conversionstate]);


//     useEffect(() => {
//         if(transactionstate) {
//         }
        
//     }, [transactionstate]);
    



//     const createTransaction = (props) => {
//         let transactionParams = {};
//         transactionParams.customerId = authstate.nameid;
//         transactionParams.amountToSend = props.amountToSend;
//         transactionParams.exchangeRate = props.rate;
//         transactionParams.paymentPurpose = transferdetails.purpose;
//         transactionParams.paymentDescription = transferdetails.description;
//         transactionParams.sendingCountry = transferdetails.sendCountry;
//         transactionParams.receivingCountry = transferdetails.receieveCountry;
//         transactionParams.amountToReceive = props.amountToReceive;
//         transactionParams.amountToReceive_NgaUSD = props.amountToReceive_NgaUSD;
//         transactionParams.bonusCode = "";
//         createtransact(transactionParams, setNotify, ActionTypes.ADD_TRANSACTION_SUCCESS, ActionTypes.ADD_TRANSACTION_FAIL, handleShow, setShow);
//         //setSubmitted(false);
//     }

//     //fetch all countries
//     useEffect(() => {
//         fetchallcountry(setNotify);
//         fetchaccounts(show, setNotify, ActionTypes.GET_BANK_SUCCESS, ActionTypes.GET_BANK_FAIL, setShow);
//         fetchallpurpose(show, setNotify, ActionTypes.FETCH_PURPOSE_SUCCESS, ActionTypes.FETCH_PURPOSE_FAIL, setShow);
//         fetchallreceivingcountry(show, setNotify, ActionTypes.GET_ALL_RECEIVING_CURRENCY_SUCCESS, ActionTypes.GET_ALL_RECEIVING_CURRENCY_FAIL, setShow);
//         fetchallsendingcountry(show, setNotify, ActionTypes.GET_ALL_SENDING_CURRENCY_SUCCESS, ActionTypes.GET_ALL_SENDING_CURRENCY_FAIL, setShow);
//         fetchalluserreceivers(show, setNotify, ActionTypes.GET_USER_RECEIVERS_SUCCESS, ActionTypes.GET_USER_RECEIVERS_FAIL, setShow);
//     }, []);


//     useEffect(() => {
//         if(allbanks) {
//         }
//     }, [allbanks]);

//     //handle the return value from country dropdown selection
//     const handlesendingfrom = (cout) => {
//         const sendCountry = cout.substring(cout.length - 3, cout.length);
//         setTransferDetails({...transferdetails, ...{ sendCountry } });
//     }

//     const handlereceivingfrom = (cout) => {
//         const receieveCountry = cout.substring(cout.length - 8, cout.length - 5);
//         setTransferDetails({...transferdetails, ...{ receieveCountry } });
//         const accountCurrency = cout.substring(cout.length - 3, cout.length);
//         let corresBankCountry = "";
//         let corresBankName = "";
//         let corresBankIBAN = "";
//         let customerId = authstate.nameid;
//         setBeneficiarydetails({...beneficiarydetails, ...{ accountCurrency, corresBankCountry, corresBankName, corresBankIBAN, customerId }});
//     }

//     const handlereturncountry = (cout) => {
//         const country = cout.substring(cout.length - 3, cout.length);
//         setBeneficiarydetails({...beneficiarydetails, ...{ country } });
//     }

//     const handlereturnbanks = (cout) => {

//         const bankName = cout//.substring(cout.length - 3, cout.length);
//         setBeneficiarydetails({...beneficiarydetails, ...{ bankName } });
//     }

    

//     const handleSubmit = e => {
//         e.preventDefault();
//         createconvert(transferdetails, setNotify, ActionTypes.ADD_CONVERT_SUCCESS, ActionTypes.ADD_CONVERT_FAIL, handleShow, setShow);
//     };

//     const postBeneficiaryDetails = e => {
//         e.preventDefault();
//             if(transactionstate.id) {
//                 setIsLoading(true);
//                 createbeneficiary(beneficiarydetails, transactionstate.id, setIsLoading, setNotify, ActionTypes.ADD_NEW_BENEFICIARY_SUCCESS, ActionTypes.ADD_NEW_BENEFICIARY_FAIL, handleShow, setShow);
//             }
//         };



//     return (
//         <>
//         <div className="app-page-title app-page-title-simple">
//             <div className="page-title-wrapper">
//                 <div className="page-title-heading" style={{marginLeft: 16}}>
//                     <div>
//                         <div className="page-title-head center-elem">
//                             <span className="d-inline-block"><h2>Send Money</h2></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div className="row">
//             <div className="col-lg-12 col-md-12">
//                 <div className="main-card mb-3 card">
//                 <div className="card-body">
//                     <div id="smartwizard" className="sw-main sw-theme-default">
//                     <ul className="forms-wizard nav nav-tabs step-anchor">
//                         <li className="nav-item done">
//                         <a href="#step-1" className="nav-link">
//                             <em>1</em><span>Conversion</span>
//                         </a>
//                         </li>
//                         <li className="nav-item active">
//                         <a href="#step-2" className="nav-link">
//                             <em>2</em><span>Beneficiary Details</span>
//                         </a>
//                         </li>
//                         <li className="nav-item">
//                         <a href="#step-3" className="nav-link">
//                             <em>3</em><span>Choose Payment</span>
//                         </a>
//                         </li>
//                     </ul>
//                     <div className="form-wizard-content sw-container tab-content">
//                         <div id="step-1" className="tab-pane step-content" style={{display: 'none'}}>
//                         <div className="row">
//                                     <div className="col-md-12 col-lg-6 col-xl-6">
//                                         <div className="card-shadow-primary card-border mb-3 card">
//                                             <div className="dropdown-menu-header">
//                                             <div className="dropdown-menu-header-inner bg-primary">
//                                                 <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/city2.jpg")'}} />
//                                                 <div className="menu-header-content">                                            
//                                                 </div>
//                                             </div>
//                                             </div>
//                                             <div className="scroll-area-sm convert">
//                                             <div className="scrollbar-container">
//                                                 <ul className="list-group list-group-flush">
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                         <div className="col-md-12 position-relative form-group">
//                                                             <div className="form-row">
//                                                                 <div className="position-relative form-group col-md-12">
//                                                                     <label htmlFor="exampleAmount"><strong>Amount</strong></label>
//                                                                     <input name="amount" id="exampleAmount" placeholder="Amount" type="number" min="0" className="form-control" 
//                                                                         onChange={(event) => {
//                                                                             let amount = event.target.value;
//                                                                             let amountToSend = Number(amount)
//                                                                             setTransferDetails({...transferdetails, ...{ amountToSend } }); 
//                                                                         }}
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
                                   
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
//                                                         <div className="form-row">                                            
//                                                             <div className="col-md-12"> 
//                                                                 <label htmlFor="exampleGender"><strong>Sending From</strong></label>
                                                                
//                                                                 <CountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
//                                                                     suggestions={ allsendingcurrencystate } passChildData={handlesendingfrom}
//                                                                 />

//                                                             </div>                                           
//                                                         </div>
//                                                     </div>

//                                                     </div>
//                                                 </li>
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
//                                                         <div className="form-row">
//                                                             <div className="col-md-12"> 
//                                                                 <label htmlFor="exampleGender"><strong>Receiving From</strong></label>
//                                                                 <CustomCountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
//                                                                     suggestions={ allreceivingcurrencystate } passChildData={handlereceivingfrom}
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     </div>
//                                                 </li>
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
                                        
//                                                         <label htmlFor="exampleGender"><strong>Payment Purpose</strong></label>
//                                                         <div className="form-row">
//                                                             <select type="select" 
//                                                                     id="namePrefix" 
//                                                                     name="namePrefix" 
//                                                                     className="custom-select col-md-12"
//                                                                         onChange={(event) => {
//                                                                             const purpose = event.target.value;
//                                                                             setTransferDetails({...transferdetails, ...{ purpose } }); 
//                                                                         }}
//                                                                     >
//                                                                 <option defaultValue>Select</option>
//                                                                 {allpurposestate?.map((currency, index) => (
//                                                                     <option key={currency} value={currency}>
//                                                                         {currency}
//                                                                     </option>
//                                                                 ))}
                        
//                                                             </select>
//                                                         </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
//                                                         <div className="form-row">
//                                                             <div className="col-md-12"> 
//                                                                 <div className="position-relative form-group">
//                                                                 <label htmlFor="exampleText"><strong>Transaction Description</strong></label>
//                                                                 <textarea name="text" id="Paymentdescription" className="form-control"
//                                                                     onChange={(event) => {
//                                                                         const description = event.target.value;
//                                                                         setTransferDetails({...transferdetails, ...{ description } }); 
//                                                                     }}
//                                                                 />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div> 
//                                                     </div>
//                                                 </li>
//                                                 </ul>
//                                             </div>
//                                             </div>
//                                             <div className="text-center d-block card-footer">
//                                             <button className="btn-shadow-danger btn btn-danger btn-lg" disabled={isLoading} onClick={handleSubmit}>Initialize Transaction</button>
//                                             {/* mr-2 border-0 btn-transition btn btn-outline-danger
//                                              <button className="border-0 btn-transition btn btn-outline-success">Send Message</button> */}
                                                       
//                                             </div>
//                                         </div>
//                                     </div>

                                       
//                                         <div className="col-md-12 col-lg-6 col-xl-6">
//                                             <div className="card-shadow-primary profile-responsive card-border mb-3 card">
//                                             <div className="dropdown-menu-header">
//                                                 <div className="dropdown-menu-header-inner bg-danger">
//                                                 <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/abstract1.jpg")'}} />
                                                
//                                                 </div>
//                                             </div>
//                                             <ul className="list-group list-group-flush">
//                                                 <li className="list-group-item">
//                                                 <h3 className="widget-numbers widget-numbers-sm text-danger" style={{float: 'right', marginLeft: '82px', fontWeight: 'bolder'}}>Welcome, {authstate.unique_name}</h3><br></br>
//                                                 <br></br>
                                            
//                                                 <p className="deeped" style={{float: 'right'}}>If you dislike the non-accepted character showing for a split-second before being erased, 
//                                                     the method below is my solution. Note the numerous additional conditions, this is to avoid 
//                                                     disabling all sorts of navigation and hotkeys. If anyone knows how to compactify this, let us know!</p>
                                                
//                                                 </li>
                                                
//                                                 <li className="list-group-item">
//                                                 <div className="widget-content p-0">
//                                                     <div className="widget-content-wrapper">
//                                                     <div className="widget-content-left mr-3">
//                                                         <div className="icon-wrapper m-0">
//                                                         <div className="progress-circle-wrapper">
//                                                         <div className="circle-progress d-inline-block circle-progress-success">
//                                                             <small/>
//                                                         </div>

//                                                         </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="widget-content-left">
//                                                         <div className="widget-heading">Secure Payment</div>
//                                                         <div className="widget-subheading">Guaranteed</div>
//                                                     </div>
//                                                     <div className="widget-content-right">
//                                                         <div className="widget-numbers widget-numbers-sm text-danger" style={{fontSize: 16}}><span>CEO, IJC Global</span>
//                                                         </div>
//                                                     </div>
//                                                     </div>
//                                                 </div>
//                                                 </li>                                                
//                                             </ul>
//                                             </div>

//                                             {/* transactionstate */}

//                                             {(() => {
//                                                 if(transactionstate)
//                                                 {
//                                                     return <div className="card-hover-shadow card-border mb-3 card">
//                                                     <div className="dropdown-menu-header">
//                                                         <div className="dropdown-menu-header-inner bg-warning">
//                                                         <div className="menu-header-content">
                                                            
//                                                             <div>
//                                                             {/*<h5 className="menu-header-title">Settings</h5>
//                                                              <h6 className="menu-header-subtitle">Manage all of your options</h6> */}
//                                                             </div>
//                                                         </div>
//                                                         </div>
//                                                     </div>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Convertion Status </div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-success" style={{fontSize: 16}}>
//                                                                     {(() => {
//                                                                         if(conversionstate)
//                                                                         {
//                                                                             return <span className="user-details-title">Success</span>
//                                                                         } else {
//                                                                             return <h3 className="user-details-title">null</h3>
//                                                                         }
//                                                                     })()}
//                                                                     {/* {transactstatus} */}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Transaction Status </div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-warning" style={{fontSize: 16}}>{transactionstate?.transactionStatus}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Amount To Send</div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.amountToSend}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Amount To Receive </div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.amountToReceive}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     {/* <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Charges</div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.totalAmountToCharge}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li> */}
    
                                                    
    
    
    
//                                                     {/* <div className="d-block text-right card-footer">
//                                                         <button className="mr-2 btn btn-link btn-sm">Cancel</button>
//                                                         <button className="btn-shadow-primary btn btn-primary btn-lg">Submit</button>
//                                                     </div> */}
//                                                 </div>
    
//                                                 } else {
//                                                     return <div></div>
//                                                 }
//                                             })()}

                                            
//                                         </div>
                                    
                                    
//                                     </div>
//                         </div>
//                         <div id="step-2" className="tab-pane step-content" style={{display: 'block'}}>
//                         <div id="accordion" className="accordion-wrapper mb-3">
//                             <div className="card">
//                             <div id="headingOne" className="card-header">
//                                 <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="text-left m-0 p-0 btn btn-link btn-block">
//                                 <span className="form-heading">Account Information<p>Enter your  user informations below</p></span>
//                                 </button>
//                             </div>
//                             <div data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne" className="collapse show">
//                                 <div className="card-body">
                               
//                                 <div className="widget-content-wrapper" style={{marginBottom: 55}}>                             
//                                         <div className="widget-content-right w-100">
//                                             <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
//                                             <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                             </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-12">
//                                                 <label htmlFor="exampleAmount">Add Existing Beneficiary</label>
                                                

//                                                 <div className="form-row">
//                                                 <select type="select" 
//                                                         id="namePrefix" 
//                                                         name="namePrefix" 
//                                                         className="custom-select col-md-12"
//                                                             onChange={(event) => {
//                                                                 ///api/Transactions/addExistingBeneficiaryToTransaction/{transactionId}/{receiverID}
//                                                                 // const receiverID = event.target.value;
//                                                                 // setTransferDetails({...transferdetails, ...{ receiverID } }); 
//                                                             }}
//                                                         >
//                                                     <option defaultValue>Select </option>
//                                                     {alluserreceivers?.map((currency, index) => (
//                                                         <option key={currency.customerId} value={currency.accountName}>
//                                                             {currency.accountName}
//                                                         </option>
//                                                     ))}

//                                                 </select>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">                                            
//                                             <div className="col-md-4"> 
//                                                 <label htmlFor="exampleGender">Bank Name</label>
//                                                 <BankAutocomplete placeholder="Type and Select a Bank"
//                                                     suggestions={allbanks} passChildData={handlereturnbanks}
//                                                 />
//                                             </div>

//                                             <div className="col-md-8"> 
//                                                 <label htmlFor="exampleGender">Corresponding Bank Country</label>
//                                                 <CountryAutocomplete placeholder="Type and Select a Country"
//                                                     suggestions={allcountriesstate} passChildData={handlereturncountry}
//                                                 />
//                                             </div>  
                                                                                    
//                                         </div>
//                                     </div>


//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-4">
//                                                 <label htmlFor="exampleAmount">Account Number</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Account Number/IBAN" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const accountNumber = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountNumber } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-8">
//                                                 <label htmlFor="exampleAmount">Bank State</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank State" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankState = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankState } }); 
//                                                     }}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
                                   

//                                     <div className="col-md-12 position-relative form-group">
//                                         <div className="form-row">                                            
//                                             <div className="position-relative form-group col-md-4">
//                                                 <label htmlFor="exampleAmount">Account Name</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Account Name" type="text" className="form-control" 
//                                                      onChange={(event) => {
//                                                         const accountName = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountName } }); 
//                                                     }}
//                                                 />
//                                             </div>  
//                                             <div className="position-relative form-group col-md-8">
//                                                 <label htmlFor="exampleAmount">Bank Address</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank Address" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankAddress = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankAddress } }); 
//                                                     }}
//                                                 />
//                                             </div>                                          
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group">
//                                         <div className="form-row">
                                            

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Bank City</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank Address" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankCity = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankCity } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Bank Postal Code</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank Postal Code" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankPostalCode = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankPostalCode } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">BSB (optional)</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="BSB (optional)" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const accountBSBCode = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountBSBCode } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">SWIFT (optional)</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="SWIFT (optional)" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const accountSWiftCode = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountSWiftCode } }); 
//                                                     }}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>                                    

                                
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         </div>
//                         <div id="step-3" className="tab-pane step-content" style={{display: 'none'}}>
//                         <div className="no-results">
//                         <div className="widget-content-outer">

// <div className="widget-content-left fsize-1">
//     <h3 className="text-muted opacity-10" style={{marginLeft: 16, marginBottom: -20}}>Transaction Completed</h3><br></br>
//     <span style={{marginLeft: '16px'}}>Now you can make payment for the transaction</span>
// </div>

// <div className="widget-content-wrapper" style={{marginBottom: 95}}>

// </div>

// <div className="widget-content-left fsize-1">
//     <h5 className="text-muted opacity-10" style={{marginLeft: 16}}>Choose Payment Option</h5><br></br>
// </div>

// <div className="widget-content-right w-100">
//     <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16, marginBottom: 36, marginTop: -16}}>
//     <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//     </div>
//     </div>
// </div>



// <div className="col-md-12 position-relative form-group ">
//     <div className="form-row">                                            
//         <div className="col-md-4"> 
            
//             <div className=" no-shadow rm-border bg-transparent text-center">
//             <img src="assets/images/creditcard.png" alt="" width={100} height={80} />
//             <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Credit Card</strong>
//             </div>

//         </div>

//         <div className="col-md-4"> 
            
//             <div className=" no-shadow rm-border bg-transparent text-center">
//             <img src="assets/images/transfer.png" alt="" width={100} height={80} />
//             <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Domestic Wire Transfer ( Manual )</strong>
//             </div>

//         </div>   

//         <div className="col-md-4"> 
            
//             <div className=" no-shadow rm-border bg-transparent text-center">
//             <img src="assets/images/poli.jfif" alt="" width={100} height={80} />
//             <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Direct Debit ( POLI )</strong>
//             </div>

//         </div>                                        
//     </div>
// </div>



// <div className="" style={{marginTop: 125}}>
// <div className="form-row">
//             <span className="text-success pl-2">
//                 <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
//             </span>
// </div>
// </div>

// </div>
//                         </div>
//                         </div>
//                     </div>
//                     </div>
//                     <div className="divider" />
//                     <div className="clearfix">
//                     <button type="button" id="reset-btn" className="btn-shadow float-left btn btn-link">Reset</button>
//                     <button type="button" id="next-btn" className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-primary">Next</button>
//                     <button type="button" id="prev-btn" className="btn-shadow float-right btn-wide btn-pill mr-3 btn btn-outline-secondary">Previous</button>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>


//         <div className="col-md-12">
//             <div className="mb-3 card">
//                 <div className="tabs-lg-alternate card-header">
//                 <ul className="nav nav-justified">
//                     <li className="nav-item">
//                     <a data-toggle="tab" href="#tab-eg9-0" className="nav-link active">
//                         <div className="widget-number">Conversion</div>
//                         <div className="tab-subheading">
//                         <span className="pr-2 opactiy-6">
//                         </span>
                        
//                         </div>
//                     </a></li>
//                     <li className="nav-item">
//                     <a data-toggle="tab" href="#tab-eg9-1" className="nav-link">
//                         <div className="widget-number">Beneficiary Details</div>
//                         <div className="tab-subheading">&#160;</div>
//                     </a>
//                     </li>
//                     <li className="nav-item">
//                     <a data-toggle="tab" href="#tab-eg9-2" className="nav-link">
//                         <div className="widget-number">Choose Payment</div>
//                         <div className="tab-subheading">
//                         <span className="pr-2 opactiy-6">
//                         </span>
                        
//                         </div>
//                     </a>
//                     </li>
//                 </ul>
//                 </div>
//                 <div className="tab-content">
//                 <div className="tab-pane active" id="tab-eg9-0" role="tabpanel">
//                     <div className="card-body">
                   
//                         <div className="row">
//                             <div className="col-md-6 col-lg-12">
//                                 <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
//                                 <div className="widget-content p-0 w-100">
//                                 <div className="widget-content-outer">
//                                     <div className="widget-content-wrapper" style={{marginBottom: 30}}>
                                
//                                     </div>




//                                     <div className="row">
//                                     <div className="col-md-12 col-lg-6 col-xl-6">
//                                         <div className="card-shadow-primary card-border mb-3 card">
//                                             <div className="dropdown-menu-header">
//                                             <div className="dropdown-menu-header-inner bg-primary">
//                                                 <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/city2.jpg")'}} />
//                                                 <div className="menu-header-content">                                            
//                                                 </div>
//                                             </div>
//                                             </div>
//                                             <div className="scroll-area-sm convert">
//                                             <div className="scrollbar-container">
//                                                 <ul className="list-group list-group-flush">
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                         <div className="col-md-12 position-relative form-group">
//                                                             <div className="form-row">
//                                                                 <div className="position-relative form-group col-md-12">
//                                                                     <label htmlFor="exampleAmount"><strong>Amount</strong></label>
//                                                                     <input name="amount" id="exampleAmount" placeholder="Amount" type="number" min="0" className="form-control" 
//                                                                         onChange={(event) => {
//                                                                             let amount = event.target.value;
//                                                                             let amountToSend = Number(amount)
//                                                                             setTransferDetails({...transferdetails, ...{ amountToSend } }); 
//                                                                         }}
//                                                                     />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
                                   
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
//                                                         <div className="form-row">                                            
//                                                             <div className="col-md-12"> 
//                                                                 <label htmlFor="exampleGender"><strong>Sending From</strong></label>
                                                                
//                                                                 <CountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
//                                                                     suggestions={ allsendingcurrencystate } passChildData={handlesendingfrom}
//                                                                 />

//                                                             </div>                                           
//                                                         </div>
//                                                     </div>

//                                                     </div>
//                                                 </li>
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
//                                                         <div className="form-row">
//                                                             <div className="col-md-12"> 
//                                                                 <label htmlFor="exampleGender"><strong>Receiving From</strong></label>
//                                                                 <CustomCountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
//                                                                     suggestions={ allreceivingcurrencystate } passChildData={handlereceivingfrom}
//                                                                 />
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     </div>
//                                                 </li>
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
                                        
//                                                         <label htmlFor="exampleGender"><strong>Payment Purpose</strong></label>
//                                                         <div className="form-row">
//                                                             <select type="select" 
//                                                                     id="namePrefix" 
//                                                                     name="namePrefix" 
//                                                                     className="custom-select col-md-12"
//                                                                         onChange={(event) => {
//                                                                             const purpose = event.target.value;
//                                                                             setTransferDetails({...transferdetails, ...{ purpose } }); 
//                                                                         }}
//                                                                     >
//                                                                 <option defaultValue>Select</option>
//                                                                 {allpurposestate?.map((currency, index) => (
//                                                                     <option key={currency} value={currency}>
//                                                                         {currency}
//                                                                     </option>
//                                                                 ))}
                        
//                                                             </select>
//                                                         </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                                 <li className="list-group-item">
//                                                     <div className="widget-content p-0">
//                                                     <div className="col-md-12 position-relative form-group">
//                                                         <div className="form-row">
//                                                             <div className="col-md-12"> 
//                                                                 <div className="position-relative form-group">
//                                                                 <label htmlFor="exampleText"><strong>Transaction Description</strong></label>
//                                                                 <textarea name="text" id="Paymentdescription" className="form-control"
//                                                                     onChange={(event) => {
//                                                                         const description = event.target.value;
//                                                                         setTransferDetails({...transferdetails, ...{ description } }); 
//                                                                     }}
//                                                                 />
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div> 
//                                                     </div>
//                                                 </li>
//                                                 </ul>
//                                             </div>
//                                             </div>
//                                             <div className="text-center d-block card-footer">
//                                             <button className="btn-shadow-danger btn btn-danger btn-lg" disabled={isLoading} onClick={handleSubmit}>Initialize Transaction</button>
//                                             {/* mr-2 border-0 btn-transition btn btn-outline-danger
//                                              <button className="border-0 btn-transition btn btn-outline-success">Send Message</button> */}
                                                       
//                                             </div>
//                                         </div>
//                                     </div>

                                       
//                                         <div className="col-md-12 col-lg-6 col-xl-6">
//                                             <div className="card-shadow-primary profile-responsive card-border mb-3 card">
//                                             <div className="dropdown-menu-header">
//                                                 <div className="dropdown-menu-header-inner bg-danger">
//                                                 <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/abstract1.jpg")'}} />
                                                
//                                                 </div>
//                                             </div>
//                                             <ul className="list-group list-group-flush">
//                                                 <li className="list-group-item">
//                                                 <h3 className="widget-numbers widget-numbers-sm text-danger" style={{float: 'right', marginLeft: '82px', fontWeight: 'bolder'}}>Welcome, {authstate.unique_name}</h3><br></br>
//                                                 <br></br>
                                            
//                                                 <p className="deeped" style={{float: 'right'}}>If you dislike the non-accepted character showing for a split-second before being erased, 
//                                                     the method below is my solution. Note the numerous additional conditions, this is to avoid 
//                                                     disabling all sorts of navigation and hotkeys. If anyone knows how to compactify this, let us know!</p>
                                                
//                                                 </li>
                                                
//                                                 <li className="list-group-item">
//                                                 <div className="widget-content p-0">
//                                                     <div className="widget-content-wrapper">
//                                                     <div className="widget-content-left mr-3">
//                                                         <div className="icon-wrapper m-0">
//                                                         <div className="progress-circle-wrapper">
//                                                         <div className="circle-progress d-inline-block circle-progress-success">
//                                                             <small/>
//                                                         </div>

//                                                         </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="widget-content-left">
//                                                         <div className="widget-heading">Secure Payment</div>
//                                                         <div className="widget-subheading">Guaranteed</div>
//                                                     </div>
//                                                     <div className="widget-content-right">
//                                                         <div className="widget-numbers widget-numbers-sm text-danger" style={{fontSize: 16}}><span>CEO, IJC Global</span>
//                                                         </div>
//                                                     </div>
//                                                     </div>
//                                                 </div>
//                                                 </li>                                                
//                                             </ul>
//                                             </div>

//                                             {/* transactionstate */}

//                                             {(() => {
//                                                 if(transactionstate)
//                                                 {
//                                                     return <div className="card-hover-shadow card-border mb-3 card">
//                                                     <div className="dropdown-menu-header">
//                                                         <div className="dropdown-menu-header-inner bg-warning">
//                                                         <div className="menu-header-content">
                                                            
//                                                             <div>
//                                                             {/*<h5 className="menu-header-title">Settings</h5>
//                                                              <h6 className="menu-header-subtitle">Manage all of your options</h6> */}
//                                                             </div>
//                                                         </div>
//                                                         </div>
//                                                     </div>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Convertion Status </div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-success" style={{fontSize: 16}}>
//                                                                     {(() => {
//                                                                         if(conversionstate)
//                                                                         {
//                                                                             return <span className="user-details-title">Success</span>
//                                                                         } else {
//                                                                             return <h3 className="user-details-title">null</h3>
//                                                                         }
//                                                                     })()}
//                                                                     {/* {transactstatus} */}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Transaction Status </div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-warning" style={{fontSize: 16}}>{transactionstate?.transactionStatus}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Amount To Send</div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.amountToSend}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Amount To Receive </div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.amountToReceive}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li>
//                                                     {/* <li className="list-group-item">
//                                                         <div className="widget-content p-0">
//                                                             <div className="widget-content-outer">
//                                                             <div className="widget-content-wrapper">
//                                                                 <div className="widget-content-left">
//                                                                 <div className="widget-heading">Charges</div>
//                                                                 </div>
//                                                                 <div className="widget-content-right">
//                                                                 <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.totalAmountToCharge}</div>
//                                                                 </div>
//                                                             </div>
//                                                             </div>
//                                                         </div>
//                                                     </li> */}
    
                                                    
    
    
    
//                                                     {/* <div className="d-block text-right card-footer">
//                                                         <button className="mr-2 btn btn-link btn-sm">Cancel</button>
//                                                         <button className="btn-shadow-primary btn btn-primary btn-lg">Submit</button>
//                                                     </div> */}
//                                                 </div>
    
//                                                 } else {
//                                                     return <div></div>
//                                                 }
//                                             })()}

                                            
//                                         </div>
                                    
                                    
//                                     </div>





                                   

//                                     <div className="ml-auto">
//                                         <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
//                                             <span className="text-success pl-2">
//                                                 <button className="btn-wide btn btn-danger" style={{marginTop: 15, marginRight: 16}}>   Next   </button>
//                                                 </span>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>


                    
//                     </div>
//                 </div>
//                 <div className="tab-pane" id="tab-eg9-1" role="tabpanel">
//                     <div className="card-body">
                    
//                     <div className="row">
//                             <div className="col-md-6 col-lg-12">
//                                 <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
//                                 <div className="widget-content p-0 w-100">
//                                 <div className="widget-content-outer">
                                    
//                                     <div className="widget-content-wrapper" style={{marginBottom: 55}}>                             
//                                         <div className="widget-content-right w-100">
//                                             <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
//                                             <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                             </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-12">
//                                                 <label htmlFor="exampleAmount">Add Existing Beneficiary</label>
                                                

//                                                 <div className="form-row">
//                                                 <select type="select" 
//                                                         id="namePrefix" 
//                                                         name="namePrefix" 
//                                                         className="custom-select col-md-12"
//                                                             onChange={(event) => {
//                                                                 ///api/Transactions/addExistingBeneficiaryToTransaction/{transactionId}/{receiverID}
//                                                                 // const receiverID = event.target.value;
//                                                                 // setTransferDetails({...transferdetails, ...{ receiverID } }); 
//                                                             }}
//                                                         >
//                                                     <option defaultValue>Select </option>
//                                                     {alluserreceivers?.map((currency, index) => (
//                                                         <option key={currency.customerId} value={currency.accountName}>
//                                                             {currency.accountName}
//                                                         </option>
//                                                     ))}

//                                                 </select>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">                                            
//                                             <div className="col-md-4"> 
//                                                 <label htmlFor="exampleGender">Bank Name</label>
//                                                 <BankAutocomplete placeholder="Type and Select a Bank"
//                                                     suggestions={allbanks} passChildData={handlereturnbanks}
//                                                 />
//                                             </div>

//                                             <div className="col-md-8"> 
//                                                 <label htmlFor="exampleGender">Corresponding Bank Country</label>
//                                                 <CountryAutocomplete placeholder="Type and Select a Country"
//                                                     suggestions={allcountriesstate} passChildData={handlereturncountry}
//                                                 />
//                                             </div>  
                                                                                    
//                                         </div>
//                                     </div>


//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-4">
//                                                 <label htmlFor="exampleAmount">Account Number</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Account Number/IBAN" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const accountNumber = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountNumber } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-8">
//                                                 <label htmlFor="exampleAmount">Bank State</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank State" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankState = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankState } }); 
//                                                     }}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
                                   

//                                     <div className="col-md-12 position-relative form-group">
//                                         <div className="form-row">                                            
//                                             <div className="position-relative form-group col-md-4">
//                                                 <label htmlFor="exampleAmount">Account Name</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Account Name" type="text" className="form-control" 
//                                                      onChange={(event) => {
//                                                         const accountName = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountName } }); 
//                                                     }}
//                                                 />
//                                             </div>  
//                                             <div className="position-relative form-group col-md-8">
//                                                 <label htmlFor="exampleAmount">Bank Address</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank Address" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankAddress = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankAddress } }); 
//                                                     }}
//                                                 />
//                                             </div>                                          
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group">
//                                         <div className="form-row">
                                            

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Bank City</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank Address" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankCity = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankCity } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Bank Postal Code</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Bank Postal Code" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const bankPostalCode = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ bankPostalCode } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">BSB (optional)</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="BSB (optional)" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const accountBSBCode = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountBSBCode } }); 
//                                                     }}
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">SWIFT (optional)</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="SWIFT (optional)" type="text" className="form-control" 
//                                                     onChange={(event) => {
//                                                         const accountSWiftCode = event.target.value;
//                                                         setBeneficiarydetails({...beneficiarydetails, ...{ accountSWiftCode } }); 
//                                                     }}
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>                                    

//                                     <div className="ml-auto">
//                                         <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
//                                                 <span className="text-success pl-2">
//                                                     <button disabled={isLoading} className="btn-wide btn btn-danger" onClick={postBeneficiaryDetails} style={{marginRight: 16}}>   Next   </button>
//                                                 </span>
//                                         </div>
//                                     </div>

//                                 <div className="" style={{marginTop: -35}}>
//                                     <div className="form-row">
//                                                 <span className="text-success pl-2">
//                                                     <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
//                                                 </span>
//                                     </div>
//                                 </div>

//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
                    
//                     </div>
//                 </div>
//                 <div className="tab-pane" id="tab-eg9-2" role="tabpanel">
//                     <div className="card-body">


//                     {/* Direct Deposit POLI Page start here */}

//                     {/* <div className="row">
//                             <div className="col-md-6 col-lg-12">
//                                 <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
//                                 <div className="widget-content p-0 w-100">
//                                 <div className="widget-content-outer">
//                                     <div className="widget-content-wrapper" style={{marginBottom: 50}}>

//                                     <div className="widget-content-left fsize-1 col-md-12">
//                                         <h5 className="text-muted opacity-10">Direct Deposit - POLI Payment</h5><br></br>
//                                         <div className="progress-bar-xs progress" style={{ marginRight: 16}}>
//                                         <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                         </div>
//                                         </div>
//                                     </div>
                                
//                                     </div>

//                                    <div className="col-md-12 position-relative form-group">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-6">
//                                                 <label htmlFor="exampleAmount"></label>
                                                
//                                             </div>
//                                             <div className="position-relative form-group col-md-6 left_margin">
//                                                 <br></br>

//                                                 <div className=" no-shadow rm-border bg-transparent text-center">
//                                                     <img src="assets/images/poli.jfif" width={400} height={300} />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

                                    
                                   

//                                     <div className="col-md-6 position-relative form-group" style={{marginTop: -195}}>
//                                     <button className="mb-2 mr-2 btn-wide btn-square btn btn-danger btn-block btn-lg" style={{marginRight: 16}}>PAY NOW</button>
//                                     </div>
//                                     <span className="text-center col-md-6">Click Pay now to complete this transaction</span>

//                                     <div className="" style={{marginTop: 95}}>
//                                         <div className="form-row">
//                                                     <span className="text-success pl-2">
//                                                         <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
//                                                     </span>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div> */}

//                     {/* Direct Deposit POLI Page Ends here */}

//                     {/* Credit Card Payment start here */}

//                     {/*   <div className="row">
//                             <div className="col-md-6 col-lg-12">
//                                 <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
//                                 <div className="widget-content p-0 w-100">
//                                 <div className="widget-content-outer">
//                                     <div className="widget-content-wrapper" style={{marginBottom: 50}}>

//                                     <div className="widget-content-left fsize-1 col-md-12">
//                                         <h5 className="text-muted opacity-10">Credit Card Payment</h5><br></br>
//                                         <div className="progress-bar-xs progress" style={{ marginRight: 16}}>
//                                         <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                         </div>
//                                         </div>
//                                     </div>
                                
//                                     //  <div className="widget-content-right w-100">
//                                     //     <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
//                                     //     <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                     //     </div>
//                                     //     </div>
//                                     // </div> 


//                                     </div>

//                                    <div className="col-md-12 position-relative form-group">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-6">
//                                                 <label htmlFor="exampleAmount"></label>
                                                
//                                             </div>
//                                             <div className="position-relative form-group col-md-6 left_margin">
//                                                 <br></br>

//                                                 <div className=" no-shadow rm-border bg-transparent text-center">
//                                                     <img src="assets/images/creditcard.png" width={200} height={160} />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group top_margin">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-6">
//                                                 <label htmlFor="exampleAmount">Card Number</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Card Number" type="number" min="0" className="form-control" 
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-6">
//                                                 <label htmlFor="exampleAmount">Card Holder's Name</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="Card Holder's Name" type="text"  className="form-control" 
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">
//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Expiry Date</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="MM/YY" type="text" className="form-control" 
//                                                 />
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">CVV</label>
//                                                 <input name="amount" id="exampleAmount" placeholder="CVV" type="text" className="form-control" 
//                                                 />
//                                             </div>
//                                         </div>
//                                     </div>
                                   

//                                     <div className="col-md-6 position-relative form-group">
//                                     <button className="mb-2 mr-2 btn-wide btn-square btn btn-danger btn-block btn-lg" style={{marginRight: 16}}>PAY NOW</button>
//                                     </div>

//                                     <div className="" style={{marginTop: 35}}>
//                                         <div className="form-row">
//                                                     <span className="text-success pl-2">
//                                                         <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
//                                                     </span>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div> */}


//                 {/* Credit Card Payment End here */} 

//                     {/* Domestic Wire Transfer Page */}
//                         {/* <div className="row">
//                             <div className="col-md-6 col-lg-12">
//                                 <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
//                                 <div className="widget-content p-0 w-100">
//                                 <div className="widget-content-outer">
//                                     <div className="widget-content-wrapper" style={{marginBottom: 55}}>
                                

//                                     <div className="widget-content-left fsize-1 col-md-12">
//                                         <h5 className="text-muted opacity-10" style={{marginLeft: 16}}>Domestic Wire Transfer</h5><br></br>
//                                         <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
//                                         <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                         </div>
//                                         </div>
//                                     </div>
//                                     </div>


                                    

//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">                                            
//                                             <div className="col-md-6"> 
//                                                 <label htmlFor="exampleGender">Select Banks</label>
//                                                 <select type="select" 
//                                                     id="gender" 
//                                                     name="gender"
//                                                     className="mb-2 form-control"
//                                                     >
//                                                     <option value="">-- All Bank List --</option>
//                                                     <option value="Male">First Bank</option>
//                                                     <option value="Female">Sterling Bank</option>
//                                                 </select>
//                                             </div>
//                                             <div className="col-md-6" style={{marginTop: 1}}> 
//                                                 <div className="position-relative form-group">
//                                                 <label htmlFor="exampleText" >Transaction Description</label>
//                                                 <textarea  name="text" id="exampleText" className="form-control" defaultValue={""} />
//                                                 </div>
//                                             </div>                                          
//                                         </div>
//                                     </div>

//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
                    

//                         <div className="row">
//                             <div className="col-md-6 col-lg-12">
//                                 <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
//                                 <div className="widget-content p-0 w-100">
//                                 <div className="widget-content-outer">
//                                     <div className="widget-content-wrapper" style={{marginBottom: 55}}>
//                                         <div className="widget-content-left fsize-1 col-md-6">
//                                             <h5 className="text-muted opacity-10" >Transaction Reference Number</h5>
//                                             <h5 className="text-danger opacity-10">TYPE-2594-4331-8950</h5>
//                                         </div>

//                                         <div className="ml-auto">
//                                             <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
//                                                 <h5 className="text-muted opacity-10" style={{marginLeft: 8}}>Payment Method</h5>
//                                                 <span className="text-danger pl-2">
//                                                     <span className="" style={{marginTop: 15, marginRight: 16}}> Domestic Wire Transfer   </span>
//                                                     </span>
//                                             </div>
//                                         </div>                                    
//                                     </div>

//                                     <div className="widget-content-right w-100">
//                                         <h5 className="text-muted opacity-10" style={{marginLeft: 16}}><strong> IJC GLobal Account - Beneficiary Details </strong></h5>
//                                         <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
//                                         <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                         </div>
//                                         </div>
//                                     </div>


//                                     <div className="col-md-12 position-relative form-group" style={{marginTop: 24}}>
//                                         <div className="form-row">
//                                         <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Account Holder's Name</label>
//                                                 <h5 className="text-muted opacity-10"><strong> Adeyemi Olaoye </strong></h5>
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Location</label>
//                                                 <h5 className="text-muted opacity-10"><strong> Canada </strong></h5>
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">Account Number</label>
//                                                 <h5 className="text-muted opacity-10"><strong> 0045338922 </strong></h5>
//                                             </div>

//                                             <div className="position-relative form-group col-md-3">
//                                                 <label htmlFor="exampleAmount">PAyement Date</label>
//                                                 <h5 className="text-muted opacity-10"><strong> 23/04/2021 </strong> </h5>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="ml-auto">
//                                         <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
//                                             <span className="text-success pl-2">
//                                                 <button className="btn-wide btn btn-danger" style={{marginTop: 15, marginRight: 16}}>  Download Payment Info  </button>
//                                                 </span>
//                                         </div>
//                                     </div>

                               

//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>

//                         <button className="mb-2 mr-2 btn-pill btn btn-danger btn-lg btn-block" style={{marginRight: -36}}>Upload Payment Confirmation</button>
//                         <div className="col-md-12 position-relative form-group">
//                             <div className="form-row">                                            
//                                 <div className="position-relative form-group col-md-8">
//                                     <span> *** Policy Content Here *** </span>
//                                 </div>  
//                                 <div className="position-relative form-group col-md-4">
//                                     <button className="mb-2 mr-2 btn-square btn btn-danger btn-block">Finish</button>
//                                 </div>                                           
//                             </div>
//                         </div>

//                         <div className="" style={{marginTop: 35}}>
//                                     <div className="form-row">
//                                                 <span className="text-success pl-2">
//                                                     <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
//                                                 </span>
//                                     </div>
//                         </div> */}

//                         {/* Domestic Wire Transfer Page End Here */}







//                         {/* Choose Payment Section Start here */}





//                         <div className="row">
//                             <div className="col-md-6 col-lg-12">
//                                 <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
//                                 <div className="widget-content p-0 w-100">
//                                 <div className="widget-content-outer">

//                                     <div className="widget-content-left fsize-1">
//                                         <h3 className="text-muted opacity-10" style={{marginLeft: 16, marginBottom: -20}}>Transaction Completed</h3><br></br>
//                                         <span style={{marginLeft: '16px'}}>Now you can make payment for the transaction</span>
//                                     </div>

//                                     <div className="widget-content-wrapper" style={{marginBottom: 95}}>
                                
//                                     </div>
                                    
//                                     <div className="widget-content-left fsize-1">
//                                         <h5 className="text-muted opacity-10" style={{marginLeft: 16}}>Choose Payment Option</h5><br></br>
//                                     </div>

//                                     <div className="widget-content-right w-100">
//                                         <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16, marginBottom: 36, marginTop: -16}}>
//                                         <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
//                                         </div>
//                                         </div>
//                                     </div>

                                    

//                                     <div className="col-md-12 position-relative form-group ">
//                                         <div className="form-row">                                            
//                                             <div className="col-md-4"> 
                                                
//                                                 <div className=" no-shadow rm-border bg-transparent text-center">
//                                                 <img src="assets/images/creditcard.png" alt="" width={100} height={80} />
//                                                 <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Credit Card</strong>
//                                                 </div>

//                                             </div>

//                                             <div className="col-md-4"> 
                                                
//                                                 <div className=" no-shadow rm-border bg-transparent text-center">
//                                                 <img src="assets/images/transfer.png" alt="" width={100} height={80} />
//                                                 <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Domestic Wire Transfer ( Manual )</strong>
//                                                 </div>

//                                             </div>   

//                                             <div className="col-md-4"> 
                                                
//                                                 <div className=" no-shadow rm-border bg-transparent text-center">
//                                                 <img src="assets/images/poli.jfif" alt="" width={100} height={80} />
//                                                 <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Direct Debit ( POLI )</strong>
//                                                 </div>

//                                             </div>                                        
//                                         </div>
//                                     </div>



//                                 <div className="" style={{marginTop: 125}}>
//                                     <div className="form-row">
//                                                 <span className="text-success pl-2">
//                                                     <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
//                                                 </span>
//                                     </div>
//                                 </div>

//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
                    
                    

//                      {/* Choose Payment Section End here */}
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>



// </>


//     )
// }


// const mapStateToProps = (state) => {
//     return {
//         transactionstate: state.transactionstate.transactionstate,
//         authstate: state.authstate.authstate,
//         allbanks: state.allbanks.allbanks,
//         allcountriesstate: state.allcountriesstate.allcountriesstate,
//         conversionstate: state.conversionstate.conversionstate,
//         allreceivingcurrencystate: state.allreceivingcurrencystate.allreceivingcurrencystate,
//         allsendingcurrencystate: state.allsendingcurrencystate.allsendingcurrencystate,        
//         allpurposestate: state.allpurposestate.allpurposestate,
//         alluserreceivers: state.alluserreceivers.alluserreceivers,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchallcountry: (setError) => {
//             dispatch(FetchAllCountry(setError));
//         },
//         fetchaccounts: (show, setNotify, successactiontype, failureactiontype, setShow) => {
//             dispatch(ShowLoading(setNotify));
//             dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
//         )},
//         fetchallreceivingcountry: (show, setNotify, successaction, failaction, setShow) => {
//             dispatch(GetAction(show, setNotify, successaction, failaction, setShow));
//         },
//         fetchallsendingcountry: (show, setNotify, successaction, failaction, setShow) => {
//             dispatch(GetAction(show, setNotify, successaction, failaction, setShow));
//         },
//         fetchallpurpose: (show, setNotify, successaction, failaction, setShow) => {
//             dispatch(GetPurposeAction(show, setNotify, successaction, failaction, setShow));
//         },
//         fetchalluserreceivers: (show, setNotify, successaction, failaction, setShow) => {
//             dispatch(GetAction(show, setNotify, successaction, failaction, setShow));
//         },
//         createconvert: (convertiondetails, setNotify, successactiontype, failureactiontype, setShow) => {
//             dispatch(ShowLoading(convertiondetails));
//             dispatch(CreateAction(convertiondetails, setNotify, successactiontype, failureactiontype, setShow))
//         },
//         createtransact: (transactiondetails, setNotify, successactiontype, failureactiontype, setShow) => {
//             dispatch(ShowLoading(transactiondetails));
//             dispatch(CreateAction(transactiondetails, setNotify, successactiontype, failureactiontype, setShow))
//         }, 
//         createbeneficiary: (transactiondetails, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow) => {
//             dispatch(PatchAction(transactiondetails, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow))
//         },
        
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Sendmoneyarea);
