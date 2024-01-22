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

/* <input
        type="checkbox"
        value={tasks.done}
        onChange={() => onToggleDone(tasks.id)}
        className="ml-5 w-5  h-5 appearance-none border border-slate-400 rounded-sm checked:bg-slate-400"
      />
      <span className="ml-5">{tasks.description}</span>
      <button
        onClick={() => onOpen(tasks.id)}
        className="absolute mr-2 right-0 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 stroke-slate-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button> */
