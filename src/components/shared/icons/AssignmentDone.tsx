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
      d="M19,3H14.82A2.988,2.988,0,0,0,9.18,3H5A2.006,2.006,0,0,0,3,5V19a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3ZM12,3a1,1,0,1,1-1,1A1,1,0,0,1,12,3ZM10,17,6,13l1.41-1.41L10,14.17l6.59-6.59L18,9Z"
      fill={props.fill ? props.fill : '#000'}
    />
  </svg>
);

export default SVG;
