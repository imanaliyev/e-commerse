import React, { useContext, useEffect, useState } from 'react'

import Slider from "react-slick";
import "../components/carusel.scss"
import { BasketContext } from '../Context/BasketContext';
import { Link } from 'react-router-dom';

function MyCarusel() {
    const {addBasket} = useContext(BasketContext)

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
      };
    return (
        <>
      <div>
    
        <Slider {...settings}>
            {products.map(x=>(
                <div className='card'>
                    <div className="card-header">
                    <img className='thumbnail' src={x.image} alt="" />
                    <i class="fa-solid fa-heart"></i>
                    <Link to={`/detail/${x.id}`}><i class="fa-regular fa-eye"></i></Link>
                    <div onClick={()=>addBasket(x)} className="hover">
                        Add To Cart

                    </div>
                    </div>
                  
                    <p>{x.name.slice(0,30)}</p>
                
                    <div className='price'>
                    <p className='new-price'> {x.price} $</p>
                  
                    <div className="discount">
                        -20%
                    </div>
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
         
        </Slider>
      </div>


            





        </>
    )
}

export default MyCarusel