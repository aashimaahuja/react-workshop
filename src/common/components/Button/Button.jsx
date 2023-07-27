import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ label, size, variant, backgroundColor, onClick }) => {
  const buttonPadding =
    size == 'small'
      ? 'button--small'
      : size == 'medium'
      ? 'button--medium'
      : 'button--large';

  return (
    <button
      type="button"
      className={`button ${
        variant === 'primary' ? 'button--primary' : 'button--secondary'
      } ${buttonPadding}`}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  variant: 'primary',
  size: 'medium',
  onClick: undefined,
};
