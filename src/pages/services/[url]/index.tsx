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
import RelatedServices from '@/components/services/RelatedServices';

interface IData {
  service: IService;
  relatedServices: IService[];
}

const ServicePage: NextPage<IData> = ({ service, relatedServices }: IData) => {
  const router = useRouter();

  console.log(relatedServices, 'related');
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

              {service.affiliated.length > 0 && (
                <div className="py-6 border-b border-gray-300 last:border-0">
                  <h6 className="font-medium text-xl mb-3">Affiliated Services</h6>
                  <RelatedServices services={service.affiliated} />
                </div>
              )}

              <div className="py-6 border-b border-gray-300 last:border-0">
                <h6 className="font-medium text-xl mb-3">Related Services</h6>
                <RelatedServices services={relatedServices} />
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
    const { data: relatedData } = await Axios.get(`${server}services/related/${data.service.type}`);
    console.log(relatedData, 'type');

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { service: data.service, relatedServices: relatedData.services },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ServicePage;
