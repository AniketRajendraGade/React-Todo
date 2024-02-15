import { useRef, useState } from "react";
import { IoBagAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  // =====Using UseRef()===============

  const todonameElement = useRef();
  const duedateElement = useRef();

  const handleButtonClick = (event) => {
    event.preventDefault();
    const todoname = todonameElement.current.value;
    const duedate = duedateElement.current.value;
    todonameElement.current.value = "";
    duedateElement.current.value = "";
    onNewItem(todoname, duedate);
  };

  // =====Using UseState()=============
  // const [todoname, setTodoName] = useState();
  // const [duedate, setdueDate] = useState();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfclicks.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setdueDate(event.target.value);
  //   console.log(noOfclicks.current);
  // };

  // const handleButtonClick = (event) => {
  //   event.preventDefault();
  //   onNewItem(todoname, duedate);
  //   setTodoName("");
  //   setdueDate("");
  // };

  return (
    <div className="container item-container mt-5 ">
      <form className="row" onSubmit={handleButtonClick}>
        <div className="col-4">
          <input
            type="text"
            ref={todonameElement}
            placeholder="Enter Todo here"
            // value={todoname}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={duedateElement}
            // value={duedate}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-primary ab-button">
            <IoBagAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
