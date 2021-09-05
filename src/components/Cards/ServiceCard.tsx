import React from 'react';
import Icon from '../shared/icons';
import { s3FileUrl } from '../../config';

interface Props {
  className?: string | undefined;
  service: any;
}

// const calculateConventionHallPrice = (conventionHall: IHomeServices['conventionHall']) => {
//   // check one pricing
//   if (conventionHall.places.length === 0) {
//     return <small className="font-semibold text-customGray-550">No places found</small>;
//   } else if (conventionHall.places.length === 1 && conventionHall.places[0].pricing.length === 1) {
//     return (
//       <div className="font-medium text-lg text-customGray-550">
//         <span className="font-bold text-primary">
//           {currencyFormat(conventionHall.places[0].pricing[0].price)} {conventionHall.places[0].pricing[0].currency}
//         </span>{' '}
//         / Day
//       </div>
//     );
//   }

//   let minValue: number = Infinity;
//   let maxValue: number = -Infinity;
//   const currency = conventionHall.places[0].pricing[0].currency;
//   for (const place of conventionHall.places) {
//     for (const iterator of place.pricing) {
//       // find minimum value
//       if (iterator.price < minValue) minValue = iterator.price;

//       // find maximum value
//       if (iterator.price > maxValue) maxValue = iterator.price;
//     }
//   }
//   return (
//     <div className="font-medium text-lg text-customGray-550">
//       <span className="font-bold text-primary">{`${currencyFormat(minValue)} ${currency} - ${currencyFormat(
//         maxValue,
//       )} ${currency}`}</span>{' '}
//       / Day
//     </div>
//   );
// };

export const ServiceCard: React.FC<Props> = ({ className = '', service }) => {
  return (
    <div className={className}>
      <div className="aspect-ratio--16x9">
        <div className="aspect-ratio__inner-wrapper overflow-hidden border rounded-md cursor-pointer transition duration-500 ease-in-out transform hover:scale-105">
          <img
            className="h-full w-full object-cover"
            // src={service.coverImages.length > 0 ? service.coverImages[0].url : card1}
            src={s3FileUrl + service.coverImage}
            alt={service.name}
          />
        </div>
      </div>
      <div className="py-2">
        <div className="flex justify-between font-medium text-lg">
          <h4>{service.name}</h4>
          <div className="flex items-center">
            <Icon name="star" className="h-6 fill-current text-primary" />
            <span className="ml-1">{service.avgRating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-gray-600">{service.address}</p>
        {/* <p className="text-gray-600">{city}</p> */}
        {/*  TODO: need to fix */}
        {/* {service.type === 'venue' ? (
          calculateConventionHallPrice(service.conventionHall)
        ) : (
          <div className="font-medium text-lg text-gray-700">N/A</div>
        )} */}
      </div>
    </div>
  );
};
