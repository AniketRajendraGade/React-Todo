import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem from "./components/Todoitem";
import "./app.css";
import Many from "./components/many";
import { useState } from "react";

function App() {
  const initialTodoItem = [
    {
      name: "Ronaldo",
      duedate: "4/10/23",
    },
    {
      name: "Messsi",
      duedate: "6/10/23",
    },
    {
      name: "Neymar",
      duedate: "12/12/23",
    },
    {
      name: "Mbappe",
      duedate: "12/12/23",
    },
  ];

  const [toitem, setTodoitem] = useState(initialTodoItem);
  const HandleNewItem = (itemName, itemDueDate) => {
    console.log(`item added ${itemName} and ${itemDueDate}`);
    const newTodoItems = [...toitem, { name: itemName, duedate: itemDueDate }];
    setTodoitem(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={HandleNewItem} />
      <Many Items={toitem}></Many>
    </center>
  );
}

export default App;
