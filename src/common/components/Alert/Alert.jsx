import React from 'react';
import PropTypes from 'prop-types';
import './alert.css';

export const Alert = ({ title, description, severity, variant }) => {
  let alerSeverity = '';
  switch (severity) {
    case 'success':
      alerSeverity = 'alert--success';
      break;
    case 'error':
      alerSeverity = 'alert--error';
      break;
    case 'warning':
      alerSeverity = 'alert--warning';
      break;
    case 'info':
      alerSeverity = 'alert--info';
  }
  return (
    <div
      className={`alert ${
        variant === 'outlined' ? 'alert--outlined' : 'alert--filled'
      } ${alerSeverity}`}
    >
      <h3 className="alert--title">{title}</h3>
      <p className="alert--description">{description}</p>
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  variant: PropTypes.oneOf(['filled', 'outlined']),
};

Alert.defaultProps = {
  variant: 'filled',
};
