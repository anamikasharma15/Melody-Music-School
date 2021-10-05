import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookSquare,
//   faInstagramSquare,
//   faTwitterSquare,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons"


const Header = () => {
    return (
        <div style={{ marginTop: '55px' }}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{ background: 'rgb(47, 103, 126)' }}>
                <div className="container-fluid">
                    <div>
                    <img src="./logo.jpg" alt="" />
                    </div>
                    <Link className="navbar-brand" to="/home">Melody Music School</Link>
                    
               
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/programs">All Programs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instructors">Instructors</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Us
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    
                                {/* <div className="icons-container d-flex text-center "> */}
                                {/* <li className="icon">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                  </li>
                  <li className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </li>
                  <li className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </li>
                  <li className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </li> */}
                  {/* </div> */}
                

                                    {/* <li><a className="dropdown-item" href="https://www.twitter.com/" target='_blank'><i class="fab fa-facebook-square"></i> Twitter</a></li>
                                    <li><a className="dropdown-item" href="https://www.instagram.com/" target='_blank'><i class="fab fa-instagram"></i> Instagram</a></li>
                                    <li><a className="dropdown-item" href="https://www.linkedin.com/" target='_blank'><i class="fab fa-linkedin"></i> Linkedin</a></li> */}
                                </ul>  
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>
                        </ul>
                        <form className="d-flex flex-fill mx-5">
                            <input className="form-control" type="search" placeholder="Search your programs" aria-label="Search" /> &nbsp;
                            <button className="btn" style={{ background: '#eebbc3' }} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;