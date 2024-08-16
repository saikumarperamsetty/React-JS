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
        // console.log(temp);
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
 
    </div>
</div>
  )
}

export default Card3