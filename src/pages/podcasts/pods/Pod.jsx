import React from 'react'
import "./pod.css"

const Pod = (props) => {
  return (
    <div className='pod'>
      <div className='img'><img src={props.img} alt={props.img} id="img" /></div>
      <div className='data'>
        <h1>{props.title}</h1>
        <p>{props.data}</p>
        <button id="lst--btn">Listen</button>
      </div>
    </div>
  )
}

export default Pod