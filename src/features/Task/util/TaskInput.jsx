import { forwardRef } from "react";

const TaskInput = forwardRef(function TaskInput(
  { label, textarea, ...props },
  ref
) {
  return (
    <p className='p-task-input'>
      <label>{label}</label>
      {textarea ? (
        <textarea ref={ref} className='textarea-task-input' {...props} />
      ) : (
        <input ref={ref} className='textarea-task-input' {...props} />
      )}
    </p>
  );
});

export default TaskInput;
