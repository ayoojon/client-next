import { useAppSelector } from '@/components/shared/hooks/redux';
import Icon from '@/components/shared/icons';
import { SkeletonBookingPage } from '@/components/shared/skeletons/MyBooking';
import { ayoojonApi, s3FileUrl } from '@/config/index';
import { ISave } from '@/types/saveService';
import { tokenConfig } from '@/utils/index';
import { imgLoader } from '@/utils/next';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';

interface IData {
  saves: ISave[];
}

const fetchSaveService = async () => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.get(`accounts/save-service`, headers);
  return {
    saves: response.data.data,
  };
};
const UserSavesPage = () => {
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => {
    return { isLogin: !!state.userReducer.user };
  });

  if (!isLogin && typeof window !== 'undefined') {
    router.replace('/signin');
  }
  const { status, data, isLoading } = useQuery<IData>(['save-service'], () => fetchSaveService(), {
    refetchOnWindowFocus: false,
  });

  if (status === 'error') return <div>No Saves found !!!</div>;

  console.log(data);
  return (
    <>
      <div className="container mx-auto my-12 px-6">
        <h1 className="font-bold text-4xl mb-5">My Saves</h1>
        <div className="">
          {data && data.saves.length > 0 ? (
            data.saves.map((item) => (
              <div
                key={item._id}
                className="border-2 rounded-md hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <div className="p-4">
                  <div className="flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    {/* <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                      src={s3FileUrl + item.coverImage}
                    /> */}
                    <div className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4">
                      <Image
                        loader={imgLoader(s3FileUrl)}
                        src={`${item.coverImage}`}
                        alt={`${item.name}`}
                        layout="responsive"
                        className="object-cover"
                        width={470}
                        height={470}
                      />
                    </div>
                    <div className="flex-grow sm:pl-8">
                      <h2 className="font-medium text-xl text-gray-900">{item.name}</h2>
                      <div className="flex items-center">
                        <Icon name="star" className="h-2 sm:h-6 fill-current text-primary" />
                        <span className="ml-1 font-medium sm:text-lg">{item.avgRating.toFixed(1)}</span>
                      </div>
                      {/* <h3 className="text-gray-500 mb-3">UI Developer</h3> */}
                      <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                      {/* <button className="mt-2 px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                        {' '}
                        Show me{' '}
                      </button> */}
                      <div className="mt-4">
                        <Link href={`/services/${item.url}`}>
                          <a className="text-primary text-base font-medium no-underline">Show More Detail </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : isLoading ? (
            <div>
              <SkeletonBookingPage className="animate-pulse" />
              <SkeletonBookingPage className="animate-pulse" />
            </div>
          ) : (
            <p>No Saves Found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default UserSavesPage;
