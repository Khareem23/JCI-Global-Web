import ActionTypes from "../actiontype/ActionTypes"

const allbanks = [
]

const allbusinessbanks = [
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


const getBusinessBankState = () => {
    const auth = localStorage.getItem("allbusinessbanks");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return allbusinessbanks;
        }
    } catch (error) {
        return allbusinessbanks;
    }
};


const existingBank = getBankState();
const existingBusinessBanks = getBusinessBankState();

const fetchbanksreducer = (state = existingBank, action) => {
    switch (action.type) {
        case ActionTypes.GET_BANK_SUCCESS:
            const fetchBanks = {
                allbanks: action.payload,
            };
            localStorage.setItem("allbanks", JSON.stringify(fetchBanks)); 
            return fetchBanks;
        case ActionTypes.GET_BUSINESS_BANK_SUCCESS:
            const fetchBusinessBanks = {
                allbanks: action.payload,
            };
            localStorage.setItem("allbanks", JSON.stringify(fetchBusinessBanks)); 
            return fetchBusinessBanks;
        default:
            return state;
    }
};

const fetchbusinessbanksreducer = (state = existingBusinessBanks, action) => {
    switch (action.type) {
        // case ActionTypes.GET_BUSINESS_BANK_SUCCESS:
        //     const fetchBusinessBanks = {
        //         allbusinessbanks: action.payload,
        //     };
        //     localStorage.setItem("allbusinessbanks", JSON.stringify(fetchBusinessBanks)); 
        //     return fetchBusinessBanks;
        default:
            return state;
    }
};

export { fetchbanksreducer, fetchbusinessbanksreducer };