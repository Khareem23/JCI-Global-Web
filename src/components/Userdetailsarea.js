import React from 'react'

export default function Userdetailsarea() {
    return (
        <>
            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                    <div>
                        <div className="page-title-head center-elem">
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

            

            <div className="row">
                <div className="col-md-6 col-lg-12">
                    <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                    <div className="widget-content p-0 w-100">
                    <div className="widget-content-outer">
                        <div className="widget-content-left fsize-1">
                            <h3 className="text-muted opacity-6" style={{marginLeft: 16}}>User Details</h3><br></br>
                        </div>
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
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleName" >Name</label>
                                    <input name="name" id="exampleName" placeholder="Name" type="text" className="form-control" 
                                    />
                                </div>
                                
                               
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleEmail" >Email</label>
                                    <input name="email" id="exampleEmail" placeholder="Email" type="email" className="form-control" 
                                    />
                                </div>
                                <div className="col-md-4"> 
                                    <label htmlfor="exampleDate">Date of Birth</label>
                                    <div className="position-relative form-group">
                                        <input name="date" id="exampleDate" placeholder="date placeholder" type="date" className="form-control" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                                <div className="position-relative form-group col-md-4" style={{marginTop: 20}}>
                                    <label htmlFor="exampleName"><span className="text-danger">**</span>All User Fields Defined<span className="text-danger">**</span></label>                                    
                                </div>
                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender"></label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">Compliance Passed</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender"></label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">Select User Status</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                <div className="col-md-12" style={{marginTop: 1}}> 
                                    <div className="position-relative form-group">
                                    <label htmlFor="exampleText" >Status Description</label>
                                    <textarea name="text" id="exampleText" className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto">
                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                <span className="text-success pl-2">
                                    <button className="btn-wide btn btn-danger" style={{marginTop: 15, marginRight: 16}}>   Update User   </button>
                                    </span>
                            </div>
                        </div>

                        

                        
                        <div className="widget-content-left fsize-1" style={{marginLeft: 16}}>
                        <h3 className="text-muted opacity-6">User Account Details</h3><br></br>
                        </div>
                        <div className="widget-content-wrapper" style={{marginBottom: 40}}>
                       
                        <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                            </div>
                            </div>
                        </div>
                        </div>



                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                                <div className="position-relative form-group col-md-3">
                                    <label htmlFor="exampleName" >Beneficiary Account Name</label>
                                    <input name="name" id="exampleName" placeholder="Account Name" type="text" className="form-control" 
                                    />
                                </div>
                                
                               
                                <div className="col-md-3"> 
                                    <label htmlFor="exampleGender">Country</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">Select Country</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="position-relative form-group col-md-3">
                                    <label htmlFor="exampleName" >Bank Name</label>
                                    <input name="name" id="exampleName" placeholder="Bank Name" type="text" className="form-control" 
                                    />
                                </div>
                                <div className="position-relative form-group col-md-3">
                                    <label htmlFor="exampleName" >Account Number</label>
                                    <input name="name" id="exampleName" placeholder="Account Number" type="text" className="form-control" 
                                    />
                                </div> 
                            </div>
                        </div>

                        <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16, marginTop: 16}}>
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                            </div>
                            </div>
                        </div>


                        <div className="col-md-12 position-relative form-group" style={{marginTop: 30}}>
                            <div className="form-row">
                                
                                <div className="position-relative form-group col-md-3">
                                    <label htmlFor="exampleName" >Number of Preferred Transactions: </label><br></br>
                                    <label htmlFor="exampleName" >Payout Balance: </label>
                                    
                                </div>
                                
                               
                                <div className="col-md-3"> 
                                    <label htmlFor="exampleGender">45</label><br></br>
                                    <label htmlFor="exampleGender">$50.00</label>
                                    
                                </div>
                                <div className="position-relative form-group col-md-3">
                                    <label htmlFor="exampleName" ></label>
                                    
                                </div>
                                <div className="ml-auto" style={{marginRight: 16}}>
                                    <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                        <span className="text-success pl-2">
                                            <button className="btn-wide btn btn-danger" style={{marginTop: 15}}>   Pay Out   </button>
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
