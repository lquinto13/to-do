function CalendayGrid({ days, index, children }) {
  return (
    <li
      className={`h-28 border-2 border-slate-900 ${
        days.isCurrentMonth ? "text-slate-900" : "text-gray-300"
      }`}
      key={index}
    >
      <span className="ml-3">
        <strong>{days.dayOfMonth}</strong>
      </span>
      {days.doesUserHaveTask ? (
        <div className=" mt-4 cursor-pointer text-white bg-cyan-500 p-[4px] text-center shadow-md hover:mt-2 ">
          You have a task today
        </div>
      ) : (
        ""
      )}
    </li>
  );
}

export default CalendayGrid;
