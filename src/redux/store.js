import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import authreducer from "./reducers/authreducer";
import authErrorReducer from "./reducers/autherrorreducer";
import loadingreducer from "./reducers/loadingreducer";
import fetchcountryreducer from "./reducers/fetchcountryreducer";
import fetchstatesreducer from "./reducers/fetchstatesreducer";
import emailcheckreducer from "./reducers/emailcheckreducer";
import phonecheckreducer from "./reducers/phonecheckreducer";
import signupreducer from "./reducers/signupreducer";
import fetchchargesreducer from "./reducers/fetchchargesreducer";
import fetchpromosreducer from "./reducers/fetchpromosreducer"
import fetchratesreducer from "./reducers/fetchratesreducer"



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
        allpromos: fetchpromosreducer,
        allrates: fetchratesreducer,
    })

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

export default store;