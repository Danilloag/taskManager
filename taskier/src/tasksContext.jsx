import { createContext, useState } from "react"

const tasksContext = createContext()

export const tasksInitialContent = []

export function TasksProvider(props) {
    const [tasks, setTasks] = useState(tasksInitialContent)

    async function loadTasks() {
        const res = await fetch('http://localhost:3000/task')
        const data = await res.json()
        const dataMapped = data.map((task) => ({ ...task, show: true }))
        setTasks(dataMapped)
    }

    function createTasks(task) {
        fetch('http://localhost:3000/task', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then((res) => res.json)
            .then((data) => {
                console.log(`Task ${task.name} creation successfully!`)
            })
            .catch((err) => { console.log(err) })
    }

    function editTask(task, taskStatus) {
        fetch(`http://localhost:3000/task/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: task.name,
                status: task.status = taskStatus,
                description: task.description,
                created_at: task.created_at,
                updated_at: task.updated_at
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(`Task ${task.name}, id ${task.id} edition successfully!`, data);
            })
    }

    function deleteTask(task) {
        fetch(`http://localhost:3000/task/${task.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then(response => response.json())
            .then(data => {
                console.log(`Task ${task.name} deletion successfully!`, data);
            })
    }

    return (
        <tasksContext.Provider value={{ tasks, setTasks, loadTasks, createTasks, editTask, deleteTask }}>
            {props.children}
        </tasksContext.Provider>
    )
}

export default tasksContext