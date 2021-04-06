import React, {useState, useEffect} from 'react';
import "./Errorhandler.css"
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Errorhandler = (props) => {
    const {error} = props
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        setShow(false);
        if(error.hasError) {
            setShow(true)
        }
    }, [error])

  return (
        <div>
            { show ? (
            <div className="d-flex alert alert-danger">
                <p className="" style={{marginTop: 12}}> {error.message} </p>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
                    setShow(false);
                }}>
                    <span aria-hidden="true">x</span>
                </button>
            </div>
            // <ToastContainer
            // position="bottom-center"
            // autoClose={8000}
            // hideProgressBar={false}
            // newestOnTop
            // closeOnClick
            // rtl
            // pauseOnFocusLoss
            // draggable
            // pauseOnHover
            // >
            //     {
            //         toast.error(error.message)
            //     }
            // </ToastContainer>
                

            ) : (
                " "
            )}

        </div>
    );
};
export default Errorhandler;