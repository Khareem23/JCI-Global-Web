import ActionTypes from "../actiontype/ActionTypes"

const userregstate = {
    isLoggedIn: false,
    isLoading: false,
    userRole: '',
    pin: '',
    user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        accountType: 1
    }
}

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return userregstate;
        }
    } catch (error) {
        return userregstate;
    }
};

//check state if exist before
const existingAuth = getAuthState();

const signupreducer = (state = existingAuth, action) => {

    switch (action.type) {
        case ActionTypes.USER_REGISTRATION_SUCCESS:
            const newAuthstate = {
                isLoggedIn: true,
                isLoading: false,
                user: action.payload,
            };
            localStorage.setItem("auth", JSON.stringify(newAuthstate)); 
            return newAuthstate;
        default:
            return state;
    }
};

export default signupreducer;