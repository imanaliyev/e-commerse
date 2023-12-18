import React, { useContext } from 'react'
import "./basket.scss"
import { BasketContext } from '../../Context/BasketContext'
import { Link } from 'react-router-dom'
function Basket() {

    const {basket,increase,decrease,totalPrice} = useContext(BasketContext)
    
  return (
    <>
    <section id='basket'>
        <p>Home / <b>Cart</b></p>
    

        <div className="basket">
            <div className="basket-header">
                <ul>
                    <li>Product</li>
                    <li>Price</li>
                    <li>Quantity</li>
                    <li>Subtotal</li>
                </ul>
            </div>

            {basket.map(x=>(
                <ul className='basket-item' key={x.id}>
                    <div className='basket-photo'>
                        <img src={x.image} alt="" />
                        {x.name}
                    </div>
                    
                    <li className='price'>  {x.price} $ </li>
                    <li className='count'><button className='decrease' onClick={()=>decrease(x)}>-</button>{x.count}<button className='increase' onClick={()=>increase(x)}>+</button></li>
                    <li className='subtotal'>{x.price * x.count} $</li>
                </ul>

            ))}
           
            

        </div>
        <div className="update">
            <Link to={'/'}>  <div>
                Return To Shop
            </div></Link>
          
            <div>
                Update  Cart
            </div>
            
        </div>
        <div className="basket-bottom">
            <div className="cupon">
                <input type="text" placeholder='Coupon Code' />
                <button>Apply Coupon</button>

            </div>
            <div className="cart-total">
                <h2>Cart Total</h2>
                <div className="sub">
                <p>Subtotal :</p> {totalPrice} $
                </div>
                <div className="line"></div>
                <div className="sub">
                    <p>Shipping :</p> <p>Free</p>
                </div>
                <div className="line"></div>
                <div className="sub">
                    <p>Total :</p> {totalPrice} $

                </div>
                <button>
                Procees to checkout
                </button>
               

            </div>

        </div>

    </section>

    </>
  )
}

export default Basket