import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'
import './App.css'

const App = () => {
  return (
    <div>
      <h4>App</h4>
      <h3>Current Amount : </h3>
      <h3>Total Bonus : </h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  )
}

export default App
