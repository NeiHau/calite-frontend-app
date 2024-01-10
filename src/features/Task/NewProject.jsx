import { useRef } from "react";
import TaskInput from "./util/TaskInput";
import Modal from "./util/Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  function handleCloseModal() {
    if (modal.current) {
      modal.current.close();
      return;
    }
  }

  return (
    <>
      <Modal ref={modal} onCloseModal={handleCloseModal}>
        <h2>Invalid input</h2>
        <form method='dialog'>
          <button
            type='button'
            onClick={handleCloseModal}
            className='invalid-dialog-button'
          >
            Ok
          </button>
        </form>
      </Modal>
      <div className='new-task-container'>
        <menu className='new-task-menu'>
          <li>
            <button className='cancel-button' onClick={onCancel}>
              Cancel
            </button>
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
    </>
  );
}
