import ActionTypes from "../actiontype/ActionTypes"

const allrates = [
]

const getRateState = () => {
    const auth = localStorage.getItem("allrates");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return allrates;
        }
    } catch (error) {
        return allrates;
    }
};

const existingRate = getRateState();

const fetchratesreducer = (state = existingRate, action) => {
    switch (action.type) {
        case ActionTypes.GET_RATE_SUCCESS:
            const fetchRates = {
                allrates: action.payload,
            };
            localStorage.setItem("allrates", JSON.stringify(fetchRates)); 
            return fetchRates;
        default:
            return state;
    }
};
export default fetchratesreducer;