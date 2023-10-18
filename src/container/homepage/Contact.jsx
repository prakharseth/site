import React, { useState, Fragment, useRef } from "react";
import Consultation from "../../component/Other/Consultation";
import Footer from "../../component/Other/Footer";
import Navbar from "./../../component/Navbar/Navbar";
const Contact = (props) => {
  return (
    <Fragment>
      <div className="overflow-hidden position-relative">
        <div className="position-relative">
          <img
            src="./../images/Image (25).png"
            className="images__bg-head"
            alt=""
          />
          <div className="position-relative z-2">
            <Navbar />
            <section>
              <div className="container">
                <div className="text-center">
                  <h2 className="font__size--64 text__65-1024 text__65-sm text__65-xxs yeseva">
                    Contact Us
                  </h2>
                  <p className="medium font__size--14 text__14-1024 lh-2 color__gray-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    amet vitae vel id id porttitor ut in.{" "}
                    <br className="d-none d-md-block" /> Integer pretium egestas
                    nisi, nunc, purus sit vitae nisi, etiam.{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Consultation />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-4 my-md-auto">
                <img src="./../images/Basemap image.png" alt="" />
              </div>
              <div className="col-md-6 my-auto">
                <div className="wrapper__info-contact text-center text-md-left d-md-flex align-items-center">
                  <div className="icon flex-shrink-0 mx-auto ml-md-0 mr-md-0">
                    <img src="./../images/Message.png" alt="" />
                  </div>
                  <h5 className="mb-0 font__size--20 text__20-1024 yeseva normal ml-3">
                    your.email.inbox@here.com
                  </h5>
                </div>
                <div className="wrapper__info-contact text-center text-md-left d-md-flex align-items-center my-4">
                  <div className="icon flex-shrink-0 mx-auto ml-md-0 mr-md-0">
                    <img src="./../images/Location.png" alt="" />
                  </div>
                  <h5 className="mb-0 font__size--20 text__20-1024 yeseva normal ml-3">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </h5>
                </div>
                <div className="wrapper__info-contact text-center text-md-left d-md-flex align-items-center">
                  <div className="icon flex-shrink-0 mx-auto ml-md-0 mr-md-0">
                    <img src="./../images/Calling.png" alt="" />
                  </div>
                  <h5 className="mb-0 font__size--20 text__20-1024 yeseva normal ml-3">
                    +62 424 954 824
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default Contact;
