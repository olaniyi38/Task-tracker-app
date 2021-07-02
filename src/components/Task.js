import { FaTimes } from 'react-icons/fa'

const Task = ({task,toggleReminder,removeTask}) => {
    return (
       <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>{toggleReminder(task.id)}}>
          <h3>{task.text} <FaTimes onClick={()=>{removeTask(task.id)}}  style={{color:'red'}}/></h3>
          <p>{task.day}</p>
       </div>
    )
}

export default Task
