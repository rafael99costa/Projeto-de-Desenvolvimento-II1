import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardPublicacoes from "../components/CardPublicacoes/CardPublicacoes";
import { PublicacoesContext } from "../contexts/PublicacoesContext";

const Linguagens = () => {
  const { linguagem } = useParams();
  const { postsList } = useContext(PublicacoesContext);

  return (
    <>
      {
        postsList
          .filter((post) => post.categoria.toLowerCase() === linguagem)
          .map((post) => (
            <CardPublicacoes 
              key={post.id}
              id={post.id}
              titulo={post.titulo}
              categoria={post.categoria}
              descricao={post.descricao}
              link={post.link}
              notas={post.notas}
              data_postagem={post.data_postagem}
            />
          ))
      }
    </>
  )
}

export default Linguagens;