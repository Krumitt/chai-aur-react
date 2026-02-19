import { useState } from 'react'
import Buttons from './components/Buttons'

function App() {
  const [time, setTime] = useState(0)

  return (
    <div className='bg-cyan-800 h-screen flex flex-col gap-5 items-center justify-center'>
      <h1 className='text-5xl'>Stopwatch</h1>
      <span className='text-3xl font-bold'>Time: {time}</span>
      <Buttons setTime={setTime} />
    </div>
  )
}

export default App
