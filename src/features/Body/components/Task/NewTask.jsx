import { useRef } from "react";
import TaskInput from "./TaskInput";

export default function NewTask({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <div className='new-task-container'>
      <menu className='new-task-menu'>
        <li>
          <button className='cancel-button'>Cancel</button>
        </li>
        <li>
          <button className='save-button' onClick={handleSave}>
            Save
          </button>
        </li>
      </menu>
      <div>
        <TaskInput type='text' ref={title} label='TITLE' />
        <TaskInput
          type='text'
          ref={description}
          label='DESCRIPTION'
          textarea={true}
        />
        <TaskInput type='date' ref={dueDate} label='DUE DATE' />
      </div>
    </div>
  );
}
