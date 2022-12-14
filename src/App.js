import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'doctor',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'homo',
            day: 'Feb 7th at 3:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'doctorHomo',
            day: 'Feb 3th at 4:40pm',
            reminder: false,
        },
    ]
)


//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
// DELETE TASK

const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id 
    ))
}

// toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
  ))
}

  return (
    <div className="container">
    <Header onAdd={()=>setShowAddTask(!showAddTask)}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
    {deleteTask} onToggle={toggleReminder}/> : ( 
    'No Tasks to Show' )}
  </div>
  )
}

export default App;
