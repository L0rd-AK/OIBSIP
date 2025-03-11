import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './pages/Nvabar'
import Footer from './pages/Footer'
const App = () => {

  return (
   <>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </>
  )
}

export default App
