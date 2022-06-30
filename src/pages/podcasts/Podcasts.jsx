import React from 'react'
import Pod from './pods/Pod'
import poder from "./poder"

const Podcasts = () => {
  const Great = poder.map(item => {
    return(
      <Pod 
        img = {item.img}
        title= {item.title}
        data={item.data}
      />
    )
  })

  return (
    <div>
      <div className='header'>
        <h1>PODCAST</h1>
      </div>
      <section>
      {Great}
      </section>
    </div>
  )
}

export default Podcasts