import moment from 'moment';
import React from 'react';
import Image from 'next/image';

import { eventTypesName } from '@/utils/index';
import { s3FileUrl } from '@/config/index';
import { imgLoader } from '@/utils/next';

interface Props {
  className?: string | undefined;
  event: any;
}

export const EventCard: React.FC<Props> = ({ event }) => {
  return (
    <div>
      <div className="aspect-ratio--16x9">
        <div className="aspect-ratio__inner-wrapper overflow-hidden border rounded-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
          <Image
            loader={imgLoader(s3FileUrl)}
            src={event.coverImage}
            alt="Picture of the author"
            width="1600"
            height="900"
            layout="responsive"
          />
        </div>
      </div>
      <div className="py-2">
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-lg">{event.name}</h2>
          <p className="ml-1 font-medium text-gray-600 text-xs">{moment(event.startingDate).format('Do MMM, YYYY')}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="italic text-gray-600 font-medium text-xs">{eventTypesName[event.type]}</p>
          <p className="capitalize text-primary font-semibold text-sm ml-1">{event.ticketType}</p>
        </div>
        <p className="font-medium text-gray-600 text-xs">
          {event.hostingType === 'venue' ? event.venueAddress : event.hostingType}
        </p>
      </div>
    </div>
  );
};
