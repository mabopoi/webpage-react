import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Error404.scss';

const Error404 = () => (
    <section className='error404'>
        <h1> Ups! This page does not exist </h1>
        <h3> Go back to the Home page</h3>
        <Link to='/'>
            <button className='error404__button'> Click here!</button>
        </Link>
    </section>
    
)

export default Error404;