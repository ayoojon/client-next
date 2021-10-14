import React from 'react';
import Icon from '../shared/icons';
import { s3FileUrl } from '../../config';
import Image from 'next/image';
import { imgLoader } from '@/utils/next';
interface Props {
  className?: string | undefined;
  service: any;
}

export const ServiceCard: React.FC<Props> = ({ className = '', service }) => {
  return (
    <div className={className}>
      <div className="aspect-ratio--16x9">
        <div className="aspect-ratio__inner-wrapper overflow-hidden border rounded-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
          <Image
            loader={imgLoader(s3FileUrl)}
            src={service.coverImage ? service.coverImage : service.logo}
            alt="Picture of the author"
            width="1600"
            height="900"
            layout="responsive"
          />
        </div>
      </div>
      <div className="py-2">
        <div className="flex justify-between font-medium text-lg">
          <h4 className="text-black">{service.name}</h4>
          <div className="flex items-center">
            <Icon name="star" className="h-6 fill-current text-primary" />
            <span className="ml-1">{service.avgRating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-600">{service.address}</p>
      </div>
    </div>
  );
};
