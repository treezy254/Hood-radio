import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>

        <div className='nav--title'>
            <h1><a href="/">The BOYZ CLUB</a></h1>
        </div>

        <div  className='nav--ul'>
            <ul>
                <li className='nav--li'>
                    <a href="/">HOME</a>
                </li>
                <li className='nav--li'>
                    <a href="/podcasts">PODCASTS</a>
                </li>
                <li className='nav--li'>
                    <a href="/about">About</a> 
                </li>
                <li className='nav--li'> 
                    <a href='/contact'>CONTACT</a> 
                </li>
            </ul>
        </div>
        <div className='nav--img'>
            <span><img src="" alt ="" />
                <a href="/logIn">Log In</a>
            </span>
        </div>
    </div>
  )
}

export default Navbar