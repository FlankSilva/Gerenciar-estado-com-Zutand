import { FormEvent, useState } from "react"
import { Itens } from "./itens"
import { useTaskStore } from "../../store/task"

export function TaskList() {
  const [newTask, setNewTask] = useState('')

  const {tasks, addTask} = useTaskStore()

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault()

    addTask(newTask)

    setNewTask('')
  }

  return (
    <main>
      <span>
        Você tem {tasks.length} tarefas em aberto
      </span>

      <form onSubmit={handleAddTask} >
        <input 
          type="text"
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
          placeholder="Adicione uma nova tarefa" 
        />

        <button type="submit">
          Adiconar
        </button>
      </form>

      <Itens />
    </main>
  )
}