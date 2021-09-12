import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import { time24To12 } from '../../../utils';
import moment from 'moment';
// import logo from '../../../resources/logo.png';
// import logo from './resources/logo.png';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
import { s3FileUrl } from '../../../config';
import { useRouter } from 'next/router';

interface props {
  // TODO: Add ticket types
  ticket: any;
}

export const Ticket: React.FC<props> = ({ ticket }) => {
  const router = useRouter();
  const componentRef = useRef<HTMLDivElement>(null);
  const { customerDetail, slug, event } = ticket;

  return (
    <>
      <div className="hidden">
        {/* TODO: Design a print layout for Event's ticket */}

        <div ref={componentRef} className="flex flex-col justify-evenly items-center">
          {/* <img src="/resources/logo.png" alt="ayoojon-logo" className="h-12 mb-20 mt-6" /> */}
          <Image className="mb-20 mt-6" src="/resources/logo.png" alt="ayoojon-logo" width="70" height="120" />
          <div className="m-2 flex inline-block align-baseline border transition duration-500 ease-in-out rounded-lg my-6 relative">
            <div className="absolute right-0 mr-6 sm:mr-10 p-2 bg-primary text-white text-center">
              <p className="font-medium">{slug}</p>
            </div>
            <div className="flex-1 flex flex-col pb-6 pt-6 mx-6">
              <div className="flex-1">
                <div className="mb-5 mr-20">
                  <h2 className="text-xl font-bold">{event.name}</h2>
                  <p className="text-gray-600 text-sm">
                    {event.hostingType === 'venue' ? event.venueAddress : event.onlineLink}
                  </p>
                </div>
                <div className="mb-5">
                  <h2 className="font-semibold">`Buyer&apos;s Details`</h2>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="">
                      <h6 className="font-medium text-primary">Name</h6>
                      <p>{customerDetail.name}</p>
                    </div>
                    <div className="">
                      <h6 className="font-medium text-primary">Contact No.</h6>
                      <p>{customerDetail.contactNo}</p>
                    </div>
                    <div className="w-48 mb-2">
                      <h6 className="font-medium text-primary">Email</h6>
                      <p>{customerDetail.email}</p>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <h2 className="font-semibold">Event Details</h2>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="">
                      <h6 className="font-medium text-primary">Starts In</h6>
                      <p>{time24To12(event.startingTime)}</p>
                      <p>{moment(event.startingDate).format('Do MMMM, YYYY')}</p>
                    </div>
                    <div className="">
                      <h6 className="font-medium text-primary">Ends In</h6>
                      <p>{time24To12(event.endingTime)}</p>
                      <p>{moment(event.endingDate).format('Do MMMM, YYYY')}</p>
                    </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex border shadow-md hover:shadow-lg transition duration-500 ease-in-out rounded-lg my-6 relative">
        <div className="absolute right-0 mr-6 sm:mr-10 p-6 bg-primary text-white text-center">
          <p className="font-light">Ticket No.</p>
          <p className="font-medium text-xl">{slug}</p>
        </div>
        <div className="h-64 sm:h-xs sm:w-64 py-6 mx-6">
          {/* <img
            src={event.coverImage}
            alt={event.name}
            className="inline-block rounded-md border shadow-sm h-full w-full object-cover"
          /> */}
          <Image
            loader={imgLoader(s3FileUrl)}
            className="inline-block rounded-md border shadow-sm h-full w-full object-cover"
            src={event.coverImage}
            alt="location"
            width="560"
            height="640"
          />
        </div>
        <div className="sm:flex-1 sm:flex sm:flex-col pb-6 sm:pt-6 mx-6">
          <div className="sm:flex-1">
            <div className="mb-5 sm:mr-20">
              <h2 className="text-xl font-bold">{event.name}</h2>
              <p className="text-gray-600 text-sm">
                {event.hostingType === 'venue' ? event.venueAddress : event.onlineLink}
              </p>
            </div>
            <div className="mb-5">
              <h2 className="font-semibold">Buyer&apos;s Details</h2>
              <div className="grid grid-cols-3 gap-3 text-sm">
                <div className="">
                  <h6 className="font-medium text-primary">Name</h6>
                  <p>{customerDetail.name}</p>
                </div>
                <div className="">
                  <h6 className="font-medium text-primary">Contact No.</h6>
                  <p>{customerDetail.contactNo}</p>
                </div>
                <div className="w-48 mb-2">
                  <h6 className="font-medium text-primary">Email</h6>
                  <p>{customerDetail.email}</p>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <h2 className="font-semibold">Event Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                <div className="">
                  <h6 className="font-medium text-primary">Starts In</h6>
                  <p>{time24To12(event.startingTime)}</p>
                  <p>{moment(event.startingDate).format('Do MMMM, YYYY')}</p>
                </div>
                <div className="">
                  <h6 className="font-medium text-primary">Ends In</h6>
                  <p>{time24To12(event.endingTime)}</p>
                  <p>{moment(event.endingDate).format('Do MMMM, YYYY')}</p>
                </div>
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
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between sm:justify-end">
            <button
              onClick={() => router.push(`/events/${event.url}`)}
              className="text-primary font-semibold sm:px-5 py-2 rounded-md mr-3"
            >
              View Details
            </button>
            <ReactToPrint
              trigger={() => (
                <button className="text-primary font-semibold px-5 py-2 border border-primary rounded-md">
                  Download
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </div>
      </div>
    </>
  );
};
