import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import authreducer from "./reducers/authreducer";
import authErrorReducer from "./reducers/autherrorreducer";
import loadingreducer from "./reducers/loadingreducer";
import fetchcountryreducer from "./reducers/fetchcountryreducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

    const rootReducer = combineReducers({
        loadingstate: loadingreducer,
        allcountriesstate: fetchcountryreducer,
        authstate: authreducer,
        autherror: authErrorReducer,
    })

    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );

export default store;