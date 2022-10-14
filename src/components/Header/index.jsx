import React from "react";
import '../../styles/components/header.scss'

const Header = () => {
  return (
    <header className="header">
      <div class="header__container">
        <a href="/" class="header__logo"><h2>LOGO</h2></a>

        <div className="header__categorias">
          <h2>CATEGORIAS</h2>
        </div>

        <input type="search" placeholder="Pesquisar" className="header__input"/>

        <div className="header_avatar">
          <svg xmlns="http://www.w3.org/2000/svg"  width="30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
      </div>
    </header>
  )
}

export default Header;
