import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {

// for Item increasing cartIcon Notification
  const cart_data = useSelector((state) => state.productData.cartData);
    let singleItem = cart_data.filter((value, index) => cart_data.indexOf(value) === index)
    let cartLength = singleItem.length

  return (
    // Header
    <div className='sticky-top'>

      <nav class="navbar navbar-expand-lg navbar-dark bg-light shadow p-3 mb-5 bg-white rounded">
        <div class="container-fluid">

          <Link class="navbar-brand ms-4" to="/">
            <img src={logo} alt="logo" style={{height:'50px'}}/>
          </Link>

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ms-auto">

              <li class="nav-item me-4">
                <Link class="nav-link text-dark" to="/">Home</Link>
              </li>

              <li class="nav-item me-4">
                <Link class="nav-link text-dark" to="/shop">Shop</Link>
              </li>

              <li class="nav-item me-4">
                <Link class="nav-link text-dark" to="/cart">Cart</Link>
              </li>
              
              <li class="nav-item me-4">
                <Link class="nav-link text-dark" to="/userIcon"><i class="bi bi-person-fill"></i></Link>
              </li>

              <li class="nav-item me-4">
                <Link class="nav-link text-dark" to="/cartIcon"><i class="bi bi-cart-fill"></i>
                <span className="bg-info p-1 rounded-circle position-absolute translate-middle text-center" style={{ width: '25px', height: '25px', lineHeight: '18px' }}>{cartLength}</span>
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Header;
