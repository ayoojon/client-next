import React from 'react';
import { s3FileUrl } from '../../../config';

interface ModalProps {
  isOpen: boolean;
  data: any;
  onClose: () => void;
}

export const SingleViewPakage: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  const item = data.data;

  const createMarkup = (data: any) => {
    return {
      __html: data,
    };
  };
  return (
    <div>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
              <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                <p className="font-semibold text-gray-800">{item.title}</p>
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
                  <img className="inline-block w-full h-full object-cover" src={s3FileUrl + item.image} alt="product" />
                </div>
                <div className="py-2">
                  {/* <h6 className="font-semibold text-2xl pb-2">title</h6> */}
                  <div className="flex flex-wrap p-4 border-b border-t">
                    <span className="font-semibold text-lg text-primary uppercase">
                      {item.price.amount} {item.price.currency}
                    </span>
                  </div>
                  <div className="flex flex-wrap my-3">
                    <div className="mr-14">
                      <h6 className="font-medium mb-1">Description</h6>
                      {/* <p className="text-customGray-550">{item.description}</p> */}
                      <div
                        className="text-customGray-550 ml-2"
                        dangerouslySetInnerHTML={createMarkup(item.description)}
                      />
                    </div>
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
