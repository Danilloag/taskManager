import './EditTaskForm.css'
import { useContext, useState } from 'react'
import tasksContext from '../../tasksContext'
import { useNavigate } from 'react-router-dom'

export default function EditTaskForm() {

    const navigate = useNavigate()

    // const [newTask, setNewTask] = useState({
    //     name: '',
    //     status: '',
    //     description: '',
    // })

    // const { createTasks } = useContext(tasksContext)
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     createTasks(newTask)
    // }

    //     navigate('/')


    return (
        <div className="form-background">
            <form action="post" onSubmit={() => handleSave()}>
                <label htmlFor="title">Title:<br />
                    <input type="text" name="title" id="title" onChange={(e) => handleNameChange(e)} />
                </label>

                <label htmlFor="status">Status:<br />
                    <select name="status" placeholder='Select a value...' id="state" onChange={(e) => handleStatusChange(e)}>
                        <option disabled hidden></option>
                        <option value="LISTADA">Listed</option>
                        <option value="INICIADA">Started</option>
                        <option value="FINALIZADA">Ended</option>
                    </select>
                </label>

                <label htmlFor="description">Description:<br />
                    <textarea name="description" id="description" rows="10" onChange={(e) => handleDescriptionChange(e)}></textarea>
                </label>
                <div className='butt-group'>
                    <button id='dell-button' className='form-butt' type='submit'>Delete</button>
                    <button className='form-butt' type='submit'>Edit</button>
                </div>
            </form>
        </div>
    )
}