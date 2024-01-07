import noProjectImage from "../../../../assets/no-projects.png";
import TaskButton from "./util/Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className='no-project-selected'>
      <img src={noProjectImage} alt='No task list' className='img-no-project' />
      <h2 className='h2-no-project'>No Project Selected</h2>
      <p className='p1-no-project'>
        Select a project or get started with a new one
      </p>
      <p className='p2-no-project'>
        <TaskButton className='button-no-project' onClick={onStartAddProject}>
          Create new project
        </TaskButton>
      </p>
    </div>
  );
}
