import React from 'react'

export default function NewBeneficiaryarea() {
    return (
        <>
            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading" style={{marginLeft: 16}}>
                        <div>
                            <div className="page-title-head center-elem">
                                <span className="d-inline-block"><h2>Beneficiary</h2></span>
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
                            
                        <div className="row ">
                                    <div className="ml-auto" style={{marginRight: 0, marginTop: -2}}>
                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">
                                                <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg">Add New Beneficiary</button>
                                                </span>
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
                        <div className="widget-content-left fsize-1">
                            <h5 className="text-muted opacity-10" style={{marginLeft: 16, marginTop: 16}}>Choose Destination</h5><br></br>
                        </div>
                        <div style={{marginLeft: 16}}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1" style={{marginRight: 50}}>
                                    Nigerian Account
                                </label>
                            
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    International Account
                                </label>
                            </div>
                        </div>

                        <div className="widget-content-wrapper" style={{marginBottom: 50}}>

                       
                        {/* <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                            </div>
                            </div>
                        </div> */}
                        </div>

                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleName" >Account Country</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">-- Select Country --</option>
                                        <option value="Male">Nigeria</option>
                                        <option value="Female">Ghana</option>
                                    </select>
                                </div>

                                <div className="position-relative form-group col-md-8">
                                    <label htmlFor="exampleName" >Corresponding Bank Country</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">-- Select Country --</option>
                                        <option value="Male">Nigeria</option>
                                        <option value="Female">Ghana</option>
                                    </select>
                                </div>
                               
                                {/* <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleEmail" >Email</label>
                                    <input name="email" id="exampleEmail" placeholder="Email" type="email" className="form-control" 
                                    />
                                </div>

                                <div className="col-md-4"> 
                                    <label htmlfor="exampleDate">Date of Birth</label>
                                    <div className="position-relative form-group">
                                        <input name="date" id="exampleDate" placeholder="date placeholder" type="date" className="form-control" />
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleName" >Select Bank</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">-- Select Bank --</option>
                                        <option value="Male">GTB</option>
                                        <option value="Female">Sterling</option>

                                    </select>
                                </div>
                                <div className="position-relative form-group col-md-4">
                                        <label htmlFor="exampleIban">IBAN (Optional)</label>
                                        <input name="iban" id="exampleIban" placeholder="IBAN (Optional)" type="text" className="form-control"/>
                                </div>
                                <div className="position-relative form-group col-md-4">
                                        <label htmlFor="exampleSwift" >SWIFT (Optional)</label>
                                        <input name="swift" id="exampleSwift" placeholder="SWIFT (Optional)" type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                                <div className="position-relative form-group col-md-4">
                                        <label htmlFor="exampleaccountnumber">Account Number</label>
                                        <input name="accountnumber" id="exampleaccountnumber" placeholder="Account Number" type="text" className="form-control"/>
                                </div>
                                <div className="position-relative form-group col-md-3">
                                        <label htmlFor="exampleaccountname">Account Name</label>
                                        <input name="accountname" id="exampleaccountname" placeholder="Account Name" type="text" className="form-control"/>
                                </div>
                                <div className="position-relative form-group col-md-3">
                                        <label htmlFor="exampleBsb">BSB (Optional)</label>
                                        <input name="bsb" id="exampleBsb" placeholder="BSB (Optional)" type="text" className="form-control"/>
                                </div>
                                <div className="position-relative form-group col-md-2">
                                        <label htmlFor="exampleBank" >Bank Code</label>
                                        <input name="bank" id="exampleBank" placeholder="Bank Code" type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>

                        {/* <div className="ml-auto">
                                <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                    <span className="text-success pl-2">
                                        <button className="btn-wide btn btn-danger" style={{marginTop: 15, marginRight: 16}}>   Update User   </button>
                                        </span>
                                </div>
                            </div> 
                        */}
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>

           
        </>

    )
}
