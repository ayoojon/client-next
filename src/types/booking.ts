import { IService, serviceTypes } from './service';
import { IUser } from './user';

export type bookingTypes = 'normal' | 'custom';
export type bookingForTypes = 'personal' | 'business';
export type personalTypeOfEventsTypes =
  | 'weddingAndEngagement'
  | 'travelShoot'
  | 'kidsParty'
  | 'partyGathering'
  | 'pet'
  | 'graduation'
  | 'couplePhotoshoot'
  | 'otherLifeEvent'
  | 'portraits'
  | 'babyPhotoshoot'
  | 'others';
export type businessTypeOfEventsTypes =
  | 'workshop'
  | 'seminar'
  | 'concert'
  | 'reunion'
  | 'party'
  | 'conferences'
  | 'awardsAndCompetitions'
  | 'festivals'
  | 'tradeShowsAndExpos'
  | 'others';
export type bookingStatus = 'pending' | 'reserved' | 'rejected' | 'deposited' | 'paid' | 'completed' | 'canceled';

export interface IBooking {
  _id: string;
  account: Pick<IUser, '_id' | 'name' | 'email' | 'contactNo'>;
  service: { _id: string; name: string; email: string; contactNo: string };
  date: string;
  from: string;
  to: string;
  price: number;
  currency: 'BDT';
  bookingFor: bookingForTypes;
  typeOfEvent: personalTypeOfEventsTypes | businessTypeOfEventsTypes;
  additionalRequirements: string;
  status: bookingStatus;
  type: bookingTypes;
  typeOfService: serviceTypes;
  //   conventionHallBooking?: {
  //     _id: string;
  //     space: Pick<IConventionalHallPlaceAndPricing, '_id' | 'name' | 'placeType'>;
  //   };
  review?: string | Pick<IReview, '_id' | 'rating' | 'text' | 'createdAt'>;
  createdAt: Date;
  updatedAt: Date;
}

export interface IBookingNew {
  _id: string;
  // account: { _id: string; name: string; email: string; contactNo: string };
  account: Pick<IUser, '_id' | 'name' | 'email' | 'contactNo'>;
  service: { _id: string; name: string; placeDescription: string };
  additionalRequirements: string;
  bookingFor: bookingForTypes;
  pricing: {
    type: 'location' | 'package' | 'product';
    price: number;
    date: Date;
    startTime: string;
    endTime?: string;
    deliveryAddress?: string;
    location?: {
      type: IService['pricing']['location'][0]['type'];
      title: IService['pricing']['location'][0]['title'];
      capacity: IService['pricing']['location'][0]['capacity'];
      size: IService['pricing']['location'][0]['size'];
      session: IService['pricing']['location'][0]['sessions'][0];
    };
    package?: {
      title: IService['pricing']['package'][0]['title'];
      image: IService['pricing']['package'][0]['title'];
      price: IService['pricing']['package'][0]['price'];
    };
    product?: {
      minPrice: IService['pricing']['product']['minPrice'];
      minGuest: IService['pricing']['product']['minGuest'];
      items: {
        categoryTitle: IService['pricing']['product']['categories'][0]['title'];
        title: IService['pricing']['product']['categories'][0]['items'][0]['title'];
        image: IService['pricing']['product']['categories'][0]['items'][0]['image'];
        price: IService['pricing']['product']['categories'][0]['items'][0]['price'];
      }[];
      guestNo: number;
    };
  };
  status: bookingStatus;
  type: bookingTypes;
  typeOfEvent: personalTypeOfEventsTypes;
  review?: string | Pick<IReview, '_id' | 'rating' | 'text' | 'createdAt'>;
}
export interface IBookingNewDetails extends Omit<IBookingNew, 'account' | 'service'> {
  // service: { _id: string; name: string; email: string; pricing: IBookingNew['pricing'] };
  service: Pick<IService, '_id' | 'name' | 'email' | 'contactNo' | 'location' | 'paymentMethod'>;
}

export interface IOnProgressBooking {
  date: IBooking['date'];
  // ? venue
  spaceId?: string;
  pricingId?: string;
}

export interface IReview {
  _id: string;
  service: string;
  booking: string;
  rating: Number;
  text?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICreateBookingRating {
  service: string;
  booking: string;
  text?: string;
  rating: number;
}

export interface IActivity {
  _id: string;
  booking: {
    _id: string;
    service: { _id: string; name: string; logo: string };
    account: { _id: string; name: string; avatar?: string };
  };
  // booking: string;
  text: string;
  type: 'system' | 'service' | 'client';
  iconType?: 'pending' | 'reserved' | 'rejected' | 'paid' | 'booked' | 'completed' | 'canceled';
  createdAt: string;
}
export interface ICreateBookingActivity {
  booking: string;
  text: string;
  type: 'service' | 'client';
  service?: string;
}
