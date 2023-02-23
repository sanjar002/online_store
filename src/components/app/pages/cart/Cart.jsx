import React from 'react';
import { useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartImg from '../../../../assets/cart_empty.png';

const Cart = () => {
    const cart = useSelector(store => store.cart.cart); 
    
    const allSum = Math.round(cart.reduce((total,item) =>{
        return total + item.price
    },0)); 

    const navigate = useNavigate()
  return (
    <>
    {cart?.length > 0 ? (
        <div style={{ marginTop: "35px"}}>
         <h4> <span><i class="bi bi-cart3"></i></span> Basket</h4>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>IMG</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>
                    {cart.map( el => (
                        <tr>
                           <td>
                            <img width={50} src={el.image} alt="" />
                           </td>

                           <td>
                            <b>{el.title}</b>
                           </td>

                           <td>
                            <b>{el.price} $</b>
                           </td>
                           <td className="btn btn-outline-danger"><i class="bi bi-trash3-fill"></i></td>
                           </tr>
                    ))};
            </tbody>
        </table>
        <div className='d-flex justify-content-between'>
        <p>Total product: {cart.length} pieces.</p>
        <div>
        <p>Order amount: <b style={{color: "red", marginLeft: "5px"}}>{JSON.stringify(allSum)} $</b></p>
            
        <button 
        className='btn btn-dark'
        onClick={() => {
            navigate(-1)
        }} 
        style={{
            padding: "5px 40px",
            borderRadius: "30px",
            }}>
                Pay Now
        </button>
        </div>
        </div>
        </div>
    )  :(

    <div  className='text-center'>
        <h1 style={{ paddingTop: "50px"}}>The basket is empty 👀</h1>
        <p>Most likely, you have not chosen anything.
        To order, go to the main page.</p>
        <img src={CartImg} alt="" />
        <br />
        <button 
        className='btn btn-dark'
        onClick={() => {
            navigate(-1)
        }} 
        style={{
            padding: "5px 40px",
            borderRadius: "30px",
            }}>
                Go Back
        </button>
            </div>
            )}
            </>
        );
        };

export default Cart;