import Task from "./Task"

const Tasks = ({tasks,toggleReminder,removeTask}) => {
    return (
        <div>
         {
         tasks.map((task)=>{
         return <Task key={task.id} task={task} removeTask={removeTask} toggleReminder={toggleReminder}/>
         })
         }           
        </div>
    )
}

export default Tasks
