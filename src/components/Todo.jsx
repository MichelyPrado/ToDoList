import React, { useState } from 'react';

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedCategory, setEditedCategory] = useState(todo.category);
  const [editedDate, setEditedDate] = useState(todo.date);

  const handleSaveEdit = () => {
    editTodo(todo.id, editedText, editedDescription, editedCategory, editedDate);
    setIsEditing(false);
  };

  return (
    <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {isEditing ? (
        <div className='content'>
          <input type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <input type="text" value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} />
          <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
          <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
          <button onClick={handleSaveEdit}>Salvar</button>
        </div>
      ) : (
        <div className='content'>
          <p>{todo.text}</p>
          <p className='description'>{todo.description}</p>
          <p className='category'>({todo.category})</p>
          <p className='date'>Data: {todo.date}</p>
        </div>
      )}
      <div>
        {isEditing ? null : (
          <>
            <button className='edit' onClick={() => setIsEditing(true)}>Editar</button>
            <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
