import React from 'react'
import { SliderData } from '../Images/products'

//for carousel
const Carousel = () => {
  return (
    <div style={{backgroundColor:'#f6f9fc'}}>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner ms-2">

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
</div>
  )
}

export default Carousel
