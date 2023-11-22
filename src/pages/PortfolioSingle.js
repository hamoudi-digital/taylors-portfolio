// src/pages/PortfolioSingle.js

import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ContactCallout from "../components/ContactCallout";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

function PortfolioSingle() {
    const location = useLocation();
    var state;
    if (location.state != null) {
        state = location.state;
    }
    else {
        state = {
            id: 0,
            imageSrc: 'http://images.ctfassets.net/pehpejwgu7h3/58yyJfMTv9QfWV9U4lpBHX/97c6604e1abdd50edaad9759001e1dee/5D15BD16-E3FF-4807-8244-548063A73C68.png',
            title: 'Introducing Taylor',
            category: 'Character Design',
            description: '',
            externalLink: ''
        }
    }

    let renderOptions = {
        renderNode: {
          'embedded-asset-block': (image) =>
            '<img src="' + image.data.target.fields.file.url + '"/>'
        }
      }

    useEffect (() => {
        window.scrollTo({top: 0, left: 0});
        let descriptionHtml = documentToHtmlString(state.description, renderOptions);
        document.querySelector('.portfolio-single .description').innerHTML = descriptionHtml;
    });

    return (
        <main>
            <Navigation />
            <div className="portfolio-single section">
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
                        <div className="col-md-6 text-center featured-image">
                            {state.externalLink ? 
                                <a href={state.externalLink} target="_blank"> 
                                    <img src={state.imageSrc} />
                                </a>
                                : 
                                <img src={state.imageSrc} />}
                        </div>
                        <div className="col-md-6 text-left">
                            <h1>{state.title}</h1>
                            <div className="description"></div>
                            {state.externalLink ? <a href={state.externalLink} className="button" target="_blank">Learn More</a> : ''}
                        </div>
                    </div>
                </div>
            </div>
            <ContactCallout />
            <Footer />
        </main>
    );
}

export default PortfolioSingle;