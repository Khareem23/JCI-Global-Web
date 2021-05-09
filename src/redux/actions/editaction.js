import { mainAxios } from "../../utils/axios"
import ActionTypes from "../actiontype/ActionTypes"


    const EditAction = (stateobject, setNotify, successactiontype, failureactiontype, setShow) => {
        return async (dispatch) => {
            try {
                if(stateobject !== undefined)
                {
                    var response = "";
                    if(successactiontype === ActionTypes.EDIT_CHARGES_SUCCESS)
                    {
                        response = await mainAxios.put('/Charges/updateCharges/', stateobject);
                    } else if(successactiontype === ActionTypes.EDIT_PROMO_SUCCESS) {
                        response = await mainAxios.put('/Promo/UpdatePromo', stateobject);
                    }  else if(successactiontype === ActionTypes.EDIT_RATE_SUCCESS) {
                        response = await mainAxios.put('/Rates/updateRate', stateobject);
                    } else if(successactiontype === ActionTypes.EDIT_BANK_SUCCESS) {
                        response = await mainAxios.put('/JCIBank/UpdateBankAccount', stateobject);
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
    
    
export { 
    EditAction,
}