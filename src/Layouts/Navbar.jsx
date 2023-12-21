import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../Context/BasketContext'

function Navbar() {
    const {basket} = useContext(BasketContext)
    const openMenu=()=>{
        document.querySelector(".menu-nav").classList.toggle("open")
    }
  return (
    <>
    <header>

        <div className="upper-nav">
            <div className="content">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span>Shop Now</span></p>

                <p>English <i class="fa-solid fa-chevron-down"></i> </p>
            </div>

        </div>
        <nav>
            <div className="logo">
               <h1> Exculusive</h1>
            </div>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
                <Link to={"/about"}><li>About</li></Link>
                <li>Sign Up</li>
            </ul>
            <div className="right-nav">
                <div className="search">
                    <input type="text" placeholder='What are you lookun for?' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="basket-wishlist">
                <i class="fa-regular fa-heart"></i> 
                <Link to={"/cart"}><i class="fa-solid fa-cart-shopping"></i>{basket.length}</Link>
                
                </div>
            </div>

        </nav>
        <div className="nav2">
            <h1>Exclusive</h1>
            <div className="nav2-right">    
            <div className="menu">
                <button onClick={openMenu}>Menu <i class="fa-solid fa-bars-staggered"></i></button>
                <ul className='menu-nav'>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={'/contact'}><li>Contact</li></Link>
                <Link to={"/about"}><li>About</li></Link>
                <li>Sign Up</li>
                </ul>
                
            </div>
            <div className="icons">
            <Link to={"/cart"}><i class="fa-solid fa-cart-shopping"></i>{basket.length}</Link>
            <i class="fa-solid fa-heart"></i>
            </div>
           </div>
          
            

        </div>


    </header>
    
    </>
  )
}

export default Navbar