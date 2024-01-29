function Sidebar({ children }) {
  return (
    <div className="flex flex-col w-64 bg-cyan-500 h-screen rounded-r-xl gap-4 shrink-0 left-0 top-0 sticky  max-xl:hidden">
      <h1 className="mt-5 ml-4 font-roboto text-3xl text-cyan-50">
        TO-DO Menu
      </h1>
      <ul className="flex flex-col  text-xl">{children}</ul>
    </div>
  );
}

export default Sidebar;
