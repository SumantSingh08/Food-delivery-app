import { useState } from 'react'
import {ToastContainer} from 'react-toastify'
import './App.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-300 min-h-screen'>
        <Home />
      <ToastContainer/>
      
      </div>
    </>
  )
}

export default App
