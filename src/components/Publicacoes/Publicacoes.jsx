import React, { useContext } from "react";
import CardPublicacoes from "../CardPublicacoes/CardPublicacoes";
import '../../styles/components/publicacoes.scss'
import { PublicacoesContext } from "../../contexts/PublicacoesContext";

const Publicacoes = () => {
  const { postsList } = useContext(PublicacoesContext)
  
  // id
  // titulo
  // categoria
  // descricao
  // link
  // notas  
  // data_postagem

  return (
    <div className="publicacoes">
      {/* <div className="publicacoes__menu">
        <div className="publicacoes__botao">Recentes</div>
        <div className="publicacoes__botao">Destaques</div>
      </div> */}

      <div className="publicacoes__bloco">
        {
          postsList.map(post => (
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
      </div>
    </div>
  )
}

export default Publicacoes;
