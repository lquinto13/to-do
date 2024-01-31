import StickyNotes from "../components/StickyNotes";

function SticykWall({ setStickyNotes, stickyNotes }) {
  function addNote() {
    const newStickNote = {
      id: Date.now(),
      content: "",
      isDisplayed: false,
    };
    setStickyNotes((stickyNote) => [...stickyNote, newStickNote]);
  }
  return (
    <ul className="mx-5 basis-10/12 grid grid-cols-4 gap-4 pb-4">
      {stickyNotes.map((note, i) => (
        <StickyNotes note={note} />
      ))}
      <li
        onClick={addNote}
        className="flex sticky-note even:bg-amber-500 even:border-amber-500 justify-center items-center text-4xl opacity-30 hover:opacity-60 duration-150 hover:cursor-pointer"
      >
        <strong>+</strong>
      </li>
    </ul>
  );
}

export default SticykWall;
