import ActionTypes from "../actiontype/ActionTypes"

const allpromos = [
]

const allpurposestate = [
]

const allusers = [
]

const countryusers = {}

const austracreport = [
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

const getAllUserState = () => {
    const allus = localStorage.getItem("allusers");
    try {
        if(allus != null)
        {
            const authobj = JSON.parse(allus)
            return authobj;
        } else {
            return allusers;
        }
    } catch (error) {
        return allusers;
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
const existingUsers = getAllUserState();

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

const fetchallusersreducer = (state = existingUsers, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_USERS_SUCCESS:
            const Fetchallusers = {
                allusers: action.payload,
            };
            localStorage.setItem("allusers", JSON.stringify(Fetchallusers)); 
            return Fetchallusers;
        default:
            return state;
    }
};

const fetchcountryusersreducer = (state = countryusers, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_USERS_BY_COUNTRY_SUCCESS:
            const Fetchcountryusers = {
                countryusers: action.payload,
            };
            return Fetchcountryusers;
        default:
            return state;
    }
};

const fetchaustracreportreducer = (state = austracreport, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_AUSTRAC_SUCCESS:
            const Fetchaustrac = {
                austracreport: action.payload,
            };
            return Fetchaustrac;
        default:
            return state;
    }
};

export { fetchpromosreducer, fetchpurposesreducer, fetchallusersreducer, fetchaustracreportreducer, fetchcountryusersreducer };