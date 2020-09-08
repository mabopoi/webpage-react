import React from 'react';
import '../assets/styles/components/Header.scss';
import { DiReact } from 'react-icons/di';
import { FcPuzzle } from 'react-icons/fc';

const Header = () => (
    <header className="header">
        <div className="header__imageContainer--lichess">
            <FcPuzzle size='60px'/>
        </div>
        <h3 className="header__title"> Chess page made with ReactJS </h3>
        <div  className="header__imageContainer--react">
            <DiReact size='60px'/>
        </div>
    </header>
);

export default Header;