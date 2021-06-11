import ActionTypes from "../actiontype/ActionTypes"

const allcharges = [
]

const getChargeState = () => {
    const auth = localStorage.getItem("allcharges");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return allcharges;
        }
    } catch (error) {
        return allcharges;
    }
};

const existingCharge = getChargeState();

const fetchchargesreducer = (state = existingCharge, action) => {
    switch (action.type) {
        case ActionTypes.GET_CHARGES_SUCCESS:
            const fetchCharges = {
                allcharges: action.payload,
            };
            localStorage.setItem("allcharges", JSON.stringify(fetchCharges)); 
            return fetchCharges;
        case ActionTypes.GET_CHARGES_BY_PAYMENTINTYPE_SUCCESS:
            const fetchChargesByPayemnt = {
                allcharges: action.payload,
            };
            localStorage.setItem("allcharges", JSON.stringify(fetchChargesByPayemnt)); 
            return fetchChargesByPayemnt;
        default:
            return state;
    }
};

export default fetchchargesreducer;