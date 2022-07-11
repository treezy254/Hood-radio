import React from 'react'
import Pod from './pods/Pod'
import poder from "./poder"
import "./podcast.css"

const Podcasts = () => {
  const Great = poder.map(item => {
    return(
      <Pod 
        img = {item.img}
        title= {item.title}
        data={item.data}
        audio={item.sound}
      />
    )
  })

  return (
    <div className='podcast'>
      <div className='header'>
        <h1>PODCASTS</h1>
      </div>
      <section>
      {Great}
      </section>
    </div>
  )
}

export default Podcasts