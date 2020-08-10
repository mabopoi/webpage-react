import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => (
    <div className="header">
        <div className="header__imageContainer--lichess">
            <img className="header__image--lichess" src="" alt="Lichess logo"/>
        </div>
        <h3 className="header__title"> Chess page made with ReactJS </h3>
        <div alt="ReactJS icon" className="header__imageContainer--react">
            <img src="" alt="ReactJS icon" className="header__image--react"/>
        </div>
    </div>
);

export default Header;