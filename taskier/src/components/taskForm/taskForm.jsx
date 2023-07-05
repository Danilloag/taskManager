import './taskForm.css'
import { useContext } from 'react'
import tasksContext from '../../tasksContext'

export default function TaskForm() {

    const { task, setTask } = useContext(tasksContext)

    function taskInclude() {

        const newTask = {

            title: title.value,
            content: description.innerText,
            state: state.value,
            id: 123456

            // title: 'TÍTULO TESTE',
            // description: 'QUALQUER CONTEUDO',
            // state: 'Listed',
            // id: '123456'
        }

        setTask ({...task, newTask})
        alert (newTask)
    }

    return (
        <div className="form-background">
            <form action="post">
                <label htmlFor="name">Name:<br />
                    <input type="text" name="name" id="title"/>
                </label>

                <label htmlFor="stats">Status:<br />
                    <select name="stats" placeholder='Select a value' id="state" >
                        <option disabled selected hidden></option>
                        <option value="listed">Listed</option>
                        <option value="started">Started</option>
                        <option value="ended">Ended</option>
                    </select>
                </label>

                <label htmlFor="description">Description<br />
                    <textarea name="description" id="description" rows="10"></textarea>
                </label>

                <button className='form-butt' onClick={() => taskInclude()}>Submit</button>
            </form>
        </div>
    )
}