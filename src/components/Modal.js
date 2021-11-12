import React from 'react'

function Modal(props) {

  const confirm = () => {
    props.onConfirm()
  }

  const cancel = () => {
    debugger
    props.onCancel()
  }

  return (
    <div className="modal">
      <p >Are you sure you want?</p>
      <button className="btn btn--alt" onClick={cancel}>Cancel</button>
      <button className="btn" onClick={confirm}>Confirm</button>
    </div>
  )
}

export default Modal
