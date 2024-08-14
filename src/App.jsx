import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wellcome from './Components/Wellcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Wellcome/>
    </>
  )
}

export default App
