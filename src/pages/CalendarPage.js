import Sidebar from "../components/Sidebar";
import SidebarList from "../components/SidebarList";
import Calendar from "../components/Calendar";

function CalendarPage({ task, setTask }) {
  return (
    <div className="flex max-xl:flex-col flex-row bg-cyan-50 ">
      <Sidebar>
        <SidebarList task={task} />
      </Sidebar>
      <Calendar />
    </div>
  );
}

export default CalendarPage;
