import React, { useEffect, useState } from 'react';
import ActivityView from './ActivityView';
import { fetchActivities, updateActiveStatus, resetActivities } from './utils/app.global';

export default function Activities(props) {

    const [activityList, setActivityList] = useState([]);

    useEffect(() => {
        fetchActivities().then((response) => {
            setActivityList(response);
        });
    }, []);

    const handleSelectActivity = (activity) => {
        updateActiveStatus(activity.id).then((response) =>  {
            const newList = [].concat(activityList);
            const pos = newList.findIndex(item => item.id === response.id);
            newList[pos] =  response;
            setActivityList(newList);
        });
    }

    const handleReset = () => {
        resetActivities().then((response) => {
            setActivityList(response);
        })
    }

    return (
        <div className='container-view'>
            {props.tab === 'feed' &&
                activityList.filter((activity) => !activity.is_archived).map((activity) => (
                    <ActivityView activity={activity} handleSelectActivity={handleSelectActivity}  key={activity.id}/>
                ))
            }
            {props.tab === 'archived' && (
                <div>
                    {
                        activityList.filter((activity) => activity.is_archived).map((activity) => (
                            <ActivityView activity={activity} handleSelectActivity={handleSelectActivity}  key={activity.id}/>
                        ))
                    }
                    <div className='reset-container'>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </div>
            )}
        </div>
    );
};
