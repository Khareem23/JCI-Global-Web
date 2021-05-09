import ActionTypes from "../actiontype/ActionTypes"

const allbanks = [
]

const getBankState = () => {
    const auth = localStorage.getItem("allbanks");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return allbanks;
        }
    } catch (error) {
        return allbanks;
    }
};

const existingBank = getBankState();

const fetchbanksreducer = (state = existingBank, action) => {
    switch (action.type) {
        case ActionTypes.GET_BANK_SUCCESS:
            const fetchBanks = {
                allbanks: action.payload,
            };
            localStorage.setItem("allbanks", JSON.stringify(fetchBanks)); 
            return fetchBanks;
        default:
            return state;
    }
};
export default fetchbanksreducer;