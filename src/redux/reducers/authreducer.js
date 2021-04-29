import { AuthActionType } from "../actions/authaction";

const authstate = {
    status: "",
    message: "",
    isLoggedIn: false,
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
        case AuthActionType.USER_LOGIN_SUCCESS:
            const newAuthstate = {
                authstate: action.payload,
            };
            localStorage.setItem("auth", JSON.stringify(newAuthstate)); 
            return newAuthstate;
        // case AuthActionType.LOGOUT_SUCCESS:
        //     localStorage.removeItem("auth");
        //     return authstate;
        default:
            return state;
    }
};

export default authreducer;