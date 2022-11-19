import React from "react";
import CardMenu from "../CardMenu/CardMenu";
import '../../styles/components/menu.scss';
import {javascriptIcon, typescriptIcon, javaIcon, pythonIcon, phpIcon, kotlinIcon, goIcon, rubyIcon, cSharpIcon, cPlusPlusIcon, htmlIcon, cssIcon} from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <Link to={`/linguagens/javascript`}><CardMenu icone={javascriptIcon} titulo="Javascript" /></Link>
      <Link to={`/linguagens/typescript`}><CardMenu icone={typescriptIcon} titulo="Typescript" /></Link>
      <Link to={`/linguagens/java`}><CardMenu icone={javaIcon} titulo="Java" /></Link>
      <Link to={`/linguagens/python`}><CardMenu icone={pythonIcon} titulo="Python" /></Link>
      <Link to={`/linguagens/php`}><CardMenu icone={phpIcon} titulo="Php" /></Link>
      <Link to={`/linguagens/kotlin`}><CardMenu icone={kotlinIcon} titulo="Kotlin" /></Link>
      <Link to={`/linguagens/go`}><CardMenu icone={goIcon} titulo="Go" /></Link>
      <Link to={`/linguagens/ruby`}><CardMenu icone={rubyIcon} titulo="Ruby" /></Link>
      <Link to={`/linguagens/c#`}><CardMenu icone={cSharpIcon} titulo="C#" /></Link>
      <Link to={`/linguagens/c++`}><CardMenu icone={cPlusPlusIcon} titulo="C++" /></Link>
      <Link to={`/linguagens/html`}><CardMenu icone={htmlIcon} titulo="Html" /></Link>
      <Link to={`/linguagens/css`}><CardMenu icone={cssIcon} titulo="Css" /></Link>
    </div>
  )
};

export default Menu;
