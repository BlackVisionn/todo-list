import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e, completed) => {
    e.preventDefault();
    if (todo.title && todo.dueDate) {
      addTodo({
        ...todo,
        id: Date.now(),
        completed,
      });
      setTodo({
        title: '',
        description: '',
        dueDate: '',
        completed: false,
      });
    }
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={todo.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={todo.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="date"
        name="dueDate"
        value={todo.dueDate}
        onChange={handleChange}
        required
      />
      <div className="buttons">
        <button type="submit" onClick={(e) => handleSubmit(e, false)}>Add Task</button>
        <button type="button" onClick={(e) => handleSubmit(e, true)}>Add and Complete Task</button>
      </div>
    </form>
  );
};

export default TodoForm;
