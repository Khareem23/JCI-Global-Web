import { AuthActionType } from "../actions/authaction";

const allcountriesstate = [
]


const autosearchreducer = (state = [], action) => {
    switch (action.type) {
        case AuthActionType.FETCH_COUNTRIES_SUCCESS:
            const fetchCountry = {
                allcountriesstate: action.payload,
            };
            return fetchCountry;
        default:
            return state;
    }
};



export default autosearchreducer;