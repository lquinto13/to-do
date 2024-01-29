function CalendayGrid({ days, index }) {
  return (
    <l1
      className={`h-28 border-2 border-slate-900 ${
        days.isCurrentMonth ? "text-slate-900" : "text-gray-300"
      }`}
      key={index}
    >
      <span className="ml-3">
        <strong>{days.dayOfMonth}</strong>
      </span>
    </l1>
  );
}

export default CalendayGrid;
