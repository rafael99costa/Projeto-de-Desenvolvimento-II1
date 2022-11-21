import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import '../../styles/components/cardPublicacoes.scss';
import Button from '../Button/ButtonComponent';
import { addFavoriteIcon, removeFavoriteIcon, usuariosIcon } from "../../assets/icons/icons";

const CardPublicacoes = ({id, titulo, categoria, descricao, link, notas, data_postagem, usuario}) => {
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
        <span className="cardPublicacoes__titulo"><Link to={`/posts/${id}/${linkUrl.current}`}>{titulo}</Link></span>

        <span className="cardPublicacoes__categoria">{categoria[0].toUpperCase() + categoria.substr(1)}</span>
        
        <span className="cardPublicacoes__nota">
          { mediaNota.toFixed(1) }/10
        </span>
        <span className="cardPublicacoes__botao">
          <Link to={link}><Button type="button">Acessar conteúdo</Button></Link>
        </span>

        <span className='cardPublicacoes__perfil'>
          <img src={`${usuario.perfil}`} alt="perfil" />
          <span>{usuario.user}</span>
        </span>

        <span className='cardPublicacoes__favoriteIcon'>
          {addFavoriteIcon}
        </span>

        <span className='cardPublicacoes__quantidadeUsuarios'>
          {usuariosIcon}
          <span>{Object.keys(notas).length}</span>
        </span>
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
