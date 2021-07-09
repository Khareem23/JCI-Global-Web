import ActionTypes from "../actiontype/ActionTypes"

const allcharges = [
]

const alluserreceivers = [
]

const downloadreceiptstatus = [
]

const uploadconfirmation = [
]

const redirecturl = "";

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

const getUploadConfirmation = () => {
    const auth = localStorage.getItem("uploadconfirmation");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return uploadconfirmation;
        }
    } catch (error) {
        return uploadconfirmation;
    }
};

const getExistingReceivers = () => {
    const receivers = localStorage.getItem("alluserreceivers");
    try {
        if(receivers != null)
        {
            const obj = JSON.parse(receivers)
            return obj;
        } else {
            return alluserreceivers;
        }
    } catch (error) {
        return alluserreceivers;
    }
};

const getDwonloadStatus = () => {
    const receivers = localStorage.getItem("downloadreceiptstatus");
    try {
        if(receivers != null)
        {
            const obj = JSON.parse(receivers)
            return obj;
        } else {
            return downloadreceiptstatus;
        }
    } catch (error) {
        return downloadreceiptstatus;
    }
};

const existingCharge = getChargeState();
const existingRecievers = getExistingReceivers();
const existingConfirmation = getUploadConfirmation();

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

const fetchuserrecieversreducer = (state = existingRecievers, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER_RECEIVERS_SUCCESS:
            const fetchedReceivers = {
                alluserreceivers: action.payload,
            };
            localStorage.setItem("alluserreceivers", JSON.stringify(fetchedReceivers)); 
            return fetchedReceivers;
        default:
            return state;
    }
};

const downloadreceiptreducer = (state = getDwonloadStatus, action) => {
    switch (action.type) {
        case ActionTypes.DOWNLOAD_TRANSACTION_RECEIPT_SUCCESS:
            const downloadReceivers = {
                downloadreceiptstatus: action.payload,
            };
            localStorage.setItem("downloadreceiptstatus", JSON.stringify(downloadReceivers)); 
            return downloadReceivers;
        default:
            return state;
    }
};

const uploadconfrimationreducer = (state = existingConfirmation, action) => {
    switch (action.type) {
        case ActionTypes.UPLOAD_PAYMENTS_CONFIRMATION_SUCCESS:
            const uploadConfrimation = {
                uploadconfirmation: action.payload,
            };
            localStorage.setItem("uploadconfirmation", JSON.stringify(uploadConfrimation)); 
            return uploadConfrimation;
        default:
            return state;
    }
};

const addpaymentreducer = (state = "", action) => {
    switch (action.type) {
        case ActionTypes.ADD_PAYMENTS_TO_TRANSACTION_SUCCESS:
            const addPayment = {
                redirecturl: action.payload,
            };
            return addPayment;
        default:
            return state;
    }
};

export { fetchuserrecieversreducer, fetchchargesreducer, downloadreceiptreducer, uploadconfrimationreducer, addpaymentreducer };