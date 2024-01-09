import SidebarList from "./SidebarList";

function Sidebar({ task }) {
  return (
    <div className="bg-slate-100 w-96 h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)]  ">
      <h1 className="text-4xl ml-4 mt-4 font-karla">Menu</h1>

      <ul className=" flex flex-col gap-7 text-xl ml-10 mt-4 align-bottom font-wsans">
        <SidebarList task={task} />
      </ul>
    </div>
  );
}

export default Sidebar;
