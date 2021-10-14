import { ServiceCard } from '@/components/Cards/ServiceCard';
import Pagination, { IPagination } from '@/components/Pagination';
import { FilterServices } from '@/components/services/FilterServices';
import useDebounce from '@/components/shared/hooks/useDebounce';
import SEO from '@/components/shared/SEO';
import { ayoojonApi, server } from '@/config/index';
import { IService } from '@/types/service';
import { generateQueryString } from '@/utils/index';
import { Chip, Link } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Axios from 'axios';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

interface Props {
  initalServices: IService[];
  pagination: IPagination;
}
interface IData {
  services: IService[];
  pagination: IPagination;
}
interface IParams {
  type: string;
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

const fetchAllServices = async (searchQuery): Promise<IData> => {
  const response = await ayoojonApi.get(`services?${generateQueryString(searchQuery)}`);
  return {
    services: response.data.data,
    pagination: response.data.pagination,
  };
};

export default function Index({ initalServices, pagination }: Props) {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState({
    pageNumber: 1,
    pageSize: 10,
    serviceType: router.query.type,
    name: '',
  });
  const debouncedQuery = useDebounce(searchQuery);
  const {
    data: { services },
    isLoading,
  } = useQuery<IData, Error>(['services', debouncedQuery], () => fetchAllServices(debouncedQuery), {
    initialData: { services: initalServices, pagination },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
  });

  console.log(router.query);

  const handleOpen = () => {
    setFilterOpen(true);
  };
  const handleClose = () => {
    setFilterOpen(false);
  };
  const handleDelete = (key: 'name') => {
    setSearchQuery((pre) => {
      return {
        ...pre,
        [key]: undefined,
      };
    });
  };

  return (
    <div className="my-12 px-6 md:px-10 lg:px-14">
      <SEO siteTitle="Photographer Services" />
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold mb-8">{router.query.type}</h2>
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
      {searchQuery?.name && (
        <div className={(classes.chipZone, 'mb-6')}>
          <span className={classes.filtersActiveLabel}>Active filters:</span>
          {searchQuery?.name && (
            <Chip
              className={classes.filterChip}
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
        </div>
      )}
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
      {pagination && (
        <div className="mt-8">
          <Pagination pagination={pagination} handler={() => {}} />
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await Axios.get(`${server}/services?serviceType=${params.type}`);

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { initalServices: data.data, pagination: data.pagination },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
function useParams() {
  throw new Error('Function not implemented.');
}
