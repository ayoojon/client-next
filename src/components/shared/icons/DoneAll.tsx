import React from 'react';
import { IconProps } from '.';

const SVG = (props: IconProps) => (
  <svg
    width={props.width ? props.width : '100%'}
    style={props.style}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon w-auto ${props.className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0,0H24V24H0Z" />
    <path
      d="M18,7,16.59,5.59l-6.34,6.34,1.41,1.41Zm4.24-1.41L11.66,16.17,7.48,12,6.07,13.41,11.66,19l12-12ZM.41,13.41,6,19l1.41-1.41L1.83,12Z"
      fill={props.fill ? props.fill : '#000'}
    />
  </svg>
);

export default SVG;
