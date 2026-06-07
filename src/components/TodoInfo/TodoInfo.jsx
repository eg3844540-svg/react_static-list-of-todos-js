// Add the required props
export const TodoInfo = ({ todo }) => (
  <ul>
    <li>
      <strong>Title:</strong> {todo.title}
    </li>

    <li>
      <strong>User:</strong> {todo.user && todo.user.name}
    </li>
    <li>
      <strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}
    </li>
  </ul>
);
