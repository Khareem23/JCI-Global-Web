import ActionTypes from "../actiontype/ActionTypes"

const emailcheckstate = {
    isValid: true,
};

const emailcheckreducer = (state = emailcheckstate, action) => {
    switch(action.type) {
        case ActionTypes.MAIL_EXIST_SUCCESS:
            return { isValid: true }
        case ActionTypes.MAIL_EXIST_FAIL:
            return { isValid: false}
        default:
            return state;
    }
}

export default emailcheckreducer;