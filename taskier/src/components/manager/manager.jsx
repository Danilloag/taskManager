import './manager.css';
import Column from '../column/Column';
import { useEffect, useContext } from 'react';
import tasksContext from '../../tasksContext';

export default function Manager() {
  const { tasks, loadTasks } = useContext(tasksContext);

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="master-div">
      <div className="search-div grid">
        <input
          className="home-search col-12"
          type="search"
          placeholder="Search a title..."
        />
      </div>
      <div className="columns-div grid">
        <div className="column-container col-4">
          <Column data={tasks} status="LISTADA" title="Listed" />
        </div>
        <div className="column-container col-4">
          <Column data={tasks} status="INICIADA" title="Started" />
        </div>
        <div className="column-container col-4">
          <Column data={tasks} status="FINALIZADA" title="Ended" />
        </div>
      </div>
    </div>
  );
}
