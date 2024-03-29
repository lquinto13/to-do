import InputTask from "./InputTask";
import TaskList from "./TaskList";

function Task({
  task,
  date,
  onSubmit,
  taskDescription,
  onSetTaskDescription,
  onOpen,
}) {
  return (
    <>
      <h1 className="mt-7 text-4xl font-wsans">{date}</h1>
      <h1 className="mt-7  text-3xl font-roboto">Tasks</h1>
      <InputTask
        onSubmit={onSubmit}
        taskDescription={taskDescription}
        onSetTaskDescription={onSetTaskDescription}
      />

      <ul className="grid max-lg:grid-cols-1 max-xl:grid-cols-2 grid-cols-3">
        {task.map((tasks) => (
          <TaskList tasks={tasks} key={tasks.id} onOpen={onOpen} />
        ))}
      </ul>
    </>
  );
}

export default Task;
