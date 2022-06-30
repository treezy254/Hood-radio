import React from 'react'

const Abt = (props) => {
  return (
    <div>
      <img src={props.img} alt=""/>
      <h2>{props.name}</h2>
      <p>{props.abt}</p>
    </div>
  )
}

export default Abt