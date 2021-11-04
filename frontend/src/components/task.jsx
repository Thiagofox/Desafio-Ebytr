import React, { useState } from 'react';
import PropTypes from 'prop-types';

// props recebidas do componente pai app
function Item({ item, updateTask, deleteTask }) {
  // estado para arzenar e lidar com as alterações feitas quando se escreve a tarefa no input
  const [tempText, setTempText] = useState([]);

  return (
    <div className="tasks_container">
      <input
        data-testid="input-checkbox"
        type="checkbox"
       /*  Lógica que deixa o checkbox com a caracteristica
        de toggle alterando via propriedade de controle a opção checked */
        checked={!item.active}
        /* Como foi usando uma referência da função pai ela é chamada via callback,
        é enviado todos os elementos de item e modificado a variavel de controle active
        transformando-a em um toggle alterando entre true e false */
        onClick={() => { updateTask({ ...item, active: !item.active }); }}
      />
      {/* Lógica para a adição de texto usando a propriedade de controle editar
      caso o item esteja true ou o texto esteja vázio ele renderiza um imput text */}
      {((item.edit) || item.text === '')
        ? (
          <input
            type="text"
            // Mostra ao usuário via placeholder o que estava digitado antes da edição
            placeholder={item.text}
            // Atualiza o estado com o novo valor digitado
            onChange={(event) => { setTempText(event.target.value); }}
            /* Ao clicar fora em qualaquer lugar ele atualiza o item
            modificando a propriedade de controle para false e colocando
            no texto o que foi salvo no estado no passo anterior */
            onBlur={() => { updateTask({ ...item, text: tempText, edit: false }); }}
          />
        )
        : (
          <spam
            /* Ao clicar na texto o formato é mudado para imput text para que a tarefa seja
            digitada, para isso usado a função de editar e alterando a propriedade de
            controle edit para true */
            onClick={() => updateTask({ ...item, edit: true })}
            /* lógica que coloca uma estilização no texto tarefa caso ele esteja finalizado
            usando a propriedade de controle active */
            style={item.active ? {} : { textDecoration: 'line-through' }}
          >
            {/* texto da tarefa */}
            {item.text}
          </spam>
        )}
      {/* botão que tem a função de apagar uma tarefa do banco de dados usando a requisição.
      Como estou usando uma referencia da função pai ela é chamada via callback */}
      <button type="button" onClick={() => { deleteTask(item); }}>Apagar</button>
    </div>
  );
}
// Validação de propTypes
Item.propTypes = {
  item: PropTypes.object,
}.isRequired;
// export o componente task
export default Item;
