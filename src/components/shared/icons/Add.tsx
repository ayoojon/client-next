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
    <path fill={props.fill ? props.fill : '#000'} d="M19,13H13v6H11V13H5V11h6V5h2v6h6Z" />
    <path d="M0,0H24V24H0Z" fill="none" />
  </svg>
);

export default SVG;
