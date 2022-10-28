import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardPublicacoes from "../components/CardPublicacoes"
import { PublicacoesContext } from "../contexts/PublicacoesContext"

const Linguagens = () => {
  const { linguagem } = useParams();
  const {publicacoes} = useContext(PublicacoesContext)

  return (
    <>
      {
        publicacoes
          .filter((list) => list.subtitulo.toLowerCase() == linguagem)
          .map((list) => (
            <CardPublicacoes key={list.id}
              id={list.id}
              link={list.link}
              titulo={list.titulo}
              subtitulo={list.subtitulo}
              nota={list.nota}
            />
          ))
      }
    </>
  )
}


export default Linguagens;