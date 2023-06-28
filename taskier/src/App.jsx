import './App.css'
import './grid.css'
// import Task from './components/task/task'
import LogoMach1 from './assets/images/mach-1-logo.png'

function App() {

  return (
    <div className='background grid'>
      <div className='logo-div col-12'>
        <img className='logo-mach' src={LogoMach1} alt="LogoMach1" />
      </div>
      <div className='bread-div col-12'>
        <p className='breadcrumbs'>BREADCRUMBS</p>
      </div>

      {/* master */}
      {/* manager --> busca, colunas, tasks*/}
      {/* include form */}
      {/* edit form */}
      {/* /master */}






      {/* <Task></Task> */}

    </div>
  )
}

export default App
