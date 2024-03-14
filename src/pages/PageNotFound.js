// src/pages/PageNotFound.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

// A catchall page utilized like a 404 page. Used if navigating to a route that doesn't exist
function PageNotFound() {
    return (
        <main>
            <Navigation />
            <div id="404" className="404-page section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 style={{marginBottom: 100}}>404 - Page Not Found</h1>
                            <Link to="/" style={{marginBottom: 100}} className="button">
                                Let's Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default PageNotFound;