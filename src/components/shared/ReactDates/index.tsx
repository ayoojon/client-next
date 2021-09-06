import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import Icon from '../icons';

export const NavPrevIcon = () => (
  <IconButton
    color="primary"
    aria-label="nevPrev element"
    component="div"
    style={{
      position: 'absolute',
      top: '13px',
      left: '22px',
    }}
  >
    <Icon name="keyboard-arrow-left" className="h-6" />
  </IconButton>
);

export const NavNextIcon = () => (
  <IconButton
    color="primary"
    aria-label="nevNext element"
    component="div"
    style={{
      position: 'absolute',
      top: '13px',
      right: '22px',
    }}
  >
    <Icon name="keyboard-arrow-right" className="h-6" />
  </IconButton>
);

interface CalenderInfoPanelProps {
  text?: JSX.Element;
}

export const CalenderInfoPanel: FC<CalenderInfoPanelProps> = ({
  text = <span>&#x2755; Some useful info here</span>,
}) => (
  <div
    style={{
      padding: '10px 21px',
      borderTop: '1px solid #dce0e0',
      color: '#484848',
    }}
  >
    {text}
  </div>
);

export const breakpointsQueries: {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
} = {
  xs: '(min-width: 360px) and (max-width: 639.98px)',
  sm: '(min-width: 640px) and (max-width: 767.98px)',
  md: '(min-width: 768px) and (max-width: 1023.98px)',
  lg: '(min-width: 1024px) and (max-width: 1279.98px)',
  xl: '(min-width: 1280px)',
};

export const getDaySize = (matchPoints: {}) => {
  let size = 30;

  if (Object.keys(matchPoints).length !== 0) {
    const modifiedMatchPoints = matchPoints as {
      xs: boolean;
      sm: boolean;
      md: boolean;
      lg: boolean;
      xl: boolean;
    };

    if (modifiedMatchPoints.xs) size = 40;
    if (modifiedMatchPoints.sm || modifiedMatchPoints.md || modifiedMatchPoints.lg || modifiedMatchPoints.xl) size = 57;
  }

  return size;
};
