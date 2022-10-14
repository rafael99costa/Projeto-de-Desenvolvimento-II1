import React from "react";
import CardMenu from "../CardMenu";
import '../../styles/components/menu.scss';
import {javascriptIcon, typescriptIcon, javaIcon, pythonIcon, phpIcon, kotlinIcon, goIcon, rubyIcon, cSharpIcon, cPlusPlusIcon, htmlIcon, cssIcon} from "../../assets/icons/icons";

const Menu = () => {
  return (
    <div className="menu">
      <CardMenu icone={javascriptIcon} titulo="Javascript" />
      <CardMenu icone={typescriptIcon} titulo="Typescript" />
      <CardMenu icone={javaIcon} titulo="Java" />
      <CardMenu icone={pythonIcon} titulo="Python" />
      <CardMenu icone={phpIcon} titulo="Php" />
      <CardMenu icone={kotlinIcon} titulo="Kotlin" />
      <CardMenu icone={goIcon} titulo="Go" />
      <CardMenu icone={rubyIcon} titulo="Ruby" />
      <CardMenu icone={cSharpIcon} titulo="C#" />
      <CardMenu icone={cPlusPlusIcon} titulo="C++" />
      <CardMenu icone={htmlIcon} titulo="Html" />
      <CardMenu icone={cssIcon} titulo="css" />

    </div>
  )
}

export default Menu;
