import { useContext } from 'react'
import tasksContext from '../../tasksContext'
import './menu.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Menu(props) {

    const { tasks, editTask } = useContext(tasksContext)
    const navigate = useNavigate()

    function turnStatus(status) {
        const taskToEditStatus = tasks.filter(task => task.id == props.taskId)[0]
        editTask(taskToEditStatus, status) 
        window.location.reload()
    }

    return (
        <div className="menu-container">
            <div className='butt-group'>
                {props.taskStatus !== "LISTADA" && <button onClick={() => turnStatus('LISTADA')} className="butt" title="Listed">Move to Listed</button>/*COLOCAR FUNÇÕES NOS BOTÔES*/} 
                {props.taskStatus !== "INICIADA" && <button onClick={() => turnStatus('INICIADA')} className="butt" title="Started">Move to Started</button>}
                {props.taskStatus !== "FINALIZADA" && <button onClick={() => turnStatus('FINALIZADA')} className="butt" title="Ended">Move to Ended</button>}
                <Link to={`/Edit_Task_Form/${props.taskId}`} >
                    <button className="butt">Edit Task</button>
                </Link>
            </div>
        </div>
    )
}