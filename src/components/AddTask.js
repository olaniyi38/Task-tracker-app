import { useState } from "react"
import Error from './Error'

const AddTask = ({onAdd}) => {
   const [task, setTask] = useState('')
   const [day, setDay] = useState('')
   const [reminder, setReminder] = useState(false)
   
   const [incompleteForm,setIncompleteForm] = useState(false)
   
   const submitTask=(e)=>{

   e.preventDefault();

   if([task,day].includes('')){
    setIncompleteForm(true)
    
   }else{
    setIncompleteForm(false);
    onAdd({
    id: Math.floor(Math.random() * 10000 + 1),
    text:task,
    day:day,
    reminder:reminder 
    })
    
    setTask('')
    setDay('')
    setReminder(false)
   }
   
   
}

    return (
        <form className='add-form' onSubmit={submitTask} >

           {incompleteForm && <Error text='Please Fill All Parameters' />}

            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task'
                onChange={(e)=>{setTask(e.target.value)}}
                value={task}
                />
            </div>
            <div className='form-control'>
                <label>Day</label>
                <input type='text' placeholder='Add day and time'
                onChange={(e)=>{setDay(e.target.value)}}
                value={day}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox'
                onChange={(e)=>{setReminder(e.currentTarget.checked)}}
                checked={reminder}
                />
            </div>
            <input className='btn  btn-block' type='submit' value='Add task' />
        </form>
    )
}

export default AddTask
