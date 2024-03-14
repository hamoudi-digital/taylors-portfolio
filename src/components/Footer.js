// src/components.Footer.js

import React from 'react';


// Footer section featuring social media links
function Footer() {
    return (
        <div className='footer section' id='footer'>
            <div className='container'>
                <div className='row text-center'>
                    <div className='col-12'>
                        <div className='social-container d-flex flex-row justify-content-center'>
                            <div className='social-icon instagram'>
                                <a href='http://instagram.com/taywhitesketches' target="_blank">
                                    <span className='social-icon-wrap'>
                                        <i className="fa-brands fa-instagram"></i>
                                    </span>
                                </a>
                            </div>
                            <div className='social-icon pinterest'>
                                <a href='https://www.pinterest.com/taywhite129/' target="_blank">
                                    <span className='social-icon-wrap'>
                                        <i className="fa-brands fa-pinterest"></i>
                                    </span>
                                </a>
                            </div>
                            <div className='social-icon youtube'>
                                <a href='https://www.youtube.com/tayenic' target='_blank'>
                                    <span className='social-icon-wrap'>
                                        <i className="fa-brands fa-youtube"></i>
                                    </span>
                                </a>
                            </div>
                            <div className='social-icon tiktok'>
                                <a href='https://www.tiktok.com/@taywhitesketches' target="_blank">
                                    <span className='social-icon-wrap'>
                                        <i className="fa-brands fa-tiktok"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className='copyright-section'>
                            <div className='copyright-content'>
                                <p>© {new Date().getFullYear()} by Taylor N. White</p>
                            </div>
                        </div>
                        <div className='footer-badge'>
                            <a href="https://reedsy.com/white-tay" target="_blank">
                                <img src="https://assets-cdn.reedsy.com/images/reedsy-logo-dark.png" width="380" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;