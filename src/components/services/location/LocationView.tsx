import React, { useState } from 'react';
import { s3FileUrl } from '../../../config';
import { LocationModal } from './LocationModal';
// import { SingleViewLocation } from './SingleViewLocation';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';

interface Props {
  data: any;
}

export const LocationView: React.FC<Props> = ({ data }) => {
  // const [isLocationModalOpen, setLocationModalState] = useState(false);
  const [locationModalData, setLocationModalData] = useState({});

  const [isVisible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const dataHandeler = (data: any) => {
    setLocationModalData({ data });
    // setLocationModalState(true);
    setVisible(true);
  };

  // const toggleDataModal = () => setLocationModalState(!isLocationModalOpen);

  return (
    <div className="flex flex-wrap -mx-2">
      {data.map((location: any, index: any) => (
        <div
          key={index}
          className="w-56 cursor-pointer rounded-b-md border-2 rounded-lg mx-2 mb-4 transition duration-300 ease-in-out hover:shadow-xl"
          onClick={() => {
            dataHandeler(location);
          }}
        >
          <div className="h-40 w-full overflow-hidden rounded-md">
            {/* <img
              className="inline-block w-full h-full object-cover"
              src={s3FileUrl + location.photos[0]}
              alt="location"
            /> */}
            <Image
              loader={imgLoader(s3FileUrl)}
              className="inline-block w-full h-full object-cover"
              src={location.photos[0]}
              alt="location"
              width="560"
              height="400"
            />
          </div>
          <div className="p-2">
            <h6 className="font-semibold text-xl pb-2">{location.title}</h6>
            <div className="">
              <span className="font-semibold text-primary">
                {Math.min(...location.sessions.map((item: any) => item.price.amount))} -{' '}
                {Math.max(...location.sessions.map((item: any) => item.price.amount))} BDT
              </span>{' '}
              <span className="text-sm text-customGray-550">/ Day</span>
            </div>
          </div>
        </div>
      ))}

      {/* <SingleViewLocation isOpen={isLocationModalOpen} onClose={toggleDataModal} data={locationModalData} /> */}
      {Object.keys(locationModalData).length !== 0 && (
        <LocationModal isVisible={isVisible} setVisible={handleClose} data={locationModalData} />
      )}
    </div>
  );
};
