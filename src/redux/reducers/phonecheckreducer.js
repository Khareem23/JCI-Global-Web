const { AuthActionType } = require('../actions/authaction');

const phonecheckstate = {
    isValid: 0,
};

const phonecheckreducer = (state = phonecheckstate, action) => {
    switch(action.type) {
        case AuthActionType.PHONE_EXIST_SUCCESS:
            return { isValid: true }
        case AuthActionType.PHONE_EXIST_FAIL:
            return { isValid: false}
        default:
            return state;
    }
}

export default phonecheckreducer;