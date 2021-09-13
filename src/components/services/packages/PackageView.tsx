import React, { useState } from 'react';
import { s3FileUrl } from '../../../config';
import { PackageModal } from './PackageModal';
// import { SingleViewPakage } from './SingleViewPakage';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
interface Props {
  data: any;
}

export const PackageView: React.FC<Props> = ({ data }) => {
  // const [isPakageModalOpen, setPakageModalState] = useState(false);
  const [pakageModalData, setPakageModalData] = useState({});

  const [isVisible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const dataHandeler = (data: any) => {
    setPakageModalData({ data });
    // setPakageModalState(true);
    setVisible(true);
  };
  // const toggleDataModal = () => setPakageModalState(!isPakageModalOpen);

  const createMarkup = (data: any) => {
    return {
      __html: data,
    };
  };
  return (
    <div className="flex flex-wrap -mx-2">
      {data.map((item: any, index: any) => (
        // <div
        //   key={index}
        //   className=" h-12 w-12 border-2 rounded-md	 cursor-pointer rounded-b-md mx-2 mb-4 transition duration-300 ease-in-out hover:shadow-xl"
        // >
        //   <div className="flex justify-between mb-5">
        //     <span className="font-semibold text-lg text-primary">
        //       {item.price.amount} {item.price.currency}
        //     </span>
        //   </div>
        // </div>

        <div
          key={index}
          className=" h-80 flex flex-col justify-between w-64  p-4  mb-2 bg-white border-2 border-gray-200 rounded-xl	 lg:mx-4 mx-2 "
        >
          <div className="flex-shrink-0">
            <div className="flex justify-between mb-5">
              <div className=" flex flex-col">
                <span className="font-normal text-base text-primary uppercase">
                  {item.price.amount} {item.price.currency}
                </span>
                <p className="font-medium text-primary">{item.title}</p>
              </div>
              <div className="flex-shrink-0">
                {/* <img className="w-16 h-16 rounded-full mx-auto" src={s3FileUrl + item.image} alt="" /> */}
                <Image
                  loader={imgLoader(s3FileUrl)}
                  className="rounded-full mx-auto"
                  src={item.image}
                  alt="package"
                  width="70"
                  height="70"
                />
              </div>
            </div>
            {/* <p>{item.description}</p> */}
            <div dangerouslySetInnerHTML={createMarkup(item.description)} />
          </div>
          {/* <div className="mt-1 flex-shrink-0"></div> */}
          <div className="flex justify-end mt-24">
            <button
              className="text-primary"
              onClick={() => {
                dataHandeler(item);
              }}
            >
              View Details
            </button>
          </div>
        </div>
      ))}

      {/* <SingleViewPakage isOpen={isPakageModalOpen} onClose={toggleDataModal} data={pakageModalData} /> */}
      {Object.keys(pakageModalData).length !== 0 && (
        <PackageModal isVisible={isVisible} setVisible={handleClose} data={pakageModalData} />
      )}
    </div>
  );
};
