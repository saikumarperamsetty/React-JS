import React from 'react'

const Cart = () => {
  return (
   <div className="container">

    <div className="row mt-4 mb-4">
      
      <div className="col-md-7 bg-light" style={{height:'25vh'}}>
        No items added in cart
      </div>

      <div className="col-md-1"></div>

      <div className="col-md-4 bg-light">
        <h6 className='ms-2'>Cart Summary</h6>
          <hr/>
        <p className='ms-2'>Total price: </p>
        <h4 className='ms-2'>0</h4>
      </div>

    </div>
   </div>
  )
}

export default Cart
