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
      
      <Header title={'give feedback'}/>
      <Btn handle={handleGood} title={'good'} />
      <Btn handle={handleNeutral} title={'neutral'} />
      <Btn handle={handleBad} title={'bad'} />
      <Header title={'statistics'}/>
      { good + neutral + bad !== 0 &&
        <table>
        <Statistics title={'good'} total={good} />
        <Statistics title={'neutral'} total={neutral} />
        <Statistics title={'bad'} total={bad} />
        <Statistics title={'total'} total={good + bad + neutral} />
        <Statistics title={'average'} total={(good + bad) / (good + bad + neutral)} />
        <Statistics title={'positive'} total={good / (good + bad + neutral) + '%'} />
      </table>
} {good + neutral + bad === 0 && <p>no feedback given</p>}
    </div>
  )
}

const Header = (props) => <h1>{props.title}</h1>

const Btn = ({handle, title}) => <button onClick={handle}>{title}</button>

const Statistics  = ({title, total}) => <tr><td>{title} {total}</td></tr>

export default App