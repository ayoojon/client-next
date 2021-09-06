import Axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Link } from '@material-ui/core';
import moment from 'moment';

import { APP_TITLE, s3FileUrl, server } from '@/config/index';
import { IEvent, IEventTicket } from '@/types/event';
import { time24To12, createMarkup } from '@/utils/index';
import Map from '@/components/shared/Map';
import AyoojonAccordion from '@/components/shared/Accordion';
import { IService } from '@/types/service';
import { Helmet } from 'react-helmet';
import Icon from '@/components/shared/icons';
import { AlbumView } from '@/components/services/album/AlbumView';
import { AmenitiesListView } from '@/components/services/Amenities/AmenitiesListView';
import { ServiceReview } from '@/components/services/review/ServiceReview';
import { LocationView } from '@/components/services/location/LocationView';
import { ProductView } from '@/components/services/product/ProductView';
import { PackageView } from '@/components/services/packages/PackageView';
import { BreakpointProvider } from '@/components/shared/BreakpointHook/Context';
import { breakpointsQueries } from '@/components/shared/ReactDates';
import BookingLocationBottomBar from '@/components/services/BookingLocationBottomBar';
import BookingPackageBottomBar from '@/components/services/BookingPackageBottomBar';
import BookingProductBottomBar from '@/components/services/BookingProductBottomBar';
import { useRouter } from 'next/router';
import SEO from '@/components/shared/SEO';

interface IData {
  service: IService;
}

const ServicePage: NextPage<IData> = ({ service }: IData) => {
  const router = useRouter();

  const createMarkup = (data: any) => {
    return {
      __html: data,
    };
  };
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <SEO
        siteTitle={service.name}
        // description={movie.description.length > 100 ? movie.description.substr(0, 100) : movie.description}
        image={`${s3FileUrl}${service.coverImage}`}
      />
      {service ? (
        <>
          <Helmet>
            <title>{`${service.name} | ${APP_TITLE}`}</title>
          </Helmet>
          <div className="my-4">
            <div className="container mx-auto px-6 mb-24">
              <div className="aspect-w-9 aspect-h-3">
                <div className="overflow-hidden border rounded-md shadow-md">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundSize: 'cover',
                      backgroundImage: `url(${s3FileUrl + service.coverImage})`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="py-6 border-b border-gray-300 last:border-0">
                <div className="flex items-baseline">
                  <h6 className="font-medium text-xl sm:text-3xl">{service.name}</h6>
                  <div className="flex items-center ml-4">
                    <Icon name="star" className="h-4 sm:h-6 fill-current text-primary" />
                    <span className="ml-1 font-medium sm:text-lg">{service.avgRating.toFixed(1)}</span>
                  </div>
                </div>
                <p>{service.location.address}</p>
                <p>{service.location.city}</p>
                <p>{service.location.country}</p>
              </div>
              <div className="py-6 border-b border-gray-300 last:border-0">
                <h6 className="font-medium text-xl mb-3">Description</h6>
                <div dangerouslySetInnerHTML={createMarkup(service.placeDescription)} />
              </div>

              {service.type === 'venue' && (
                <div className="py-6 border-b border-gray-300 last:border-0">
                  <h6 className="font-medium text-xl mb-3">Location</h6>
                  <LocationView data={service.pricing.location} />
                </div>
              )}

              {(service.type === 'flowers' || service.type === 'caterings') && (
                <div className="py-6 border-b border-gray-300 last:border-0">
                  <h6 className="font-medium text-xl mb-3">Product</h6>
                  <ProductView data={service.pricing.product} />
                </div>
              )}

              {[
                'event-management',
                'photographer',
                'music',
                'lightening',
                'invitation-card',
                'videographer',
                'honeymoon',
              ].includes(service.type) && (
                <div className="py-6 border-b border-gray-300 last:border-0">
                  <h6 className="font-medium text-xl mb-3">Packege</h6>
                  <PackageView data={service.pricing.package} />
                </div>
              )}

              <div className="py-6 border-b border-gray-300 last:border-0">
                <h6 className="font-medium text-xl mb-3">Albums</h6>
                {service.albums.length > 0 ? <AlbumView data={service.albums} /> : <p>No albums found</p>}
              </div>

              <div className="py-6 border-b border-gray-300 last:border-0">
                <h6 className="font-medium text-xl mb-3">Amenities</h6>
                <AmenitiesListView amenities={service.amenities} />
              </div>

              <div className="py-6 border-b border-gray-300 last:border-0">
                <h6 className="font-medium text-xl mb-3">Terms And Conditions</h6>
                <div dangerouslySetInnerHTML={createMarkup(service.termsConditions)} />
              </div>

              <div className="py-6 border-b border-gray-300 last:border-0">
                <h6 className="font-medium text-xl mb-3">Reviews</h6>
                <ServiceReview serviceId={service._id} />
              </div>
            </div>
          </div>

          <BreakpointProvider queries={breakpointsQueries}>
            {service.type === 'venue' && <BookingLocationBottomBar service={service} />}
            {[
              'event-management',
              'photographer',
              'music',
              'lightening',
              'invitation-card',
              'videographer',
              'honeymoon',
            ].includes(service.type) && <BookingPackageBottomBar service={service} />}
            {['flowers', 'caterings'].includes(service.type) && <BookingProductBottomBar service={service} />}
          </BreakpointProvider>
        </>
      ) : (
        <div>No service found</div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  try {
    const { data } = await Axios.get(`${server}services`);

    const services = data.data.map((service) => ({
      params: { url: service.url },
    }));

    return { paths: services, fallback: true };
  } catch (error) {
    return { paths: [], fallback: true };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await Axios.get(`${server}services/url/${params.url}`);
    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { service: data.service },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ServicePage;
