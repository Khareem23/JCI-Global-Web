import ActionTypes from "../actiontype/ActionTypes"

const authstate = {
    status: '',
    message: '',
    isLoggedIn: false,
    token: '',
    email: '',
    exp: '',
    iat: '',
    nameid: '',
    nbf: '',
    role: '',
    unique_name: '',
}

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return authstate;
        }
    } catch (error) {
        return authstate;
    }
};

//check state if exist before
const existingAuth = getAuthState();

const authreducer = (state = existingAuth, action) => {
    switch (action.type) {      
        // case ActionTypes.USER_LOGIN_SUCCESS:
        //     authstate = action.payload;
        //     localStorage.setItem("auth", JSON.stringify(action.payload)); 
        //     return authstate;
        case ActionTypes.USER_LOGIN_SUCCESS:
            const newAuth = {
                authstate: action.payload,
            };
            localStorage.setItem("auth", JSON.stringify(newAuth)); 
            return newAuth;
        case ActionTypes.USER_LOGOUT_SUCCESS:
            localStorage.removeItem("auth");
            return authstate;
        default:
            return state;
    }
};

export default authreducer;