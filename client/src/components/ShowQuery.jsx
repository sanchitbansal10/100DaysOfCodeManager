import React from 'react';

const ShowQuery = (props)=>(
    <div>
        <ul>
            <li>date:{props.content.data.date}</li>
            <li>startTime:{props.content.data.startTime}</li>
            <li>endTime:{props.content.data.endTime}</li>
            <li>title:{props.content.data.title}</li>
            <li>thoughts:{props.content.data.thoughts}</li>
            <li>whatILearned:{props.content.data.whatILearned}</li>
            <li>linkToWork:{props.content.data.linkToWork}</li>
            <li>tags:{props.content.data.tag}</li>
        </ul>
    </div>
)

export default ShowQuery