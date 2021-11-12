import React from 'react'

function Blur(props) {
  return (
    <div className="backdrop" onClick={props.onCancel} />
  )
}

export default Blur
