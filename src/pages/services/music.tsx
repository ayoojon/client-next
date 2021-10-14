import { ServiceCard } from '@/components/Cards/ServiceCard';
import Pagination, { IPagination } from '@/components/Pagination';
import useDebounce from '@/components/shared/hooks/useDebounce';
import SEO from '@/components/shared/SEO';
import { ayoojonApi, server } from '@/config/index';
import { IService } from '@/types/service';
import { generateQueryString } from '@/utils/index';
import { Link } from '@mui/material';
import Axios from 'axios';
import { GetStaticProps } from 'next';
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

const fetchAllServices = async (searchQuery): Promise<IData> => {
  const response = await ayoojonApi.get(`services?${generateQueryString(searchQuery)}`);
  return {
    services: response.data.data,
    pagination: response.data.pagination,
  };
};

export default function MusicServices() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState({
    pageNumber: 1,
    pageSize: 10,
    serviceType: "music"
  });
  const debouncedQuery = useDebounce(searchQuery);
  const {
    data,
    isLoading,
  } = useQuery<IData, Error>(['services', debouncedQuery], () => fetchAllServices(debouncedQuery), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 1,
  });

  if(!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="my-12 px-6 md:px-10 lg:px-14">
      <SEO siteTitle="Music Services" />
      <h2 className="text-4xl font-semibold mb-6">Music</h2>
      {data.services && data.services?.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.services.map((service) => (
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
    </div>
  );
}