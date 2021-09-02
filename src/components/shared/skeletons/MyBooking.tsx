import React from 'react';

interface IProps {
  isSmall?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const SkeletonBookingPage: React.FC<IProps> = ({ isSmall = false, className = '', style = {} }) => {
  return (
    <div className="px-6 py-4 my-2 border-2 rounded-md">
      <div className={` ${className}`} style={style}>
        <div className="flex justify-between mb-2">
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between mt-4">
          <div className="flex flex-col flex-wrap mb-2">
            <div className="flex flex-wrap">
              <div className="mx-4">
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="my-2">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-40 mt-2"></div>
                </div>
                <div className="my-2 mt-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-40 mt-2"></div>
                </div>
                <div className="my-2 mt-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-40 mt-2"></div>
                </div>
              </div>
              <div className="mx-4">
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="my-2">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-40 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-wrap justify-center sm:flex-col transition duration-300 ease-in-out mt-2 sm:mt-0">
            <div className="">
              <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
            </div>
            <div className="">
              <div className="my-2">
                <div className="h-8 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
            <div className="">
              <div className="h-4 bg-gray-200 rounded w-32 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
