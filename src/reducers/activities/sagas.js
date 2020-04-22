import {Api} from "../../services/api";
import {call, put} from "redux-saga/effects";
import {getActivitiesFail, getActivitiesSuccess} from "./actions";

export function* getActivitiesSaga() {
    try{
        let activities = yield call([Api.base, Api.base.getActivities]);
        yield put(getActivitiesSuccess(activities.data.feed.entry))
    } catch (e) {
        yield put(getActivitiesFail())
    }
}
