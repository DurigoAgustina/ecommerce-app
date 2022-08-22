import React from 'react';
import PropTypes from 'prop-types';
import './_Button.scss'

const Button = ({ children, icon, size, type  }) => {
  return (
    <button
      className={`button ${type} ${size}`}
    >
      { icon && <img src={icon} alt="icon" /> }
      { children }
    </button>
  )
}

// PropTypes

Button.propTypes = {
  icon: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

Button.defaultProps = {
  type: "primary",
  icon: false,
  size: "big",
}

export default Button
