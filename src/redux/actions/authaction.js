import axios from "axios"
import { mainAxios } from "../../utils/axios"

    const AuthActionType = {
        USER_REGISTRATION_SUCCESS: "USER_REGISTRATION_SUCCESS",
        USER_REGISTRATION_FAIL: "USER_REGISTRATION_FAIL",
        LOADING_SHOW: "LOADING_SHOW",
        LOADING_HIDE: "LOADING_HIDE",
        USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
        USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
        MAIL_EXIST_SUCCESS: "MAIL_EXIST_SUCCESS",
        MAIL_EXIST_FAIL: "MAIL_EXIST_FAIL",
        PHONE_EXIST_SUCCESS: "PHONE_EXIST_SUCCESS",
        PHONE_EXIST_FAIL: "PHONE_EXIST_FAIL",
        FETCH_COUNTRIES_SUCCESS: "FETCH_COUNTRIES_SUCCESS",
        FETCH_COUNTRIES_FAIL: "FETCH_COUNTRIES_FAIL",
    }


    const ShowLoading = (state) => {
        return async (dispatch) => {
            try {
                dispatch({type: AuthActionType.LOADING_SHOW, payload: state}); 
            
            } catch(error) {
                dispatch({type: AuthActionType.LOADING_HIDE, payload: state}); 
            }
        }
    }


    const HideLoading = () => {
        return async(dispatch) => {
            dispatch({type: AuthActionType.LOADING_HIDE, payload: ""});
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
                    const response = await axios.post('/Users/register', userstate);
                    const { data } = response;
                    if(data.response === 201)
                    {
                        dispatch({type: AuthActionType.LOADING_HIDE, payload: userstate}); 
                        dispatch({type: AuthActionType.USER_REGISTRATION_SUCCESS, payload: data});//TODO, does not have a reducer yet
                        history.push("/profile");
                    } else {
                        if(data.response !== 201)
                        {
                            dispatch({type: AuthActionType.LOADING_HIDE, payload: userstate}); 
                            dispatch({type: AuthActionType.USER_REGISTRATION_FAIL, payload: data.message });
                            setError({
                                hasError: true,
                                message: data.message,
                            })
                        }
                    }
                } else {
                    dispatch({type: AuthActionType.LOADING_HIDE, payload: userstate}); 
                    setError({
                        hasError: true,
                        message: "Kindly fill all empty spaces",
                    })
                }
                
            } catch(error) {
                dispatch({type: AuthActionType.LOADING_HIDE, payload: userstate}); 
                const errmsg = error.message +  "  Error occurred while registering..."
                dispatch({
                    type: AuthActionType.USER_REGISTRATION_FAIL, 
                    payload: errmsg,
                });
                setError({
                    hasError: true,
                    message: errmsg,
                })
            }
        }
    }
    
    const LoginAuthAction = (loginstate, history, setError) => {
        return async (dispatch) => {
            try {

                if(loginstate.username === undefined || loginstate.password === undefined)
                {
                    dispatch({type: AuthActionType.LOADING_HIDE, payload: loginstate}); 
                    setError({
                        hasError: true,
                        message: "Kindly fill all empty spaces",
                    })
                }
                else {
                    
                    const response = await axios.post('/Users/login', loginstate); ///Account/UserLogon?username=' + loginstate.username + '&password=' + loginstate.password, loginstate);
                    const { data } = response;
                    if(data.response === 200)
                    {
                        dispatch({type: AuthActionType.LOADING_HIDE, payload: loginstate}); 
                        dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data});
                        history.push("/profile");
                    }
                    else  
                    {
                        dispatch({type: AuthActionType.LOADING_HIDE, payload: loginstate}); 
                        dispatch({type: AuthActionType.LOGIN_FAIL, payload: data.message });
                        setError({
                            hasError: true,
                            message: data.message,
                        })
                    }

                }
            } catch(error) {
                const errmsg = error.message + "  Error occurred while trying to login...";
                dispatch({type: AuthActionType.LOADING_HIDE, payload: loginstate}); 
                dispatch({type: AuthActionType.LOGIN_FAIL, payload: errmsg });
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
                    dispatch({type: AuthActionType.LOADING_HIDE, payload: loginstate});
                    dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data});
                    history.push("/profile");
                }
                else  
                {
                    dispatch({type: AuthActionType.LOADING_HIDE, payload: loginstate}); 
                    dispatch({type: AuthActionType.LOGIN_FAIL, payload: data.errors});
                    setError({
                        hasError: true,
                        message: data.errors,
                    })
                }
            } catch(error) {
                const errmsg = error.message + "  Error occurred while trying to login...";
                dispatch({type: AuthActionType.LOADING_HIDE, payload: loginstate}); 
                dispatch({type: AuthActionType.LOGIN_FAIL, payload: errmsg });
                setError({
                    hasError: true,
                    message: errmsg,
                })
            }
        }
    }

    const CheckIfEmailExist = (email, setError) => {
        return async (dispatch) => {
            try {
                        dispatch({type: AuthActionType.LOADING_SHOW, payload: ""}); 
                        try {
                            const response = await axios.get('/Users/checkEmailExist/' + email);
                            const res = response.data;
                            if(res)
                            {
                                dispatch({type: AuthActionType.MAIL_EXIST_SUCCESS, payload: res});
                                dispatch({type: AuthActionType.LOADING_HIDE, payload: res.data}); 
                            } 
                            else  
                            {
                                dispatch({type: AuthActionType.MAIL_EXIST_FAIL, payload: res});
                                dispatch({type: AuthActionType.LOADING_HIDE, payload: ""}); 
                                setError({
                                    hasError: true,
                                    message: response.message,
                                })
                            }
                        } catch(error) {
                            dispatch({type: AuthActionType.LOADING_HIDE, payload: ""});
                            dispatch({type: AuthActionType.MAIL_EXIST_FAIL, payload: false});
                            setError({
                                hasError: true,
                                message: error.message,
                            })
                        }
                
            } catch(error) {
                dispatch({type: AuthActionType.LOADING_HIDE, payload: ""}); 
                dispatch({type: AuthActionType.MAIL_EXIST_FAIL, payload: false});
                const errmsg = "Error checking mail...";
                setError({
                    hasError: true,
                    message: error.message + ", " + errmsg,
                })
            }
        }
    }

    const CheckIfPhoneExist = (phone, setError) => {
        return async (dispatch) => {
            try {
                dispatch({type: AuthActionType.LOADING_SHOW, payload: ""}); 
                try {
                    const response = await axios.get('/Users/checkPhoneNumberExist/' + phone);
                    const res = response.data;
                    if(res)
                    {
                        dispatch({type: AuthActionType.PHONE_EXIST_SUCCESS, payload: res});
                        dispatch({type: AuthActionType.LOADING_HIDE, payload: res.data}); 
                    } 
                    else  
                    {
                        dispatch({type: AuthActionType.PHONE_EXIST_FAIL, payload: res});
                        dispatch({type: AuthActionType.LOADING_HIDE, payload: ""}); 
                        setError({
                            hasError: true,
                            message: response.message,
                        })
                    }
                } catch(error) {
                    dispatch({type: AuthActionType.LOADING_HIDE, payload: ""});
                    dispatch({type: AuthActionType.PHONE_EXIST_FAIL, payload: false});
                    setError({
                        hasError: true,
                        message: error.message,
                    })
                }
                
            } catch(error) {
                dispatch({type: AuthActionType.LOADING_HIDE, payload: ""}); 
                dispatch({type: AuthActionType.PHONE_EXIST_FAIL, payload: false});
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
                    dispatch({type: AuthActionType.LOADING_SHOW, payload: ""}); 
                    try {
                        const response = await mainAxios.get('/Users/getCountries');
                        console.log(JSON.stringify(response));
                        const res = response.data;
                        console.log(JSON.stringify(res));
                        if(res.length > 1)
                        {
                            dispatch({type: AuthActionType.FETCH_COUNTRIES_SUCCESS, payload: res});
                            dispatch({type: AuthActionType.LOADING_HIDE, payload: res}); 
                        } 
                        else  
                        {
                            dispatch({type: AuthActionType.FETCH_COUNTRIES_FAIL, payload: res });
                            dispatch({type: AuthActionType.LOADING_HIDE, payload: ""}); 
                            setError({
                                hasError: true,
                                message: "Error fetching countries",
                            })
                        }
                    } catch(error) {
                        dispatch({type: AuthActionType.LOADING_HIDE, payload: ""});
                        dispatch({type: AuthActionType.FETCH_COUNTRIES_FAIL, payload: "" });
                        setError({
                            hasError: true,
                            message: error.message,
                        })
                    }
                
            } catch(error) {
                dispatch({type: AuthActionType.LOADING_HIDE, payload: ""}); 
                dispatch({type: AuthActionType.FETCH_COUNTRIES_FAIL, payload: "" });
                const errmsg = "Error fetching countries...";
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
    AuthActionType,
    FetchAllCountry,
}