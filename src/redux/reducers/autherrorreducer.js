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
        default:
            return state;
    }
}

export default authErrorReducer;
