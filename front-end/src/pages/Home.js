import React, { useEffect, useState } from 'react';
import Task from '../components/Task';

function hendleClick() {}

function Home() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (tasks === null) {
      fetch('http://localhost:3001/home')
        .then((data) => data.json())
        .then((tasks) => setTasks(tasks))
        .catch((error) => {
          console.log('Erro no fetch da Home', error);
        });
    }
  });

  return (
    <div>
      <form>
        <label htmlFor="task-input">
          <input
            type="text"
            placeholder="Adicione a tarefa"
            name="task-input"
          ></input>
          <button type="submit"> Enviar </button>                          
        </label>
      </form>
      <div>
        <p>Ordenar lista</p>
        <button type="button"> A-Z </button>
        <button type="button"> Status </button>
      </div>
      <div>
        <p>Suas tarefas</p>
        <Task tasks={tasks || []} />
      </div>
    </div>
  );
}

export default Home;
