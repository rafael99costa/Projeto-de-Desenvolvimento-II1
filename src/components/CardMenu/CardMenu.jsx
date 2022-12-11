import PropTypes from 'prop-types';
import React from "react";
import '../../styles/components/cardMenu.scss'

const CardMenu = ({icone, titulo, tamanho}) => {
  const cardMenuStyles = {
    minWidth: tamanho,
  }

  return (
    <span className="cardMenu" style={cardMenuStyles}>
      {icone}
      <p className="cardMenu__titulo">{titulo}</p>
    </span>
  )
}

CardMenu.defaultProps = {
  tamanho: '65px',
}

CardMenu.prototype = {
  icone: PropTypes.node,
  titulo: PropTypes.string,
  tamanho: PropTypes.string,
}

export default CardMenu;
