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
                        response = await mainAxios.post('/Transactions/uploadPaymentConfirmation/'+ id, stateobject);
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
                        // dispatch({type: ActionTypes.LOADING_HIDE, payload: message}); 
                        setIsLoading(false);
                        dispatch({type: successactiontype, payload: data});
                        setNotify({
                            isOpen: true,
                            message: message,
                            type: status,
                        });
                        setShow(false);
                        
                    } else {                        
                            // dispatch({type: ActionTypes.LOADING_HIDE, payload: message}); 
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
                    // dispatch({type: ActionTypes.LOADING_HIDE, payload: stateobject}); 
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
                let errorarray = error.response.data.errors;
                console.log(error.response)
                let errmsg = "";
                if(error.response.data.errors) {
                    let list = prepareError(errorarray);
                    errmsg = list;
                } else if(error.response.data.message) {
                    errmsg = error.response.data.message;
                }
                
                // dispatch({type: ActionTypes.LOADING_HIDE, payload: errmsg}); 
                setIsLoading(false);
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

    const prepareError = (array) => {
        let errorlist = "";
        if(array) {
            for (const [key, value] of Object.entries(array)) {
                console.log(value[0]);
                errorlist += value[0] + '\n'
            }
        } 
        return errorlist;
    } 
    
    
export { 
    PatchAction,
}