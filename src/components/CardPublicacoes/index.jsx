import PropTypes from 'prop-types';
import React from "react";
import '../../styles/components/cardPublicacoes.scss'
import Button from "../Button";

const CardPublicacoes = ({link, titulo, subtitulo, nota}) => {
  return (
    <div className="cardPublicacoes">
      <div class="cardPublicacoes__container">
        <a className="cardPublicacoes__titulo" href={link}>
          <h2><b>{titulo}</b></h2>
        </a>
        <h3 className="cardPublicacoes__subtitulo">{subtitulo}</h3>
        <h2 className="cardPublicacoes__nota">{nota}</h2>
        <a className="cardPublicacoes__botao" href={link}>
          <Button type="button">Acessar conteúdo</Button>
        </a>
      </div>
    </div>
  )
}

CardPublicacoes.prototype = {
  link: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
  nota: PropTypes.number,
}

export default CardPublicacoes;
