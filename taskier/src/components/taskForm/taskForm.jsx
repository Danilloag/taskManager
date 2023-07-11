import './taskForm.css'
import { useContext, useState } from 'react'
import tasksContext from '../../tasksContext'
import { useNavigate } from 'react-router-dom'

export default function TaskForm() {

    const navigate = useNavigate()

    const [newTask, setNewTask] = useState({
        name: '',
        status: '',
        description: '',
    })

    const { createTasks } = useContext(tasksContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        createTasks(newTask)
        navigate('/')
    }

    return (
        <div className="form-background">
            <form action="post" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:<br />
                    <input type="text" name="title" id="title" onChange={(e) => setNewTask({...newTask, name: e.target.value})}/>
                </label>

                <label htmlFor="status">Status:<br />
                    <select name="status" placeholder='Select a value...' value={newTask.status} id="state" onChange={(e) => setNewTask({...newTask, status: e.target.value})}>
                        <option disabled hidden></option>
                        <option value="LISTADA">Listed</option>
                        <option value="INICIADA">Started</option>
                        <option value="FINALIZADA">Ended</option>
                    </select>
                </label>

                <label htmlFor="description">Description:<br />
                    <textarea name="description" id="description" rows="10" onChange={(e) => setNewTask({...newTask, description: e.target.value})}></textarea>
                </label>

                <button className='form-butt' type='submit'>Submit</button>
            </form>
        </div>
    )
}