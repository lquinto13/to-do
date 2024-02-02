import { Link } from "react-router-dom";
import dayjs from "dayjs";

function CalendarGrid({ days, index }) {
  return (
    <Link to={`/task/${dayjs(days.dateString).format("MM-DD-YYYY")}`}>
      <li
        className={`h-28 group hover:h-40 border-2 border-slate-900 duration-200 ${
          days.isCurrentMonth ? "text-slate-900" : "text-gray-300"
        }`}
        key={index}
      >
        <span className="ml-3">
          <strong>{days.dayOfMonth}</strong>
        </span>
        {days.doesUserHaveTask ? (
          <div className="flex justify-center mt-4 cursor-pointer text-white bg-cyan-500 p-[4px] text-center shadow-md group-hover:mt-10 duration-200">
            You have a task today
          </div>
        ) : (
          ""
        )}
      </li>
    </Link>
  );
}

export default CalendarGrid;
