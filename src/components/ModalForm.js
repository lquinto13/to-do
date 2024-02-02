import ButtonAdd from "./ButtonAdd";

function ModalForm({
  setTaskDetail,
  selectedTask,
  selectedId,
  onSubmitDetail,
}) {
  return (
    <form>
      <textarea
        onChange={(e) => setTaskDetail(e.target.value)}
        className="w-full pl-4 pt-2 h-48 border-8   border-white resize-none "
        type="text-area"
        defaultValue={selectedTask?.details}
        placeholder="Add Details...."
        rows={4}
        cols={20}
      />
      <ButtonAdd
        selectedTask={selectedTask}
        onHandleClick={onSubmitDetail}
        selectedId={selectedId}
      >
        Submit
      </ButtonAdd>
      ;
    </form>
  );
}

export default ModalForm;
