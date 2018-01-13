import React from 'react'

const Tags = (props) => (
    <div>
        <label>Tags</label>
        <input value={props.value} onChange={props.controlFunction} />
    </div>
)

export default Tags