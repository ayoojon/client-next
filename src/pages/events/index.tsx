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

// TOTO: add types and filters
const Events: NextPage = ({ events, pagination }: any) => {
  return (
    <MainLayout>
      <h2 className="text-4xl font-bold mb-8">Nearby Events</h2>
      {events && events?.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event) => (
            <Link key={event._id} href={`/events/${event.url}`}>
              <a>
                <EventCard key={event._id} event={event} />
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <p>No events found</p>
      )}
      {pagination && <Pagination pagination={pagination} handler={() => {}} />}
    </MainLayout>
  );
};

export async function getStaticProps() {
  const { data } = await Axios.get(`${server}/events`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { events: data.data, pagination: data.pagination }, // will be passed to the page component as props
  };
}

export default Events;
