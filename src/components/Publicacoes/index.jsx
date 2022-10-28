import React, { useContext } from "react";
import CardPublicacoes from "../CardPublicacoes";
import '../../styles/components/publicacoes.scss'
import { PublicacoesContext } from "../../contexts/PublicacoesContext";

const Publicacoes = () => {
  const {publicacoes} = useContext(PublicacoesContext)

  return (
    <div className="publicacoes">
      <div className="publicacoes__menu">
        <div className="publicacoes__botao">Recentes</div>
        <div className="publicacoes__botao">Destaques</div>
      </div>

      <div className="publicacoes__bloco">
        {
          publicacoes.map(publicacao => (
            <CardPublicacoes key={publicacao.id}
              id={publicacao.id}
              link={publicacao.link}
              titulo={publicacao.titulo}
              subtitulo={publicacao.subtitulo}
              nota={publicacao.nota}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Publicacoes;
