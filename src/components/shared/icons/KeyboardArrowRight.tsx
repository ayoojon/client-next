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
    <path d="M8.59,16.59,13.17,12,8.59,7.41,10,6l6,6-6,6Z" />
    <path d="M0,0H24V24H0Z" fill="none" />
  </svg>
);

export default SVG;
