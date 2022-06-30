import React from 'react'

const Pod = (props) => {
  return (
    <div>
      <div className='img'><img src={props.img} alt={props.img}/></div>
      <div className='data'>
        <h1>{props.title}</h1>
        <p>{props.data}</p>
        <button>Listen</button>
      </div>
    </div>
  )
}

export default Pod