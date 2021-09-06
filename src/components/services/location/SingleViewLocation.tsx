import React from 'react';
import { s3FileUrl } from '../../../config';
import { time24To12 } from '../../../utils';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';

interface ModalProps {
  isOpen: boolean;
  data: any;
  onClose: () => void;
}

export const SingleViewLocation: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  const location = data.data;
  return (
    <div>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
              <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                <p className="font-semibold text-gray-800">{location.title}</p>
                <button type="button" onClick={onClose}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <div className="flex flex-col px-6 py-4 bg-white rounded-bl-lg rounded-br-lg">
                <div className="h-64 overflow-hidden rounded-md">
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
                    width="800"
                    height="640"
                  />
                </div>
                <div className="py-2">
                  <div className="flex flex-wrap my-3 border-b mb-2">
                    <div className="mr-14">
                      <h6 className="font-medium mb-1">Guest Capacity</h6>
                      <p className="text-customGray-550">{location.capacity}</p>
                    </div>
                    <div>
                      <h6 className="font-medium mb-1">Space Size</h6>
                      <div className=" flex flex-wrap items-end">
                        <p className="text-customGray-550 mr-2">{location.size.amount}</p>
                        <span className="text-customGray-550 text-sm">{location.size.unit}</span>
                      </div>
                    </div>
                  </div>
                  {/* <h6 className="font-semibold text-2xl pb-2">{location.title}</h6> */}
                  <div className="flex flex-wrap pb-3 border-b">
                    {location.sessions.map((p: any) => (
                      <div key={p._id} className="mr-8 p-2">
                        <small className="font-medium text-base text-primary">
                          {time24To12(p.startTime)}
                          {' - '}
                          {time24To12(p.endTime)}
                        </small>
                        <div>
                          <span className="text-base uppercase">
                            {p.price.amount} {p.price.currency}
                          </span>{' '}
                          <span className="text-customGray-550">/ Day</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
