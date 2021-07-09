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

const userprofilestate = {
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

const getProfileState = () => {
    const userprofile = localStorage.getItem("userprofilestate");
    try {
        if(userprofile != null)
        {
            const authobj = JSON.parse(userprofile)
            return authobj;
        } else {
            return userprofilestate;
        }
    } catch (error) {
        return userprofilestate;
    }
};


//check state if exist before
const existingAuth = getAuthState();
const existingProfile = getProfileState();

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

const userprofilereducer = (state = existingProfile, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USER_PROFILE_SUCCESS:
            const newAuthstate = {
                userprofilestate: action.payload,
            };
            localStorage.setItem("userprofilestate", JSON.stringify(newAuthstate)); 
            return newAuthstate;
        default:
            return state;
    }
};

export { userprofilereducer, signupreducer };