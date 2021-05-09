import ActionTypes from "../actiontype/ActionTypes"

const allpromos = [
]

const getPromoState = () => {
    const auth = localStorage.getItem("allpromos");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return allpromos;
        }
    } catch (error) {
        return allpromos;
    }
};

const existingPromo = getPromoState();

const fetchpromosreducer = (state = existingPromo, action) => {
    switch (action.type) {
        case ActionTypes.GET_PROMOS_SUCCESS:
            const fetchPromos = {
                allpromos: action.payload,
            };
            localStorage.setItem("allpromos", JSON.stringify(fetchPromos)); 
            return fetchPromos;
        default:
            return state;
    }
};

export default fetchpromosreducer;