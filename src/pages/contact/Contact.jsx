import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='message'>
          <p>
            Leave your message for the boyz club, and we'll get back to you when we are off the stage.
          </p>
        </div>
        <div>
          <form>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder="email" />
            <input type="text" placeholder='Phone' />
            <input type="text-field" placeholder="Type your message here..."/>
            <button>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact