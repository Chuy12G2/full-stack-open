import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, neutral, bad }) => {
  if ((good + bad + neutral) === 0) return <p>No feedback given</p>
  
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} />
          <StatisticLine text="positive" value={(good / (good + neutral + bad)) * 100} />
        </tbody>
      </table>
    </>
  )
}

export default Statistics
