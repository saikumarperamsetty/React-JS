import React, { useEffect, useState } from 'react'
import { products } from '../Images/products'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/productAction/ProductAction'

//for card4
const Card4 = () => {

    const dispatch = useDispatch();

    const [bestSales, SetBestSales] = useState([]);

    useEffect(()=>{
        bestSalesProducts();
    },[])

    let bestSalesProducts = () =>{
        let sale = products.filter((best)=>{
                    return best.category === 'sofa';
        })
        // console.log(sale);
        SetBestSales(sale);
    }

    let buttonHandler = () => {
        toast.success("Item Added Successfully!")
      }

  return (
    //for Best Sales
    <div className="container mt-4 mb-4" style={{backgroundColor:'#f6f9fc'}}>
    <h2 className='text-center p-4'>Best Sales</h2>

    <div className="row g-2 d-flex justify-content-center">
                {
                    bestSales.map((sale)=>(

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <Link to={`product/${sale.id}`}>
                            <div className='card-img-top d-flex justify-content-center'>
                                <img src={sale.imgUrl} class="card-img-top w-75" alt={sale.id} />
                            </div>
                        </Link>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>{sale.productName}</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i className="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i className="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i className="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i className="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i className="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ {sale.price}</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '40px', height: '40px', paddingBottom: '4px',fontSize:'25px'}} onClick={()=>{dispatch(addToCart(sale)); buttonHandler()}}>+</button>
                    </div>
                    </div>
                </div>
               ))
            }

    </div>
    </div>
  )
}

export default Card4