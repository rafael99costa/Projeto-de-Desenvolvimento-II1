import React, { useContext } from "react";
import {  useParams } from 'react-router-dom';
import { PublicacoesContext } from "../contexts/PublicacoesContext";
import CardPostagem from "../components/CardPostagem/CardPostagem";

const Postagem = () => {
  const { publicacao } = useParams();
  const { postsList } = useContext(PublicacoesContext);

  return (
    <>
      {
        postsList
          .filter((post) => post.id === publicacao)
          .map((post) => (
            <CardPostagem key={post.id} post={post}/>
          ))
      }
    </>
  )
};

export default Postagem;