import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {discoutProducts, products} from '../Images/products'
import {toast} from 'react-toastify'


const Shop = () => {
  const [productCategories, setProductCategories] = useState(discoutProducts);

  const handleChange = (str)=>{
          let data = products.filter((items)=>{
            return items.category === str;
})
    setProductCategories(data);
  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    let data = products.filter((items) => {
      return items.category === event.target[0].value;
    })
    if(data)
      setProductCategories(data);
    else
    setProductCategories([]);
  }

  let buttonHandler = () =>{
    toast.success('Product has been added to Cart!!');
  }

  return (

    <div className='container mt-4 mb-4'>

      <div>
        <h3 className='text-center'>product</h3>
      </div>

    {/* For dropdown and search bar */}
      <div className='row mt-4 mb-4 '>

        <div className='col-md-4'>
      <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#0f3460',color:'white'}}>
              filterd by Catagory
          </button>
          

      <ul class="dropdown-menu">
          <li><Link class="dropdown-item" onClick={()=>handleChange('sofa')}>Sofa</Link></li>
          <li><Link class="dropdown-item" onClick={()=>handleChange('chair')}>Chair</Link></li>
          <li><Link class="dropdown-item" onClick={()=>handleChange('watch')}>Watch</Link></li>
          <li><Link class="dropdown-item" onClick={()=>handleChange('mobile')}>Mobile</Link></li>
          <li><Link class="dropdown-item" onClick={()=>handleChange('wireless')}>Wireless</Link></li>
      </ul>
      </div>
    </div>

      <div className="col-md-8">
        <form className='d-flex' role='search' onSubmit={handleSubmit}>
          <input className='form-control' type="search" placeholder="search" />
          <button style={{border:'0px'}} type='submit'><i className="bi bi-search p-2 ms-2"></i></button>
        </form>
      </div>

    </div>

    {/* for Every product */}
         <div className="row g-2 d-flex justify-content-center">
          {
            productCategories.length > 0 ? (
            productCategories.map((item)=>(

              <div className="col-md-4">
                        <div className="card" style={{height:'100%'}}>

                        <div className="card-body">
                          <Link to={`/product/${item.id}`}>
                            <div className='card-img-top d-flex justify-content-center'>
                                <img src={item.imgUrl} class="card-img-top w-75" alt={item.id} />
                            </div>
                          </Link>
                        </div>

                        <div className="card-title">
                        <h6 className='card-title m-2'>{item.productName}</h6>
                        <span className='d-flex mt-4 mb-4 m-2'>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star"></i>
                        </span>
                        </div>

                        <div className='d-flex justify-content-between m-2'>
                            <h6>${item.price}</h6>
                            <button onClick={buttonHandler} style={{ border: '0px', borderRadius: '50%', width: '30px', height: '30px', paddingBottom: '4px' }}>+</button>
                        </div>
                    </div>
                  </div>
            ))
            ) : (
            <div className='col bg-light text-center'>
            <h5>product not found!</h5>
            </div>
          )}
        </div>
  </div>
  )
}

export default Shop
