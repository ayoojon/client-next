import Axios from 'axios';
import { GetStaticProps, NextPage } from 'next';
import React, { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Link } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';

import { s3FileUrl, server } from '@/config/index';
import { IEvent, IEventTicket } from '@/types/event';
import { time24To12, createMarkup } from '@/utils/index';
import Map from '@/components/shared/Map';
import AyoojonAccordion from '@/components/shared/Accordion';
import { useRouter } from 'next/router';
import { imgLoader } from '@/utils/next';
import SEO from '@/components/shared/SEO';

interface IEventData extends IEvent {
  members: number;
}

interface IData {
  isJoined: boolean;
  event: IEventData;
  tickets: IEventTicket[];
}

const EventPage: NextPage<IData> = ({ event, tickets, isJoined }: IData) => {
  const router = useRouter();
  const [showPrice, setShowPrice] = useState(false);

  const handleOnClickBuyTicket = async () => {
    setShowPrice(false);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-2">
      {/* TODO:  */}
      <SEO
        siteTitle={event.name}
        image={`${s3FileUrl}${event.coverImage}`}
      />
      <div className="max-w-6xl mx-auto px-6 my-8">
        <div className="relative rounded-md shadow-md overflow-hidden border">
          <Image
            loader={imgLoader(s3FileUrl)}
            src={`${event.coverImage}`}
            alt={`${event.name}`}
            layout="responsive"
            className="object-cover"
            width={900}
            height={400}
            priority
          />
        </div>
        <div className="py-6 border-b border-gray-300 last:border-0 md:flex md:justify-between">
          <div className="">
            <h6 className="font-medium text-xl sm:text-3xl">{event.name}</h6>
            <p className="text-gray-600">{event.hostingType === 'venue' ? event.venueAddress : event.hostingType}</p>
          </div>
          <div className="mt-3 md:mt-0 flex justify-between">
            {showPrice ? (
              <div className="w-64">
                <div className="flex justify-between items-center">
                  <h6 className="font-medium text-xl mb-3">Pricing</h6>
                  <IconButton
                    color="primary"
                    aria-label="hide price"
                    component="span"
                    onClick={() => setShowPrice(false)}
                  >
                    <CloseIcon color="error" />
                  </IconButton>
                </div>
                <div className="flex justify-between my-2">
                  <h6>Ticket Price</h6>
                  <p>{event.price || 0} BDT</p>
                </div>
                <div className="flex justify-between my-2">
                  <h6>Quantity</h6>
                  <p>1</p>
                </div>
                <div className="flex justify-between my-2">
                  <h6>Tax</h6>
                  <p>{event.price ? event.price : 0} BDT</p>
                </div>
                <div className="flex justify-between my-2 font-medium text-primary">
                  <h6>Total</h6>
                  <p>{event.price || 0} BDT</p>
                </div>
                <button
                  className="w-full text-white font-medium bg-primary border-2 border-primary rounded-md py-1 focus:outline-none"
                  onClick={handleOnClickBuyTicket}
                >
                  Buy Ticket
                </button>
              </div>
            ) : (
              <>
                <button className="text-primary font-medium py-1 w-20 m-1 focus:outline-none hover:bg-gray-100">
                  Share
                </button>
                {isJoined && (
                  <button className="cursor-not-allowed text-primary font-medium bg-teal-100 border-2 border-primary rounded-md py-1 w-32 m-1 focus:outline-none">
                    Joined
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 my-6">
          <div className="col-span-2">
            <div className="pb-6 border-b border-gray-300 last:border-0">
              <h6 className="font-medium text-xl mb-3">Event Details</h6>
              <div className="grid md:grid-cols-3">
                <div className="md:col-span-2">
                  <div className="flex flex-wrap sm:mb-3">
                    <div className="w-48 mb-2">
                      <h6 className="font-medium text-primary mb-2">Starts In</h6>
                      <p>{time24To12(event.startingTime)}</p>
                      <p>{moment(event.startingDate).format('Do MMMM, YYYY')}</p>
                    </div>
                    <div className="w-48 mb-2 ">
                      <h6 className="font-medium text-primary mb-2">Ends In</h6>
                      <p>{time24To12(event.endingTime)}</p>
                      <p>{moment(event.endingDate).format('Do MMMM, YYYY')}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-48 mb-2">
                      <h6 className="font-medium text-primary">Ticket Price</h6>
                      <p>
                        {event.ticketType === 'paid' && event.price ? (
                          `${event.price} BDT`
                        ) : (
                          <span className="text-green-500 font-semibold">FREE</span>
                        )}
                      </p>
                    </div>
                    <div className="w-48 mb-2 ">
                      <h6 className="font-medium text-primary">Guest Limit</h6>
                      <p>
                        <span>{event.quantity}</span>
                        {event.members > 0 && (
                          <span className="text-sm font-medium italic text-gray-500 ml-3">
                            {event.quantity - event.members} left!!
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1">
                  {isJoined && (
                    <div className="bg-gray-300 p-4 rounded">
                      <h3>Ticket Information</h3>
                      <p>
                        You have <span className="mr-1 ">{tickets.length}</span>
                        Ticket
                      </p>

                      {tickets.slice(0, 1).map(({ slug, customerDetail }) => (
                        <div className="my-3 text-teal-900" key={slug}>
                          {/* <h6>Ticket: {slug}</h6> */}
                          <p>Name: {customerDetail.name}</p>
                          <p>Number: {customerDetail.contactNo}</p>
                          <p>Email: {customerDetail.email}</p>
                        </div>
                      ))}
                      <Link href="/user/tickets">
                        <button className="text-white font-normal bg-primary rounded-md px-2 py-1">See More</button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-gray-300 last:border-0">
              <h6 className="font-medium text-xl mb-3">Description</h6>
              <div dangerouslySetInnerHTML={createMarkup(event.description)} />
            </div>
            <div className="py-6 border-b border-gray-300 last:border-0">
              <h6 className="font-medium text-xl mb-3">Terms And Conditions</h6>
              <div>
                {event.termsConditions.length > 0 ? (
                  <div dangerouslySetInnerHTML={createMarkup(event.termsConditions)} />
                ) : (
                  'N/A'
                )}
              </div>
            </div>
            {event.hostingType === 'venue' ? (
              <div className="py-6 border-b border-gray-300 last:border-0">
                <h6 className="font-medium text-xl mb-3">Location on Google Map</h6>
                <div className="h-[320px] border relative">
                  <Map
                    latitude={parseFloat(event?.venueLocation?.coordinates[1] as any)}
                    longitude={parseFloat(event?.venueLocation?.coordinates[0] as any)}
                  />
                </div>
              </div>
            ) : (
              ''
            )}
            <div className="py-6 border-b border-gray-300 last:border-0">
              <h6 className="font-medium text-xl mb-3">FAQ</h6>
              <div>
                {event.faq.length > 0
                  ? event.faq.map((faq) => <AyoojonAccordion key={faq._id} title={faq.question} body={faq.answer} />)
                  : 'N/A'}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 right-0 py-3 border-t border-gray-400 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex">
            <p className="text-primary font-medium text-lg">
              {event.ticketType === 'paid' ? `${event.price?.toFixed(2)} BDT` : 'FREE'}
            </p>
            <p className="text-gray-600 text-md ml-2">/ Ticket</p>
          </div>
          {event.quantity - event.members === 0 ? (
            <Link href={`/events/${event.url}/buy`}>
              <button
                disabled
                className="cursor-not-allowed text-white font-medium bg-customGray-450 rounded-md py-4 px-16"
              >
                Sold Out
              </button>
            </Link>
          ) : (
            <Link href={`/events/${event.url}/book`}>
              <button className="text-white font-medium bg-primary rounded-md py-4 px-16">Get Ticket</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const { data } = await Axios.get(`${server}events`);

    const events = data.data.map((event) => ({
      params: { url: event.url },
    }));

    return { paths: events, fallback: true };
  } catch (error) {
    return { paths: [], fallback: true };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data } = await Axios.get(`${server}events/url/${params.url}`);

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { event: data.event, tickets: data.tickets, isJoined: data.isJoined },

      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default EventPage;
