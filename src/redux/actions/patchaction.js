import { mainAxios } from "../../utils/axios"
import ActionTypes from "../actiontype/ActionTypes"

    const PatchAction = (stateobject, id, setIsLoading, setNotify, successactiontype, failureactiontype, setShow) => {
        return async (dispatch) => {
            try {
                if(stateobject !== undefined )
                {
                    let response = "";
                    if(successactiontype === ActionTypes.ADD_NEW_BENEFICIARY_SUCCESS) {
                        response = await mainAxios.patch('/Transactions/addNewBeneficiaryToTransaction/'+id, stateobject);
                    } else if(successactiontype === ActionTypes.ADD_PAYMENTS_TO_TRANSACTION_SUCCESS) {
                        response = await mainAxios.patch('/Transactions/AddPaymentToTransaction/'+id+'/PaymentTypeID/'+stateobject);
                    } else if(successactiontype === ActionTypes.ADD_EXISTING_BENEFICIARY_SUCCESS) {
                        response = await mainAxios.patch('/Transactions/addExistingBeneficiaryToTransaction/'+id+'/'+stateobject);
                    } else if(successactiontype === ActionTypes.UPLOAD_PAYMENTS_CONFIRMATION_SUCCESS) {
                        console.log(stateobject.fileToUpload);
                        let formData = new FormData();
                        formData.append('fileToUpload', stateobject.fileToUpload);                       
                        console.log(formData);
                        response = await mainAxios.post('/Transactions/uploadPaymentConfirmation/'+ id, formData);
                    } else if(successactiontype === ActionTypes.EDIT_BENEFICARY_SUCCESS)
                    {
                        response = await mainAxios.put('/Transactions/updateReceiver/' + id, stateobject);
                    }

                    const { data } = response.data;
                    const message = response.data.message;
                    let status = "";
                    if(response.data.status === 'Redirect' || 'NoNoRedirect') {
                        status = "success";
                    } else {
                        status = response.data.status;
                    }
                    
                    if(status === "success")
                    {
                        setIsLoading(false);
                        dispatch({type: successactiontype, payload: data});
                        setNotify({
                            isOpen: true,
                            message: message,
                            type: status,
                        });
                        setShow(false);
                        
                    } else {                        
                            setIsLoading(false);
                            dispatch({type: failureactiontype, payload: message });
                            setNotify({
                                isOpen: true,
                                message: message,
                                type: status,
                            });
                            setShow(false);
                    }
                } else {
                    const errormsg = "Kindly Supply all required information";
                    setIsLoading(false);
                    dispatch({type: failureactiontype, payload: errormsg });
                    setNotify({
                        isOpen: true,
                        message: errormsg,
                        type: 'error',
                    });
                    setShow(false);
                }
                
            } catch(error) {
                // let errorarray = error.response.data.errors;
                // let errmsg = "";
                // if(error.response.data.errors) {
                //     let list = prepareError(errorarray);
                //     errmsg = list;
                // } else if(error.response.data.message) {
                //     errmsg = error.response.data.message;
                // }
                
                // setIsLoading(false);
                // dispatch({type: failureactiontype, payload: errmsg });
                // setNotify({
                //     isOpen: true,
                //     message: errmsg,
                //     type: 'error',
                // });
                // setShow(false);
                setIsLoading(false);
                if(error.response) {
                    let errmsg = "";
                    if(error.response.data.data !== null) {
                        let errorarray = error.response.data.errors;
                        let list = prepareError(errorarray);
                        errmsg = list;
                    } else if(error.response.data.message) {
                        errmsg = error.response.data.message;
                    }
                   
                    dispatch({type: failureactiontype, payload: errmsg });
                    setNotify({
                        isOpen: true,
                        message: errmsg,
                        type: 'error',
                    });
                    setShow(false);                    
                }
            }
        }
    }

    const prepareError = (array) => {
        let errorlist = "";
        if(array) {
            for (const [key, value] of Object.entries(array)) {
                errorlist += value[0] + '\n'
            }
        } 
        return errorlist;
    } 
    
    
export { 
    PatchAction,
}