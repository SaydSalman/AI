
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
