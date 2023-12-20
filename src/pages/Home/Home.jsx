import React, { useContext, useEffect, useState } from 'react'
import "../Home/home.scss"
import { Carousel } from 'react-carousel-minimal';
import MyCarusel from '../../components/Carusel';
import { BasketContext } from '../../Context/BasketContext';
import { Link } from 'react-router-dom';



function Home() {
    const data = [
        {
            image: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/03/iphone-15-pro-gia.jpeg",
            caption: "<div class ='caption'><div class='upper'> <i class='fa-brands fa-apple'></i> <p>Iphone 14 Seriea </p> </div><div class ='mid'><h1>Up to 10% off Voucher</h1></div> <div class='lower'> <p>Shop Now</p> <i class='fa-solid fa-arrow-right'></i> </div> </div>"
        },
        {
            image: "https://i0.wp.com/crast.net/img/2022/09/T7TKWF2KCNAUBAOOT4QA7AS3NQ.jpg",
            caption: "<div class ='caption'><div class='upper'> <i class='fa-brands fa-apple'></i> <p>Iphone 14 Seriea </p> </div><div class ='mid'><h1>Up to 10% off Voucher</h1></div> <div class='lower'> <p>Shop Now</p> <i class='fa-solid fa-arrow-right'></i> </div> </div>"
        },
        {
            image: "https://9to5mac.com/wp-content/uploads/sites/6/2023/08/gold-iphone-14-pro.png?w=1600",
            caption: "<div class ='caption'><div class='upper'> <i class='fa-brands fa-apple'></i> <p>Iphone 14 Seriea </p> </div><div class ='mid'><h1>Up to 10% off Voucher</h1></div> <div class='lower'> <p>Shop Now</p> <i class='fa-solid fa-arrow-right'></i> </div> </div>"
        },




    ];
    const {basket,addBasket} = useContext(BasketContext)

    const [products, setProducts] = useState([])
    useEffect(() => {


        fetch('https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)

            })
    }, [])


    return (
        <>
            <section id='hero'>
                <ul>
                    <li>Woman's fashion <i class="fa-solid fa-chevron-right"></i></li>
                    <li>Main's fashion <i class="fa-solid fa-chevron-right"></i></li>
                    <li>Electronics</li>
                    <li>Home & lifestyle</li>
                    <li>Medicine</li>
                    <li>Sports & Outdoor</li>
                    <li>Baby & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>

                </ul>
                <div className="carusel">
                    <Carousel
                        data={data}
                        time={3000}
                        width="850px"
                        height="500px"
                        radius="10px"
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        pauseIconColor="white"
                        pauseIconSize="40px"
                        slideBackgroundColor="darkgrey"
                        slideImageFit="cover"
                        thumbnailWidth="100px"

                    />
                </div>



            </section>
            <section id='todays'>
                <div className="left">
                    <div className="today">
                        <div></div>
                        <p>Today's</p>
                    </div>

                    <div className="header-time">
                        <h1>Flash Sales</h1>
                        <div className="time">


                            <div className="txt">

                                <p>Days</p>
                                <p>Hours</p>
                                <p>Minutes</p>
                                <p>Seconds</p>


                            </div>
                            <div className="clock">
                                <p>03</p>
                                <div className="semi-colon">
                                    <i class="fa-solid fa-circle"></i>
                                    <i class="fa-solid fa-circle"></i>

                                </div>
                                <p>23</p>
                                <div className="semi-colon">
                                    <i class="fa-solid fa-circle"></i>
                                    <i class="fa-solid fa-circle"></i>

                                </div>
                                <p>19</p>
                                <div className="semi-colon">
                                    <i class="fa-solid fa-circle"></i>
                                    <i class="fa-solid fa-circle"></i>

                                </div>
                                <p>56</p>

                            </div>

                        </div>
                    </div>


                </div>
                <div className="right">
                    <i class="fa-solid fa-arrow-left"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>


            </section>
            <section id='carusel'>
                <MyCarusel />
                <div className="view-all">
                    View All
                </div>





            </section>
            <section id='catagories'>
                <div className="catagory-header">
                    <div className="left">
                        <div className="today">
                            <div></div>
                            <p>Catagories</p>
                        </div>

                        <div className="header-time">
                            <h1>Browse By Catagory</h1>

                        </div>


                    </div>
                    <div className="right">
                        <i class="fa-solid fa-arrow-left"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>

                <div className="catagories">
                    <div className="card-catagory">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                        <p>Smartphones</p>
                    </div>
                    <div className="card-catagory">
                        <i class="fa-solid fa-desktop"></i>
                        <p>Computers</p>
                    </div>
                    <div className="card-catagory">
                        <i class="fa-solid fa-microscope"></i>
                        <p>For Study</p>
                    </div>
                    <div className="card-catagory">
                        <i class="fa-solid fa-camera"></i>
                        <p>Cameras</p>
                    </div>
                    <div className="card-catagory">
                        <i class="fa-solid fa-headphones-simple"></i>
                        <p>HeadPhones</p>
                    </div>
                    <div className="card-catagory">
                        <i class="fa-solid fa-gamepad"></i>
                        <p>Gaming</p>
                    </div>

                </div>



            </section>
            <section id='best-seller'>
                <div className="best-seller-header">
                    <div className="left">
                        <div className="today">
                            <div></div>
                            <p>Best-Seller</p>
                        </div>

                        <div className="header-time">
                            <h1>Browse By Catagory</h1>

                        </div>


                    </div>
                    <div className="right">
                        View All

                    </div>
                </div>

                <div className="best-seller">
                    {products.slice(0, 6).map(x => (
                        <div className="card">
                            <div className="top">
                                <img src={x.image} alt="" />
                                <i class="fa-solid fa-heart"></i>
                                <Link to={`/detail/${x.id}`}><i class="fa-regular fa-eye"></i></Link>
                                <div onClick={()=>addBasket(x)} className="hover">
                                    Add To Cart

                                </div>

                            </div>
                            <p>{x.name}</p>
                            <p className='new-price'> {x.price} $</p>
                            <div className="discount">
                                -20%
                            </div>
                            <div className='review'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>

                            </div>
                        </div>

                    ))}





                </div>



            </section>
            <section id='jbl'>
                <div className="container">
                    <div className="content">
                        <p className='p1'>Catagories</p>
                        <h1>Enhance Your Music Experience</h1>
                        <div className="circules">
                            <div className="circule">

                                <span>05</span>
                                <p>Days</p>

                            </div>
                            <div className="circule">
                                <span>23</span>
                                <p>Hour</p>


                            </div>
                            <div className="circule">
                                <span>59</span>
                                <p>Minutes</p>

                            </div>
                            <div className="circule">
                                <span>35</span>
                                <p>Seconds</p>

                            </div>
                        </div>
                        <div className='buy-now'>
                            Buy Now

                        </div>
                    </div>
                    <div className="image">

                        <img src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1703462400&Signature=LwgvMKT11ng-1VTfkz~I7wcxlaUSEHB4Mh2uRnbDEJVGVUQA46NFf57SzM9ykOpkZlSy5IpgSFcTIMdcwCSFFktMScgab5H2Vb5htUycLp07plx59U6DQpM~fucs0qvl6wagJ9-vjCAcLPZg2VLU0R2fjUzEX0o8XopnFoLnTtkjTBOFGCoBK~1t8j-1ath-dyMFpBm-Ghr9N76paPhBobt8SrU3Knmxl47RLZZNqWNY3rlxzqyBZwW-j3Tem53PZ4lyS9cjZB4ySBlcsHHtjc1RoVY3OcI04jv09NfkJt1jHYiteHwWIUtC4h8N9dlVrYrvmKsBVjFBjwHNnsNSkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
                </div>






            </section>
            <section id='our-products'>
                <div className="our-products-header">
                    <div className="left">
                        <div className="today">
                            <div></div>
                            <p>Our Products</p>
                        </div>

                        <div className="header-time">
                            <h1>Explore Our Products</h1>

                        </div>


                    </div>
                    <div className="right">
                        <i class="fa-solid fa-arrow-left"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <div className="explore">
                    {products.slice(0, 8).map(x => (
                        <div className="card">
                            <div className="top">
                                <img src={x.image} alt="" />
                                <i class="fa-solid fa-heart"></i>
                                <Link to={`/detail/${x.id}`}><i class="fa-regular fa-eye"></i></Link>
                                <div onClick={()=>addBasket(x)} className="hover">
                                    Add To Cart

                                </div>

                            </div>
                            <p>{x.name}</p>
                            <p className='new-price'> {x.price} $</p>
                            <div className="discount">
                                -20%
                            </div>
                            <div className='review'>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>

                            </div>
                        </div>

                    ))}
                </div>
                <div className="view-more">
                    View All Products

                </div>


            </section>
            <section id='features'>
                <div className="features-header">
                    <div className="left">
                        <div className="today">
                            <div></div>
                            <p>Features</p>
                        </div>

                        <div className="header-time">
                            <h1>New Arivval</h1>

                        </div>


                    </div>
                    <div className="right">
                        <i class="fa-solid fa-arrow-left"></i>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>

                <div className="photos">
                    <div className="left-photo">
                        <img src="https://s3-alpha-sig.figma.com/img/1c36/0f79/0c1817d3afa266b3c9f8c81ff0ed4428?Expires=1703462400&Signature=FXncaC-Sz-OpESWpBHi99V6ubOQ26UGLYcGgSL1HCy~s4Kwa~kmbwu9JJ5CweA530otcQnpTH0qp~ztbeI3-lE5fD7QYLt4DZlH8ZyikJKhMDGaXgXXlBKgA34P7ywznKKJYaGk-G~KYWlQXiM5YvM~Ql6NULV~YLKFZdTA~t9z3cGV4CyRhWFGT237N1gtvandSoBYPQFNgBJvcW-QT9FEVD71dQzhxXosXTwLnJTI-yBMWO8FpR1-1euh4e86cs9whZxr3I0uHHuzeua4cqENhvOAn2Grjc6eoLKvBblzfTzxpu3W8~YzvqjNycp~vCOx~EtAgRkN2qy88ebzswA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        <div className="txt">
                            <h1>Playstation 5</h1>
                            <p>Black and White version of the PS5 coming out on sale.</p>
                            <span>Shop Now</span>
                        </div>


                    </div>
                    <div className="right-photo">
                        <div className="woman-photo">
                            <img src="https://s3-alpha-sig.figma.com/img/455c/8d64/08463f7e8f57dd3048a2444dbfa0cb90?Expires=1703462400&Signature=kAFX5qcI92Dwp9XK7ammldYKTUpJ5coiCZTZcT3jBztgOSzzA~KhaFIWtI9~~-UnFi-5MjHQhCLUAiX2CRPBb3~s5o3isZ1nfPtwZdtB5SQxN8OXyTqkqkHMQY25rP4z43R9vyIXfTAsgz2xUb-4o3ScYRtgzlNzdX3vAey-C2XlJbosAEGiDQxO3E33M-sb5ikyIDRH09T2~B5bEsQZi-q92MOWKMzLBEoMlo~UXt33sFwW7eTX0OSJtMB1DAUTkYPr8uyZnFh0D55poy25w~fskikSO1xrEclrt7qJaCesuVGKv~MVaLgTRyMbkYrrm7ltNC77WQGVXrzU1Rv6cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                            <div className="txt">
                                <h1>Woman's Collection</h1>
                                <p>Featured woman collections that give you another vibe.</p>
                                <span>Shop Now</span>
                            </div>

                        </div>
                        <div className="bottom-photo">
                            <div className="speaker">
                                <img src="https://s3-alpha-sig.figma.com/img/e565/9d57/2977438364a41d7e8c9d1e9a794d43ed?Expires=1703462400&Signature=FjXKOaSha~p4pL5bHUyheEolG1yGsZtsOlu9Me0tDZBU8FnHVemZhgzdJwIz9WUZyzUE6mFJ9cmx0xQYx7fKaOCDw7sPcu7f2oE1PkXqCrO5eh7dGbaLLjf-UwGrzT7oz3DK2y6uInPkEoA~9Bl4DVnkM8nEHi6RXg3aGSNcjRf0YdqauCC767UenVPdCXx-vPx9Ilq7JRssiEMiJI13NrraEVHt8i267uIX~pWujxHOryBL59A8t8VGhgRLSWfQqX00-VdYu9qmvHVd4O5I4p18-FEVwL~2SdMbTC2KKf-u398yswJIX1D1sGNBXmaXoKDVo0yvvy2nFs3An2b4uQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                               <div className="txt">
                               <h1>Speakers</h1>
                                <p>Amazon wireless speakers</p>
                                <span>Shop Now</span>
                               </div>

                            </div>
                            <div className="parfume">
                            <img src="https://s3-alpha-sig.figma.com/img/1531/5cd1/5102562cf220504d288fa568eaa816dd?Expires=1703462400&Signature=DRf4JHB6~E7y5uSdtkX3iA2YH34x3DGAxJIsrx5NOLla1cr-BYtfyzdiI8u3kVGzdTozpYLI5FIF9JS~raulAkntApIYkbNZgjh1eruo1-ok0jNeHBFJVFc~uQ5HLKRCp4~ZaRjBES0Uc-H653iF6VT~BVgG5jCBI3LJl59a44X3YCtL7HwP2CHiVJOWqiWyLb~BVcBcWSTvRN~pnRxmttn8FA~14U14LPFy8j0CDZk2qiRIVf-a6oCdPNlLJCVCDmqMG2ldZFpxBPIo~8uAG4ffiA1L7qwmgpAv7LOuZPrITtGnRp5oTM0n4JeD4NwvXXFS2zbGAfBwlVLVRh~3Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                               <div className="txt">
                               <h1>Speakers</h1>
                                <p>Amazon wireless speakers</p>
                                <span>Shop Now</span>
                               </div>

                            </div>
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

export default Home