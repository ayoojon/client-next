import { ServiceCard } from '@/components/Cards/ServiceCard';
import Pagination, { IPagination } from '@/components/Pagination';
import useDebounce from '@/components/shared/hooks/useDebounce';
import Icon from '@/components/shared/icons';
import SEO from '@/components/shared/SEO';
import { SkeletonSearchEvent } from '@/components/shared/skeletons/SearchEvent';
import { ayoojonApi, server } from '@/config/index';
import { IService, serviceTypes } from '@/types/service';
import { generateQueryString } from '@/utils/index';
import { IconButton, Link } from '@mui/material';
import Slider from 'react-slick';
import { GetStaticProps } from 'next';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';

// interface Props {
//   initalServices: IService[];
//   pagination: IPagination;
// }
interface IData {
  services: IService[];
  pagination: IPagination;
}

interface Props {
  type: serviceTypes;
  title: string;
}

const fetchAllServices = async (searchQuery): Promise<IData> => {
  const response = await ayoojonApi.get(`services?${generateQueryString(searchQuery)}`);
  return {
    services: response.data.data,
    pagination: response.data.pagination,
  };
   
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      color="primary"
      className={className}
      aria-label="nevPrev element"
      // disabled={!data.pagination.next}
      onClick={onClick}
      // onClick={() => setSearchQuery((prev) => ({ ...prev, pageNumber: prev.pageNumber + 1 }))}
      style={{ ...style, display: 'block' }}
    >
      <Icon name="keyboard-arrow-left" className="h-6" />
    </IconButton>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IconButton
      color="primary"
      className={className}
      aria-label="nevPrev element"
      // disabled={!data.pagination.next}
      onClick={onClick}
      // onClick={() => setSearchQuery((prev) => ({ ...prev, pageNumber: prev.pageNumber + 1 }))}
      style={{ ...style, display: 'block' }}
    >
      <Icon name="keyboard-arrow-right" className="h-6" />
    </IconButton>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function ServiceTypedSection({ type, title }: Props) {
  const [searchQuery, setSearchQuery] = useState({
    pageNumber: 1,
    pageSize: 10,
    serviceType: type,
  });
  const debouncedQuery = useDebounce(searchQuery);
  const sliderRef = useRef();
  const { data, isLoading } = useQuery<IData, Error>(
    [`services-${type}`, debouncedQuery],
    () => fetchAllServices(debouncedQuery),
    {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: 1,
    },
  );

  const goNext = () => {
    console.log(sliderRef);
    sliderRef?.current?.slickNext();
  };

  const goPrev = () => {
    sliderRef?.current.slickPrev();
  };

  if ((!isLoading && !data) || (data && data.services && data.services.length === 0)) {
    return null;
  }

  return (
    <div className="my-12 px-6">
      <SEO siteTitle="Photographer Services" />
      <div className="flex mb-4 justify-between items-center">
        {isLoading ? (
          <div className="h-12 w-40 bg-gray-200 rounded-full" />
        ) : (
          <h2 className="text-4xl font-semibold">{title}</h2>
        )}

        {isLoading ? (
          <div className="h-6 w-16 bg-gray-200 rounded-full m-1" />
        ) : (
          <div className="flex space-x-4 items-center">
            <Link href={`/services/type/${type}`}>
              <a className="text-lg">Show All</a>
            </Link>
            <div className="flex">
              <IconButton
                color="primary"
                aria-label="nevPrev element"
                // disabled={!data.pagination.previous}
                onClick={goNext}
              >
                <Icon name="keyboard-arrow-left" className="h-6" />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="nevPrev element"
                // disabled={!data.pagination.previous}
                onClick={goPrev}
              >
                <Icon name="keyboard-arrow-right" className="h-6" />
              </IconButton>
            </div>
          </div>
        )}
      </div>

      {isLoading ? (
        // <div className="flex justify-between">
        <Slider {...settings}>
          <SkeletonSearchEvent className="w-64 lg:w-80 px-2" />
          <SkeletonSearchEvent className="w-64 lg:w-80 px-2" />
          <SkeletonSearchEvent className="w-64 lg:w-80 px-2" />
          <SkeletonSearchEvent className="w-64 lg:w-80 px-2" />
        </Slider>
      ) : (
        data.services &&
        data.services?.length > 0 && (
          <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
            {data.services.map((service) => (
              <Link key={service._id} href={`/services/${service.url}`}>
                <a className="px-2">
                  <ServiceCard key={service._id} service={service} className="mx-2" />
                </a>
              </Link>
            ))}
          </Slider>
        )
      )}
    </div>
  );
}
