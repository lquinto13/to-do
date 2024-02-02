import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function StickyNotes({ note, setStickyNotes, stickyNotes }) {
  const [selectedNote, setSelectedNote] = useState(null);
  const debounced = useDebouncedCallback(
    // function
    (value) => {
      setStickyNotes(
        stickyNotes.map((note) =>
          note.id === selectedNote ? { ...note, content: value } : note
        )
      );
    },
    // delay in ms
    1000
  );

  return (
    <li className="group">
      <form>
        <div className="h-96">
          <textarea
            onFocus={() => setSelectedNote(note?.id)}
            defaultValue={note.content}
            className="w-full group-odd:bg-cyan-500 border-lg h-[26rem] mt-10 border-5 group-odd:border-cyan-500 rounded-lg p-4 group-even:bg-amber-500 group-even:border-amber-500 shadow-lg  resize-none"
            onChange={(e) => debounced(e.target.value)}
          />
        </div>
      </form>
    </li>
  );
}

export default StickyNotes;
