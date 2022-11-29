import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/components/button.scss';

function Button({ children, versao, type, click }) {
  return (
    <button type={type} onClick={click} className={`btn btn--${versao}`} >{children}</button>
  )
}

Button.defaultProps = {
  versao: 'primario',
  type: 'button',
  click: () => console.log(),
}

Button.prototype = {
  children: PropTypes.node.isRequired,
  versao: PropTypes.string,
  type: PropTypes.string,
}

export default Button;