import ActionTypes from "../actiontype/ActionTypes"

const allstatesstate = [
]


const fetchstatesreducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.FETCH_STATES_SUCCESS:
            const fetchStates = {
                allstatesstate: action.payload,
            };
            return fetchStates;
        default:
            return state;
    }
};

export default fetchstatesreducer;