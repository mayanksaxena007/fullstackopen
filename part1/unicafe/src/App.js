import { useState } from 'react'
const Button = ({handleClick,text}) =><button onClick={handleClick}>{text}</button>
const Heading=({text})=><h1>{text}</h1>
const StatisticLine=({text,value})=><tbody><tr><td>{text}</td><td> {value}</td></tr></tbody>
const Statistics=({good,neutral,bad})=>{
  if(good===0 && neutral===0 && bad===0){
    return <p>No feedback given</p>
  }
  const total=good+neutral+bad
  const average=(good-bad)/total
  const positive=100*good/total
  return (
  <div>
    <table>
      <StatisticLine text="good" value={good}></StatisticLine>
      <StatisticLine text="neutral" value={neutral}></StatisticLine>
      <StatisticLine text="bad" value={bad}></StatisticLine>
      <StatisticLine text="all" value={total}></StatisticLine>
      <StatisticLine text="average" value={average}></StatisticLine>
      <StatisticLine text="positive" value={positive}></StatisticLine>
    </table>
  </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incrementGoodByOne=()=>setGood(good+1)
  const incrementBadByOne=()=>setBad(bad+1)
  const incrementNeutralByOne=()=>setNeutral(neutral+1)
  return (
    <div>
      <Heading text="give feedback"></Heading>
      <Button handleClick={incrementGoodByOne} text="good"></Button>
      <Button handleClick={incrementNeutralByOne} text="neutral"></Button>
      <Button handleClick={incrementBadByOne} text="bad"></Button>
      <Heading text="statistics"></Heading>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App