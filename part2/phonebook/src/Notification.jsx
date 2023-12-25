import React from 'react'
import './App.css'

const Notification = ({ message, isMessagePositive }) => {
  if (message === null) {
    return null
  }

  {isMessagePositive ? <div className='notification msg-positive'>{message}</div> : <div className='notification msg-negative'>{message}</div>}

}

export default Notification
