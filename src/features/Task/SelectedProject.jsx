import TaskList from "./TaskList";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("ja-JP", {
    year: "numeric", // 年を数値で表示
    month: "long", // 月を長い形式で表示（例：1月）
    day: "numeric", // 日を数値で表示
  });

  return (
    <div className='selected-project'>
      <header className='selected-project-header'>
        <div className='selected-project-div1'>
          <h1 className='selected-project-title'>{project.title}</h1>
          <button className='selected-project-delete-button' onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className='selected-project-date'>{formattedDate}</p>
        <p className='selected-project-description'>{project.description}</p>
      </header>
      <TaskList onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
