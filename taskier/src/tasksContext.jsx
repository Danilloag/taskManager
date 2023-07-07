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

    return (
        <tasksContext.Provider value={{ tasks, setTasks, loadTasks }}>
            {props.children}
        </tasksContext.Provider>
    )
}

export default tasksContext