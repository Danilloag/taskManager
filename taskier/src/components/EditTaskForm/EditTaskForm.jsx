import './EditTaskForm.css'
import { useContext, useEffect, useState } from 'react'
import tasksContext from '../../tasksContext'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function EditTaskForm(props) {
  const { tasks, editTask } = useContext(tasksContext)
  const navigate = useNavigate()
  const { taskId } = useParams()
  
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [handleSave, setHandleSave] = useState({})

  useEffect(() => {
    taskToEdit()
    setName(document.getElementById('title').value)
    setStatus(document.getElementById('state').value)
    setDescription(document.getElementById('description').value)
  }, [])

  useEffect(() => {
    console.log(handleSave); // Mostra o valor atualizado de handleSave
    // Chame aqui a função que você deseja executar após atualizar handleSave
    // Por exemplo, editTask(handleSave);
  }, [handleSave])

  const handleNameChange = (e) => { setName(e.target.value) }
  const handleDescriptionChange = (e) => { setDescription(e.target.value) }
  const handleStatusChange = (e) => { setStatus(e.target.value) }

  function taskToEdit() {
    tasks.forEach(task => {
      if (task.id == taskId) {
        document.getElementById('title').value = task.name
        document.getElementById('state').value = task.status
        document.getElementById('description').value = task.description

        setHandleSave(task)
      }
    })
}

function createUpdateTask(e) {
    e.preventDefault(); // Impede o comportamento padrão de submit do formulário
    
    const updatedTask = {
        ...handleSave, // Copia as propriedades existentes do objeto handleSave
        name: name,
        description: description,
        status: status
    };
    
    setHandleSave(updatedTask);
    editTask(handleSave)
}

return (
    <div className="form-background">
      <form onSubmit={createUpdateTask}>
        <label htmlFor="title">Title:<br />
          <input type="text" name="title" id="title" onChange={handleNameChange} />
        </label>

        <label htmlFor="status">Status:<br />
          <select name="status" placeholder='Select a value...' id="state" onChange={handleStatusChange}>
            <option disabled hidden></option>
            <option value="LISTADA">Listed</option>
            <option value="INICIADA">Started</option>
            <option value="FINALIZADA">Ended</option>
          </select>
        </label>

        <label htmlFor="description">Description:<br />
          <textarea name="description" id="description" rows="10" onChange={handleDescriptionChange}></textarea>
        </label>
        <div className='buttons-group'>
          <button id='dell-button' className='form-button' type='submit'>Delete</button>
          <button className='form-button' type='submit'>Edit</button>
        </div>
      </form>
    </div>
  )
}