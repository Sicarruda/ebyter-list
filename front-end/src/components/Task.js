import React from 'react';

function Task(props) {
  const { tasks } = props;
  console.log(tasks,"sjakdakshdk");
  return (
    <div>
      <form>
        <ul>
          {tasks.map((t,indexMap) => (
            <li key={ indexMap }>
              Tarefa: {t.task} | Data: {t.date} | status: {t.Status}
              <button type="button">Deletar</button>
              <button type="button">Editar</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Task;
