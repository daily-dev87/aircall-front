import React from 'react';
import { format } from 'date-fns';

export default function ActivityView(props) {
    const { activity } = props;

    const onHandleSelectActivity = () => {
        if (!activity.is_archived) {
            props.handleSelectActivity(activity);
        }
    }
    
    const getCallIcon = (callType, callDirection) => {
        if(callType === 'missed') {
            return 'assets/missed.png';
        } else {
            if(callDirection === 'inbound') {
                return 'assets/incoming-call.svg';
            }
            if (callDirection === 'outbound') {
                return 'assets/outcoming-call.svg';
            }
        }
    }

    return (
        <div key={activity.id} className="activity-view" onClick={onHandleSelectActivity}>
            <img src={getCallIcon(activity.call_type, activity.direction)} alt="" />
            <div className="info-view">
                <div className="number-view">
                    <div className="call-view">
                        <span className="caller">{activity.from}</span>
                        {/* <div className='non-received-badge'> </div> */}
                    </div>
                    <span>{activity.via}</span>
                </div>
                <div className="time-view">
                    <div className='time-part'>{format(new Date(activity.created_at), 'KK:mm')}</div>
                    <div className="day-part">{format(new Date(activity.created_at), 'a')}</div>
                </div>
            </div>
        </div>
    );
};
