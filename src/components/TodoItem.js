import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };

  const handleSave = () => {
    updateTodo(editedTodo);
    setIsEditing(false);
  };

  const handleStatusChange = () => {
    updateTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`} onClick={handleStatusChange}>
      {isEditing ? (
        <>
          <input type="text" name="title" value={editedTodo.title} onChange={handleEditChange} />
          <textarea name="description" value={editedTodo.description} onChange={handleEditChange}></textarea>
          <input type="date" name="dueDate" value={editedTodo.dueDate} onChange={handleEditChange} />
          <div className="buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>{todo.dueDate}</p>
          <div className="buttons">
            <button onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}>Edit</button>
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
