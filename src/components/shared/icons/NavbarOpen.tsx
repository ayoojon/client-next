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
      fill={props.fill ? props.fill : 'A0AEC0'}
      d="M18.2782 16.864C18.6687 17.2545 18.6687 17.8877 18.2782 18.2782C17.8877 18.6687 17.2545 18.6687 16.864 18.2782L12.0355 13.4497L7.20711 18.2782C6.81658 18.6687 6.18342 18.6687 5.79289 18.2782C5.40237 17.8877 5.40237 17.2545 5.79289 16.864L10.6213 12.0355L5.79289 7.20711C5.40237 6.81658 5.40237 6.18342 5.79289 5.79289C6.18342 5.40237 6.81658 5.40237 7.20711 5.79289L12.0355 10.6213L16.864 5.79289C17.2545 5.40237 17.8877 5.40237 18.2782 5.79289C18.6687 6.18342 18.6687 6.81658 18.2782 7.20711L13.4497 12.0355L18.2782 16.864Z"
    />
  </svg>
);

export default SVG;
