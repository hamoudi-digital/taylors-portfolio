// src/pages/PortfolioSingle.js

import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import About from "../components/About";
import ContactCallout from "../components/ContactCallout";
import { Link, useLocation } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import PageNotFound from "./PageNotFound";

function PortfolioSingle() {
    const location = useLocation();
    
    const state = location.state;

    let renderOptions = {
        renderNode: {
          'embedded-asset-block': (image) =>
            '<img src="' + image.data.target.fields.file.url + '"/>'
        }
    }

    useEffect (() => {
        if (state) {
            window.scrollTo({top: 0, left: 0});
            let descriptionHtml = documentToHtmlString(state.description, renderOptions);
            document.querySelector('.portfolio-single .description').innerHTML = descriptionHtml;
        }
    });

    if (state) {
        return (
            <main>
                <Navigation />
                <div className="portfolio-single section" id="portfolio-single">
                    <div className="container">
                         <div className="row">
                            <div className="col-12">
                                <div className="breadcrumbs">
                                    <em><Link to="/">Home</Link> {'>'} {state.title}
                                    </em>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 text-center featured-image" id="featured-image">
                                {state.externalLink ? 
                                    <a href={state.externalLink} target="_blank"> 
                                        <img src={state.image.fullSrc} />
                                    </a>
                                    : 
                                    <img src={state.image.fullSrc} />}
                            </div>
                            <div className="col-md-6 text-left">
                                <h1>{state.title}</h1>
                                <div className="description"></div>
                                {state.externalLink ? <a href={state.externalLink} className="button" target="_blank">Learn More</a> : ''}
                            </div>
                        </div>
                    </div>
                </div>
                <About />
                <ContactCallout />
                <Footer />
            </main>
        );
    }
    else {
        return(<PageNotFound />);
    }
}

export default PortfolioSingle;