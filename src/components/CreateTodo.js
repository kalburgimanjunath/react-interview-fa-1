import React from 'react';
export default function CreateTodo(props) {
  return (
    <>
      <label>Type input</label>
      <input
        type="text"
        name="todo"
        onChange={props.onChange}
        value={props.value}
      />
      <button type="button" onClick={props.onSubmit}>
        Add
      </button>
    </>
  );
}
