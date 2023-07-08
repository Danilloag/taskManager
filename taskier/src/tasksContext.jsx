import { createContext, useState } from "react"

const tasksContext = createContext()

export const tasksInitialContent = []

export function ColumnProvider(props) {
    const [tasks, setTasks] = useState(tasksInitialContent)

    function loadTasks() {
        fetch('http://localhost:3000/task')
            .then((res) => res.json())
            .then((data) => setTasks(data))
    }

    function createTasks(task) {
        fetch ('http://localhost:3000/task', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then((res) => res.json)
        .then((data) => {
            console.log(`DADOS: ${data}  TASK: ${task}`)
            // data = {...data, task}
        })
    }

    return (
        <tasksContext.Provider value={{ tasks, setTasks, loadTasks, createTasks }}>
            {props.children}
        </tasksContext.Provider>
    )
}

export default tasksContext