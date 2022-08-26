import React from 'react'
import Cards from './Cards'
import "./Maindash.css"
import Table from "./Table"

function Maindash() {
  return (
    <div className='maindash'>
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default Maindash