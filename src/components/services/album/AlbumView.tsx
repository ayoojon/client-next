import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { s3FileUrl } from '../../../config';
import Router, { useRouter } from 'next/router';

// import { SingleAlbumView } from './SingleAlbumView';
interface Props {
  data: {
    _id: string;
    description: string;
    title: string;
    photos: string[];
  }[];
}

interface ParamTypes {
  serviceURL: string;
  albumId: string;
}

export const AlbumView: React.FC<Props> = ({ data }) => {
  const router = useRouter();
  const { url } = router.query;
  console.log(router.query);
  // const [isAlbumModalOpen, setAlbumModalState] = useState(false);
  // const [albumModalData, setAlbumModalData] = useState({});
  // const params = useParams<ParamTypes>();
  // const history = useHistory();

  // const dataHandeler = (data: any) => {
  //   setAlbumModalData({ data });
  //   setAlbumModalState(true);
  // };

  const createMarkup = (data: any) => {
    return {
      __html: data,
    };
  };

  // const toggleDataModal = () => setAlbumModalState(!isAlbumModalOpen);
  return (
    <div className="flex flex-wrap mx-2">
      {data.map((photo, index) => (
        <div
          key={index}
          className="mb-2 w-56 cursor-pointer  rounded-b-md border-2 rounded-lg mx-2 mb-4 relative"
          onClick={() => {
            // dataHandeler(photo);
            // Router.push(`/services/${params.serviceURL}/albums/${photo._id}`);
            Router.push(`/services/${url}/albums/${photo._id}`);
          }}
        >
          <div className="h-40 w-full overflow-hidden rounded-md">
            <img className="inline-block w-full h-full object-cover" src={s3FileUrl + photo.photos[0]} alt="location" />
          </div>
          <div className="p-2">
            <h6 className="font-semibold text-xl pb-2">{photo.title}</h6>
            {/* <p>{photo.description}</p> */}
            <div dangerouslySetInnerHTML={createMarkup(photo.description)} />
          </div>
          <div className="bg-yellow-300 text-xs font-medium rounded-full p-1 absolute top-0 right-0 mt-1 mr-1">
            <span>{photo.photos.length} image </span>
          </div>
        </div>
      ))}

      {/* <SingleAlbumView isOpen={isAlbumModalOpen} onClose={toggleDataModal} data={albumModalData} /> */}
    </div>
  );
};
