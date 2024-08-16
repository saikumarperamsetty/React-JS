import React, { useEffect, useState } from 'react'

import { products } from '../Images/products'

const Card3 = () => {

    const [arrivals, setArrivals] = useState([]);
    useEffect(()=>{
        getArrivals();
    },[]);

    let getArrivals = ()=>{
        let temp = products.filter((test)=>{
            return test.category === 'mobile' || test.category === 'wireless' ;
            
        })
        console.log(temp);
        setArrivals(temp);
    }

  return (
    <div className="container mt-4 mb-4" style={{backgroundColor:'white'}}>
    <h2 className='text-center p-4'>New Arrivals</h2>

    <div className="row g-2 d-flex justify-content-center">
            {
                arrivals.map((temp)=>(
                    <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={temp.imgUrl} class="card-img-top w-75" alt={temp.id} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>{temp.productName}</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ {temp.price}</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div> 
                ))
            }
                 


                {/* <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={iphone12max} class="card-img-top w-75" alt={iphone12max} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Apple iPhone 12 Pro</h6>
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
                            <img src={realme} class="card-img-top w-75" alt={realme} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Realme 6</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 599</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={onepluse} class="card-img-top w-75" alt={onepluse} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>One Plus Nord</h6>
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
                            <img src={iphone13pro} class="card-img-top w-75" alt={iphone13pro} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Apple iPhone 13 Pro</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 899</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={samsungS22} class="card-img-top w-75" alt={samsungS22} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Samsung Galaxy S22</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 699</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>
                

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={headphone1} class="card-img-top w-75" alt={headphone1} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Beat Studio Wireless</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 199</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={headphone2} class="card-img-top w-75" alt={headphone2} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Beat EP Headphones</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 199</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={headphone3} class="card-img-top w-75" alt={headphone3} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Black HeadPhones</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 169</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={headphone4} class="card-img-top w-75" alt={headphone4} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>Blutooth HeadPhones</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ 139</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                    </div>
                    </div>
                </div> */}
    </div>
</div>
  )
}

export default Card3