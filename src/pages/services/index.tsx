import React, { useState } from 'react';
import Pagination, { IPagination } from '@/components/Pagination';
import { GetStaticProps, NextPage } from 'next';
import { IService, serviceTypes } from '@/types/service';
import SEO from '@/components/shared/SEO';
import ServiceTypedSection from '@/components/services/types/ServiceTypedSection';

interface Props {
  initalServices: IService[];
  pagination: IPagination;
}
interface IData {
  services: any;
}

let serviceCategories = [
  {
    title: 'Venue',
    type: 'venue',
  },
  {
    title: 'Event Management',
    type: 'eventManagement',
  },
  {
    title: 'Photographer',
    type: 'photographer',
  },
  {
    title: 'Music',
    type: 'music',
  },
  {
    title: 'Lighting',
    type: 'lighting',
  },
  {
    title: 'Honeymoon',
    type: 'honeymoon',
  },
  {
    title: 'Caterings',
    type: 'caterings',
  },
  {
    title: 'Flowers',
    type: 'flowers',
  },
];

const Services: NextPage<Props> = () => {
  return (
    <div className="my-12 px-6 md:px-10 lg:px-14">
      <SEO siteTitle="All Services" />
      {serviceCategories.map((cat) => (
        <ServiceTypedSection key={cat.type} type={cat.type as serviceTypes} title={cat.title} />
      ))}
    </div>
  );
};
// export const getStaticProps: GetStaticProps<Props, undefined> = async () => {
//   try {
//     const { data } = await Axios.get(`${server}/services/home`);
//     if (!data) {
//       return {
//         notFound: true,
//       };
//     }
//     return {
//       props: { initalServices: data.data, pagination: data.pagination },
//       revalidate: 60, // increment in every 1 min.
//     };
//   } catch (error) {
//     return {
//       notFound: true,
//     };
//   }
// };
export default Services;
