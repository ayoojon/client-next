import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@material-ui/core';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

import useDebounce from '@/components/shared/hooks/useDebounce';
import Pagination, { IPagination } from '@/components/Pagination';
import { SkeletonSearchEvent } from '@/components/shared/skeletons/SearchEvent';
import { ayoojonApi, server } from '@/config/index';

import { NextPage } from 'next';
import Axios from 'axios';
import Link from 'next/link';
import MainLayout from 'src/layouts/main';
import { ServiceCard } from '@/components/Cards/ServiceCard';

// TOTO: add types and filters
const Services: NextPage = ({ services, pagination }: any) => {
  return (
    <MainLayout>
      <h2 className="text-4xl font-bold mb-8">Nearby Service</h2>
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
    </MainLayout>
  );
};

export async function getStaticProps() {
  const { data } = await Axios.get(`${server}/services`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { services: data.data, pagination: data.pagination }, // will be passed to the page component as props
  };
}

export default Services;
