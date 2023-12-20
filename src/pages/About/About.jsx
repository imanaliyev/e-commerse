import React from 'react'
import "./about.scss"
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
    <section id='about'>
        <Link to={"/"}><p className='head'>Home / <b>About</b></p></Link>
        
        <div className="our-story">
        <div className="our-txt">
            <h1>Our Story</h1>
            <p>Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1704067200&Signature=n-oha2AnFe24Xlahn9mfXnUsQ7NJ~Rxhd6LyYnB~5E~WaplxN6KvsDmjT-NNu~aWyLW--KyycE5B9h0jvfIOCVrxLIu5gkIPQYx2kH08COI4wIp2q1veGYfsX0T3gZ8K0aq0hpQVnB7qMqXuP3JuA3EArl~q4K~3GljTCOoWp7~DLLFCxAh9YNmpn9CA~hWzhVgnllp3sjihsZV0eQ-2~lKcPZ9hgvjUEwvmTdaZtnQbnCtC3~-mKoDBJgoGPD0QjJkAI7yxCQQTwmDlzwiY0KKqw46E4mvR0m9pI4dOOdMMOkZ49hy6ovl1mbCmAeivhDtxvG~xCS3gNNFVfL2AbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
        <div className="about-cards">
            <div className="about-card">
            <div className="logo"><i class="fa-solid fa-store"></i></div>
            <h3>10.5k</h3>
            <p>Sallers active our site</p>

            </div>
            <div className="about-card">
            <div className="logo"><i class="fa-solid fa-cent-sign"></i></div>
            <h3>35k</h3>
            <p>Mopnthly Produduct Sale</p>

            </div>
            <div className="about-card">
            <div className="logo"><i class="fa-brands fa-shopify"></i></div>
            <h3>45.5k</h3>
            <p>Customer active in our site</p>

            </div>
            <div className="about-card">
            <div className="logo"><i class="fa-solid fa-sack-dollar"></i></div>
            <h3>25k</h3>
            <p>Anual gross sale in our site</p>

            </div>

        </div>
        <div className="persons">
            <div className="person">
                <div className="image">
                <img src="https://s3-alpha-sig.figma.com/img/0881/49fd/5afc043392ee3cbb529f429b3e2098d3?Expires=1704067200&Signature=ZPnn85lInyajHK4XAJ-ipxqBhe4aG9XI1buM2cII6aTY64W69elIbTafffNbJZf-CurC6wfd0w0-j-cIj0SGBR55sKTG54GP6hBhrl3R0AKOXaY8NsdnIaQa-ax1GhIZLeqYMds46rknUU9Ljkh~u4eDMWDAggon0Yn1GXyocJ3w8QvAkvpqVRBnk9IAL7JwVE8Q8yE6ohlH9VbOyavaIJ9zl9bY1iIPptaeXLJoEK~Jf9CLejPWr1TtudLETol3w1mJaKj2vPN3l2k7HrSpP3YjCznkn124zcpuxdRQxAi972RZzrLXhyzLU0nRtkdSB337HfFlHNq1wRgJKHfOlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
               
                <h2>Malik Abbasov</h2>
                <p>Founder & Chairman</p>
                <div className="logos">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div className="person">
                <div className="image">
                <img src="https://m.media-amazon.com/images/M/MV5BOWU1ODBiNGUtMzVjNi00MzdhLTk0OTktOWRiOTIxMWNhOGI2XkEyXkFqcGdeQXVyMTU2OTM5NDQw._V1_.jpg" alt="" />
                </div>
               
                <h2>iman Aliyev</h2>
                <p>Managing Director</p>
                <div className="logos">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
            <div className="person">
                <div className="image">
                <img src="https://s3-alpha-sig.figma.com/img/8438/eab9/a2fe88af0272adecd83422d0cb7e20d7?Expires=1704067200&Signature=E5MccMjv72XeK8ijLXaN5XI5tmcI~04ZhEL1EaAbck9HSms00ISO8~fr329CZfaydefkfbSvgeqln5pDBpWSLUHjGM6nIOofAwIjJDVDnuFOdUkhkyYepyYHg1oz~wcema0uSajOXKZmV0bIaLLMQjxqTDL3g4EzGnYbcy5jXll5~CV5MSRH09KC4o04qaoxARiEkrNl7GWgxA2SgVT1lF8ZXLoLAfqwip~7hzZGqG9w6j601J-VEP6ZtLv6wAn18gXSlbvhCTS2mNQ5GEfN3L86M0VsGh-haZ7hXF29ew6gEyxQypFOBf-YN~2W~C1q3YPlv0OrTyFRjS4u6BnLfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
               
                <h2>Elcan Seyfullayev</h2>
                <p>Product Designer</p>
                <div className="logos">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
        </div>
        
      
       


 


    </section>
    <section id='info'>

                <div className="contanier">
                    <div className="card-info">
                        <div className="logo">
                        <i class="fa-solid fa-truck"></i>

                        </div>
                        <h2>FREE AND FAST DELIVERY</h2>
                        <p>Free delivery for all orders over $140</p>

                    </div>
                    <div className="card-info">
                        <div className="logo">
                        <i class="fa-solid fa-headset"></i>

                        </div>
                        <h2>24/7 CUSTOMER SERVICE</h2>
                        <p>Friendly 24/7 customer support</p>

                    </div>
                    <div className="card-info">
                        <div className="logo">
                        <i class="fa-solid fa-shield-halved"></i>

                        </div>
                        <h2>MONEY BACK GUARANTEE</h2>
                        <p>We reurn money within 30 days</p>

                    </div>
                </div>
            </section>



    </>
  )
}

export default About