import React from 'react'
import { discoutProducts } from '../Images/products'

const Card2 = () => {
  return (
    <div className="container mt-4 mb-4" style={{backgroundColor:'#f8f9fa'}}>
        <h2 className='text-center p-5'>Big Discount</h2>
        <div className="row g-2">
            {
                discoutProducts.map((disc)=>(
                    <div className="col-md-4">
                        <div className="card" style={{height:'100%'}}>
                        <div className='d-flex justify-content-between m-2'>
                          <span className='p-2' style={{borderRadius:'5px',backgroundColor:'#0f3460',color:'white'}}>{disc.discount}% Off</span>
                        <i class="bi bi-heart-fill"></i>
                        </div>
                        <div className="card-body">
                            <div className='card-img-top d-flex justify-content-center'>
                                <img src={disc.imgUrl} class="card-img-top w-75" alt={disc.id} />
                            </div>
                        </div>

                        <div className="card-title">
                        <h6 className='card-title m-2'>{disc.productName}</h6>
                        <span className='d-flex mt-4 mb-4 m-2'>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star"></i>
                        </span>
                        </div>
                        
                        <div className='d-flex justify-content-between m-2'>
                            <h6>${disc.price}</h6>
                            <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                        </div>
                        </div>
                    </div>  
                ))}
        </div>
    </div>

  )
}

export default Card2
