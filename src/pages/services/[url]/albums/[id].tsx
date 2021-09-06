import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ayoojonApi, s3FileUrl } from '../../../../config';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import { IService } from '@/types/service';
import Router, { useRouter } from 'next/router';

interface ParamTypes {
  url: string;
  id: string;
}
const fetchAlbum = async (serviceURL: string, albumId: string) => {
  const response = await ayoojonApi.get(`services/${serviceURL}/albums/${albumId}`);

  return response.data.data;
};

const AlbumPhotoList = () => {
  const router = useRouter();
  const { url, id } = router.query;
  // const params = useParams<ParamTypes>();

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickImage = (image: any, index: any) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const { data, isLoading } = useQuery<IService['albums'][0], Error>(
    ['services-album', `${url}- ${id}`],
    () => fetchAlbum(url as string, id as string),
    {
      refetchOnWindowFocus: false,
      // The query will not execute until the eventUrl exists
      enabled: !!url,
    },
  );
  const createMarkup = (data: any) => {
    return {
      __html: data,
    };
  };

  return (
    <div className="container mx-auto mt-12 px-6">
      {/* <button className="bg-primary p-1 text-white rounded" onClick={() => history.goBack()}>
        Go Back
      </button> */}
      <button className="bg-primary p-1 text-white rounded">Go Back</button>

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
          <div key={index} className="h-64 w-full sm:w-80 m-3 rounded-2xl border overflow-hidden">
            {/* <img
              src={s3FileUrl + photo}
              alt=""
              className="h-full w-full object-cover"
              onClick={() => handleClickImage(photo, index)}
            /> */}
            <Image
              loader={imgLoader(s3FileUrl)}
              className="inline-block w-full h-full object-cover"
              onClick={() => handleClickImage(photo, index)}
              src={photo}
              alt="album"
              width="800"
              height="640"
            />
          </div>
        ))}
      </div>
      {/* <div className="flex flex-wrap -mx-4  ">
        {data.photos.map((photo: any, index: number) => {
          return (
            <div className="md:w-1/2 p-2 mb-8 md:mb-0 " key={index}>
              <img
                className="rounded h-64 m-2 border-2 border-gray-400 cursor-pointer"
                src={s3FileUrl + photo}
                alt="profile"
                onClick={() => handleClickImage(photo, index)}
              />
            </div>
          );
        })}
      </div> */}

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
