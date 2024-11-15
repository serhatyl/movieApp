import {IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  icon?: IconDefinition;
}

const OctButton = ({children, type, icon, ...props}: Props) => {
  return (
    <button type={type} {...props} className="oct-button">
      {icon && <FontAwesomeIcon icon={icon} data-testid="icon" />}
      {children}
    </button>
  );
};

export default OctButton;
