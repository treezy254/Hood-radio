import React from 'react'
import "./pod.css"
// import {Howl, Howler} from 'howler'

const Pod = (props) => {
  return (
    <div className='pod'>
      <div className='img'><img src={props.img} alt={props.img} id="img" /></div>
      <div className='data'>
        <h1>{props.title}</h1>
        <p>{props.data}</p>
        <audio controls><source src={props.audio} type="audio/mp3" /></audio>

        <button id="lst--btn">Listen</button>
      </div>
    </div>
  )
}

export default Pod