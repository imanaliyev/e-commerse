import React, { useEffect, useState } from "react";
import "./detail.scss";

import { Link, useParams } from "react-router-dom";
function Detail() {
  let { id } = useParams();
  const [detailedProduct, setDetailedProduct] = useState([]);
  const [count, setCount] = useState(0);
  const increaseCont = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    fetch(
      `https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetailedProduct(data);
      });
  }, []);

  const selectColorBlue = () => {
    document.querySelector(".blue").classList.toggle("border");
    document.querySelector(".red").classList.remove("border");
  };
  const selectColorRed = () => {
    document.querySelector(".blue").classList.remove("border");
    document.querySelector(".red").classList.toggle("border");
  };
  const selectSizeXs = () => {
    document.querySelector(".xs").classList.toggle("selected");
    document.querySelector(".s").classList.remove("selected");
    document.querySelector(".m").classList.remove("selected");
    document.querySelector(".l").classList.remove("selected");
    document.querySelector(".xl").classList.remove("selected");
  };
  const selectSizeS = () => {
    document.querySelector(".s").classList.toggle("selected");
    document.querySelector(".xs").classList.remove("selected");
    document.querySelector(".m").classList.remove("selected");
    document.querySelector(".l").classList.remove("selected");
    document.querySelector(".xl").classList.remove("selected");
  };
  const selectSizeM = () => {
    document.querySelector(".m").classList.toggle("selected");
    document.querySelector(".s").classList.remove("selected");
    document.querySelector(".xs").classList.remove("selected");
    document.querySelector(".l").classList.remove("selected");
    document.querySelector(".xl").classList.remove("selected");
  };
  const selectSizeL = () => {
    document.querySelector(".l").classList.toggle("selected");
    document.querySelector(".s").classList.remove("selected");
    document.querySelector(".m").classList.remove("selected");
    document.querySelector(".xs").classList.remove("selected");
    document.querySelector(".xl").classList.remove("selected");
  };
  const selectSizeXl = () => {
    document.querySelector(".xl").classList.toggle("selected");
    document.querySelector(".s").classList.remove("selected");
    document.querySelector(".m").classList.remove("selected");
    document.querySelector(".l").classList.remove("selected");
    document.querySelector(".xs").classList.remove("selected");
  };

  return (
    <section id="detail">
      <Link to={"/"}>
        <p className="head">
          Home / <b>Detail</b>
        </p>
      </Link>
      <div className="container">
        <div className="row-images">
          <div className="image-card">
            <img src={detailedProduct.image} alt="" />
          </div>
          <div className="image-card">
            <img src={detailedProduct.image} alt="" />
          </div>
          <div className="image-card">
            <img src={detailedProduct.image} alt="" />
          </div>
          <div className="image-card">
            <img src={detailedProduct.image} alt="" />
          </div>
        </div>
        <div className="main-image">
          <img src={detailedProduct.image} alt="" />
        </div>
        <div className="detail-txt">
          <div className="top-txt">
            <div className="name">{detailedProduct.name}</div>
            <div className="rating">
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="review">(150 review)</p>
              <div className="line"></div>
              <p className="stock">In Stock</p>
            </div>
            <p className="price">${detailedProduct.price}.00 </p>
            <p>{detailedProduct.description?.slice(0, 180)}</p>
          </div>

          <div className="underline">
            <div className="bottom-txt">
              <div className="color">
                <p>Colours:</p>
                <div className="blue" onClick={selectColorBlue}></div>
                <div className="red" onClick={selectColorRed}></div>
              </div>
              <div className="size">
                <p>Size:</p>
                <div className="sizes">
                  <div className="size-card xs" onClick={selectSizeXs}>
                    XS
                  </div>
                  <div className="size-card s" onClick={selectSizeS}>
                    S
                  </div>
                  <div className="size-card m" onClick={selectSizeM}>
                    M
                  </div>
                  <div className="size-card l" onClick={selectSizeL}>
                    L
                  </div>
                  <div className="size-card xl" onClick={selectSizeXl}>
                    XL
                  </div>
                </div>
              </div>
              <div className="buy-now">
                <div className="counter">
                  <div onClick={decreaseCount} className="decrease">
                    -
                  </div>
                  <div className="display">{count}</div>
                  <div onClick={increaseCont} className="increase">
                    +
                  </div>
                </div>
                <button>Buy Now</button>
                <div className="heart">
                  <i class="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="delivery">
                <div className="free">
                  <i class="fa-solid fa-truck-fast"></i>
                  <div className="txt">
                    <p>Free Delivery</p>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="return">
                  <i class="fa-solid fa-rotate-left"></i>
                  <div className="txt">
                    <p>Return Delivery</p>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
