export default function TaskButton({ children, ...props }) {
  return (
    <button className='add-project-button' {...props}>
      {children}
    </button>
  );
}
