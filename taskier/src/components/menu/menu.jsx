import { useContext } from 'react'
import tasksContext from '../../tasksContext'
import './menu.css'
import { Link } from 'react-router-dom'

export default function Menu(props) {

    const { tasks, editTask } = useContext(tasksContext)

    const taskToEditStatus = tasks.filter(task => task.id == props.taskId)[0]


    return (
        <div className="menu-container">
            <div className='butt-group'>
                {props.taskStatus !== "LISTADA" && <button onClick={() => editTask(taskToEditStatus, 'LISTADA')} className="butt" title="Listed">Move to Listed</button>/*COLOCAR FUNÇÕES NOS BOTÔES*/} 
                {props.taskStatus !== "INICIADA" && <button onClick={() => editTask(taskToEditStatus, 'INICIADA')} className="butt" title="Started">Move to Started</button>}
                {props.taskStatus !== "FINALIZADA" && <button onClick={() => editTask(taskToEditStatus, 'FINALIZADA')} className="butt" title="Ended">Move to Ended</button>}
                <Link to={`/Edit_Task_Form/${props.taskId}`} >
                    <button className="butt">Edit Task</button>
                </Link>
            </div>
        </div>
    )
}