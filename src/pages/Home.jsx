import React from "react";
import Menu from "../components/Menu/Menu";
import Publicacoes from "../components/Publicacoes/Publicacoes";
import '../styles/pages/home.scss';

const Home = () => {
  return (
    <div className="home">
      <main className="home__conteudo">
        <Menu />
        <Publicacoes />
      </main>
    </div>
  )
}

export default Home;
