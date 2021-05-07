import ActionTypes from "../actiontype/ActionTypes"

const allcountriesstate = [
]


const autosearchreducer = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.FETCH_COUNTRIES_SUCCESS:
            const fetchCountry = {
                allcountriesstate: action.payload,
            };
            return fetchCountry;
        default:
            return state;
    }
};



export default autosearchreducer;