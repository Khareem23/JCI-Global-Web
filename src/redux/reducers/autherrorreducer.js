import ActionTypes from "../actiontype/ActionTypes"

const autherror = {
    message: "",
};

const authErrorReducer = (state = autherror, action) => {
    switch(action.type) {
        case ActionTypes.USER_REGISTRATION_FAIL:
            return { message: action.payload }
        case ActionTypes.FETCH_COUNTRIES_FAIL:
                return { message: action.payload }
        case ActionTypes.FETCH_STATES_FAIL:
            return { message: action.payload }
        case ActionTypes.MAIL_EXIST_FAIL:
            return { message: action.payload }
        case ActionTypes.USER_LOGIN_FAIL:
            return { message: action.payload }
        case ActionTypes.PHONE_EXIST_FAIL:
            return { message: action.payload }
        default:
            return state;
    }
}

export default authErrorReducer;
