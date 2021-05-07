import React from 'react'

export default function Myaccountarea() {
    return (
        <>
            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading" style={{marginLeft: 16}}>
                        <div>
                            <div className="page-title-head center-elem">
                                <span className="d-inline-block"><h2>My Account</h2></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-xl-12">
                <div className="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                    
                    {/* <div className="widget-chat-wrapper-outer">
                        <div className="col-md-4"> 
                                                
                            <div className=" no-shadow rm-border bg-transparent text-center">
                            <img src="assets/images/upload.png" width={250} height={250} />
                            <br></br>
                            <strong htmlFor="exampleGender" style={{marginLeft: 10}}>Credit Card</strong>
                            </div>

                        </div>
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
                                        <option value>Transaction Type</option>
                                        <option>Nigeria</option>
                                        <option>Algeria</option>
                                        <option>Ghana</option>
                                        <option>Egypt</option>
                                        <option>South Africa</option>
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
                    </div> */}


                    
                                
                            <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                <div className="col-md-6"> 

                                    <div className="col-md-12"> 
                                        
                                        <div className=" no-shadow rm-border bg-transparent text-center">
                                        <img src="assets/images/user.jpg" alt="" width={350} height={350} />
                                        <br></br>
                                        <h2 htmlFor="exampleGender" style={{marginLeft: 10}}>Upload Profile Picture</h2>
                                        </div>
            
                                    </div>

                                    <div className="position-relative form-group">
                                        <label htmlFor="exampleGender">Email Address</label>
                                        <input name="refnumber" id="exampleRef" placeholder="Email Address" type="email" className="form-control" 
                                                
                                        />
                                    </div>
                                    
                                    <div className="position-relative form-group">
                                        <label htmlFor="exampleGender">Account Type</label>
                                        <input name="refnumber" id="exampleRef" placeholder="Account Type" type="text" className="form-control" 
                                                
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6"> 
                                    <label htmlFor="exampleGender">Status</label>
                                    <select readonly type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="Male">Verified</option>
                                        <option value="Female">Not Verified</option>
                                    </select>

                                    <div className="position-relative form-group">
                                        <label htmlFor="exampleGender">Name</label>
                                        <input name="refnumber" id="exampleRef" placeholder="Adeyemi Olaoye" type="text" className="form-control" 
                                                
                                        />
                                    </div>

                                    <div className="position-relative form-group">
                                        <label htmlFor="exampleGender">Phone Number</label>
                                        <input name="refnumber" id="exampleRef" placeholder="+2348034784566" type="text" className="form-control" 
                                                
                                        />
                                    </div>

                                    <div className="form-row"> 
                                        <div className="position-relative form-group col-md-6">
                                            <label htmlFor="exampleGender">Gender</label>
                                            <input name="refnumber" id="exampleRef" placeholder="Male" value="Male" type="text" className="form-control" 
                                                    
                                            />
                                        </div>
                                        <div className="position-relative form-group col-md-6">
                                            <label htmlFor="exampleGender">DOB</label>
                                            <input name="refnumber" id="exampleRef" placeholder="15/04/2000" value="15/04/2000" type="text" className="form-control" 
                                                    
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="position-relative form-group">
                                        <label htmlFor="exampleGender">Password</label>
                                        <input name="refnumber" id="exampleRef" placeholder="+2348034784566" value="15/04/2000" type="password" className="form-control" 
                                                
                                        />
                                    </div>

                                    <div className="form-row"> 
                                        <div className="position-relative form-group col-md-10">
                                            <label htmlFor="exampleGender">Referral Code</label>
                                            <input name="refnumber" id="exampleRef" placeholder="+2348034784566" value="REF-9139-7332" type="text" className="form-control" 
                                                    
                                            />
                                        </div>

                                        <div className="col-md-2" > 
                                            <label htmlfor="exampleDate"></label>
                                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                        <span className="text-success pl-2">
                                                            <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg">Copy</button>
                                                            </span>
                                                    </div>                                   
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
                                    <span>Address</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="form-row">
                                
                            <div className="col-md-12 position-relative form-group">
                                
                            <div className="position-relative form-group col-md-12">
                            <input name="refnumber"  placeholder="+2348034784566" value="No 37, Ajanlekoko Street, Off Gbadamasi Lane, Idumota, Lagos" type="text" className="form-control" 
                            
                            />
                                       
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
                                    <span>My Bank Account For Compesation</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className="form-row">
                                
                            <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                               
                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender">Bank Country</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value=""> -- Select Country -- </option>
                                        <option value="Male">Nigeria</option>
                                        <option value="Female">Togo</option>
                                    </select>
                                </div>
                                
                               
                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender">Select Bank</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">-- Select Bank -- </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-4"> 
                                    <label htmlfor="exampleDate">Account Number / IBAN</label>
                                    <div className="position-relative form-group">
                                        <input name="accuntnum" id="exampleDate" placeholder="Account Number / IBAN" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-4"> 
                                    <label htmlfor="exampleDate">Account Name</label>
                                    <div className="position-relative form-group">
                                        <input name="accuntname" id="exampleDate" placeholder="Account Name" type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender">Account Currency</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">-- Select Currency -- </option>
                                        <option value="Male">Naira</option>
                                        <option value="Female">Dollar</option>
                                    </select>
                                </div>
                               
                                
                                <div className="col-md-4" style={{marginLeft: 0}}> 
                                    <label htmlfor="exampleDate"></label>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                                <span className="text-success pl-2">
                                                    <button className="btn-wide mb-2 mr-2 btn btn-shadow btn-danger btn-lg">Add / Update Account</button>
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

        </>
    )
}
