import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import FreeBook from './Components/FreeBook'
import Home from './Home/Home'
import Course from './Components/Course'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'

function App() {
  return (
    <>

    <BrowserRouter>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  </>

  )
}

export default App