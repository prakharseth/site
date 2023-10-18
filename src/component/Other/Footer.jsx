import React, { Component, Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <section className="bg__black">
        <div className="container">
          <div className="row justify-content-between">
            <div className="mb-4 col-md-3">
              <h4 class="yeseva color__white normal font__size--24 text__24-1024">
                Inter<span className="color__green">Q</span>
              </h4>
              <p className="medium font__size--12 text__12-1024 color__white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A amet
                vitae vel id id porttitor ut in. Integer pretium{" "}
              </p>
            </div>
            <div className="mb-4 mb-lg-0 col-6 col-md offset-md-1">
              <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                Quicklink 1
              </h5>
              <ul className="list__footer-menu">
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Portofolio
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-lg-0 col-6 col-md">
              <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                Quicklink 2
              </h5>
              <ul className="list__footer-menu">
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    Single Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    className="color__white medium font__size--12 text__12-1024 opacity__5 hover"
                  >
                    404 Error
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 mb-lg-0 col-12 col-md-6 col-lg-3">
              <div className="mb-4">
                <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                  Join Our Newsletter{" "}
                </h5>

                <div className="wrapper__subscribe d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control color__white medium font__size--12 text__12-1024"
                    placeholder="Your Email Address"
                  />
                  <button className="medium font__size--12 text__12-1024 btn btn__green shadow color__white shadow ml-3">
                    Send
                  </button>
                </div>
              </div>

              <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                Follow Us
              </h5>

              <ul className="list__sosmed">
                <li>
                  <a href="#!">
                    <img src="./../images/sos (1).png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/sos (2).png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/sos (3).png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg">
              <h5 className="medium font__size--12 text__12-1024 color__white mb-3">
                Download Our App
              </h5>
              <ul className="list__footer-menu">
                <li>
                  <a href="#!">
                    <img src="./../images/Google Play.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src="./../images/App Store.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="bg__black-2 py-4">
        <div className="container color__gray-2 text-center font__size--12 text__12-1024 medium">
          Copyright InterQ. 2021 All Right Reserved
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
