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
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M7 15h7v2H7zM7 11h10v2H7zM7 7h10v2H7z" />
    <path d="M19 3h-4.18a2.988 2.988 0 00-5.64 0H5a1.752 1.752 0 00-.4.04 2.021 2.021 0 00-1.44 1.19A1.926 1.926 0 003 5v14a2.052 2.052 0 00.16.78 2.119 2.119 0 00.43.64 2.008 2.008 0 001.01.55A2.6 2.6 0 005 21h14a2.006 2.006 0 002-2V5a2.006 2.006 0 00-2-2zm-7-.25a.75.75 0 11-.75.75.755.755 0 01.75-.75zM19 19H5V5h14z" />
  </svg>
);

export default SVG;
