import './App.css'
import './grid.css'
import LogoMach1 from './assets/images/mach-1-logo.png'
import Manager from './components/manager/manager'
import Menu from './components/menu/menu'
import TaskForm from './components/taskForm/taskForm'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import AppRoutes from './components/routes/AppRoutes'

function App() {

  return (
      <div className='background'>
        <Link to="/">
          <div className='logo-div col-12'>
            <img className='logo-mach' src={LogoMach1} alt="LogoMach1" />
          </div>
        </Link>
        <div className='bread-div col-12'>
          <p className='breadcrumbs'>BREADCRUMBS</p>
        </div>

        {/* <Manager /> */}
        {/* <TaskForm></TaskForm> */}
        <AppRoutes/>
      </div >
  )
}

export default App
