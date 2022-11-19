import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Publicacoes from "../components/Publicacoes/Publicacoes";
import '../styles/pages/home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />

      <main className="home__conteudo">
        <Link to="/postar">Postar</Link>
        <Menu />
        <Publicacoes />
      </main>
    </div>
  )
}

export default Home;
