import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className='add-new-task-container'>
      <input
        type='text'
        className='add-new-task-input'
        onChange={handleChange}
        value={enteredTask}
      ></input>
      <button className='add-new-task-button' onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
}
