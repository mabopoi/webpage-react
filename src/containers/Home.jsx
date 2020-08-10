import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Home.scss'

const Home = () => (
 <div className="hero">
     <div className="hero__text">
        <h1>What would you like to do?</h1>
     </div>
     <div className='hero__list'>
        <div className='hero__option--tv'>
            <Link to="/tv">
                View a match in LichessTV
            </Link>
        </div>
        <div className='hero__option--profile'>
            <Link to="/search">
                Search a profile in Lichess
            </Link>
        </div>
     </div>
</div>
);

export default Home;