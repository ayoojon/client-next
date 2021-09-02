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
    <path d="M17.728 12.78a6.527 6.527 0 00.05-.78 4.932 4.932 0 00-.06-.78l1.69-1.32a.413.413 0 00.1-.51l-1.6-2.77a.407.407 0 00-.49-.18l-1.99.8a5.859 5.859 0 00-1.35-.78l-.3-2.12a.4.4 0 00-.4-.34h-3.2a.389.389 0 00-.39.34l-.3 2.12a6.015 6.015 0 00-1.35.78l-1.99-.8a.4.4 0 00-.49.18l-1.6 2.77a.388.388 0 00.1.51l1.69 1.32a4.713 4.713 0 00-.01 1.56l-1.69 1.32a.413.413 0 00-.1.51l1.6 2.77a.407.407 0 00.49.18l1.99-.8a5.859 5.859 0 001.35.78l.3 2.12a.407.407 0 00.4.34h3.2a.382.382 0 00.39-.34l.3-2.12a6.015 6.015 0 001.35-.78l1.99.8a.4.4 0 00.49-.18l1.6-2.77a.388.388 0 00-.1-.51l-1.67-1.32zM11.778 15a3 3 0 113-3 3.009 3.009 0 01-3 3z" />
  </svg>
);

export default SVG;
