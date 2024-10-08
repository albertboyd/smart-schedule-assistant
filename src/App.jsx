import { useState } from 'react'
import EventList from './components/EventList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Smart Schedule Assistant</h1>
        <EventList />
      </div>
    </>
  )
}

export default App
