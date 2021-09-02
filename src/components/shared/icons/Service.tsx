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
    <path
      fillRule="evenodd"
      d="M14 6V4h-4v2zM4 8v11h16V8zm16-2a1.993 1.993 0 012 2v11a1.993 1.993 0 01-2 2H4a1.993 1.993 0 01-2-2l.01-11A1.985 1.985 0 014 6h4V4a1.993 1.993 0 012-2h4a1.993 1.993 0 012 2v2z"
    />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);

export default SVG;
