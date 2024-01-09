import { useEffect, useState } from "react";

function TaskDetails({ task, selectedId, onOpen, onSetTask, onDelete }) {
  const [selectedTask, setSelectedTask] = useState([]);
  const [taskDetail, setTaskDetail] = useState("");
  useEffect(
    function () {
      async function fetchDetails() {
        const res = task.find((task) => task.id === selectedId);
        setSelectedTask(res);
      }
      fetchDetails();
    },
    [selectedId, task]
  );

  function handleSubmitDetail(e) {
    e.preventDefault();

    setTaskDetail(
      onSetTask(
        task.map((detail) =>
          detail.id === selectedId ? { ...detail, details: taskDetail } : detail
        )
      )
    );
    console.log(task);
    setTaskDetail("");
  }

  return (
    <div className="relative bg-slate-100 w-6/12 h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <button
        onClick={() => onOpen(selectedId)}
        className="absolute top-0 right-0 h-16 w-16 text-red-700 font-wsans"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <div className="ml-4 mt-4 mr-4">
        <h1 className="text-4xl  font-karla">Task:</h1>
        <p className="text-2xl mt-8 font-karla">{selectedTask?.description}</p>
        <form onSubmit={handleSubmitDetail}>
          <input
            className="mt-4 w-96 bg-slate-100 focus:outline-none py-4 px-4"
            placeholder="Add Detail"
            value={taskDetail}
            onChange={(e) => setTaskDetail(e.target.value)}
          />
          <p className="text-xl">{selectedTask?.details}</p>
        </form>

        <span className=" flex gap-7 text-xl font-karla">
          <button
            onClick={() => onDelete(selectedId)}
            className="mt-8   basis-1/2 rounded-md  shadow-lg h-14 bg-red-400 hover:bg-red-600 hover:text-slate-100"
          >
            Delete Task
          </button>
          <button
            className="mt-8 basis-1/2 h-14 rounded-md shadow-lg bg-amber-200  hover:bg-amber-400 hover:text-slate-100"
            onClick={handleSubmitDetail}
          >
            Save Changes
          </button>
        </span>
      </div>
    </div>
  );
}

export default TaskDetails;
