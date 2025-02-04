import { useTaskStore } from "../../store/task"

export function Itens() {
  const { tasks, removeTask, editTask } = useTaskStore()

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <p>{task.text}</p>

          <div>
            <button onClick={() => removeTask(task.id)}>
              Excluir
            </button>
            <button 
              onClick={
                () => editTask(
                  task.id, 
                  prompt('Editar tarefa', task.text) || task.text
                )}
              >
              Editar
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}