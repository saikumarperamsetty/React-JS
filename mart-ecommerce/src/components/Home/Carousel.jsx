import React from 'react'
import { SliderData } from '../Images/products'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide mt-2" data-bs-ride="carousel" >
      <div class="carousel-inner">

      {
      SliderData.map((item)=>(
        <div class="carousel-item active" data-bs-interval="3000" >
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-md-1'></div>
        <div className='col-md-4'>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <button style={{border:'0px'}}>Visit Collection</button>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5 d-flex justify-content-center align-items-center'>
          <img src={item.cover} class="d-block w-25" alt={item.id} />
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
     ))} 

    </div>
  </div>
  )
}

export default Carousel
