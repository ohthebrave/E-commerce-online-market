import React from 'react'

function Display({product}) {

    console.log(product)
  return (
    <div className="shop">
      <div className="container row mx-auto mt-5">
          
            <div className='col-md-3 mt-4 polaroid' key={product.id}>
                <img
                  className='img-fluid mb-3 product-image'
                  key={product.id}
                  src={product.image_url} 
                  alt="original"/>
                  <div className="title">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                  </div>
                  <div>
                    
                  </div>
                  <div className='title'>
                    <button className='addToCartBttn' >Add to cart</button>
                  </div>
            </div>
     
      </div>
    </div>
  )
}

export default Display