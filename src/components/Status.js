function Status({ tasks }) {
  return (
    <div
      className={`py-2 px-7 border-2 rounded-full ml-5 ${
        tasks.done === false
          ? "bg-red-300  border-red-300  text-slate-500"
          : "bg-green-300  border-green-300  text-slate-700"
      }`}
    >
      {tasks.done === true ? "Completed" : "Pending"}
    </div>
  );
}

export default Status;
