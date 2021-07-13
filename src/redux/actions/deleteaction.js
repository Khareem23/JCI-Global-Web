import { mainAxios } from "../../utils/axios"
import ActionTypes from "../actiontype/ActionTypes"


    const DeleteAction = (stateobject, setNotify, successactiontype, failureactiontype, setShow) => {
        return async (dispatch) => {
            try {
                if(stateobject !== undefined)
                {
                    let response = "";
                    if(successactiontype === ActionTypes.DELETE_CHARGES_SUCCESS)
                    {
                        response = await mainAxios.delete('/Charges/DeleteCharges/' + stateobject);
                    }  else if(successactiontype === ActionTypes.DELETE_BANK_SUCCESS) {
                        response = await mainAxios.delete('/JCIBank/DeleteBankAccount/' + stateobject);
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
    DeleteAction,
}