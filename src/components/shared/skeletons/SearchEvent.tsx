import React from 'react';

interface IProps {
  isSmall?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const SkeletonSearchEvent: React.FC<IProps> = ({ isSmall = false, className = '', style = {} }) => {
  return (
    <div className={` ${className}`} style={style}>
      <div className="aspect-ratio--16x9">
        <div className="aspect-ratio__inner-wrapper rounded-2xl bg-gray-200 transition duration-500 ease-in-out transform"></div>
      </div>
      {isSmall ? (
        <div className="h-4 w-3/5 bg-gray-200 rounded my-3" />
      ) : (
        <div className="h-4 w-4/5 bg-gray-200 rounded my-3" />
      )}
      <div className="flex flex-wrap min-w-0 -m-1">
        <div className="h-8 w-16 bg-gray-200 rounded-full m-1" />
        <div className="h-8 w-16 bg-gray-200 rounded-full m-1" />
        {!isSmall && <div className="h-8 w-16 bg-gray-200 rounded-full m-1" />}
      </div>
    </div>
  );
};
