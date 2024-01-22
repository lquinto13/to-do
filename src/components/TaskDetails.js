import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

function TaskDetails({
  task,
  selectedId,
  onToggleDone,
  onSetTask,
  onDelete,
  onOpen,
}) {
  const [selectedTask, setSelectedTask] = useState([]);
  const [taskDetail, setTaskDetail] = useState("");
  const [isDisabled, setIsDisbled] = useState(true);

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
    if (!taskDetail) return;
    setTaskDetail(
      onSetTask(
        task.map((detail) =>
          detail.id === selectedId ? { ...detail, details: taskDetail } : detail
        )
      )
    );
    setTaskDetail("");
  }

  return (
    <>
      <div
        className="absolute w-screen h-screen opacity-70 bg-black"
        onClick={() => onOpen(selectedId)}
      ></div>
      <div className="abs-center  bg-cyan-50 p-8 h-1/2 max-xl:w-96 w-[30%] border-8 border-cyan-50 rounded-xl shadow-xl ">
        <button
          className="absolute right-8 cursor-pointer z-50"
          onClick={() => onOpen(selectedId)}
        >
          <FontAwesomeIcon icon={faX} className="fa-lg" />
        </button>
        <div className="relative  flex items-center">
          <input
            className={`text-3xl w-[80%] py-3 border-2 rounded-md font-roboto pl-4 ${
              isDisabled === true
                ? "placeholder:text-slate-900"
                : "placeholder:text-slate-400"
            }`}
            placeholder={selectedTask?.description}
            disabled={isDisabled}
          />
          <FontAwesomeIcon
            onClick={() => setIsDisbled(!isDisabled)}
            icon={faPencil}
            className="ml-5 fa-xl cursor-pointer"
          />
        </div>
        <section className="mt-5 relative">
          <form>
            <textarea
              onChange={(e) => setTaskDetail(e.target.value)}
              className="w-full pl-4 pt-2 h-48 border-8   border-white resize-none "
              type="text-area"
              defaultValue={selectedTask.details}
              placeholder="Add Details...."
              rows={4}
              cols={20}
            />

            <button
              onClick={handleSubmitDetail}
              className="px-4 py-2 bg-cyan-500 border-2 border-cyan-500 rounded-md text-cyan-50"
            >
              <strong>Submit</strong>
            </button>
          </form>
        </section>
        <div className="flex gap-4 justify-end">
          <button
            onClick={() => onDelete(selectedId)}
            className="right-0 px-4 py-2 bg-cyan-50 border-2 border-slate-500 rounded-md text-slate-800"
          >
            <strong>Delete Task</strong>
          </button>
          <button
            onClick={() => onToggleDone(selectedId)}
            className="right-0 px-4 py-2 bg-cyan-500 border-2 border-cyan-500 rounded-md text-cyan-50"
          >
            {selectedTask.done === false ? (
              <strong>Finish Task</strong>
            ) : (
              <strong>Restart Task</strong>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;

/* <button
onClick={() => onToggleDone(selectedId)}
className="px-5 py-2 border rounded-full mt-10 max-xl:mt-5 bg-slate-50"
>
Finish Task
</button>
<span className="absolute bottom-5 max-xl:right-5 flex max-xl:flex-col gap-5  font-karla">
<button
  onClick={() => onDelete(selectedId)}
  className="p-8 rounded-md  f qont-roboto shadow-lg  bg-red-400 hover:bg-red-600 hover:text-slate-100"
>
  Delete Task
</button>
<button
  className="p-8  rounded-md font-roboto shadow-lg bg-amber-200  hover:bg-amber-400 hover:text-slate-100"
  onClick={handleSubmitDetail}
>
  Save Changes
</button>
</span> */
