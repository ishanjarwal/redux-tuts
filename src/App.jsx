import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'
import './App.css'
import { useSelector } from 'react-redux'

const App = () => {

  const amount = useSelector(state => state.accounts.amount);
  const points = useSelector(state => state.bonus.points)
  return (
    <div>
      <h4>App</h4>
      <h3>Current Amount : {amount}</h3>
      <h3>Total Bonus : {points}</h3>

      <Account></Account>
      <Bonus></Bonus>
    </div>
  )
}

export default App
