import { useState } from 'react'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header title={"give feedback"}/>
      <Btn handle={handleGood} title={"good"} />
      <Btn handle={handleNeutral} title={"neutral"} />
      <Btn handle={handleBad} title={"bad"} />
      <Header title={"statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = (props) => <h1>{props.title}</h1>

const Btn = ({handle, title}) => <button onClick={handle}>{title}</button>

const Statistics  = ({good, neutral, bad}) => {
  if(good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    );
  } else {
    return (
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {(good - bad) / (good + neutral + bad)}</p>
        <p>positive {good / (good + neutral + bad)}</p>
      </>
    );
  }
}

export default App