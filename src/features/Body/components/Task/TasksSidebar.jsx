import TaskButton from "./Button.jsx";

export default function TasksSidebar({ onStartAddProject }) {
  return (
    <aside className='side-bar-container'>
      <h2 className='side-bar-h2 padded-element'>Your Projects</h2>
      <div className='add-project-button-container padded-element'>
        <TaskButton onClick={onStartAddProject}>+Add project</TaskButton>
      </div>
      <ul></ul>
    </aside>
  );
}
