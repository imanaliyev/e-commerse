import React from 'react'

function Navbar() {
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
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
            <div className="right-nav">
                <div className="search">
                    <input type="text" placeholder='What are you lookun for?' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="basket-wishlist">
                <i class="fa-regular fa-heart"></i> 
                <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>

        </nav>


    </header>
    
    </>
  )
}

export default Navbar