import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles/components/cardPublicacoes.scss';
import Button from '../Button/ButtonComponent';

const CardPublicacoes = ({id, titulo, categoria, descricao, link, notas, data_postagem}) => {
  const [mediaNota, setMediaNota] = useState(0);
  const linkUrl = useRef(titulo.toLowerCase().replace(/ /g, "-"));

  const media_nota = () => {
    setMediaNota(Object.values(notas).map(n => n.nota).reduce((previousValue, currentValue) => previousValue + currentValue, 0) / Object.values(notas).length);
  };

  // Fix - Disable the ESLint rule
  useEffect(() => {
    media_nota();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="cardPublicacoes">
      <div className="cardPublicacoes__container">
        <h1 className="cardPublicacoes__titulo"><Link to={`/posts/${id}/${linkUrl.current}`}>{titulo}</Link></h1>
        <h3 className="cardPublicacoes__subtitulo">{categoria}</h3>
        <h2 className="cardPublicacoes__nota">
          { mediaNota.toFixed(1) }/10
        </h2>
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
