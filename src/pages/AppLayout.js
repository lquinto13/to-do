import Sidebar from "../components/Sidebar";
import TaskToday from "../components/TaskToday";
import { useState } from "react";
import SidebarList from "../components/SidebarList";
import TaskDetails from "../components/TaskDetails";

function AppLayout({ task, setTask }) {
  const [taskDescription, setTaskDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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
    console.log(task.description);

    const newTask = {
      description: taskDescription,
      id: Date.now(),
      done: false,
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
    <div className="flex max-xl:flex-col flex-row bg-cyan-50 ">
      <Sidebar>
        <SidebarList task={task} />
      </Sidebar>
      <TaskToday
        task={task}
        handleSubmit={handleSubmit}
        onDelete={handleDelete}
        taskDescription={taskDescription}
        onSetTaskDescription={setTaskDescription}
        onOpen={handleOpen}
        isOpen={isOpen}
        selectedId={selectedId}
        onSetTask={setTask}
      />
      {isOpen === true ? (
        <TaskDetails
          task={task}
          selectedId={selectedId}
          onToggleDone={handleToggleDone}
          onOpen={handleOpen}
          isOpen={isOpen}
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
