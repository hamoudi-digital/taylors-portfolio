// src/components/About.js

import React from 'react';
import taylorPhoto from '../assets/taylor-n-white.jpg';

function About() {
    return (
        <div className='about section' id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='about-content'>
                            <h2>About The Author</h2>
                            <p>Taylor Nicole White is an author-illustrator from Buffalo, NY. After attending college in New York, New York, Taylor decided to live out her childhood dream of becoming an author. By crafting stories highlighting children from differing minority groups, Taylor is approaching her goal to create a world where any kid can find themselves on a bookshelf.</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='about-image'>
                            <img src={taylorPhoto} style={{maxWidth: '100%', boxShadow: 'rgb(0 0 0 / 50%) 2px 2px 7px'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;