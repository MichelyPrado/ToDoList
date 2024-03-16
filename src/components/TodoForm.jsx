import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !date) return; 

    addTodo(title, description, category, date); 

    setTitle("");
    setDescription("");
    setCategory("");
    setDate("");
  };

  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Digite um título' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder='Digite uma descrição' value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /> {/* Campo para a data */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
