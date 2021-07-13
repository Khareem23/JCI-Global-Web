import { mainAxios } from "../../utils/axios"
import ActionTypes from "../actiontype/ActionTypes"


    const EditAction = (stateobject, setNotify, successactiontype, failureactiontype, setShow, setIsLoading) => {
        return async (dispatch) => {
            try {
                if(stateobject !== undefined)
                {
                    
                    let response = "";
                    if(successactiontype === ActionTypes.EDIT_CHARGES_SUCCESS)
                    {
                        response = await mainAxios.put('/Charges/updateCharges/', stateobject);
                    } else if(successactiontype === ActionTypes.EDIT_PROMO_SUCCESS) {
                        response = await mainAxios.put('/Promo/UpdatePromo', stateobject);
                    }  else if(successactiontype === ActionTypes.EDIT_RATE_SUCCESS) {
                        response = await mainAxios.put('/Rates/updateRate', stateobject);
                    } else if(successactiontype === ActionTypes.EDIT_BANK_SUCCESS) {
                        response = await mainAxios.put('/JCIBank/UpdateBankAccount', stateobject);
                    } else if(successactiontype === ActionTypes.UPDATE_PASSWORD_SUCCESS) {
                        response = await mainAxios.put('/Users/changePassword/' + stateobject);
                    } else if(successactiontype === ActionTypes.UPDATE_PIN_SUCCESS) {
                        response = await mainAxios.put('/Users/changePin/' + stateobject);
                    } else if(successactiontype === ActionTypes.UPDATE_PROFILE_SUCCESS) {
                        var idf = parseInt(stateobject.id);
                        stateobject.id = idf
                        response = await mainAxios.put('/Users/updateCustomerByCustomer', stateobject);
                    } else if(successactiontype === ActionTypes.UPDATE_BANK_ACCOUNT_SUCCESS) {
                        response = await mainAxios.put('/Users/updateBankAccount/', stateobject);
                    }
                    
                    const { data } = response.data;
                    const message = response.data.message;
                    const status = response.data.status;
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
                
                let errmsg = "";
                // if(error.response.data.errors) {
                //     let errorarray = error.response.data.errors;
                //     let list = prepareError(errorarray);
                //     errmsg = list;
                // } else if(error.response.data.message) {
                //     errmsg = error.response.data.message;
                // }
                
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
                errorlist += value[0] + '\n';
            }
        } 
        return errorlist;
    } 
    
    
export { 
    EditAction,
}