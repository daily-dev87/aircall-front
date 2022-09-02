import { API, ACTIVITIES_ACTION, RESET } from './app.constant';

export const fetchActivities = async () => {
    return API.get(ACTIVITIES_ACTION)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        })
};

export const updateActiveStatus = async (activityId) => {
    return API.post(`${ACTIVITIES_ACTION}/${activityId}`, {is_archived: true})
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        });
};

export const resetActivities = async () => {
    return API.get(RESET)
        .then(response => {
            return fetchActivities();
        })
        .catch(err => {
            console.log(err);
            return null;
        });
}