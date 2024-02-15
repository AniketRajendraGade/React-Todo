import { MdDelete } from "react-icons/md";

function Todoitem({ task, date }) {
  return (
    <div className="container mt-2">
      <div className="row">
        <div key={task.name} className="col-4">
          {task}
        </div>
        <div key={date.duedate} className="col-4">
          {date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-warning ab-button">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
