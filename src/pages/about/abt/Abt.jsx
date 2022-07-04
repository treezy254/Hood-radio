import React from 'react'
import "./abt.css"

const Abt = (props) => {
  return (
    <div className='abt'>
      <img src={props.img} alt="" id="abt--img" />
      <div className='props'>
        <h2>{props.name}</h2>
        <p>{props.abt}</p>
      </div>
      
    </div>
  )
}

export default Abt