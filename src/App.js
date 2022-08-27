import React, { useState } from 'react';
import './style.css';
import CreateTodo from './components/CreateTodo';
import Table from './components/Table';
export default function App() {
  const [todoItem, setValue] = useState();
  const [todos, setTodoItems] = useState([]);
  const onChange = (e) => {
    const val = e.target.value;
    setValue(val);
  };
  const onSubmit = (e) => {
    setTodoItems((newItem) => [...newItem, todoItem]);
  };
  const editItem = (index) => {
    console.log(index);
  };
  return (
    <div>
      {/* create component */}
      <CreateTodo onChange={onChange} onSubmit={onSubmit} value={todoItem} />
      {/* list table component */}
      <h1>Todo List</h1>
      {todos ? (
        <Table data={todos} editItem={() => editItem} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
