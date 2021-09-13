import Icon from '@/components/shared/icons';
import { SkeletonReviewPage } from '@/components/shared/skeletons/ReviewPage';
import { s3FileUrl, ayoojonApi } from '../../../config';
import { IReviewService } from '@/types/service';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Pagination, { IPagination } from '@/components/Pagination';
import userImg from '@/components/shared/resources/user-avatar.jpg';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import moment from 'moment';

interface Props {
  serviceId: string;
}

interface IData {
  reviews: IReviewService[];
  pagination: IPagination;
}

const fetchServiceReview = async (Id: any, page: number) => {
  const response = await ayoojonApi.get(`reviews/service/${Id}?pageNumber=${page}`);

  return {
    reviews: response.data.data,
    pagination: response.data.pagination,
  };
};

export const ServiceReview: React.FC<Props> = ({ serviceId }) => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useQuery<IData, Error>(
    ['service-rewiew', serviceId],
    () => fetchServiceReview(serviceId, page),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: 1,
    },
  );
  return (
    <div className="">
      {data && data.reviews.length > 0 ? (
        data.reviews.map((review, index) => (
          <div className="flex items-start mb-4" key={index}>
            <div className="flex-shrink-0">
              <div className="inline-block relative">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    loader={imgLoader(s3FileUrl)}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={
                      review?.booking?.account?.avatar ? review.booking.account.avatar : '/resources/user-avatar.jpg'
                    }
                    alt="user-img"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
            <div className="ml-6">
              <div className="flex items-baseline">
                {review.booking ? (
                  <span className="text-gray-600 font-bold">{review.booking.account.name}</span>
                ) : (
                  <span className="text-gray-600 font-bold">name</span>
                )}
              </div>
              <div className="flex items-baseline">
                {review.booking ? (
                  <small className="text-sm font-medium">
                    {moment(new Date(review.createdAt)).format('DD-MM-YYYY')}
                  </small>
                ) : (
                  <span className="text-gray-600 font-bold">no date</span>
                )}
              </div>
              <div className="flex items-center mt-1">
                <div>
                  <Icon
                    name="star"
                    className={`h-5 fill-current mx-1 ${1 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
                  />
                </div>
                <div>
                  <Icon
                    name="star"
                    className={`h-5 fill-current mx-1 ${2 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
                  />
                </div>
                <div>
                  <Icon
                    name="star"
                    className={`h-5 fill-current mx-1 ${3 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
                  />
                </div>
                <div>
                  <Icon
                    name="star"
                    className={`h-5 fill-current mx-1 ${4 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
                  />
                </div>
                <div>
                  <Icon
                    name="star"
                    className={`h-5 fill-current mx-1 ${5 <= review.rating ? 'text-primary' : 'text-gray-400'}`}
                  />
                </div>
              </div>
              <div className="mt-2">
                <p className="mt-1">{review.text}</p>
              </div>
            </div>
          </div>
        ))
      ) : isLoading ? (
        <div className="grid gap-x-3 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* <SkeletonSearchEvent className="animate-pulse" /> */}
          <SkeletonReviewPage className="animate-pulse" />
        </div>
      ) : (
        <div className="my-3">
          <p>There is No Review</p>
        </div>
      )}
      {data && data.pagination && data.pagination.totalPage > 1 && (
        <Pagination pagination={data.pagination} handler={setPage} />
      )}
    </div>
  );
};
