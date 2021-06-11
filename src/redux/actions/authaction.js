import axios from "axios"
import { mainAxios } from "../../utils/axios"
import jwt_decode from "jwt-decode";
import ActionTypes from "../actiontype/ActionTypes"

    const ShowLoading = (state) => {
        return async (dispatch) => {
            try {
                dispatch({type: ActionTypes.LOADING_SHOW, payload: state}); 
            
            } catch(error) {
                dispatch({type: ActionTypes.LOADING_HIDE, payload: state}); 
            }
        }
    }


    const HideLoading = () => {
        return async(dispatch) => {
            dispatch({type: ActionTypes.LOADING_HIDE, payload: ""});
        }
    }

    const UserRegisterAuthAction = (userstate, history, setError) => {
        return async (dispatch) => {
            try {
                if(userstate.email !== undefined && userstate.firstName !== undefined && userstate.phoneNumber !== undefined && userstate.lastName !== undefined 
                    && userstate.password !== undefined && userstate.pin !== undefined && userstate.country !== undefined && userstate.state !== undefined 
                    && userstate.city !== undefined && userstate.postalCode !== undefined && userstate.address !== undefined && userstate.gender !== undefined
                    && userstate.dateOfBirth !== undefined && userstate.businessName !== undefined && userstate.businessRegNumber !== undefined 
                    && userstate.accountType !== undefined && userstate.userRole !== undefined)
                {
                    const response = await mainAxios.post('/Users/register', userstate);
                    const { data } = response.data.data;
                    if(response.data.status === "success")
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: userstate}); 
                        dispatch({type: ActionTypes.USER_REGISTRATION_SUCCESS, payload: data});
                        history.push("/dashboard");
                    } else {
                        
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: userstate}); 
                            dispatch({type: ActionTypes.USER_REGISTRATION_FAIL, payload: data.message });
                            setError({
                                hasError: true,
                                message: data.message,
                            })

                    }
                } else {
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: userstate}); 
                    setError({
                        hasError: true,
                        message: "Kindly fill all empty spaces",
                    })
                }
                
            } catch(error) {
                dispatch({type: ActionTypes.LOADING_HIDE, payload: userstate}); 
                const errmsg = error.message +  "  Error occurred while registering..."
                dispatch({
                    type: ActionTypes.USER_REGISTRATION_FAIL, 
                    payload: errmsg,
                });
                setError({
                    hasError: true,
                    message: errmsg,
                })
            }
        }
    }
    
    const LoginAuthAction = (loginstate, history, setNotify) => {
        return async (dispatch) => {
            try {
                if(loginstate.username === undefined || loginstate.username === "" || loginstate.password === undefined || loginstate.password === "")
                {
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: loginstate}); 
                    setNotify({
                        isOpen: true,
                        message: "Kindly supply all required fields!",
                        type: 'error',
                    });
                }
                else {
                    
                    const response = await mainAxios.post('/Users/login', loginstate);
                    const { data } = response.data;
                    if(response.data.status === "success")
                    {
                        let decoded = jwt_decode(data);
                        decoded.isLoggedIn = true;
                        decoded.token = data;
                        decoded.status = response.data.status;
                        decoded.message = response.data.message;
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: loginstate}); 
                        dispatch({type: ActionTypes.USER_LOGIN_SUCCESS, payload: decoded});                        
                        setNotify({
                            isOpen: true,
                            message: response.data.message,
                            type: 'success',
                        });
                        if(decoded.role === "Customer")
                        {
                            history.push("/sendmoney");                            
                        } else if(decoded.role === "Admin")
                        {
                            history.push("/dashboard"); 
                        }
                    }
                    else  
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: loginstate}); 
                        dispatch({type: ActionTypes.USER_LOGIN_FAIL, payload: data.message });
                        setNotify({
                            isOpen: true,
                            message: data.message,
                            type: 'error',
                        });
                    }

                }
            } catch(error) {
                const errmsg = error.message;
                dispatch({type: ActionTypes.LOADING_HIDE, payload: loginstate}); 
                dispatch({type: ActionTypes.USER_LOGIN_FAIL, payload: errmsg });
                setNotify({
                    isOpen: true,
                    message: errmsg,
                    type: 'error',
                });
            }
        }
    }

    const LogOutAuthAction = (history) => {
        return async (dispatch) => {
            try {    
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: ''}); 
                        dispatch({type: ActionTypes.USER_LOGOUT_SUCCESS, payload: ''});
                        history.push("/");
                   
            } catch(error) {
                const errmsg = error.message + "  Error occurred while trying to log out...";
                dispatch({type: ActionTypes.LOADING_HIDE, payload: ''}); 
                dispatch({type: ActionTypes.USER_LOGOUT_FAIL, payload: errmsg });
            }
        }
    }

    const UpdatePasswordAuthAction = (updatepwdstate, history, setError) => {
        return async (dispatch) => {
            try {

                if(updatepwdstate.newPassword === undefined)
                {
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepwdstate}); 
                    setError({
                        hasError: true,
                        message: "Kindly fill all empty spaces",
                    })
                }
                else {
                    
                    const response = await mainAxios.put('/Users/changePassword/', updatepwdstate);
                    const { data } = response.data.data;
                    if(response.data.status === "success")
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepwdstate}); 
                        dispatch({type: ActionTypes.UPDATE_PASSWORD_SUCCESS, payload: data});
                        history.push("/profile");
                    }
                    else  
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepwdstate}); 
                        dispatch({type: ActionTypes.UPDATE_PASSWORD_FAIL, payload: data.message });
                        setError({
                            hasError: true,
                            message: data.message,
                        })
                    }

                }
            } catch(error) {
                const errmsg = error.message + "  Error occurred while trying to update password...";
                dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepwdstate}); 
                dispatch({type: ActionTypes.UPDATE_PASSWORD_FAIL, payload: errmsg });
                setError({
                    hasError: true,
                    message: errmsg,
                })
            }
        }
    }

    const UpdatePINAuthAction = (updatepinstate, history, setError) => {
        return async (dispatch) => {
            try {
                if(updatepinstate.newPin === undefined)
                {
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepinstate}); 
                    setError({
                        hasError: true,
                        message: "Kindly fill all empty spaces",
                    })
                }
                else {
                    
                    const response = await mainAxios.put('/Users/changePin/', updatepinstate);
                    const { data } = response.data.data;
                    if(response.data.status === "success")
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepinstate}); 
                        dispatch({type: ActionTypes.UPDATE_PIN_SUCCESS, payload: data});
                        history.push("/profile");
                    }
                    else  
                    {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepinstate}); 
                        dispatch({type: ActionTypes.UPDATE_PIN_FAIL, payload: data.message });
                        setError({
                            hasError: true,
                            message: data.message,
                        })
                    }

                }
            } catch(error) {
                const errmsg = error.message + "  Error occurred while trying to update password...";
                dispatch({type: ActionTypes.LOADING_HIDE, payload: updatepinstate}); 
                dispatch({type: ActionTypes.UPDATE_PIN_FAIL, payload: errmsg });
                setError({
                    hasError: true,
                    message: errmsg,
                })
            }
        }
    }

    const PinLoginAuthAction = (loginstate, history, setError) => {
        return async (dispatch) => {
            try {
                const response = await axios.post('/Users/login/' + loginstate.userID + '/' + loginstate.pin);
                const { data } = response;
                if(data.response === 200)
                {
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: loginstate});
                    dispatch({type: ActionTypes.LOGIN_SUCCESS, payload: data});
                    history.push("/profile");
                }
                else  
                {
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: loginstate}); 
                    dispatch({type: ActionTypes.LOGIN_FAIL, payload: data.errors});
                    setError({
                        hasError: true,
                        message: data.errors,
                    })
                }
            } catch(error) {
                const errmsg = error.message + "  Error occurred while trying to login...";
                dispatch({type: ActionTypes.LOADING_HIDE, payload: loginstate}); 
                dispatch({type: ActionTypes.LOGIN_FAIL, payload: errmsg });
                setError({
                    hasError: true,
                    message: errmsg,
                })
            }
        }
    }

    const CheckIfEmailExist = (setError, email) => {
        return async (dispatch) => {
            try {
                        dispatch({type: ActionTypes.LOADING_SHOW, payload: ""}); 
                        try {
                            const response = await mainAxios.get('/Users/checkEmailExist/' + email);
                            const res = response.data;
                            if(res)
                            {
                                dispatch({type: ActionTypes.MAIL_EXIST_SUCCESS, payload: res});
                                dispatch({type: ActionTypes.LOADING_HIDE, payload: res.data}); 
                            } 
                            else  
                            {
                                dispatch({type: ActionTypes.MAIL_EXIST_FAIL, payload: res});
                                dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                                setError({
                                    hasError: true,
                                    message: response.message,
                                })
                            }
                        } catch(error) {
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: ""});
                            dispatch({type: ActionTypes.MAIL_EXIST_FAIL, payload: false});
                            setError({
                                hasError: true,
                                message: error.message,
                            })
                        }
                
            } catch(error) {
                dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                dispatch({type: ActionTypes.MAIL_EXIST_FAIL, payload: false});
                const errmsg = "Error checking mail...";
                setError({
                    hasError: true,
                    message: error.message + ", " + errmsg,
                })
            }
        }
    }

    const CheckIfPhoneExist = (setError, phone) => {
        return async (dispatch) => {
            try {                
                dispatch({type: ActionTypes.LOADING_SHOW, payload: ""}); 
                try {
                    const response = await mainAxios.get('/Users/checkPhoneNumberExist/' + phone);
                    const res = response.data;
                    if(res)
                    {
                        dispatch({type: ActionTypes.PHONE_EXIST_SUCCESS, payload: res});
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: res.data}); 
                    } 
                    else  
                    {
                        dispatch({type: ActionTypes.PHONE_EXIST_FAIL, payload: res});
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                        setError({
                            hasError: true,
                            message: response.message,
                        })
                    }
                } catch(error) {
                    dispatch({type: ActionTypes.LOADING_HIDE, payload: ""});
                    dispatch({type: ActionTypes.PHONE_EXIST_FAIL, payload: false});
                    setError({
                        hasError: true,
                        message: error.message,
                    })
                }
                
            } catch(error) {
                dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                dispatch({type: ActionTypes.PHONE_EXIST_FAIL, payload: false});
                const errmsg = "Error checking mail...";
                setError({
                    hasError: true,
                    message: error.message + ", " + errmsg,
                })
            }
        }
    }

    //to fetch all the countries
    const FetchAllCountry = (setError) => {
        return async (dispatch) => {
            try {
                    dispatch({type: ActionTypes.LOADING_SHOW, payload: ""}); 
                    try {
                        const response = await mainAxios.get('/Users/getCountries');
                        const res = response.data.data;
                        if(res.length > 1)
                        {
                            dispatch({type: ActionTypes.FETCH_COUNTRIES_SUCCESS, payload: res});
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: res}); 
                        } 
                        else  
                        {
                            dispatch({type: ActionTypes.FETCH_COUNTRIES_FAIL, payload: res });
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                            setError({
                                hasError: true,
                                message: "Error fetching countries",
                            })
                        }
                    } catch(error) {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: ""});
                        dispatch({type: ActionTypes.FETCH_COUNTRIES_FAIL, payload: "" });
                        setError({
                            hasError: true,
                            message: error.message,
                        })
                    }
                
            } catch(error) {
                dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                dispatch({type: ActionTypes.FETCH_COUNTRIES_FAIL, payload: "" });
                const errmsg = "Error fetching countries...";
                setError({
                    hasError: true,
                    message: error.message + " " + errmsg,
                })
            }
        }
    }

    const FetchStatesByCountryCode = (setError, code) => {
        return async (dispatch) => {
            try {
                    dispatch({type: ActionTypes.LOADING_SHOW, payload: ""}); 
                    try {
                        const response = await mainAxios.get('/Users/getCountryStates/' + code);
                        const res = response.data.data;
                        if(res.length > 1)
                        {
                            dispatch({type: ActionTypes.FETCH_STATES_SUCCESS, payload: res});
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: res}); 
                        } 
                        else  
                        {
                            dispatch({type: ActionTypes.FETCH_STATES_FAIL, payload: res });
                            dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                            setError({
                                hasError: true,
                                message: "Error fetching states",
                            })
                        }
                    } catch(error) {
                        dispatch({type: ActionTypes.LOADING_HIDE, payload: ""});
                        dispatch({type: ActionTypes.FETCH_STATES_FAIL, payload: "" });
                        setError({
                            hasError: true,
                            message: error.message,
                        })
                    }
                
            } catch(error) {
                dispatch({type: ActionTypes.LOADING_HIDE, payload: ""}); 
                dispatch({type: ActionTypes.FETCH_STATES_FAIL, payload: "" });
                const errmsg = "Error fetching states...";
                setError({
                    hasError: true,
                    message: error.message + " " + errmsg,
                })
            }
        }
    }
    
export { 
    ShowLoading,
    HideLoading,
    UserRegisterAuthAction,
    LoginAuthAction,
    PinLoginAuthAction,
    CheckIfEmailExist,
    CheckIfPhoneExist,
    // ActionTypes,
    FetchAllCountry,
    FetchStatesByCountryCode,
    UpdatePasswordAuthAction,
    UpdatePINAuthAction,
    LogOutAuthAction,
}

// git remote add origin https://sterlingappsdevops.visualstudio.com/TravelDesk/_git/TravelDesk
// git push -u origin --all