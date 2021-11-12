import { React, useState } from 'react';
import Modal from './Modal';
import Blur from './Blur'



function Todo(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true)
  }


  const closeModalHandler = () => {
    setModalIsOpen(false)
  }

  return (
    <div >
      <h1>My Todo</h1>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" variant="outlined" color="error" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} /> : null}
      {modalIsOpen ? <Blur onCancel={closeModalHandler} /> : null}

    </div>
  )
}

export default Todo
