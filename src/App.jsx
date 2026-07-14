import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddPet from './components/AddPet'
import ViewPet from './components/ViewPet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddPet/>
     <ViewPet/>
    </>
  )
}

export default App
