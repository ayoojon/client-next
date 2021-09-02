import React from 'react';
import { IconProps } from '.';

const SVG = (props: IconProps) => (
  <svg
    width={props.width ? props.width : '100%'}
    style={props.style}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon w-auto ${props.className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 36 36"
  >
    <path d="M0 0h36v36H0z" fill="none" />
    <path fill={props.fill ? props.fill : '#000'} d="M24.843 16.086H3.184v3.827h21.659v5.74l7.2-7.654-7.2-7.653z" />
  </svg>
);

export default SVG;
