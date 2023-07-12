import './EditTaskForm.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import tasksContext from '../../tasksContext';

export default function EditTaskForm() {
  const { tasks, editTask } = useContext(tasksContext);
  const navigate = useNavigate();
  const { taskId } = useParams();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    taskToEdit();
  }, []);

  function taskToEdit() {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setName(task.name);
      setDescription(task.description);
      setStatus(task.status);
    }
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function createUpdateTask(e) {
    e.preventDefault();

    const updatedTask = {
      id: taskId,
      name: name,
      description: description,
      status: status,
    };

    editTask(updatedTask);
    console.log(taskId)
    navigate('/manager');
  }

  return (
    <div className="form-background">
      <form onSubmit={createUpdateTask}>
        <label htmlFor="title">
          Title:
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label htmlFor="status">
          Status:
          <br />
          <select
            name="status"
            placeholder="Select a value..."
            id="state"
            value={status}
            onChange={handleStatusChange}
          >
            <option disabled hidden></option>
            <option value="LISTADA">Listed</option>
            <option value="INICIADA">Started</option>
            <option value="FINALIZADA">Ended</option>
          </select>
        </label>

        <label htmlFor="description">
          Description:
          <br />
          <textarea
            name="description"
            id="description"
            rows="10"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </label>
        <div className="buttons-group">
          <button id="dell-button" className="form-button" type="submit">
            Delete
          </button>
          <button className="form-button" type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
