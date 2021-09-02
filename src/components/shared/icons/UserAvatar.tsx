import React from 'react';
import { IconProps } from '.';

const SVG = (props: IconProps) => (
  <svg
    width={props.width ? props.width : '100%'}
    style={props.style}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon w-auto ${props.className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 118 121"
  >
    <g data-name="Group 1381">
      <path fill="#005059" d="M0 0h118v121H0z" data-name="Rectangle 2689" opacity=".55" />
      <g fill="#fff" data-name="Group 1380">
        <path d="M58 63.076a20.01 20.01 0 1120.01-20.01A20.032 20.032 0 0158 63.076z" data-name="Path 7004" />
        <path
          d="M89.126 98.945H26.873a2.223 2.223 0 01-2.223-2.223 29.161 29.161 0 018.454-20.574 28.525 28.525 0 0120.446-8.626h8.9a28.525 28.525 0 0120.449 8.626 29.161 29.161 0 018.451 20.574 2.223 2.223 0 01-2.224 2.223z"
          data-name="Path 7005"
        />
      </g>
    </g>
  </svg>
);

export default SVG;
