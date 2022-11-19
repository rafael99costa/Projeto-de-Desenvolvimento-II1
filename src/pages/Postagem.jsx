import React, { useContext } from "react";
import {  useParams } from 'react-router-dom';
import { PublicacoesContext } from "../contexts/PublicacoesContext";


const Postagem = () => {
  const { publicacao } = useParams();
  const { postsList } = useContext(PublicacoesContext);

  return (
    <>
      {
        postsList
          .filter((post) => post.id === publicacao)
          .map((post) => (
            <div key={post.id}>
              <h1>{post.titulo}</h1>
              <h1>{post.categoria}</h1>
            </div>
          ))
      }
    </>
  )

};

export default Postagem;