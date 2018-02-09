import React from 'react'

const Thoughts = (props) => (
    <div>
        <label>{props.title}</label>
        <textarea rows='10' value={props.value} onChange={props.controlFunction} />
    </div>
)

export default Thoughts