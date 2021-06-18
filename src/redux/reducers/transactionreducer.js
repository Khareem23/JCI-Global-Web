import ActionTypes from "../actiontype/ActionTypes"

const conversionstate = {};
const transactionstate = {};
const allreceivingcurrencystate = {};


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

 const existingCurrency = getAllReceivingCurrency();

const allreceivingcurrencyreducer = (state = existingCurrency, action) => {
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

export { transactionreducer, conversionreducer, allreceivingcurrencyreducer };