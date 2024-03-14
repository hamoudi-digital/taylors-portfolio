// src/pages.Home.js
import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Footer from "../components/Footer";
import ContactCallout from "../components/ContactCallout";

// Home page - majority of site interaction occurs here
function Home() {
    useEffect (() => {
        window.scrollTo({top: 0, left: 0});
    });
    return(
        <main>
            <Navigation />
            <Portfolio />
            <About />
            <ContactCallout />
            <Footer />
        </main>
    )
}

export default Home;