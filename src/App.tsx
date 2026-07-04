import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './components/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>
          Welcome to the application
        </p>
      </div>
      <h1>Jeannie's chingu</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SignIn />
        <p>
          Upcoming form component.
        </p>
      </div>
      <p className="read-the-docs">
        Thanks for visiting the site
      </p>
    </>
  )
}

export default App
