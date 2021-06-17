import ActionTypes from "../actiontype/ActionTypes"

const allpromos = [
]

const allpurposestate = [
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

const getPaymentPurpose = () => {
    const allpurpose = localStorage.getItem("allpurpose");
    try {
        if(allpurpose != null)
        {
            const allpurposeobj = JSON.parse(allpurpose)
            return allpurposeobj;
        } else {
            return allpurposestate;
        }
    } catch (error) {
        return allpurposestate;
    }
};

const existingPromo = getPromoState();
const existingPupose = getPaymentPurpose();

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

const fetchpurposesreducer = (state = existingPupose, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PURPOSE_SUCCESS:
            const fetchPurpose = {
                allpurposestate: action.payload,
            };
            localStorage.setItem("allpurpose", JSON.stringify(fetchPurpose)); 
            return fetchPurpose;
        default:
            return state;
    }
};

export { fetchpromosreducer, fetchpurposesreducer };