/* eslint-disable @next/next/link-passhref */
import { IBookingNew } from '@/types/booking';
import moment from 'moment';
import React from 'react';
import Link from 'next/link';

import { time24To12 } from '../../../../utils';
interface Props {
  booking: IBookingNew;
}

export const SingleBookingList: React.FC<Props> = ({ booking }) => {
  const bookingHeading = (booking: any) => {
    if (booking.status === 'pending') {
      return (
        <h6 className="font-bold text-lg mb-4">{`You have requested for a booking on ${moment(
          booking.pricing.date,
        ).format('Do MMMM, YYYY')} for ${booking.typeOfEvent} place`}</h6>
      );
    } else if (booking.status === 'rejected') {
      return (
        <h6 className="font-bold text-lg mb-4">{` ${booking.service.name} has rejected your booking request on ${moment(
          booking.pricing.date,
        ).format('Do MMMM, YYYY')} for ${booking.typeOfEvent} place`}</h6>
      );
    } else if (booking.status === 'reserved') {
      return (
        <h6 className="font-bold text-lg mb-4">{`${booking.service.name} has accepted your booking request on ${moment(
          booking.pricing.date,
        ).format('Do MMMM, YYYY')} for ${booking.typeOfEvent} place`}</h6>
      );
    } else if (booking.status === 'paid') {
      return (
        <h6 className="font-bold text-lg mb-4">{`demo text on ${moment(booking.pricing.date).format(
          'Do MMMM, YYYY',
        )} for ${booking.typeOfEvent} place`}</h6>
      );
    } else if (booking.status === 'completed') {
      return <h6 className="font-bold text-lg mb-4">Your booking is completed</h6>;
    }
  };
  return (
    <div className="px-6 py-4 my-2 border-2 rounded-md hover:bg-gray-200 hover:shadow-lg transition duration-300 ease-in-out">
      <div className=" flex justify-between">
        {bookingHeading(booking)}
        {/* <div className="">
          <NavLink exact to={`/user/bookings/${booking._id}`}>
            <span className="text-primary text-base font-medium">Show More Detail </span>
          </NavLink>
        </div> */}
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex flex-col flex-wrap mb-2">
          <div className="flex flex-wrap -mx-4">
            <div className="mx-4">
              <h6 className="font-bold text-customGray-550">Services Details</h6>
              <div className="my-2">
                <h6 className="font-medium">Name</h6>
                {booking.service && <span>{booking.service.name}</span>}
                {/* <div>demo name</div> */}
              </div>
              <div className="my-2">
                <h6 className="font-medium">Date</h6>
                <span>{moment(booking.pricing.date).format('Do MMMM, YYYY')}</span>
              </div>
              <div className="my-2">
                <h6 className="font-medium">Time</h6>
                <span>
                  {time24To12(booking.pricing.startTime)}
                  {' - '}
                  {booking.pricing.endTime && time24To12(booking.pricing.endTime)}
                </span>
              </div>
              <div className="my-2">
                <h6 className="font-medium">Type</h6>
                <span>{booking.pricing.type}</span>
              </div>
            </div>
            <div className="mx-4">
              <h6 className="font-bold text-customGray-550">Price</h6>
              <div className="my-2">
                <h6 className="font-medium">Price</h6>
                <span>{booking.pricing.price}</span> <span>BDT</span>
              </div>
              {/* <div className="my-2">
                <h6 className="font-medium">Phone Number</h6>
                <span>{booking.account.contactNo}</span>
              </div>
              <div className="my-2">
                <h6 className="font-medium">Email</h6>
                <span>{booking.account.email}</span>
              </div> */}
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap justify-center sm:flex-col transition duration-300 ease-in-out mt-2 sm:mt-0"
          id="hover-target"
        >
          <div className="px-2 m-2 py-2 items-center text-center">
            <span
              className={`font-medium capitalize    ${
                booking.status === 'pending'
                  ? 'text-orange-500'
                  : booking.status === 'paid'
                  ? 'text-primary'
                  : booking.status === 'completed'
                  ? 'text-green-500'
                  : booking.status === 'rejected'
                  ? 'text-red-500'
                  : booking.status === 'canceled'
                  ? 'text-red-500'
                  : 'text-red-600'
              } `}
            >
              {booking.status}
            </span>
          </div>

          {booking.status === 'completed' && (
            <button className="text-white bg-primary px-5 py-2 rounded-md m-1">
              {/* <NavLink exact to={`/user/bookings/${booking._id}`}>
                <span className="font-sans font-semibold">Review</span>
              </NavLink> */}
              <Link href={`/user/bookings/${booking._id}`}>
                <a className="font-sans font-semibold">Review</a>
              </Link>
            </button>
          )}

          {booking.status === 'reserved' && (
            <button className="text-white bg-primary px-5 py-2 rounded-md m-1">
              {/* <NavLink exact to={`/user/bookings/${booking._id}`}>
                <span className="font-sans font-semibold">Pay</span>
              </NavLink> */}
              <Link href={`/user/bookings/${booking._id}`}>
                <a className="font-sans font-semibold">Pay</a>
              </Link>
            </button>
          )}

          <div className="mt-6">
            {/* <NavLink exact to={`/user/bookings/${booking._id}`}>
              <span className="text-primary text-base font-medium">Show More Detail </span>
            </NavLink> */}
            <Link href={`/user/bookings/${booking._id}`}>
              <a className="text-primary text-base font-medium">Show More Detail </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
