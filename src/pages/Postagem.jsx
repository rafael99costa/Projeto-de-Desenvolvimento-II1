import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import Header from "../components/Header";
import { PublicacoesContext } from "../contexts/PublicacoesContext";


const Postagem = () => {
  const { publicacao } = useParams();
  const { publicacoes } = useContext(PublicacoesContext);

  return (
    <>
      {/* <Header /> */}
      {
        publicacoes
          .filter((list) => list.id == publicacao)
          .map((list) => (
            <div key={list.id}>
              <h2>{list.titulo}</h2>
              <h3>{list.descricao}</h3>
            </div>
          ))
      }
    </>
  )

};

export default Postagem;