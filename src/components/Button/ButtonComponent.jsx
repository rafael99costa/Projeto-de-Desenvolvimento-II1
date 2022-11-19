import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/components/button.scss';

function Button({children, versao, type}) {
  return (
    <button type={type} className={`btn btn--${versao}`} >{children}</button>
  )
}

Button.defaultProps = {
  versao: 'primario',
  type: 'button',
}

Button.prototype = {
  children: PropTypes.node.isRequired,
  versao: PropTypes.string,
  type: PropTypes.string,
}

export default Button;