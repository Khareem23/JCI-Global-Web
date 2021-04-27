const { AuthActionType } = require('../actions/authaction');

const autherror = {
    message: "",
};

const authErrorReducer = (state = autherror, action) => {
    switch(action.type) {
        case AuthActionType.USER_REGISTRATION_FAIL:
            return { message: action.payload }
        case AuthActionType.FETCH_COUNTRIES_FAIL:
                return { message: action.payload }
        case AuthActionType.FETCH_STATES_FAIL:
            return { message: action.payload }
        case AuthActionType.MAIL_EXIST_FAIL:
            return { message: action.payload }
        case AuthActionType.USER_LOGIN_FAIL:
            return { message: action.payload }
        case AuthActionType.PHONE_EXIST_FAIL:
            return { message: action.payload }
        default:
            return state;
    }
}

export default authErrorReducer;
