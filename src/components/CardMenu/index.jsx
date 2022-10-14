import PropTypes from 'prop-types';
import React from "react";
import '../../styles/components/cardMenu.scss';

const CardMenu = ({icone, titulo}) => {
  return (
    <span className="cardMenu">
      {icone}
      <p className="cardMenu__titulo">{titulo}</p>
    </span>
  )
}

CardMenu.prototype = {
  icone: PropTypes.node,
  titulo: PropTypes.string,
}

export default CardMenu;
