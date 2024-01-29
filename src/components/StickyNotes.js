function StickyNotes({ note }) {
  return (
    <li
      className={`odd:bg-cyan-500 border-lg h-[26rem] mt-10 border-5 odd:border-cyan-500 rounded-lg p-4 even:bg-amber-500 even:border-amber-500 shadow-lg `}
    >
      {note.content}
    </li>
  );
}

export default StickyNotes;
