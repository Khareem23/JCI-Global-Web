const { AuthActionType } = require('../actions/authaction');

const loadingstate = {
    isLoading: false,
};

const loadingreducer = (state = loadingstate, action) => {
    switch(action.type) {
        case AuthActionType.LOADING_SHOW:
            return { isLoading: true}
        case AuthActionType.LOADING_HIDE:
            return { isLoading: false}
        default:
            return state;
    }
}

export default loadingreducer;