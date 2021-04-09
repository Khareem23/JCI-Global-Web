import React from 'react'

export default function Ratedetailsarea() {
    return (
        <>
            <div className="app-page-title app-page-title-simple">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                    <div>
                        <div className="page-title-head center-elem">
                        <span className="d-inline-block">Rate Management</span>
                        </div>
                        <div className="page-title-subheading opacity-10">
                        <nav className aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <span>Here you can manage rates for both live and offline transactions</span>
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
                        <div className="row">
                            <div className="widget-content-left fsize-1">
                                <h3 className="text-muted opacity-6" style={{marginLeft: 16}}>Rate ID: XXXXXX</h3><br></br>
                            </div>
                            <div className="widget-content-right fsize-1">
                                <h3 className="text-muted opacity-6" style={{marginRight: 16}}>Last Date Updated: XXXXXX</h3><br></br>
                            </div>
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
                                    <label htmlFor="exampleName" className>Currency Description</label>
                                    <input name="type" id="exampleName" placeholder="Currency Description" type="text" className="form-control" 
                                    />
                                </div>
                                
                               
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleEmail" className>Rate Type</label>
                                    <input name="email" id="exampleEmail" placeholder="Rate Type" type="text" className="form-control" 
                                    />
                                </div>


                                <div className="position-relative form-group col-md-4">
                                <label htmlFor="exampleGender">Sending Country</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">Sending Country</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleName" className>Receiving Country(NGN)</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">Receiving Country</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleName" className>Amount Received(NGN)</label>
                                    <input name="type" id="exampleName" placeholder="Amount Received (NGN)" type="text" className="form-control" 
                                    />
                                </div>
                                <div className="position-relative form-group col-md-4">
                                    <label htmlFor="exampleName" className>Amount Received(USD)</label>
                                    <input name="type" id="exampleName" placeholder="Amount Received (USD)" type="text" className="form-control" 
                                    />
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-md-12 position-relative form-group">
                            <div className="form-row">
                                
                                <div className="col-md-4"> 
                                    <label htmlFor="exampleGender">Active State</label>
                                    <select type="select" 
                                        id="gender" 
                                        name="gender"
                                        className="mb-2 form-control"
                                        >
                                        <option value="">Active State</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-1">
                                </div>

                                <div className="position-relative form-group col-md-4" style={{marginTop: 40}}>
                                    <label htmlFor="exampleName" style={{marginRight: 40}}>Display USD Rate</label> 
                                    <input id="chkToggle1" type="checkbox" data-toggle="toggle" defaultChecked />                                   
                                </div>                                
                            </div>
                        </div>
                        <div className="ml-auto">
                            <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                <span className="text-success pl-2">
                                    <button className="btn-wide btn btn-danger" style={{marginRight: 16}}>   Update Rate   </button>
                                    </span>
                            </div>
                        </div>
                       

                        

                        
                        <div className="widget-content-left fsize-1" style={{marginLeft: 16}}>
                        <br></br>
                        </div>
                        <div className="widget-content-wrapper" style={{marginBottom: 40}}>
                       
                        <div className="widget-content-right w-100">
                            <div className="progress-bar-xs progress" style={{marginLeft: 16, marginRight: 16}}>
                            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
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
