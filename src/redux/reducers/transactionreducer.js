import ActionTypes from "../actiontype/ActionTypes"

const conversionstate = {};
const transactionstate = {};
const allreceivingcurrencystate = {};
const allsendingcurrencystate = {};

const allcustomertransactions = [
]

const alltransactions = [
]

const getAllReceivingCurrency = () => {
    const receieving = localStorage.getItem("allreceivingcurrencystate");
    try {
        if(receieving != null)
        {
            const obj = JSON.parse(receieving)
            return obj;
        } else {
            return allreceivingcurrencystate;
        }
    } catch (error) {
        return allreceivingcurrencystate;
    }
};

const getAllSendingCurrency = () => {
    const sending = localStorage.getItem("allsendingcurrencystate");
    try {
        if(sending != null)
        {
            const obj = JSON.parse(sending)
            return obj;
        } else {
            return allsendingcurrencystate;
        }
    } catch (error) {
        return allsendingcurrencystate;
    }
};

const getCustomerTransactions = () => {
    const trans = localStorage.getItem("allcustomertransactions");
    try {
        if(trans != null)
        {
            const authobj = JSON.parse(trans)
            return authobj;
        } else {
            return allcustomertransactions;
        }
    } catch (error) {
        return allcustomertransactions;
    }
};

const getAllTransactions = () => {
    const trans = localStorage.getItem("alltransactions");
    try {
        if(trans != null)
        {
            const authobj = JSON.parse(trans)
            return authobj;
        } else {
            return alltransactions;
        }
    } catch (error) {
        return alltransactions;
    }
};



const existingreceivingCurrency = getAllReceivingCurrency();
const existingsendingCurrency = getAllSendingCurrency();
const existingAllTransactions = getAllTransactions();

const allreceivingcurrencyreducer = (state = existingreceivingCurrency, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_RECEIVING_CURRENCY_SUCCESS:
            const allReceivingCountries = {
                allreceivingcurrencystate: action.payload,
            };
            localStorage.setItem("allreceivingcurrencystate", JSON.stringify(allReceivingCountries)); 
            return allReceivingCountries;
        default:
            return state;
    }
};

const allsendingcurrencyreducer = (state = existingsendingCurrency, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_SENDING_CURRENCY_SUCCESS:
            const allSendingCountries = {
                allsendingcurrencystate: action.payload,
            };
            localStorage.setItem("allsendingcurrencystate", JSON.stringify(allSendingCountries)); 
            return allSendingCountries;
        default:
            return state;
    }
};


const conversionreducer = (state = conversionstate, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CONVERT_SUCCESS:
            const currentConvertion = {
                conversionstate: action.payload,
            };
            return currentConvertion;
        default:
            return state;
    }
};


const transactionreducer = (state = transactionstate, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TRANSACTION_SUCCESS:
            const addTransaction = {
                transactionstate: action.payload,
            };
            return addTransaction;
        default:
            return state;
    }
};

const alltransactionreducer = (state = existingAllTransactions, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_TRANSACTION_SUCCESS:
            const allTransactions = {
                alltransactions: action.payload,
            };
            localStorage.setItem("alltransactions", JSON.stringify(allTransactions)); 
            return allTransactions;
        default:
            return state;
    }
};

const customertransactionsreducer = (state = getCustomerTransactions, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_CUSTOMER_TRANSACTION_SUCCESS:
            const customerTrans = {
                allcustomertransactions: action.payload,
            };
            localStorage.setItem("allcustomertransactions", JSON.stringify(customerTrans)); 
            return customerTrans;
        default:
            return state;
    }
};

export { transactionreducer, conversionreducer, allreceivingcurrencyreducer, allsendingcurrencyreducer, customertransactionsreducer, alltransactionreducer };