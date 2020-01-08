import React from 'react'

const ChildComponent = (props) => {
  let mappedList = props.movies.map((movie, index) => {
    return <h1 key ={index}>{movie}</h1>
  })
  return(
    <div>
      <div>
        <h1>{props.name}</h1>
        <h1>{props.car.make}</h1>
        <h1>{props.car.model}</h1>
      </div>
      <div>
        <div>{mappedList}</div>
      </div>
    </div>
  )
}

export default ChildComponent