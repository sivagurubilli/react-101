import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from  "./card"


function App() {

  const mobileOs =["Android","Blackberry","iphone","Windows Phone"]
const mobileManufacturers = ["samsung","HTC","Micromax","Apple"]

  return (
    <div className="App">
      <Card title ="Mobile operating system" arr  = {mobileOs}/>
      <Card title= 'mobileManufacturers' arr = {mobileManufacturers}/>
      
    </div>
  )
}

export default App
