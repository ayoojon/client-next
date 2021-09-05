import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { EventCard } from '@/components/Cards/EventCard';
import useDebounce from '@/components/shared/hooks/useDebounce';
import Pagination, { IPagination } from '@/components/Pagination';
import { SkeletonSearchEvent } from '@/components/shared/skeletons/SearchEvent';
import { ayoojonApi, server } from '@/config/index';
import { IEvent } from '@/types/event';
import { eventTypesName } from '@/utils/index';
import { NextPage } from 'next';
import Axios from 'axios';
import Link from 'next/link';
import MainLayout from 'src/layouts/main';
import Backdrop from '@/components/shared/Backdrop';

interface IData {
  events: IEvent[];
  pagination: IPagination;
}
interface IInitialData {
  initialEvents: IEvent[];
  pagination: IPagination;
}

const fetchAllEvents = async () => {
  const response = await ayoojonApi.get(`events`);
  return {
    events: response.data.data,
    pagination: response.data.pagination,
  };
};

// TOTO: add types and filters
const Events: NextPage<IInitialData> = ({ initialEvents, pagination }: IInitialData) => {
  const {
    data: { events },
    isLoading,
  } = useQuery<IData, Error>(['events'], () => fetchAllEvents(), {
    initialData: { events: initialEvents, pagination },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
  });

  return (
    <div className="my-12 px-6 md:px-10 lg:px-14">
      <Backdrop open={isLoading} />
      <h2 className="text-4xl font-bold mb-8 mt-6">Nearby Events</h2>
      {events && events?.length > 0 ? (
        <div className="grid gap-x-3 gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event) => (
            <Link key={event._id} href={`/events/${event.url}`}>
              <a className="inline-block">
                <EventCard key={event._id} event={event} />
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <p>No events found</p>
      )}
      {pagination && <Pagination pagination={pagination} handler={() => {}} />}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await Axios.get(`${server}events`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { initialEvents: data.data, pagination: data.pagination },
    revalidate: 60, // increment in every 1 min.
  };
}

export default Events;
