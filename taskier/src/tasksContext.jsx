import { createContext, useState } from "react"

const tasksContext = createContext()

export const tasksInitialContent = []

export function ColumnProvider(props) {
    const [task, setTask] = useState(tasksInitialContent)

    return (
        <tasksContext.Provider value={{task, setTask}}>
            {props.children}
        </tasksContext.Provider>
    )
}

export default tasksContext