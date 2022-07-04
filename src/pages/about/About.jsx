import React from 'react'
import Abt from './abt/Abt'
import hosts from "./hosts"
import "./about.css"

const About = () => {
  const Drip = hosts.map(item => {
    return(
      <Abt 
        img = {item.img}
        name = {item.title}
        abt = {item.description}
      />
    )
  })

  return (
    <div className='about'>
      <div className='about--header'>
        <h1>The Full Story</h1>
        <h2>About</h2>
      </div>
      <section>
        {Drip}
      </section>
    </div>
  )
}

export default About