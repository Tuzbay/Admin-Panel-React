import React from 'react'
import CustomerReview from './CustomerReview'
import "./RightSide.css"
import Updates from "./Updates"

function RightSide() {
  return (
    <div className='rightside'>
        <div>
            <h3>Updates</h3>
            <Updates />
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default RightSide