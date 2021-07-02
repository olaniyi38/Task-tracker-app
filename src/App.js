import { useState } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Storage from './components/LocalStorage'



const App = () => {
  const [tasks, showTask] = useState(Storage.getItems('tasks'))

 const addTask=(task)=>{
  const newTask = task
 Storage.storeItem('tasks',task)  
  showTask([...tasks,newTask])
 }
  
 const removeTask=(id)=>{
    showTask(tasks.filter((task)=>{
      return task.id !== id
    }))
    Storage.deleteItem('tasks',id)
 }

 const[showAddTask,toggleShowAddTask] = useState(false)
  
 const toggleForm=()=>{
   toggleShowAddTask(!showAddTask)
 }

 const toggleReminder=(id)=>{
   showTask(
    tasks.map((task)=>{
      return task.id === id ? {...task,reminder:!task.reminder} : task
     })
   )

   const storedTasks=Storage.getItems('tasks')
   storedTasks.forEach((task)=>{
     if(task.id === id){
       task.reminder=!task.reminder
       Storage.setItem('tasks',storedTasks) 
      }
   })
   
 }

 
 
  
 return (
    <div className='container'>
      <Header toggleTaskForm={toggleForm} showForm={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} /> }
      {
      tasks.length===0 ? 'Add a task...' : 
      <Tasks tasks={tasks} 
      removeTask={removeTask} 
      toggleReminder={toggleReminder}/>
      }

    </div>
  )
}

export default App
  