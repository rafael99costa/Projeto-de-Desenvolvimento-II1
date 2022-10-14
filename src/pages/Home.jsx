import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Publicacoes from "../components/Publicacoes";
import '../styles/pages/home.scss';

const Home = () => {
  return (
    <div className="home">
      <Header />

      <main className="home__conteudo">
        <Menu />
        <Publicacoes />
      </main>
    </div>
  )
}

export default Home;
