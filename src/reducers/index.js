import {combineReducers} from "redux";
import {connectRouter} from "connected-react-router";
import {activitiesReducer} from "./activities/reducer";


export const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    activities: activitiesReducer
});