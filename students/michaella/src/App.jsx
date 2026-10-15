import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import StudentCard from './StudentCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentCard 
        name = {"michaella"}
      />

      <StudentCard 
        name = {"tobias demetri the 3rd"}
      />
    </>
  )
}

export default App
