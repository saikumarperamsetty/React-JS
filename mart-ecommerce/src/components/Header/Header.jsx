import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {

// for Item increasing cartIcon Notification
  const cart_data = useSelector((state) => state.productData.cartData);
    let cartLength = cart_data.length

  return (
    // Header
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light shadow p-3 bg-white rounded sticky-top">

        <div className="container-fluid">

            <img src={logo} alt="logo img" style={{height:'70px'}}/>

          <button className="navbar-toggler bg-dark" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item me-4">
                <Link className="nav-link text-dark" to="/">Home</Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link text-dark" to="/shop">Shop</Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link text-dark" to="/cart">Cart</Link>
              </li>
              
              <li className="nav-item me-4">
                <Link className="nav-link text-dark" to="/userIcon"><i class="bi bi-person-fill"></i></Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link text-dark" to="/cartIcon">
                <i className="bi bi-cart-fill"></i>
                <span className="bg-info p-1 rounded-circle position-absolute translate-middle text-center" style={{ width: '25px', height: '25px', lineHeight: '18px' }}>{cartLength}</span>
              </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      </>
  )
}

export default Header;
