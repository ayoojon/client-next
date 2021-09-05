import React from 'react';

interface InputHeaderProps {
  label: string;
  className?: string;
  marginBottom?: boolean;
}
export const InputHeader: React.FC<InputHeaderProps> = ({ label, className = '', marginBottom = true }) => {
  return <h6 className={`font-semibold leading-7${marginBottom ? 'mb-1' : ''} ${className} `}>{label}</h6>;
};
