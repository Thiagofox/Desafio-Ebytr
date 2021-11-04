import React, { useState, useEffect } from 'react';
import Item from './components/task';

function App() {
  // Estado para aramzenar os itens da lista
  const [itens, setItens] = useState([]);
  // Estado para aramzenar os filtros da aplicação com duas propriedades de controle
  const [filterlist, setFilterList] = useState({ filter: false, active: false });

  // Funções que fazem os fetchs para fazer as requsições ao backend ->

  // Busca todos as tarefas
  function getAllTasks() {
    fetch('http://localhost:3000/todo/get/', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setItens(data));
  }
  // Busca todos as tarefas em ordem alfabética
  function getAllTasksAlphaSorted() {
    fetch('http://localhost:3000/todo/get/alphasorted', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setItens(data));
  }
  // Busca todos as tarefas mais recente
  function getAllTasksDateSorted() {
    fetch('http://localhost:3000/todo/get/datesort', { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setItens(data));
  }
  // Cria uma nova tarefa e ao final traz as tarefas criadas
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
  // Edita uma tarefa e retorna as tarefas criadas
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
  // Deleta uma tarefa do banco e retorna as demais tarefas
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
  /* Use effect para assim que o site for carregado ele fazer uma requisição e buscar as
  tarefas já cadastradas uma unica vez com a função getAllTasks */
  useEffect(() => {
    getAllTasks();
  }, []);

  /*
  Lógica para definir via filtros quais tarefas devem ser exibidas =>
  -> ShowListItens será igual ao estado itens se o filtro estiver desativado
  -> Se a propriedade de controle filter for true,
  ele filtrará os itens com a propriedade de controle active true ou false,
  caso contrario ele traz os itens usaremos nos botões mais a
  baixo a função setFilterList para controlar os filtros
   */

  const showListItens = filterlist.filter
    ? itens.filter((aux) => aux.active === filterlist.active)
    : itens;

  return (
    <div className="to_do">
      <div className="to_do_all">
        {/* map para renderizar os componentes que contem as tarefas */}
        <h1>To Do App</h1>
        {showListItens.map((item) => (
          <Item
            // O Valor do item e as funções de editar e deletar como estão no contexto da tarefa
            // em si são passados via props para o componente task
            item={item}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
        {/* lógica para os filtros para os botões 'Todos', 'Pendentes', 'Concluidos'
         temos duas variaveis de controle, dessa forma podemos definir quais tarefas iremos
         retornar com o filtro false, temos todas as tarefas, com o filtro true e active true
         temos as que estao pendentes, e com o filtro false e o active true
         temos as que ja forma concluidas */}
        <div className="buttons">
          <button type="button" onClick={() => setFilterList({ filter: false })}>Todos</button>
          <button type="button" onClick={() => setFilterList({ filter: true, active: true })}>Pendentes</button>
          <button type="button" onClick={() => setFilterList({ filter: true, active: false })}>Concluídos</button>

          {/* Os botoẽs de ordenar alfabeticamenente e os mais Recentes
          são requisições que fazem essa ordenação via banco */}
          <button type="button" onClick={() => getAllTasksAlphaSorted()}>A-B-C</button>
          <button type="button" onClick={() => getAllTasksDateSorted()}>Recentes</button>
        </div>

        <div className="buttons">
          {/* botão que usa a função para criar uma nova tarefa */}
          <button type="button" onClick={createTask}>Inserir nova tarefa</button>
        </div>

      </div>
    </div>
  );
}

export default App;

/* Foi utilizado como auxilio, e suporte os video do Youtuber -> Felipe Barbosa -
(Que produz excelentes videos com conteudo muito didatico, visando auxialiar
pessoas que tem como objetivo entrarem na area de T.I. (https://www.youtube.com/channel/UCU9GVA-FLTST1u2xzugVb7g))
que foram de grande ajuda para a concepção e realização do projeto */
