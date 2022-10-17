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
      <Stat title={"good"} total={good} />
      <Stat title={"neutral"} total={neutral} />
      <Stat title={"bad"} total={bad} />
    </div>
  )
}

const Header = (props) => <h1>{props.title}</h1>

const Btn = ({handle, title}) => <button onClick={handle}>{title}</button>

const Stat = ({title, total}) => <p>{title} {total}</p>

export default App