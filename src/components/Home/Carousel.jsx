import React from 'react'
import sofaSlide from "../Assets/Images/hero-img.png";
import phone08 from "../Assets/Images/phone-08.png";
import wireless01 from "../Assets/Images/wireless-01.png";
import watchSlide from "../Assets/Images/watch-07.png";

const Carousel = () => {
  return (
    <>
     <div class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner ms-2 d-flex align-items-center" data-bs-interval='1000' style={{height:'75vh'}}>

    <div className="carousel-item active">
        <div className="row ms-4 md-4">
            <div className="col-md-1"></div>
            <div className="col-md-5 d-flex align-items-center">
                <div>
                    <h1 className=''>50% Off For Your First Shopping</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                    <button style={{border:'0px'}}>Visit Collections</button>
                </div>
            </div>
        
        <div className="col-md-1"></div>
            <div className="col-md-4 d-flex justify-content-center">
                <img src={sofaSlide} className='img-fluid' alt='sofa' />
            </div>
        <div className="col-md-1"></div>
    </div>
  </div>

<div className="carousel-item ">
        <div className="row ms-4 md-4">
            <div className="col-md-1"></div>
            <div className="col-md-5 d-flex align-items-center">
                <div>
                    <h1 className=''>50% Off For Your First Shopping</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                    <button style={{border:'0px'}}>Visit Collections</button>
                </div>
            </div>
        
        <div className="col-md-1"></div>
            <div className="col-md-4 d-flex justify-content-center">
                <img src={phone08} className='img-fluid' alt='phone' />
            </div>
        <div className="col-md-1"></div>
    </div>
  </div>

  <div className="carousel-item ">
        <div className="row ms-4 md-4">
            <div className="col-md-1"></div>
            <div className="col-md-5 d-flex align-items-center">
                <div>
                    <h1 className=''>50% Off For Your First Shopping</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                    <button style={{border:'0px'}}>Visit Collections</button>
                </div>
            </div>
        
        <div className="col-md-1"></div>
            <div className="col-md-4 d-flex justify-content-center">
                <img src={wireless01} className='img-fluid' alt='wireless' />
            </div>
        <div className="col-md-1"></div>
    </div>
  </div>

  <div className="carousel-item">
        <div className="row ms-4 md-4">
            <div className="col-md-1"></div>
            <div className="col-md-5 d-flex align-items-center">
                <div>
                    <h1 className=''>50% Off For Your First Shopping</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
                    <button style={{border:'0px'}}>Visit Collections</button>
                </div>
            </div>
        
        <div className="col-md-1"></div>
            <div className="col-md-4 d-flex justify-content-center">
                <img src={watchSlide} class='img-fluid' className='w-50' alt='watch' />
            </div>
        <div className="col-md-1"></div>
    </div>
  </div>

  </div>
    </div>
    </>
  )
}

export default Carousel
