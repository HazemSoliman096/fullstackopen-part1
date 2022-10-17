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
      <Statistics  title={"good"} total={good} />
      <Statistics  title={"neutral"} total={neutral} />
      <Statistics  title={"bad"} total={bad} />
      <Statistics  title={"all"} total={good + neutral + bad} />
      <Statistics  title={"average"} total={(good - bad) / (good + neutral + bad)} />
      <Statistics  title={"positive"} total={(good / (good + neutral + bad)) + ' %'} />
    </div>
  )
}

const Header = (props) => <h1>{props.title}</h1>

const Btn = ({handle, title}) => <button onClick={handle}>{title}</button>

const Statistics  = ({title, total}) => <p>{title} {total}</p>

export default App