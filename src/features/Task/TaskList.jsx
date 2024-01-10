import NewTask from "./NewTask";

export default function TaskList({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className='task-list-h2'>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className='task-list-p'>This project does not have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className='task-list-ul'>
          {tasks.map((task) => (
            <li key={task.id} className='task-list-li'>
              <span>{task.text}</span>
              <button
                className='task-list-button'
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
