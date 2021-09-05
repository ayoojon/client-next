import Axios from 'axios';
import { NextPage } from 'next';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Link } from '@material-ui/core';
import moment from 'moment';

import { s3FileUrl, server } from '@/config/index';
import { IEvent, IEventTicket } from '@/types/event';
import { time24To12, createMarkup } from '@/utils/index';
import Map from '@/components/shared/Map';
import AyoojonAccordion from '@/components/shared/Accordion';
import BuyTicketForm from '@/components/event/BuyTicketForm';
import { useRouter } from 'next/router';

interface IEventData extends IEvent {
  members: number;
}

interface IData {
  event: IEventData;
}

const BookEventPage: NextPage<IData> = ({ event }: IData) => {
  const router = useRouter();
  const [showPrice, setShowPrice] = useState(false);

  const handleOnClickBuyTicket = async () => {
    setShowPrice(false);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }


  return (
    <div className="container mx-auto my-12 px-2">
      <div className="grid grid-cols-5 gap-20">
        <div className="col-span-5 md:col-span-3">
          <div className="aspect-ratio--16x9">
            <div className="aspect-ratio__inner-wrapper overflow-hidden border rounded-md shadow-md">
              <div
                className="h-full w-full"
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${s3FileUrl+event.coverImage})`,
                }}
              ></div>
            </div>
          </div>
          <div className="py-8 border-b border-gray-300 last:border-0 md:flex md:justify-between">
            <div>
              <h6 className="font-medium text-xl sm:text-3xl mb-2">{event.name}</h6>
              <p className="text-gray-600 text-lg font-light">
                {event.hostingType === 'venue' ? event.venueAddress : event.hostingType}
              </p>
            </div>
          </div>
          <div className="md:hidden my-4">{/* <BuyTicketForm _id={event._id} /> */}</div>
          <div className="py-6 border-b border-gray-300 last:border-0">
            <h6 className="font-medium text-xl mb-6">Event Details</h6>
            <div className="grid grid-cols-2 mb-8">
              <div className="mb-2">
                <h6 className="text-primary">Starts In</h6>
                <p className="font-light">{time24To12(event.startingTime)}</p>
                <p className="font-light">{moment(event.startingDate).format('Do MMMM, YYYY')}</p>
              </div>
              <div className="mb-2">
                <h6 className="text-primary">Ends In</h6>
                <p className="font-light">{time24To12(event.endingTime)}</p>
                <p className="font-light">{moment(event.endingDate).format('Do MMMM, YYYY')}</p>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="mb-2">
                <h6 className="text-primary">Ticket Price</h6>
                {event.ticketType === 'paid' && event.price ? (
                  `${event.price} Taka`
                ) : (
                  <span className="text-green-500 font-semibold">FREE</span>
                )}
              </div>
              <div className="mb-2">
                <h6 className="text-primary">Guest Limit</h6>
                <p className="font-light">
                  <span>{event.quantity}</span>
                  {event.members > 0 && (
                    <span className="text-sm font-medium italic text-gray-500 ml-3">
                      {event.quantity - Number(event.members)} left!!
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-gray-300 last:border-0">
            <h6 className="font-medium text-xl mb-6">Description</h6>
            <p className="font-light">{event.description}</p>
          </div>
          <div className="py-6 border-b border-gray-300 last:border-0">
            <h6 className="font-medium text-xl mb-6">Terms And Conditions</h6>
            <p className="font-light">{event.termsConditions.length > 0 ? event.termsConditions : 'N/A'}</p>
          </div>
        </div>
        <div className="hidden md:block col-span-2">
          <BuyTicketForm _id={event._id} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const { data } = await Axios.get(`${server}events`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const events = data.data.map((event) => ({
    params: { url: event.url },
  }));

  return { paths: events, fallback: true };
}

export async function getStaticProps({ params }) {
  const { data } = await Axios.get(`${server}events/url/${params.url}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event: data.event },
    revalidate: 10,
  };
}

export default BookEventPage;
