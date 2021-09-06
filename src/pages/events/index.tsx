import {
  Chip,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { EventCard } from '@/components/Cards/EventCard';
import useDebounce from '@/components/shared/hooks/useDebounce';
import Pagination, { IPagination } from '@/components/Pagination';
import { SkeletonSearchEvent } from '@/components/shared/skeletons/SearchEvent';
import { ayoojonApi, server } from '@/config/index';
import { IEvent } from '@/types/event';
import { eventTypesName, generateQueryString } from '@/utils/index';
import { GetStaticProps, NextPage } from 'next';
import Axios from 'axios';
import Link from 'next/link';
import MainLayout from 'src/layouts/main';
import Backdrop from '@/components/shared/Backdrop';
import FilterEvents from '@/components/event/FilterEvents';
import SEO from '@/components/shared/SEO';

interface IData {
  events: IEvent[];
  pagination: IPagination;
}
interface Props {
  initialEvents: IEvent[];
  pagination: IPagination;
}

interface ISearch {
  name?: string;
  hostingType?: string;
  eventType?: string;
  pageNumber: number;
  pageSize: number;
}

const useStyles = makeStyles(
  createStyles({
    filtersActiveLabel: {
      color: '#998',
      fontSize: '14px',
      paddingRight: 10,
    },
    chipZone: {
      padding: '18px 0 5px 10px',
      width: '100%',
    },
    chipLabel: {
      fontWeight: 500,
      marginRight: 5,
    },
    filterChip: {
      marginRight: 4,
      color: '#222',
    },
  }),
);

const fetchAllEvents = async (searchQuery: ISearch) => {
  const response = await ayoojonApi.get(`events?${generateQueryString(searchQuery)}`);
  return {
    events: response.data.data,
    pagination: response.data.pagination,
  };
};

const Events: NextPage<Props> = ({ initialEvents, pagination }: Props) => {
  const classes = useStyles({});
  const [isVisible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState<ISearch>({
    pageNumber: 1,
    pageSize: 10,
  });
  const debouncedQuery = useDebounce<ISearch>(searchQuery);

  const {
    data: { events },
    isLoading,
  } = useQuery<IData, Error>(['events', debouncedQuery], () => fetchAllEvents(debouncedQuery), {
    initialData: { events: initialEvents, pagination },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
  });

  const handleOpen = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  const handleDelete = (key: 'name' | 'hostingType' | 'eventType') => {
    setSearchQuery((pre) => {
      return {
        ...pre,
        [key]: undefined,
      };
    });
  };
  return (
    <div className="my-12 px-6 md:px-10 lg:px-14">
      <SEO siteTitle="All Events" />
      <Backdrop open={isLoading} />
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold mb-8 mt-6">Nearby Events</h2>
        <div className="">
          <button
            className=" mt-2 font-medium capitalize text-white bg-primary rounded-md py-2 px-5"
            onClick={handleOpen}
          >
            Filters
          </button>
          <FilterEvents
            isVisible={isVisible}
            setVisible={handleClose}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
      {(searchQuery?.name || searchQuery?.hostingType || searchQuery?.eventType) && (
        <div className={(classes.chipZone, 'mb-6')}>
          <span className={classes.filtersActiveLabel}>Active filters:</span>
          {searchQuery?.name && (
            <Chip
              className={classes.filterChip}
              // key={column.id}
              label={
                <>
                  <span className={classes.chipLabel}>Name : </span>
                  {searchQuery.name}
                </>
              }
              onDelete={() => handleDelete('name')}
              variant="outlined"
            />
          )}
          {searchQuery?.eventType && (
            <Chip
              className={classes.filterChip}
              // key={column.id}
              label={
                <>
                  <span className={classes.chipLabel}>Event Type : </span>
                  {searchQuery.eventType}
                </>
              }
              onDelete={() => handleDelete('eventType')}
              variant="outlined"
            />
          )}
          {searchQuery?.hostingType && (
            <Chip
              className={classes.filterChip}
              // key={column.id}
              label={
                <>
                  <span className={classes.chipLabel}>Hosting Type : </span>
                  {searchQuery.hostingType}
                </>
              }
              onDelete={() => handleDelete('hostingType')}
              variant="outlined"
            />
          )}
        </div>
      )}
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

export const getStaticProps: GetStaticProps<Props, undefined> = async (ctx) => {
  try {
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
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Events;
