import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNoteSticky,
  faCalendar,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { sideLinks } from "../constants";
import { Link } from "react-router-dom";

function SidebarList({ task }) {
  const finishedTask = task.filter((task) => task.done === false);

  return (
    <>
      <Link to="/today">
        <li className="relative group cursor-pointer text-cyan-50 hover:bg-cyan-50 hover:text-cyan-300  pl-4 py-5">
          <span>
            <FontAwesomeIcon icon={faList} />
            <span className="ml-3 ">
              <span>Today</span>
              <span
                className={`${
                  finishedTask.length
                    ? "border-2 text-sm font-wsans rounded-sm px-4 py-1 absolute right-5 top-5 group-hover:border-cyan-300"
                    : ""
                }`}
              >
                {finishedTask.length === 0 ? null : finishedTask.length}
              </span>
            </span>
          </span>
        </li>
      </Link>
      <Link>
        <li className="cursor-pointer  text-cyan-50 hover:bg-cyan-50 hover:text-cyan-300 pl-4 py-5">
          <span className="">
            <FontAwesomeIcon icon={faNoteSticky} />
            <span className="ml-3">Sticky Wall</span>
          </span>
        </li>
      </Link>
      <Link to="/calendar">
        <li className="text-cyan-50 hover:bg-cyan-50 hover:text-cyan-300 pl-4 py-5">
          <span className="cursor-pointer">
            <FontAwesomeIcon icon={faCalendar} />
            <span className="ml-3">Calendar</span>
          </span>
        </li>
      </Link>
    </>
  );
}

export default SidebarList;
