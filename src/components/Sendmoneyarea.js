import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { ShowLoading, FetchAllCountry} from '../redux/actions/authaction';
import { CreateAction } from '../redux/actions/createaction';
import { PatchAction } from '../redux/actions/patchaction';
import { GetPurposeAction, GetAction } from '../redux/actions/getaction';
import ActionTypes from "../redux/actiontype/ActionTypes"
import BankAutocomplete from './BankAutocomplete';
import CountryAutocomplete from './CountryAutocomplete';
import CustomCountryAutocomplete from './CustomCountryAutocomplete';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';


const Sendmoneyarea = (props) => {
    const {  
        fetchallcountry,
        fetchallreceivingcountry,
        fetchallsendingcountry, 
        allcountriesstate, 
        allpurposestate, 
        fetchallpurpose, 
        fetchaccounts,
        setNotify, 
        show, 
        createbeneficiary,
        setShow, 
        createconvert, 
        createtransact, 
        conversionstate, 
        authstate,
        allbanks,
        transactionstate,
        allreceivingcurrencystate,
        allsendingcurrencystate,
        alluserreceivers,
        fetchalluserreceivers,
        addExistBeneficiary,
        addpaymentstotransaction,
        downloadreceiptaction,
        uploadconfrimationaction,
        redirecturl
    } = props;

    const [transferdetails, setTransferDetails] = useState({});
    const [beneficiarydetails, setBeneficiarydetails] = useState({});
    const [beneficiaryid, setBeneficiaryId] = useState({});
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [istransactionLoading, setIstransactionLoading] = useState(false);
    const [beneficiaryLoading, setBeneficiaryLoading] = useState(false);
    const location = useLocation();
    const [paymenttype, setPaymenttype] = useState('');
    const [screen, setScreen] = useState(0);
    const [recactive, setRecActive] = useState(false);
    const [isNigeria, setIsNigeria] = useState(false);
    const history = useHistory();
    const [benAdded, setBenAdded] = useState(false);
    const [uploaddetails, setUploadDetails] = useState(false);
    const [dummy, reload] = useState(false);

    const [stepone, setStepOne] = useState(true);
    const [steptwo, setStepTwo] = useState(false);
    const [stepthree, setStepThree] = useState(false);
    
    useEffect(() => {
        if(paymenttype) { 
        }
    }, [paymenttype]);

    useEffect(() => {
        if(screen) {
        }
        
    }, [screen]);

    useEffect(() => {
        if(beneficiaryid) {
            
            if(beneficiaryid.receiverID > 0) {
                setRecActive(true);
            } else {
                setRecActive(false);
            }
        }
        
    }, [beneficiaryid]);

    
    const uploadConfirmation = () => {
        uploadconfrimationaction(uploaddetails, transactionstate.id, setBeneficiaryLoading, setNotify, ActionTypes.UPLOAD_PAYMENTS_CONFIRMATION_SUCCESS, ActionTypes.UPLOAD_PAYMENTS_CONFIRMATION_FAIL, setShow);
    }

    const resetScreen = () => {
        setScreen(0);
    }

    const proceedPayment = () => {
        setBeneficiaryLoading(true);
        let type = null;

        if(paymenttype.type === 'creditcard') {
            type = 1;
            setScreen(1);
        } else if (paymenttype.type === 'manual')
        {
            type = 3;
            setScreen(3);
        } else if (paymenttype.type === 'poli')
        {
            type = 0;
            setScreen(0);
        }

        if(type !== null) {
            addpaymentstotransaction(type, transactionstate.id, setBeneficiaryLoading, setNotify, ActionTypes.ADD_PAYMENTS_TO_TRANSACTION_SUCCESS, ActionTypes.ADD_PAYMENTS_TO_TRANSACTION_FAIL, setShow);
        }
    }

    useEffect(() => {
        if(redirecturl) {
            //window.location.href = redirecturl; 
            //<div dangerouslySetInnerHTML={{ __html: "<iframe src={"+ redirecturl +"} sandbox='' />"}} />;
            // return <div dangerouslySetInnerHTML={{ __html: "<iframe src="+ redirecturl +" />"}} />;
            // <iframe src={redirecturl} sandbox iframe/>

            //https://api.jciremit.com/payment/Success?token=i%2fxwnvF4nRZmPUR%2fa%2bg884elZSYtedJh
            //https://api.jciremit.com/payment/Success?token=L8ERHXUwQa9NWW0mm2bF%2bfGU4l6BEEoH
            //https://txn.apac.paywithpoli.com/?Token=uVkUicOB8%2fi%2fJBFXvVxqRGtDYOz7Z4CC
            history.push("/paymentpage", {url: redirecturl});
            
        }
    }, [redirecturl]);

    

    useEffect(() => {
        
        if(submitted && transferdetails.purpose && transferdetails.description && transferdetails.sendCountry && transferdetails.receieveCountry) { 
            createTransaction(conversionstate);
        }
    }, [conversionstate]);

    

    const createTransaction = (props) => {
        let transactionParams = {};
        transactionParams.customerId = authstate.nameid;
        transactionParams.amountToSend = props.amountToSend;
        transactionParams.exchangeRate = props.rate;
        transactionParams.paymentPurpose = transferdetails.purpose;
        transactionParams.paymentDescription = transferdetails.description;
        transactionParams.sendingCountry = transferdetails.sendCountry;
        transactionParams.receivingCountry = transferdetails.receieveCountry;
        transactionParams.amountToReceive = props.amountToReceive;
        transactionParams.amountToReceive_NgaUSD = props.amountToReceive_NgaUSD;
        transactionParams.bonusCode = "";
        setIstransactionLoading(true)
        createtransact(transactionParams, setNotify, ActionTypes.ADD_TRANSACTION_SUCCESS, ActionTypes.ADD_TRANSACTION_FAIL, setShow, setIstransactionLoading);
        setSubmitted(false);
    }

   

    //fetch all countries
    useEffect(() => {
        const search = location.search;
        const params = new URLSearchParams(search);
        fetchallcountry(setNotify);
        fetchaccounts(show, setNotify, ActionTypes.GET_BANK_SUCCESS, ActionTypes.GET_BANK_FAIL, setShow);
        fetchallpurpose(show, setNotify, ActionTypes.FETCH_PURPOSE_SUCCESS, ActionTypes.FETCH_PURPOSE_FAIL, setShow);
        fetchallreceivingcountry(show, setNotify, ActionTypes.GET_ALL_RECEIVING_CURRENCY_SUCCESS, ActionTypes.GET_ALL_RECEIVING_CURRENCY_FAIL, setShow);
        fetchallsendingcountry(show, setNotify, ActionTypes.GET_ALL_SENDING_CURRENCY_SUCCESS, ActionTypes.GET_ALL_SENDING_CURRENCY_FAIL, setShow);
        fetchalluserreceivers(show, setNotify, ActionTypes.GET_USER_RECEIVERS_SUCCESS, ActionTypes.GET_USER_RECEIVERS_FAIL, setShow);
    }, []);

    //handle the return value from country dropdown selection
    const handlesendingfrom = (cout) => {
        const sendCountry = cout.substring(cout.length - 3, cout.length);
        setTransferDetails({...transferdetails, ...{ sendCountry } });
    }

    const handlereceivingfrom = (cout) => {
        const receieveCountry = cout.substring(cout.length - 8, cout.length - 5);
        let country = receieveCountry;
        setTransferDetails({...transferdetails, ...{ receieveCountry } });
        const accountCurrency = cout.substring(cout.length - 3, cout.length);        
        if(accountCurrency === 'NGN')
        {
            setIsNigeria(true);
        }
        let customerId = authstate.nameid;
        setBeneficiarydetails({...beneficiarydetails, ...{ accountCurrency, customerId, country } });
    }

    const handlereturncountry = (cout) => {
        const corresBankCountry = cout.substring(cout.length - 3, cout.length);
        setBeneficiarydetails({...beneficiarydetails, ...{ corresBankCountry } });
    }

    const handlereturnbanks = (cout) => {
        const bankName = cout;
        setBeneficiarydetails({...beneficiarydetails, ...{ bankName } });
    }

    const handleSubmit = e => {
        e.preventDefault(); setIsLoading(true); setSubmitted(true);
        createconvert(transferdetails, setNotify, ActionTypes.ADD_CONVERT_SUCCESS, ActionTypes.ADD_CONVERT_FAIL, setShow, setIsLoading);
    };

    const proceedToTwo = () => {
        if(transactionstate) {
            setStepOne(false);
            setStepTwo(true);
        }        
    }

    const proceedToThree = () => {
        setStepTwo(false);
        setStepThree(true);
    }

    const backToOne = () => {        
        setStepOne(true);
        setStepTwo(false);
    }

    const backToTwo = () => {        
        setStepThree(false);
        setStepTwo(true);
    }

    const postBeneficiaryDetails = e => {
        e.preventDefault();
            if(beneficiarydetails.accountNumber !== undefined && beneficiarydetails.accountCurrency !== undefined && beneficiarydetails.customerId !== undefined && beneficiarydetails.country !== undefined && beneficiarydetails.bankName !== undefined )
            {
                if(transactionstate.id) {
                    setIsLoading(true);
                    setBenAdded(true);
                    createbeneficiary(beneficiarydetails, transactionstate.id, setIsLoading, setNotify, ActionTypes.ADD_NEW_BENEFICIARY_SUCCESS, ActionTypes.ADD_NEW_BENEFICIARY_FAIL, setShow);
                }
            } else{
            }
    };

    const addExistingBeneficiary = () => {
        setBeneficiaryLoading(true);
        setBenAdded(true);
        addExistBeneficiary(beneficiaryid.receiverID, transactionstate.id, setBeneficiaryLoading, setNotify, ActionTypes.ADD_EXISTING_BENEFICIARY_SUCCESS, ActionTypes.ADD_EXISTING_BENEFICIARY_FAIL, setShow)
    }
    
    const downloadReceipt = () => {
        setBeneficiaryLoading(true);
        downloadreceiptaction(transactionstate.id, setNotify, ActionTypes.DOWNLOAD_TRANSACTION_RECEIPT_SUCCESS, ActionTypes.DOWNLOAD_TRANSACTION_RECEIPT_FAIL, setShow);
    }


    return (
        <>
        <div className="app-page-title app-page-title-simple">
            <div className="page-title-wrapper">
                <div className="page-title-heading" style={{marginLeft: 16}}>
                    <div>
                        <div className="page-title-head center-elem">
                            <span className="d-inline-block"><h2>Send Money</h2></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="main-card mb-3 card">
                <div className="card-body">
                    <div id="smartwizard" className="sw-main sw-theme-default">
                    <ul className="forms-wizard nav nav-tabs step-anchor">
                        <li className="nav-item active">
                        <a href="#step-1" className="nav-link">
                            <em>1</em><span>Conversion</span>
                        </a>
                        </li>
                        <li className="nav-item active" >
                        <a href="#step-2" className="nav-link">
                            <em>2</em><span>Beneficiary Details</span>
                        </a>
                        </li>
                        <li className="nav-item active" >
                        <a href="#step-3" className="nav-link">
                            <em>3</em><span>Choose Payment</span>
                        </a>
                        </li>
                    </ul>
                    
                    {/* <div className="form-wizard-content sw-container tab-content"> */}
                         <div className="tab-pane step-content" hidden={!stepone}>
                            <div className="row">
                                    <div className="col-md-12 col-lg-6 col-xl-6">
                                        <div className="card-shadow-primary card-border mb-3 card">
                                            <div className="dropdown-menu-header">
                                            <div className="dropdown-menu-header-inner bg-danger">
                                                <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/city2.jpg")'}} />
                                                <div className="menu-header-content">                                            
                                                </div>
                                            </div>
                                            </div>
                                            <div className="scroll-area-sm convert">
                                            <div className="scrollbar-container">
                                                <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                        <div className="col-md-12 position-relative form-group">
                                                            <div className="form-row">
                                                                <div className="position-relative form-group col-md-12">
                                                                    <label htmlFor="exampleAmount"><strong>Amount</strong></label>
                                                                    <input name="amount" id="exampleAmount" placeholder="Amount you are sending" type="number" min="0" className="form-control" 
                                                                        onChange={(event) => {
                                                                            let amount = event.target.value;
                                                                            let amountToSend = Number(amount)
                                                                            setTransferDetails({...transferdetails, ...{ amountToSend } }); 
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                   
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                    <div className="col-md-12 position-relative form-group">
                                                        <div className="form-row">                                            
                                                            <div className="col-md-12"> 
                                                                <label htmlFor="exampleGender"><strong>Sending From</strong></label>
                                                                
                                                                <CountryAutocomplete className="mb-2 form-control" placeholder="Type to Select a Country"
                                                                    suggestions={ allsendingcurrencystate } passChildData={handlesendingfrom}
                                                                />

                                                            </div>                                           
                                                        </div>
                                                    </div>

                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                    <div className="col-md-12 position-relative form-group">
                                                        <div className="form-row">
                                                            <div className="col-md-12"> 
                                                                <label htmlFor="exampleGender"><strong>Receiving From</strong></label>
                                                                <CustomCountryAutocomplete className="mb-2 form-control" placeholder="Type and Select a Country"
                                                                    suggestions={ allreceivingcurrencystate } passChildData={handlereceivingfrom}
                                                                /> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                    <div className="col-md-12 position-relative form-group">
                                        
                                                        <label htmlFor="exampleGender"><strong>Payment Purpose</strong></label>
                                                        <div className="form-row">
                                                            <select type="select" 
                                                                    id="namePrefix" 
                                                                    name="namePrefix" 
                                                                    className="custom-select col-md-12"
                                                                        onChange={(event) => {
                                                                            const purpose = event.target.value;
                                                                            setTransferDetails({...transferdetails, ...{ purpose } }); 
                                                                        }}
                                                                    >
                                                                <option defaultValue>Select</option>
                                                                {allpurposestate?.map((currency, index) => (
                                                                    <option key={currency} value={currency}>
                                                                        {currency}
                                                                    </option>
                                                                ))}
                        
                                                            </select>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-group-item">
                                                    <div className="widget-content p-0">
                                                    <div className="col-md-12 position-relative form-group">
                                                        <div className="form-row">
                                                            <div className="col-md-12"> 
                                                                <div className="position-relative form-group">
                                                                <label htmlFor="exampleText"><strong>Transaction Description</strong></label>
                                                                <textarea name="text" id="Paymentdescription" className="form-control"
                                                                    onChange={(event) => {
                                                                        const description = event.target.value;
                                                                        setTransferDetails({...transferdetails, ...{ description } }); 
                                                                    }}
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                            <div className="text-center d-block card-footer">
                                            <button className="mb-2 mr-2 btn btn-danger btn-lg btn-block" disabled={isLoading} onClick={handleSubmit}>Initialize Transaction</button>
                                           
                                            </div>
                                        </div>
                                    </div>

                                       
                                        <div className="col-md-12 col-lg-6 col-xl-6">
                                            <div className="card-shadow-primary profile-responsive card-border mb-3 card">
                                            <div className="dropdown-menu-header">
                                                <div className="dropdown-menu-header-inner bg-danger">
                                                <div className="menu-header-image" style={{backgroundImage: 'url("assets/images/dropdown-header/abstract1.jpg")'}} />
                                                
                                                </div>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                <h3 className="widget-numbers widget-numbers-sm text-danger" style={{float: 'right', marginLeft: '82px', fontWeight: 'bolder'}}>Welcome, {authstate.unique_name}</h3><br></br>
                                                <br></br>
                                            
                                                <p className="deeped" style={{float: 'right'}}>If you dislike the non-accepted character showing for a split-second before being erased, 
                                                    the method below is my solution. Note the numerous additional conditions, this is to avoid 
                                                    disabling all sorts of navigation and hotkeys. If anyone knows how to compactify this, let us know!</p>
                                                
                                                </li>
                                                
                                                <li className="list-group-item">
                                                <div className="widget-content p-0">
                                                    <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="icon-wrapper m-0">
                                                        <div className="progress-circle-wrapper">
                                                        <div className="circle-progress d-inline-block circle-progress-success">
                                                            <small/>
                                                        </div>

                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-left">
                                                        <div className="widget-heading">Secure Payment</div>
                                                        <div className="widget-subheading">Guaranteed</div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="widget-numbers widget-numbers-sm text-danger" style={{fontSize: 16}}><span>CEO, IJC Global</span>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </li>                                                
                                            </ul>
                                            </div>


                                            {(() => {
                                                if(transactionstate)
                                                {
                                                    return <div className="card-hover-shadow card-border mb-3 card">
                                                    <div className="dropdown-menu-header">
                                                        <div className="dropdown-menu-header-inner bg-warning">
                                                        <div className="menu-header-content">
                                                            
                                                            <div>
                                                            
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left">
                                                                <div className="widget-heading">Convertion Status </div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                <div className="widget-numbers text-success" style={{fontSize: 16}}>
                                                                    {(() => {
                                                                        if(conversionstate)
                                                                        {
                                                                            return <span className="user-details-title">Success</span>
                                                                        } else {
                                                                            return <h3 className="user-details-title">null</h3>
                                                                        }
                                                                    })()}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left">
                                                                <div className="widget-heading">Transaction Status </div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                <div className="widget-numbers text-warning" style={{fontSize: 16}}>{transactionstate?.transactionStatus}</div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left">
                                                                <div className="widget-heading">Amount To Send</div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.amountToSend}</div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left">
                                                                <div className="widget-heading">Amount To Receive </div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                <div className="widget-numbers text-danger" style={{fontSize: 16}}>{transactionstate?.amountToReceive}</div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-outer">
                                                            <div className="widget-content-wrapper">
                                                            
                                                                <div className="widget-content-right">
                                                                <button className="btn-shadow-danger btn btn-danger btn-lg" onClick={proceedToTwo}>Add Beneficiary</button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </div>
    
                                                } else {
                                                    return <div></div>
                                                }
                                            })()}

                                            
                                        </div>
                                    
                                    
                                    </div>
                                    <div className="divider" />
                            <div className="clearfix">
                            {/* <button type="button" id="reset-btn" className="btn-shadow float-left btn btn-link">Reset</button> */}
                            <button hidden={!transactionstate} type="button" id="next-btn" className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-primary" onClick={proceedToTwo}>Next</button>
                            {/* <button type="button" id="prev-btn" className="btn-shadow float-right btn-wide btn-pill mr-3 btn btn-outline-secondary">Previous</button> */}
                            </div>
                        </div>
                        
                    
                        <div className="tab-pane step-content" hidden={!steptwo}> {/* style={{display: 'none'}} */}
                        
                        <div id="accordion" className="accordion-wrapper mb-3">
                            <div className="card">
                            <div id="headingOne" className="card-header">
                                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" className="text-left m-0 p-0 btn btn-link btn-block">
                                <span className="form-heading">Beneficiary Information<p>Select an Existing or Add a new beneficiary details below</p></span>
                                </button>
                            </div>
                            <div data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne" className="collapse show">
                                <div className="card-body">

                                    <div className="col-md-12 position-relative form-group ">
                                        <div className="form-row">
                                            <div className="position-relative form-group col-md-12">
                                            <div className="card-title">Existing Beneficiary List</div>                                                
                                                <div className="form-row">
                                                <select type="select" 
                                                        id="namePrefix" 
                                                        name="namePrefix" 
                                                        className="custom-select col-md-12"
                                                            onChange={(event) => {
                                                                const receiverID = event.target.value;
                                                                setBeneficiaryId({...beneficiaryid, ...{ receiverID } }); 
                                                            }}
                                                        >
                                                    <option value="0"> Select Beneficiary </option>
                                                    {alluserreceivers?.map((currency, index) => (
                                                        <option key={currency.customerId} value={currency.customerId}>
                                                            {currency.accountNumber}
                                                        </option>
                                                    ))}
                                                    <option value="0">Add New Beneficiary </option>
                                                </select>
                                                </div>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    <div hidden={recactive} className="col-md-12 position-relative form-group ">
                                        <div className="card-title">Add NEW Beneficiary</div>
                                        <div className="form-row">                                            
                                            <div className="col-md-4"> 
                                                <label htmlFor="exampleGender">Bank Name</label>
                                                <BankAutocomplete placeholder="Type and Select a Bank"
                                                    suggestions={allbanks} passChildData={handlereturnbanks}
                                                />
                                            </div>
                                           
                                                    <div className="col-md-8"> 
                                                            <label htmlFor="exampleGender">Corresponding Bank Country</label>
                                                            <CountryAutocomplete disabled={isNigeria} placeholder="Type and Select a Country"
                                                                suggestions={allcountriesstate} passChildData={handlereturncountry}
                                                            />
                                                        </div>
                                                
                                                                                    
                                        </div>
                                    </div>


                                    <div hidden={recactive} className="col-md-12 position-relative form-group ">
                                        <div className="form-row">
                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Account Number</label>
                                                <input name="amount" id="exampleAmount" placeholder="Account Number/IBAN" type="text" className="form-control" 
                                                    onChange={(event) => {
                                                        const accountNumber = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ accountNumber } }); 
                                                    }}
                                                />
                                            </div>

                                                    <div className="position-relative form-group col-md-4">
                                                            <label htmlFor="exampleAmount">Corresponding Bank Name</label>
                                                            <input disabled={isNigeria} name="amount" id="exampleAmount" placeholder="Corresponding Bank Name" type="text" className="form-control" 
                                                                onChange={(event) => {
                                                                    const corresBankName = event.target.value;
                                                                    setBeneficiarydetails({...beneficiarydetails, ...{ corresBankName } }); 
                                                                }}
                                                            />
                                                        </div>
                                            
                                                    <div className="position-relative form-group col-md-4">
                                                            <label htmlFor="exampleAmount">Corresponding Acct Number/IBAN</label>
                                                            <input disabled={isNigeria} name="amount" id="exampleAmount" placeholder="Account Number/IBAN" type="text" className="form-control" 
                                                                onChange={(event) => {
                                                                    const corresBankIBAN = event.target.value;
                                                                    setBeneficiarydetails({...beneficiarydetails, ...{ corresBankIBAN } }); 
                                                                }}
                                                            />
                                                        </div>
                                               
                                            
                                        </div>
                                    </div>
                                   

                                    <div hidden={recactive} className="col-md-12 position-relative form-group">
                                        <div className="form-row">                                            
                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Account Name</label>
                                                <input name="amount" id="exampleAmount" placeholder="Account Name" type="text" className="form-control" 
                                                     onChange={(event) => {
                                                        const accountName = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ accountName } }); 
                                                    }}
                                                />
                                            </div>  
                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Bank Address</label>
                                                <input name="amount" id="exampleAmount" placeholder="Bank Address" type="text" className="form-control" 
                                                    onChange={(event) => {
                                                        const bankAddress = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ bankAddress } }); 
                                                    }}
                                                />
                                            </div> 
                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Bank State</label>
                                                <input name="amount" id="exampleAmount" placeholder="Bank State" type="text" className="form-control" 
                                                    onChange={(event) => {
                                                        const bankState = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ bankState } }); 
                                                    }}
                                                />
                                            </div>                                          
                                        </div>
                                    </div>

                                    <div hidden={recactive} className="col-md-12 position-relative form-group">
                                        <div className="form-row">
                                            

                                            <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">Bank City</label>
                                                <input name="amount" id="exampleAmount" placeholder="Bank Address" type="text" className="form-control" 
                                                    onChange={(event) => {
                                                        const bankCity = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ bankCity } }); 
                                                    }}
                                                />
                                            </div>

                                            <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">Bank Postal Code</label>
                                                <input name="amount" id="exampleAmount" placeholder="Bank Postal Code" type="text" className="form-control" 
                                                    onChange={(event) => {
                                                        const bankPostalCode = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ bankPostalCode } }); 
                                                    }}
                                                />
                                            </div>

                                            <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">BSB (optional)</label>
                                                <input name="amount" id="exampleAmount" placeholder="BSB (optional)" type="text" className="form-control" 
                                                    onChange={(event) => {
                                                        const accountBSBCode = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ accountBSBCode } }); 
                                                    }}
                                                />
                                            </div>

                                            <div  className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">SWIFT (optional)</label>
                                                <input  name="amount" id="exampleAmount" placeholder="SWIFT (optional)" type="text" className="form-control" 
                                                    onChange={(event) => {
                                                        const accountSWiftCode = event.target.value;
                                                        setBeneficiarydetails({...beneficiarydetails, ...{ accountSWiftCode } }); 
                                                    }}
                                                />
                                            </div>

                                            <button disabled={isLoading} onClick={postBeneficiaryDetails} className="btn-shadow-danger btn btn-danger btn-lg col-md-12">Add New Beneficiary</button>
                                        </div>
                                        
                                    </div>                                    
                                    
                                    <button hidden={!recactive} disabled={beneficiaryLoading} onClick={addExistingBeneficiary} className="btn-shadow-danger btn btn-danger btn-lg col-md-12">Add Existing Beneficiary</button>
                                
                                </div>
                            </div>
                            </div>
                        </div>



                            <div className="divider" />
                            <div className="clearfix">
                            {/* <button type="button" id="reset-btn" className="btn-shadow float-left btn btn-link">Reset</button> */}
                            <button type="button" hidden={!benAdded} id="next-btn" className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-primary" onClick={proceedToThree}>Next</button>
                            <button type="button" id="prev-btn" className="btn-shadow float-right btn-wide btn-pill mr-3 btn btn-outline-secondary" onClick={backToOne}>Previous</button>
                            </div>                        
                        </div>

                        
                        <div className="tab-pane step-content" hidden={!stepthree}>{/* style={{display: 'none'}} */}
                            
                            <div className="no-results">

                                {(() => {
                                    if(screen === 0)
                                    {
                                        return <div className="widget-content-outer">

                                                <div className="widget-content-left fsize-1">
                                                    <h3 className="text-muted opacity-10" style={{marginLeft: 16, marginBottom: -20}}>Choose Payment Option</h3><br></br>
                                                    <span style={{marginLeft: '16px'}}>Now you can make payment for the transaction</span>
                                                </div>
            
                                                <div className="widget-content-wrapper" style={{marginBottom: 95}}>
            
                                                </div>
            
                                                <div className="col-md-12 position-relative form-group">
                                                    <div className="form-row">                               
                                                        <div className="col-md-4"> 
                                                            <label className="form-check-label">
                                                            <div className=" no-shadow rm-border bg-transparent text-center">
                                                            <img src="assets/images/creditcard.png" alt="" width={100} height={80} /><br></br>
                                                            
                                                            <input name="radio1" type="radio" value="creditcard" className="form-check-input" 
                                                                onChange={(event) => {
                                                                    let type = event.target.value;
                                                                    setPaymenttype({...paymenttype, ...{ type } }); 
                                                                }}
                                                            />                                     
                                                            <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Credit Card</strong>
                                                            
                                                            </div>
                                                            </label>
            
                                                        </div>
            
                                                        <div className="col-md-4"> 
                                                            <label className="form-check-label">                                  
                                                            <div className=" no-shadow rm-border bg-transparent text-center">
                                                            <img src="assets/images/transfer.png" alt="" width={100} height={80} /><br></br> 
                                                            <input name="radio1" type="radio" value="manual" className="form-check-input"
                                                                onChange={(event) => {
                                                                    let type = event.target.value;
                                                                    setPaymenttype({...paymenttype, ...{ type } }); 
                                                                }}
                                                            />
                                                            <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Domestic Wire Transfer ( Manual )</strong>
                                                            </div>
                                                        </label>
                                                        </div>   
            
                                                        <div className="col-md-4"> 
                                                            <label className="form-check-label">    
                                                                <div className=" no-shadow rm-border bg-transparent text-center">
                                                                <img src="assets/images/poli.jfif" alt="" width={100} height={80} /><br></br> 
                                                                <input name="radio1" type="radio" value="poli"  className="form-check-input" 
                                                                    onChange={(event) => {
                                                                        let type = event.target.value;
                                                                        setPaymenttype({...paymenttype, ...{ type } }); 
                                                                    }}
                                                                />
                                                                <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Direct Debit ( POLI )</strong>
                                                                </div>
                                                            </label>
                                                        </div>                                        
                                                    </div>
                                                </div>
            
                                                
                                                <div className="widget-content-wrapper" style={{marginBottom: 95, marginTop: 60}}>
            
                                                {(() => {
                                                    if(paymenttype)
                                                    {
                                                        return <button onClick={proceedPayment} className="btn-wide btn btn-danger" style={{marginRight: 16}}>   Proceed   </button>
                                                    } else {
                                                        return <></>
                                                    }
                                                })()}
            
                                                
            
                                                </div>
                                            </div>
                                
                                    } else if(screen === 2) {
                                        return <div className="widget-content-outer">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-12">
                                                            <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                                            <div className="widget-content p-0 w-100">
                                                            <div className="widget-content-outer">
                                                                <div className="widget-content-wrapper" style={{marginBottom: 50}}>
                
                                                                <div className="widget-content-left fsize-1 col-md-12">
                                                                    <h5 className="text-muted opacity-10">Direct Deposit - POLI Payment</h5><br></br>
                                                                    <div className="progress-bar-xs progress" style={{ marginRight: 16}}>
                                                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            
                                                                </div>
                
                                                            <div className="col-md-12 position-relative form-group">
                                                                    <div className="form-row">
                                                                        <div className="position-relative form-group col-md-6">
                                                                            <label htmlFor="exampleAmount"></label>
                                                                            
                                                                        </div>
                                                                        <div className="position-relative form-group col-md-6 left_margin">
                                                                            <br></br>
                
                                                                            <div className=" no-shadow rm-border bg-transparent text-center">
                                                                                <img src="assets/images/poli.jfif" width={400} height={300} />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                
                                                                
                                                            
                
                                                                <div className="col-md-6 position-relative form-group" style={{marginTop: -195}}>
                                                                <button className="mb-2 mr-2 btn-wide btn-square btn btn-danger btn-block btn-lg" style={{marginRight: 16}}>PAY NOW</button>
                                                                </div>
                                                                <span className="text-center col-md-6">Click Pay now to complete this transaction</span>
                
                                                                <div className="" style={{marginTop: 95}}>
                                                                    <div className="form-row">
                                                                                <span className="text-success pl-2">
                                                                                    <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
                                                                                </span>
                                                                    </div>
                                                                </div>
                
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    } else if(screen === 3) {
                                        return <div className="widget-content-outer"> 
                                                    <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-content p-0 w-100">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper" style={{marginBottom: 55}}>
                                

                                    <div className="widget-content-left fsize-1 col-md-12">
                                        <h5 className="text-muted opacity-10" style={{marginLeft: 16}}>Domestic Wire Transfer</h5><br></br>
                                        <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                        </div>
                                        </div>
                                    </div>
                                    </div>


                                    

                                    <div className="col-md-12 position-relative form-group ">
                                        <div className="form-row">                                            
                                            <div className="col-md-6"> 
                                                <label htmlFor="exampleGender">Select Banks</label>
                                               
                                                <BankAutocomplete placeholder="Type and Select a Bank"
                                                    suggestions={allbanks} passChildData={handlereturnbanks}
                                                />
                                            </div>
                                            <div className="col-md-6" style={{marginTop: 1}}> 
                                                <div className="position-relative form-group">
                                                <label htmlFor="exampleText" >Transaction Description</label>
                                                <input type="text" name="fileToUpload" defaultValue={transactionstate.paymentDescription} className="form-control" />
                                                </div>
                                            </div>                                          
                                        </div>
                                    </div>

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    

                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-content p-0 w-100">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper" style={{marginBottom: 55}}>
                                        
                                        <div className="widget-content-left card-shadow-danger border mb-3 card card-body border-danger col-md-6">
                                            <h5 className="card-title">Transaction Reference Number</h5>
                                            {transactionstate.transactionRefNumber}
                                        </div>

                                        <div className="widget-content-right card-shadow-danger border mb-3 card card-body border-danger col-md-6">
                                            <h5 className="card-title">Payment Method</h5>
                                            Domestic Wire Transfer
                                        </div>


                                        {/* <div className="ml-auto">
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <h5 className="text-muted opacity-10" style={{marginLeft: 8}}>Payment Method</h5>
                                                <span className="text-danger pl-2">
                                                    <span className="" style={{marginTop: 15, marginRight: 16}}> Domestic Wire Transfer   </span>
                                                    </span>
                                            </div>
                                        </div>                                     */}
                                    </div>

                                    <div className="widget-content-right w-100">
                                        <h5 className="text-muted opacity-10 card-title" style={{marginLeft: 16}}>IJC GLobal Account - Beneficiary Details</h5>
                                        <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                        </div>
                                        </div>
                                    </div>


                                    <div className="col-md-12 position-relative form-group" style={{marginTop: 24}}>
                                        <div className="form-row">
                                        <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">Account Holder's Name</label>
                                                <h5 className="text-muted opacity-10 card-title"> {transactionstate.fullName} </h5>
                                            </div>

                                            <div className="position-relative form-group col-md-2">
                                                <label htmlFor="exampleAmount">Receiving Country</label>
                                                <h5 className="text-muted opacity-10 card-title"> {transactionstate.receivingCountry}</h5>
                                            </div>

                                            <div className="position-relative form-group col-md-2">
                                                <label htmlFor="exampleAmount">Amount To Send</label>
                                                <h5 className="text-muted opacity-10 card-title"> {transactionstate.amountToSend}</h5>
                                            </div>

                                            <div className="position-relative form-group col-md-2">
                                                <label htmlFor="exampleAmount">Amount To Receive</label>
                                                <h5 className="text-muted opacity-10 card-title"> {transactionstate.amountToReceive}</h5>
                                            </div>

                                            <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">Payment Date</label>
                                                <h5 className="text-muted opacity-10 card-title">{transactionstate.dateSent.substring(0,10)}  </h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-auto">
                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">
                                                <button className="btn-wide btn btn-danger btn-icon btn-icon-right" onClick={downloadReceipt} style={{marginTop: 15, marginRight: 16}}>Download Payment Info <i className="pe-7s-cloud-download btn-icon-wrapper"> </i> </button>
                                                </span>
                                        </div>
                                    </div>

                               

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        
                        
                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">          
                                <div className="position-relative form-group col-md-4">
                                    <span> 
                                        <input type="file" name="fileToUpload" className="mb-2 mr-2 btn-pill btn btn-danger btn-lg btn-block"
                                            onChange={(event) => {
                                                const fileToUpload = event.target.files[0];
                                                setUploadDetails({...uploaddetails, ...{ fileToUpload } }); 
                                            }}
                                        />
                                    </span>
                                </div>                                  
                                <div className="position-relative form-group col-md-4">
                                    <span> 
                                    <button className="mb-2 mr-2 btn-pill btn btn-danger btn-lg btn-block btn-icon btn-icon-right" style={{marginRight: -3}} onClick={uploadConfirmation}>Upload Payment Confirmation <i className="pe-7s-cloud-upload btn-icon-wrapper"> </i></button>
                                    {/* <button className="btn-wide mb-2 mr-2 btn-icon btn-icon-right btn-shadow btn-pill btn btn-outline-danger">Normal<i className="pe-7s-volume btn-icon-wrapper"> </i></button> */}

                                    </span>
                                </div>  
                                <div className="position-relative form-group col-md-4">
                                    <button className="mb-2 mr-2 btn-pill btn btn-danger btn-lg btn-block" >Finish</button>
                                </div>                                           
                            </div>
                        </div>

                                    <div className="" style={{marginTop: 35}}>
                                                <div className="form-row">
                                                            <span className="text-success pl-2">
                                                                <button className="btn-wide btn btn-danger" style={{marginLeft: 12}} onClick={resetScreen}>   Previous   </button>
                                                            </span>
                                                </div>
                                    </div>
                                                </div>
                                    } else if(screen === 4) {
                                        return  <div className="widget-content-outer">
                                        <div className="widget-content-wrapper" style={{marginBottom: 50}}>
    
                                        <div className="widget-content-left fsize-1 col-md-12">
                                            <h5 className="text-muted opacity-10">Credit Card Payment</h5><br></br>
                                            <div className="progress-bar-xs progress" style={{ marginRight: 16}}>
                                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                            </div>
                                            </div>
                                        </div>    
                                        </div>
    
                                       <div className="col-md-12 position-relative form-group">
                                            <div className="form-row">
                                                <div className="position-relative form-group col-md-6">
                                                    <label htmlFor="exampleAmount"></label>
                                                    
                                                </div>
                                                <div className="position-relative form-group col-md-6 left_margin">
                                                    <br></br>
    
                                                    <div className=" no-shadow rm-border bg-transparent text-center">
                                                        <img src="assets/images/creditcard.png" width={200} height={160} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12 position-relative form-group top_margin">
                                            <div className="form-row">
                                                <div className="position-relative form-group col-md-6">
                                                    <label htmlFor="exampleAmount">Card Number</label>
                                                    <input name="amount" id="exampleAmount" placeholder="Card Number" type="number" min="0" className="form-control" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12 position-relative form-group">
                                            <div className="form-row">
                                                <div className="position-relative form-group col-md-6">
                                                    <label htmlFor="exampleAmount">Card Holder's Name</label>
                                                    <input name="amount" id="exampleAmount" placeholder="Card Holder's Name" type="text"  className="form-control" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12 position-relative form-group ">
                                            <div className="form-row">
                                                <div className="position-relative form-group col-md-3">
                                                    <label htmlFor="exampleAmount">Expiry Date</label>
                                                    <input name="amount" id="exampleAmount" placeholder="MM/YY" type="text" className="form-control" 
                                                    />
                                                </div>
    
                                                <div className="position-relative form-group col-md-3">
                                                    <label htmlFor="exampleAmount">CVV</label>
                                                    <input name="amount" id="exampleAmount" placeholder="CVV" type="text" className="form-control" 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                       
    
                                        <div className="col-md-6 position-relative form-group">
                                        <button className="mb-2 mr-2 btn-wide btn-square btn btn-danger btn-block btn-lg" style={{marginRight: 16}}>PAY NOW</button>
                                        </div>
    
                                        <div className="" style={{marginTop: 35}}>
                                            <div className="form-row">
                                                        <span className="text-success pl-2">
                                                            <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
                                                        </span>
                                            </div>
                                        </div>
    
                                    </div>
                                    
                                    }
                                })()}

                                
                                
                            </div>
                                
                            <div className="divider" />
                            <div className="clearfix">
                            {/* <button type="button" id="reset-btn" className="btn-shadow float-left btn btn-link">Reset</button> */}
                            {/* <button type="button" id="next-btn" className="btn-shadow btn-wide float-right btn-pill btn-hover-shine btn btn-primary" onClick={proceedToThree}>Next</button> */}
                            <button type="button" id="prev-btn" className="btn-shadow float-right btn-wide btn-pill mr-3 btn btn-outline-secondary" onClick={backToTwo}>Previous</button>
                            </div>
                        
                        </div>

                       {/*  </div>

                    </div> */}
                    </div>
                </div>
                </div>
            </div>
        </div>



</>


    )
}


const mapStateToProps = (state) => {
    return {
        transactionstate: state.transactionstate.transactionstate,
        authstate: state.authstate.authstate,
        allbanks: state.allbanks.allbanks,
        allcountriesstate: state.allcountriesstate.allcountriesstate,
        conversionstate: state.conversionstate.conversionstate,
        allreceivingcurrencystate: state.allreceivingcurrencystate.allreceivingcurrencystate,
        allsendingcurrencystate: state.allsendingcurrencystate.allsendingcurrencystate,        
        allpurposestate: state.allpurposestate.allpurposestate,
        alluserreceivers: state.alluserreceivers.alluserreceivers,
        redirecturl: state.redirecturl.redirecturl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchallcountry: (setError) => {
            dispatch(FetchAllCountry(setError));
        },
        fetchaccounts: (show, setNotify, successactiontype, failureactiontype, setShow) => {
            dispatch(ShowLoading(setNotify));
            dispatch(GetAction(show, setNotify, successactiontype, failureactiontype, setShow)
        )},
        fetchallreceivingcountry: (show, setNotify, successaction, failaction, setShow) => {
            dispatch(GetAction(show, setNotify, successaction, failaction, setShow));
        },
        fetchallsendingcountry: (show, setNotify, successaction, failaction, setShow) => {
            dispatch(GetAction(show, setNotify, successaction, failaction, setShow));
        },
        fetchallpurpose: (show, setNotify, successaction, failaction, setShow) => {
            dispatch(GetPurposeAction(show, setNotify, successaction, failaction, setShow));
        },
        fetchalluserreceivers: (show, setNotify, successaction, failaction, setShow) => {
            dispatch(GetAction(show, setNotify, successaction, failaction, setShow));
        },
        createconvert: (convertiondetails, setNotify, successactiontype, failureactiontype, setShow, setIsLoading) => {
            // dicreateconvertspatch(ShowLoading(convertiondetails));
            dispatch(CreateAction(convertiondetails, setNotify, successactiontype, failureactiontype, setShow, setIsLoading))
        },
        createtransact: (transactiondetails, setNotify, successactiontype, failureactiontype, setShow, setIsLoading) => {
            // dispatch(ShowLoading(transactiondetails));
            dispatch(CreateAction(transactiondetails, setNotify, successactiontype, failureactiontype, setShow, setIsLoading))
        }, 
        createbeneficiary: (transactiondetails, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow) => {
            dispatch(PatchAction(transactiondetails, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow))
        },
        addExistBeneficiary: (receiverID, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow) => {
            dispatch(PatchAction(receiverID, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow))
        },
        addpaymentstotransaction: (receiverID, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow) => {
            dispatch(PatchAction(receiverID, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow))
        },
        downloadreceiptaction: (id, setNotify, successactiontype, failureactiontype, setShow) => {
            dispatch(GetAction(id, setNotify, successactiontype, failureactiontype, setShow))
        },
        uploadconfrimationaction: (fileupload, id, setBeneficiaryLoading, setNotify, successactiontype, failureactiontype, setShow) => {
            dispatch(PatchAction(fileupload, id, setBeneficiaryLoading, setNotify, successactiontype, failureactiontype, setShow))
        },
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sendmoneyarea);
