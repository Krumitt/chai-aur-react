import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={() => {
        if (count < 20)
          setCount(count + 1);
      }}>Inc</button>
      <br />
      <button onClick={() => {
        if (count > 0) setCount(count - 1);
      }}>Dec</button>
    </>
  )
}

export default App
