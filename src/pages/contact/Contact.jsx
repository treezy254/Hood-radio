import React from 'react'
import { useState } from 'react'
import "./contact.css"



const Contact = () => {
  const [FormData, setFormData] = useState(
    {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  )

 
  
  
  function handleChange(event) {
    //add functionality
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    console.log(FormData)
  }

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
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder='Name' 
              onChange={handleChange}
              name="name"
              value={FormData.name}
              id="form--input" />
            <br/>
            <input 
              type="text" 
              placeholder="email" 
              onChange={handleChange}
              name="email"
              value={FormData.email}
              id="form--input"/>
            <br/>
            <input 
              type="text" 
              placeholder='Phone'
              onChange={handleChange}
              name="phone"
              value={FormData.phone}
              id="form--input"/>
            <br/>
            <textarea
              type="text-field" 
              placeholder="Type your message here..." 
              onChange={handleChange}
              name="message"
              value={FormData.message}
              id="form--field"/>
            <br/>
            <button id='submit'>Submit</button><br/>
          </form>
        </div>

        </div>
         <hr/>
    </div>
  )
}

export default Contact