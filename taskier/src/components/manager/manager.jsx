import './manager.css'
import Column from '../column/column'
import { useContext, useEffect } from 'react'
import tasksContext from '../../tasksContext'


export default function Manager() {

    const { tasks, loadTasks } = useContext(tasksContext)

    useEffect(() => {
       loadTasks()
    },[])

    console.log(tasks)

    

    return (
        <div className='master-div'>
            <div className='search-div grid'>
                <input className='home-search col-12' type="search" placeholder='Busca...'/>
            </div>
            <div className='columns-div grid'>
                <div className='column-container col-4'>
                    <Column data={tasks} status="LISTADA" title='listada'></Column>
                </div>
                <div className='column-container col-4'>
                    <Column data={tasks} status="INICIADA" title='iniciada'></Column>
                </div>
                <div className='column-container col-4'>
                    <Column data={tasks} status="FINALIZADA" title='finalizada'></Column>
                </div>
            </div>
        </div>
    )
}