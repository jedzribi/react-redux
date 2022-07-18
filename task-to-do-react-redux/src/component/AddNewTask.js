import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd } from "../redux/action";
import "./AddNewTask.css";

const AddNewTask = () => {
  const [actionNewTask, setActionNewTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskNew = {
      id: Date.now(),
      description: actionNewTask,
      isDone: false,
      isFilter:false,
    };
    dispatch(handleAdd(taskNew));
    setActionNewTask("");
  };
  return (
    <div className="inputtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your new task here"
          required minLength="3"
          value={actionNewTask}
          onChange={(e) => setActionNewTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewTask;
