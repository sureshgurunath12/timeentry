import Logo from "../../assets/images/logo.png";
import "./Header.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { CategoryArray } from "../../data/Category";
import { collectionArray } from "../../data/Productdata/Collection";
import Modal from "../../components/Registration/Registration.js";
const collArr = collectionArray[0];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  return (
    <>
      <header>
        <div className="sticky-header">
          Silver Furniture | Luxury Furniture India , <span>Visit Us Now!</span>
        </div>
        <div className="logoContainer">
          <a href="https://khenshu.com/" className="logo">
            <img src={Logo} alt="travel_suitcase" />
          </a>
          <div className="nav-bar" onClick={() => setIsOpen(!isOpen)}>
            <svg
              width="30px"
              height="20px"
              viewBox="0 0 30 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-320.000000, -38.000000)"
                  fill="#9a6f31"
                >
                  <g transform="translate(320.000000, 38.000000)">
                    <path d="M27.8,16.4 C28.6836556,16.4 29.4,17.1163444 29.4,18 C29.4,18.8205373 28.7823357,19.4968115 27.9865938,19.5892356 L27.8,19.6 L2.2,19.6 C1.3163444,19.6 0.6,18.8836556 0.6,18 C0.6,17.1794627 1.2176643,16.5031885 2.0134062,16.4107644 L2.2,16.4 L27.8,16.4 Z M27.8,8.4 C28.6836556,8.4 29.4,9.1163444 29.4,10 C29.4,10.8205373 28.7823357,11.4968115 27.9865938,11.5892356 L27.8,11.6 L2.2,11.6 C1.3163444,11.6 0.6,10.8836556 0.6,10 C0.6,9.17946266 1.2176643,8.50318854 2.0134062,8.41076437 L2.2,8.4 L27.8,8.4 Z M27.8,0.4 C28.6836556,0.4 29.4,1.1163444 29.4,2 C29.4,2.82053734 28.7823357,3.49681146 27.9865938,3.58923563 L27.8,3.6 L2.2,3.6 C1.3163444,3.6 0.6,2.8836556 0.6,2 C0.6,1.17946266 1.2176643,0.503188543 2.0134062,0.41076437 L2.2,0.4 L27.8,0.4 Z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className={classNames("navContainer", isOpen ? "active" : "")}>
            <nav className="navigation" data-action="navigation">
              <ul className="parent">
                <li>
                  <a className="" href="/beta">
                    <span>Home</span>
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    id="category"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={classNames(
                      "nav-link dropdown-toggle",
                      location.pathname.indexOf("collections/all") != -1 &&
                        "active"
                    )}
                    href="/beta/collections/all"
                  >
                    Category
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="category">
                    <li>
                      <a
                        className={classNames(
                          "dropdown-item",
                          location.pathname.indexOf("category/all") != -1 &&
                            "active"
                        )}
                        href="/beta/category/all"
                      >
                        All
                      </a>
                    </li>
                    {CategoryArray.map((Category, index) => {
                      return (
                        <li key={Category.id}>
                          <a
                            className={classNames(
                              "dropdown-item",
                              location.pathname.indexOf(
                                "category/" + Category.id
                              ) != -1 && "active"
                            )}
                            href={"/beta/category/" + Category.id}
                          >
                            {Category.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <a
                    id="collections"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className={classNames(
                      "nav-link dropdown-toggle",
                      location.pathname.indexOf("collections/collections") !=
                        -1 && "active"
                    )}
                    href="/beta/collections"
                  >
                    <span>collections</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="collections">
                    {Object.keys(collArr).map((key) => {
                      return (
                        <li key={key}>
                          <a
                            className={
                              location.pathname.indexOf("collections/all") !=
                                -1 && "active"
                            }
                            href={"/beta/collections/" + key}
                          >
                            {collArr[key].title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>
                  <a
                    className={
                      location.pathname.indexOf("blog") != -1 && "active"
                    }
                    href="/beta/blog"
                  >
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a
                    className={
                      location.pathname.indexOf("press") != -1 && "active"
                    }
                    href="/beta/press"
                  >
                    <span>Press</span>
                  </a>
                </li>
                <li>
                  <a
                    className={
                      location.pathname.indexOf("contact") != -1 && "active"
                    }
                    href="/beta/contact"
                  >
                    <span>Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    className={
                      location.pathname.indexOf("about") != -1 && "active"
                    }
                    href="/beta/about"
                  >
                    <span>About Us</span>
                  </a>
                </li>
                <li
                  className="news-letter hide"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  <span>NEWSLETTER</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g fill="#3B5998">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <path
                                    d="M28.8 4.8C30.567 4.8 32 6.233 32 8v16c0 1.767-1.433 3.2-3.2 3.2H3.2C1.433 27.2 0 25.767 0 24V8c0-1.767 1.433-3.2 3.2-3.2h25.6zm.8 3.73L15.782 19.592 2.4 8.618V24c0 .393.283.72.656.787l.144.013h25.6c.393 0 .72-.283.787-.656L29.6 24V8.53zM27.422 7.2H4.456l11.342 9.302L27.422 7.2z"
                                    transform="translate(-590 -7020) translate(0 1229) translate(0 3700) translate(120 2027) translate(404 44) translate(66 20)"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </li>
              </ul>
            </nav>
            <div className="v-center hide">
              <button
                className="register"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                Register/Sign In
              </button>
            </div>
          </div>
        </div>
        {showTopBtn && (
          <span className="up-arrow-circle" onClick={scrollToTop}>
            <i className="up-arrow up"></i>
          </span>
        )}
        {isModalOpen && <Modal handler={toggleModal} />}
      </header>
    </>
  );
}

export default Header;
