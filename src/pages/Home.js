import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/images/milk.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer'>
        <h1>E- Pashudhan</h1>
        <p> WE BELIEVE IN QUALITY </p>
        <Link to="/about">
          <button>
            KNOW MORE
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home