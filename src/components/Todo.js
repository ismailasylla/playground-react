import { React, useState } from 'react';
import Modal from './Modal';
import Blur from './Blur'



function Todo(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true)
  }

  return (
    <div className="card">
      <h1>My Todo</h1>
      <div>
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" variant="outlined" color="error" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? <Modal /> : null}
      {modalIsOpen ? <Blur /> : null}

    </div>
  )
}

export default Todo
