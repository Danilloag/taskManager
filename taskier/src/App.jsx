import './App.css'
import './grid.css'
import LogoMach1 from './assets/images/mach-1-logo.png'
import Manager from './components/manager/manager'
import Menu from './components/menu/menu'
import TaskForm from './components/taskForm/taskForm'

function App() {

  return (
    <div className='background'>
        <div className='logo-div col-12'>
          <img className='logo-mach' src={LogoMach1} alt="LogoMach1" />
        </div>
        <div className='bread-div col-12'>
          <p className='breadcrumbs'>BREADCRUMBS</p>
        </div>

        {/* <Manager /> */}
        <TaskForm></TaskForm>
    </div>
  )
}

export default App
