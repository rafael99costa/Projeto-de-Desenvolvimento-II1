import PropTypes from 'prop-types';
import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/components/cardPublicacoes.scss'
import Button from "../Button";

const CardPublicacoes = ({id, link, titulo, subtitulo, nota}) => {
  return (
    <div className="cardPublicacoes">
      <div class="cardPublicacoes__container">
        {/* <a className="cardPublicacoes__titulo" href={link}>
          <h2><b>{titulo}</b></h2>
        </a> */}

        {/* <h1 className="cardPublicacoes__titulo">
          <Link to={`/posts/${id}`}>{titulo}</Link>
        </h1> */}

        <h1 className="cardPublicacoes__titulo"><Link to={`/posts/${id}`}>{titulo}</Link></h1>
        <h3 className="cardPublicacoes__subtitulo">{subtitulo}</h3>
        <h2 className="cardPublicacoes__nota">{nota}/10</h2>
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
