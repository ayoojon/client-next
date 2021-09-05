import Axios from 'axios';
import { NextPage } from 'next';
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

interface IData {
  service: IService;
}

const ServicePage: NextPage<IData> = ({ service }: IData) => {
  const createMarkup = (data: any) => {
    return {
      __html: data,
    };
  };

  return (
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

          <div className="py-6 border-b border-gray-300 last:border-0">
            <h6 className="font-medium text-xl mb-3">Albums</h6>
            {service.albums.length > 0 ? <AlbumView data={service.albums} /> : <p>No albums found</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { data } = await Axios.get(`${server}services/url/${params.url}`);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service: data.service },
  };
}

export default ServicePage;
