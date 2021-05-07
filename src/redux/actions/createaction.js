import { mainAxios } from "../../utils/axios"
import ActionTypes from "../actiontype/ActionTypes"


    const CreateAction = (stateobject, setNotify, successactiontype, failureactiontype, setShow) => {
        return async (dispatch) => {
            try {
                if(stateobject !== undefined )
                {
                    var response = "";
                    if(successactiontype === ActionTypes.ADD_CHARGES_SUCCESS)
                    {
                        response = await mainAxios.post('/Charges/createCharges', stateobject);
                    } else if(successactiontype === ActionTypes.ADD_PROMO_SUCCESS) {
                        response = await mainAxios.post('/Promo/CreatePromo', stateobject);
                    }  else if(successactiontype === ActionTypes.ADD_RATE_SUCCESS) {
                        response = await mainAxios.post('/Rates/createRate', stateobject);
                    }
                    console.log(JSON.stringify(response));
                    const { data } = response.data;
                    console.log(response.data);
                    console.log(response.data.message);
                    console.log(response.data.status);
                    const message = response.data.message;
                    const status = response.data.status;
                    console.log(status);
                    if(status === "success")
                    {
                        console.log(message);
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
    CreateAction,
}