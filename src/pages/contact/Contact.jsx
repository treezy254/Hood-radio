import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div className='mty'>

        </div>

        <div className='contact--cont'>
        <div className='message'>
          <p>
            Leave your message for The<br/> Boyz Club.<br/> and we'll get back to you<br/> when we are off the stage.
          </p>
        </div>

        <div className='cont--form'>
          <form>
            <input type="text" placeholder='Name' id="form--input" /><br/>
            <input type="text" placeholder="email" id="form--input"/><br/>
            <input type="text" placeholder='Phone'id="form--input"/><br/>
            <input type="text-field" placeholder="Type your message here..." id="form--field"/><br/>
            <button id='submit'>Submit</button><br/>
          </form>
        </div>

        </div>
         <hr/>
    </div>
  )
}

export default Contact