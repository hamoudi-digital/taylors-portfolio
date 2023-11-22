// src/pages.AboutPage.js
import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Footer from "../components/Footer";
import ContactCallout from "../components/ContactCallout";

function AboutPage() {
    useEffect (() => {
        window.scrollTo({top: 0, left: 0});
    });
    return(
        <main>
            <Navigation />
            <About />
            <ContactCallout />
            <Footer />
        </main>
    )
}

export default AboutPage;