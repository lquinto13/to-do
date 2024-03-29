import dayjs from "dayjs";
import InputTask from "./InputTask";
import TaskList from "./TaskList";

function TaskToday({
  handleSubmit,
  task,
  taskDescription,
  onSetTaskDescription,
  onOpen,
}) {
  const now = dayjs().format("L");
  const taskToday = task.filter((task) => task.date === now);
  return (
    <>
      <h1 className="mt-7 text-4xl font-wsans">{now}</h1>
      <h1 className="mt-7  text-3xl font-roboto">Tasks</h1>
      <InputTask
        onSubmit={handleSubmit}
        taskDescription={taskDescription}
        onSetTaskDescription={onSetTaskDescription}
      />

      <ul className="grid max-lg:grid-cols-1 max-xl:grid-cols-2 grid-cols-3">
        {taskToday.map((tasks) => (
          <TaskList tasks={tasks} key={tasks.id} onOpen={onOpen} />
        ))}
      </ul>
    </>
  );
}

export default TaskToday;
