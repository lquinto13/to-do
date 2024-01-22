import InputTask from "./InputTask";
import TaskList from "./TaskList";

function TaskToday({
  handleSubmit,
  task,
  taskDescription,
  onSetTaskDescription,
  onOpen,
}) {
  const now = new Date();

  return (
    <>
      <div className="basis-10/12 mx-5 bg-cyan-50 h-screen">
        <h1 className="mt-7 text-4xl font-wsans">{now.toLocaleDateString()}</h1>
        <h1 className="mt-7  text-3xl font-roboto">Tasks</h1>
        <InputTask
          onSubmit={handleSubmit}
          taskDescription={taskDescription}
          onSetTaskDescription={onSetTaskDescription}
        />
        <ul className="grid max-lg:grid-cols-1 max-xl:grid-cols-2 grid-cols-3">
          {task.map((tasks) => (
            <TaskList tasks={tasks} key={tasks.id} onOpen={onOpen} />
          ))}
        </ul>
      </div>
    </>
  );
}
{
  /* <ul className="flex flex-wrap gap-7 w-full"></ul> */
}
export default TaskToday;