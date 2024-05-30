import React from "react";
import './Header.css';

function Header(){
    function scrollToElement(id) {
        const headerHeight = document.querySelector('header').offsetHeight; 
        const element = document.getElementById(id);
        
        if (element) {
          const offset = element.offsetTop - headerHeight;
          window.scrollTo({
            top: offset,
            behavior: "smooth"
          });
        }
      }

 return(
    <header>
        <div class="title">
            <img src="../../../assets/logo_header_bg.png" className="logo-header"/>
        </div>
        <ul>
            <a onClick={() => scrollToElement('home')}><li>Início</li></a>
            <a onClick={() => scrollToElement('about')}><li>Sobre</li></a>
            <a onClick={() => scrollToElement('contact')}><li>Contato</li></a>
        </ul>
    </header>
 )
}

export default Header;