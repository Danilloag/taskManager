import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Manager from '../manager/manager'
import Task from '../task/task'
import TaskForm from '../taskForm/taskForm'
import EditTaskForm from '../EditTaskForm/EditTaskForm'


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Manager />} />
            <Route path='/task' element={<Task/>} />
            <Route path='/taskform' element={<TaskForm/>} />
            <Route path='/edittaskform/:taskId' element={<EditTaskForm/>} />
        </Routes>
    )
}

export default AppRoutes