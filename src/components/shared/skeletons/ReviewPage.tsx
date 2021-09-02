import React from 'react';

interface IProps {
  isSmall?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const SkeletonReviewPage: React.FC<IProps> = ({ isSmall = false, className = '', style = {} }) => {
  return (
    <div className={` ${className}`} style={style}>
      <div className="rounded-full bg-gray-200 h-12 w-12"></div>
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
};
