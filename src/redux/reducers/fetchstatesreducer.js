import { AuthActionType } from "../actions/authaction";

const allstatesstate = [
]


const fetchstatesreducer = (state = [], action) => {
    switch (action.type) {
        case AuthActionType.FETCH_STATES_SUCCESS:
            const fetchStates = {
                allstatesstate: action.payload,
            };
            return fetchStates;
        default:
            return state;
    }
};

export default fetchstatesreducer;