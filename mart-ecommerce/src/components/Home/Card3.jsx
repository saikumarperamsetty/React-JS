import React, { useEffect, useState } from 'react'
import { products } from '../Images/products'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from '../../redux/productAction/ProductAction'

//for card3
const Card3 = () => {

    const dispatch = useDispatch();

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

    let buttonHandler = () => {
        toast.success("Added Successfully")
      }

  return (
    //for new arrivals
    <div className="container mt-4 mb-4" style={{backgroundColor:'white'}}>
    <h2 className='text-center p-4'>New Arrivals</h2>

    <div className="row g-2 d-flex justify-content-center">
            {
                arrivals.map((temp)=>(
                    <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <Link to={`product/${temp.id}`}>
                            <div className='card-img-top d-flex justify-content-center'>
                                <img src={temp.imgUrl} class="card-img-top w-75" alt={temp.id} />
                            </div>
                        </Link>
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
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }} onClick={()=>{dispatch(addToCart(temp)); buttonHandler()}}>+</button>
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