import Axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import { APP_TITLE, s3FileUrl, server } from '@/config/index';
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
import Image from 'next/image';
import { imgLoader } from '@/utils/next';

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
        description={
          service.seo?.description
            ? service.seo.description.length > 100
              ? service.seo.description.substr(0, 100)
              : service.seo.description
            : 'Ayoojon Service'
        }
        image={`${s3FileUrl}${service.coverImage}`}
      />
      {service ? (
        <>
          <Helmet>
            <title>{`${service.name} | ${APP_TITLE}`}</title>
          </Helmet>
          <div className="my-4">
            <div className="max-w-6xl mx-auto px-6 my-8">
              {/* start */}
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
                <div className="relative z-10 col-start-1 row-start-1 px-4 pt-10 bg-gradient-to-t from-black sm:bg-none">
                  <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl lg:text-4xl">
                    {service.name}
                  </h2>
                  <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500">vanue</p>
                  <div className="flex items-center text-sm font-medium sm:mb-4">
                    <Icon name="star" className="h-4 sm:h-4 fill-current text-primary" />
                    <div className="ml-1">
                      <span className="">{service.avgRating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 row-start-2 px-4 sm:pb-16">
                  {/* <div className="flex items-center text-sm font-medium sm:mb-4">
                    <div className="text-base font-normal mx-2">·</div>
                    <div>Collingwood, Ontario</div>
                  </div> */}
                  <div className="flex flex-auto divide-x divide-gray-900 items-center text-sm font-medium sm:mb-4 ">
                    <div className="flex flex-col p-4 items-center">
                      <div className="text-lg font-medium">55000 sqft</div>
                      <div className="text-sm font-medium text-gray-500">space area</div>
                    </div>
                    <div className="flex flex-col p-4 items-center">
                      <div className="text-lg font-medium">55000 sqft</div>
                      <div className="text-sm font-medium text-gray-500">parking size</div>
                    </div>
                    <div className="flex flex-col p-4 items-center">
                      <div className="text-lg font-medium">55000 sqft</div>
                      <p className="text-sm font-medium text-gray-500">space area</p>
                    </div>
                  </div>
                  <hr className="w-16 border-gray-300 hidden sm:block" />
                </div>
                <div className="col-start-1 row-start-3 space-y-3 px-4">
                  <p className="flex items-center text-black text-sm font-medium">
                    <img
                      src="https://images.unsplash.com/photo-1597480493259-c99b18effd75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                      className="w-6 h-6 rounded-full mr-2 bg-gray-100"
                    />
                    Hosted by {service.ownerName}
                  </p>
                  {/* <button
                    type="button"
                    className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg"
                  >
                    Check availability
                  </button> */}
                </div>
                <div className="flex sm:col-start-2 sm:row-span-3">
                  <div className="w-full grid">
                    <div className="relative row-span-2 md:col-span-2">
                      <Image
                        loader={imgLoader(s3FileUrl)}
                        src={`${service.coverImage}`}
                        alt={`${service.name}`}
                        layout="responsive"
                        className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                        width={800}
                        height={800}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className="aspect-w-9 aspect-h-3">
                <div className="overflow-hidden border rounded-md shadow-md">
                  <div
                    className="h-full w-full"
                    // style={{
                    //   backgroundSize: 'cover',
                    //   backgroundImage: `url(${s3FileUrl + service.coverImage})`,
                    // }}
                  >
                    <Image
                      loader={imgLoader(s3FileUrl)}
                      src={`${service.coverImage}`}
                      alt={`${service.name}`}
                      layout="responsive"
                      className="object-cover"
                      width={900}
                      height={400}
                      priority
                    />
                  </div>
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
