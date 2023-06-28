import './App.css'
import './grid.css'
// import Task from './components/task/task'
import LogoMach1 from './assets/images/mach-1-logo.png'
import Column from './components/column/column'

function App() {

  return (
    <div className='background'>
        <div className='logo-div col-12'>
          <img className='logo-mach' src={LogoMach1} alt="LogoMach1" />
        </div>
        <div className='bread-div col-12'>
          <p className='breadcrumbs'>BREADCRUMBS</p>
        </div>
     
     
        <div className='master-div grid'>
          <div className='column-container col-4'>
            <Column></Column>
          </div>
          <div className='column-container col-4'>
            <Column></Column>
          </div>
          <div className='column-container col-4'>
            <Column></Column>
          </div>
        </div>

    </div>
  )
}

export default App
