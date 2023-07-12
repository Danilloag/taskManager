import './manager.css';
import Column from '../column/Column';
import { useEffect, useContext } from 'react';
import tasksContext from '../../tasksContext';


export default function Manager() {
  const { tasks, setTasks, loadTasks } = useContext(tasksContext);

    useEffect(() => {
        loadTasks()
    }, [])
    
    async function filterTasks(e) {
        if (e.target.value != '') {
            const tasksToShow = tasks.map((task) => ({...task, show: task.name.toLowerCase().includes(e.target.value.toLowerCase())}))
            setTasks(tasksToShow)
        }
    }

    return (
        <div className='master-div'>
            <div className='search-div grid'>
                <input onChange={(e) => filterTasks(e)} className='home-search col-12' type="search" placeholder='Search a title...' />
            </div>
            <div className='columns-div grid'>
                <div className='column-container col-4'>
                    <Column data={tasks} status="LISTADA" title='Listed'></Column>
                </div>
                <div className='column-container col-4'>
                    <Column data={tasks} status="INICIADA" title='Started'></Column>
                </div>
                <div className='column-container col-4'>
                    <Column data={tasks} status="FINALIZADA" title='Ended'></Column>
                </div>
            </div>
        </div>
    )
}