import Status from "./Status";

function TaskList({ tasks, onOpen }) {
  return (
    <li className="list-card">
      <h1 className="ml-10 mr-3 mt-3 text-2xl font-wsans break-words">
        <strong>{tasks.description}</strong>
      </h1>
      <button
        onClick={() => onOpen(tasks.id)}
        className="absolute bottom-2 ml-10 underline text-cyan-500"
      >
        View Task
      </button>
      <span className="absolute bottom-2 right-5">
        <Status tasks={tasks} />
      </span>
    </li>
  );
}

export default TaskList;
