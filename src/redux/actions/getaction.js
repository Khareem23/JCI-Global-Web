import { mainAxios } from "../../utils/axios"
import ActionTypes from "../actiontype/ActionTypes"


    const GetAction = (stateobject, setNotify, successactiontype, failureactiontype, setShow) => {
        return async (dispatch) => {
            try {
                if(stateobject !== undefined)
                {
                    let response = "";
                    if(successactiontype === ActionTypes.GET_CHARGES_SUCCESS)
                    {
                        response = await mainAxios.get('/Charges/GetAllCharges');
                    } else if(successactiontype === ActionTypes.GET_PROMOS_SUCCESS) {
                        response = await mainAxios.get('/Promo/getAllPromos', stateobject);
                    }  else if(successactiontype === ActionTypes.GET_RATE_SUCCESS) {
                        response = await mainAxios.get('/Rates/getRateList', stateobject);
                    } else if(successactiontype === ActionTypes.GET_BANK_SUCCESS) {
                        response = await mainAxios.get('/JCIBank/GetAllBankAccount', stateobject);
                    } else if(successactiontype === ActionTypes.GET_ALL_RECEIVING_CURRENCY_SUCCESS) {
                        response = await mainAxios.get('/Rates/getAllReceivingCurrency', stateobject);
                    } else if(successactiontype === ActionTypes.GET_ALL_SENDING_CURRENCY_SUCCESS) {
                        response = await mainAxios.get('/Rates/getAllSendingCurrency', stateobject);
                    } else if(successactiontype === ActionTypes.GET_USER_RECEIVERS_SUCCESS) {
                        response = await mainAxios.get('/Transactions/getUserReceivers', stateobject);
                    } else if(successactiontype === ActionTypes.DOWNLOAD_TRANSACTION_RECEIPT_SUCCESS) {
                        response = await mainAxios.get('/Transactions/downloadTransactionReceipt/' + stateobject);
                    } else if(successactiontype === ActionTypes.FETCH_CUSTOMER_TRANSACTION_SUCCESS) {
                        response = await mainAxios.get('/Transactions/getCustomertransactions/');
                    } else if(successactiontype === ActionTypes.FETCH_ALL_TRANSACTION_SUCCESS) {
                        response = await mainAxios.get('/Transactions/getAllTransactions/');
                    } else if(successactiontype === ActionTypes.FETCH_ALL_USERS_SUCCESS) {
                        response = await mainAxios.get('/Users/getAllCustomers/');
                    } 
                    
                    const { data } = response.data;
                    const message = response.data.message;
                    const status = response.data.status;
                    if(status === "success")
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: message}); 
                        dispatch({type: successactiontype, payload: data});
                        setNotify({
                            isOpen: true,
                            message: message,
                            type: status,
                        });
                        setShow(false);
                        
                    } else {                 
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: message}); 
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
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: stateobject}); 
                    dispatch({type: failureactiontype, payload: errormsg });
                    setNotify({
                        isOpen: true,
                        message: errormsg,
                        type: 'error',
                    });
                    setShow(false);
                }
                
            } catch(error) {
                const errmsg = error.message;
                dispatch({type: ActionTypes.LOADING_HIDE, payload: errmsg}); 
                dispatch({type: failureactiontype, payload: errmsg });
                setNotify({
                    isOpen: true,
                    message: error.message,
                    type: 'error',
                });
                setShow(false);
            }
        }
    }


    const GetPurposeAction = (stateobject, setNotify, successactiontype, failureactiontype, setShow) => {
        return async (dispatch) => {
            try {
                
                if(stateobject !== undefined)
                {
                    let response = "";
                    if(successactiontype === ActionTypes.FETCH_PURPOSE_SUCCESS)
                    {
                        response = await mainAxios.get('/Transactions/getPaymentPurpose', stateobject);
                    } 
                    
                    const  data  = response.data.result.data;
                    const message = response.data.result.data.message;
                    const status = response.data.result.status;
                    if(status === "success")
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: message}); 
                        dispatch({type: successactiontype, payload: data});
                        setNotify({
                            isOpen: true,
                            message: message,
                            type: status,
                        });
                        setShow(false);                        
                    } else {                     
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: message}); 
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
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: stateobject}); 
                    dispatch({type: failureactiontype, payload: errormsg });
                    setNotify({
                        isOpen: true,
                        message: errormsg,
                        type: 'error',
                    });
                    setShow(false);
                }
                
            } catch(error) {
                const errmsg = error.message;
                dispatch({type: ActionTypes.LOADING_HIDE, payload: errmsg}); 
                dispatch({type: failureactiontype, payload: errmsg });
                setNotify({
                    isOpen: true,
                    message: error.message,
                    type: 'error',
                });
                setShow(false);
            }
        }
    }
    
    
export { 
    GetAction,
    GetPurposeAction,
}