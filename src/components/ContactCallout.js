// src/components/ContactCallout.js

import React from "react";
import { HashLink as Link} from 'react-router-hash-link';

function ContactCallout() {
    return (
        <div className="callout section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-8">
                        <h2 style={{marginBottom: 30}}>Interested? Let’s work together!</h2>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <a href="mailto:taylor@taynwhite.com" className="button red">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );  
}

export default ContactCallout;