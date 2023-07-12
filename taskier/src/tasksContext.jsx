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
                console.log(`Task ${task} created successfully`)
            })
            .catch((error) => { console.error() })
    }

    function editTask(task) {
        fetch(`http://localhost:3000/task/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        }
        )
            .then((response) => response.json())
            console.log(response.json(), "JSON")
            .then((data) => {
                console.log('Tarefa atualizada com sucesso:', data);
            })
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    return (
        <tasksContext.Provider value={{ tasks, setTasks, loadTasks, createTasks, editTask }}>
            {props.children}
        </tasksContext.Provider>
    )
}

export default tasksContext