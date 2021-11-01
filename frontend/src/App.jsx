import React, { useState } from 'react';
import Task from './components/task';

function App() {
  const [itens, setItens] = useState(
    [
      {
        _id: '617fd3d55837f479a694d5aa',
        text: 'Tarefa 1',
        active: 'true',
        edit: 'false',
      },
      {
        _id: '617fd3d95837f479a694d5ab',
        text: 'Tarefa 2',
        active: 'true',
        edit: 'false',
      },
    ],

  );

  function getAllTasks(){
    fetch
  }
  return (
    <div className="all">
      <h1>To Do App</h1>

      {itens.map((item) => <Task task={item} />)}

      <button type="button">Todos</button>
      <button type="button">concluidos</button>
      <button type="button">Pendentes</button>

      <button type="button">Inserir Nova Task</button>
    </div>
  );
}

export default App;
