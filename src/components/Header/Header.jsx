import React from 'react'
import logo from '../Assets/Images/logo.png'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    {/* get data from api & display in html with JavaScript(Sirisha watching this video)  */}
      <nav class="navbar navbar-expand-lg shadow p-3 bg-white rounded">
  <div class="container-fluid">
        <img src={logo} alt="logo" style={{height:'70px'}}/>

    <button class="navbar-toggler bg-dark" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-dark" id="navbarCollapse">
      <ul class="navbar-nav ms-auto">

        <li class="nav-item me-4">
          <Link class="nav-link text-dark" to="/">Home</Link>
        </li>

        <li class="nav-item me-4">
          <Link class="nav-link text-dark" to='/shop'>Shop</Link>
        </li>

        <li class="nav-item me-4">
          <Link class="nav-link text-dark" to='/cart'>Cart</Link>
        </li>

        <li class="nav-item me-4">
          <Link class="nav-link text-dark" to='/userIcon'><i class="bi bi-person-fill"></i></Link>
        </li>

        <li class="nav-item me-4">
          <Link class="nav-link text-dark" to='/cartIcon'><i class="bi bi-cart-fill"></i>
          <span className='bg-info p-1 rounded-circle position-absolute translate-middle text-center' style={{height:'25px', width:'25px', lineHeight:'18px'}}></span>
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
