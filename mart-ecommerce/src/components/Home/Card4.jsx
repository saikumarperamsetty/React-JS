import React from 'react'
import greenSofa from '../../Assets/Images/double-sofa-01.png'
import doubleSofa from '../../Assets/Images/double-sofa-02.png'
import amazonSofa from '../../Assets/Images/double-sofa-03.png'
import flufySofa from '../../Assets/Images/single-sofa-01.jpg'
import velvetSofa from '../../Assets/Images/single-sofa-02.jpg'
import modernSofa from '../../Assets/Images/single-sofa-03.jpg'
import royalSofa from '../../Assets/Images/single-sofa-04.png'

const Card4 = () => {
  return (
    <div className="container mt-4 mb-4" style={{backgroundColor:'#f8f9fa'}}>
    <h2 className='text-center p-4'>Best Sales</h2>

    <div className="row g-2 d-flex justify-content-center">

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={greenSofa} class="card-img-top w-75" alt={greenSofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Stone and Beam<br/>Westview</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 193</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={doubleSofa} class="card-img-top w-75" alt={doubleSofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Rivet Bigelow Modern</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 253</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={amazonSofa} class="card-img-top w-75" alt={amazonSofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Amazon Brand Modern<br/>Sofa</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 799</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={doubleSofa} class="card-img-top w-75" alt={doubleSofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Rivet Biglow Modern</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 253</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={royalSofa} class="card-img-top w-75" alt={royalSofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Fluffy Sheep Sofa</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 163</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={velvetSofa} class="card-img-top w-75" alt={velvetSofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Faux Velvet Sofa</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 163</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={flufySofa} class="card-img-top w-75" alt={flufySofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Fluffy Sheep Sofa</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 163</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={modernSofa} class="card-img-top w-75" alt={modernSofa} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Modern Arm Sofa</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 173</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>
    </div>
    </div>
  )
}

export default Card4