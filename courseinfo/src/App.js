const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  );
}

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  return (
    props.parts.map(e => <Part key={e.name} name={e.name} exercises={e.exercises} />)
  );
}

const Part = (props) => <p> {props.name} {props.exercises} </p>

const Total = (props) => <p> Number of exercises {props.exercises.reduce((p, n) => p + n.exercises, 0)} </p>

export default App;