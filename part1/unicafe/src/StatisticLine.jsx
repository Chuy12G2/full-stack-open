import React from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value.toFixed(2)}</td>
    </tr>
  )
}

export default StatisticLine
