function Button({ children, onDelete, selectedId }) {
  return (
    <button
      onClick={() => onDelete(selectedId)}
      className="px-4 py-2 bg-cyan-50 border-2 border-slate-500 rounded-md text-slate-800"
    >
      <strong>{children}</strong>
    </button>
  );
}

export default Button;
