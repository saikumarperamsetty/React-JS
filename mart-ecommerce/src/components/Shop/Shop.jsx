import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../Images/products'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/productAction/ProductAction'
import cover from '../../Assets/Images/cover.jpg'

const Shop = () => {

  const [coverHeading,setCoverHeading] = useState('product')

  const dispatch = useDispatch();

  // for initial-items (by using filter) to show the page
  let onlySofaProducts = products.filter((items)=>{
    return items.category === 'sofa';
  })

  const [productCategories, setProductCategories] = useState(onlySofaProducts);

  // item search with dropdown
  let LinkButtonHandler = (category) => {
    let getItems = products.filter((item) => {
      return item.category === category;
    })
    setProductCategories(getItems)
    setCoverHeading(category)
  }

  // item search with search input
//   const handleChange = (str)=>{
//           let data = products.filter((items)=>{
//             return items.category === str;
// })
//     setProductCategories(data);
//   }

  const handelSubmit = (event) => {
    event.preventDefault();
    let getItems = products.filter((item) => {
      return item.category === event.target[0].value
    })
    if (getItems){
      setProductCategories(getItems)
      setCoverHeading(event.target[0].value)
    }
    else
      setProductCategories([])
  }

  let buttonHandler = () =>{
    toast.success('Product has been added to Cart!!');
  }

  return (
    <>
    <div class="position-relative">
      <img src={cover} alt='cover' style={{width:'100%',height:'25vh',filter:'brightness(40%)'}} />
      <h3 className="position-absolute top-50 start-50 translate-middle text-white" style={{ zIndex: 2}}>{coverHeading}</h3>
  </div>
    <div className='container mt-4 mb-4'>

    {/* For dropdown and search bar */}
      <div className='row mt-4 mb-4 '>

        <div className='col-md-4 mt-2'>
      <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#0f3460',color:'white'}}>
              filterd by Catagory
          </button>
          

      <ul class="dropdown-menu">
          <li><Link class="dropdown-item" onClick={()=>LinkButtonHandler('sofa')}>Sofa</Link></li>
          <li><Link class="dropdown-item" onClick={()=>LinkButtonHandler('chair')}>Chair</Link></li>
          <li><Link class="dropdown-item" onClick={()=>LinkButtonHandler('watch')}>Watch</Link></li>
          <li><Link class="dropdown-item" onClick={()=>LinkButtonHandler('mobile')}>Mobile</Link></li>
          <li><Link class="dropdown-item" onClick={()=>LinkButtonHandler('wireless')}>Wireless</Link></li>
      </ul>
      </div>
    </div>

      <div className="col-md-8 mt-2">
        <form className='d-flex' role='search' onSubmit={handelSubmit}>
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
                        <span className='d-flex mt-4 mb-4'>
                            <i class="bi bi-star-fill ms-2" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill ms-1" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill ms-1" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill ms-1" style={{color:'#ffcd4e'}}></i>
                            <i class="bi bi-star-fill ms-1" style={{color:'#ffcd4e'}}></i>
                        </span>
                        </div>

                        <div className='d-flex justify-content-between'>
                            <h6 className='ms-2'>${item.price}</h6>
                            <button className='me-2 mb-2' onClick={() => { dispatch(addToCart(item)); buttonHandler()}} 
                            style={{ border: '0px', borderRadius: '50%', width: '25px', height: '25px', paddingBottom: '4px' }}
                            >+</button>
                        </div>
                    </div>
                  </div>
            ))
            ) : (
            <div className='col bg-light text-center'>
            <h5>product not found!!</h5>
            </div>
          )}
        </div>
  </div>
  </>
  )
}

export default Shop
