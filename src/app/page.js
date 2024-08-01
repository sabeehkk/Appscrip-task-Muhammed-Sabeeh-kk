
"use client"

"use client";
import React, { useEffect, useState } from 'react' ;
import '/src/app/styles.css' ;
import '/src/app/home.css' ;
import Header from './header/page' ;    
import Footer from './footer/page' ;

const Home = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((response) => setState(response))
      .catch((error) => console.error(error));
  }, []);

  const toggleFilter = (e) => {
    e.preventDefault();
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <Header />
      <div className="container">
        <header className="header">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </header>
        <div className="filter-toggle">
          <span id="items-count">3425 Items</span>
          <a href="#" id="toggle-filter" onClick={toggleFilter}>
            {isFilterVisible ? 'Hide Filter' : 'Show Filter'}
          </a>
          <div className="sort-options">
            <select id="sort">
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="popular">POPULAR</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
            </select>
          </div>
        </div>
        <div className="product-list">
          <div
            className={`filters ${
              isFilterVisible ? 'filters--visible' : ''
            }`}
            id="filter-section"
          >
            <div className="filter-category">
              <label className="custom-checkbox">
                <input type="checkbox" /> Customizable
              </label>
              <div className="filter-checkbox">
                <p>Ideal For</p>
                <label>
                  <input type="checkbox" /> Men
                </label>
                <label>
                  <input type="checkbox" /> Women
                </label>
              </div>
              <div className="filter-checkbox">
                <p>Ideal For</p>
                <label>
                  <input type="checkbox" /> Men
                </label>
                <label>
                  <input type="checkbox" /> Women
                </label>
              </div>
              <div className="filter-checkbox">
                <p>Ideal For</p>
                <label>
                  <input type="checkbox" /> Men
                </label>
                <label>
                  <input type="checkbox" /> Women
                </label>
              </div>
            </div>
          </div>
          <div
            className={`products ${
              isFilterVisible ? 'products--three-per-row' : 'products--four-per-row'
            }`}
          >
            {state.map((val) => (
              <div key={val.id} className="product-item">
                <div className="product-image-container">
                  <img src={val.image} alt={val.category} />
                </div>
                <p>{val.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
