import './menu.css'
import { Link } from 'react-router-dom'

export default function Menu(props) {

    // const [ menu, setMenu ] = useState(true)

    return (
        <div className="menu-container">
            <div className='butt-group'>
                {props.taskStatus !== "LISTADA" && <button className="butt" title="Listed">Move to Listed</button>}
                {props.taskStatus !== "INICIADA" && <button className="butt" title="Started">Move to Started</button>}
                {props.taskStatus !== "FINALIZADA" && <button className="butt" title="Ended">Move to Ended</button>}
                <Link to={`/Edit_Task_Form/${props.taskName}`}>
                    <button className="butt">Edit Task</button>
                </Link>
            </div>
        </div>
    )
}