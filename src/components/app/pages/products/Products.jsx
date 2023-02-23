import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 

import { addToCart } from '../../../../store/cartSlice';
import { fetchProducts } from '../../../../store/productSlice';

const Products = () => {

    const products = useSelector(store => store.products.products); 

    const dispatch = useDispatch(); 
   
    useEffect(() => { 
      dispatch(fetchProducts()); 
    }, []); 
   
    if (products.length === 0)  { 
      return <div class="text-center">
      <div style={{ marginTop: "100px"}} class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    }; 

  return (
    <div className='d-flex flex-wrap gap-2' > 
    {products.map (el => ( 
    <div key={el.id} className="card" style={{width: "180px"}}> 
      <img src={el.image} className="card-img-top" alt="..."/> 
        <div className="card-body"> 
          <h5 className="card-title">{el.title}</h5> 
          <p className='card-text'> 
           {el.description.slice(0, 50) + " ..."} 
          </p> 
          <h6>{el.price} $</h6> 
               <a href="#" className="btn btn-primary" 
               onClick={() => {
                   dispatch(addToCart(el))
               }}>
                   + add to cart
                   </a> 
         </div> 
     </div> 
         ))};  
       </div> 
  );
};

export default Products;