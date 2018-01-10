import React from 'react'

const Date = (props) => (
    <div>
    <label>Date</label>
    <input type="date" value={props.value} onChange={props.controlFunction}/>
    </div>
)

export default Date