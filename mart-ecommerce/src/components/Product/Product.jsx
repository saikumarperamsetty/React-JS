import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../Images/products';

const Product = () => {

    let {id} = useParams();

    const [product, setProduct] = useState({});
    const [like, setAlsoLike] = useState([]);


    useEffect(()=>{
        getProduct()
    },[like]);

    let getProduct = ()=>{
        let getItem = products.find((item)=>{
                return item.id === id;
        })
        // console.log(getItem);
        setProduct(getItem);
    

    let mightLike = [];
    mightLike = products.filter((item)=>{
            return item.category === getItem.category
    })
    // console.log(getLike);
    setAlsoLike(mightLike);
 }

  return (

    //For Single Product info
    <div className='container'>
        <div className='row'>

          <div className='col-md-6 mt-2'>
            <img src={product.imgUrl} alt={product.id} className='img-fluid ' />
          </div>

          <div className='col-md-6 mt-2'>
            <h2 className='pt-3'>{product.productName}</h2>
            <div className='mt-3'>
              <i className="bi bi-star-fill" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <i className="bi bi-star-fill ms-1" style={{ color: '#ffcd4e' }}></i>
              <span className='ms-4'>{product.avgRating} ratings</span>
            </div>

            <div className='mt-3'>
              <h5 className='p-2'>$ {product.price} <span className='ms-4 text-muted'>category : {product.category}</span></h5>
              <p className='mt-3'>{product.shortDesc}</p>
            </div>

            <form className='mt-3'>
              <input type='text' className="form-control" style={{ width: '100px' }}/>
              <button className='btn px-2 py-2 mt-2' style={{ backgroundColor: '#0f3460', color: 'white' }}>Add to Cart</button>
            </form>

          </div>
        </div>

        <div className='row mt-3 mb-4'>
          <h6>Description <span className='ms-4 text-muted'>Reviews (1)</span></h6>
          <p>{product.description}</p>
        </div>

   </div>
  )
}

export default Product
