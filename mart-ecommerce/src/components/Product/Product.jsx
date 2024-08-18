import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../Images/products';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/productAction/ProductAction'
import cover from '../../Assets/Images/cover.jpg'

const Product = () => {

    let {id} = useParams();

    const dispatch = useDispatch();

    const [product, setProduct] = useState({});
    const [like, setLike] = useState([]);
    const [review, setReview] = useState([]);
    const [coverHeading, setCoverHeading] = useState('productName');

    useEffect(()=>{
        getProduct()
    }, id);

    let getProduct = ()=>{
        let getItem = products.find((item)=>{
                return item.id === id;
        })
        // console.log(getItem);
        setProduct(getItem);
        setReview(getItem.reviews);
        setCoverHeading(getItem.productName);

    let mightLike = products.filter((item)=>{
            return item.category === getItem.category;
    })
    // console.log(getLike);
    setLike(mightLike);
 }

    let handleSubmit = (e)=>{
      e.preventDefault();
      toast.success('Item added to Cart!');
    }

    let buttonHandler = () => {
      toast.success("Item added to Cart!");
    }

  return (
    <>
    {/*Cover Photo */}
      <div class="position-relative">
        <img src={cover} alt='cover' style={{ width: '100%', height: '25vh', filter: 'brightness(40%)' }} />
        <h3 className="position-absolute top-50 start-50 translate-middle text-white" style={{ zIndex: 2 }}>{coverHeading}</h3>
      </div>

    <div className='container'>

    {/* For Single Product info */}
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

            <form className='mt-3' onSubmit={handleSubmit}>
              <input type='text' className="form-control" style={{ width: '100px' }}/>
              <button className='btn px-2 py-2 mt-2' style={{ backgroundColor: '#0f3460', color: 'white' }} onClick={() => { dispatch(addToCart(product)) }}>Add to Cart</button>
            </form>
          </div>
        </div>

        <div className='row mt-3 mb-4'>
          <h6>Description 
          <Link className='text-decoration-none' data-bs-toggle="collapse" data-bs-target="#Example">
            <span className='ms-4 text-muted' > Reviews ({review.length})</span>
          </Link>
          </h6>
        <div class="collapse" id="Example">
            {
              review.map((index)=>(
                <div class='mt-2 mb-3'>
                  <p>Jhon Doe
                    <br />
                    <span className='text-warning'>{index.rating} (rating)</span>
                    <br />
                    {index.text}</p>
                </div>
              ))
            }
        </div>
          <p>{product.description}</p>
        </div>

      {/* You might also like */}
        <h3 className='ms-0 mt-4 mb-4'>You might also like</h3>
          <div className="row g-2 d-flex justify-content-center">
              {
                    like.map((items)=>(

                <div className="col-md-4">
                    <div className="card" style={{height:'100%'}}>

                    <div className="card-body">
                    <Link to={`/product/${items.id}`}>
                        <div className='card-img-top d-flex justify-content-center'>
                            <img src={items.imgUrl} class="card-img-top w-75" alt={items.id} />
                        </div>
                    </Link>
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
                        <button  style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }} onClick={() => { dispatch(addToCart(items)); buttonHandler() }}>+</button>
                    </div>
                    </div>
                </div>
               ))
            }

        </div>

   </div>
   </>
  )
}

export default Product
