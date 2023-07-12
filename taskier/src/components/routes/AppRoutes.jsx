import { Routes, Route } from 'react-router-dom'
import Manager from '../manager/manager'
import Task from '../task/task'
import TaskForm from '../taskForm/taskForm'
import EditTaskForm from '../EditTaskForm/EditTaskForm'


function AppRoutes() {
    return (
        <Routes>
            <Route path='Manager' element={<Manager />} />
            <Route path='/Tasks' element={<Task/>} />
            <Route path='/New_Task_Form' element={<TaskForm/>} />
            <Route path='/Edit_Task_Form/:taskId' element={<EditTaskForm/>} />
        </Routes>
    )
}

export default AppRoutes