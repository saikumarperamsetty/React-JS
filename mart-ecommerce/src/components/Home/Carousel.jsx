import React from 'react'
import { SliderData } from '../Images/products'

const Carousel = () => {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide mt-2" data-bs-ride="carousel" style={{backgroundColor:'#f8f9fa'}}>
      <div class="carousel-inner">

      {/* {
      SliderData.map((item)=>(
        <div class="carousel-item active" data-bs-interval="3000" >
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-md-1'></div>
        <div className='col-md-4'>
          <h1>{item.title}</h1>
          <p className='text-secondary'>{item.desc}</p>
          <button style={{border:'0px',borderRadius:'5px'}}>Visit Collection</button>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5 d-flex justify-content-center align-items-center'>
          <img src={item.cover} class="d-block w-25" alt={item.id} />
        </div>
        <div className='col-md-1'></div>
      </div>
    </div>
     ))}  */}


      <div class="carousel-item active" data-bs-interval="3000" >
            <div className='row d-flex align-items-center' style={{height:'100vh'}}>
              <div className='col-md-1'></div>

              <div className='col-md-5'>
                <h1>{SliderData[0].title}</h1>
                <p className='text-secondary'>{SliderData[0].desc}</p>
                <button style={{border:'0px',borderRadius:'5px'}}>Visit Collection</button>
              </div>

              <div className='col-md-1'></div>

              <div className='col-md-4 d-flex justify-content-center'>
                <img src={SliderData[0].cover} class="d-block img-fluid" alt={SliderData[0].id} />
              </div>

              <div className='col-md-1'></div>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="3000" >
            <div className='row d-flex align-items-center' style={{height:'100vh'}}>
              <div className='col-md-1'></div>

              <div className='col-md-5'>
                <h1>{SliderData[1].title}</h1>
                <p className='text-secondary'>{SliderData[1].desc}</p>
                <button style={{border:'0px',borderRadius:'5px'}}>Visit Collection</button>
              </div>
              
              <div className='col-md-1'></div>

              <div className='col-md-4 d-flex justify-content-center'>
                <img src={SliderData[1].cover} class="d-block img-fluid" alt={SliderData[1].id} />
              </div>

              <div className='col-md-1'></div>
            </div>
          </div>


          <div class="carousel-item" data-bs-interval="3000" >
            <div className='row d-flex align-items-center' style={{height:'100vh'}}>
              <div className='col-md-1'></div>

              <div className='col-md-5'>
                <h1>{SliderData[2].title}</h1>
                <p className='text-secondary'>{SliderData[2].desc}</p>
                <button style={{border:'0px',borderRadius:'5px'}}>Visit Collection</button>
              </div>
              
              <div className='col-md-1'></div>

              <div className='col-md-4 d-flex justify-content-center'>
                <img src={SliderData[2].cover} class="d-block img-fluid" alt={SliderData[2].id} />
              </div>

              <div className='col-md-1'></div>
            </div>
          </div>


          <div class="carousel-item" data-bs-interval="3000" >
            <div className='row d-flex align-items-center' style={{height:'100vh'}}>
              <div className='col-md-1'></div>

              <div className='col-md-5'>
                <h1>{SliderData[3].title}</h1>
                <p className='text-secondary'>{SliderData[3].desc}</p>
                <button style={{border:'0px',borderRadius:'5px'}}>Visit Collection</button>
              </div>
              
              <div className='col-md-1'></div>

              <div className='col-md-4 d-flex justify-content-center'>
                <img src={SliderData[3].cover} class="d-block w-50" alt={SliderData[3].id} />
              </div>

              <div className='col-md-1'></div>
            </div>
          </div>

    </div>
  </div>
  )
}

export default Carousel
