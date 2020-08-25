import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Home.scss'

const Home = () => (
 <div className="hero">
     <div className="hero__text">
        <h1>What would you like to do?</h1>
     </div>
     <nav className='hero__list'>
        <Link to="/tv">
            <div className='hero__option--tv'>
                    View a match in LichessTV
            </div>
        </Link>
        <Link to="/search">
            <div className='hero__option--profile'>
                    Search a profile in Lichess
            </div>
         </Link>
     </nav>
</div>
);

export default Home;