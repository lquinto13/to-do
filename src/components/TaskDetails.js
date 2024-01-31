import { useEffect, useState } from "react";

import ButtonDelete from "./ButtonDelete";
import ButtonAdd from "./ButtonAdd";
import ModalForm from "./ModalForm";
import ModalHeader from "./ModalHeader";

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
        className="fixed top-0 left-0 w-screen h-screen opacity-70  bg-black"
        onClick={() => onOpen(selectedId)}
      ></div>
      <div className="abs-center fixed  bg-cyan-50 p-8 h-1/2 max-xl:w-96 w-[30%] border-8 border-cyan-50 rounded-xl shadow-xl ">
        <header>
          <ModalHeader
            onOpen={onOpen}
            selectedId={selectedId}
            selectedTask={selectedTask}
          />
        </header>

        <section className="mt-5 relative">
          <ModalForm
            setTaskDetail={setTaskDetail}
            selectedId={selectedId}
            selectedTask={selectedTask}
            onSubmitDetail={handleSubmitDetail}
          />
        </section>
        <div className="flex gap-4 justify-end">
          <ButtonDelete onDelete={onDelete}> Delete Task</ButtonDelete>
          <ButtonAdd
            selectedTask={selectedTask}
            onHandleClick={() => onToggleDone(selectedId)}
            selectedId={selectedId}
          >
            {selectedTask.done === false ? (
              <strong>Finish Task</strong>
            ) : (
              <strong>Restart Task</strong>
            )}
          </ButtonAdd>
        </div>
      </div>
    </>
  );
}

export default TaskDetails;
