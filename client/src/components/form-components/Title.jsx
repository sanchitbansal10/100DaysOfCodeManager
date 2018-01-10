import React from 'react'

const Title = (props) => (
    <input type="text" value={props.value} onChange={props.controlFunction}/>
)

export default Title