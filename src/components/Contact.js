// src/components/Contact.js

import React from "react";
import emailjs from 'emailjs-com';

function Contact() {
    const [formStatus, setFormStatus] = React.useState('Submit');
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submiting...');
        const submission = e.target.elements;

        let details = {
            firstName: submission[0].value,
            lastName: submission[1].value,
            email: submission[2].value,
            message: submission[3].value
        }

        const serviceId = 'service_4kwapon';
        const templateId = 'template_r95x049';
        const userId = '-JhQuyPSswPuTrIsD';
        const templateParams = details;

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => (response.status == 200 ? setFormStatus('Message sent!') :  setFormStatus('Ooops.. Something went wrong.')
            ));

    }

    return(
        <div className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Let’s Work Together!</h2>
                        <p>Contact me below and I'll get back to you as soon as I can.</p>
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="contact-form">
                            <form onSubmit={onSubmit}>
                                <div className="row">
                                    <div className="form-row col-sm-6">
                                        <input type='text' name="first-name" className="form-control" id="first-name" required placeholder="First Name"/>
                                    </div>
                                    <div className="form-group col-sm-6">
                                        <input type='text' name="last-name" className="form-control" id="last-name" required placeholder="Last Name"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <input type='email' name="email" className="form-control" id="email" required placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-12">
                                        <textarea name="message" className="form-control" id="message" rows="4" placeholder="Message"/>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="form-group col-12">
                                        <input type="checkbox" id="subscribe" name="subscribe" value="subscribe"/>
                                        <label for="subscribe"> Subscribe to our newsletter</label>
                                    </div>
                                </div> */}
                                <button type="submit" className="button">{formStatus}</button>
                            </form>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
}

export default Contact;