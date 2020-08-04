import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
 <div className="hero">
     <h1 className="hero__text">What would you like to do?</h1>
     <nav className="hero__list">
         <ul>
             <li className="hero__item">
                <Link to="/tv">
                    View a match in LichessTV
                </Link>  
             </li>
             <li className="hero__item">
                <Link to="/search">
                    Search a profile in Lichess
                </Link>
             </li>
         </ul>
     </nav>
</div>
);

export default Home;