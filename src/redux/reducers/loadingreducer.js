import ActionTypes from "../actiontype/ActionTypes"

const loadingstate = {
    isLoading: false,
};

const loadingreducer = (state = loadingstate, action) => {
    switch(action.type) {
        case ActionTypes.LOADING_SHOW:
            return { isLoading: true}
        case ActionTypes.LOADING_HIDE:
            return { isLoading: false}
        default:
            return state;
    }
}

export default loadingreducer;