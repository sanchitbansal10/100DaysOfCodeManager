import React from 'react'

const Time = (props) => (
    <div>
    <label>{props.timeTitle}</label>
    <input type="time" value={props.value} onChange={props.controlFunction}/>
    </div>
)

export default Time