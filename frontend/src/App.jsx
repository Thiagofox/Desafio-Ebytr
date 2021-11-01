import React, { useState, useEffect } from 'react';
import Item from './components/task';

function App() {
  const [itens, setItens] = useState([]);
  const [filterlist, setFilterList] = useState({ filter: false, active: false });

  function getAllTasks() {
    fetch('http://localhost:3000/todo/get/', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setItens(data));
  }

  function createTask() {
    fetch('http://localhost:3000/todo/post/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: '', active: true }),
      })
      .then((response) => response.json())
      .then(() => getAllTasks());
  }

  const updateTask = (item) => {
    fetch('http://localhost:3000/todo/edit/',
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
      .then((response) => response.json())
      .then(() => getAllTasks());
  };

  const deleteTask = (item) => {
    fetch('http://localhost:3000/todo/remove/',
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
      .then((response) => response.json())
      .then(() => getAllTasks());
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  // const showListItens = filterlist.filter
  //   ? itens.filter((aux) => aux.active === filterlist.active)
  //   : itens;

  return (
    <div className="all">
      <h1>To Do App</h1>

      {showListItens.map((item) => (
        <Item
          item={item}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ))}

      {/* <button type="button" onClick={setFilterList({ filter: false })}>Todos</button> */}
      <button type="button">concluidos</button>
      <button type="button">Pendentes</button>

      <button type="button" onClick={createTask}>Inserir Nova Task</button>
    </div>
  );
}

export default App;
