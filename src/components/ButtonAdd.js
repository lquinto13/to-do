function ButtonAdd({ onToggleDone, selectedId, onHandleClick, children }) {
  return (
    <button
      onClick={onHandleClick}
      className=" px-4 py-2 bg-cyan-500 border-2 border-cyan-500 rounded-md text-cyan-50"
    >
      {children}
    </button>
  );
}

export default ButtonAdd;
