// src/components/Portfolio.js
import React, { useRef, useEffect, useState, state } from 'react';
import Masonry from 'masonry-layout';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Portfolio() {
    const [portfolio, setPortfolio] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const filterCategories = ['all', 'children books', 'character design', 'prints']; 
    var contentful = require('contentful');
    var newMasonry = null;
    const space_id = process.env.REACT_APP_CONTENTFUL_SPACE;
    const api_token = process.env.REACT_APP_CONTENTFUL_API_TOKEN;



    let filterItems = filterCategories.map(function (filterCategory) {
        return <div className={'filter-item '+filterCategory} key={filterCategory} onClick={() => filterPortfolio(filterCategory)}><h4>{filterCategory}</h4></div>
    });

    useEffect(() => {

        var client = contentful.createClient({
            space: space_id,
            accessToken: api_token
        });
        client.getEntries().then(function(entries){
            var realPortfolioData = [];
            entries.items.forEach(function(entry) {
                realPortfolioData.push(
                    {
                        id: entry.sys.id,
                        imageSrc: entry.fields.featured_image.fields.file.url,
                        title: entry.fields.title,
                        category: entry.fields.category,
                        description: (entry.fields.description ? entry.fields.description : null),
                        externalLink: (entry.fields.externalLink ? entry.fields.externalLink : null)
                    }
                );
            });
            realPortfolioData.reverse();
            var i = 0;
            var currentPortfolioItems = realPortfolioData.map((portfolioItem) => {
                return (
                    <div className={'portfolio-item ' + portfolioItem.category.replace(' ', '-') + ' active'} 
                    key={portfolioItem.id}>
                        {/* <Link to={'/portfolio/' + encodeURI(portfolioItem.title.replace(/\s+/g, '-').toLowerCase())} state={{ */}
                        <Link to={'/portfolio'} state={{
                            id: portfolioItem.id,
                            imageSrc: portfolioItem.imageSrc,
                            title: portfolioItem.title,
                            category: portfolioItem.category,
                            description: portfolioItem.description,
                            externalLink: portfolioItem.externalLink
                        }}>
                            <img src={portfolioItem.imageSrc}/>
                            <div className='portfolio-overlay'></div>
                            <div className='portfolio-content'>
                                <h5>{portfolioItem.title}</h5>
                                <p>{portfolioItem.category}</p>
                            </div>
                        </Link>
                    </div>
                )
            });
            setPortfolio(currentPortfolioItems);
        });
        var elem = document.querySelector('.portfolio-container');
        newMasonry = new Masonry( elem, {
            itemSelector: '.portfolio-item',
            horizontalOrder: true,
            columnWidth: 323
        });

        if (document.readyState === 'complete') {
            setLoaded(true);
          } 
    })
    const filterPortfolio = (category) => {
        let items = document.getElementsByClassName('portfolio-item');
        let filters= document.getElementsByClassName('filter-item');

        Array.from(filters).forEach((filterItem) => {
            (filterItem.classList.contains(category.toString().replace(' ', '-')) ? filterItem.classList.add('active') : filterItem.classList.remove('active'));
        });
        Array.from(items).forEach(item => {
            if(category === 'all'){
                item.classList.add('active');
            }
            else if(item.classList.contains(category.toString().replace(' ', '-'))){
                item.classList.add('active');
            }
            else {
                item.classList.remove('active');
            }
        })
        
    }
        
    return (
        <div className='portfolio section' id='portfolio' style={{paddingBottom: 0}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='filter-container d-flex flex-row flex-wrap justify-content-center'>
                            {filterItems}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <div className='portfolio-container' id='portfolio-container'>
                            {portfolio && loaded ? portfolio : <span className="loader"></span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;