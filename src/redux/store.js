import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import authreducer from "./reducers/authreducer";
import authErrorReducer from "./reducers/autherrorreducer";
import loadingreducer from "./reducers/loadingreducer";
import fetchcountryreducer from "./reducers/fetchcountryreducer";
import fetchstatesreducer from "./reducers/fetchstatesreducer";
import emailcheckreducer from "./reducers/emailcheckreducer";
import phonecheckreducer from "./reducers/phonecheckreducer";
import { signupreducer, userprofilereducer } from "./reducers/signupreducer";
import { fetchuserrecieversreducer, fetchchargesreducer, downloadreceiptreducer, uploadconfrimationreducer, addpaymentreducer} from "./reducers/fetchchargesreducer";
import { fetchpromosreducer, fetchpurposesreducer } from "./reducers/fetchpromosreducer";
import fetchratesreducer from "./reducers/fetchratesreducer";
import { fetchbanksreducer, fetchbusinessbanksreducer } from "./reducers/fetchbanksreducer";
import { transactionreducer, conversionreducer, allreceivingcurrencyreducer, allsendingcurrencyreducer, customertransactionsreducer, alltransactionreducer } from "./reducers/transactionreducer"; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

    const rootReducer = combineReducers({
        loadingstate: loadingreducer,
        allcountriesstate: fetchcountryreducer,
        authstate: authreducer,
        autherror: authErrorReducer,
        emailcheckstate: emailcheckreducer,
        phonecheckstate: phonecheckreducer,
        allstatesstate: fetchstatesreducer,
        userregstate: signupreducer,
        allcharges: fetchchargesreducer,
        alluserreceivers: fetchuserrecieversreducer,
        allpromos: fetchpromosreducer,
        allpurposestate: fetchpurposesreducer,
        allrates: fetchratesreducer,
        allbanks: fetchbanksreducer,
        allbusinessbanks: fetchbusinessbanksreducer,
        conversionstate: conversionreducer,
        transactionstate: transactionreducer,
        allreceivingcurrencystate: allreceivingcurrencyreducer,
        allsendingcurrencystate: allsendingcurrencyreducer,
        downloadreceiptstatus: downloadreceiptreducer,
        uploadconfirmation: uploadconfrimationreducer,
        allcustomertransactions: customertransactionsreducer,
        redirecturl: addpaymentreducer,
        userprofilestate: userprofilereducer,
        alltransactions: alltransactionreducer,
    })

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

export default store;