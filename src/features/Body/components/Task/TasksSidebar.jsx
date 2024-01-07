import TaskButton from "./util/Button";

export default function TasksSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className='side-bar-container'>
      <h2 className='side-bar-h2 padded-element'>Your Projects</h2>
      <div className='add-project-button-container padded-element'>
        <TaskButton onClick={onStartAddProject}>+Add project</TaskButton>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses = "task-side-bar-button";

          if (project.id === selectedProjectId) {
            cssClasses += "task-side-bar-button-selected";
          } else {
            cssClasses += "task-side-bar-button-noSelected";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
