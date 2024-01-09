import "./index.css";
import Sidebar from "./components/Sidebar";
import TaskToday from "./components/TaskToday";
import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
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
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { description: taskDescription, id: Date.now() };

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
    <div className="flex flex-row bg-slate-200">
      <Sidebar task={task} />
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
    </div>
  );
}

export default App;
