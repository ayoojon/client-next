import React from 'react';
import { IconProps } from '.';

const SVG = (props: IconProps) => (
  <svg
    width={props.width ? props.width : '100%'}
    style={props.style}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon w-auto ${props.className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 63.199 63.199"
  >
    <path fill="none" d="M0 0h63.2v63.2H0zm0 0h63.2v63.2H0z"/>
    <path fill={props.fill ? props.fill : '#fff'} d="M43.687 19.961L26.333 37.314l-9.453-9.427-3.713 3.713 13.166 13.167L47.4 23.7zM31.6 5.267A26.333 26.333 0 1057.933 31.6 26.343 26.343 0 0031.6 5.267zm0 47.4A21.066 21.066 0 1152.667 31.6 21.061 21.061 0 0131.6 52.667z"/>
  </svg>
);

export default SVG;
