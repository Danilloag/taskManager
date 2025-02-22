import Task from '../task/task'
import './column.css'
import { Link } from 'react-router-dom'

export default function Column(props) {

    const tasks = props.data.filter((task) => task.status == props.status)

    return (
        <div className="tasks-container">
            <div className='column-head'>
                <h3>{props.title}</h3>
                <Link to='/New_Task_Form'>
                    <svg className="add-icon" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 0.254669C5.81055 0.254669 0.390625 5.67459 0.390625 12.364C0.390625 19.0535 5.81055 24.4734 12.5 24.4734C19.1895 24.4734 24.6094 19.0535 24.6094 12.364C24.6094 5.67459 19.1895 0.254669 12.5 0.254669ZM19.5312 13.7312C19.5312 14.0535 19.2676 14.3172 18.9453 14.3172H14.4531V18.8094C14.4531 19.1316 14.1895 19.3953 13.8672 19.3953H11.1328C10.8105 19.3953 10.5469 19.1316 10.5469 18.8094V14.3172H6.05469C5.73242 14.3172 5.46875 14.0535 5.46875 13.7312V10.9969C5.46875 10.6746 5.73242 10.4109 6.05469 10.4109H10.5469V5.91873C10.5469 5.59647 10.8105 5.33279 11.1328 5.33279H13.8672C14.1895 5.33279 14.4531 5.59647 14.4531 5.91873V10.4109H18.9453C19.2676 10.4109 19.5312 10.6746 19.5312 10.9969V13.7312Z" fill="#EF807C" />
                    </svg>
                </Link>
            </div>

            <div className='task-group'>
                {tasks.map((task) => task.show && <Task key={task.id} {...task} />)}
            </div>
        </div>
    )
}