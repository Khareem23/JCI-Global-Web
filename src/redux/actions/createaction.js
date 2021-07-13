import { mainAxios } from "../../utils/axios"
import ActionTypes from "../actiontype/ActionTypes"

    const CreateAction = (stateobject, setNotify, successactiontype, failureactiontype, setShow, setIsLoading) => {
        return async (dispatch) => {
            try {
                if(stateobject !== undefined )
                {
                    let response = "";
                    if(successactiontype === ActionTypes.ADD_CHARGES_SUCCESS)
                    {
                        response = await mainAxios.post('/Charges/createCharges', stateobject);
                    } else if(successactiontype === ActionTypes.ADD_PROMO_SUCCESS) {
                        response = await mainAxios.post('/Promo/CreatePromo', stateobject);
                    }  else if(successactiontype === ActionTypes.ADD_RATE_SUCCESS) {
                        response = await mainAxios.post('/Rates/createRate', stateobject);
                    } else if(successactiontype === ActionTypes.ADD_BANK_SUCCESS) {
                        response = await mainAxios.post('/JCIBank/createBankAccount', stateobject);
                    } else if(successactiontype === ActionTypes.ADD_CONVERT_SUCCESS) {
                        response = await mainAxios.post('/Transactions/convertSendingToReceiving', stateobject);
                    } else if(successactiontype === ActionTypes.ADD_TRANSACTION_SUCCESS) {
                        response = await mainAxios.post('/Transactions/createTransaction', stateobject);
                    } else if(successactiontype === ActionTypes.DELETE_PROMO_SUCCESS) {
                        response = await mainAxios.delete('/Promo/DeletePromo/' + stateobject);
                    } else if(successactiontype === ActionTypes.DELETE_RATE_SUCCESS) {                        
                        response = await mainAxios.delete('/Rates/deleteRate/' + stateobject);
                    }

                    const { data } = response.data;
                    const message = response.data.message;
                    const status = response.data.status;
                    if(status === "success")
                    {
                        dispatch({type: successactiontype, payload: data});
                        setNotify({
                            isOpen: true,
                            message: message,
                            type: status,
                        });
                        setShow(false);
                        setIsLoading(false);
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
    CreateAction,
}