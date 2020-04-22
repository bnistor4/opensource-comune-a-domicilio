import {all, takeLatest} from "redux-saga/effects";
import {Types} from "./reducers/activities/actions";
import {getActivitiesSaga} from "./reducers/activities/sagas";

export default function*  root() {
    yield all([
        takeLatest(Types.GET_ACTIVITIES, getActivitiesSaga)
    ]);
}