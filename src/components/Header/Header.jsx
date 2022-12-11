import '../../styles/components/header.scss';
import {javascriptIcon, typescriptIcon, javaIcon, pythonIcon, phpIcon, kotlinIcon, goIcon, rubyIcon, cSharpIcon, cPlusPlusIcon, htmlIcon, cssIcon, searchIcon, cIcon, sqlIcon, swiftIcon,} from "../../assets/icons/icons";
import { PublicacoesContext } from '../../contexts/PublicacoesContext';
import { Link, useNavigate } from "react-router-dom";
import CardMenu from "../CardMenu/CardMenu";
<<<<<<< HEAD
import { useRef, useState } from 'react';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthGithubContext } from '../../contexts/AuthGithubContext';

const Header = () => {
  const { postsList } = useContext(PublicacoesContext);
  const { user } = useContext(AuthGithubContext);
  const [showModal, setShowModal] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setFiltered(postsList.filter((item) => item.titulo.toLowerCase().includes(search.toLowerCase())));
    // eslint-disable-next-line
  }, [search]);


=======

const Header = () => {
>>>>>>> parent of 7d0bf02 (Atualizações cardPostagem, criação do favoritos)
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
                <li><Link to={`/categorias/c`}><CardMenu icone={cIcon} titulo="C" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/csharp`}><CardMenu icone={cSharpIcon} titulo="C#" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/c++`}><CardMenu icone={cPlusPlusIcon} titulo="C++" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/swift`}><CardMenu icone={swiftIcon} titulo="Swift" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/html`}><CardMenu icone={htmlIcon} titulo="Html" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/css`}><CardMenu icone={cssIcon} titulo="Css" tamanho="200px" /></Link></li>
                <li><Link to={`/categorias/sql`}><CardMenu icone={sqlIcon} titulo="Sql" tamanho="200px" /></Link></li>
              </ul>
            </li>
          </ul>
        </span>
      
      <span className='header__pesquisar'>
        <div className="header__searchBox">
          <input className="header__pesquisar__input" type="text" id="pesquisar" placeholder='search' onChange={(e) => setSearch(e.target.value)} ref={searchRef} />
          {searchIcon}
        </div>

        <span className="dropdown">
          {
            search.length > 0 && (
              <div className="dropdown__menu">
                {
                  filtered.length > 0 ? (
                    filtered.map((item, index) => {
                      return (
                        <div className="card" key={index} onClick={(e) => {
                          searchRef.current.value = item.titulo;
                          setSearch("");
                          navigate(`/posts/${item.id}/${item.titulo.toLowerCase().replace(/ /g, "-")}`);
                          document.getElementById('pesquisar').value = "";
                        }}>
                          <p>{item.titulo}</p>
                        </div>
                      );
                    })
                  ) : (
                    <div className="card">Não encontrado</div>
                  )}
              </div>
            )
          }
        </span>        
      </span>

      <span className="header__postar">
        {
          user ? <Link to="/postar">Postar</Link> : <></>
        }
      </span>

      <span className="header_avatar">
<<<<<<< HEAD
        <button className='header_button' onClick={() => setShowModal(true)}>
=======
        <button>
>>>>>>> parent of 7d0bf02 (Atualizações cardPostagem, criação do favoritos)
          <svg xmlns="http://www.w3.org/2000/svg"  width="30" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </button>
      </span>

      </span>
    </header>
  );
};

export default Header;