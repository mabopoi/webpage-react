import React from 'react';
import '../assets/styles/components/Footer.scss';
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => (
   <footer className="footer">
       <h4> Would you like to suggest some changes? DM me through my social media!</h4>
       <a className="footer__link" href="https://twitter.com/marcius2002">
          <AiFillTwitterCircle size='60px'/>
       </a>
       <a className="footer__link" href="https://github.com/mabopoi">
         <AiFillGithub size='60px'/>
       </a>
   </footer> 
)

export default Footer;