import ActionTypes from "../actiontype/ActionTypes"

const phonecheckstate = {
    isValid: 0,
};

const phonecheckreducer = (state = phonecheckstate, action) => {
    switch(action.type) {
        case ActionTypes.PHONE_EXIST_SUCCESS:
            return { isValid: true }
        case ActionTypes.PHONE_EXIST_FAIL:
            return { isValid: false}
        default:
            return state;
    }
}

export default phonecheckreducer;