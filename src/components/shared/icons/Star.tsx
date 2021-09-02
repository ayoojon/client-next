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
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 17.662l6.42 3.921-1.7-7.389 5.669-4.972-7.469-.641L12 1.612 9.081 8.581l-7.469.641 5.672 4.972-1.7 7.389z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default SVG;
