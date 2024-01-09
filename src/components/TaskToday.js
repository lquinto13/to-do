import TaskDetails from "./TaskDetails";

function Content({
  handleSubmit,
  task,
  taskDescription,
  onSetTaskDescription,
  onOpen,
  isOpen,
  selectedId,
  onSetTask,
  onDelete,
}) {
  return (
    <>
      <div className="ml-8 w-screen">
        <h1 className="text-9xl font-wsans">Today</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-11/12 py-5 mt-10 shadow-md px-2 rounded-lg"
            placeholder="+ Add new task"
            value={taskDescription}
            onChange={(e) => onSetTaskDescription(e.target.value)}
          />
        </form>

        <ul className="flex justify-center align-center flex-col w-11/12 gap-3  text-xl mt-8 font-wsans rounded-r-lg">
          {task.map((tasks) => (
            <li className="flex  relative items-center bg-slate-50 h-12 shadow-md  rounded-r-lg border 	">
              <input type="checkbox" className="ml-5" />
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
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {isOpen ? (
        <TaskDetails
          task={task}
          selectedId={selectedId}
          onOpen={onOpen}
          isOpen={isOpen}
          onSetTask={onSetTask}
          onDelete={onDelete}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Content;
