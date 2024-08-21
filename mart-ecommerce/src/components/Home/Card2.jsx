import React, { useState } from 'react'
import { discoutProducts } from '../Images/products'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {addToCart} from '../../redux/productAction/ProductAction'

//for card2
const Card2 = () => {

    const dispatch = useDispatch();

    // const [hoverHeartAndButton, sethoverHeartAndButton] = useState('block');
    // let temp = 'block'
    
    // let hov = (id)=>{
    // if(temp==='block'){
    //     temp = 'none'
    //     sethoverHeartAndButton('none')
    //     }else{
    //         sethoverHeartAndButton('block')
    //             temp = 'block'
    //     }

    let buttonHandler = () => {
      toast.success("Added Successfully!")
    }

  return (
    //for big discount
    <>
    <div className="container mt-4 mb-4" style={{backgroundColor:'#f6f9fc'}}>
        <h2 className='text-center p-4'>Big Discount</h2>

        <div className="row g-2">
            
            {
                discoutProducts.map((disc)=>(

                    <div className="col-md-4">
                        <div className="card" style={{height:'100%'}} onMouseEnter={()=>hov(disc.id)}>

                        <div className='d-flex justify-content-between m-2'>
                          <span className='p-2' style={{borderRadius:'5px',backgroundColor:'#0f3460',color:'white'}}>{disc.discount}% Off</span>
                        <i class="bi bi-heart"  style={{color:'red',display:temp}} ></i>
                        </div>

                        <div className="card-body">
                        <Link to={`product/${disc.id}`}>
                            <div className='card-img-top d-flex justify-content-center'>
                                <img src={disc.imgUrl} class="card-img-top w-75" alt={disc.id} />
                            </div>
                        </Link>
                        </div>

                        <div className="card-title">
                        <h6 className='card-title m-2'>{disc.productName}</h6>
                        <span className='d-flex mt-4 mb-4 m-2'>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        </span>
                        </div>

                        <div className='d-flex justify-content-between align-items-center m-2'>
                            <h6>${disc.price}</h6>
                            <button  style={{ border: '0px', borderRadius: '50%', width: '40px', height: '40px', paddingBottom: '10px', fontSize:'25px'}} onClick={()=>{dispatch(addToCart(disc)); buttonHandler()}}>+</button>
                        </div>
                        </div>
                    </div>  
                ))}
        </div>
    </div>
</>
  )
}

export default Card2
