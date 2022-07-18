import "./EditTask.css";
import React, { useState } from 'react';
import { handleEdit } from "../redux/action";
import { useDispatch } from "react-redux";
import Modal from 'react-modal';


const EditTask = ({tache}) => {
  // console.log(tache)
  const [editTask, setEditTask] = useState(tache.description);
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{e.preventDefault() 
  const taskEdited={
    id:tache.id,
    description: editTask,
    isDone:tache.isDone,
    isFilter:tache.isFilter,
  }
  dispatch(handleEdit(taskEdited))
  setEditTask('')
  closeModal()
}
// console.log({editTask})
  const customStyles = {
    content: {
      top: '5%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  function openModal() {
    setIsOpen(true);
  }
    function closeModal() {
      setIsOpen(false);}
  return (
    <div>
      <button className="edit" onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
         <form onSubmit={handleSubmit}>
        <input 
          type="text"
          required minLength="3" 
          value={editTask} onChange={e=>setEditTask(e.target.value)} />
            <br />
            <button type="submit">confirme</button>
            <button onClick={closeModal}>cancel</button>
          </form>
        </Modal>
    </div>
  )
}

export default EditTask