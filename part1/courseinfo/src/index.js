import React from 'react'
import ReactDOM from 'react-dom'

const Header  = ({course}) =>{
  return <h1>{course}</h1>
}

const Content  = ({part,exercises}) =>{
  return <p>{part} {exercises}</p>
}

const Total   = ({exercisestotal}) =>{
  return <p>Number of exercises {exercisestotal}</p>
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
 /* const part = ['Fundamentals of React','Using props to pass data','State of a component']*/

  return (
    <div>
     <Header course={course} />
     <Content part= {part1} exercises= {exercises1}/>
     <Content part= {part2} exercises= {exercises2}/>
     <Content part= {part3} exercises= {exercises3}/>
     <Total exercisestotal= {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))