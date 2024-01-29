import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SidebarList from "../components/SidebarList";

function AppLayout({ task }) {
  return (
    <div className="relative flex flex-row overflow-x-hidden h-screen">
      <Sidebar>
        <SidebarList task={task} />
      </Sidebar>

      <Outlet />
    </div>
  );
}

export default AppLayout;
