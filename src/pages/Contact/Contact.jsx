import React from "react";
import "./contact.scss";
function Contact() {
  return (
    <section id="contact">
      <p>
        Home / <b>Contact</b>
      </p>
      <div className="container">
        <div className="card1">
          <div className="call-us">
            <div className="logo">
              <i class="fa-solid fa-phone"></i>
            </div>
            <p>Call To Us</p>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <div className="underline"></div>
          <div className="write-us">
            <div className="logo">
              <i class="fa-regular fa-envelope"></i>
            </div>
            <p>Write To Us</p>
          </div>
          <p className="uzun">Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
        <div className="card2">

            <form action="">
                <div className="inputs">
                    <input placeholder="Your Name*" type="text" />
                    <input placeholder="Your Email*" type="text" />
                    <input placeholder="Your Phone*" type="text" />
                </div>
                <textarea placeholder="Your Massage"></textarea>
                <button>Send Massage</button>


            </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
