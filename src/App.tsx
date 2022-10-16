import { useState } from 'react'
import { Home } from './pages'
import './App.css'
import { useSelector } from 'react-redux'
import { AppStore } from './redux/store'

function App() {
const store = useSelector((state: AppStore) => state.user)
console.log(store)
  return (
    <div className="App">
     <Home/>
     <span>{JSON.stringify(store)}</span>
    </div>
  )
}

export default App
