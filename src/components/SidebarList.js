import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { sideLinks } from "../constants/index";
import { useState } from "react";
import dayjs from "dayjs";

function SidebarList({ task }) {
  var localizedFormat = require("dayjs/plugin/localizedFormat");

  dayjs.extend(localizedFormat);
  const [currentPage, setCurrentPage] = useState("");
  const finishedTask = task.filter((task) => task.done === false).length;
  function findCurrentPage(page) {
    setCurrentPage(page);
  }

  return (
    <>
      {sideLinks.map((item) => (
        <Link to={item.link} key={item.id}>
          <li
            onClick={() => findCurrentPage(item.label)}
            className={`relative group cursor-pointer text-cyan-50 hover:sidebar-opp pl-4 py-5 duration-250 ${
              item.label === currentPage ? "sidebar-opp text-cyan-500" : ""
            }`}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className="ml-3 ">{item.label}</span>
            {item.id === 1 && (
              <span
                className={`${
                  finishedTask
                    ? "border-2 text-sm font-wsans rounded-sm px-4 py-1 absolute right-5 top-5 group-hover:border-cyan-300"
                    : ""
                }`}
              >
                {finishedTask === 0 ? null : finishedTask}
              </span>
            )}
          </li>
        </Link>
      ))}
    </>
  );
}

export default SidebarList;
