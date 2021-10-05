import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='container bg-secondary'>
            <div className='row g-3 mt-5 p-5'>
                <div className='col-md-4 text-white'>
                    <h1>Melody Music School</h1>
                    <div className='icon'>
                        <a href="/"><i class="fab fa-instagram"></i></a>
                        <a href="/"><i class="fab fa-linkedin"></i></a>
                        <a href="/"><i class="fab fa-youtube"></i></a>
                        <a href="/"><i class="fab fa-facebook-square"></i></a>
                    </div>
                    <div className='mt-5'>
                        <small>Dhaka © . All rights reserved.</small>
                    </div>
                </div>
                <div className='col-md-2 text-white footer-option'>
                    <p><a href="/">Home</a></p>
                    <p><a href="/">Programs</a></p>
                    <p><a href="/">About us</a></p>
                    <p><a href="/">Contact us</a></p>
                </div>
                <div className='col-md-6 text-white'>
                    <h3>Sign up for the newsletter</h3>
                    <input type="text" />
                    <h3 className='mt-3'><i class="fas fa-phone-volume"></i> <small>+880183589278</small></h3>
                    <h3>
                        <div>
                            <i class="fas fa-thumbtack"></i> &nbsp;
                            <small style={{ fontWeight: '100', fontSize: '15px' }}>Danmondi 32, kolabagan, Dhaka ,Bangladesh</small>
                        </div>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;