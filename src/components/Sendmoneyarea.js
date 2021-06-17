import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { ShowLoading, FetchAllCountry} from '../redux/actions/authaction';
import { CreateAction } from '../redux/actions/createaction';
import { GetPurposeAction } from '../redux/actions/getaction';
import ActionTypes from "../redux/actiontype/ActionTypes"
import CountryAutocomplete from './CountryAutocomplete';


const Sendmoneyarea = (props) => {
    const { isLoading, fetchallcountry, allcountriesstate, allpurposestate, fetchallpurpose, setNotify, show, handleShow, setShow, createconvert} = props;

    const [transferdetails, setTransferDetails] = useState({});

    const [error, setError] = useState({
        hasError: false,
        message: "",
    })

    //fetch all countries
    useEffect(() => {
        fetchallcountry(setError);
        fetchallpurpose(show, setNotify, ActionTypes.FETCH_PURPOSE_SUCCESS, ActionTypes.FETCH_PURPOSE_FAIL, setShow);
    }, []);

    //handle the return value from country dropdown selection
    const handlesendingfrom = (cout) => {
        const sendingfrom = cout.substring(0, cout.length - 5);
        setTransferDetails({...transferdetails, ...{ sendingfrom } });
    }

    const handlereceivingfrom = (cout) => {
        const receivingfrom = cout.substring(0, cout.length - 5);
        setTransferDetails({...transferdetails, ...{ receivingfrom } });
    }

    const handleSubmit = e => {
        e.preventDefault();
        createconvert(transferdetails, setNotify, ActionTypes.ADD_CONVERT_SUCCESS, ActionTypes.ADD_CONVERT_FAIL, handleShow, setShow);
    };

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


        <div className="col-md-12">
            <div className="mb-3 card">
                <div className="tabs-lg-alternate card-header">
                <ul className="nav nav-justified">
                    <li className="nav-item">
                    <a data-toggle="tab" href="#tab-eg9-0" className="nav-link active">
                        <div className="widget-number">Conversion</div>
                        <div className="tab-subheading">
                        <span className="pr-2 opactiy-6">
                        </span>
                        
                        </div>
                    </a></li>
                    <li className="nav-item">
                    <a data-toggle="tab" href="#tab-eg9-1" className="nav-link">
                        <div className="widget-number">Beneficiary Details</div>
                        <div className="tab-subheading">&#160;</div>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a data-toggle="tab" href="#tab-eg9-2" className="nav-link">
                        <div className="widget-number">Choose Payment</div>
                        <div className="tab-subheading">
                        <span className="pr-2 opactiy-6">
                        </span>
                        
                        </div>
                    </a>
                    </li>
                </ul>
                </div>
                <div className="tab-content">
                <div className="tab-pane active" id="tab-eg9-0" role="tabpanel">
                    <div className="card-body">
                   
                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-content p-0 w-100">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper" style={{marginBottom: 50}}>
                                
                                    <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
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
                                                <h3 style={{float: 'left', marginLeft: '82px'}}>Welcome,</h3><br></br>
                                                <br></br>
                                            
                                                <p className="deeped">If you dislike the non-accepted character showing for a split-second before being erased, 
                                                    the method below is my solution. Note the numerous additional conditions, this is to avoid 
                                                    disabling all sorts of navigation and hotkeys. If anyone knows how to compactify this, let us know!</p>
                                                <span>CEO, IJC Global</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 position-relative form-group top_margin">
                                        <div className="form-row">
                                            <div className="position-relative form-group col-md-6">
                                                <label htmlFor="exampleAmount">Amount</label>
                                                <input name="amount" id="exampleAmount" placeholder="Amount" type="number" min="0" className="form-control" 
                                                onChange={(event) => {
                                                    const amount = event.target.value;
                                                    setTransferDetails({...transferdetails, ...{ amount } }); 
                                                }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    
                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">                                            
                                            <div className="col-md-6"> 
                                                <label htmlFor="exampleGender">Sending From</label>
                                                
                                                <CountryAutocomplete className="mb-2 form-control" placeholder="Select a Country"
                                                    suggestions={allcountriesstate} passChildData={handlesendingfrom}
                                                />
                                            </div>                                           
                                        </div>
                                    </div>

                                    

                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">
                                            <div className="col-md-6"> 
                                                <label htmlFor="exampleGender">Receiving From</label>
                                                <CountryAutocomplete className="mb-2 form-control" placeholder="Select a Country"
                                                    suggestions={allcountriesstate} passChildData={handlereceivingfrom}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <select type="select" 
                                            id="namePrefix" 
                                            name="namePrefix" 
                                            className="custom-select col-md-6"
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

                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">
                                            <div className="col-md-6" style={{marginTop: 1}}> 
                                                <div className="position-relative form-group">
                                                <label htmlFor="exampleText" >Transaction Description</label>
                                                <textarea name="text" id="exampleText" className="form-control" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div className="ml-auto">
                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">
                                                <button className="btn-wide btn btn-danger" onClick={handleSubmit} style={{marginTop: 15, marginRight: 16}}>   Next   </button>
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
                <div className="tab-pane" id="tab-eg9-1" role="tabpanel">
                    <div className="card-body">
                    
                    <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-content p-0 w-100">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper" style={{marginBottom: 55}}>
                                
                                    <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                        </div>
                                        </div>
                                    </div>
                                    </div>


                                    

                                    <div className="col-md-12 position-relative form-group ">
                                        <div className="form-row">                                            
                                            <div className="col-md-4"> 
                                                <label htmlFor="exampleGender">Bank</label>
                                                <select type="select" 
                                                    id="gender" 
                                                    name="gender"
                                                    className="mb-2 form-control"
                                                    >
                                                    <option value="">-- Select Bank --</option>
                                                    <option value="Male">First Bank</option>
                                                    <option value="Female">Sterling Bank</option>
                                                </select>
                                            </div>
                                            <div className="col-md-8"> 
                                                <label htmlFor="exampleGender">Corresponding Bank Country</label>
                                                <select type="select" 
                                                    id="gender" 
                                                    name="gender"
                                                    className="mb-2 form-control"
                                                    >
                                                    <option value="">-- Select Country --</option>
                                                    <option value="Male">First Bank</option>
                                                    <option value="Female">Sterling Bank</option>
                                                </select>
                                            </div>                                           
                                        </div>
                                    </div>


                                    <div className="col-md-12 position-relative form-group ">
                                        <div className="form-row">
                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Account Number</label>
                                                <input name="amount" id="exampleAmount" placeholder="Account Number/IBAN" type="text" className="form-control" 
                                                />
                                            </div>

                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Bank Name</label>
                                                <input name="amount" id="exampleAmount" placeholder="Bank Name" type="text" className="form-control" 
                                                />
                                            </div>

                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Account Number</label>
                                                <input name="amount" id="exampleAmount" placeholder="Account Number/IBAN" type="text" className="form-control" 
                                                />
                                            </div>
                                        </div>
                                    </div>
                                   

                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">                                            
                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Account Name</label>
                                                <input name="amount" id="exampleAmount" placeholder="Account Name" type="text" className="form-control" 
                                                />
                                            </div>  
                                            <div className="position-relative form-group col-md-8">
                                                <label htmlFor="exampleAmount">Account Name</label>
                                                <input name="amount" id="exampleAmount" placeholder="Account Name" type="text" className="form-control" 
                                                />
                                            </div>                                           
                                        </div>
                                    </div>

                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">
                                        <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">Bank Address</label>
                                                <input name="amount" id="exampleAmount" placeholder="Bank Address" type="text" className="form-control" 
                                                />
                                            </div>

                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">BSB (optional)</label>
                                                <input name="amount" id="exampleAmount" placeholder="BSB (optional)" type="text" className="form-control" 
                                                />
                                            </div>

                                            <div className="position-relative form-group col-md-4">
                                                <label htmlFor="exampleAmount">SWIFT (optional)</label>
                                                <input name="amount" id="exampleAmount" placeholder="SWIFT (optional)" type="text" className="form-control" 
                                                />
                                            </div>
                                        </div>
                                    </div>                                    

                                    <div className="ml-auto">
                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide btn btn-danger" style={{marginRight: 16}}>   Next   </button>
                                                </span>
                                        </div>
                                    </div>

                                <div className="" style={{marginTop: -35}}>
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
                </div>
                <div className="tab-pane" id="tab-eg9-2" role="tabpanel">
                    <div className="card-body">


                    {/* Direct Deposit POLI Page start here */}

                    {/* <div className="row">
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
                        </div> */}

                    {/* Direct Deposit POLI Page Ends here */}

                    {/* Credit Card Payment start here */}

                    {/*   <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-content p-0 w-100">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper" style={{marginBottom: 50}}>

                                    <div className="widget-content-left fsize-1 col-md-12">
                                        <h5 className="text-muted opacity-10">Credit Card Payment</h5><br></br>
                                        <div className="progress-bar-xs progress" style={{ marginRight: 16}}>
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                        </div>
                                        </div>
                                    </div>
                                
                                    //  <div className="widget-content-right w-100">
                                    //     <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                                    //     <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                    //     </div>
                                    //     </div>
                                    // </div> 


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
                                </div>
                            </div>
                            </div>
                        </div> */}


                {/* Credit Card Payment End here */} 

                    {/* Domestic Wire Transfer Page */}
                        {/* <div className="row">
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
                                                <select type="select" 
                                                    id="gender" 
                                                    name="gender"
                                                    className="mb-2 form-control"
                                                    >
                                                    <option value="">-- All Bank List --</option>
                                                    <option value="Male">First Bank</option>
                                                    <option value="Female">Sterling Bank</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6" style={{marginTop: 1}}> 
                                                <div className="position-relative form-group">
                                                <label htmlFor="exampleText" >Transaction Description</label>
                                                <textarea  name="text" id="exampleText" className="form-control" defaultValue={""} />
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
                                        <div className="widget-content-left fsize-1 col-md-6">
                                            <h5 className="text-muted opacity-10" >Transaction Reference Number</h5>
                                            <h5 className="text-danger opacity-10">TYPE-2594-4331-8950</h5>
                                        </div>

                                        <div className="ml-auto">
                                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <h5 className="text-muted opacity-10" style={{marginLeft: 8}}>Payment Method</h5>
                                                <span className="text-danger pl-2">
                                                    <span className="" style={{marginTop: 15, marginRight: 16}}> Domestic Wire Transfer   </span>
                                                    </span>
                                            </div>
                                        </div>                                    
                                    </div>

                                    <div className="widget-content-right w-100">
                                        <h5 className="text-muted opacity-10" style={{marginLeft: 16}}><strong> IJC GLobal Account - Beneficiary Details </strong></h5>
                                        <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                        </div>
                                        </div>
                                    </div>


                                    <div className="col-md-12 position-relative form-group" style={{marginTop: 24}}>
                                        <div className="form-row">
                                        <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">Account Holder's Name</label>
                                                <h5 className="text-muted opacity-10"><strong> Adeyemi Olaoye </strong></h5>
                                            </div>

                                            <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">Location</label>
                                                <h5 className="text-muted opacity-10"><strong> Canada </strong></h5>
                                            </div>

                                            <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">Account Number</label>
                                                <h5 className="text-muted opacity-10"><strong> 0045338922 </strong></h5>
                                            </div>

                                            <div className="position-relative form-group col-md-3">
                                                <label htmlFor="exampleAmount">PAyement Date</label>
                                                <h5 className="text-muted opacity-10"><strong> 23/04/2021 </strong> </h5>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-auto">
                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">
                                                <button className="btn-wide btn btn-danger" style={{marginTop: 15, marginRight: 16}}>  Download Payment Info  </button>
                                                </span>
                                        </div>
                                    </div>

                               

                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <button className="mb-2 mr-2 btn-pill btn btn-danger btn-lg btn-block" style={{marginRight: -36}}>Upload Payment Confirmation</button>
                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">                                            
                                <div className="position-relative form-group col-md-8">
                                    <span> *** Policy Content Here *** </span>
                                </div>  
                                <div className="position-relative form-group col-md-4">
                                    <button className="mb-2 mr-2 btn-square btn btn-danger btn-block">Finish</button>
                                </div>                                           
                            </div>
                        </div>

                        <div className="" style={{marginTop: 35}}>
                                    <div className="form-row">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide btn btn-danger" style={{marginLeft: 12}}>   Previous   </button>
                                                </span>
                                    </div>
                        </div> */}

                        {/* Domestic Wire Transfer Page End Here */}







                        {/* Choose Payment Section Start here */}

                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                                <div className="widget-content p-0 w-100">
                                <div className="widget-content-outer">

                                    <div className="widget-content-left fsize-1">
                                        <h3 className="text-muted opacity-10" style={{marginLeft: 16, marginBottom: -20}}>Transaction Completed</h3><br></br>
                                        <span style={{marginLeft: '16px'}}>Now you can make payment for the transaction</span>
                                    </div>

                                    <div className="widget-content-wrapper" style={{marginBottom: 95}}>
                                
                                    </div>
                                    
                                    <div className="widget-content-left fsize-1">
                                        <h5 className="text-muted opacity-10" style={{marginLeft: 16}}>Choose Payment Option</h5><br></br>
                                    </div>

                                    <div className="widget-content-right w-100">
                                        <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16, marginBottom: 36, marginTop: -16}}>
                                        <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                                        </div>
                                        </div>
                                    </div>

                                    

                                    <div className="col-md-12 position-relative form-group ">
                                        <div className="form-row">                                            
                                            <div className="col-md-4"> 
                                                
                                                <div className=" no-shadow rm-border bg-transparent text-center">
                                                <img src="assets/images/creditcard.png" alt="" width={100} height={80} />
                                                <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Credit Card</strong>
                                                </div>

                                            </div>

                                            <div className="col-md-4"> 
                                                
                                                <div className=" no-shadow rm-border bg-transparent text-center">
                                                <img src="assets/images/transfer.png" alt="" width={100} height={80} />
                                                <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Domestic Wire Transfer ( Manual )</strong>
                                                </div>

                                            </div>   

                                            <div className="col-md-4"> 
                                                
                                                <div className=" no-shadow rm-border bg-transparent text-center">
                                                <img src="assets/images/poli.jfif" alt="" width={100} height={80} />
                                                <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Direct Debit ( POLI )</strong>
                                                </div>

                                            </div>                                        
                                        </div>
                                    </div>



                                <div className="" style={{marginTop: 125}}>
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
                    

                     {/* Choose Payment Section End here */}
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
        // user: state,
        // isLoading: state.loadingstate.isLoading,
        // isEmailValid: state.emailcheckstate.isValid,
        // isPhoneValid: state.phonecheckstate.isValid,
        allcountriesstate: state.allcountriesstate.allcountriesstate,
        allpurposestate: state.allpurposestate.allpurposestate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchallcountry: (setError) => {
            dispatch(FetchAllCountry(setError));
        },
        fetchallpurpose: (show, setNotify, successaction, failaction, setShow) => {
            dispatch(GetPurposeAction(show, setNotify, successaction, failaction, setShow));
        },
        createconvert: (convertiondetails, setNotify, successactiontype, failureactiontype, setShow) => {
            dispatch(ShowLoading(convertiondetails));
            dispatch(CreateAction(convertiondetails, setNotify, successactiontype, failureactiontype, setShow))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sendmoneyarea);
