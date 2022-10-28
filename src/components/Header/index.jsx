import React from "react";
import '../../styles/components/header.scss';
import CardMenu from "../CardMenu";
import {javascriptIcon, typescriptIcon, javaIcon, pythonIcon, phpIcon, kotlinIcon, goIcon, rubyIcon, cSharpIcon, cPlusPlusIcon, htmlIcon, cssIcon} from "../../assets/icons/icons";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div class="header__container">
        <a href="/" class="header__logo"><h2>LOGO</h2></a> {/* code tips */}

        <div className="header__categorias">
          <ul className="nav">
            <li>
              <button><b>Categorias</b></button>
              <ul className="nav__sub-menu">
                <li><Link to={`/linguagens/javascript`}><CardMenu icone={javascriptIcon} titulo="Javascript" tamanho="200px"/></Link></li>
                <li><Link to={`/linguagens/typescript`}><CardMenu icone={typescriptIcon} titulo="Typescript" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/java`}><CardMenu icone={javaIcon} titulo="Java" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/python`}><CardMenu icone={pythonIcon} titulo="Python" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/php`}><CardMenu icone={phpIcon} titulo="Php" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/kotlin`}><CardMenu icone={kotlinIcon} titulo="Kotlin" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/go`}><CardMenu icone={goIcon} titulo="Go" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/ruby`}><CardMenu icone={rubyIcon} titulo="Ruby" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/c#`}><CardMenu icone={cSharpIcon} titulo="C#" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/c++`}><CardMenu icone={cPlusPlusIcon} titulo="C++" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/html`}><CardMenu icone={htmlIcon} titulo="Html" tamanho="200px" /></Link></li>
                <li><Link to={`/linguagens/css`}><CardMenu icone={cssIcon} titulo="Css" tamanho="200px" /></Link></li>
              </ul>
            </li>
          </ul>
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
