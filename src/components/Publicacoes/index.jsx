import React from "react";
import CardPublicacoes from "../CardPublicacoes";
import '../../styles/components/publicacoes.scss'

const Publicacoes = () => {
  return (
    <div className="publicacoes">
      <div className="publicacoes__menu">
        <div className="publicacoes__botao">Recentes</div>
        <div className="publicacoes__botao">Destaques</div>
      </div>

      <div className="publicacoes__bloco">
        <CardPublicacoes 
          link="https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2"
          titulo="Entendendo Promises de uma vez"
          subtitulo="Javascript"
          nota="Nota: 9,3/10"
        />

        <CardPublicacoes 
          link="https://medium.com/@henrique.weiand/react-defaultprops-proptypes-plano-de-aula-vi-2ac0f990cdd9"
          titulo="React — DefaultProps & PropTypes"
          subtitulo="Javascript"
          nota="Nota: 9,8/10"
        />

        <CardPublicacoes 
          link="https://javascript.info/"
          titulo="The Modern JavaScript Tutorial"
          subtitulo="Javascript"
          nota="Nota: 9,9/10"
        />

        <CardPublicacoes 
          link="https://javascript.info/"
          titulo="The Modern JavaScript Tutorial"
          subtitulo="Javascript"
          nota="Nota: 9,9/10"
        />
      </div>
    </div>
  )
}

export default Publicacoes;
