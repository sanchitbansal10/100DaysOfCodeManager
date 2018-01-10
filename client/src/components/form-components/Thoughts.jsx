import React from 'react'

const Thoughts = (props) => (
    <textarea value={props.value} onChange={props.controlFunction} />
)

export default Thoughts