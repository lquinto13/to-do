import TaskToday from "../components/TaskToday";
import { useState } from "react";
import TaskDetails from "../components/TaskDetails";
import dayjs from "dayjs";

function AppLayout({ task, setTask }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const date = dayjs().format("L");
  function handleDelete(id) {
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
      task.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
    handleOpen(id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      description: taskDescription,
      id: Date.now(),
      done: false,
      date: date,
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

  return (
    <div className="w-screen px-4">
      <TaskToday
        task={task}
        handleSubmit={handleSubmit}
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

export default AppLayout;
