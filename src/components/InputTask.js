function InputTask({ onSubmit, taskDescription, onSetTaskDescription }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="rounded-lg  mt-10 border-2 border-cyan-500 px-4 py-5  font-wsans focus:outline-none"
        placeholder="+ Add new task"
        value={taskDescription}
        maxLength={25}
        onChange={(e) => onSetTaskDescription(e.target.value)}
      />
    </form>
  );
}

export default InputTask;
