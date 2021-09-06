import { Chip, createStyles, FormControl, InputLabel, makeStyles, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import useDebounce from '@/components/shared/hooks/useDebounce';
import Pagination, { IPagination } from '@/components/Pagination';
import { SkeletonSearchEvent } from '@/components/shared/skeletons/SearchEvent';
import { ayoojonApi, server } from '@/config/index';
import { GetStaticProps, NextPage } from 'next';
import Axios from 'axios';
import Link from 'next/link';
import MainLayout from 'src/layouts/main';
import { ServiceCard } from '@/components/Cards/ServiceCard';
import { generateQueryString } from '@/utils/index';
import { IService } from '@/types/service';
import { FilterServices } from '@/components/services/FilterServices';

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

interface ISearch {
  name?: string;
  serviceType?: string;
  pageNumber: number;
  pageSize: number;
}

interface Props {
  initalServices: IService[];
  pagination: IPagination;
}

interface IData {
  services: IService[];
  pagination: IPagination;
}

const fetchAllServices = async (searchQuery: ISearch): Promise<IData> => {
  const response = await ayoojonApi.get(`services?${generateQueryString(searchQuery)}`);

  return {
    services: response.data.data,
    pagination: response.data.pagination,
  };
};

const Services: NextPage<Props> = ({ initalServices, pagination }: Props) => {
  const classes = useStyles({});

  const [isFilterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<ISearch>({
    pageNumber: 1,
    pageSize: 10,
  });

  const debouncedQuery = useDebounce<ISearch>(searchQuery);

  const {
    data: { services },
    isLoading,
  } = useQuery<IData, Error>(['services', debouncedQuery], () => fetchAllServices(debouncedQuery), {
    initialData: { services: initalServices, pagination },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
  });

  const handleOpen = () => {
    setFilterOpen(true);
  };

  const handleClose = () => {
    setFilterOpen(false);
  };

  const handleDelete = (key: 'name' | 'serviceType') => {
    setSearchQuery((pre) => {
      return {
        ...pre,
        [key]: undefined,
      };
    });
  };

  return (
    <div className="my-12 px-6 md:px-10 lg:px-14">
      <div className="flex justify-between">
        <h2 className="text-4xl font-bold mb-8">Nearby Service</h2>
        <div>
          <button
            className=" mt-2 font-medium capitalize text-white bg-primary rounded-md py-2 px-5"
            onClick={handleOpen}
          >
            Filters
          </button>
          <FilterServices
            isVisible={isFilterOpen}
            setVisible={handleClose}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>
      {searchQuery?.name ||
          (searchQuery?.serviceType && (
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
              {searchQuery?.serviceType && (
                <Chip
                  className={classes.filterChip}
                  // key={column.id}
                  label={
                    <>
                      <span className={classes.chipLabel}>Type : </span>
                      {searchQuery.serviceType}
                    </>
                  }
                  onDelete={() => handleDelete('serviceType')}
                  variant="outlined"
                />
              )}
            </div>
          ))}
      {services && services?.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service._id} href={`/services/${service.url}`}>
              <a>
                <ServiceCard key={service._id} service={service} />
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

export const getStaticProps: GetStaticProps<Props, undefined> = async () => {
  try {
    const { data } = await Axios.get(`${server}/services`);

    console.log(data, 'data')
    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { initalServices: data.data, pagination: data.pagination },
      revalidate: 60, // increment in every 1 min.
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Services;
