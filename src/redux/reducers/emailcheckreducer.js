const { AuthActionType } = require('../actions/authaction');

const emailcheckstate = {
    isValid: 0,
};

const emailcheckreducer = (state = emailcheckstate, action) => {
    switch(action.type) {
        case AuthActionType.MAIL_EXIST_SUCCESS:
            return { isValid: true }
        case AuthActionType.MAIL_EXIST_FAIL:
            return { isValid: false}
        default:
            return state;
    }
}

export default emailcheckreducer;