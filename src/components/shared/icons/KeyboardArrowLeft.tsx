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
    <path d="M15.41,16.59,10.83,12l4.58-4.59L14,6,8,12l6,6Z" />
    <path d="M0,0H24V24H0Z" fill="none" />
  </svg>
);

export default SVG;
