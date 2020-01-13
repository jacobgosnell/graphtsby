/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "@emotion/styled";

const TodoInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 1.3rem;
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 1em;
`;

const Todo = styled.li`
  display: flex;
  text-align: left;
  margin-bottom: 1rem;
`;

const X = styled.a`
  margin-left: auto;
  padding: 3px;
  font-weight: bold;
  opacity: 0.5;

  &: hover {
    opacity: 1;
  }
`;

export default function() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy Milk" },
    { id: 2, text: "Buy Cheese" },
    { id: 3, text: "Buy Apples" }
  ]);

  function handleSubmission(e) {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), text: value }]);
    e.target.reset();
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id != id));
  }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleSubmission}>
        <TodoInput
          placeholder="Your todo..."
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <TodoList>
          {todos.map(todo => (
            <Todo key={todo.id}>
              {todo.text}
              <X onClick={() => removeTodo(todo.id)}>DELETE</X>
            </Todo>
          ))}
        </TodoList>
      </form>
    </>
  );
}
