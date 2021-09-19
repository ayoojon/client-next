import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { ayoojonApi, s3FileUrl } from '../../../config';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { IService } from '@/types/service';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import { useRouter } from 'next/router';

interface ParamTypes {
  serviceURL: string;
  albumId: string;
}
const fetchAlbum = async (serviceURL: string, albumId: string) => {
  const response = await ayoojonApi.get(`services/${serviceURL}/albums/${albumId}`);

  return response.data.data;
};

const AlbumPhotoList = () => {
  const params = useParams<ParamTypes>();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const router = useRouter();

  const handleClickImage = (image: any, index: any) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const { data, isLoading } = useQuery<IService['albums'][0], Error>(
    ['services-album', `${params.serviceURL}- ${params.albumId}`],
    () => fetchAlbum(params.serviceURL, params.albumId),
    {
      refetchOnWindowFocus: false,
      // The query will not execute until the eventUrl exists
      enabled: !!params.serviceURL,
    },
  );
  const createMarkup = (data: any) => {
    return {
      __html: data,
    };
  };

  return (
    <div className="container mx-auto mt-12 px-6">
      {/* <AyoojonBackdrop open={isLoading} /> */}

      <button className="bg-primary p-1 text-white rounded" onClick={() => router.back()}>
        Go Back
      </button>
      {/* <div className="border-b my-8 p-2">
        <p>title:{data?.title}</p>
        <span>description:{data?.description}</span>
      </div> */}
      <div className="py-6 border-b border-gray-300 last:border-0">
        <div className=" mb-2">
          <h6 className="font-medium text-xl mb-2">title</h6>
          <p>{data?.title}</p>
        </div>
        <div className="">
          <h6 className="font-medium text-xl mb-2">Description</h6>
          <div dangerouslySetInnerHTML={createMarkup(data?.description)} />
        </div>
      </div>
      <div className="flex flex-wrap -m-3 mt-2">
        {data?.photos.map((photo, index) => (
          <div key={index} className="h-64 w-full sm:w-80 m-3 rounded-2xl border overflow-hidden	">
            {/* <img
              src={s3FileUrl + photo}
              alt=""
              className="h-full w-full object-cover"
              onClick={() => handleClickImage(photo, index)}
            /> */}
            <Image
              loader={imgLoader(s3FileUrl)}
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={photo}
              alt="user-img"
              width="100%"
              height="100%"
              onClick={() => handleClickImage(photo, index)}
            />
          </div>
        ))}
      </div>

      {isOpen && data && data.photos.length > 0 && (
        <Lightbox
          mainSrc={s3FileUrl + data.photos[photoIndex]}
          nextSrc={data.photos[(photoIndex + 1) % data.photos.length]}
          prevSrc={data.photos[(photoIndex + data.photos.length - 1) % data.photos.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + data.photos.length - 1) % data.photos.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % data.photos.length)}
        />
      )}
    </div>
  );
};
export default AlbumPhotoList;
