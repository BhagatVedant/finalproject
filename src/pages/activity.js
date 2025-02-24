import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Activity() {
    const { activityID } = useParams();
    const [activityData, setActivityData] = useState(null);

    useEffect(() => {
        fetch("./kyKids.json")
            .then((response) => response.json())
            .then((data) => {
                const tempData = data.find((item) => item.gid === activityID);
                setActivityData(tempData);
            })
            .catch((error) => console.error("Error loading JSON:", error));
    }, [activityID]);

    if (!activityData) {
        return <div>Loading...</div>;
    }

    if (activityData === undefined) {
        return <div>Activity not found</div>;
    }

    return (
        <div>
            <h1>{activityData.name}</h1>
            <p>{activityData.description}</p>
        </div>
    );
};

export default Activity;