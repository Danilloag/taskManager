import { createContext, useState } from "react"

const tasksContext = createContext()

export const tasksInitialContent = []

export function TasksProvider(props) {
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
                console.log(`Task ${task} created successfully`)
            })
            .catch((error) => {console.error()})
    }

    function TaskEditor(task) {
        const [name, setName] = useState(task.name);
        const [description, setDescription] = useState(task.description);
        const [status, setStatus] = useState(task.status);

        const handleNameChange = (e) => {
            setName(e.target.value);
        };

        const handleDescriptionChange = (e) => {
            setDescription(e.target.value);
        };

        const handleStatusChange = (e) => {
            setStatus(e.target.value);
        };

        const handleSave = () => {
            const updatedTask = {
                ...task,
                name: name,
                description: description,
                status: status,
            };

            fetch(`http://localhost:3000/task/${task.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTask),
            }
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log('Tarefa atualizada com sucesso:', data);
                })
        };
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    return (
        <tasksContext.Provider value={{ tasks, setTasks, loadTasks, createTasks }}>
            {props.children}
        </tasksContext.Provider>
    )
}

export default tasksContext