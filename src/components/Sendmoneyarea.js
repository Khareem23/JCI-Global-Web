import React from 'react'

export default function Sendmoneyarea() {
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
                        <div className="widget-number text-danger">Choose Payment</div>
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
                                                />
                                            </div>
                                        </div>
                                    </div>
                                   

                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">                                            
                                            <div className="col-md-6"> 
                                                <label htmlFor="exampleGender">Sending From</label>
                                                <select type="select" 
                                                    id="gender" 
                                                    name="gender"
                                                    className="mb-2 form-control"
                                                    >
                                                    <option value="">-- Select --</option>
                                                    <option value="Male">Nigeria</option>
                                                    <option value="Female">Ghana</option>
                                                </select>
                                            </div>                                           
                                        </div>
                                    </div>

                                    

                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">
                                            <div className="col-md-6"> 
                                                <label htmlFor="exampleGender">Receiving From</label>
                                                <select type="select" 
                                                    id="gender" 
                                                    name="gender"
                                                    className="mb-2 form-control"
                                                    >
                                                    <option value="">-- Select --</option>
                                                    <option value="Male">Nigeria</option>
                                                    <option value="Female">Ghana</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div className="col-md-12 position-relative form-group">
                                        <div className="form-row">
                                            <div className="col-md-6" style={{marginTop: 1}}> 
                                                <div className="position-relative form-group">
                                                <label htmlFor="exampleText" className>Transaction Description</label>
                                                <textarea name="text" id="exampleText" className="form-control" defaultValue={""} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    

                                    <div className="ml-auto">
                                        <div className="widget-title ml-auto font-size-lg font-weight-normal text-muted">
                                            <span className="text-success pl-2">
                                                <button className="btn-wide btn btn-danger" style={{marginTop: 15, marginRight: 16}}>   Next   </button>
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
                    <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                </div>
                <div className="tab-pane" id="tab-eg9-2" role="tabpanel">
                    <div className="card-body">
                    <p className="mb-0">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
                        PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>



</>


    )
}
