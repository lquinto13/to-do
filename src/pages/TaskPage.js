import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useState } from "react";
import TaskNow from "../components/Task";
import TaskDetails from "../components/TaskDetails";

function TaskPage({ task, setTask }) {
  const { date } = useParams();
  const dateSelected = dayjs(date).format("L");
  const taskWithChosenDate = task.filter((task) => task.date === dateSelected);

  const [taskDescription, setTaskDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      description: taskDescription,
      id: new Date(),
      done: false,
      date: dateSelected,
    };
    if (newTask.description === "") return;

    setTask((task) => [...task, newTask]);
    setTaskDescription("");
  }

  function handleOpen(id) {
    if (isOpen === false) {
      setIsOpen(!isOpen);
    }
    setSelectedId(id);
    if (id === selectedId) setIsOpen(!isOpen);
  }

  function handleDelete(id) {
    console.log(id);
    const confirmed = window.confirm(
      "Are you sure you want to delete this task"
    );
    if (confirmed) {
      handleOpen(id);
      setTask((task) => task.filter((task) => task.id !== id));
    }
  }
  function handleToggleDone(id) {
    setTask(
      taskWithChosenDate.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
    handleOpen(id);
  }

  return (
    <div className="w-screen px-4">
      <TaskNow
        task={taskWithChosenDate}
        date={dateSelected}
        onSubmit={handleSubmit}
        taskDescription={taskDescription}
        onSetTaskDescription={setTaskDescription}
        onOpen={handleOpen}
      />

      {isOpen === true ? (
        <TaskDetails
          task={task}
          selectedId={selectedId}
          onToggleDone={handleToggleDone}
          onOpen={handleOpen}
          onSetTask={setTask}
          onDelete={handleDelete}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default TaskPage;
