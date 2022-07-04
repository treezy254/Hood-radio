import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>

        <div className='nav--title'>
            <h1>The BOYZ CLUB</h1>
        </div>

        <div  className='nav--ul'>
            <ul>
                <li className='nav--li'>HOME</li>
                <li className='nav--li'>PODCASTS</li>
                <li className='nav--li'>About</li>
                <li className='nav--li'>CONTACT</li>
            </ul>
        </div>
        <div className='nav--img'>
            <span><img src="" alt ="" />Log In</span>
        </div>
    </div>
  )
}

export default Navbar