import React from 'react';

interface Props {
  amenities: any;
}

export const AmenitiesListView: React.FC<Props> = ({ amenities }) => {
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="ml-2">
        {amenities.map((item: any, index: any) => (
          <div className="mb-4" key={index}>
            <div className="flex flex-col">
              <div className="flex">
                <div className="">
                  <h6 className="font-normal text-base mb-2">{item.title}</h6>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              {item.options.map((obj: any, index: any) => (
                <div className="flex mx-2" key={index}>
                  <span className="text-sm bg-gray-200 text-gray-700 rounded-2xl	 px-2 py-1 "> {obj.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
