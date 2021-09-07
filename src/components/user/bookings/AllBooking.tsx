import { SkeletonBookingPage } from '@/components/shared/skeletons/MyBooking';
import { IBookingNew } from '@/types/booking';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Pagination, { IPagination } from '../../../components/Pagination';
import { ayoojonApi } from '../../../config';
import { tokenConfig } from '../../../utils';

import { SingleBookingList } from './BookingCompnent/SingleBookingList';

interface IData {
  bookings: IBookingNew[];
  pagination: IPagination;
}

const fetchAllBookings = async ({ page = 1 }: { page: number }) => {
  const headers = await tokenConfig('WITH-AUTH');
  const response = await ayoojonApi.get(`bookings/user/search/?pageNumber=${page}`, headers);
  return {
    bookings: response.data.data,
    pagination: response.data.pagination,
  };
};

export const AllBooking = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading } = useQuery<IData, Error>(
    ['client-all-bookings-search', page],
    () => fetchAllBookings({ page }),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: 1,
    },
  );

  return (
    <div>
      {data && data.bookings.length > 0 ? (
        data.bookings.map((booking) => (
          <div key={booking._id}>
            <SingleBookingList booking={booking} />
          </div>
        ))
      ) : isLoading ? (
        <div>
          <SkeletonBookingPage className="animate-pulse" />
          <SkeletonBookingPage className="animate-pulse" />
        </div>
      ) : (
        <p>No Booking Found</p>
      )}
      {data && data.pagination && data.pagination.totalPage > 1 && (
        <Pagination pagination={data.pagination} handler={setPage} />
      )}
    </div>
  );
};
