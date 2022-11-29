import '../../styles/components/header.scss';
import {javascriptIcon, typescriptIcon, javaIcon, pythonIcon, phpIcon, kotlinIcon, goIcon, rubyIcon, cSharpIcon, cPlusPlusIcon, htmlIcon, cssIcon, searchIcon} from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import CardMenu from "../CardMenu/CardMenu";
import { useState } from 'react';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="header">

      <span className="header__container">
        <span className="header__logo">
          <Link to="/">CodeTips</Link>
        </span>

      <span className="header__categorias">
          <ul className="nav">
            <li>
              <button>Categorias</button>
              <ul className="nav__sub-menu">
                <li><Link to={`/categorias/javascript`}><CardMenu icone={javascriptIcon} titulo="Javascript" tamanho="200px"/></Link></li>
                <li><Link to={`/categorias/typescript`}><CardMenu icone={typescriptIcon} titulo="Typescript" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/java`}><CardMenu icone={javaIcon} titulo="Java" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/python`}><CardMenu icone={pythonIcon} titulo="Python" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/php`}><CardMenu icone={phpIcon} titulo="Php" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/kotlin`}><CardMenu icone={kotlinIcon} titulo="Kotlin" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/go`}><CardMenu icone={goIcon} titulo="Go" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/ruby`}><CardMenu icone={rubyIcon} titulo="Ruby" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/c#`}><CardMenu icone={cSharpIcon} titulo="C#" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/c++`}><CardMenu icone={cPlusPlusIcon} titulo="C++" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/html`}><CardMenu icone={htmlIcon} titulo="Html" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/css`}><CardMenu icone={cssIcon} titulo="Css" tamanho="200px" /></Link></li>
              </ul>
            </li>
          </ul>
        </span>
      
      <span className='header__pesquisar'>
        <form action="/" className='header__pesquisar__form'>
          <span className='header__pesquisar__input'>
            <input type="search" placeholder="Pesquisar"/>
          </span>
          <button className='header__pesquisar__button'>
            {searchIcon}
          </button>
        </form>
      </span>

      <span className="header__postar">
        <Link to="/postar">Postar</Link>
      </span>

      <span className="header_avatar">
        <button onClick={() => setShowModal(true)}>
          <svg xmlns="http://www.w3.org/2000/svg"  width="30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span>Login</span>
        </button>
        <Modal show={showModal} setShow={setShowModal}>
          <Login />
        </Modal>
      </span>

      </span>
    </header>
  );
};

export default Header;