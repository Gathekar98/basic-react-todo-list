import React from "react";
import "./styles.css";
import { Form, Input } from "reactstrap";
import { useState } from "react";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finalDolist = [...todolist, todoname];
      setTodolist(finalDolist);
    } else {
      alert("todo name already exists..");
    }
    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <Form onSubmit={saveToDoList}>
          <Input type="text" name="todoname" />
          <button>Save</button>
        </Form>

        <div className="outerDiv">
          <ul>{list}</ul>
        </div>
      </div>
    </>
  );
}
export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    setTodolist(finalData);
  };
  return (
    <li>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
