import './App.css'
import './grid.css'
import LogoMach1 from './assets/images/mach-1-logo.png'
import { Link } from 'react-router-dom'
import AppRoutes from './components/routes/AppRoutes'
import Breadcrumb from './components/breadCrumb/breadcrumb'

function App() {

  return (
    <div className='background'>
      <Link to="/Manager">
        <div className='logo-div col-12'>
          <img className='logo-mach' src={LogoMach1} alt="LogoMach1" />
        </div>
      </Link>
      <div className='bread-div col-12'>
        <Breadcrumb />
      </div>
      <AppRoutes />
    </div >
  )
}

export default App
