import React from 'react'

function Footer() {
  return (
    <div>
      <footer id='footer'>
        <div className="container">
          <div className="footer_up">
            <div className="exclusive">
              <h2>Exclusive</h2>
              <h4>Subscribe</h4>
              <p>Get 10% off your first order</p>
              <div className="input">
                <input type="text" placeholder='Enter your Message' />
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
            <div className="support">
              <h2>Support</h2>
              <h4>111 Bijoy sarani, Dhaka, Bangladesh.</h4>
              <p>iman.aliyev@gmail.com</p>
              <p>069-690-69-69</p>
            </div>
            <div className="account">
              <h2>Account</h2>
              <ul>
                <li>My Account </li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="quick_link">
              <h2>Quick Link</h2>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="download">
              <h2>Download App</h2>
              <p>Save $3 with App New User Only</p>
              <div className="images">
              <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="" />
              <img src="https://gnetradio.com/wp-content/uploads/2019/01/kisspng-iphone-google-play-app-store-apple-mobile-png-5acba0c95b4538.6032857715232944093739.png" alt="" />
              </div>
              <div className="icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>
          <p className='footer_down'>Copyright Rimel 2022. All right reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer