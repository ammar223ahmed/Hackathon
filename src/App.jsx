import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './home/home'
import Header from './components/header'
import Footer from './components/footer'
import About from './components/about'
import LoanDetailPage from './home/loandetailpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/loandetailpage' element={<LoanDetailPage/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
