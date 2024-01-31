import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ModalHeader({ onOpen, selectedId, selectedTask }) {
  const [isDisabled, setIsDisbled] = useState(true);

  return (
    <>
      <button
        className="absolute right-8 cursor-pointer z-50"
        onClick={() => onOpen(selectedId)}
      >
        <FontAwesomeIcon icon={faX} className="fa-lg" />
      </button>
      <div className="relative  flex items-center">
        <input
          className={`text-3xl w-[80%] py-3 border-2 rounded-md font-roboto pl-4 ${
            isDisabled === true
              ? "placeholder:text-slate-900"
              : "placeholder:text-slate-400"
          }`}
          placeholder={selectedTask?.description}
          disabled={isDisabled}
        />
        <FontAwesomeIcon
          onClick={() => setIsDisbled(!isDisabled)}
          icon={faPencil}
          className="ml-5 fa-xl cursor-pointer"
        />
      </div>
    </>
  );
}

export default ModalHeader;
