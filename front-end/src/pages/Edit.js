import React from 'react';

function Edit() {
  return (
    <div>
      <form>
        <p> Edite a tarefa</p>
        <input
          type="text"
          placeholder="Edite a tarefa"
          name="task-input"
        ></input>
      </form>
      <div>
        <p> Selecione o status da tarefa</p>
        <button type="button">Em andamento</button>
        <button type="button">Pendente</button>
        <button type="button">Completo</button>
      </div>
      <button type="button">voltar</button>
      <button type="button">salvar</button>
    </div>
  );
}

export default Edit;
