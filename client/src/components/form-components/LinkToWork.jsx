import React from 'react'

const LinkToWork = (props) => (
    <div>
        <label>Link To Work</label>
        <input type="text" value={props.value} onChange={props.controlFunction}/>
    </div>
)

export default LinkToWork