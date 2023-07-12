import { Routes, Route } from 'react-router-dom'
import Manager from './components/manager/manager'
import Task from './components/task/task'
import TaskForm from './components/taskForm/taskForm'
import EditTaskForm from './components/EditTaskForm/EditTaskForm'


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