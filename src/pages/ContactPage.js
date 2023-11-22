// src/pages.ContactPage.js
import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function ContactPage() {
    useEffect (() => {
        window.scrollTo({top: 0, left: 0});
    });
    return(
        <main>
            <Navigation />
            <Contact />
            <Footer />
        </main>
    )
}

export default ContactPage;