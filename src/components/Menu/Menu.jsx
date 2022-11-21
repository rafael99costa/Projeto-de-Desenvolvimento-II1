import React from "react";
import CardMenu from "../CardMenu/CardMenu";
import '../../styles/components/menu.scss';
import {javascriptIcon, typescriptIcon, javaIcon, pythonIcon, phpIcon, kotlinIcon, goIcon, rubyIcon, cSharpIcon, cPlusPlusIcon, htmlIcon, cssIcon} from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (

    <span className="menu">
      <span className="menu__container">
        <Link to={`/categorias/javascript`}><CardMenu icone={javascriptIcon} titulo="Javascript" /></Link>
        <Link to={`/categorias/typescript`}><CardMenu icone={typescriptIcon} titulo="Typescript" /></Link>
        <Link to={`/categorias/java`}><CardMenu icone={javaIcon} titulo="Java" /></Link>
        <Link to={`/categorias/python`}><CardMenu icone={pythonIcon} titulo="Python" /></Link>
        <Link to={`/categorias/php`}><CardMenu icone={phpIcon} titulo="Php" /></Link>
        <Link to={`/categorias/kotlin`}><CardMenu icone={kotlinIcon} titulo="Kotlin" /></Link>
        <Link to={`/categorias/go`}><CardMenu icone={goIcon} titulo="Go" /></Link>
        <Link to={`/categorias/ruby`}><CardMenu icone={rubyIcon} titulo="Ruby" /></Link>
        <Link to={`/categorias/c#`}><CardMenu icone={cSharpIcon} titulo="C#" /></Link>
        <Link to={`/categorias/c++`}><CardMenu icone={cPlusPlusIcon} titulo="C++" /></Link>
        <Link to={`/categorias/html`}><CardMenu icone={htmlIcon} titulo="Html" /></Link>
        <Link to={`/categorias/css`}><CardMenu icone={cssIcon} titulo="Css" /></Link>
      </span>      
    </span>
  )
};

export default Menu;
