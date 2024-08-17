import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../Images/products';
import { toast } from 'react-toastify';

const Product = () => {

    let {id} = useParams();

    const [product, setProduct] = useState({});
    const [like, setLike] = useState([]);


    useEffect(()=>{
        getProduct()
    },[]);

    let getProduct = ()=>{
        let getItem = products.find((item)=>{
                return item.id === id;
        })
        // console.log(getItem);
        setProduct(getItem);
    

    // let mightLike = [];
    let mightLike = products.filter((item)=>{
            return item.category === getItem.category
    })
    // console.log(getLike);
    setLike(mightLike);
 }

    let handleSubmit = ((e)=>{
      e.preventDefault();
      toast.success('Item added to Cart');
    })

    let handleButton = ()=>{
      toast.success('Item added to Cart');
    }

  return (

    //For Single Product info
    <div className='container'>
        <div className='row'>

          <div className='col-md-6 mt-2'>
            <img src={product.imgUrl} alt={product.id} className='img-fluid' />
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
              <input type='text' className="form-control" style={{ width: '100px' }} onSubmit={handleSubmit}/>
              <button className='btn px-2 py-2 mt-2' style={{ backgroundColor: '#0f3460', color: 'white' }}>Add to Cart</button>
            </form>

          </div>

        </div>

        <div className='row mt-3 mb-4'>
          <h6>Description <span className='ms-4 text-muted'>Reviews (1)</span></h6>
          <p>{product.description}</p>
        </div>

      {/* Youu might also like */}
        <h4 className='ms-0 mt-4 mb-4'>You might also like</h4>
    <div className="row g-2 d-flex justify-content-center">
              {
                    like.map((items)=>(

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={items.imgUrl} class="card-img-top w-75" alt={items.id} />
                        </div>
                    </div>

                    <div className="card-title">
                    <h6 className='card-title m-2'>{items.productName}</h6>
                    <span className='d-flex mt-4 mb-4 m-2'>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                        <i class="bi bi-star"></i>
                    </span>
                    </div>

                    <div className='d-flex justify-content-between m-2'>
                        <h6>$ {items.price}</h6>
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }} onClick={handleButton}>+</button>
                    </div>
                    </div>
                </div>
               ))
            }

        </div>

   </div>
  )
}

export default Product
