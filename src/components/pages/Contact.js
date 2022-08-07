import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import './Contact.css'
import one from '../../../public/images/one.png'
import two from '../../../public/images/two.png'
import three from '../../../public/images/three.png'
import four from '../../../public/images/four.png'

// npm i @emailjs/browser
// npm install --save-dev style-loader

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_ct5z5cr",
  //       "template_5r3cxx4",
  //       form.current,
  //       "d_8-54ioOXXZf4U69"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         console.log("message sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <>
      <div className="main-text">
        <div className="main-heading"><span>CONTACT </span>&nbsp;US</div>
        <div className="main-p"><h4>Any questions or remarks?Just write us a message</h4></div>
      </div>
      <div className="main">
        <div className="sub-main">
          <div className="text">
            <div className="heading"><h1>Contact Information</h1></div>
            <div className="p">Fill up the form and our team will get<br /> back to you within 24 hours</div>
          </div>
          <div className="info">
            <div className="sub-info">
              <span className="fa fa-phone"></span>
              <span className="desc">0172 638291</span>
            </div>
            <div className="sub-info">
              <span className="fa fa-envelope"></span>
              <span className="desc">shivalikpharma21@gmail.com</span>
            </div>
            <div className="sub-info">
              <span className="fa fa-map-marker"></span>
              <span className="desc">Sector-1,Chandigarh</span>
            </div>
          </div>
          <div className="links">
            <i className="fa fa-twitter"></i>
            <i className="fa fa-facebook"></i>
            <i className="fa fa-linkedin"></i>
            <i className="fa fa-instagram"></i>

          </div>
        </div>
        <div className="form">
          <form >
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>


      <div className="meet">
        <h2 className="h">Meet our Top Developers</h2>
        <div className="wrapper">
          <Card
            img={one}
            name="Tina"
            description="UI/UX Developer"
          />

          <Card
            img={two}
            name="Mark"
            description="Senior Developer"
          />
          <Card
            img={three}
            name="Jim"
            description="Junior Developer"
          />
          <Card
            img={four}
            name="Daisy"
            description="Android Developer"
          />
        </div>
      </div>
    </>
  );
};


function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="img" />
      <div className="body">
        <h2 className="name">{props.name}</h2>
        <p className="description">{props.description}</p>
        <div className="links">
          <i className="fa fa-twitter"></i>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-linkedin"></i>

        </div>

      </div>
    </div>
  );
}

export default Contact;