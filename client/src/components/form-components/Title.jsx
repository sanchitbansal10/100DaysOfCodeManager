import React from 'react'

const Title = (props) => (
    <div>
        <label>Title</label>
        <input type="text" value={props.value} onChange={props.controlFunction}/>
    </div>
)

export default Title