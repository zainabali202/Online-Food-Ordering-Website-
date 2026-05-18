import React from 'react'
import './Header.css'

const Header = () => {
    return (
      <div className="header">
        <div className="header-contents" id="home">
          {/* <h2>Order your favourite food here</h2>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p> */}
          {<h2>Discover Delicious Food Near You</h2> }
          <p>
            Explore a wide range of mouth-watering dishes made with love and
            fresh ingredients. Order now and enjoy your favourite meals anytime,
            anywhere.
          </p>
          <a href="#food-display">
            <button>View Menu</button>
          </a>
        </div>
      </div>
    );
}

export default Header
