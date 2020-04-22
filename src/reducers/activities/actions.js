import {action} from "../../utils";

export const Types = {
    GET_ACTIVITIES: "GET_ACTIVITIES",
    GET_ACTIVITIES_SUCCESS: "GET_ACTIVITIES_SUCCESS",
    GET_ACTIVITIES_FAIL: "GET_ACTIVITIES_FAIL",
    SEARCH_KEY_CHANGED: "SEARCH_KEY_CHANGED"
};

export const getActivities = () => action(Types.GET_ACTIVITIES);
export const getActivitiesSuccess = (activities) => action(Types.GET_ACTIVITIES_SUCCESS, {activities});
export const getActivitiesFail = () => action(Types.GET_ACTIVITIES_FAIL);
export const getActivityByIdSuccess = (activity) => action(Types.GET_ACTIVITY_BY_ID_SUCCESS, {activity});

export const searchKeyChanged = (search) => action(Types.SEARCH_KEY_CHANGED, {search});