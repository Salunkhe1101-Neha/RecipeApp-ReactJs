import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Search from './Components/Search'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import AboutMeals from './Components/AboutMeals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
const App = () => {
  const[search,setSearch]=useState('s')

  return (
    <div>
      <BrowserRouter>
        <Navbar setSearch={setSearch}/>
        <Routes>
          <Route path='/' element={<Home search={search} />}> </Route>
          <Route path='/about' element={<About />}> </Route>
          <Route path='/aboutMeals' element={<AboutMeals search={search} />}></Route>
          <Route path='/search' element={<Search />}> </Route>
          <Route path='/contact' element={<ContactUs/>}> </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App